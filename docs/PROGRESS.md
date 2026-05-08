# Project Progress

## Current Phase

Phase 8 - Experiment Automation and Metrics Collection

## Completed Tasks

- `T0001` - Repository analysis and documentation setup.
- `T0002` - Confirm repository contents, Noxim availability, and source-document availability.
- `T0003` - Establish baseline build command.
- `T0004` - Run baseline Noxim simulation.
- `T0005` - Map Noxim extension points.
- `T0006` - Design 2.5D router ID and coordinate mapping.
- `T0007` - Implement 2.5D topology construction.
- `T0008` - Add Vertical Link data model.
- `T0009` - Add Boundary Router Identification.
- `T0010` - Implement Fault Injection Manager.
- `T0011` - Add Fault Mask Validation.
- `T0012` - Design VN State Representation.
- `T0013` - Implement VN Assignment Rules.
- `T0014` - Enforce VN Transition Restrictions.
- `T0015` - Design Offline VL LUT Format.
- `T0016` - Implement Offline VL LUT Generator.
- `T0017` - Load and Use VL LUT at Boundary Routers.
- `T0018` - Configure XY Baseline Modes.
- `T0019` - Add Synthetic Traffic Configurations.
- `T0020` - Add Metrics Collection.
- `T0023` - Add or register the Noxim source tree.
- `T0024` - Decide Windows 11 development environment and persist paper reference.

DeFT VN assignment behavior, the first VN movement-transition restriction enforcement layer, the offline VL LUT schema/generator, the runtime schema-v1 LUT loading/use path, explicit XY fault-free/fault-injected baseline configuration modes, proposal-required synthetic traffic configuration profiles, and machine-readable metrics export now exist for `DEFT_2_5D`. Packet-carrying inter-chiplet DeFT/XY validation, experiment automation, final sweeps, and analysis artifacts have not been implemented.

## In-Progress Tasks

- None.

## Blocked Tasks

- None.

## Last Validation Result

- T0020 Add Metrics Collection completed on 2026-05-08.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md`.
- Before implementation, `git status --short --branch` in the parent repository showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with no local file modifications.
- Before implementation, `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch` showed branch `feat/baseline-noxim...origin/feat/baseline-noxim` with no local file modifications.
- Source document availability was confirmed for `Extended_Proposal.pdf`, `Proposal.pdf`, and `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
- Short source-document checks found the Extended Proposal's reachability, latency, and throughput evaluation requirement; the original DeFT paper confirms reachability and latency as central DeFT evaluation motivations.
- Source inspection found existing `GlobalStats` CSV/JSON export support, existing average latency and throughput aggregation, and no measured injected-packet denominator for reachability.
- T0020 updated `external/noxim/src/ProcessingElement.h` and `external/noxim/src/ProcessingElement.cpp` to count packets and flits when packet head flits enter the network from a PE after the stats warm-up boundary.
- T0020 updated `external/noxim/src/GlobalStats.h` and `external/noxim/src/GlobalStats.cpp` to aggregate injected packet/flit counts, compute `reachability_ratio`, and emit routing/traffic/fault identifiers plus reachability, latency, and throughput fields in existing CSV/JSON stats exports.
- The first WSL build attempt inside the sandbox failed because no WSL distribution was visible in the sandboxed environment.
- The first approved WSL `./build.sh` attempt timed out before returning a build result; the same documented command was rerun with a longer timeout and completed with exit code `0`.
- The successful `./build.sh` rerun rebuilt and relinked `bin/noxim`; only pre-existing warnings from `Router.cpp` and `Stats.cpp` were emitted.
- The approved JSON metrics export smoke used `deft_2_5d_traffic_localized_40.yaml` with `-seed 0 -sim 20 -warmup 0 -stats_format json -stats_file /tmp/deft_t0020_metrics_smoke.json` and completed with exit code `0`.
- The JSON export reported `topology=DEFT_2_5D`, `routing_algorithm=XY`, `traffic_distribution=TRAFFIC_TABLE_BASED`, `deft_active_fault_mask=0x0000`, `total_injected_packets=13`, `total_injected_flits=104`, `total_received_packets=2`, `total_received_flits=11`, `reachability_ratio=0.15384615384615385`, `global_average_delay_cycles=5`, `network_throughput_flits_per_cycle=0.55`, and `average_ip_throughput_flits_per_cycle_per_ip=0.00859375`.
- The approved CSV metrics export smoke used the same localized traffic configuration and emitted the same comparison fields and values in a single header row plus one data row.
- `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0` after LF-normalizing the modified source files.
- No regression command, `./regression.sh --update`, experiment runner, result sweep, final analysis, golden regression output update, DeFT routing change, VN transition logic change, VL fault-injection change, T0016 generator format change, T0017 runtime LUT schema/use-path change, or T0019 traffic-profile semantic change was performed.
- ADR-0031 records the durable decision to reuse the existing stats export path and count injected packets at PE head-flit injection.
- Assumption: T0020 reachability counts packets when their head flit actually enters the network after the configured warm-up boundary.
- Assumption: Short smoke reachability can be below one because packets can remain in flight at the end of a short run; the T0020 smokes validate export shape only and are not performance results.
- Blocked: Packet-carrying DeFT-vs-XY validation, traffic-profile-specific LUT generation, physical-vs-directional experiment percentage accounting, experiment automation, final sweeps, and performance analysis remain future work.

