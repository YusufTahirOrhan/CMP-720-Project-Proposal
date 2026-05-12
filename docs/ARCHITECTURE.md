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

## T0012 VN State Representation Design

`T0012` records the smallest safe VN.0/VN.1 state representation before implementing assignment or transition-restriction behavior. It is documentation-only and does not change Noxim source, simulator behavior, configuration behavior, route selection, VL selection, metrics, experiment automation, or golden outputs.

Source alignment:

- `Extended_Proposal.pdf` requires DeFT inter-chiplet routing to use exactly two Virtual Channels, one for VN.0 and one for VN.1, with 4 flits of buffering per VC.
- `Extended_Proposal.pdf` lists the required VN restrictions: VN.1 to VN.0 is forbidden, Up-to-Horizontal is forbidden in VN.0, and Horizontal-to-Down is forbidden in VN.1.
- The original DeFT paper states that DeFT uses two VNs for deadlock freedom, assumes one VC per VN for the evaluated design, allows VN.0 to VN.1 transitions, forbids VN.1 to VN.0 transitions, and uses round-robin assignment when either VN is legal.
- The original DeFT paper defines Down as chiplet-to-interposer movement, Up as interposer-to-chiplet movement, and Horizontal as North, East, South, and West movement within either the chiplet layer or the interposer layer.

Existing Noxim grounding:

- `external/noxim/src/DataStructs.h` already carries `vc_id` in `Packet`, `Flit`, and `RouteData`.
- `external/noxim/src/ProcessingElement.cpp` assigns `Packet::vc_id` at packet creation and copies it to every generated `Flit::vc_id`.
- `external/noxim/src/Router.cpp` stores incoming flits in `buffer[input_direction][received_flit.vc_id]`, passes the head flit's `vc_id` into `RouteData`, checks downstream backpressure through `buffer_full_status_tx[output_direction].mask[vc]`, and forwards the flit with its existing `vc_id`.
- `external/noxim/src/ReservationTable.*` currently treats the reservation VC as the same VC index read from the input buffer. It does not yet distinguish input VC from output VC.
- `GlobalParams::n_virtual_channels` configures the number of physical VC buffer banks. Existing configuration validation permits two VCs, but rejects `NOP`, `BUFFER_LEVEL`, and wireless sleep power-manager modes when more than one VC is configured.
- During T0012, the construction-only `external/noxim/config_examples/deft_2_5d_topology.yaml` still used `n_virtual_channels: 1` because no DeFT VN behavior had been implemented yet.

Design decision:

- DeFT VN state should be represented directly by the existing Noxim VC ID in DeFT-enabled runs.
- `vc_id == 0` means VN.0.
- `vc_id == 1` means VN.1.
- No separate `vn_id`, packet tag, flit tag, or router-side shadow VN field should be added unless a later implementation task proves that the existing VC ID cannot safely carry the state.
- For DeFT-enabled routing runs, exactly two physical VCs must be configured: `GlobalParams::n_virtual_channels == 2`.
- For non-DeFT routing modes and documentation/construction-only smokes, existing baseline VC behavior should remain unchanged.

Metadata ownership:

- `Packet::vc_id` is the injected packet's initial VN/VC assignment.
- `Flit::vc_id` is the authoritative in-flight VN/VC state because router input buffers, downstream full-status masks, and the receiving router all use this field.
- `RouteData::vc_id` is a read-only snapshot of the head flit's current input VN/VC for route and assignment decisions.
- `GlobalParams::n_virtual_channels` is resource configuration, not per-packet state.
- Round-robin balance state should not live in packet or flit metadata. Future assignment work should keep any round-robin counters in a DeFT-specific helper or router-local assignment surface.

Future helper API guidance:

- Add a small DeFT VN helper only when implementation begins, for example `DeftVirtualNetwork.*`.
- The helper should expose constants or an enum for VN.0 and VN.1, plus conversion helpers between DeFT VN names and VC IDs.
- The helper should validate DeFT VC IDs with `isValidDeftVirtualNetwork(vc_id)`.
- The helper should validate monotonic VN transitions with `canTransition(from_vn, to_vn)`, allowing only same-VN transitions and VN.0 to VN.1 transitions.
- Movement classification should be derived from `DeftTopology` and router IDs, not from raw port numbers alone. `DIRECTION_HUB` is still only the current physical carrier for VL wiring; DeFT movement should classify chiplet-to-interposer traversal as Down and interposer-to-chiplet traversal as Up by comparing endpoint layers through `DeftTopology::verticalLinkBetweenRouters()` or equivalent topology helpers.
- A future assignment result should include both the selected output direction and the selected output VN/VC when a router can reassign VN state.

Future router-pipeline implication:

- The current Noxim router path can preserve a flit's VC ID, but it cannot safely remap from input VC 0 to output VC 1 with the existing reservation data alone.
- T0013 must not mutate only `Flit::vc_id` while still reserving and checking downstream fullness with the old input-buffer VC index. That would make the upstream backpressure check and downstream receiving VC disagree.
- T0013 implemented output-VC-aware reservation and forwarding metadata so downstream availability is checked for the selected output VC and the flit is forwarded with that same selected VC ID.

Assumption: The DeFT implementation target remains exactly one VC per VN, so two VCs total are sufficient for VN.0 and VN.1.

Assumption: The construction-only no-traffic configuration used one VC during T0012 because T0012 intentionally made no simulator behavior change.

Blocked: No T0012 work is blocked. Final Up/Down movement enforcement remains future implementation work for T0014.

## T0013 VN Assignment Rules Implementation

`T0013` adds the first DeFT VN assignment behavior. It does not implement final VL selection, full VN transition-restriction enforcement, route-performance experiments, metrics changes, experiment automation, or golden regression output updates.

Implemented source surface:

- `external/noxim/src/DeftVirtualNetwork.h` and `external/noxim/src/DeftVirtualNetwork.cpp` define VN constants, DeFT-enabled detection, VC/VN validation, monotonic VN transition validation, source assignment, boundary output-VC selection, and round-robin state.
- `external/noxim/src/ProcessingElement.cpp` now overrides random packet VC assignment only for `DEFT_2_5D`: inter-chiplet packets from non-boundary source routers start in VC 0/VN.0, while source cases where either VN is legal use round-robin assignment.
- `external/noxim/src/Router.cpp` now asks `DeftVirtualNetwork` for a selected output VC during head-flit reservation. Chiplet boundary routers going to the interposer can round-robin from VN.0 to VN.0/VN.1, VN.1 is preserved to maintain monotonicity, and traffic entering a destination chiplet from the interposer is forced to VC 1/VN.1.
- `external/noxim/src/ReservationTable.h` and `external/noxim/src/ReservationTable.cpp` now support explicit output-VC reservation metadata while preserving the old input-VC reservation view for existing hub users.
- `external/noxim/src/ConfigurationManager.cpp` requires exactly two VCs for `DEFT_2_5D`, and `external/noxim/config_examples/deft_2_5d_topology.yaml` now sets `n_virtual_channels: 2`.

Assignment model:

- VC 0 remains VN.0 and VC 1 remains VN.1.
- `DEFT_2_5D` is the current DeFT-enabled mode because no separate DeFT routing-mode flag exists yet.
- Source boundary packets use the source-assignment branch and are not reassigned again in the same source router.
- Boundary reassignment commits its round-robin step only when a new reservation is successfully created.
- Router forwarding reads the original input buffer VC, checks downstream fullness for the selected output VC, forwards the flit with that selected `Flit::vc_id`, and releases the reservation on the tail flit.

Assumption: `DIRECTION_HUB` remains the current physical carrier for Vertical Link traversal. T0013 classifies chiplet-boundary-to-interposer hub output as Down-like assignment context and interposer-to-chiplet hub output or boundary-router hub input as Up-like assignment context, but it does not make `DIRECTION_HUB` the final semantic port model.

T0014 completes the first movement-transition enforcement layer on top of this assignment foundation.

## T0014 VN Transition Restrictions Implementation

`T0014` adds the smallest DeFT movement-transition restriction enforcement after T0013. It does not implement final VL selection, offline VL LUT generation, experiment automation, metrics changes, golden regression output updates, or DeFT performance experiments.

Implemented source surface:

- `external/noxim/src/DeftVirtualNetwork.h` and `external/noxim/src/DeftVirtualNetwork.cpp` now expose `isOutputDirectionAllowed(route_data, output_direction)` for DeFT-only output-direction filtering.
- `DeftVirtualNetwork` derives movement context from `RouteData::dir_in`, the selected output direction, and `DeftTopology::decodeRouterId()`.
- No packet, flit, or route-data movement-history metadata was added. The current input port is the only previous-movement state used for this task.
- `external/noxim/src/Router.cpp::selectionFunction()` filters candidate output directions only when `DEFT_2_5D` is enabled.
- `external/noxim/src/Router.cpp::route()` returns `NOT_VALID` if DeFT filtering removes every candidate, and `Router::txProcess()` skips reservation in that case.

Restriction model:

- VN.1 to VN.0 remains forbidden through `DeftVirtualNetwork::canTransition()`.
- Up-to-Horizontal in VN.0 is avoided by classifying chiplet-boundary `dir_in == DIRECTION_HUB` as an Up input and forcing the output VC to VN.1 before horizontal forwarding.
- Horizontal-to-Down in VN.1 is rejected by filtering chiplet-boundary horizontal-input to `DIRECTION_HUB` output candidates when the selected output VN would be VN.1.
- Horizontal-to-Down in VN.0 preserves VN.0 and does not consume the boundary reassignment round-robin state. This prevents the round-robin from getting stuck on an illegal VN.1 reassignment choice.

Assumption: In the current implementation, `DIRECTION_HUB` is still only the physical carrier for Vertical Link traversal. For T0014, DeFT Up and Down semantics are inferred from the current router layer and boundary-router status: chiplet-boundary hub input is Up, and chiplet-boundary hub output is Down.

Blocked: Full DeFT route selection and final fault-aware VL choices remain future work. T0014 can reject an illegal transition but cannot guarantee an alternate legal route if the current routing algorithm supplies only illegal candidates.

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

Implemented foundation:

- If the current router is the source:
  - If the source is in the interposer, destination chiplet, or boundary set, use round-robin assignment between VN.0 and VN.1.
  - If the destination is on a different chiplet, assign VN.0.
- If the current router is a boundary router:
  - If the packet is going to the interposer, use round-robin reassignment between VN.0 and VN.1.
  - If the packet is coming from the interposer, go to or remain in VN.1.
- Otherwise, preserve the previously assigned VN.

T0013 maps these rules onto Noxim by assigning source packets in `ProcessingElement` and selecting output VCs in `Router::txProcess()`. Inter-chiplet traffic from non-boundary source routers starts in VN.0. Intra-chiplet traffic and source-boundary cases use round-robin source assignment. Boundary reassignment preserves monotonicity, so an input flit already in VN.1 cannot be reassigned to VN.0.

Paper alignment note: The original DeFT paper also states that intra-chiplet packets may use both VNs because they do not use vertical ports.

## VN Transition Restrictions

Implemented foundation:

- VN.1 to VN.0 transition is forbidden.
- Up-to-Horizontal movement in VN.0 is forbidden.
- Horizontal-to-Down movement in VN.1 is forbidden.
- The implementation must preserve exactly two VCs: one for VN.0 and one for VN.1.

T0014 enforces these restrictions for `DEFT_2_5D` by filtering router output candidates using the selected output VN/VC. Baseline topologies keep the existing routing and selection behavior.

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

