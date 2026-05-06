# Target Architecture

This document describes the planned target architecture for implementing DeFT in Noxim. It is based on `Extended_Proposal.pdf`, `Proposal.pdf`, and the original DeFT paper, with a local ignored copy at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.

`Extended_Proposal.pdf` is the primary project requirements source. The original DeFT paper is the primary algorithmic reference for DeFT routing, VN rules, and VL selection. `Proposal.pdf` is initial project context.

## Overall Project Goal

Planned: Extend the cycle-accurate Noxim simulator to model a 2.5D chiplet network and evaluate DeFT, a deadlock-free and fault-tolerant routing algorithm for inter-chiplet communication.

The implementation must evaluate DeFT against baseline XY routing using reachability, average latency, and network throughput under synthetic traffic and Vertical Link fault scenarios.

## 2.5D Chiplet Topology Model

Planned:

- Four CPU chiplets are integrated on an active interposer.
- Each chiplet contains a 4x4 2D mesh Network-on-Chip.
- Each chiplet has four bidirectional Vertical Links.
- Boundary routers connect chiplet-local meshes to the active interposer.
- Inter-chiplet traffic follows an up-down-up path through the interposer.
- Inter-chiplet routing uses two intermediate destinations: a selected source-side Vertical Link and a selected destination-side interposer or Vertical Link target.

Assumption: The exact active interposer mesh dimensions are not specified in the proposal. A conservative implementation should document the chosen mapping before coding.

## Chiplet Model

Planned:

- Each chiplet has a stable `chiplet_id`.
- Each chiplet owns 16 local routers arranged as a 4x4 mesh.
- Each local router is attached to a processing element that may generate traffic.
- Each chiplet has exactly four Vertical Links located at boundary routers.

## Active Interposer Model

Planned:

- The active interposer is modeled as a routing layer below the chiplets.
- Interposer routers carry traffic between chiplet footprints.
- Vertical Links connect chiplet boundary routers to interposer routers.

Assumption: Interposer routing can reuse mesh-style routing behavior unless Noxim integration requires a different representation.

## T0006 Router ID and Coordinate Mapping

This design records the planned 2.5D router identity model before topology implementation. It is documentation-only and does not implement DeFT behavior.

Source alignment:

- `Extended_Proposal.pdf` defines the target as four CPU chiplets on an active interposer, with each chiplet using a 4x4 2D mesh and four bidirectional Vertical Links per chiplet at local mesh boundaries.
- The original DeFT paper defines boundary routers as chiplet routers attached to Vertical Links, uses horizontal ports for the cardinal mesh directions, uses Down for chiplet-to-interposer movement, and uses Up for interposer-to-chiplet movement.
- The original DeFT paper states that four VLs are placed on chiplet borders for the baseline system. It also reports `total VLs=32` for the 4-chiplet evaluation, while the proposal states four bidirectional VLs per chiplet.

Assumption: The project will model 16 physical bidirectional Vertical Links, four per chiplet, and can derive 32 directional VL channels or endpoint directions when a later fault-accounting task needs to align with the paper's `total VLs=32` wording.

### Existing Noxim Grounding

Current Noxim mesh IDs are flat node IDs:

- `external/noxim/src/DataStructs.h` defines `Coord` with only `x` and `y`.
- `external/noxim/src/Utils.h` maps mesh IDs with `id = y * GlobalParams::mesh_dim_x + x`.
- `external/noxim/src/NoC.cpp::buildMesh()` creates one 2D mesh of `Tile` instances and assigns the same flat ID to each `Tile`, `Router`, and `ProcessingElement`.
- `external/noxim/src/Router.cpp::getNeighborId()` assumes one rectangular mesh and returns cardinal neighbors from `id2Coord()`.
- `external/noxim/src/routingAlgorithms/Routing_XY.cpp` routes by comparing only `id2Coord(current_id)` and `id2Coord(dst_id)`.
- `external/noxim/src/ProcessingElement.cpp` generates packet `src_id` and `dst_id` values in the existing node-ID space.

Design consequence: The 2.5D topology must not treat the four chiplets as one directly connected 8x8 chiplet-layer mesh. It needs a 2.5D-aware mapping helper that decodes IDs into layer, global footprint coordinate, chiplet ownership, and chiplet-local coordinate.

### Physical Floorplan

Planned constants for the initial target topology:

| Name | Value |
| --- | --- |
| Chiplet grid | 2 columns x 2 rows |
| Chiplet-local mesh | 4 x 4 routers |
| Global footprint | 8 x 8 positions |
| Chiplet routers | 64 |
| Active-interposer routers | 64 |
| Total routers | 128 |
| Physical bidirectional VLs | 16 |
| Directional VL channels/endpoints | 32 |