## Important Changed Files

Documentation files created or updated during `T0001`:

- `AGENTS.md`
- `docs/ROADMAP.md`
- `docs/TASKS.md`
- `docs/ARCHITECTURE.md`
- `docs/DECISIONS.md`
- `docs/PROMPTS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`

Documentation files updated during `T0002`:

- `docs/PROGRESS.md`
- `docs/TASKS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`

Documentation files updated during `T0023` checks:

- `docs/PROGRESS.md`
- `docs/TASKS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Documentation files updated during `T0003` blocked build validation:

- `docs/PROGRESS.md`
- `docs/TASKS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`

Files updated during `T0003` completed build validation:

- `docs/PROGRESS.md`
- `docs/TASKS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files updated during `T0004` baseline simulation validation:

- `docs/PROGRESS.md`
- `docs/TASKS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`

Files updated during `T0005` source-inspection documentation:

- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files updated during `T0006` router ID and coordinate mapping design:

- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files created or updated during `T0007` 2.5D topology construction:

- `external/noxim/src/DeftTopology.h`
- `external/noxim/src/DeftTopology.cpp`
- `external/noxim/src/GlobalParams.h`
- `external/noxim/src/ConfigurationManager.cpp`
- `external/noxim/src/NoC.h`
- `external/noxim/src/NoC.cpp`
- `external/noxim/src/Router.cpp`
- `external/noxim/src/Utils.h`
- `external/noxim/src/Main.cpp`
- `external/noxim/src/GlobalStats.cpp`
- `external/noxim/config_examples/deft_2_5d_topology.yaml`
- `external/noxim/config_examples/deft_2_5d_no_traffic.txt`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files updated during `T0008` Vertical Link data model:

- `external/noxim/src/DeftTopology.h`
- `external/noxim/src/DeftTopology.cpp`
- `external/noxim/src/NoC.cpp`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files updated during `T0009` Boundary Router Identification:

- `external/noxim/src/DeftTopology.h`
- `external/noxim/src/DeftTopology.cpp`
- `external/noxim/src/NoC.cpp`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files created or updated during `T0010` Fault Injection Manager:

- `external/noxim/src/DeftFaultInjectionManager.h`
- `external/noxim/src/DeftFaultInjectionManager.cpp`
- `external/noxim/src/GlobalParams.h`
- `external/noxim/src/GlobalParams.cpp`
- `external/noxim/src/ConfigurationManager.cpp`
- `external/noxim/src/NoC.cpp`
- `external/noxim/config_examples/deft_2_5d_topology.yaml`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files updated during `T0011` Fault Mask Validation:

- `external/noxim/src/DeftFaultInjectionManager.h`
- `external/noxim/src/DeftFaultInjectionManager.cpp`
- `external/noxim/src/NoC.cpp`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files updated during `T0012` VN State Representation Design:

- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files created or updated during `T0013` VN Assignment Rules:

- `external/noxim/src/DeftVirtualNetwork.h`
- `external/noxim/src/DeftVirtualNetwork.cpp`
- `external/noxim/src/ProcessingElement.cpp`
- `external/noxim/src/Router.cpp`
- `external/noxim/src/ReservationTable.h`
- `external/noxim/src/ReservationTable.cpp`
- `external/noxim/src/ConfigurationManager.cpp`
- `external/noxim/config_examples/deft_2_5d_topology.yaml`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files updated during `T0014` VN Transition Restrictions:

- `external/noxim/src/DeftVirtualNetwork.h`
- `external/noxim/src/DeftVirtualNetwork.cpp`
- `external/noxim/src/Router.cpp`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files updated during `T0015` Offline VL LUT Format Design:

- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files created or updated during `T0016` Offline VL LUT Generator:

- `external/noxim/other/deft_vl_lut_generator.py`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files created or updated during `T0017` Runtime VL LUT Loading and Boundary Use:

- `external/noxim/src/DeftVerticalLinkLut.h`
- `external/noxim/src/DeftVerticalLinkLut.cpp`
- `external/noxim/src/routingAlgorithms/Routing_DEFT.h`
- `external/noxim/src/routingAlgorithms/Routing_DEFT.cpp`
- `external/noxim/src/GlobalParams.h`
- `external/noxim/src/GlobalParams.cpp`
- `external/noxim/src/ConfigurationManager.cpp`
- `external/noxim/src/NoC.cpp`
- `external/noxim/bin/power.yaml`
- `external/noxim/config_examples/deft_2_5d_topology.yaml`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files created or updated during `T0018` Configure XY Baseline Modes:

- `external/noxim/config_examples/deft_2_5d_xy_baseline_fault_free.yaml`
- `external/noxim/config_examples/deft_2_5d_xy_baseline_fault_injected.yaml`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files created or updated during `T0019` Add Synthetic Traffic Configurations:

- `external/noxim/config_examples/deft_2_5d_traffic_uniform.yaml`
- `external/noxim/config_examples/deft_2_5d_traffic_localized_40.yaml`
- `external/noxim/config_examples/deft_2_5d_traffic_localized_40.txt`
- `external/noxim/config_examples/deft_2_5d_traffic_hotspot_3x10.yaml`
- `external/noxim/config_examples/deft_2_5d_traffic_hotspot_3x10.txt`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files updated during `T0020` Add Metrics Collection:

- `external/noxim/src/ProcessingElement.h`
- `external/noxim/src/ProcessingElement.cpp`
- `external/noxim/src/GlobalStats.h`
- `external/noxim/src/GlobalStats.cpp`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Noxim build files LF-normalized during `T0003`:

- `external/noxim/bin/Makefile`
- `external/noxim/bin/Makefile.deps`
- `external/noxim/build.sh`
- `external/noxim/other/Makefile`
- `external/noxim/other/run_tests.sh`
- `external/noxim/other/setup/fedora.sh`
- `external/noxim/other/setup/fix-dependencies.sh`
- `external/noxim/other/setup/systemc.sh`
- `external/noxim/other/setup/ubuntu.sh`
- `external/noxim/other/setup/ubuntu_noboost.sh`
- `external/noxim/other/setup/ubuntu_old.sh`
- `external/noxim/regression.sh`

Files created or updated during `T0024`:

- `.gitignore`
- `AGENTS.md`
- `docs/references/README.md`
- `docs/ROADMAP.md`
- `docs/TASKS.md`
- `docs/ARCHITECTURE.md`
- `docs/DECISIONS.md`
- `docs/PROMPTS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`

Ignored local reference file copied during `T0024`:

- `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`

External source tree registered during `T0023`:

- `external/noxim` - Noxim submodule and modifiable project fork from `https://github.com/YusufTahirOrhan/noxim`.

## Current Assumptions