## T0015 Offline VL LUT Format Design

`T0015` defines the offline Vertical Link LUT schema before generator or runtime lookup implementation. It does not create LUT artifacts, implement exhaustive search, load tables at simulator startup, change final VL selection, alter metrics, update golden regression outputs, or run DeFT performance experiments.

Source alignment:

- `Extended_Proposal.pdf` requires offline VL selection that minimizes a cost combining Manhattan distance and load imbalance, with `rho = 0.01`.
- The original DeFT paper uses a design-time search across VL-fault scenarios and stores the resulting selections in router lookup tables for runtime use.
- The original DeFT paper requires two VL-related selections for each inter-chiplet packet: one source-chiplet exit VL and one destination-side entry VL from the interposer toward the destination chiplet.
- The current implementation foundation models 16 physical bidirectional VL IDs through `DeftTopology`, with fault masks validated over those same physical IDs by `DeftFaultInjection`.

### Canonical Storage

The LUT artifact should be a YAML file using a restricted, deterministic subset that can be parsed by the existing Noxim YAML dependency:

- File format: YAML mapping and sequence subset only.
- Schema identifier: `schema: deft_vl_lut.v1`.
- Top-level ordering: `schema`, `topology`, `topology_signature`, `generation`, `fault_scenarios`, `entries`.
- No YAML anchors, aliases, implicit dates, or implementation-specific tags.
- Integer IDs are written in decimal except `fault_mask_id`, which is a quoted fixed-width hexadecimal bitset string.
- Floating-point cost fields are written with a deterministic generator-owned precision.

Recommended filename pattern:

```text
deft_vl_lut.<topology>.<traffic_profile_id>.yaml
```

Example top-level shape:

```yaml
schema: deft_vl_lut.v1
topology: DEFT_2_5D
topology_signature:
  chiplet_count: 4
  chiplet_router_count: 64
  interposer_router_count: 64
  physical_vertical_link_count: 16
  vertical_links_per_chiplet: 4
generation:
  objective: rho_distance_plus_load_imbalance
  rho: 0.01
  traffic_profile_id: synthetic-uniform-example
fault_scenarios:
  - fault_mask_id: "0x0000"
    faulty_vl_ids: []
    functional_vl_ids: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
entries:
  - key:
      fault_mask_id: "0x0000"
      source_chiplet_id: 0
      source_router_id: 0
      destination_chiplet_id: 1
    value:
      source_exit:
        selected_vl_id: 0
        boundary_router_id: 1
        interposer_endpoint_router_id: 65
        ranked_vl_ids: [0, 1, 2, 3]
      destination_entry:
        selected_vl_id: 4
        boundary_router_id: 5
        interposer_endpoint_router_id: 69
        ranked_vl_ids: [4, 5, 6, 7]
      cost:
        source_exit_total: 0.0
        destination_entry_total: 0.0
```

The example is structural only; it is not a generated optimum and must not be used as golden routing data.

### Fault Mask Key

`fault_mask_id` is the canonical runtime fault-state key. In schema v1 it is a quoted hexadecimal bitset over the current 16 physical bidirectional VL IDs:

```text
bit vl_id = 1 means physical VL vl_id is faulty
bit vl_id = 0 means physical VL vl_id is functional
```

Examples:

| Faulty physical VL IDs | `fault_mask_id` |
| --- | --- |
| `[]` | `"0x0000"` |
| `[0]` | `"0x0001"` |
| `[0,4,8,12]` | `"0x1111"` |
| `[15]` | `"0x8000"` |

The artifact keeps both `fault_mask_id` and the sorted `faulty_vl_ids` list. The string is the compact lookup key, while the list is the human-readable and validation-facing representation.

Assumption: Schema v1 intentionally follows T0010/T0011 by using physical bidirectional VL IDs `0..15`, not directional VL endpoints.

Assumption: The no-fault mask must be present even though the original paper's example fault-combination count focuses on nonzero local fault cases, because the simulator supports a 0% fault scenario and later comparisons need it.

Blocked: Final experiment percentage accounting over physical versus directional VLs remains unresolved and should not change schema v1 without a new decision.

### Entry Key

Each LUT entry key is a tuple:

| Field | Meaning | Runtime source |
| --- | --- | --- |
| `fault_mask_id` | Current permanent startup VL fault state | Derived from `DeftTopology::verticalLinks()` or `DeftFaultInjection::faultyVerticalLinkIds()` |
| `source_chiplet_id` | Owner chiplet of the original packet source router | `DeftTopology::decodeRouterId(RouteData::src_id).chiplet_id` |
| `source_router_id` | Original packet source router ID on the chiplet layer | `RouteData::src_id` |
| `destination_chiplet_id` | Owner chiplet of the final packet destination router | `DeftTopology::decodeRouterId(RouteData::dst_id).chiplet_id` |

Validation requirements for a schema v1 entry:

- `source_router_id` must be a chiplet router ID in `0..63`.
- `source_chiplet_id` must match the decoded chiplet owner of `source_router_id`.
- `destination_chiplet_id` must be in `0..3`.
- `source_chiplet_id` and `destination_chiplet_id` must differ, because intra-chiplet packets do not use the VL LUT.
- The referenced `fault_mask_id` must exist in `fault_scenarios`.
- The selected source-exit VL must belong to `source_chiplet_id` and must be functional under the referenced fault mask.
- The selected destination-entry VL must belong to `destination_chiplet_id` and must be functional under the referenced fault mask.

Assumption: `destination_router_id` is not part of schema v1 because the current task requires destination-chiplet traceability and the proposal's mathematical formulation is chiplet-local. A later generator task may add destination-router-granular entries only through a schema version bump or an explicitly optional field.

### Entry Value

Each entry stores the two runtime selections needed by one inter-chiplet packet context:

- `source_exit`: the physical VL to route toward while the packet is still on the source chiplet.
- `destination_entry`: the physical VL endpoint on the destination chiplet footprint that the interposer route should target before moving up into the destination chiplet.

Required value fields:

| Field | Meaning |
| --- | --- |
| `selected_vl_id` | Stable physical bidirectional VL ID from `DeftTopology::VerticalLinkInfo::vl_id` |
| `boundary_router_id` | Chiplet-layer boundary router endpoint for the selected VL |
| `interposer_endpoint_router_id` | Interposer-layer router endpoint for the selected VL |
| `ranked_vl_ids` | Deterministically ordered functional candidate VL IDs for inspectability and future fallback policy design |

Optional cost fields may be included under `cost` for debug and validation:

- `source_exit_total`.
- `source_exit_distance`.
- `source_exit_load_imbalance`.
- `destination_entry_total`.
- `destination_entry_distance`.
- `destination_entry_load_imbalance`.

Runtime schema v1 should use only `selected_vl_id` and derived endpoints for final routing. `ranked_vl_ids` and cost fields are inspectability data unless a later task explicitly designs fallback behavior.

### Deterministic Ordering

Generator output must be byte-stable for the same topology, traffic profile, fault scenarios, and generator version:

- `fault_scenarios` sorted by numeric `fault_mask_id`.
- `faulty_vl_ids`, `functional_vl_ids`, and all `ranked_vl_ids` sorted by deterministic generator rules.
- `entries` sorted lexicographically by `(fault_mask_id numeric value, source_chiplet_id, source_router_id, destination_chiplet_id)`.
- Candidate ranking ties resolved by `(total_cost, load_imbalance_cost, distance_cost, selected_vl_id)` unless T0016 documents a better source-aligned tie-breaker.
- Every selected VL must also appear as the first item in its corresponding `ranked_vl_ids`.

### Runtime Lookup Contract

Future runtime lookup should:

1. Ignore the LUT for intra-chiplet packets.
2. Build the current `fault_mask_id` from the active physical VL functional states after startup fault injection.
3. Derive `source_chiplet_id`, `source_router_id`, and `destination_chiplet_id` from existing `RouteData::src_id` and `RouteData::dst_id`.
4. Require an exact LUT entry match.
5. Use `source_exit.selected_vl_id` while routing on the source chiplet toward the interposer.
6. Use `destination_entry.interposer_endpoint_router_id` as the destination-side intermediate target while routing across the interposer.
7. Use `destination_entry.selected_vl_id` to move up through a functional destination-side physical VL.

Implemented in T0017: Runtime LUT loading and DeFT route selection now consume this contract without adding route-data intermediate-destination state. Exact missing-entry handling fails closed by returning no legal route.

## T0016 Offline VL LUT Generator Implementation

`T0016` adds the first standalone offline generator for the T0015 `deft_vl_lut.v1` schema. It does not load LUTs into Noxim, change router runtime behavior, alter final route selection, add experiment automation, change metrics, update golden regression outputs, or run DeFT performance experiments.

Implemented source surface:

- `external/noxim/other/deft_vl_lut_generator.py` is a Python standard-library generator placed with the existing Noxim helper tools under `external/noxim/other`.
- The generator mirrors the current `DEFT_2_5D` topology constants from `DeftTopology`: four 4x4 chiplets, an 8x8 interposer footprint, chiplet routers `0..63`, interposer routers `64..127`, and 16 physical bidirectional VL IDs.
- The generator accepts repeated `--fault-mask` values, repeated `--faulty-vls` comma-list values, or `--max-fault-count` to enumerate every valid connected-chiplet mask up to a physical fault count. With no scenario option, it emits the no-fault mask.
- Fault-mask validation rejects masks that disconnect any chiplet, matching the T0011 connected-chiplet rule over current physical VL IDs.
- Output is deterministic restricted YAML with top-level `schema`, `topology`, `topology_signature`, `generation`, `fault_scenarios`, and `entries` sections.

Selection model:

- The source-exit selection uses the proposal and paper objective exactly for the current uniform task scope: Manhattan distance plus load imbalance with `rho = 0.01`.
- The implementation uses exact dynamic programming over assignment count states instead of naive brute-force enumeration. This is equivalent to exhaustive search for the current uniform unit-demand model, but avoids enumerating every raw assignment string.
- For source-side selection, demand points are the 16 routers on a source chiplet and candidates are the functional VLs on that same chiplet.
- For destination-entry selection, schema v1 has no `destination_router_id`. T0016 therefore uses the same distance-plus-load objective over interposer-entry contexts: demand points are `(source_chiplet_id, source_router_id)` contexts positioned at their selected source-exit interposer endpoint, and candidates are the functional VL interposer endpoints on the destination chiplet.
- Every selected source-exit and destination-entry VL is functional under the entry's `fault_mask_id`, and every selected VL appears first in its `ranked_vl_ids`.

Assumption: T0016 uses uniform unit inter-chiplet demand because the project has not yet implemented or registered final traffic-profile inputs for LUT generation.

Assumption: The destination-entry interposer-context model is a narrow schema-v1 adjustment. A future schema that includes `destination_router_id` can optimize destination entry directly against destination-router demand.

Blocked: Packet-carrying inter-chiplet DeFT route validation, traffic-profile-specific LUT generation, and experiment-scale generated artifacts remain future work.

## T0017 Runtime VL LUT Loading and Boundary Use

`T0017` adds the first runtime consumption path for generated `deft_vl_lut.v1` data. It does not add experiment automation, metrics changes, traffic-model work, golden regression output updates, or DeFT performance experiments.

Implemented source surface:

- `external/noxim/src/DeftVerticalLinkLut.h` and `external/noxim/src/DeftVerticalLinkLut.cpp` load restricted schema-v1 YAML through the existing yaml-cpp dependency, validate topology signature and entry endpoint metadata against `DeftTopology`, compute the active runtime fault mask from current physical VL functional state, and expose exact lookup by `(fault_mask, source_chiplet_id, source_router_id, destination_chiplet_id)`.
- `external/noxim/src/routingAlgorithms/Routing_DEFT.h` and `external/noxim/src/routingAlgorithms/Routing_DEFT.cpp` register the `DEFT` routing algorithm.
- `external/noxim/src/ConfigurationManager.cpp`, `external/noxim/src/GlobalParams.*`, and `external/noxim/config_examples/deft_2_5d_topology.yaml` add the optional `deft_vl_lut_filename` configuration surface and `-deft_vl_lut` command-line override.
- `external/noxim/src/NoC.cpp` loads the LUT after startup fault injection so lookup uses the actual permanent physical VL fault vector.
- `external/noxim/bin/power.yaml` adds a `DEFT` routing power entry aliased to the existing XY values, because Noxim requires every registered routing algorithm to have a power table entry before simulation starts.

Routing behavior:

- Intra-chiplet traffic does not use the LUT.
- Inter-chiplet source-chiplet routing looks up the schema-v1 entry and routes to `source_exit.boundary_router_id`; at that selected boundary router it traverses `DIRECTION_HUB` only if the selected source-exit VL still matches topology metadata and is functional.
- Interposer routing targets `destination_entry.interposer_endpoint_router_id`; at that selected interposer endpoint it traverses `DIRECTION_HUB` only if the selected destination-entry VL still matches topology metadata and is functional.
- Destination-chiplet routing then uses the existing XY-style local route to the final destination router.
- If the LUT is not loaded, the exact entry is missing, or the selected VL is no longer functional, the `DEFT` routing algorithm returns no legal output direction for that head flit instead of falling back to an arbitrary VL.

Assumption: The runtime path is enabled by selecting routing algorithm `DEFT` and providing `deft_vl_lut_filename`. Construction-only `DEFT_2_5D` smoke runs may leave the filename empty when no inter-chiplet traffic is routed.

Assumption: No `RouteData` intermediate-destination fields are required for schema v1 because each router can derive the current phase from `current_id`, `src_id`, `dst_id`, layer metadata, and the loaded LUT entry.

Blocked: Packet-carrying inter-chiplet DeFT route validation, traffic-profile-specific LUT artifacts, physical-vs-directional experiment percentage accounting, experiment automation, and metrics remain future work.

## T0018 XY Baseline Mode Configuration

`T0018` adds the smallest explicit configuration surface for later XY-vs-DeFT comparison on the same project topology. It does not change Noxim C++/SystemC source, routing behavior, traffic generation, metrics, experiment automation, golden regression outputs, the T0016 generator format, or the T0017 runtime LUT schema/use path.

Implemented configuration surface:

- `external/noxim/config_examples/deft_2_5d_xy_baseline_fault_free.yaml` selects `topology: DEFT_2_5D`, `routing_algorithm: XY`, no startup VL faults, and an empty `deft_vl_lut_filename`.
- `external/noxim/config_examples/deft_2_5d_xy_baseline_fault_injected.yaml` selects the same topology and XY routing, keeps the DeFT LUT disabled, and uses explicit physical VL faults `[0,4,8,12]`.
- Both configs retain `n_virtual_channels: 2` because the current `DEFT_2_5D` topology validation requires the VN.0/VN.1 VC count even when the selected routing algorithm is `XY`.
- Both configs intentionally reuse `TRAFFIC_HARDCODED` with `external/noxim/config_examples/deft_2_5d_no_traffic.txt` so T0018 validates mode selection and startup fault state only. Synthetic packet-carrying traffic is still deferred to T0019.

Baseline selector semantics:

- Fault-free XY baseline: use the fault-free config as the 0% startup-fault reference on the constructed `DEFT_2_5D` topology.
- Fault-injected XY baseline: use the fault-injected config as the current physical-model 25% startup-fault reference. The mask is `0x1111`, one faulty physical bidirectional VL per chiplet, matching the T0011 inspectability case.
- DeFT comparison runs remain selected separately through `routing_algorithm: DEFT` plus `deft_vl_lut_filename` or `-deft_vl_lut` with a matching generated schema-v1 LUT. T0018 does not commit generated LUT artifacts.

Assumption: The current baseline mode deliberately uses Noxim's existing standard `XY` routing algorithm. It does not add a 2.5D-aware XY route-selection variant or a fallback VL selector.

Assumption: The fault-injected baseline follows the current 16 physical bidirectional VL model. Final percentage accounting against the original paper's directional `total VLs=32` wording remains unresolved for experiment automation.

Blocked: Packet-carrying XY-vs-DeFT comparison needs experiment runners, metrics extraction, and broader validation from later tasks before performance or reachability conclusions can be made.

## T0019 Synthetic Traffic Configuration

`T0019` adds the smallest configuration/data surface for the proposal-required synthetic traffic profiles on the current `DEFT_2_5D` topology. It does not change Noxim C++/SystemC source, DeFT routing, VN transition logic, Vertical Link fault injection, the T0016 generator format, the T0017 runtime LUT schema/use path, metrics, experiment runners, golden regression outputs, or performance analysis.

Implemented configuration surface:

- `external/noxim/config_examples/deft_2_5d_traffic_uniform.yaml` selects `topology: DEFT_2_5D` with existing `TRAFFIC_RANDOM`, packet size 8 flits, two VCs, no startup VL faults, no DeFT LUT, and default `routing_algorithm: XY`.
- `external/noxim/config_examples/deft_2_5d_traffic_localized_40.yaml` selects existing `TRAFFIC_TABLE_BASED` with `external/noxim/config_examples/deft_2_5d_traffic_localized_40.txt`.
- `external/noxim/config_examples/deft_2_5d_traffic_hotspot_3x10.yaml` selects existing `TRAFFIC_TABLE_BASED` with `external/noxim/config_examples/deft_2_5d_traffic_hotspot_3x10.txt`.

Traffic-table semantics:

- Uniform uses Noxim's existing random destination selection. Under `DEFT_2_5D`, `n_delta_tiles` is set to the 64 chiplet routers, so random traffic selects final destinations in the chiplet-router ID range `0..63`.
- Localized assigns each source a total table PIR of `0.01`; 40% of that source probability targets same-chiplet destinations and 60% targets other-chiplet destinations. Self-traffic is excluded.
- Hotspot assigns each source a total table PIR of `0.01`. Hotspot routers are `9`, `13`, and `41`, chosen as deterministic near-center routers in three different chiplets because the source documents do not name specific hotspot IDs.
- Each hotspot receives 10% of a non-hotspot source's generated traffic. When the source is itself a hotspot, self-destination traffic is excluded and that share is redistributed to background non-hotspot destinations.

Assumption: For T0019, the hotspot "10% rate on each" requirement is interpreted as per-hotspot destination share, matching Noxim's existing `-hs ID P` percentage semantics and the original DeFT paper's wording of "3 hotspot points" with "10% rate on each"; final experiment automation can revisit this if a different global-PIR interpretation is required.

Assumption: `TRAFFIC_LOCAL` is not used for the localized profile because source inspection showed it is WiNoC hub-local traffic, not chiplet-local traffic, and `DEFT_2_5D` rejects Winoc hub mode.

Blocked: The T0019 configs validate selection/loading only. They do not establish final XY-vs-DEFT performance, reachability, experiment sweeps, traffic-profile-specific LUT generation, or machine-readable metrics.

## T0020 Metrics Collection

`T0020` adds the smallest source support needed to compare XY and DeFT runs through machine-readable metrics. It does not add experiment automation, sweeps, final analysis, golden regression output updates, DeFT routing changes, VN transition changes, VL fault-injection changes, LUT schema/generator changes, or traffic-profile semantic changes.

Implemented source surface:

- `external/noxim/src/ProcessingElement.h` and `external/noxim/src/ProcessingElement.cpp` now track packets and flits injected into the network by counting packet head flits when they are emitted from the PE toward the local router after the configured stats warm-up boundary.
- `external/noxim/src/GlobalStats.h` and `external/noxim/src/GlobalStats.cpp` aggregate injected packet/flit counters and compute `reachability_ratio = total_received_packets / total_injected_packets`.
- The existing optional `stats_format` / `stats_file` export path now emits comparison identifiers and metrics in CSV and JSON: `routing_algorithm`, `traffic_distribution`, `deft_active_fault_mask`, `total_injected_packets`, `total_injected_flits`, `total_received_packets`, `total_received_flits`, `reachability_ratio`, `global_average_delay_cycles`, `network_throughput_flits_per_cycle`, and `average_ip_throughput_flits_per_cycle_per_ip`.
- The standard console summary labels are left compatible with existing Noxim log parsers; T0020's new comparison fields are available through the existing machine-readable export path.

Assumption: T0020 counts a packet as injected when its head flit actually enters the network from the processing element, not when a traffic generator first queues a packet internally.

Assumption: T0020 reachability follows the existing Noxim stats collection window. Packets still in flight at the end of a short smoke lower the ratio, so short validation smokes are metrics-export checks and not performance results.

Blocked: Multi-seed sweeps, final percentage accounting for fault sweeps, and analysis artifacts remain future work.

## T0021 Experiment Runner

`T0021` adds the smallest launch harness for traceable single-run and tiny comparison checks. It does not change DeFT routing, VN transition logic, VL fault injection, LUT schema/runtime behavior, traffic semantics, metrics semantics, final result sweeps, golden regression outputs, or performance analysis.

Implemented helper surface:

- `external/noxim/other/deft_experiment_runner.py` is a Python standard-library helper placed with the existing Noxim helper tools.
- The runner composes simulator commands from the existing T0019 traffic configs, `-routing XY|DEFT`, explicit physical VL fault masks via `-deft_faulty_vls`, seed/simulation/warm-up overrides, and the T0020 `-stats_format` / `-stats_file` export path.
- `DEFT` runs generate temporary schema-v1 LUTs under the selected output directory by invoking `external/noxim/other/deft_vl_lut_generator.py`; the manifest records the generator command and the uniform-unit-interchiplet LUT provenance.
- Generated manifests, commands, logs, stats files, summaries, and temporary LUTs are written below an output directory, with the default location under `external/noxim/other/generated/deft_experiments/`. `external/noxim/.gitignore` ignores `other/generated/` so experiment artifacts are not committed.
- The default mode is dry-run planning. `--execute` runs the tiny planned set and defaults to a four-run execution safety cap through `--max-execute-runs`.
- Each run records a manifest entry, a shell-style command file, per-run stdout/stderr paths, per-run machine-readable stats paths, and a summary CSV. JSON stats are parsed into the summary when present.

Assumption: T0021 temporary LUT generation uses the T0016 generator's current uniform-unit-interchiplet demand assumption even when the simulator traffic profile is localized or hotspot. Traffic-profile-specific LUT optimization remains future work.

Assumption: T0021 execute mode is intended for WSL/Linux because the validated local `bin/noxim` artifact is a Linux ELF binary. Windows PowerShell can still use the helper for dry-run planning.

Blocked: T0021 is not a final sweep runner. Final experiment windows, drain policy, physical-vs-directional fault percentage accounting, broader seed sets, result aggregation, and performance claims remain future work.

## T0022 Final Analysis Artifact Scaffolding

`T0022` adds report-support scaffolding for validated T0021/T0020 outputs. It does not run simulations, define the final sweep policy, change simulator behavior, update golden regression outputs, or make performance claims.

Implemented helper surface:

- `external/noxim/other/deft_analysis_artifacts.py` is a Python standard-library helper placed with the other Noxim helper tools.
- The helper consumes one or more T0021 runner output directories containing `manifest.json`, `summary.csv`, and optional per-run T0020 JSON stats files.
- It emits generated analysis artifacts under a caller-selected output directory, normally below ignored `external/noxim/other/generated/`: `analysis_manifest.json`, `run_summary.csv`, `comparison_summary.csv`, and `report_scaffold.md`.
- The run summary table preserves traceability to input manifests, run status, routing mode, traffic profile, fault mask, seed, simulation window, stats files, stdout/stderr logs, config file, LUT file, LUT provenance, and T0020 metric fields.
- The comparison summary table computes simple grouped means for completed runs with metrics, grouped by routing mode, traffic profile, fault mask, simulation time, and warm-up time. These means are mechanical summaries only.
- The generated analysis manifest always records `claims_allowed: false`; report text marks smoke-only inputs as `Blocked` for final performance claims.

Assumption: T0022 analysis inputs are runner outputs produced by T0021 and metrics exports produced by T0020. The helper can resolve either Windows paths or WSL `/mnt/c/...` paths when reading existing stats artifacts from the shared workspace.

Blocked: No validated final sweep output set exists yet. The only available completed runner output is the T0021 20-cycle seed-0 localized XY/DEFT execute smoke with no VL faults, which validates export and analysis shape only.

Resolved in T0025: Final fault-rate accounting, simulation window, seed count, warm-up/drain policy, and result-claim rules are documented below. Final sweep outputs are still missing until a later task executes the policy.

## T0025 Final Sweep Policy

`T0025` defines the final sweep policy before final runs are executed or interpreted. It does not run full sweeps, change simulator behavior, rebuild Noxim, update golden regression outputs, or make performance claims.

Source alignment:

- `Extended_Proposal.pdf` requires cycle-accurate Noxim evaluation under Uniform, Localized, and Hotspot synthetic traffic, progressive permanent VL fault injection up to 25%, and metrics for reachability, average latency, and network throughput.
- The original DeFT paper evaluates a four-chiplet system with four bidirectional VLs per chiplet, two VCs for fairness, 8-flit packets, 4-flit buffers, Uniform/Localized/Hotspot synthetic traffic, offline VL selection optimized under Uniform traffic, and reachability under 3.125% to 25% fault-injection rates over the paper's reported `total VLs=32` accounting.
- The current implementation models 16 physical bidirectional VL IDs. A startup fault disables one physical bidirectional VL object and therefore both directional movements over that physical VL.

Final executable matrix:

| Dimension | Values |
| --- | --- |
| Routing modes | `XY`, `DEFT` |
| Traffic profiles | `uniform`, `localized_40`, `hotspot_3x10` |
| Physical fault masks | `0x0000`, `0x0001`, `0x0011`, `0x0111`, `0x1111` |
| Physical faulty VL IDs | `[]`, `[0]`, `[0,4]`, `[0,4,8]`, `[0,4,8,12]` |
| Physical fault rates over 16 bidirectional VLs | 0%, 6.25%, 12.5%, 18.75%, 25% |
| Paper-aligned directional-equivalent rates over 32 directional channels | 0%, 6.25%, 12.5%, 18.75%, 25% |
| Seeds | `0`, `1`, `2`, `3`, `4` |
| Simulation window | `-sim 10000` cycles |
| Stats warm-up | `-warmup 1000` cycles |
| Stats format | `json` |

This policy produces exactly `2 routing modes * 3 traffic profiles * 5 fault masks * 5 seeds = 150` simulator runs.

Fault-rate accounting policy:

- Final commands use explicit physical fault masks because T0010/T0011/T0016/T0017/T0021 all use physical bidirectional VL IDs `0..15`.
- Report fault rates as physical bidirectional percentages over 16 VLs and, when comparing to the paper, as directional-equivalent percentages over 32 channels. For this implementation, the numeric rates are equal because one physical bidirectional VL fault disables both directions.
- Assumption: A permanent physical VL or microbump failure disables both directions of that physical VL in this implementation.
- Blocked: The paper's 3.125% single-direction fault case cannot be represented without adding directional endpoint fault modeling. T0025 does not change the fault-injection model, so no final claim may state that single-direction 3.125% cases were evaluated.

Warm-up and drain policy:

- Use a fixed simulation window with continuous packet injection for all profiles.
- Use `1000` cycles of stats warm-up so the measured window is not dominated by startup transients.
- Do not use a post-injection drain phase in this policy. The current runner does not expose a source cut-off plus drain window, and Noxim's existing `max_volume_to_be_drained` is not a post-injection drain policy.
- Assumption: T0020 reachability remains the finite-window metric `received packets / injected packets` over the measured stats window.
- Blocked: Eventual-delivery reachability after quiescing injection requires a future drain-capable validation design or helper update.

Final runner command shape:

```bash
python3 other/deft_experiment_runner.py \
  --routing XY --routing DEFT \
  --traffic uniform --traffic localized_40 --traffic hotspot_3x10 \
  --fault-mask 0x0000 --fault-mask 0x0001 --fault-mask 0x0011 --fault-mask 0x0111 --fault-mask 0x1111 \
  --seed 0 --seed 1 --seed 2 --seed 3 --seed 4 \
  --sim 10000 \
  --warmup 1000 \
  --stats-format json \
  --output-dir other/generated/t0026_final_sweep_v1
```

Execution, when explicitly requested in a later task, should use the same command with `--execute --max-execute-runs 150` from `external/noxim` in WSL/Linux.

Validation gates before final claims:

- A dry-run manifest must contain exactly 150 planned runs and the full Cartesian product above.
- Every `DEFT` run must have a generated schema-v1 LUT provenance entry, and every `XY` run must leave the DeFT LUT disabled.
- Every fault mask must pass the current connected-chiplet validation rule and must not disconnect any chiplet.
- Executed final-sweep manifests must report `mode: execute`, `run_count: 150`, `status: completed`, and `return_code: 0` for every run.
- Every expected JSON stats file must exist and contain the T0020 fields for routing mode, traffic distribution, active fault mask, injected and received packet/flit counts, reachability ratio, average latency, and throughput.
- Final analysis must be regenerated from the completed sweep output using `external/noxim/other/deft_analysis_artifacts.py`, and the generated tables must be cross-checked against the raw manifest and per-run JSON stats before report text uses them.

Result-claim rules:

- No performance, reachability, latency, or throughput claim may use smoke runs, dry-run manifests, incomplete runs, failed runs, missing stats files, or generated grouped means that have not been cross-checked against raw artifacts.
- Claims must be paired by identical traffic profile, fault mask, seed, simulation window, and warm-up window. Cross-profile or cross-fault comparisons must be described as separate conditions.
- A statement that DeFT maintains `100%` measured reachability is allowed only for cells where every DeFT seed has `reachability_ratio == 1.0` in the exported JSON stats. Otherwise, report the exact measured finite-window reachability values and do not use "100%" wording.
- Latency and throughput comparisons are valid only when both compared routing modes have completed runs and nonzero received packet counts. If a baseline has low reachability, report it as a reliability limitation before interpreting its latency or throughput.
- With five seeds, report descriptive statistics only: mean plus min/max or per-seed table. Do not claim statistical significance unless a later task increases the sample size and defines a statistical test.
- Literature baselines (`MTR`, `RC`) may be discussed only conceptually from the source documents because they are not implemented in this repository.

## T0026 Final Sweep Execution

`T0026` executed the T0025 final matrix and regenerated final analysis artifacts. It did not change simulator source, helper source, DeFT routing behavior, VN transition logic, Vertical Link fault injection, LUT schemas, traffic-profile semantics, metrics semantics, runner semantics, analysis semantics, golden regression outputs, or `./regression.sh --update`.

Generated ignored sweep artifacts:

- `external/noxim/other/generated/t0026_final_sweep_v1/manifest.json`.
- `external/noxim/other/generated/t0026_final_sweep_v1/commands.sh`.
- `external/noxim/other/generated/t0026_final_sweep_v1/summary.csv`.
- `external/noxim/other/generated/t0026_final_sweep_v1/logs/`.
- `external/noxim/other/generated/t0026_final_sweep_v1/luts/`.
- `external/noxim/other/generated/t0026_final_sweep_v1/stats/`.

Generated ignored analysis artifacts:

- `external/noxim/other/generated/t0026_final_analysis_v1/analysis_manifest.json`.
- `external/noxim/other/generated/t0026_final_analysis_v1/run_summary.csv`.
- `external/noxim/other/generated/t0026_final_analysis_v1/comparison_summary.csv`.
- `external/noxim/other/generated/t0026_final_analysis_v1/report_scaffold.md`.

Validation outcome:

- The dry-run manifest contained `mode: dry_run`, `run_count: 150`, 150 planned runs, and the full Cartesian product of routing modes, traffic profiles, fault masks, and seeds from T0025.
- The executed manifest contained `mode: execute`, `run_count: 150`, 150 completed runs, and 150 return code `0` runs.
- All 150 expected JSON stats files exist and contain the T0020 fields for routing mode, traffic distribution, active fault mask, injected and received packet/flit counts, reachability ratio, average latency, and throughput.
- The analysis helper was run with `--dataset-kind final_sweep` and produced 150 run-summary rows and 30 comparison-summary groups.
- A raw-artifact cross-check found zero mismatches between `run_summary.csv`, `comparison_summary.csv`, the executed manifest, and per-run JSON stats.

Assumption: T0026 analysis tables are mechanical report-support summaries only. The helper intentionally keeps `claims_allowed: false`, so final report text still needs a separate interpretation step before using the grouped means.

Blocked: 54 individual runs reported zero injected packets in the measured window. Report interpretation must handle those empty cells explicitly and must not turn missing reachability or latency values into performance claims.

## T0027 Final Sweep Report-Support Review

`T0027` reviewed the completed T0026 final sweep outputs and generated blank-aware report-support artifacts. It did not rerun simulations, rebuild Noxim, change simulator source, change helper source, change DeFT routing behavior, change VN transition logic, change Vertical Link fault injection, change LUT schemas, change traffic-profile semantics, change metrics semantics, change runner or analysis semantics, update golden outputs, or use `./regression.sh --update`.

Generated ignored report-support artifacts:

- `external/noxim/other/generated/t0027_report_support_v1/manifest.json`.
- `external/noxim/other/generated/t0027_report_support_v1/condition_summary.csv`.
- `external/noxim/other/generated/t0027_report_support_v1/xy_deft_pair_summary.csv`.
- `external/noxim/other/generated/t0027_report_support_v1/zero_injection_runs.csv`.
- `external/noxim/other/generated/t0027_report_support_v1/coverage_by_routing_traffic.csv`.
- `external/noxim/other/generated/t0027_report_support_v1/report_notes.md`.

Review outcome:

- The T0027 condition and pair tables were derived from the T0026 executed manifest and raw JSON stats, then cross-checked against T0026 `summary.csv`, analysis `run_summary.csv`, and analysis `comparison_summary.csv`.
- The cross-check found zero mismatches across 150 completed raw stats rows, 30 condition cells, and 15 XY/DEFT pair rows.
- The 30 condition cells are classified as 12 complete-injection cells, 13 partial-injection cells, and 5 empty-injection cells.
- The 54 zero-injection runs are preserved in `zero_injection_runs.csv` rather than folded into claims.
- All 5 empty-injection condition cells are `XY|hotspot_3x10`.
- `XY|uniform` and `XY|localized_40` are partial-injection cells and have zero received packets in the measured window.
- No XY/DEFT pair supports latency comparison because the XY side has zero received packets in every pair where it injected packets.