Chiplet placement is row-major:

| `chiplet_id` | Chiplet grid coordinate | Global footprint origin |
| --- | --- | --- |
| 0 | `(0,0)` | `(0,0)` |
| 1 | `(1,0)` | `(4,0)` |
| 2 | `(0,1)` | `(0,4)` |
| 3 | `(1,1)` | `(4,4)` |

### Router ID Ranges

Planned router ID ranges:

- Chiplet router IDs: `0..63`.
- Interposer router IDs: `64..127`.
- Packet source and final destination IDs remain chiplet router IDs only.
- Interposer routers are internal transit routers and must not be selected by synthetic traffic generation as packet sources or final destinations.

Global footprint index:

```text
footprint_x = 0..7
footprint_y = 0..7
footprint_index = footprint_y * 8 + footprint_x
```

Chiplet router ID:

```text
chiplet_router_id = footprint_index
```

Interposer router ID:

```text
interposer_router_id = 64 + footprint_index
```

This keeps the existing row-major mesh intuition for `Coord(x,y)` while using a layer bit encoded by the ID range. A chiplet router and the interposer router directly below the same footprint position share the same `footprint_index`.

### Chiplet Ownership and Local Coordinates

For any chiplet router ID `id` in `0..63`:

```text
footprint_x = id % 8
footprint_y = id / 8
chiplet_x = footprint_x / 4
chiplet_y = footprint_y / 4
chiplet_id = chiplet_y * 2 + chiplet_x
local_x = footprint_x % 4
local_y = footprint_y % 4
local_router_index = local_y * 4 + local_x
```

For any interposer router ID `id` in `64..127`:

```text
footprint_index = id - 64
footprint_x = footprint_index % 8
footprint_y = footprint_index / 8
chiplet_x = footprint_x / 4
chiplet_y = footprint_y / 4
chiplet_id_under_footprint = chiplet_y * 2 + chiplet_x
```

`chiplet_id_under_footprint` is physical floorplan metadata for interposer routers. It does not mean the interposer router is owned by that chiplet.

### Boundary Router Slots

Each chiplet has four VL slots, one per border. The slot names are local to each chiplet:

| `vl_slot` | Name | Local boundary router coordinate |
| --- | --- | --- |
| 0 | `NORTH` | `(1,0)` |
| 1 | `EAST` | `(3,1)` |
| 2 | `SOUTH` | `(2,3)` |
| 3 | `WEST` | `(0,2)` |

Assumption: A 4x4 mesh has no single centered router on an edge. The initial boundary-slot coordinates choose near-center, non-corner border routers and form a rotationally symmetric pattern: `(1,0) -> (3,1) -> (2,3) -> (0,2)`.

Boundary router ID for a slot:

```text
origin_x = (chiplet_id % 2) * 4
origin_y = (chiplet_id / 2) * 4
boundary_footprint_x = origin_x + slot_local_x
boundary_footprint_y = origin_y + slot_local_y
boundary_router_id = boundary_footprint_y * 8 + boundary_footprint_x
```

### Vertical Link Endpoint Mapping

Physical bidirectional VL ID:

```text
vl_id = chiplet_id * 4 + vl_slot
```

Each `vl_id` has:

- `owner_chiplet_id`: `chiplet_id`.
- `chiplet_endpoint_router_id`: the boundary router ID.
- `interposer_endpoint_router_id`: `64 + boundary_router_id`.
- `slot`: one of `NORTH`, `EAST`, `SOUTH`, `WEST`.
- `is_functional`: future fault-state field, default true.

Canonical VL endpoint table:

| `vl_id` | Chiplet | Slot | Boundary router ID | Boundary footprint | Interposer endpoint ID |
| --- | --- | --- | --- | --- | --- |
| 0 | 0 | `NORTH` | 1 | `(1,0)` | 65 |
| 1 | 0 | `EAST` | 11 | `(3,1)` | 75 |
| 2 | 0 | `SOUTH` | 26 | `(2,3)` | 90 |
| 3 | 0 | `WEST` | 16 | `(0,2)` | 80 |
| 4 | 1 | `NORTH` | 5 | `(5,0)` | 69 |
| 5 | 1 | `EAST` | 15 | `(7,1)` | 79 |
| 6 | 1 | `SOUTH` | 30 | `(6,3)` | 94 |
| 7 | 1 | `WEST` | 20 | `(4,2)` | 84 |
| 8 | 2 | `NORTH` | 33 | `(1,4)` | 97 |
| 9 | 2 | `EAST` | 43 | `(3,5)` | 107 |
| 10 | 2 | `SOUTH` | 58 | `(2,7)` | 122 |
| 11 | 2 | `WEST` | 48 | `(0,6)` | 112 |
| 12 | 3 | `NORTH` | 37 | `(5,4)` | 101 |
| 13 | 3 | `EAST` | 47 | `(7,5)` | 111 |
| 14 | 3 | `SOUTH` | 62 | `(6,7)` | 126 |
| 15 | 3 | `WEST` | 52 | `(4,6)` | 116 |