- Assumption: `Extended_Proposal.pdf` is the primary technical source.
- Assumption: The original DeFT paper is the primary algorithmic reference for DeFT routing, VN rules, and VL selection.
- Assumption: The local ignored paper copy at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` is available in this workspace for future DeFT-specific tasks.
- Assumption: `Proposal.pdf` is initial context only.
- Assumption: The peer evaluation document is unrelated and out of scope.
- Assumption: `external/noxim` is the baseline Noxim source tree and modifiable project fork to use for future explicit Noxim implementation tasks.
- Assumption: Noxim source should remain in the `external/noxim` submodule and should not be vendored directly into the main repository.
- Assumption: Noxim source files should not be modified during documentation and baseline-discovery tasks.
- Assumption: The baseline build command is `./build.sh` from `external/noxim`, validated in WSL Ubuntu on 2026-05-05.
- Assumption: WSL Ubuntu is the recommended environment for Noxim builds, regressions, and simulation runs on this Windows 11 machine.
- Assumption: Noxim build scripts and Makefiles should remain LF-normalized for WSL.
- Assumption: The local backup archives under `external/noxim/other/deps-backup` can support dependency setup for SystemC and yaml-cpp in the current WSL environment.
- Assumption: Supplying `LD_LIBRARY_PATH` for the local SystemC shared library is an environment setup requirement for the current WSL run, not a simulator behavior change.
- Assumption: The documented Noxim User Guide short deterministic example is suitable as the initial smoke baseline simulation command.
- Assumption: The implementation target remains a 4-chiplet 2.5D system with 4x4 mesh chiplets and four Vertical Links per chiplet.
- Assumption: Future DeFT configuration should be routed through `external/noxim/src/ConfigurationManager.*` and `external/noxim/src/GlobalParams.*`.
- Assumption: Future 2.5D topology work should start from `external/noxim/src/NoC.*`, `external/noxim/src/Tile.h`, `external/noxim/src/Router.*`, and the direction/VC structures in `external/noxim/src/GlobalParams.h` and `external/noxim/src/DataStructs.h`.
- Assumption: Future DeFT routing should use Noxim's registered routing-algorithm surface unless the next design tasks identify a safer, narrower integration point.
- Assumption: The initial 2.5D topology mapping uses a 2x2 chiplet grid, a 4x4 local mesh per chiplet, an 8x8 active-interposer footprint, chiplet router IDs `0..63`, and interposer router IDs `64..127`.
- Assumption: Packet source and final destination IDs remain chiplet router IDs only; interposer router IDs are internal transit IDs.
- Assumption: A physical bidirectional VL is identified separately from its two directional channels or endpoint directions.
- Assumption: Future 2.5D implementation should use a layer-aware mapping helper rather than relying on Noxim's mesh-only `id2Coord()` and `Router::getNeighborId()` behavior for all router IDs.
- Assumption: T0007's `DeftTopology` helper is the starting layer-aware mapping surface for future topology, VL, and boundary-router work.
- Assumption: T0007's `DIRECTION_HUB` wiring is a temporary physical carrier for VL construction only; final DeFT Up/Down movement semantics remain a future decision.
- Assumption: T0008 centralizes physical VL state in `external/noxim/src/DeftTopology.*`; future fault injection and routing tasks should reuse this surface instead of introducing a parallel VL inventory.
- Assumption: T0009 derives boundary-router identity from the centralized VL inventory; future DeFT routing, VN, and VL LUT tasks should use the boundary-router query surface instead of introducing a parallel boundary-router endpoint table.
- Assumption: A Vertical Link is represented as one physical bidirectional connection with one mutable functional state by default.
- Assumption: Directional VL channel accounting can be derived later if needed, but it should not replace the physical VL identity model without a new decision.
- Assumption: T0008 structural validation checks the VL inventory; T0011 fault-mask validation checks explicit and generated masks against the current physical VL model before startup fault state is applied.
- Assumption: The construction-only `DEFT_2_5D` smoke configuration is valid for topology instantiation checks, but not for DeFT performance evaluation because it intentionally generates no packets.
- Assumption: Future tasks must continue on the existing Git branch by default; Codex must not create or switch task branches unless the user explicitly asks for that operation.
- Assumption: T0010 fault configuration is counted over the current 16 physical bidirectional VLs. Final percentage conversion and directional VL accounting remain future work.
- Assumption: Startup fault state is metadata for future routing and LUT tasks in T0010; physical VL wiring is still constructed for all VLs, and route selection does not yet avoid faulty VLs.
- Assumption: T0011 treats four faulty physical bidirectional VLs out of 16 as the current physical 25% validation target for inspectability only.
- Assumption: T0011 does not resolve final percentage conversion or directional VL accounting for experiment automation.
- Assumption: T0012 maps DeFT VN state directly to Noxim VC IDs: VC 0 is VN.0 and VC 1 is VN.1 for DeFT-enabled runs.
- Assumption: T0013 treats `DEFT_2_5D` as the current DeFT-enabled mode and requires exactly two configured VCs for that topology.
- Assumption: A separate packet/flit `vn_id` field is unnecessary and should not be added unless future implementation proves the existing `vc_id` cannot safely carry DeFT VN state.
- Assumption: T0013's output-VC-aware reservation and forwarding path is the required foundation for safe VN reassignment; changing only `Flit::vc_id` without matching downstream full-status checks would be unsafe.
- Assumption: T0014 uses `DIRECTION_HUB` only as the current physical VL traversal carrier and derives Up/Down semantics from `DeftTopology` layer and boundary-router context.
- Assumption: T0014 does not need additional packet/flit movement-history metadata because the current input port is sufficient for the enforced Up-to-Horizontal and Horizontal-to-Down restrictions.
- Assumption: T0015 schema v1 uses a restricted deterministic YAML format named `deft_vl_lut.v1`.
- Assumption: T0015 keys runtime LUT entries by physical fault mask, source chiplet ID, source router ID, and destination chiplet ID.
- Assumption: T0015 uses a quoted fixed-width hexadecimal `fault_mask_id` over current physical bidirectional VL IDs `0..15`, where bit `vl_id` set means the physical VL is faulty.
- Assumption: T0015 stores paired `source_exit` and `destination_entry` selections because each inter-chiplet packet needs one VL choice on the source chiplet and one destination-side entry choice from the interposer.
- Assumption: T0015 keeps `destination_router_id` out of schema v1; a future schema can add destination-router granularity only through a version bump or explicitly optional field.
- Assumption: T0015 includes the no-fault mask so 0% fault scenarios can use the same lookup path.
- Assumption: T0016 generator constants mirror the current `DeftTopology` model; a future topology change must update the generator or introduce a shared topology export.
- Assumption: T0016 uses uniform unit inter-chiplet demand until traffic-profile-specific LUT generation is designed.
- Assumption: T0016 uses an interposer-context destination-entry selection model because schema v1 has no `destination_router_id`.
- Assumption: T0017 runtime DeFT LUT use is enabled by selecting routing algorithm `DEFT` and providing `deft_vl_lut_filename` or `-deft_vl_lut`.
- Assumption: T0017 does not require `RouteData` intermediate-destination fields because schema-v1 route phases can be recomputed from current router ID, original source/destination IDs, topology layer metadata, and the loaded entry.
- Assumption: T0017 construction-only `DEFT_2_5D` runs may leave the LUT filename empty when no inter-chiplet packets are routed.
- Assumption: T0018 uses explicit YAML configs, not new routing code, as the smallest safe XY baseline mode surface.
- Assumption: The T0018 fault-injected XY baseline uses the current physical-model mask `[0,4,8,12]` / `0x1111`, with one faulty physical bidirectional VL per chiplet.
- Assumption: T0019 uses existing Noxim traffic surfaces instead of adding a new C++ traffic mode.
- Assumption: `TRAFFIC_LOCAL` is not suitable for the proposal localized profile because it is WiNoC hub-local rather than chiplet-local, and `DEFT_2_5D` rejects Winoc hub mode.
- Assumption: T0019's hotspot "10% rate on each" means per-hotspot destination share of generated traffic, not a new global packet-injection-rate sweep.
- Assumption: Hotspot routers `9`, `13`, and `41` are deterministic near-center routers in three different chiplets because the source documents do not specify hotspot IDs.
- Assumption: T0020 counts an injected packet when its head flit enters the network from the processing element after the configured stats warm-up boundary.
- Assumption: T0020 short smoke reachability can be below one because packets can remain in flight at simulation end; the smoke validates export shape and metric availability only.

## Open Questions

- For final experiment automation, should Vertical Link fault percentages be converted from physical bidirectional links or directional links?
- Are GEM5/PARSEC traces required for final delivery, or are synthetic traffic experiments sufficient?
- Should WSL be configured persistently with `ldconfig` for the local SystemC library, or should future Noxim runs keep using a per-process `LD_LIBRARY_PATH`?
- Should final DeFT routing keep using `DIRECTION_HUB` as the physical Vertical Link carrier, or introduce explicit semantic Up/Down ports after the LUT design is complete?
- Should a future `deft_vl_lut.v2` add `destination_router_id` for destination-router-granular entry VL optimization?
- How should final traffic-profile-specific LUT generation encode non-uniform `T_inter_r` inputs?
- Should final hotspot experiments keep hotspot routers `9`, `13`, and `41`, or should an explicit source-document or instructor-provided hotspot-node set replace them?
- Why did Git fail to create task branch refs in the current Windows worktree? This is no longer operationally important because user instruction now forbids automatic task branch creation.
- Should future validation add a documented packet-carrying hardcoded inter-chiplet DeFT smoke once the allowed smoke command and expected behavior are designed?
- Should final experiment automation include a drain phase or fixed post-injection drain window before computing final reachability?

## Next Recommended Task

Start `T0021` and add experiment runner support.

## Next Ready-to-Send Prompt

```text
Start task T0021: Add Experiment Runner.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, docs/DECISIONS.md, and docs/PROMPTS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