Assumption: T0027 uses blank reachability when `total_injected_packets == 0`, because the denominator is absent.

Assumption: T0027 uses blank latency when `total_received_packets == 0`, because no packet delay samples exist.

Blocked: T0027 tables support descriptive, claim-safe report drafting only. Empty or partial injection cells cannot support unqualified performance claims, and final report prose must either accept those limitations or define a follow-up validation/rerun policy before claiming more.

## T0028 Claim-Safe Final Report Results Draft

`T0028` converted the T0027 report-support artifacts into a final-report-ready results draft without changing simulator behavior or rerunning simulations.

Generated ignored report-draft artifacts:

- `external/noxim/other/generated/t0028_final_report_results_v1/manifest.json`.
- `external/noxim/other/generated/t0028_final_report_results_v1/report_results_draft.md`.

Drafting outcome:

- The draft uses the T0027 manifest, condition summary, XY/DEFT pair summary, coverage table, zero-injection list, and report notes as the only result sources.
- The draft records the T0025/T0026 matrix shape: `XY` and `DEFT`; `uniform`, `localized_40`, and `hotspot_3x10`; fault masks `0x0000`, `0x0001`, `0x0011`, `0x0111`, and `0x1111`; seeds `0..4`; `-sim 10000`; `-warmup 1000`.
- The draft preserves T0027 counts: 150 completed raw stats rows, 30 condition cells, 15 XY/DEFT pair rows, 54 individual zero-injection runs, 12 complete-injection cells, 13 partial-injection cells, 5 empty-injection cells, and zero cross-check mismatches.
- Blank reachability remains blank when no packets were injected.
- Blank latency remains blank when no packets were received.
- Partial cells keep nonempty and empty seed counts beside descriptive metrics.
- No deltas, improvement percentages, statistical-significance statements, unqualified performance claims, or latency comparisons are introduced.

Assumption: T0028 text is report-ready descriptive support, not a new analysis layer. It should be integrated into a final report only with its coverage counts, blank cells, and limitations intact.

Blocked: Stronger claims, non-empty XY hotspot cells, latency comparisons, the original paper's single-direction 3.125% fault case, and eventual-delivery reachability after a drain phase still require separate documented validation or rerun policy.

## T0029 Claim-Safe Final Report Draft Assembly

`T0029` assembled the tracked Markdown final report draft at `docs/FINAL_REPORT_DRAFT.md`. It uses `Extended_Proposal.pdf` as the primary requirements source, the original DeFT paper as the primary algorithmic reference, `Proposal.pdf` as initial context, project documentation for implementation traceability, and the T0028/T0027/T0026 artifacts for results text and validation provenance.

Report draft structure:

- Claim safety notice and source scope.
- Abstract, introduction, background, implementation summary, evaluation method, validation provenance, results, limitations, conclusion, and references.
- T0028-derived artifact readiness, coverage, condition-level descriptive metrics, pair-readiness, and zero-injection summary tables.

The draft preserves the T0027/T0028 interpretation rules:

- Blank reachability means no injected-packet denominator exists in that measured cell.
- Blank latency means no received-packet delay samples exist in that measured cell.
- Partial cells must keep nonempty and empty seed counts beside descriptive metrics.
- The final report draft uses `claims_allowed: false` result language and does not add deltas, ranking, latency comparison, inferential claims, or complete-reachability language.

Assumption: `docs/FINAL_REPORT_DRAFT.md` is the current tracked claim-safe manuscript draft, not a new result-analysis layer.

Blocked: Submission formatting, real-application PARSEC/GEM5 trace coverage, non-empty XY hotspot measurements, latency comparisons, single-direction fault modeling, and eventual-delivery checks require separate documented follow-up tasks before they can change the report claims.

## T0030 Final Report Submission-Readiness Review

`T0030` reviewed and polished the tracked Markdown draft at `docs/FINAL_REPORT_DRAFT.md` without changing simulator behavior or report-support measurements.

Review outcome:

- The report title and draft-status front matter now identify the reviewed Markdown draft as the current deliverable.
- The claim-safety notice remains explicit and now records that no PDF, DOCX, PPTX, or other final artifact format was requested during T0030.
- Source-scope wording now separates project requirements, DeFT algorithmic reference material, initial context, and validation provenance.
- The evaluation-method table labels physical fault rates as percentages.
- The condition-level metrics table keeps all measured values and blank cells intact, and adds a status-label legend for readability.
- The references list now describes each source role without introducing unsupported bibliographic details.

The review preserved the T0027/T0028 interpretation rules:

- Blank reachability remains blank when no packets were injected.
- Blank latency remains blank when no packets were received.
- Partial cells keep nonempty and empty seed counts beside descriptive metrics.
- No deltas, ordering claims, inferential claims, latency comparisons, complete-reachability wording, or unsupported performance language were added.

Assumption: `docs/FINAL_REPORT_DRAFT.md` is submission-ready as a reviewed Markdown draft and is the content source for the final LaTeX artifact.

Blocked: A compiled final-report PDF still requires a TeX-enabled environment.

## T0031 IEEE LaTeX Final Submission Artifact

`T0031` converted the reviewed Markdown draft at `docs/FINAL_REPORT_DRAFT.md` into an IEEE conference-style LaTeX final report artifact after the required format was explicitly supplied.

Artifact outcome:

- `Extended_Proposal.zip` was used as the formatting/template reference. Its usable source tree contains `conference_101719.tex`, `IEEEtran.cls`, `references.bib`, and `figures/schematic.png`.
- `final_report/main.tex` uses `\documentclass[conference]{IEEEtran}`, the same IEEE bibliography style, the same author/title convention family, and the same general proposal package/layout style.
- `final_report/references.bib` reuses only cited entries from the Extended Proposal bibliography.
- `final_report/IEEEtran.cls` and `final_report/figures/schematic.png` were copied from `Extended_Proposal.zip` so the final artifact is self-contained without overwriting the original proposal archive.
- `final_report/README.md` records source hierarchy, build instructions, and the PDF-generation blocker.

The LaTeX report preserves the T0027/T0028 interpretation rules:

- Blank reachability remains blank when no packets were injected.
- Blank latency remains blank when no packets were received.
- Partial cells keep nonempty and empty seed counts beside descriptive metrics.
- No deltas, ordering claims, inferential claims, latency comparisons, complete-reachability wording, or unsupported performance language were added.

Assumption: `final_report/` is the final source artifact for IEEE-style LaTeX submission.

Blocked: PDF generation was not completed in T0031 because `latexmk`, `pdflatex`, `bibtex`, and `tectonic` were not available on the Windows PATH.

## T0033 Final-Report Blocker Diagnosis

`T0033` diagnosed the XY measured-window blockers that limited the T0031 final report. It did not change simulator source, helper source, routing behavior, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, old final-sweep artifacts, or report claims.

Diagnosis grounding:

- `ProcessingElement::recordInjectedPacket()` counts injected packets only when a packet head flit leaves the PE after the configured stats warm-up boundary.
- `Routing_XY.cpp` compares only `id2Coord(current_id)` and `id2Coord(dst_id)` and selects a cardinal direction. It has no VL, hub, interposer, chiplet-layer, or source/destination chiplet phase logic.
- `NoC::buildDeft2D()` wires chiplet-layer cardinal links only within each 4x4 chiplet. Cross-chiplet cardinal movement across the global footprint is intentionally not a physical chiplet-layer link.
- Missing `DEFT_2_5D` cardinal ports are bound to idle ports. A standard XY inter-chiplet path can therefore choose an output that has no corresponding chiplet-layer neighbor.
- `Routing_DEFT.cpp` is the 2.5D-aware path that selects source-chiplet exit, hub/VL traversal, interposer routing, destination-chiplet entry, and final local routing.
- The current `-volume` option stops after delivered flits; it is not a post-injection drain phase because it does not stop sources and then drain in-flight traffic until empty or timeout.

Diagnostic smoke:

- A two-run WSL diagnostic used `external/noxim/other/deft_experiment_runner.py` with `XY`, `hotspot_3x10` and `uniform`, fault mask `0x0000`, seed `0`, `--sim 10000`, `--warmup 0`, JSON stats, and output directory `external/noxim/other/generated/t0033_xy_diagnostic_warmup0_v1/`.
- `XY|hotspot_3x10|0x0000|seed0` injected 145 packets and received 6 packets.
- `XY|uniform|0x0000|seed0` injected 141 packets and received 4 packets.

Interpretation:

- The `XY|hotspot_3x10` zero-injection cells in T0027 are not caused by an empty hotspot traffic table, an invalid hotspot destination set, or lack of injection probability. They are measured-window cells: with T0026 `-warmup 1000`, early packets can inject before stats are counted, and the XY run can stall before the measured window because inter-chiplet cardinal XY has no valid path on the disconnected chiplet layer.
- The `XY|localized_40` and `XY|uniform` zero-received cells are also explained by XY route incompatibility plus the fixed warm-up window. Some measured-window packets can be injected, but the existing XY algorithm cannot route unrestricted inter-chiplet traffic through the active interposer.
- A config/runner-only warm-up-0 diagnostic can produce non-empty XY rows, but it remains a transient diagnostic policy and should not be presented as a strong full inter-chiplet comparison.
- A claim-safe same-chiplet or intra-chiplet-only comparison could be config-only if its scope is clearly limited. A true unrestricted inter-chiplet XY baseline or a post-injection drain/source-cutoff policy requires a separate approved design and likely source changes.

Assumption: The current standard `XY` baseline is useful as a traceable control configuration, but it is not an interposer-aware baseline for unrestricted `DEFT_2_5D` inter-chiplet traffic.

Blocked: Final-report latency or improvement claims remain unsupported until a follow-up policy either narrows the traffic scope, adds source-supported drain validation, or implements and validates an interposer-aware baseline route.

## Synthetic Traffic Models

Implemented configuration support:

- Uniform: packets are distributed uniformly across chiplet-router destination nodes through `deft_2_5d_traffic_uniform.yaml`.
- Localized: 40% of generated packet probability remains within the same source chiplet through `deft_2_5d_traffic_localized_40.yaml` and its traffic table.
- Hotspot: hotspot routers `9`, `13`, and `41` receive 10% destination share each through `deft_2_5d_traffic_hotspot_3x10.yaml` and its traffic table.

## Fault Scenarios

Planned:

- Static Vertical Link faults injected at simulation startup.
- Fault rates up to 25%.
- No chiplet may be completely disconnected from the interposer.
- Current implementation validates masks over 16 physical bidirectional VL IDs.
- T0025 final-sweep policy uses explicit physical masks `0x0000`, `0x0001`, `0x0011`, `0x0111`, and `0x1111`, corresponding to 0%, 6.25%, 12.5%, 18.75%, and 25% of the physical bidirectional VL model.

Assumption: For final reporting, a physical bidirectional VL fault is also reported as disabling two directional channels in the paper's 32-channel accounting, so the T0025 physical rates have the same numeric directional-equivalent rates.

Blocked: Single-direction fault scenarios, including the original paper's 3.125% one-direction case, are not represented by the current physical bidirectional fault model.

## Evaluation Metrics

### Reachability

Implemented in T0020: `reachability_ratio` is emitted in CSV/JSON as the ratio of successfully received packets to packets injected into the network during the measured stats window. `total_injected_packets` and `total_received_packets` are exported with the ratio so later tooling can recompute or filter it.