### Topology Graph Rules

The ID mapping does not by itself define connectivity. Future topology construction should create links according to these graph rules:

- Chiplet-layer cardinal links connect only routers with the same `chiplet_id` and adjacent `local_x/local_y`.
- Chiplet-layer cardinal links must not connect across chiplet boundaries even when global footprint coordinates are adjacent.
- Interposer-layer cardinal links connect adjacent active-interposer routers over the full 8x8 footprint.
- A Vertical Link connects exactly one chiplet boundary router to exactly one interposer router at the same footprint coordinate.
- Each physical VL should be represented as bidirectional connectivity, with separate directional accounting available for later fault-rate work.

### Required Mapping Helper Surface

Future code should introduce a small 2.5D mapping helper instead of scattering ID arithmetic through routing logic. The helper should expose at least:

- `isChipletRouter(id)`.
- `isInterposerRouter(id)`.
- `decodeRouterId(id)` returning layer, router category, footprint coordinate, chiplet ownership when applicable, and chiplet-local coordinate when applicable.
- `chipletRouterId(chiplet_id, local_x, local_y)`.
- `interposerRouterId(footprint_x, footprint_y)`.
- `isBoundaryRouter(id)`.
- `verticalLinksForChiplet(chiplet_id)`.
- `verticalLinkForBoundaryRouter(id)`.
- `interposerEndpointForVerticalLink(vl_id)`.

Assumption: The helper can initially be implemented as deterministic static functions or a small immutable topology-map object built during `NoC` construction. The implementation choice should be made in `T0007` after inspecting the smallest safe integration point.

Blocked: The final physical port encoding for Up and Down movement was not decided in `T0006`. Existing Noxim has `DIRECTION_NORTH`, `DIRECTION_EAST`, `DIRECTION_SOUTH`, `DIRECTION_WEST`, `DIRECTION_LOCAL`, and `DIRECTION_HUB`, but no explicit `DIRECTION_UP` or `DIRECTION_DOWN`. `T0007` uses `DIRECTION_HUB` only as a temporary topology-construction carrier; final DeFT Up/Down semantics remain a future routing/VN decision.

## T0007 2.5D Topology Construction Implementation

`T0007` adds the first source implementation of the T0006 topology shape. It does not implement DeFT routing behavior, VN assignment behavior, VN transition restrictions, VL fault injection behavior, VL LUT generation, experiment automation, golden regression updates, or DeFT evaluation metrics.

Implemented source surface:

- `external/noxim/src/DeftTopology.h` and `external/noxim/src/DeftTopology.cpp` define the layer-aware helper surface for router ID decoding, chiplet router IDs, interposer router IDs, boundary-router detection, and deterministic VL endpoint lookup.
- `external/noxim/src/GlobalParams.h` adds the selectable topology name `DEFT_2_5D`.
- `external/noxim/src/ConfigurationManager.cpp` accepts `DEFT_2_5D`, fixes the topology footprint to 8x8, sets the chiplet IP count to 64, and rejects Winoc hub mode for this topology in T0007.
- `external/noxim/src/NoC.h` and `external/noxim/src/NoC.cpp` add `NoC::buildDeft2D()`.
- `external/noxim/src/Router.cpp` disables buffers for disconnected ports in the constructed `DEFT_2_5D` graph.
- `external/noxim/src/Utils.h`, `external/noxim/src/Main.cpp`, and `external/noxim/src/GlobalStats.cpp` add minimal topology-aware compatibility so the construction-only smoke configuration can instantiate and exit cleanly.

Constructed graph:

- Chiplet routers: 64, with IDs `0..63`.
- Interposer routers: 64, with IDs `64..127`.
- Total routers: 128.
- Chiplet-local cardinal links: 96 physical bidirectional links across four isolated 4x4 meshes.
- Interposer cardinal links: 112 physical bidirectional links across one 8x8 active-interposer mesh.
- Vertical Links: 16 physical bidirectional links, using the T0006 endpoint table.