external/noxim is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

T0007 added selectable DEFT_2_5D topology construction and the DeftTopology mapping helper. T0008 centralized the physical Vertical Link model and functional state. T0009 added the derived boundary-router inventory. T0010 added startup-time permanent physical VL fault injection. T0011 added focused explicit/generated fault-mask validation and inspectability against the current 16 physical bidirectional VL model. T0012 mapped DeFT VN state directly onto Noxim VC IDs. T0013 implemented VN assignment and output-VC-aware reservation/forwarding. T0014 added DeFT-only VN transition-restriction filtering without packet/flit movement-history metadata. T0015 designed the offline VL LUT format. T0016 added the standalone deterministic deft_vl_lut.v1 generator. T0017 added runtime LUT loading, deft_vl_lut_filename / -deft_vl_lut, and registered routing algorithm DEFT. T0018 added explicit XY baseline configs for fault-free and fault-injected DEFT_2_5D modes without changing source code. T0019 added uniform, localized-40%, and hotspot-3x10 synthetic traffic configs/tables using existing Noxim traffic surfaces. T0020 added machine-readable CSV/JSON metrics export through existing stats_format/stats_file surfaces, including routing algorithm, traffic distribution, active DeFT fault mask, injected/received packet and flit counts, reachability ratio, average latency, and network throughput fields.

