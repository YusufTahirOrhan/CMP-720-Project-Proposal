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

## Router Model

Planned router categories:

- Chiplet router: router inside a chiplet-local mesh.
- Boundary router: chiplet router directly attached to a Vertical Link.
- Interposer router: router on the active interposer layer.

Router metadata should support:

- Router ID.
- Coordinates.
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

Planned:

- A Vertical Link connects one chiplet boundary router to one active interposer router.
- Each Vertical Link has a stable ID.
- Each Vertical Link belongs to exactly one chiplet.
- Vertical Links are bidirectional in the system model.
- Vertical Links can be marked functional or faulty by the Fault Injection Manager.
- DeFT deadlock-freedom must not depend on restricting Vertical Link choices.

Assumption: Faults are represented at the Vertical Link level unless later code inspection requires directional link fault states.

## Fault Injection Manager

Planned:

- Runs before the first simulation cycle.
- Reads fault-rate configuration and random seed.
- Selects permanent faulty Vertical Links.
- Ensures at least one functional Vertical Link remains per chiplet.
- Exposes current fault state to routing and LUT lookup logic.

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