Assumption: `DIRECTION_HUB` is used in T0007 only as a topology-construction carrier for each bidirectional chiplet-to-interposer VL. This is a temporary physical wiring choice so Noxim can instantiate the graph without increasing `DIRECTIONS` or changing existing router port arrays.

Blocked: Explicit DeFT `Up` and `Down` movement semantics remain undecided. Future routing tasks must not treat the T0007 use of `DIRECTION_HUB` as the final DeFT movement-model decision without rechecking the original paper and the VN-transition rules.

Inspectability:

- `external/noxim/config_examples/deft_2_5d_topology.yaml` is a construction-only configuration.
- `external/noxim/config_examples/deft_2_5d_no_traffic.txt` prevents packet generation during construction smoke runs.
- The topology builder prints the router/link counts and all 16 VL endpoint records at startup.

## T0008 Vertical Link Data Model Implementation

`T0008` extends the T0007 `DeftTopology` helper into the first centralized Vertical Link model/query surface. It does not implement startup-time fault injection behavior, fault-mask generation, fault-rate configuration, DeFT routing behavior, VN assignment behavior, VN transition restrictions, VL LUT generation, experiment automation, metrics changes, golden regression updates, or route-selection behavior.

Implemented source surface:

- `external/noxim/src/DeftTopology.h` and `external/noxim/src/DeftTopology.cpp` keep the deterministic 16 physical bidirectional VL records as the source of truth for VL identity and endpoints.
- Each `VerticalLinkInfo` record represents one physical bidirectional VL with stable `vl_id`, `owner_chiplet_id`, `slot`, `chiplet_endpoint_router_id`, `interposer_endpoint_router_id`, footprint coordinate, and mutable `is_functional` state.
- `DeftTopology::resetVerticalLinkStates()` restores every VL to the default functional state.
- `DeftTopology::setVerticalLinkFunctional(vl_id, is_functional)` mutates only the central model state and returns whether the requested VL ID existed.
- `DeftTopology::isVerticalLinkFunctional(vl_id)`, `functionalVerticalLinksForChiplet(chiplet_id)`, and `hasFunctionalVerticalLinkForChiplet(chiplet_id)` provide the minimal routing/fault-manager query contract needed by later tasks.
- `DeftTopology::verticalLinkBetweenRouters(router_a_id, router_b_id)`, `chipletEndpointForVerticalLink(vl_id)`, and the existing endpoint queries make physical VLs inspectable from either endpoint direction.
- `DeftTopology::validateVerticalLinkModel(error_message)` validates stable IDs, chiplet ownership, slot mapping, unique chiplet endpoints, unique interposer endpoints, same-footprint endpoint pairing, and exactly four VLs per chiplet.
- `NoC::buildDeft2D()` validates the VL model before wiring the physical links and prints the default functional state for each startup endpoint record.

Assumption: A Vertical Link remains modeled as one physical bidirectional connection with one functional/faulty state. If a later fault-accounting task needs directional failure states to match the paper's `total VLs=32` wording, it should add a derived directional view without replacing the physical VL identity model.

Assumption: `validateVerticalLinkModel()` is structural validation for the VL inventory. Fault-mask validation is handled separately by the T0011 fault-mask validator in `DeftFaultInjectionManager`.

Blocked: No explicit `DIRECTION_UP` or `DIRECTION_DOWN` routing semantics exist yet. T0008 intentionally does not use VL functional state to alter link construction, routing, or packet movement.

## T0009 Boundary Router Identification Implementation

`T0009` formalizes the boundary-router query surface needed by future DeFT routing and VN tasks. It does not implement startup-time fault injection behavior, fault-mask generation, fault-rate configuration, DeFT routing behavior, route selection, VN assignment behavior, VN transition restrictions, VL LUT generation, experiment automation, metrics changes, golden regression updates, or route-selection behavior.

Implemented source surface:

- `external/noxim/src/DeftTopology.h` and `external/noxim/src/DeftTopology.cpp` define `BoundaryRouterInfo` as a derived view over the centralized Vertical Link model rather than a second endpoint table.
- Each `BoundaryRouterInfo` record exposes stable `router_id`, `owner_chiplet_id`, chiplet-local coordinate, VL slot, attached `vertical_link_id`, and attached `interposer_endpoint_router_id`.
- `DeftTopology::boundaryRouters()` returns the deterministic 16-entry boundary-router inventory.
- `DeftTopology::boundaryRoutersForChiplet(chiplet_id)` returns the four boundary routers owned by a chiplet.
- `DeftTopology::boundaryRouterById(router_id)` and `DeftTopology::boundaryRouterForVerticalLink(vl_id)` provide routing-facing lookup by router ID or attached VL ID.
- `DeftTopology::validateBoundaryRouterModel(error_message)` validates that the boundary-router inventory is structurally consistent with the centralized VL inventory, has unique router IDs and VL IDs, preserves chiplet ownership/local coordinates/slots, and has exactly four boundary routers per chiplet.
- `NoC::buildDeft2D()` validates the boundary-router model before wiring VLs and prints the 16 boundary-router records during construction smoke runs.