### Average Latency

Implemented through existing Noxim statistics and exported in CSV/JSON as `global_average_delay_cycles`. The value uses the existing packet timestamp to destination-delivery delay path in `Stats` / `GlobalStats`.

### Network Throughput

Implemented through existing Noxim statistics and exported in CSV/JSON as `network_throughput_flits_per_cycle` and `average_ip_throughput_flits_per_cycle_per_ip`. For `DEFT_2_5D`, the average IP throughput denominator remains the 64 chiplet routers, not the 64 internal interposer routers.

## Baseline Comparison with XY Routing

Planned and partially implemented:

- Implemented in T0018: `deft_2_5d_xy_baseline_fault_free.yaml` selects XY routing on the `DEFT_2_5D` topology with no startup VL faults.
- Implemented in T0018: `deft_2_5d_xy_baseline_fault_injected.yaml` selects XY routing on the same topology with explicit physical VL faults `[0,4,8,12]`.
- Implemented in T0019: uniform, localized, and hotspot synthetic traffic configs exist on the same `DEFT_2_5D` topology.
- Implemented in T0020: CSV/JSON metrics export includes routing mode, traffic mode, active fault mask, reachability, average latency, and throughput fields.
- Implemented in T0021: `external/noxim/other/deft_experiment_runner.py` can plan and execute tiny XY/DEFT comparison runs that reuse those configs, CLI surfaces, generated temporary LUTs, and stats exports.
- Implemented in T0022: `external/noxim/other/deft_analysis_artifacts.py` can turn runner manifests and stats exports into traceable analysis tables and a Markdown report scaffold while blocking final claims when inputs are smoke-only or final sweeps are missing.
- Implemented in T0025: The final comparison policy uses the same traffic, seed, simulation, warm-up, and physical fault-mask cells for `XY` and `DEFT`, with `XY` providing fault-free and fault-injected baseline behavior and `DEFT` using generated schema-v1 LUTs for matching fault masks.
- Implemented in T0026: The T0025 150-run final matrix completed with return code `0` for every run, final analysis artifacts were regenerated with the final-sweep label, and generated tables were cross-checked against the raw manifest and JSON stats before any report claim.
- Implemented in T0027: Blank-aware report-support tables classify complete, partial, and empty measured cells; preserve the 54 zero-injection runs; and avoid pairwise improvement or latency claims where the measured denominators are absent.
- Implemented in T0028: Claim-safe final report results prose and Markdown tables were drafted from T0027/T0026 artifacts while preserving blank cells, partial-cell coverage counts, and `claims_allowed: false`.
- Implemented in T0029: A tracked claim-safe Markdown final report draft was assembled at `docs/FINAL_REPORT_DRAFT.md` from the source documents, project documentation, and T0028/T0027/T0026 report-support artifacts.
- Implemented in T0030: The tracked Markdown final report draft was reviewed and polished for submission readiness while preserving claim-safety constraints, blank cells, validation provenance, assumptions, blockers, and limitations.
- Implemented in T0031: The reviewed Markdown draft was converted into an IEEE conference-style LaTeX source artifact under `final_report/` using `Extended_Proposal.zip` as the formatting/template reference. PDF generation remains blocked until a TeX toolchain is available.
- Diagnosed in T0033: The existing `XY` route is cardinal-only and does not traverse VL/hub/interposer paths, so unrestricted inter-chiplet traffic on `DEFT_2_5D` can stall before the T0026 measured window and cannot support strong XY-vs-DEFT latency or improvement claims.

## T0040 Interposer-Aware XY Baseline Design

T0040 defines a future comparison baseline only. It does not implement a routing algorithm, change simulator behavior, run simulations, regenerate artifacts, or change final-report claims.

### Purpose And Rationale

The proposed baseline is named Interposer-Aware XY, abbreviated `IA-XY` in documentation and recommended as `INTERPOSER_AWARE_XY` for the future routing string. Its purpose is to provide a topology-compatible, deterministic baseline for unrestricted inter-chiplet traffic on `DEFT_2_5D`.

Standard `XY` remains useful as a limited control baseline, but it is not enough for unrestricted inter-chiplet comparison. The current `external/noxim/src/routingAlgorithms/Routing_XY.cpp` implementation compares only `id2Coord(current_id)` and `id2Coord(dst_id)`, then returns one cardinal direction. It does not choose `DIRECTION_HUB`, does not inspect Vertical Links, does not distinguish chiplet and interposer layers, and does not route through active-interposer phases. In `DEFT_2_5D`, chiplet-layer cardinal links are intentionally local to each 4x4 chiplet, so a cardinal-only route can request movement across a nonexistent chiplet-to-chiplet cardinal boundary.

IA-XY is therefore not standard `XY`. It is a new proposed baseline that intentionally routes inter-chiplet packets through source-side Vertical Links, the active interposer, and destination-side Vertical Links. Future reports and tables must label it separately from `XY`.

### High-Level Routing Behavior

IA-XY should use deterministic phase routing:

- Same-chiplet packets: route with ordinary dimension-order XY inside the source chiplet and do not enter the interposer.
- Inter-chiplet packets on the source chiplet: choose a functional source-side exit VL, route by local chiplet XY to that boundary router, then traverse the VL down to the interposer through the existing physical VL carrier.
- Interposer phase: route by dimension-order XY over the active-interposer footprint from the source exit interposer endpoint to the selected destination entry interposer endpoint.
- Destination entry: traverse the selected functional destination-side VL up into the destination chiplet.
- Destination-local phase: route by local chiplet XY from the destination boundary router to the final destination router.

The design should be deterministic and simple. It should not use the DeFT schema-v1 VL LUT, traffic-demand optimization, load-balancing cost function, or adaptive VL optimization. It may use current startup VL functional state to avoid known faulty physical VLs, because selecting a nonfunctional VL would not be a meaningful topology-compatible baseline under fault injection.

Assumption: IA-XY uses the existing 16 physical bidirectional VL model and the existing `DeftTopology` endpoint and functional-state queries. It does not resolve directional endpoint fault modeling.

Blocked: Exact tie-breaking constants are deferred to T0041, but the implementation should document them before running any smoke simulation. A safe default is stable deterministic ordering by shortest Manhattan path on the active-interposer footprint, then lower `vl_id`.

### Entering And Exiting The Interposer

For an inter-chiplet packet, IA-XY needs one source-side exit VL and one destination-side entry VL:

- Source exit selection should choose a functional VL owned by the source chiplet. A directional preference may choose the source chiplet boundary slot that faces the destination chiplet when possible. If that preferred VL is faulty, IA-XY should fall back to another functional source-chiplet VL using deterministic tie-breaking.
- Destination entry selection should choose a functional VL owned by the destination chiplet. The preferred entry should minimize interposer traversal distance from the selected source exit endpoint, with stable tie-breaking.
- At the source boundary router, IA-XY should output the existing physical VL carrier direction only when the selected physical VL is functional and the current router is the selected boundary endpoint.
- At the destination interposer endpoint, IA-XY should output the existing physical VL carrier direction only when the selected physical VL is functional and the current router is the selected interposer endpoint.
- If either chiplet has no functional VL despite startup validation, IA-XY should fail closed by returning no legal output direction rather than silently falling back to invalid chiplet-layer cardinal movement.

Assumption: In the current implementation, physical VL traversal is carried by `DIRECTION_HUB`. IA-XY may reuse that carrier in T0041, but it must not redefine the project-wide Up/Down semantics or change VN transition logic.

### Relationship To Existing XY And DeFT

Standard `XY`:

- Remains unchanged.
- Remains cardinal-only.
- Remains the route named `XY`.
- Must not be reinterpreted as interposer-aware in documentation, configs, analysis, or report prose.

IA-XY:

- Is a new baseline route, not a correction or replacement of standard `XY`.
- Reuses the `DEFT_2_5D` topology model and VL endpoint inventory.
- Uses deterministic XY movement inside each phase.
- May avoid known faulty physical VLs using current fault state, but does not use DeFT LUT optimization.
- Should keep metrics semantics, traffic semantics, topology behavior, fault semantics, and runner/analysis semantics unchanged unless a future task explicitly scopes a change.

DeFT:

- Remains the algorithmic route under comparison.
- Continues to use schema-v1 LUT selection and existing VN rules.
- Must not be modified by IA-XY implementation.

Because `DeftVirtualNetwork::isEnabled()` is currently topology-scoped for `DEFT_2_5D`, future IA-XY implementation must verify how the existing VN assignment and movement filters interact with IA-XY hub/VL traversal. T0041 should not weaken or bypass VN transition restrictions. If IA-XY needs routing-specific VN behavior, that is a separate design task.

### Naming And Configuration Recommendation

Recommended public names:

- Documentation label: `IA-XY`.
- Routing string: `INTERPOSER_AWARE_XY`.
- Example future config name: `deft_2_5d_interposer_aware_xy_baseline.yaml`.

Avoid naming the mode just `XY` or `XY_2_5D`, because that can imply standard XY semantics. `INTERPOSER_AWARE_XY` is verbose but clear that the route intentionally uses the interposer.

### Expected Future Implementation Touch Points

Likely T0041 source and configuration surfaces:

- `external/noxim/src/routingAlgorithms/Routing_INTERPOSER_AWARE_XY.h` and `external/noxim/src/routingAlgorithms/Routing_INTERPOSER_AWARE_XY.cpp` for the new registered routing algorithm.
- `external/noxim/src/routingAlgorithms/RoutingAlgorithms.*` only if registry behavior needs updates beyond the existing self-registration pattern.
- `external/noxim/src/GlobalParams.h` for an optional routing-name constant.
- `external/noxim/src/ConfigurationManager.cpp` for help text and any validation that the new route is selected only with compatible topology assumptions.
- `external/noxim/src/DeftTopology.*` only if a missing read-only helper is required; existing mapping, boundary-router, VL endpoint, and functional-state helpers should be preferred.
- `external/noxim/src/DeftVirtualNetwork.*` should not be changed during T0041 unless a new task explicitly scopes VN behavior. T0041 should first work with the existing VN filter.
- `external/noxim/config_examples/deft_2_5d_interposer_aware_xy_baseline.yaml` for a minimal selectable config.
- `external/noxim/bin/power.yaml` only if the future implementation chooses to add an explicit power entry rather than relying on the default routing power entry.
- Tracking docs: `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, `docs/ARCHITECTURE.md`, and possibly `docs/DECISIONS.md`.

### Future Validation Plan

T0041 should validate implementation in stages:

- Confirm `external/noxim` is clean before source edits.
- Build with the known Noxim build command from `external/noxim`: `./build.sh`.
- Confirm the new routing string is listed or accepted without changing standard `XY` help text semantics.
- Run a no-traffic or tiny construction smoke only after the new route builds, to confirm configuration loading and route registration.
- Run a focused same-chiplet packet smoke where IA-XY should behave like local XY and should not enter the interposer.
- Run a focused inter-chiplet no-fault smoke where the packet traverses source local XY, source VL, interposer XY, destination VL, and destination local XY.
- Run a focused explicit-fault smoke where the preferred source or destination VL is faulty and IA-XY selects a different functional VL.
- Run a negative smoke if feasible where an invalid/no-functional-VL state fails closed, but do not change fault-mask validation merely to create this case.
- Confirm standard `XY` and `DEFT` route files are unchanged except for allowed documentation or registry references.
- Run `git diff --check` and record `external/noxim` status.

Concrete simulator commands should be selected in T0041 only after the new config files and any tiny hardcoded traffic inputs exist. Do not run a full IA-XY-vs-DeFT matrix in T0041.

### Risks And Open Questions

- Risk: IA-XY may look too similar to DeFT if it uses the same source/destination VL selections. Keep IA-XY deterministic and non-LUT-based.
- Risk: IA-XY could violate current VN movement filters if its hub traversal phases are not aligned with existing `DEFT_2_5D` VN behavior.
- Risk: A simple nearest-VL policy may still create congestion or poor reachability under fixed-window injection; that is acceptable for a baseline but must be reported descriptively.
- Risk: Reusing `DIRECTION_HUB` continues the current physical carrier convention and does not settle explicit Up/Down port semantics.
- Open question: Should IA-XY choose the source exit and destination entry independently by nearest Manhattan distance, or use a directional preferred slot first?
- Open question: Should IA-XY use one VC or the existing two VC requirement for `DEFT_2_5D`? Current topology validation requires two VCs, so T0041 should preserve that unless a separate task changes it.
- Open question: Should power modeling add an explicit `INTERPOSER_AWARE_XY` entry or use the existing default routing power parameters?

### Future T0041 Acceptance Criteria

T0041 should be accepted only if:

- `INTERPOSER_AWARE_XY` is a separately selectable routing mode.
- Standard `XY` remains cardinal-only and unchanged.
- `DEFT` routing, LUT loading/use, VN transition restrictions, VL fault injection, topology behavior, traffic semantics, metrics semantics, and runner/analysis semantics remain unchanged.
- Same-chiplet IA-XY routes stay on the chiplet layer.
- Inter-chiplet IA-XY routes enter the interposer through a functional source VL and exit through a functional destination VL.
- Faulted preferred VLs are avoided when an alternate functional VL exists.
- Build validation and targeted smokes pass and are recorded.
- No generated T0026/T0027/T0028 artifacts, `final_report/main.pdf`, `final_report.zip`, or Extended Proposal files are changed.

### Claim-Safety Rules For Future Experiments

IA-XY design alone supports no performance claim. Future report or experiment updates must follow these rules:

- Do not compare IA-XY to DeFT until T0041 validates IA-XY and a later T0042-style experiment creates new versioned artifacts.
- Do not overwrite T0026/T0027/T0028 artifacts or reinterpret existing `XY` blank cells as IA-XY evidence.
- Label all tables and prose with `IA-XY` or `INTERPOSER_AWARE_XY`, not `XY`.
- Preserve blank-aware denominators: reachability is blank when no packets are injected, and latency is blank when no packets are received.
- Avoid improvement, ranking, latency-comparison, or complete-reachability language unless supported by new validated artifacts.
- Keep the current final submission status unchanged until a future explicit report task accepts new validated results.

## T0041 Interposer-Aware XY Baseline Implementation

T0041 implements the T0040 design as a selectable Noxim routing mode named `INTERPOSER_AWARE_XY`. The implementation is a new baseline route and does not reinterpret or replace standard `XY`.

### Implemented Surfaces

- `external/noxim/src/routingAlgorithms/Routing_INTERPOSER_AWARE_XY.h`
- `external/noxim/src/routingAlgorithms/Routing_INTERPOSER_AWARE_XY.cpp`
- `external/noxim/src/GlobalParams.h`
- `external/noxim/src/ConfigurationManager.cpp`
- `external/noxim/bin/power.yaml`
- `external/noxim/config_examples/deft_2_5d_interposer_aware_xy_baseline.yaml`
- `external/noxim/config_examples/deft_2_5d_ia_xy_smoke_same_chiplet.txt`
- `external/noxim/config_examples/deft_2_5d_ia_xy_smoke_inter_chiplet.txt`

The route self-registers through the existing routing-algorithm registration pattern. Configuration validation allows `INTERPOSER_AWARE_XY` only with `DEFT_2_5D`, and help text exposes the new routing string. The minimal config leaves the DeFT LUT filename empty because IA-XY does not use schema-v1 LUT selection.

### Route Phases

- Same-chiplet packets route with local dimension-order XY on the chiplet layer and do not enter the interposer.
- Inter-chiplet packets select a functional source-chiplet VL and a functional destination-chiplet VL using current `DeftTopology` endpoint and functional-state queries.
- Source-chiplet traversal uses local XY to the selected source boundary router.
- Source VL traversal uses the existing physical VL carrier, `DIRECTION_HUB`, from chiplet to active interposer.
- Active-interposer traversal uses dimension-order XY between selected interposer endpoints.
- Destination VL traversal uses `DIRECTION_HUB` from active interposer to the selected destination boundary router.
- Destination-chiplet traversal uses local XY to the final chiplet router.

If a needed topology mapping or functional VL is unavailable, IA-XY fails closed by returning no legal output direction instead of falling back to invalid chiplet-layer cardinal movement.

### VL Selection Policy

IA-XY does not use the DeFT schema-v1 LUT, DeFT VL optimization, traffic-demand optimization, or load-balanced adaptive selection. For each inter-chiplet packet, it evaluates all functional source-chiplet VLs against all functional destination-chiplet VLs and chooses the pair with the smallest deterministic Manhattan path score:

- source router to source boundary router,
- source interposer endpoint to destination interposer endpoint,
- destination boundary router to final destination router.

Ties are resolved by lower source `vl_id`, then lower destination `vl_id`. This policy gives deterministic behavior and explicit fallback away from known faulty physical VLs without turning IA-XY into DeFT.

### Preservation Notes

`external/noxim/src/routingAlgorithms/Routing_XY.cpp` and `external/noxim/src/routingAlgorithms/Routing_DEFT.cpp` were not modified. T0041 did not change VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology construction, traffic semantics, metrics semantics, runner/analysis semantics, generated T0026/T0027/T0028 artifacts, `final_report/main.pdf`, `final_report.zip`, or Extended Proposal files.

Assumption: IA-XY reuses the existing topology-scoped two-VC validation and VN filter for `DEFT_2_5D`; it does not introduce routing-specific VN behavior.

Blocked: IA-XY performance comparison claims remain blocked until a later T0042-style experiment defines a limited matrix and produces new versioned artifacts.

### T0041 Validation Summary

The known Noxim build command from `external/noxim`, `./build.sh`, completed successfully. Targeted smokes validated route registration/config loading, same-chiplet local behavior without IA-XY VL traversal debug logs, no-fault inter-chiplet VL/interposer traversal, and explicit-fault fallback from faulty `vl_id=0` to functional `vl_id=1`. These are implementation smokes only and do not support performance claims.

## T0042 Limited IA-XY vs DeFT Comparison

T0042 created a new exploratory artifact set for a limited IA-XY-vs-DEFT comparison after T0041 validated the selectable `INTERPOSER_AWARE_XY` mode. The task did not modify simulator source, standard `XY`, `DEFT`, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, or runner/analysis source semantics.

### Matrix

The executed matrix was deliberately small:

| Dimension | Values |
| --- | --- |
| Routing modes | `INTERPOSER_AWARE_XY`, `DEFT` |
| Traffic profiles | `uniform`, `localized_40`, `hotspot_3x10` |
| Fault masks | `0x0000`, `0x1111` |
| Seeds | `0`, `1` |
| Simulation window | `-sim 10000` |
| Warm-up window | `-warmup 1000` |
| Stats format | JSON |
| Planned/completed runs | 24 / 24 |

Assumption: Reusing the fixed-window T0025 `-sim 10000` and `-warmup 1000` policy keeps T0042 comparable in shape to previous generated artifacts, but the two-seed/two-mask matrix is not a final sweep.

### Artifact Set

All T0042 artifacts were written under `external/noxim/other/generated/t0042_iaxy_deft_limited_v1/`. Key files are:

- `manifest.json`: command, return-code, log-path, stats-path, matrix, analysis-rule, and claim-limit manifest.
- `commands.sh`: replayable simulator and DEFT LUT-generation command listing.
- `summary.csv`: per-run metrics from the existing runner summary surface.
- `analysis/`: mechanical analysis scaffold produced by `external/noxim/other/deft_analysis_artifacts.py`.
- `blank_aware_condition_summary.csv`: T0042 blank-aware condition-level summary.
- `blank_aware_pair_summary.csv`: T0042 IA-XY/DEFT side-by-side readiness summary.
- `blank_aware_validation.json`: raw manifest/stat/log cross-check report.
- `stats/`, `logs/`, and `luts/`: per-run JSON stats, per-run stdout/stderr logs, and generated DEFT LUTs for `0x0000` and `0x1111`.

### Result Interpretation

The blank-aware cross-check passed: all 24 runs completed with return code `0`, all 24 JSON stats files and stdout/stderr logs exist, and the generated summaries match raw JSON stats with no recorded mismatches.

Condition-level observations:

- `INTERPOSER_AWARE_XY|hotspot_3x10` injected zero packets for both fault masks and both seeds, so those IA-XY reachability and latency cells remain blank.
- `INTERPOSER_AWARE_XY|uniform|0x0000` injected packets but received zero packets, so reachability is `0` and latency remains blank.
- `uniform|0x1111`, `localized_40|0x0000`, and `localized_40|0x1111` have injected and received packets for both IA-XY and DEFT, but the result is descriptive side-by-side evidence only.
- All DEFT condition cells in this limited matrix had packet injection and packet reception.

Claim limits:

- T0042 supports exploratory report-support discussion only.
- Do not use T0042 to make rankings, improvement percentages, statistical conclusions, or final-sweep replacement claims.
- Do not update `final_report/main.tex`, `final_report/main.pdf`, or `final_report.zip` from T0042 without a later explicit report task.

Blocked: Strong final-report claims remain blocked because T0042 is a limited two-seed, two-fault-mask exploratory matrix and still has blank IA-XY hotspot cells.

## T0043 Source-Cutoff and Post-Injection Drain Policy Design

T0043 defines a future eventual-delivery measurement mode. It is a design-only policy and does not change current simulator behavior, helper behavior, routing logic, traffic semantics, metric exports, runner semantics, generated artifacts, or report claims.

Source alignment:

- `Extended_Proposal.pdf` is the primary requirements source for evaluating synthetic traffic, permanent VL fault scenarios, and reachability, latency, and throughput.
- The original DeFT paper is the primary algorithmic reference for 2.5D inter-chiplet routing through source-side VL selection, active-interposer traversal, destination-side VL entry, VN separation, and VL-fault tolerance.
- `Proposal.pdf` remains initial context only.

### Purpose

Current fixed-window experiments measure delivery only inside a continuous-injection time window. That is useful as historical final-report support, but it does not answer an eventual-delivery question: after sources stop adding new work, does the already accepted measured traffic eventually leave the network, and within what bounded drain time?

The T0043 policy defines the semantics that a later T0044 implementation should add before any eventual-delivery experiment or report claim.

Assumption: The policy is an additional mode. Existing fixed-window behavior remains the default and remains the interpretation for T0026/T0027/T0028 and T0042 artifacts.

Blocked: Eventual-delivery claims remain blocked until the policy is implemented, smoke-tested, and used to create new versioned artifacts.

### Source Cutoff

Source cutoff is a configured measured-traffic boundary after reset and any accepted warm-up handling. At the cutoff boundary:

- Processing elements stop admitting new measured packets.
- Random, table-based, and hardcoded traffic events at or after the cutoff are suppressed for the measured run.
- Packets already accepted before cutoff remain valid measured packets and may continue emitting body and tail flits.
- Packets are counted in the measured denominator only when their head flit enters the network during the measured injection interval.

The measured injection interval is:

```text
measurement_start_cycle <= head_flit_injection_cycle < source_cutoff_cycle
```

The first implementation should expose the interval explicitly, for example as a drain mode with `source_cutoff_cycles` measured from `measurement_start_cycle`. The exact option names are left to T0044, but the semantics are fixed by this design.

Assumption: Packet admission is the source-cutoff concept; the future implementation may still need to emit remaining flits of packets whose heads were accepted before cutoff.

### Drain Start

The drain phase begins at the cutoff boundary. No new measured packet heads may be admitted after this point. The drain phase is not complete until the in-flight empty condition is true.

For reporting, a future implementation should distinguish:

- `source_cutoff_cycle`: when new measured packet heads stop.
- `drain_start_cycle`: the same cycle boundary used to start timeout accounting.
- `sources_quiesced_cycle`: the first cycle when all source-local queues have emitted the remaining flits of accepted measured packets, if this is later than the cutoff.
- `drain_completed_cycle`: the first cycle when the in-flight empty condition is true.

This distinction avoids hiding source-side queued flits inside the network-drain result.

### In-Flight Empty Condition

The in-flight empty condition is true only when all measured accepted traffic has either been delivered or, on timeout, is explicitly reported as undelivered. A later implementation should treat the network as empty only when all of these are true:

- Every source PE packet queue is empty, including packets accepted before cutoff whose body or tail flits have not yet entered the router.
- Every router input buffer, including all directions and VCs used by `DEFT_2_5D`, is empty for measured traffic.
- Every hub/VL carrier buffer or signal path used by the topology has no measured flit in transit.
- No reservation-table state remains for a measured packet.
- `total_received_packets == total_injected_packets` and `total_received_flits == total_injected_flits` for measured packets.

If the future implementation cannot tag measured flits separately from warm-up or unmeasured traffic, it must prevent unmeasured traffic from entering the network during the eventual-delivery measurement.

### Timeout Policy

Eventual-delivery mode must be bounded. A later implementation should require an explicit `drain_timeout_cycles` value whenever drain mode is enabled.

Timeout accounting starts at `drain_start_cycle`. The run stops with `stop_reason = drain_completed` if the in-flight empty condition becomes true before the timeout. It stops with `stop_reason = drain_timeout` if:

```text
current_cycle >= drain_start_cycle + drain_timeout_cycles
```

and the in-flight empty condition is still false.

Timeout is a validation result, not a simulator crash. The stats export should report the remaining measured in-flight counts at timeout, including at least undelivered packets and undelivered flits.

Blocked: T0043 does not select final experiment timeout values. A later experiment-policy task must choose final values after T0044 smoke validation exists.

### Metric Denominators

Drain-mode exports should make denominators explicit instead of reusing the fixed-window denominator silently.

For measured packets:

- `measured_injected_packets`: packet heads injected in `[measurement_start_cycle, source_cutoff_cycle)`.
- `measured_received_packets`: measured packets delivered before drain completion or timeout.
- `reachability_ratio`: `measured_received_packets / measured_injected_packets`; blank/null when `measured_injected_packets == 0`.
- `global_average_delay_cycles`: received-packet-weighted average over measured received packets only; blank/null when `measured_received_packets == 0`.
- `undelivered_packets_at_stop`: `measured_injected_packets - measured_received_packets`.
- `measured_received_flits`: measured flits received before drain completion or timeout.
- `drain_elapsed_cycles`: `stop_cycle - drain_start_cycle`.
- `total_measured_elapsed_cycles`: `stop_cycle - measurement_start_cycle`.
- `drain_mode_network_throughput_flits_per_cycle`: `measured_received_flits / total_measured_elapsed_cycles`; blank/null if elapsed cycles are zero.

The future implementation may also export fixed-window-compatible fields for continuity, but it must not relabel drain-mode values as if they were generated by the old `-sim` denominator.

### Warm-Up Interaction

Warm-up is the riskiest denominator interaction because current fixed-window runs allow traffic during warm-up while stats ignore early injection and reception. For eventual-delivery analysis, unmeasured warm-up traffic can prevent a clean empty-network test.

T0043 accepts the following policy for future implementation:

- In drain mode, the clean measured injection interval starts at `measurement_start_cycle = reset_time + stats_warm_up_time`.
- During warm-up, measured traffic generation is gated off unless a later task explicitly designs a preloaded-warm-up mode with its own flush rule.
- Counters used for drain-mode denominators start at `measurement_start_cycle`.
- Source cutoff must be strictly after `measurement_start_cycle`.
- Any final experiment that uses warm-up must report whether warm-up was source-gated or preloaded-and-flushed.

Assumption: The first implementation should use source-gated warm-up for deterministic smoke tests, because current Noxim does not have a separate measured-flit tag that can ignore pre-warm-up traffic during empty detection.

### Difference From Fixed-Window `-sim`

Current `-sim` behavior runs one continuous-injection simulation for a configured number of cycles after reset. Sources may continue generating until the simulation ends. The final stats are finite-window measurements over the configured stats window, and packets can remain in flight at the end.

The drain policy differs as follows:

- It stops new measured packet admission at a source cutoff.
- It continues simulation after cutoff only to drain accepted traffic or reach timeout.
- It uses actual stop reason and actual measured elapsed cycles in denominator reporting.
- It can distinguish completed delivery from timeout with remaining in-flight traffic.
- It does not reinterpret T0026/T0027/T0028 or T0042 fixed-window artifacts.

### Difference From Current Noxim `-volume`

Current Noxim `-volume` stops when a delivered-flit counter reaches a configured threshold or when the maximum simulation cycles are reached. It is not a source-cutoff or eventual-delivery mechanism.

The drain policy differs from `-volume` because:

- `-volume` does not stop source packet generation before waiting for drain.
- `-volume` is based on delivered flits, not on a known accepted packet denominator.
- `-volume` may stop while source queues, router buffers, or in-flight packets still exist.
- `-volume` does not prove all accepted measured packets were delivered.
- `-volume` does not define warm-up-safe measured traffic ownership.
- `-volume` does not export drain-completion versus timeout stop reasons.

The current `-volume` behavior should remain unchanged unless a later task explicitly scopes compatibility updates.

### Future Implementation Surfaces

T0044 is likely to touch these surfaces if the design is accepted:

- `external/noxim/src/GlobalParams.h` and `external/noxim/src/GlobalParams.cpp` for drain-mode configuration fields.
- `external/noxim/src/ConfigurationManager.cpp` for YAML/CLI parsing and validation.
- `external/noxim/src/Main.cpp` for phased execution, timeout accounting, stop reason, and final status export.
- `external/noxim/src/ProcessingElement.h` and `external/noxim/src/ProcessingElement.cpp` for source gating, accepted-packet ownership, and source queue-empty queries.
- `external/noxim/src/Router.h` and `external/noxim/src/Router.cpp` for router buffer-empty and reservation-empty queries.
- `external/noxim/src/Buffer.*`, `external/noxim/src/NoC.*`, and any active hub/VL carrier surface needed for global in-flight checks.
- `external/noxim/src/Stats.*` and `external/noxim/src/GlobalStats.*` for drain-mode counters, denominators, stop reason fields, and JSON/CSV export.
- `external/noxim/other/deft_experiment_runner.py` for an opt-in drain-mode launch surface.
- `external/noxim/other/deft_analysis_artifacts.py` or a new versioned analysis helper for drain-mode fields.

T0044 must preserve existing fixed-window defaults and must not change standard `XY`, `DEFT`, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, traffic semantics outside the opt-in source gate, or existing runner/analysis behavior outside opt-in drain mode.

### Expected Future Smoke Cases

T0044 should define exact commands only after the implementation and configs exist. The expected smoke cases are:

- No-traffic drain smoke: no measured packets accepted; drain completes immediately; reachability and latency are blank/null, not zero.
- Single same-chiplet hardcoded packet before cutoff: one packet accepted, delivered, and drained with `stop_reason = drain_completed`.
- Single inter-chiplet `DEFT` hardcoded packet before cutoff with a no-fault LUT: one packet accepted, delivered, and drained.
- Source-cutoff suppression smoke: a hardcoded packet scheduled before cutoff is accepted, while a hardcoded packet scheduled at or after cutoff is not admitted.
- Timeout smoke: a deliberately topology-incompatible or otherwise blocked packet stops with `stop_reason = drain_timeout`, nonzero undelivered counts, and no crash.
- Warm-up gating smoke: with nonzero warm-up, no measured traffic is accepted before `measurement_start_cycle`, and denominators count only packets whose heads enter during the measured injection interval.
- Compatibility smoke: with drain mode disabled, existing fixed-window `-sim` behavior and current `-volume` behavior remain available.

### Artifact Preservation

T0026/T0027/T0028 remain the historical fixed-window final-report artifact chain. T0042 remains a limited exploratory fixed-window IA-XY-vs-DEFT artifact set. T0043 does not regenerate, revise, or reinterpret those outputs.

Blocked: Stronger eventual-delivery report claims require new versioned artifacts created after T0044 implementation and validation.

## Post-Submission Future Backlog

T0039 records the remaining technical gaps as future backlog items only. These tasks do not block the current final submission package, which remains `final_report/main.pdf`, the current `final_report/` source tree, and `final_report.zip`.

Future development must preserve these guardrails:

- Do not reinterpret T0026/T0027/T0028 as stronger performance evidence.
- Do not reinterpret T0042 as stronger performance evidence.
- Do not overwrite generated T0026/T0027/T0028 or T0042 artifacts.
- Use new versioned artifact directories for any future experiment.
- Keep standard `XY` separate from any new interposer-aware baseline.
- Preserve existing `DEFT` behavior unless a future task explicitly scopes a DeFT change.
- Preserve claim-safety rules until new validated artifacts support stronger wording.

Ordered future backlog:

| Task | Type | Technical gap |
| --- | --- | --- |
| T0040 | Design | Completed IA-XY design: a new `INTERPOSER_AWARE_XY` baseline that is explicitly not standard `XY`. |
| T0041 | Implementation | Completed selectable `INTERPOSER_AWARE_XY` baseline without modifying existing `XY` or `DEFT`. |
| T0042 | Experiment | Completed limited IA-XY-vs-DEFT comparison in a new artifact directory with blank-aware claim limits. |
| T0043 | Design | Completed source-cutoff plus post-injection drain/timeout policy for eventual-delivery analysis. |
| T0044 | Implementation | Implement and validate the accepted drain policy before any full sweep. |
| T0045 | Feasibility | Evaluate directional endpoint fault modeling against the current physical bidirectional VL model. |
| T0046 | Feasibility | Assess PARSEC/GEM5 trace support requirements and validation burden. |
| T0047 | Implementation | Implement trace ingestion only after a trace format and validation plan are accepted. |
| T0048 | Report | Regenerate report material only after new validated artifacts exist. |

Assumption: Future backlog work starts with design or feasibility tasks before implementation, except when a prior design task has already accepted the required semantics and validation plan.

Blocked: Stronger unrestricted XY-vs-DEFT claims remain blocked until an interposer-aware baseline is implemented, validated, and evaluated in new artifact directories.

Blocked: Eventual-delivery claims remain blocked until source-cutoff plus drain/timeout semantics are implemented, validated, and used to create new versioned artifacts.

Blocked: Paper-aligned single-direction fault cases remain blocked until directional endpoint fault modeling is evaluated and, if accepted, implemented.

Blocked: PARSEC/GEM5 workload claims remain blocked until a trace pipeline is validated.

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