Goal: add the smallest safe experiment runner support needed to launch traceable single-run or tiny dry-run comparisons across existing routing modes, traffic profiles, fault settings, and seeds, using known simulator invocation shapes and existing metrics export. Keep the work independent from full result sweeps, final analysis, golden regression output updates, and performance claims.

Use existing configs, CLI surfaces, and T0020 metrics export where possible. Do not change DeFT routing, VN transition logic, VL fault injection, T0016 generator format, T0017 runtime LUT schema/use path, T0019 traffic profile semantics, or T0020 metrics semantics unless source inspection proves a narrow compatibility fix is required. If generated temporary LUTs are needed for DEFT dry runs, keep them under a scratch/output path and document provenance; do not commit experiment-scale generated artifacts.

Use `Extended_Proposal.pdf` as the primary project requirements source and the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` as the primary algorithmic reference. Use `Proposal.pdf` only as initial context. Ignore the peer evaluation document completely.

Before coding, produce a short implementation plan. Work only on the selected experiment runner task. Do not modify unrelated files. Clearly mark assumptions as `Assumption` and blockers as `Blocked`.

Use only known validation commands. If build-integrated Noxim C++ changes are made, use the documented ./build.sh from external/noxim in WSL Ubuntu and run only documented smoke invocations that remain valid. Otherwise validate runner behavior with a dry-run or tiny run using documented simulator smoke and T0020 stats export surfaces. Do not use ./regression.sh --update.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable implementation decision becomes clear, update docs/DECISIONS.md too.

At the end, provide:

1. Created files
2. Modified files
3. Whether any source code files changed
4. Validation result
5. Current project phase
6. Next recommended task
7. The next ready-to-send prompt
8. Suggested branch name for the next task, which should be `None; continue on the existing branch`
9. Suggested commit message
10. Unknowns or blockers
```

## Suggested Branch Name for Next Task

```text
None; continue on the existing branch.
```

## Suggested Commit Message

```text
feat: add metrics collection
```