Assumption: Boundary-router identity is a derived view of the physical VL inventory. Future routing, VN, fault-injection, and LUT tasks should reuse this query surface instead of introducing a parallel boundary-router table.

Blocked: No explicit `DIRECTION_UP` or `DIRECTION_DOWN` routing semantics exist yet. T0009 intentionally does not use boundary-router identity to alter link construction, routing, or packet movement.

## T0010 Fault Injection Manager Implementation

`T0010` adds the first centralized startup-time permanent Vertical Link fault injection manager. It does not implement DeFT routing behavior, route selection, VN assignment behavior, VN transition restrictions, VL LUT generation, experiment automation, metrics changes, golden regression updates, or DeFT experiment logic.

Implemented source surface:

- `external/noxim/src/DeftFaultInjectionManager.h` and `external/noxim/src/DeftFaultInjectionManager.cpp` define the fault manager.
- The manager resets all VLs to functional, selects the requested permanent faulty physical VLs, marks them faulty through `DeftTopology::setVerticalLinkFunctional()`, and exposes scan-based inspectability helpers over the centralized VL model.
- Configuration is added through `GlobalParams` and `ConfigurationManager`:
  - `deft_faulty_vertical_links`: explicit physical VL IDs to mark faulty.
  - `deft_vl_fault_count`: seed-controlled random physical VL fault count.
- The two fault-selection modes are mutually exclusive. Random selection uses `GlobalParams::rnd_generator_seed` with a local deterministic generator, so startup fault selection does not consume Noxim's global traffic PRNG state.
- The minimum T0010 guard rejects out-of-range or duplicate fault IDs, rejects incompatible configuration, caps random fault count so at least one VL can remain per chiplet, and rejects any applied mask that fully disconnects a chiplet.
- `NoC::buildDeft2D()` applies startup fault state after structural VL validation and before the construction smoke output is printed.
- Construction output now prints the fault-injection mode, seed, requested fault count, selected faulty VL IDs, and functional VL count per chiplet.

Assumption: T0010 counts configured faults over the current 16 physical bidirectional Vertical Links. Percentage/rate conversion and any directional VL accounting remain future work.

Assumption: In T0010, physical VL wiring is still constructed for all VLs. Fault state is startup metadata for future routing and LUT tasks; route selection does not yet exclude faulty VLs.

Blocked: Explicit DeFT `Up` and `Down` movement semantics remain future work.

## T0011 Fault Mask Validation Implementation

`T0011` adds the focused fault-mask validation layer on top of the T0010 startup fault manager. It does not implement DeFT routing behavior, route selection, VN assignment behavior, VN transition restrictions, VL LUT generation, experiment automation, metrics changes, golden regression updates, or DeFT experiment logic.

Implemented source surface:

- `external/noxim/src/DeftFaultInjectionManager.h` and `external/noxim/src/DeftFaultInjectionManager.cpp` expose `DeftFaultInjection::validateFaultMask()` and `FaultMaskValidationReport`.
- The validator normalizes explicit and generated masks by sorting physical VL IDs before application.
- The validator rejects duplicate, out-of-range, or missing physical VL IDs against the centralized `DeftTopology` physical VL model.
- The validator rejects masks with more faults than can preserve at least one functional physical VL per chiplet.
- The validator reports per-chiplet faulty and functional VL counts and rejects any mask that leaves a chiplet with zero functional physical VLs.
- `DeftFaultInjection::applyStartupFaults()` now validates explicit and generated masks through the same helper before mutating `DeftTopology` functional state.
- `NoC::buildDeft2D()` exits cleanly for invalid fault masks and prints mask-validation inspectability output during construction smokes.

Assumption: T0011 validates masks against the current 16 physical bidirectional Vertical Link IDs. Under this current physical model, the 25% validation target is four faulty physical VLs out of 16.

Assumption: The `current_physical_25_percent_target` output is an inspectability flag for the current physical model only. It does not add percentage-based configuration and does not resolve the proposal/paper ambiguity around directional VL accounting.

Blocked: Directional fault accounting and final percentage-to-mask conversion remain future experiment-automation work.

## Router Model

Planned router categories:

- Chiplet router: router inside a chiplet-local mesh.
- Boundary router: chiplet router directly attached to a Vertical Link.
- Interposer router: router on the active interposer layer.

Router metadata should support:

- Router ID.
- Layer-aware coordinates.
- Router category.
- Chiplet ownership when applicable.
- Boundary router status.
- Attached Vertical Link IDs when applicable.

## Boundary Router Concept

Planned:

- Boundary routers are the interface between intra-chiplet routing and interposer routing.
- Boundary routers read VL selection lookup tables for inter-chiplet traffic.
- Boundary routers participate in DeFT VN reassignment rules.
- Boundary routers are the primary integration point for source-chiplet exit selection and destination-chiplet entry behavior.

## Vertical Link Concept

Implemented foundation:

- A Vertical Link connects one chiplet boundary router to one active interposer router.
- Each Vertical Link has a stable ID.
- Each Vertical Link belongs to exactly one chiplet.
- Vertical Links are bidirectional in the system model.
- Vertical Links have centralized mutable functional state, defaulting to functional.
- Future fault injection can mark Vertical Links functional or faulty through the centralized model.
- DeFT deadlock-freedom must not depend on restricting Vertical Link choices.

Assumption: Faults are represented at the Vertical Link level unless later code inspection requires directional link fault states.

## Fault Injection Manager

Implemented foundation:

- Runs before the first simulation cycle.
- Reads explicit physical VL fault IDs or a seed-controlled physical VL fault count.
- Selects permanent faulty Vertical Links using the centralized VL model.
- Validates explicit and generated masks against the centralized physical VL model before mutating fault state.
- Ensures at least one functional Vertical Link remains per chiplet.
- Exposes current fault state through `DeftTopology` query helpers and `DeftFaultInjectionManager` scan helpers.
- Exposes normalized mask inspectability including physical fault count, per-chiplet fault counts, per-chiplet functional counts, and whether a mask matches the current physical 25% target.

Planned future work:

- Convert experiment fault percentages into masks after the physical-vs-directional accounting ambiguity is resolved.
- Make DeFT route selection and LUT lookup exclude faulty Vertical Links.

Assumption: Faults model permanent microbump or Vertical Link defects, not transient failures.

## DeFT Routing Pipeline

Planned high-level pipeline:

1. Classify packet as intra-chiplet or inter-chiplet.
2. Use XY routing for intra-chiplet traffic.
3. For inter-chiplet traffic, assign or preserve VN state according to DeFT rules.
4. At source-side boundary routers, select an exit Vertical Link using the VL LUT and current fault state.
5. Route downward to the active interposer.
6. Route horizontally through the active interposer.
7. Select and use a functional destination-side Vertical Link.
8. Route upward into the destination chiplet.
9. Route locally to the destination processing element.

## VN.0 / VN.1 Assignment Rules

Planned:

- If the current router is the source:
  - If the source is in the interposer, destination chiplet, or boundary set, use round-robin assignment between VN.0 and VN.1.
  - If the destination is on a different chiplet, assign VN.0.
- If the current router is a boundary router:
  - If the packet is going to the interposer, use round-robin reassignment between VN.0 and VN.1.
  - If the packet is coming from the interposer, go to or remain in VN.1.
- Otherwise, preserve the previously assigned VN.

Assumption: The exact interpretation of "source in destination chiplet or boundaries" must be mapped carefully to Noxim packet and router metadata during implementation.

Paper alignment note: The original DeFT paper also states that intra-chiplet packets may use both VNs because they do not use vertical ports.

## VN Transition Restrictions

Planned:

- VN.1 to VN.0 transition is forbidden.
- Up-to-Horizontal movement in VN.0 is forbidden.
- Horizontal-to-Down movement in VN.1 is forbidden.
- The implementation must preserve exactly two VCs: one for VN.0 and one for VN.1.

These restrictions are high risk because they are central to the deadlock-freedom guarantee.

## Offline VL Selection LUT

Planned:

- Lookup tables are generated offline and loaded during simulator initialization.
- Boundary routers query the LUT using current fault state and routing context.
- Each inter-chiplet packet needs two VL-related selections: one on the source chiplet toward the interposer and one on the interposer or destination side toward the destination chiplet.
- The generator evaluates candidate Vertical Link assignments and minimizes a cost function combining:
  - Manhattan distance from router to Vertical Link.
  - Load imbalance across functional Vertical Links.
- The proposal uses a weighting coefficient `rho = 0.01`.

Assumption: A practical LUT key should include at least fault state, source chiplet, source router, and destination chiplet. The exact schema should be decided before implementation.

Assumption: The implementation should support the original paper's intended model of offline analysis with runtime lookup under observed fault state.

## Synthetic Traffic Models

Planned:

- Uniform: packets are distributed uniformly across destination nodes.
- Localized: 40% of generated packets remain within the same source chiplet.
- Hotspot: 3 hotspot nodes receive additional directed traffic with 10% injection rate.

## Fault Scenarios

Planned:

- Static Vertical Link faults injected at simulation startup.
- Fault rates up to 25%.
- No chiplet may be completely disconnected from the interposer.
- Current implementation validates masks over 16 physical bidirectional VL IDs and flags four faulty physical VLs as the current physical 25% target.

Assumption: The proposal contains ambiguity around whether percentages are counted over physical bidirectional Vertical Links or directional links. The original paper reports 32 total Vertical Links for the four-chiplet fault analysis, which suggests directional or endpoint-level counting. This must be resolved before final experiment automation.

## Evaluation Metrics

### Reachability

Planned: Ratio of successfully delivered packets to total injected packets.

### Average Latency

Planned: Average cycles from packet injection at source processing element to delivery at destination processing element, including buffering and router pipeline delays.

### Network Throughput

Planned: Delivered flits per cycle per active IP node, measured consistently across baseline XY and DeFT runs.

## Baseline Comparison with XY Routing

Planned:

- XY routing in a fault-free topology establishes the upper-bound reference.
- XY routing with injected faults demonstrates baseline degradation, failures, or deadlock behavior.
- DeFT runs use the same traffic and fault scenarios for fair comparison.

## Noxim Extension Point Map

Recorded during `T0005` from the registered source tree at `external/noxim`. This map identifies existing Noxim extension surfaces only; it does not implement or change DeFT behavior.

### Configuration and Global State

- `external/noxim/src/ConfigurationManager.cpp` loads the main YAML configuration and power YAML, applies command-line overrides, and validates the resulting `GlobalParams` values. The load order is YAML first, CLI overrides second, then `checkConfiguration()`.
- `external/noxim/src/ConfigurationManager.h` defines YAML conversions for hub, radio-channel, and power-model structures.
- `external/noxim/src/GlobalParams.h` and `external/noxim/src/GlobalParams.cpp` define global simulator options, including topology names, traffic distribution names, routing and selection names, mesh dimensions, virtual-channel count, trace/stat export settings, hub/channel configuration, and power configuration.
- Future configuration options should be added through `ConfigurationManager` and `GlobalParams` so they can be selected from YAML and, when needed, command-line overrides.

### Simulation Control

- `external/noxim/src/Main.cpp` contains `sc_main()`. It calls `configure()`, configures logging, constructs `NoC`, binds clock/reset, optionally registers VCD traces, runs reset and simulation phases with `sc_start()`, prints final `GlobalStats`, optionally exports stats, and shuts down logging.
- `GlobalParams::rnd_generator_seed` is applied with `srand()` after reset is asserted and before the main simulation run.
- Simulation-control parameters include `reset_time`, `simulation_time`, `clock_period_ps`, `stats_warm_up_time`, `stats_format`, `stats_file`, `trace_mode`, `trace_filename`, and `trace_scope`.

### Topology Construction

- `external/noxim/src/NoC.h` dispatches topology construction from the `NoC` constructor using `GlobalParams::topology`.
- `external/noxim/src/NoC.cpp` owns topology builders: `buildMesh()`, `buildButterfly()`, `buildBaseline()`, and `buildOmega()`. Mesh construction creates `Tile` instances, configures each router, assigns each PE `local_id`, connects signals, loads routing or traffic tables when selected, and binds unused boundary signals to safe defaults.
- `external/noxim/src/Tile.h` instantiates and wires each `Router` and `ProcessingElement`.
- `external/noxim/src/Router.h` defines router ports as four cardinal mesh directions plus local and wireless hub ports. Direction constants are declared in `external/noxim/src/GlobalParams.h`.
- `external/noxim/src/NoC.cpp::searchNode()` maps node IDs back to `Tile` instances for stats and routing-table support.

### Routing Algorithms

- `external/noxim/src/Router.cpp` is the routing pipeline owner. `txProcess()` prepares `RouteData`; `route()` calls `routingFunction()` and then `selectionFunction()`; `routingFunction()` handles optional WiNoC routing before delegating wired routing to the selected `RoutingAlgorithm`.
- `external/noxim/src/routingAlgorithms/RoutingAlgorithm.h` is the routing interface: implementations return candidate output directions from `route(Router*, const RouteData&)`.
- `external/noxim/src/routingAlgorithms/RoutingAlgorithms.h` and `.cpp` provide the routing registry keyed by strings such as `XY`, `WEST_FIRST`, `NORTH_LAST`, `NEGATIVE_FIRST`, `ODD_EVEN`, `DYAD`, `DELTA`, and `TABLE_BASED`.
- Individual routing implementations live in `external/noxim/src/routingAlgorithms/Routing_*.cpp` and self-register through `RoutingAlgorithmsRegister`.
- `external/noxim/src/GlobalRoutingTable.*`, `external/noxim/src/LocalRoutingTable.*`, and `external/noxim/src/routingAlgorithms/Routing_TABLE_BASED.*` provide the table-based routing hook.

### Selection Strategies

- `external/noxim/src/Router.cpp::selectionFunction()` returns the only candidate direction directly, or delegates multiple candidates to the active `SelectionStrategy`.
- `external/noxim/src/selectionStrategies/SelectionStrategy.h` is the selection interface with `apply()` and `perCycleUpdate()`.
- `external/noxim/src/selectionStrategies/SelectionStrategies.h` and `.cpp` provide the selection registry keyed by strings such as `RANDOM`, `BUFFER_LEVEL`, and `NOP`.
- Individual selection implementations live in `external/noxim/src/selectionStrategies/Selection_*.cpp` and self-register through `SelectionStrategiesRegister`.

### Traffic Generation

- `external/noxim/src/ProcessingElement.cpp` owns packet injection. `txProcess()` attempts injection, `canShot()` decides whether a packet is generated, and traffic helpers implement random, transpose, bit-reversal, shuffle, butterfly, local, and ulocal traffic.
- `TRAFFIC_TABLE_BASED` uses `external/noxim/src/GlobalTrafficTable.*`, loaded by `NoC::buildCommon()` and consumed by each PE.
- `TRAFFIC_HARDCODED` uses `external/noxim/src/GlobalTrafficHardcoding.*`, loaded by `NoC::buildCommon()` and consumed cycle-by-cycle by each PE.
- Hotspot behavior is represented through `GlobalParams::hotspots` and is used by the random traffic path.

### Statistics and Power Reporting

- `external/noxim/src/Stats.*` records per-router received flits, received packets, delay, throughput, and communication energy.
- `external/noxim/src/GlobalStats.*` aggregates router and hub statistics, prints final text summaries, exports optional CSV or JSON summaries, prints optional buffer stats, and aggregates dynamic/static power.
- `external/noxim/src/Power.*` owns router, link, hub, buffer, routing, selection, wireless, and static/dynamic power accounting. Power parameters are loaded from `external/noxim/bin/power.yaml`.

### Logging, Tracing, Regression, and Explorer Hooks

- `external/noxim/src/Logger.*` implements configurable log levels and component filtering.
- `external/noxim/src/Main.cpp` registers VCD traces by scope: `basic`, `router`, `buffers`, `wireless`, or `all`.
- `external/noxim/src/Utils.h` defines `sc_trace()` helpers for `Flit`, `NoP_data`, `TBufferFullStatus`, and channel status structures.
- `external/noxim/visualNoxim` runs a traced mesh simulation and invokes `external/noxim/other/noxim_trace_viewer.py` to generate a local HTML cycle viewer from VCD output.
- `external/noxim/regression.sh` runs deterministic regression cases from `external/noxim/other/regression/cases.txt`, uses pinned YAML files under `external/noxim/other/regression/configs`, compares normalized summaries against `external/noxim/other/regression/expected`, and writes scratch output under `external/noxim/other/regression/generated`.
- `external/noxim/other/noxim_explorer.cpp` and `external/noxim/other/noxim_explorer_fname.cpp` are legacy experiment-space exploration helpers that launch Noxim, parse summary metrics, and emit MATLAB-oriented output.

## T0005 Implementation Guidance

Assumption: Future DeFT work should use these existing Noxim surfaces instead of modifying unrelated simulator behavior:

- Topology and 2.5D coordinate work should start from `NoC`, `Tile`, `Router`, and `GlobalParams` topology configuration.
- DeFT route selection should be introduced as a new registered routing algorithm unless a later design task proves that a smaller integration point is safer.
- DeFT VL choice should use the existing selection/routing boundary deliberately; if VL choice is not a pure output-port tie-breaker, it belongs in routing or a DeFT-specific helper called by routing.
- VN state and transition rules must be checked against `DataStructs`, `Router`, and the configured `n_virtual_channels` before implementation.
