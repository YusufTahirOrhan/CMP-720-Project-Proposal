# Task Tracker

Statuses: `TODO`, `IN_PROGRESS`, `DONE`, `BLOCKED`.

## T0001: Repository Analysis and Documentation Setup

- **Status:** DONE
- **Objective:** Create persistent project-management documentation and record the initial repository state.
- **Relevant roadmap phase:** Phase 0
- **Files likely to change:** `AGENTS.md`, `docs/ROADMAP.md`, `docs/TASKS.md`, `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`
- **Acceptance criteria:** Documentation files exist, are English-only, record the original DeFT paper as a source, and no implementation source files are changed.
- **Validation command:** `git status --short`
- **Notes:** This task was completed as documentation-only. Noxim source code is not present in the repository. The original DeFT paper was registered as an external local source. The next prompt and suggested commit message are recorded in `docs/PROGRESS.md`.

## T0002: Confirm Repository Contents, Noxim Availability, and Source Availability

- **Status:** DONE
- **Objective:** Re-inspect repository contents at the start of the next session, confirm whether Noxim source code has been added, and confirm whether the original DeFT paper remains available at the documented path.
- **Relevant roadmap phase:** Phase 1
- **Files changed:** `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`
- **Acceptance criteria:** Repository structure, Noxim availability, and source-document availability are documented.
- **Validation command:** `git status --short`
- **Notes:** Completed on 2026-05-04. `rg --files` could not be used because `rg.exe` returned access denied, so repository inspection used PowerShell file listing. The repository contains project documentation, proposal PDFs/zips, and the ignored peer evaluation artifact, but no Noxim source tree, Noxim-named path, C/C++/SystemC source file, script source file, or recognized build-system file. `Extended_Proposal.pdf`, `Proposal.pdf`, and the original DeFT paper at `C:/Users/9500203/Downloads/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` are available. Build, test, and simulation commands remain unknown.

## T0003: Establish Baseline Build Command

- **Status:** DONE
- **Objective:** Identify and document the actual Noxim build command.
- **Relevant roadmap phase:** Phase 1
- **Files changed:** `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, `docs/DECISIONS.md`, and LF-only changes to Noxim build scripts and Makefiles.
- **Acceptance criteria:** A real build command is documented and verified.
- **Validation command:** Documented baseline command from `external/noxim`: `./build.sh` from the Noxim repository root.
- **Notes:** Completed on 2026-05-05 in WSL Ubuntu. `external/noxim/README.md`, `external/noxim/doc/Noxim_User_Guide.md`, and `external/noxim/build.sh` document `./build.sh` as the normal post-clone build command. `build.sh` runs `other/setup/fix-dependencies.sh` and then `make -C bin`; `bin/Makefile` builds `bin/noxim` with `g++`. The first WSL execution failed because the Windows checkout had CRLF line endings in Noxim shell scripts and Makefiles. Only Noxim build scripts and Makefiles were normalized to LF, and the submodule local Git config was set to `core.autocrlf=false`. The rerun of `./build.sh` completed with exit code `0`, built dependencies from local backups where available, and created `external/noxim/bin/noxim`. Compiler warnings were emitted, but the build completed. No DeFT behavior, routing logic, topology logic, VN logic, fault injection logic, or simulation behavior was modified.

## T0004: Run Baseline Noxim Simulation

- **Status:** DONE
- **Objective:** Run one unmodified baseline Noxim simulation and record the command and output summary.
- **Relevant roadmap phase:** Phase 1
- **Files changed:** `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`
- **Acceptance criteria:** A baseline simulation command and result are documented.
- **Validation command:** Documented short deterministic example from `external/noxim/doc/Noxim_User_Guide.md`: `cd bin` then `./noxim -config ../config_examples/default_config.yaml -seed 0 -sim 20 -warmup 0`. In the current WSL environment, the successful run used the same simulator invocation with the local SystemC library directory provided through `LD_LIBRARY_PATH`.
- **Notes:** Completed on 2026-05-05 in WSL Ubuntu. The selected command is the Noxim User Guide's short deterministic example. It uses `config_examples/default_config.yaml`, a 4x4 `MESH`, `XY` routing, `RANDOM` selection, `TRAFFIC_RANDOM`, one virtual channel, seed `0`, simulation time `20`, and warm-up `0`. The first exact simulator attempt failed because the WSL dynamic linker could not locate `libsystemc-2.3.1.so`; `ldd` verified that `external/noxim/bin/libs/systemc-2.3.1/lib-linux64` resolves the local SystemC library. The rerun completed with exit code `0` and reported `Noxim simulation completed. (1020 cycles executed)`, 1 received packet, 2 received flits, global average delay 6 cycles, network throughput 0.1 flits/cycle, and total energy `3.99398e-09` J. No DeFT behavior, routing logic, topology logic, VN logic, fault injection logic, simulation behavior, or golden regression outputs were modified.

## T0005: Map Noxim Extension Points

- **Status:** DONE
- **Objective:** Identify Noxim files responsible for topology construction, routing, traffic generation, configuration, and statistics.
- **Relevant roadmap phase:** Phase 1
- **Files changed:** `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, `docs/DECISIONS.md`
- **Acceptance criteria:** Extension points are documented with file paths.
- **Validation command:** `git status --short`; `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short`
- **Notes:** Completed on 2026-05-05 as a documentation-only source-inspection task. The parent repository and `external/noxim` both reported clean status before source inspection, so the earlier LF-normalization changes appear to have been reverted and were not reapplied. Extension points were mapped for configuration/global state, simulation control, topology construction, routing algorithms, selection strategies, traffic generation, statistics/power, logging, VCD tracing, visual trace viewing, regression assets, and legacy explorer hooks. No Noxim source files, routing logic, topology logic, VN logic, fault injection logic, simulator behavior, or golden regression outputs were changed.

## T0006: Design 2.5D Router ID and Coordinate Mapping

- **Status:** DONE
- **Objective:** Define a small, reviewable design for chiplet, interposer, and router coordinate mapping before coding.
- **Relevant roadmap phase:** Phase 2
- **Files changed:** `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, `docs/DECISIONS.md`
- **Acceptance criteria:** Mapping design is documented and assumptions are explicit.
- **Validation command:** `git status --short`; `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short`
- **Notes:** Completed on 2026-05-05 as a documentation-only design task. The design uses chiplet router IDs `0..63` as an 8x8 global chiplet footprint and interposer router IDs `64..127` as the same footprint offset by 64. Four 4x4 chiplets are placed in a 2x2 grid. Four physical bidirectional VLs per chiplet are mapped with stable `vl_id = chiplet_id * 4 + vl_slot` endpoint records. Assumption: 16 physical bidirectional VLs are the system model, and 32 directional VL channels or endpoint directions can be derived for paper-aligned fault accounting later. No Noxim source files, topology logic, routing logic, VN logic, fault injection behavior, simulator behavior, or golden regression outputs were changed.

## T0007: Implement 2.5D Topology Construction

- **Status:** DONE
- **Objective:** Add the smallest code change required to instantiate the planned 2.5D topology.
- **Relevant roadmap phase:** Phase 2
- **Files changed:** `external/noxim/src/DeftTopology.h`, `external/noxim/src/DeftTopology.cpp`, `external/noxim/src/GlobalParams.h`, `external/noxim/src/ConfigurationManager.cpp`, `external/noxim/src/NoC.h`, `external/noxim/src/NoC.cpp`, `external/noxim/src/Router.cpp`, `external/noxim/src/Utils.h`, `external/noxim/src/Main.cpp`, `external/noxim/src/GlobalStats.cpp`, `external/noxim/config_examples/deft_2_5d_topology.yaml`, `external/noxim/config_examples/deft_2_5d_no_traffic.txt`, `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md`
- **Acceptance criteria:** Simulator can construct the topology and report expected router/link counts.
- **Validation command:** From `external/noxim`: `./build.sh`. Construction smoke from `external/noxim/bin`: `LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 20 -warmup 0`.
- **Notes:** Completed on 2026-05-06. Added selectable `DEFT_2_5D` topology construction using the T0006 mapping. Startup output reports 64 chiplet routers, 64 interposer routers, 128 total routers, 96 chiplet-local cardinal links, 112 interposer cardinal links, and 16 physical bidirectional VLs with the expected endpoint table. Assumption: T0007 uses `DIRECTION_HUB` only as a temporary physical carrier for VL wiring. Blocked: final explicit Up/Down port semantics remain a future routing/VN task. No DeFT routing behavior, VN behavior, VL fault injection behavior, VL LUT generation, experiment automation, or golden regression outputs were added.

## T0008: Add Vertical Link Data Model

- **Status:** DONE
- **Objective:** Represent Vertical Links with chiplet ownership, boundary router mapping, interposer endpoint, and active/faulty state.
- **Relevant roadmap phase:** Phase 3
- **Files changed:** `external/noxim/src/DeftTopology.h`, `external/noxim/src/DeftTopology.cpp`, `external/noxim/src/NoC.cpp`, `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md`
- **Acceptance criteria:** Each chiplet has exactly four Vertical Links and mappings are inspectable.
- **Validation command:** From `external/noxim`: `./build.sh`. Construction smoke from `external/noxim/bin`: `LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 20 -warmup 0`.
- **Notes:** Completed on 2026-05-06. Extended `DeftTopology` into the centralized Vertical Link model/query surface. The model preserves the deterministic 16 physical bidirectional VL records, exposes mutable functional state through reset/set/query helpers, provides functional-link queries per chiplet, provides endpoint lookup for both directions of a physical VL, and validates stable IDs, chiplet ownership, slots, unique endpoints, same-footprint chiplet/interposer endpoints, and exactly four VLs per chiplet. Construction output now prints `functional=true` for all default VLs. No startup-time fault injection behavior, fault-mask generation, fault-rate configuration, DeFT routing behavior, VN behavior, VL LUT generation, experiment automation, metrics changes, or golden regression output update was added.

## T0009: Add Boundary Router Identification

- **Status:** DONE
- **Objective:** Mark or derive boundary routers that connect chiplets to the active interposer.
- **Relevant roadmap phase:** Phase 3
- **Files changed:** `external/noxim/src/DeftTopology.h`, `external/noxim/src/DeftTopology.cpp`, `external/noxim/src/NoC.cpp`, `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md`
- **Acceptance criteria:** Routing code can query whether a router is a boundary router, inspect the boundary-router inventory, and map each boundary router to its owner chiplet, local coordinate, VL slot, attached VL ID, and attached interposer endpoint.
- **Validation command:** From `external/noxim`: `./build.sh`. Construction smoke from `external/noxim/bin`: `LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 20 -warmup 0`.
- **Notes:** Completed on 2026-05-06. Added `BoundaryRouterInfo` as a derived view over the centralized VL model, plus inventory, per-chiplet lookup, router-ID lookup, VL-ID lookup, and structural validation. Construction output now reports `boundary_routers=16` and prints all 16 boundary-router records. No startup-time fault injection behavior, fault-mask generation, fault-rate configuration, DeFT routing behavior, route selection, VN behavior, VL LUT generation, experiment automation, metrics change, or golden regression output update was added.

## T0010: Implement Fault Injection Manager

- **Status:** DONE
- **Objective:** Add centralized startup-time permanent Vertical Link fault injection.
- **Relevant roadmap phase:** Phase 4
- **Files changed:** `external/noxim/src/DeftFaultInjectionManager.h`, `external/noxim/src/DeftFaultInjectionManager.cpp`, `external/noxim/src/GlobalParams.h`, `external/noxim/src/GlobalParams.cpp`, `external/noxim/src/ConfigurationManager.cpp`, `external/noxim/src/NoC.cpp`, `external/noxim/config_examples/deft_2_5d_topology.yaml`, `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md`
- **Acceptance criteria:** Fault masks are seed-controlled and do not fully disconnect any chiplet.
- **Validation command:** From `external/noxim`: `./build.sh`. Construction smoke from `external/noxim/bin`: `LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 20 -warmup 0`. Faulted construction smoke from `external/noxim/bin`: `LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 20 -warmup 0 -deft_vl_fault_count 4`.
- **Notes:** Completed on 2026-05-07. Added `DeftFaultInjectionManager` as the centralized startup-time permanent VL fault-state setup path. The manager reuses `DeftTopology` reset/set/query helpers, supports explicit physical VL ID lists or seed-controlled random physical VL fault counts, rejects incompatible modes, rejects duplicate/out-of-range fault IDs, and prevents any chiplet from being left with zero functional VLs. Construction output reports the selected fault mask and per-chiplet functional VL counts. Assumption: T0010 counts configured faults over the current 16 physical bidirectional VLs; percentage conversion and directional accounting remain future work. No DeFT routing behavior, route selection, VN behavior, VN transition restriction, VL LUT generation, experiment automation, metrics change, or golden regression output update was added.

## T0011: Add Fault Mask Validation

- **Status:** DONE
- **Objective:** Validate explicit and generated fault masks for the current physical Vertical Link model.
- **Relevant roadmap phase:** Phase 4
- **Files changed:** `external/noxim/src/DeftFaultInjectionManager.h`, `external/noxim/src/DeftFaultInjectionManager.cpp`, `external/noxim/src/NoC.cpp`, `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md`
- **Acceptance criteria:** Invalid masks are rejected before routing uses fault state, and generated masks are validated against the same current physical VL model as explicit masks.
- **Validation command:** From `external/noxim`: `./build.sh`. Construction smokes from `external/noxim/bin`: default no-fault smoke, generated four-fault smoke with `-deft_vl_fault_count 4`, explicit four-fault smoke with `-deft_faulty_vls 0,4,8,12`, and expected invalid-mask rejection with `-deft_faulty_vls 0,1,2,3`.
- **Notes:** Completed on 2026-05-07. Added a focused `DeftFaultInjection::validateFaultMask()` layer that normalizes masks, rejects duplicate/out-of-range/nonexistent physical VL IDs, rejects impossible fault counts, and rejects any mask that leaves a chiplet with zero functional physical VLs. Explicit and generated masks now share this validation path before startup fault state is applied. Construction output reports physical fault count over 16 current physical VLs, a `current_physical_25_percent_target` flag, per-chiplet fault counts, and per-chiplet functional counts. Assumption: the T0011 current physical 25% validation target is four faulty physical bidirectional VLs out of 16; directional accounting and percentage-based configuration remain future work. No DeFT routing behavior, route selection, VN behavior, VN transition restriction, VL LUT generation, experiment automation, metrics change, or golden regression output update was added.

## T0012: Design VN State Representation

- **Status:** DONE
- **Objective:** Document how VN.0 and VN.1 state will be represented in packet or flit metadata.
- **Relevant roadmap phase:** Phase 5
- **Files changed:** `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`
- **Acceptance criteria:** VN state design and transition assumptions are recorded.
- **Validation command:** Parent status: `git status --short --branch`. Submodule status: `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch`.
- **Notes:** Completed on 2026-05-07 as a documentation-only design task. DeFT VN state is designed to use the existing Noxim `vc_id` directly: VC 0 is VN.0 and VC 1 is VN.1 for DeFT-enabled runs. No separate `vn_id` field should be added unless future implementation proves it necessary. Future DeFT runs should require exactly two configured VCs. Source inspection also found that the current router reservation path assumes input VC equals output VC, so future VN reassignment must add output-VC-aware reservation/forwarding rather than mutating `Flit::vc_id` alone. No simulator behavior, VN assignment behavior, VN transition restriction, route selection, VL LUT generation, experiment automation, metrics change, golden regression output update, or Noxim source code was changed.

## T0013: Implement VN Assignment Rules

- **Status:** DONE
- **Objective:** Implement DeFT VN assignment behavior for source routers and boundary routers.
- **Relevant roadmap phase:** Phase 5
- **Files changed:** `external/noxim/src/DeftVirtualNetwork.h`, `external/noxim/src/DeftVirtualNetwork.cpp`, `external/noxim/src/ProcessingElement.cpp`, `external/noxim/src/Router.cpp`, `external/noxim/src/ReservationTable.h`, `external/noxim/src/ReservationTable.cpp`, `external/noxim/src/ConfigurationManager.cpp`, `external/noxim/config_examples/deft_2_5d_topology.yaml`, `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md`
- **Acceptance criteria:** Inter-chiplet traffic follows the proposal's VN assignment rules.
- **Validation command:** From `external/noxim`: `./build.sh`. Construction smoke from `external/noxim/bin`: `LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 20 -warmup 0`.
- **Notes:** Completed on 2026-05-07. Added `DeftVirtualNetwork` as the small VN/VC mapping and assignment helper. `DEFT_2_5D` now requires exactly two configured VCs. Source packet injection assigns VC 0/VN.0 for inter-chiplet traffic from non-boundary source routers and round-robins cases where either VN is legal. Boundary-router reassignment now selects an output VC, preserves monotonicity, round-robins legal VN.0/VN.1 reassignment when leaving a source chiplet for the interposer, and forces traffic entering a destination chiplet from the interposer to VN.1. The router reservation path now keeps input VC and output VC separate for downstream full-status checks and forwarded `Flit::vc_id`; existing hub reservation users keep the old input-VC behavior. No final VL selection, full VN transition-restriction enforcement, experiment automation, metrics change, or golden regression update was added.

## T0014: Enforce VN Transition Restrictions

- **Status:** DONE
- **Objective:** Enforce VN.1-to-VN.0 ban, Up-to-Horizontal ban in VN.0, and Horizontal-to-Down ban in VN.1.
- **Relevant roadmap phase:** Phase 5
- **Files changed:** `external/noxim/src/DeftVirtualNetwork.h`, `external/noxim/src/DeftVirtualNetwork.cpp`, `external/noxim/src/Router.cpp`, `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md`
- **Acceptance criteria:** Forbidden transitions are rejected or avoided by route selection.
- **Validation command:** From `external/noxim`: `./build.sh`. Construction smoke from `external/noxim/bin`: `LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 20 -warmup 0`.
- **Notes:** Completed on 2026-05-07. Added DeFT-only output-direction filtering and movement classification without adding packet/flit metadata. VN.1 to VN.0 remains forbidden by `canTransition()`. Up-to-Horizontal in VN.0 is avoided by forcing interposer-to-chiplet entry output to VN.1 before horizontal movement. Horizontal-to-Down in VN.1 is rejected; VN.0 Horizontal-to-Down preserves VN.0 instead of consuming the boundary round-robin state. No final VL selection, LUT generation, experiment automation, metrics change, or golden regression output update was added.

## T0015: Design Offline VL LUT Format

- **Status:** DONE
- **Objective:** Define the lookup table keys, values, and storage format before implementing generation.
- **Relevant roadmap phase:** Phase 6
- **Files changed:** `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`
- **Acceptance criteria:** LUT schema is documented and traceable to fault masks and destination chiplets.
- **Validation command:** Parent status: `git status --short --branch`. Submodule status: `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch`.
- **Notes:** Completed on 2026-05-07 as a documentation-only design task. The schema is `deft_vl_lut.v1`, a restricted deterministic YAML format keyed by quoted physical fault-mask bitset, source chiplet ID, source router ID, and destination chiplet ID. Entry values store paired source-exit and destination-entry physical VL selections, including selected VL ID, boundary endpoint, interposer endpoint, and ranked functional candidate IDs. Fault masks map to the current 16 physical bidirectional VL IDs, and the no-fault mask is included for 0% fault runs. Assumption: schema v1 intentionally follows the T0010/T0011 physical VL model, not directional endpoint accounting. Blocked: generator implementation, runtime loading, exact miss handling, intermediate-destination state, final VL selection behavior, and physical-vs-directional experiment percentage accounting remain future work. No Noxim source files, simulator behavior, route selection, experiment automation, metrics, simulations, or golden regression outputs were changed.

## T0016: Implement Offline VL LUT Generator

- **Status:** DONE
- **Objective:** Generate fault-aware Vertical Link selection tables using distance and load imbalance cost.
- **Relevant roadmap phase:** Phase 6
- **Files changed:** `external/noxim/other/deft_vl_lut_generator.py`, `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, `docs/DECISIONS.md`
- **Acceptance criteria:** Generated LUT excludes faulty Vertical Links and is deterministic.
- **Validation command:** Syntax check with `python -m py_compile external/noxim/other/deft_vl_lut_generator.py`; CLI help check; deterministic in-memory generation check for masks `0x0000` and `0x1111`; invalid connected-chiplet mask rejection with `--fault-mask 0x000f`; parent and submodule status/diff checks.
- **Notes:** Completed on 2026-05-07. Added a standalone Python generator under `external/noxim/other` that emits the T0015 `deft_vl_lut.v1` schema without touching Noxim router runtime behavior or build-integrated C++ source. The generator mirrors the current 16 physical VL model, supports explicit and enumerated connected-chiplet fault masks, uses deterministic exact dynamic programming for the proposal's Manhattan-distance plus load-imbalance objective with `rho = 0.01`, and records the schema-v1 destination-entry adjustment caused by the absence of `destination_router_id`. Assumption: T0016 uses uniform unit inter-chiplet demand until traffic-profile-specific LUT generation is designed. Blocked: runtime loading and final route selection remain future work.

## T0017: Load and Use VL LUT at Boundary Routers

- **Status:** DONE
- **Objective:** Integrate LUT selection into inter-chiplet routing at boundary routers.
- **Relevant roadmap phase:** Phase 6
- **Files changed:** `external/noxim/src/DeftVerticalLinkLut.h`, `external/noxim/src/DeftVerticalLinkLut.cpp`, `external/noxim/src/routingAlgorithms/Routing_DEFT.h`, `external/noxim/src/routingAlgorithms/Routing_DEFT.cpp`, `external/noxim/src/GlobalParams.h`, `external/noxim/src/GlobalParams.cpp`, `external/noxim/src/ConfigurationManager.cpp`, `external/noxim/src/NoC.cpp`, `external/noxim/bin/power.yaml`, `external/noxim/config_examples/deft_2_5d_topology.yaml`, `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md`
- **Acceptance criteria:** Boundary routers select functional Vertical Links using the current fault vector.
- **Validation command:** From `external/noxim`: `./build.sh`. Existing construction-only no-traffic smoke from `external/noxim/bin`: `LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 20 -warmup 0`. Runtime LUT load smoke used the same no-traffic configuration with a temporary generator-produced no-fault LUT and `-routing DEFT -deft_vl_lut deft_vl_lut_runtime_smoke.yaml`.
- **Notes:** Completed on 2026-05-07. Added `DeftVerticalLinkLut` as the runtime loader/validator for `deft_vl_lut.v1`, registered a new `DEFT` routing algorithm, and added `deft_vl_lut_filename` / `-deft_vl_lut` configuration. The runtime key is derived from active physical VL functional state after startup fault injection plus source chiplet, source router, and destination chiplet. The `DEFT` route path uses `source_exit` on the source chiplet, `destination_entry` on the interposer, and fails closed when a table is missing or selected VLs are not functional. Assumption: No `RouteData` intermediate-destination fields are needed for schema v1. Blocked: Packet-carrying inter-chiplet validation remains future work.

## T0018: Configure XY Baseline Modes

- **Status:** DONE
- **Objective:** Configure fault-free and fault-injected XY routing baselines for comparison.
- **Relevant roadmap phase:** Phase 7
- **Files changed:** `external/noxim/config_examples/deft_2_5d_xy_baseline_fault_free.yaml`, `external/noxim/config_examples/deft_2_5d_xy_baseline_fault_injected.yaml`, `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md`
- **Acceptance criteria:** XY fault-free and XY fault-injected baseline modes can be selected on the same `DEFT_2_5D` project topology without changing the `DEFT` routing path.
- **Validation command:** Construction-only no-traffic smokes from `external/noxim/bin` in WSL Ubuntu for both new config files, preserving the documented simulator invocation shape with `LD_LIBRARY_PATH`, `-seed 0`, `-sim 20`, and `-warmup 0`; parent and submodule diff whitespace/status checks.
- **Notes:** Completed on 2026-05-08. Added two explicit XY baseline configuration files that keep `routing_algorithm: XY`, keep `deft_vl_lut_filename` empty, and reuse the existing no-traffic construction smoke traffic file. The fault-free baseline uses no VL faults and reports active fault mask `0x0000`. The fault-injected baseline uses explicit physical VL faults `[0,4,8,12]`, the current T0011 physical 25% inspectability mask with one faulty physical VL per chiplet, and reports active fault mask `0x1111`. Assumption: T0018 is configuration-only; packet-carrying XY-vs-DEFT traffic comparability remains a future synthetic traffic and experiment task. No C++/SystemC source, routing logic, metrics, experiment automation, golden outputs, generator format, or runtime LUT schema/use path was changed.

## T0019: Add Synthetic Traffic Configurations

- **Status:** DONE
- **Objective:** Support uniform, localized, and hotspot synthetic traffic models.
- **Relevant roadmap phase:** Phase 8
- **Files changed:** `external/noxim/config_examples/deft_2_5d_traffic_uniform.yaml`, `external/noxim/config_examples/deft_2_5d_traffic_localized_40.yaml`, `external/noxim/config_examples/deft_2_5d_traffic_localized_40.txt`, `external/noxim/config_examples/deft_2_5d_traffic_hotspot_3x10.yaml`, `external/noxim/config_examples/deft_2_5d_traffic_hotspot_3x10.txt`, `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md`
- **Acceptance criteria:** Traffic models match proposal definitions.
- **Validation command:** Table integrity checks plus config-load smokes from `external/noxim/bin` in WSL Ubuntu for the three new synthetic traffic config files, preserving the documented simulator invocation shape with `LD_LIBRARY_PATH`, `-seed 0`, `-sim 20`, and `-warmup 0`; parent and submodule diff whitespace/status checks.
- **Notes:** Completed on 2026-05-08. Added a uniform config using existing `TRAFFIC_RANDOM`, plus localized and hotspot configs using existing `TRAFFIC_TABLE_BASED` and deterministic traffic tables. The localized table assigns each source total PIR `0.01` with 40% same-chiplet and 60% other-chiplet destination probability. The hotspot table uses hotspot routers `9`, `13`, and `41`, assigns each hotspot a 10% destination share for non-hotspot sources, redistributes self-hotspot probability to background destinations, and keeps each source total PIR at `0.01`. Assumption: hotspot "10% rate on each" is interpreted as per-hotspot destination share, consistent with Noxim hotspot percentage semantics and the original DeFT paper wording. No C++/SystemC source, routing logic, VN transition logic, VL fault injection, generator format, runtime LUT schema/use path, experiment automation, metrics, performance experiment, or golden regression output was changed.

## T0020: Add Metrics Collection

- **Status:** DONE
- **Objective:** Collect reachability, average latency, and network throughput.
- **Relevant roadmap phase:** Phase 8
- **Files changed:** `external/noxim/src/ProcessingElement.h`, `external/noxim/src/ProcessingElement.cpp`, `external/noxim/src/GlobalStats.h`, `external/noxim/src/GlobalStats.cpp`, `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md`
- **Acceptance criteria:** Metrics are emitted in a machine-readable format.
- **Validation command:** From `external/noxim`: `./build.sh`. Metrics export smokes from `external/noxim/bin` in WSL Ubuntu using the known localized traffic smoke plus documented `-stats_format json|csv -stats_file FILE` overrides.
- **Notes:** Completed on 2026-05-08. Reused the existing `GlobalStats` CSV/JSON export path and added injected-packet/injected-flit counters at the PE head-flit injection point. Machine-readable exports now include routing algorithm, traffic distribution, active DeFT fault mask, total injected packets/flits, total received packets/flits, reachability ratio, average latency, and network throughput. Assumption: T0020 reachability is `total_received_packets / total_injected_packets` over the existing Noxim stats collection window, with injected packets counted when a head flit enters the network. No DeFT routing, VN transition logic, VL fault injection, T0016 generator format, T0017 runtime LUT schema/use path, T0019 traffic semantics, experiment runner, performance sweep, final analysis, or golden regression output was changed.

## T0021: Add Experiment Runner

- **Status:** DONE
- **Objective:** Add minimal traceable single-run and tiny comparison launch support across routing mode, traffic model, fault setting, and seed.
- **Relevant roadmap phase:** Phase 8
- **Files changed:** `external/noxim/other/deft_experiment_runner.py`, `external/noxim/.gitignore`, `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md`
- **Acceptance criteria:** A small dry-run experiment completes and records commands and outputs without changing simulator behavior or committing generated artifacts.
- **Validation command:** Syntax/help checks for `external/noxim/other/deft_experiment_runner.py`; dry-run planning for XY and DEFT localized traffic with seed `0`; fault-setting dry-run planning for `none` and `physical_25`; tiny WSL execute smoke for XY and DEFT localized traffic using existing `-stats_format json -stats_file FILE` surfaces.
- **Notes:** Completed on 2026-05-09. Added a standalone Python runner that composes existing traffic configs, routing overrides, physical fault masks, seeds, T0016 temporary LUT generation for DEFT runs, and T0020 stats export into traceable manifests, command files, logs, stats files, and a summary CSV. Generated experiment artifacts are written under `external/noxim/other/generated/`, which is ignored by the Noxim submodule. The approved tiny execute smoke completed two 20-cycle seed-0 localized runs, one `XY` and one `DEFT`, each with exit code `0` and JSON metrics. Assumption: T0021 temporary DEFT LUTs use the existing T0016 uniform-unit-interchiplet demand assumption and are not traffic-profile-specific. No C++/SystemC source, DeFT routing, VN transition logic, VL fault injection, generator format, runtime LUT schema/use path, traffic semantics, metrics semantics, final result sweep, golden regression output, or performance analysis was changed.

## T0022: Prepare Final Analysis Artifacts

- **Status:** DONE
- **Objective:** Produce final result summaries and report-support material from validated experiment outputs.
- **Relevant roadmap phase:** Phase 9
- **Files changed:** `external/noxim/other/deft_analysis_artifacts.py`, `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md`
- **Acceptance criteria:** Results are traceable to configurations, commands, and validation status.
- **Validation command:** Syntax/help checks for `external/noxim/other/deft_analysis_artifacts.py`; scaffold generation from the existing ignored `external/noxim/other/generated/t0021_execute_smoke` runner output.
- **Notes:** Completed on 2026-05-09. Added a standalone Python analysis helper that consumes T0021 `manifest.json`, `summary.csv`, and T0020 JSON stats exports, then writes ignored `analysis_manifest.json`, `run_summary.csv`, `comparison_summary.csv`, and `report_scaffold.md` artifacts. The helper records provenance, run status, routing/traffic/fault/seed identifiers, stats-file availability, LUT provenance, per-run metrics, and simple grouped means, but sets `claims_allowed` to `false` and marks smoke-only or missing final-sweep inputs as `Blocked`. Validation used the existing 20-cycle T0021 execute smoke only; those rows validate analysis shape and traceability, not performance. No C++/SystemC source, DeFT routing, VN transition logic, VL fault injection, generator format, runtime LUT schema/use path, traffic semantics, metrics semantics, runner semantics, final sweep, golden regression output, or performance claim was changed.

## T0025: Define Final Sweep Policy

- **Status:** DONE
- **Objective:** Decide the final experiment policy before running or interpreting final sweeps.
- **Relevant roadmap phase:** Phase 9
- **Files changed:** `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md`
- **Acceptance criteria:** Final sweep coverage, fault-rate accounting, simulation window, warm-up/drain policy, seed count, traffic profiles, and result-claim rules are documented before final runs.
- **Validation command:** Documentation/status validation: source-document availability checks, runner help check, parent and submodule status, and `git diff --check`.
- **Notes:** Completed on 2026-05-09 as a policy/documentation-only task. The final executable matrix is `XY` and `DEFT` over `uniform`, `localized_40`, and `hotspot_3x10` traffic, physical fault masks `0x0000`, `0x0001`, `0x0011`, `0x0111`, and `0x1111`, seeds `0..4`, `-sim 10000`, `-warmup 1000`, and JSON stats, for exactly 150 runs. Assumption: one physical bidirectional VL fault disables both directions and is reported as the same numeric directional-equivalent percentage over the paper's 32-channel accounting. Blocked: single-direction 3.125% fault cases and eventual-delivery reachability after a drain phase are not supported by the current fault and runner model. No source code, helper code, simulator behavior, full sweep, or performance claim was changed.

## T0026: Run Final Sweep Matrix

- **Status:** DONE
- **Objective:** Execute the T0025 final sweep matrix and regenerate final analysis artifacts from completed outputs.
- **Relevant roadmap phase:** Phase 9
- **Files changed:** `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md`; ignored generated outputs under `external/noxim/other/generated/t0026_final_sweep_v1/` and `external/noxim/other/generated/t0026_final_analysis_v1/`.
- **Acceptance criteria:** The final sweep dry-run manifest contains exactly 150 planned runs; the executed manifest contains exactly 150 completed runs with return code `0`; every JSON stats file contains the T0020 metrics; final analysis artifacts are regenerated and cross-checked before any report claim.
- **Validation command:** From `external/noxim` in WSL/Linux, the T0025 final runner command was first run as dry-run, then rerun with `--execute --max-execute-runs 150`. From the parent repository, final analysis was regenerated with `python external/noxim/other/deft_analysis_artifacts.py --input-dir external/noxim/other/generated/t0026_final_sweep_v1 --output-dir external/noxim/other/generated/t0026_final_analysis_v1 --dataset-kind final_sweep`.
- **Notes:** Completed on 2026-05-09. The dry-run manifest reported `mode: dry_run`, `run_count: 150`, and the full Cartesian product of the T0025 matrix. The executed manifest reported `mode: execute`, `run_count: 150`, 150 completed runs, and 150 return code `0` runs. All 150 JSON stats files exist and contain the T0020 metric fields. The final analysis helper wrote `analysis_manifest.json`, `run_summary.csv`, `comparison_summary.csv`, and `report_scaffold.md` under the ignored T0026 analysis directory; run-summary and comparison tables were cross-checked against the raw manifest and per-run JSON stats with zero mismatches. Assumption: T0026 generated tables are mechanical report-support summaries only. Blocked: 54 individual runs reported zero injected packets in the measured window, so report interpretation must handle empty cells and must not make unsupported performance claims. No simulator source, helper source, routing logic, VN transition logic, VL fault injection, LUT schemas, traffic semantics, metrics semantics, runner semantics, analysis semantics, golden regression outputs, or `./regression.sh --update` was changed.

## T0027: Review Final Sweep Results for Report Support

- **Status:** DONE
- **Objective:** Interpret the completed T0026 final sweep artifacts into claim-safe report-support tables and notes.
- **Relevant roadmap phase:** Phase 9
- **Files changed:** `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, `docs/DECISIONS.md`; ignored generated report-support outputs under `external/noxim/other/generated/t0027_report_support_v1/`.
- **Acceptance criteria:** Any derived table or statement is cross-checked against the T0026 raw manifest and JSON stats; zero-injection cells are explicitly handled; no performance claim is made from empty cells, failed rows, or unreviewed grouped means.
- **Validation command:** Use existing generated T0026 artifacts under `external/noxim/other/generated/t0026_final_sweep_v1/` and `external/noxim/other/generated/t0026_final_analysis_v1/`; if no simulator source changes are made, do not rebuild Noxim or rerun the sweep.
- **Notes:** Completed on 2026-05-09. Generated ignored claim-safe report-support artifacts under `external/noxim/other/generated/t0027_report_support_v1/`: `manifest.json`, `condition_summary.csv`, `xy_deft_pair_summary.csv`, `zero_injection_runs.csv`, `coverage_by_routing_traffic.csv`, and `report_notes.md`. The review derived condition and pair tables from the T0026 executed manifest and raw JSON stats, then cross-checked them against T0026 `summary.csv`, analysis `run_summary.csv`, and analysis `comparison_summary.csv` with zero mismatches. T0027 classified 30 condition cells as 12 complete-injection cells, 13 partial-injection cells, and 5 empty-injection cells. All empty-injection cells are `XY|hotspot_3x10`. No XY/DEFT pair supports latency comparison because the XY side has zero received packets in every pair where it injected packets. Assumption: zero-injection rows are completed measured-window rows, not failed runs. Blocked: final report prose must accept the T0027 blank-aware limitations or define a follow-up validation/rerun policy. No simulator source, helper source, DeFT routing, VN transition logic, VL fault injection, LUT schemas, traffic semantics, metrics semantics, runner semantics, analysis semantics, golden outputs, or `./regression.sh --update` was changed.

## T0028: Draft Claim-Safe Final Report Results Text

- **Status:** DONE
- **Objective:** Convert the T0027 report-support artifacts into final-report-ready results prose and tables without unsupported claims.
- **Relevant roadmap phase:** Phase 9
- **Files changed:** `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, `docs/DECISIONS.md`; ignored generated report draft outputs under `external/noxim/other/generated/t0028_final_report_results_v1/`.
- **Acceptance criteria:** Results text uses only cross-checked T0027/T0026 artifacts; blank, partial, and limitation cells remain explicit; no improvement, statistical-significance, latency, or throughput claim is made where the T0027 readiness notes disallow it.
- **Validation command:** Documentation/status validation plus raw-artifact spot checks against `external/noxim/other/generated/t0027_report_support_v1/` and the T0026 raw stats when a drafted statement cites a measured value. If no simulator source changes are made, do not rebuild Noxim or rerun the sweep.
- **Notes:** Completed on 2026-05-09. Created ignored generated report-draft artifacts under `external/noxim/other/generated/t0028_final_report_results_v1/`: `manifest.json` and `report_results_draft.md`. The draft converts T0027 condition, coverage, zero-injection, and pair-readiness outputs into final-report-ready descriptive prose and Markdown tables. It preserves blank reachability where no packets were injected, blank latency where no packets were received, partial-cell seed coverage, and the T0027 limitation notes. It makes no improvement, delta, statistical-significance, latency-comparison, or unsupported performance claim and keeps `claims_allowed: false`. Assumption: T0028 prose is report-ready support text, not a new interpretation of empty cells. Blocked: stronger claims, non-empty XY hotspot cells, or latency comparisons require a separate documented validation/rerun policy. No simulator source, helper source, DeFT routing, VN transition logic, VL fault injection, LUT schemas, traffic semantics, metrics semantics, runner semantics, analysis semantics, golden outputs, or `./regression.sh --update` was changed.

## T0029: Assemble Claim-Safe Final Report Draft

- **Status:** DONE
- **Objective:** Integrate the claim-safe T0028 results prose and existing project context into a final report draft without adding unsupported claims.
- **Relevant roadmap phase:** Phase 9
- **Files changed:** `docs/FINAL_REPORT_DRAFT.md`, `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md`.
- **Acceptance criteria:** The report draft uses `Extended_Proposal.pdf`, the original DeFT paper, and T0028/T0027/T0026 artifacts; it preserves assumptions and blockers; it does not claim improvement, statistical significance, latency comparison, or complete reachability.
- **Validation command:** Documentation/status validation and spot checks against `external/noxim/other/generated/t0028_final_report_results_v1/report_results_draft.md`, `external/noxim/other/generated/t0027_report_support_v1/`, and T0026 raw artifacts. If no simulator source changes are made, do not rebuild Noxim or rerun the sweep.
- **Notes:** Completed on 2026-05-09. Created the tracked Markdown report draft `docs/FINAL_REPORT_DRAFT.md`, assembled from `Extended_Proposal.pdf`, the original DeFT paper, existing project documentation, and the T0028 results draft. The draft preserves T0027/T0028 blank cells, partial-cell coverage counts, zero-injection notes, validation provenance, and limitations. It does not rerun simulations, rebuild Noxim, change simulator/helper/source behavior, or add unsupported performance language. Assumption: the Markdown draft is a claim-safe manuscript draft, not a new analysis layer. Blocked: submission-format polish, real-application trace coverage, stronger claims, non-empty XY hotspot cells, latency comparisons, single-direction fault cases, and eventual-delivery checks require separate follow-up tasks.

## T0030: Review Final Report Draft for Submission Readiness

- **Status:** DONE
- **Objective:** Review `docs/FINAL_REPORT_DRAFT.md` for final-delivery structure, citation wording, formatting, and any instructor-specific submission requirements without changing the validated result claims.
- **Relevant roadmap phase:** Phase 9
- **Files changed:** `docs/FINAL_REPORT_DRAFT.md`, `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, and `docs/PROMPTS.md`.
- **Acceptance criteria:** The draft is polished for submission, claim-safety constraints remain intact, any required format conversion is traceable, and no unsupported result claims are introduced.
- **Validation command:** Documentation/status validation and claim-safety checks against the final report draft. If no simulator source changes are made, do not rebuild Noxim or rerun simulations.
- **Notes:** Completed on 2026-05-09. Reviewed and polished the tracked Markdown draft for final-delivery structure, source-scoped citation wording, table readability, and submission readiness. Added reviewed status text, a submission-format note, clearer source-scope wording, a status-label legend for the wide condition metrics table, and clearer references. Preserved blank reachability, blank latency, partial-cell coverage counts, zero-injection notes, validation provenance, assumptions, blockers, limitations, and `claims_allowed: false` wording. Assumption: no PDF, DOCX, PPTX, or other final artifact format was requested during T0030, so no conversion artifact was created. Blocked: final conversion remains pending until the required submission format is specified. No simulator source, helper source, DeFT routing, VN transition logic, VL fault injection, LUT schemas, traffic semantics, metrics semantics, runner/analysis semantics, golden outputs, rebuild, rerun, or `./regression.sh --update` was changed.

## T0031: Prepare Final Submission Artifact

- **Status:** DONE
- **Objective:** Convert the reviewed Markdown report draft into the explicitly requested IEEE conference-style LaTeX final report artifact.
- **Relevant roadmap phase:** Phase 9
- **Files changed:** `final_report/main.tex`, `final_report/references.bib`, `final_report/IEEEtran.cls`, `final_report/figures/schematic.png`, `final_report/README.md`, `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md`.
- **Acceptance criteria:** The required submission format is recorded before conversion; the generated LaTeX artifact follows the Extended Proposal IEEE-style source structure; the report preserves claim-safety constraints, blank cells, limitations, citations, validation provenance, assumptions, and blockers; the conversion method and validation method are documented.
- **Validation command:** `git diff --check`; citation and BibTeX key consistency checks; begin/end environment count check; ASCII checks for new text files; LaTeX tool availability checks for `latexmk`, `pdflatex`, `bibtex`, and `tectonic`; parent and submodule status checks.
- **Notes:** Completed on 2026-05-09 after the required final artifact format was explicitly supplied as an IEEE conference-style LaTeX final project report. `Extended_Proposal.zip` was inspected first as the formatting/template reference and contains `conference_101719.tex`, `IEEEtran.cls`, `references.bib`, and `figures/schematic.png`. Created `final_report/` with an IEEEtran-based `main.tex`, a cited-only `references.bib` reused from the Extended Proposal source, a local copy of `IEEEtran.cls`, the reused schematic figure, and build notes in `README.md`. The report converts `docs/FINAL_REPORT_DRAFT.md` into IEEE-style sections and preserves blank cells, partial-cell coverage counts, validation provenance, assumptions, blockers, and limitations. Assumption: the LaTeX source artifact is ready for a TeX-enabled environment. Blocked: PDF generation could not be completed because `latexmk`, `pdflatex`, `bibtex`, and `tectonic` were not available on the Windows PATH. No source code, simulator behavior, helper behavior, routing logic, VN transition logic, VL fault injection, LUT schema, traffic semantics, metrics semantics, runner/analysis semantics, rebuild, rerun, regression command, `./regression.sh --update`, or performance claim was changed.

## T0032: Generate Final Report PDF in a TeX-Enabled Environment

- **Status:** DONE
- **Objective:** Compile `final_report/main.tex` into a PDF once LaTeX tooling is available, then visually inspect or otherwise validate the generated PDF.
- **Relevant roadmap phase:** Phase 9
- **Files changed:** `final_report/main.tex`, generated LaTeX artifacts under `final_report/` (`main.pdf`, `main.aux`, `main.bbl`, `main.blg`, `main.log`, `main.out`), `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/VALIDATION.md`, and `docs/PROMPTS.md`.
- **Acceptance criteria:** A final PDF is generated from the existing LaTeX source without changing report claims; the generated PDF path is recorded; any warnings or layout issues are documented; no simulator source or behavior is modified.
- **Validation command:** Use a documented LaTeX build command available in the environment, preferably `latexmk -pdf main.tex` from `final_report/`; if `latexmk` is unavailable, use a standard `pdflatex`/`bibtex`/`pdflatex`/`pdflatex` sequence only when those tools are present.
- **Notes:** Completed on 2026-05-11 after WSL Ubuntu became visible outside the sandbox. Required startup reading was completed, and a short implementation plan was produced before status checks, toolchain checks, compilation, or tracking-document edits. Windows PATH still did not expose TeX tools, but WSL Ubuntu exposed `pdflatex` at `/usr/bin/pdflatex` and `bibtex` at `/usr/bin/bibtex`; `latexmk` was unavailable, so the documented fallback sequence was used from `final_report/`. Two claim-neutral TeX compatibility edits were made in `final_report/main.tex`: an unused `algorithmic` package import was removed because `algorithmic.sty` was not installed, and the bibliography style was changed from unavailable `IEEEtran` to installed `ieeetr` because `IEEEtran.bst` was not available in the local TeX installation or project files. The PDF was generated at `final_report/main.pdf` (5 pages, 344758 bytes). Final log inspection found no unresolved citations or references, no LaTeX errors, no fatal errors, and no overfull boxes. Remaining layout diagnostics are 43 underfull box messages, mainly around long path/code strings and dense explanatory paragraphs, plus the standard IEEEtran camera-ready reminder to manually equalize final-page column lengths. No report claims, simulator source, helper source, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifacts, Extended Proposal files, Noxim rebuild, simulation run, final-sweep regeneration, regression command, or performance claim was changed.

## T0033: Diagnose and Reduce Final-Report Blockers

- **Status:** DONE
- **Objective:** Diagnose the XY zero-injection and zero-received blockers that limit stronger final-report comparison claims.
- **Relevant roadmap phase:** Phase 9
- **Files changed:** `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, and `docs/PROMPTS.md`; ignored diagnostic outputs under `external/noxim/other/generated/t0033_xy_diagnostic_warmup0_v1/`.
- **Acceptance criteria:** Inspect the traffic configs, runner, measurement-window behavior, injection counters, XY route path, and topology connectivity; run only small targeted smokes if needed; explain whether the blockers are config, window, injection probability, destination selection, topology compatibility, missing drain, or expected limitation; do not change simulator source or final-sweep artifacts.
- **Validation command:** Two-run WSL runner diagnostic from `external/noxim` for `XY` `hotspot_3x10` and `uniform`, fault mask `0x0000`, seed `0`, `--sim 10000`, `--warmup 0`, JSON stats, output `other/generated/t0033_xy_diagnostic_warmup0_v1`; `git diff --check`; parent and submodule status checks.
- **Notes:** Completed on 2026-05-09 as a diagnosis-only task. Source inspection found that T0020 injection counts are recorded only when a packet head flit leaves the PE after the stats warm-up boundary, and `Routing_XY.cpp` chooses only cardinal XY directions from the global footprint coordinate. The `DEFT_2_5D` topology intentionally wires chiplet cardinal links only inside each 4x4 chiplet and binds missing cross-chiplet cardinal ports to idle ports; `Routing_DEFT.cpp` is the path that selects VL/hub/interposer movement for inter-chiplet traffic. The T0033 warm-up-0 diagnostic completed two runs with return code `0`: `XY|hotspot_3x10|0x0000|seed0` injected 145 packets and received 6, and `XY|uniform|0x0000|seed0` injected 141 packets and received 4. This shows the hotspot table and uniform generator are not empty, and the final-sweep blank cells are caused by the `-warmup 1000` stats window after early XY traffic has already injected, delivered a few same-chiplet or otherwise reachable packets, and then stalled behind routes that cannot cross chiplet boundaries through cardinal XY. Assumption: warm-up-0 diagnostics can reduce blank cells for traceability only; they are not final performance claims. Blocked: a true post-injection drain policy requires a source cut-off plus drain/timeout mechanism that the current runner and simulator do not provide. No simulator source, helper source, routing behavior, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, old final-sweep artifact, Noxim rebuild, full sweep, regression command, `./regression.sh --update`, or final-report performance claim was changed.

## T0034: Decide Next Gap-Closure Direction and Add Follow-up Tasks

- **Status:** DONE
- **Objective:** Evaluate the remaining final-report blocker closure options and choose the safest next direction before any further implementation work.
- **Relevant roadmap phase:** Phase 9
- **Files changed:** `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md`.
- **Acceptance criteria:** Options A through F are compared for benefit, risk, time cost, source-code impact, validation burden, external dependency burden, report-quality effect, risk of new blockers, and late-project appropriateness; exactly one primary next direction is recommended; follow-up tasks are added; no source code, simulations, final sweep, or final report regeneration is performed.
- **Validation command:** Documentation-only validation with `git diff --check`, parent status, and `external/noxim` submodule status. Do not rerun simulations, rebuild Noxim, regenerate the final report, or use `./regression.sh --update`.
- **Notes:** Completed on 2026-05-11 as a documentation-only decision task. Option A, revising the final report with the T0033 diagnosis without adding simulator behavior, was selected as the primary next direction. Option A has high report-quality benefit, low time cost, no source-code impact, low validation burden, no external dependency burden, low risk of new blockers, and is appropriate late in the project. Option B, an interposer-aware XY-like baseline, could eventually improve comparison quality but requires new routing behavior and substantial validation, so it is too risky before final submission. Option C, source-cutoff plus post-injection drain, could improve eventual-delivery analysis but does not fix standard XY topology incompatibility and requires simulator/runner semantics changes. Option D, PARSEC/GEM5 trace support, has high external dependency and validation burden and is not appropriate this late. Option E, documenting remaining work only, is safe but leaves report quality lower than Option A because it would not fold in the T0033 diagnosis. Option F was treated as a possible post-final design gate for heavier experimental extensions, not as the immediate direction. Assumption: T0033 diagnostic data should be used as explanatory provenance only, not as a replacement performance data set. Blocked: Strong unrestricted inter-chiplet XY-vs-DEFT performance comparison remains blocked without either an interposer-aware baseline route or an explicitly approved source-supported drain/source-cutoff policy.

## T0035: Revise Final Report with T0033 Diagnosis

- **Status:** DONE
- **Objective:** Update the claim-safe final report draft and IEEE LaTeX source so they explain the T0033 XY blocker diagnosis without adding new simulator behavior or unsupported results.
- **Why it exists:** T0034 selected Option A as the primary gap-closure direction because it improves the final report using validated diagnosis while avoiding late high-risk simulator changes.
- **Relevant roadmap phase:** Phase 9
- **Scope:** Revise `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex` to explain that standard `XY` is a limited control baseline on `DEFT_2_5D`, that hotspot zero-injection cells are measured-window artifacts after warm-up, that uniform/localized zero-received cells are caused by XY topology incompatibility, and that drain/source-cutoff and interposer-aware baselines remain future work. Preserve all T0026/T0027/T0028 measured values, blank cells, claim-safety wording, assumptions, blockers, limitations, and validation provenance.
- **Out of scope:** Simulator source changes, helper source changes, DeFT routing changes, VN transition changes, VL fault injection changes, LUT schema/use changes, topology behavior changes, Noxim rebuilds, simulation reruns, final sweep reruns, new result tables from T0033 diagnostics, PDF compilation unless TeX tooling is already available and explicitly part of the task, and `./regression.sh --update`.
- **Files changed:** `docs/FINAL_REPORT_DRAFT.md`, `final_report/main.tex`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, and `docs/PROMPTS.md`.
- **Source code changes allowed:** No.
- **Simulation reruns allowed:** No.
- **Acceptance criteria:** The Markdown and LaTeX reports include the T0033 diagnosis as explanatory provenance; the reports still make no improvement, ranking, statistical-significance, unrestricted XY-vs-DEFT latency, or complete-reachability claims; T0033 warm-up-0 values are not presented as final performance results; old T0026/T0027/T0028 artifacts remain untouched; `git diff --check` passes.
- **Validation method or limitation:** Documentation/source consistency checks only. `git diff --check` passed. LaTeX compilation was not attempted because `latexmk`, `pdflatex`, `bibtex`, and `tectonic` were not available on the Windows PATH; PDF generation remains for T0032.
- **Notes:** Completed on 2026-05-11. `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex` now explain the T0033 diagnosis as provenance only: `XY|hotspot_3x10` empty cells are measured-window artifacts from `-warmup 1000` after early traffic injected and stalled, `XY|uniform` and `XY|localized_40` zero-received cells come from standard cardinal-only `XY` being topology-incompatible with unrestricted inter-chiplet `DEFT_2_5D` traffic, and a drain/source-cutoff policy would support eventual-delivery analysis but would not fix standard `XY` topology incompatibility. Warm-up-0 diagnostic values are not presented as final performance results. No source code, simulator behavior, helper behavior, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifacts, Noxim rebuild, simulation run, final sweep regeneration, regression command, or performance claim was changed. No new durable decision was made, so `docs/DECISIONS.md` was not updated.

## T0036: Post-Final Experimental Extension Design Gate

- **Status:** DONE
- **Objective:** After the final report artifact is revised and PDF generation is handled or explicitly blocked, decide whether any high-risk experimental extension should be designed as future work.
- **Why it exists:** T0034 deferred Options B, C, and D because they require source behavior changes, substantial validation, or external dependencies that are not appropriate before final report closure.
- **Relevant roadmap phase:** Phase 9
- **Scope:** Revisit the deferred experimental directions after final report closure: interposer-aware XY-like baseline, source-cutoff plus post-injection drain, route-compatible intra-chiplet comparison policy, and PARSEC/GEM5 trace support. Produce a design-only recommendation and, if appropriate, split one selected direction into a future implementation task.
- **Out of scope:** Source-code edits, simulation reruns, final-sweep reruns, report claim changes, generated artifact overwrites, Noxim rebuilds, external dependency installation, and `./regression.sh --update`.
- **Files changed:** `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md`.
- **Source code changes allowed:** No.
- **Simulation reruns allowed:** No.
- **Acceptance criteria:** The task either selects one future experimental extension for a later source-change design/implementation task or explicitly records that no further experimental work should be attempted; risks, validation requirements, and dependencies are documented before any code or simulation work.
- **Validation method or limitation:** Documentation/status validation only with `git diff --check` and repository status checks. Any future source or simulation validation must be assigned to a later explicit task.
- **Notes:** Completed on 2026-05-11 as a documentation-only design gate after the revised final report PDF was generated. The selected direction is no further experimental work for this project phase. An interposer-aware XY-like baseline was not selected because it requires new routing behavior, build validation, targeted route tests, and a new versioned comparison data set before it could support claims. A source-cutoff plus post-injection drain policy was not selected because it changes simulator/runner stop semantics, requires new metric interpretation, and still would not make standard `XY` topology-compatible with unrestricted inter-chiplet traffic. A route-compatible intra-chiplet comparison was not selected because it narrows away from the inter-chiplet DeFT requirement and would create a separate limited study after the final PDF is already complete. PARSEC/GEM5 trace support was not selected because it requires external trace-generation or import infrastructure and substantial validation. Assumption: the current final-report PDF and T0026/T0027/T0028 artifact chain are the terminal experimental deliverable unless the user explicitly reopens the project with a new task. Blocked: stronger claims remain blocked by missing interposer-aware baseline routing, missing source-cutoff/drain semantics, missing directional endpoint fault modeling, and missing validated PARSEC/GEM5 trace workflow. ADR-0042 records the durable decision.

## T0037: Final Submission Handoff Check

- **Status:** DONE
- **Objective:** Perform a documentation-only final handoff check after experimental work is closed.
- **Why it exists:** T0036 selected no further experimental work, so the only recommended follow-up is an administrative readiness check if the user wants one.
- **Relevant roadmap phase:** Phase 9
- **Scope:** Confirm final artifact paths, repository status, tracking-document consistency, and remaining blockers without changing report claims or generated artifacts.
- **Out of scope:** Source-code edits, simulator/helper behavior changes, report content changes, generated final-sweep artifact changes, generated final-report PDF changes, Noxim rebuilds, simulation reruns, external dependency installation, and `./regression.sh --update`.
- **Files changed:** `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, and `docs/PROMPTS.md`.
- **Source code changes allowed:** No.
- **Simulation reruns allowed:** No.
- **Acceptance criteria:** Final artifact paths and repository status are recorded; no experimental extension is started; `git diff --check` passes.
- **Validation method or limitation:** Documentation/status validation only with `git status --short --branch`, `git diff --check`, and `external/noxim` status checks.
- **Notes:** Completed on 2026-05-11 as a documentation-only final handoff check. Required startup reading was completed, and a short implementation plan was produced before status checks or tracking-document edits. Confirmed source-document roles: `Extended_Proposal.pdf` remains the primary project requirements source, the original DeFT paper remains the primary algorithmic reference, `Proposal.pdf` remains initial context only, and the peer evaluation document was ignored. Confirmed `final_report/main.pdf` exists at `C:\Projects\CMP-720-Project-Proposal\final_report\main.pdf` with size 344758 bytes, and `final_report/main.log` records `Output written on main.pdf (5 pages, 344758 bytes)`. Confirmed current `final_report/main.tex`, `references.bib`, `IEEEtran.cls`, `README.md`, and `figures/schematic.png` are present. Confirmed final report-support paths `t0026_final_sweep_v1`, `t0026_final_analysis_v1`, `t0027_report_support_v1`, and `t0028_final_report_results_v1/report_results_draft.md` are present, with 150 T0026 JSON stats files, 300 log files, and 5 generated LUT files. Parent repository status before edits showed only the pre-existing untracked `final_report.zip`; `external/noxim` status was clean. Handoff caveat: `final_report.zip` is stale, untracked, missing `final_report/main.pdf`, and contains an older archived `final_report/main.tex`, so it must not be used as the current submission package unless refreshed in a separate packaging task. Handoff caveat: `docs/FINAL_REPORT_DRAFT.md` still contains an older note that PDF generation is blocked, but current tracking docs and `final_report/main.pdf` supersede it; it was left unchanged to avoid report-content edits in T0037. Final `git diff --check` completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only. Final parent status showed modified tracking docs and the pre-existing untracked `final_report.zip`; final `external/noxim` status remained clean. No source code, report claims, simulator/helper behavior, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifacts, generated final-report PDF artifacts, Extended Proposal files, Noxim rebuild, simulation run, final-sweep regeneration, external dependency installation, regression command, or `./regression.sh --update` was changed.

## T0038: Refresh Final Submission Package

- **Status:** DONE
- **Objective:** Refresh a final submission archive only if a zip/archive package is required.
- **Why it exists:** T0037 found that the pre-existing untracked `final_report.zip` is stale and does not include the generated PDF.
- **Relevant roadmap phase:** Phase 9
- **Scope:** Create or refresh only the submission archive so it contains the current final-report PDF and source files.
- **Out of scope:** Source-code edits, report-claim changes, simulator/helper behavior changes, generated final-sweep artifact changes, generated final-report PDF changes, Noxim rebuilds, simulation reruns, external dependency installation, and `./regression.sh --update`.
- **Files changed:** `final_report.zip`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, and `docs/PROMPTS.md`.
- **Source code changes allowed:** No.
- **Simulation reruns allowed:** No.
- **Acceptance criteria:** If an archive is required, it includes the current `final_report/main.pdf`, `final_report/main.tex`, `final_report/references.bib`, `final_report/IEEEtran.cls`, `final_report/README.md`, and `final_report/figures/schematic.png`; if no archive is required, the task records that no package refresh was needed; `git diff --check` passes.
- **Validation method or limitation:** Archive-contents inspection and documentation/status validation only. Do not regenerate the PDF or rerun simulations.
- **Notes:** Completed on 2026-05-11 as a packaging-only task. Starting T0038 was treated as the archive-required path. The previously documented stale `final_report.zip` was not present at task start, so a fresh archive was created. The new `final_report.zip` contains exactly `final_report/main.pdf`, `final_report/main.tex`, `final_report/references.bib`, `final_report/IEEEtran.cls`, `final_report/README.md`, and `final_report/figures/schematic.png`, with entry sizes matching the current files. The archive size is 659238 bytes and SHA-256 is `C54186F6326B288C3C069FB396F23874CBE9A30DAD5913AA38A688E8444B5882`. No final-report PDF, report source, report claims, simulator source, helper behavior, generated final-sweep artifacts, generated final-report PDF artifacts, Noxim rebuild, simulation run, final-sweep regeneration, external dependency installation, regression command, or `./regression.sh --update` was changed. `docs/DECISIONS.md` was not updated because no new durable decision was made. `git diff --check` passed with line-ending warnings for edited Markdown files only.

## T0039: Analyze Remaining Gaps and Document Future Task Backlog

- **Status:** DONE
- **Type:** documentation/planning
- **Objective:** Analyze remaining post-package limitations and document an ordered future task backlog.
- **Why it exists:** T0038 completed the final submission package, but known limitations remain for future development after the current submission.
- **Relevant roadmap phase:** Phase 9
- **Scope:** Convert remaining blockers into ordered future tasks with dependencies, risk levels, validation expectations, and claim-safety guardrails.
- **Out of scope:** Source-code edits, helper-source edits, simulator behavior changes, report-claim changes, generated artifact changes, final-report PDF regeneration, archive changes, Noxim rebuilds, simulation reruns, final-sweep regeneration, external dependency installation, and `./regression.sh --update`.
- **Files changed:** `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, `docs/ARCHITECTURE.md`, and `docs/DECISIONS.md`.
- **Source code changes allowed:** No.
- **Simulation reruns allowed:** No.
- **Acceptance criteria:** T0040 through T0048 exist as ordered future backlog tasks; each future task records type, objective, rationale, scope, out-of-scope items, likely files, source-code permission, simulation permission, acceptance criteria, validation method or limitation, dependencies, risk level, and recommended prompt; current final submission remains unblocked; `git diff --check` passes.
- **Validation method or limitation:** Documentation/status validation only with `git diff --check` and `external/noxim` status. Do not run simulator validation.
- **Dependencies:** T0038 final package completion.
- **Risk level:** Low, because no source, generated artifact, report PDF, archive, or simulation output is changed.
- **Notes:** Completed on 2026-05-11 as a documentation-only backlog task. The backlog is explicitly future work and does not block current final submission.

## T0040: Design Interposer-Aware XY Baseline

- **Status:** DONE
- **Type:** design
- **Objective:** Define a new routing baseline that intentionally routes inter-chiplet packets through VLs and the active interposer.
- **Why it exists:** Standard `XY` is cardinal-only on `DEFT_2_5D` and is not a valid unrestricted inter-chiplet baseline, so stronger XY-vs-DEFT claims need a separately designed baseline.
- **Relevant roadmap phase:** Phase 9 future backlog
- **Scope:** Specify the IA-XY or `INTERPOSER_AWARE_XY` semantics, route phases, naming, configuration surface, fault-mask behavior, metric interpretation, and validation plan. Clearly state that this is not standard `XY`.
- **Out of scope:** Source-code edits, simulator reruns, final-sweep regeneration, report-claim changes, generated artifact overwrites, and modifications to existing `XY` or `DEFT` behavior.
- **Files changed:** `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md`.
- **Source code changes allowed:** No.
- **Simulation reruns allowed:** No.
- **Acceptance criteria:** Design document records route phases for same-chiplet, source-chiplet exit, interposer traversal, destination-chiplet entry, and destination-local delivery; records how IA-XY differs from standard `XY`; defines validation commands or explains why implementation validation is deferred; identifies code surfaces likely to change; preserves claim-safety limits.
- **Validation method or limitation:** Documentation-only validation with `git diff --check` and `external/noxim` status.
- **Dependencies:** T0039.
- **Risk level:** Medium, because the design will shape a future routing implementation.
- **Recommended prompt:** `Start task T0040: Design Interposer-Aware XY Baseline. Read the required project docs, continue on the existing branch, and produce a design-only IA-XY baseline plan that clearly states it is not standard XY. Do not edit source code or run simulations. Update tracking docs and run git diff --check.`
- **Notes:** Completed on 2026-05-11 as a design-only documentation task. IA-XY is defined as a new proposed `INTERPOSER_AWARE_XY` baseline, not standard `XY`. Standard `XY` remains cardinal-only and unchanged. Future implementation must add a separate selectable mode, preserve `XY` and `DEFT`, use new validation artifacts, and avoid stronger claims until IA-XY is implemented, validated, and evaluated in a later task.

## T0041: Implement Interposer-Aware XY Baseline

- **Status:** DONE
- **Type:** implementation
- **Objective:** Add a selectable IA-XY or `INTERPOSER_AWARE_XY` routing mode.
- **Why it exists:** A fairer unrestricted inter-chiplet comparison requires a baseline that can traverse VLs and the active interposer without changing standard `XY` or `DEFT`.
- **Relevant roadmap phase:** Phase 9 future backlog
- **Scope:** Implement a new registered routing algorithm or equivalent selectable mode according to T0040, add explicit config examples, and preserve existing `XY` and `DEFT` behavior.
- **Out of scope:** Replacing standard `XY`, modifying `DEFT` route selection, changing VN rules, changing VL fault semantics, changing LUT schema/use path, running a full comparison sweep, overwriting T0026/T0027/T0028 artifacts, report updates, and `./regression.sh --update`.
- **Files changed:** `external/noxim/src/routingAlgorithms/Routing_INTERPOSER_AWARE_XY.h`, `external/noxim/src/routingAlgorithms/Routing_INTERPOSER_AWARE_XY.cpp`, `external/noxim/src/GlobalParams.h`, `external/noxim/src/ConfigurationManager.cpp`, `external/noxim/bin/power.yaml`, `external/noxim/config_examples/deft_2_5d_interposer_aware_xy_baseline.yaml`, `external/noxim/config_examples/deft_2_5d_ia_xy_smoke_same_chiplet.txt`, `external/noxim/config_examples/deft_2_5d_ia_xy_smoke_inter_chiplet.txt`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, `docs/ARCHITECTURE.md`, and `docs/DECISIONS.md`.
- **Source code changes allowed:** Yes, limited to the new baseline mode and necessary configuration hooks.
- **Simulation reruns allowed:** Yes, targeted smoke tests only after successful build validation; no full sweep.
- **Acceptance criteria:** New routing mode is selectable; standard `XY` and `DEFT` behavior are unchanged; build validation passes; focused no-fault and fault-mask smoke tests exercise same-chiplet and inter-chiplet route phases; validation results are recorded.
- **Validation method or limitation:** Completed with the known Noxim build command from `external/noxim` (`./build.sh`) and targeted smokes only: route registration/config loading, same-chiplet `0 -> 3` no-interposer smoke, inter-chiplet `0 -> 63` no-fault VL/interposer smoke, and explicit `-deft_faulty_vls 0` fallback smoke. Do not treat these smokes as performance evidence.
- **Dependencies:** T0040.
- **Risk level:** High, because it changes routing behavior in a high-risk simulator area.
- **Recommended prompt:** `Start task T0041: Implement Interposer-Aware XY Baseline. Use the accepted T0040 design, add a new selectable IA-XY mode without modifying existing XY or DEFT behavior, run build validation and targeted smokes only, update tracking docs, and run git diff --check.`
- **Notes:** Completed on 2026-05-11. `INTERPOSER_AWARE_XY` is separately selectable on `DEFT_2_5D`; it does not use the DeFT schema-v1 LUT or DeFT VL optimization, and it avoids known faulty physical VLs through existing `DeftTopology` functional-state queries. Standard `XY`, `DEFT`, VN transition restrictions, VL fault injection, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, T0026/T0027/T0028 artifacts, `final_report/main.pdf`, `final_report.zip`, and Extended Proposal files were preserved.

## T0042: Run Limited IA-XY vs DeFT Comparison

- **Status:** DONE
- **Type:** experiment
- **Objective:** Run a limited, claim-safe comparison between the validated IA-XY baseline and `DEFT`.
- **Why it exists:** Stronger comparison claims require new validated artifacts produced after a topology-compatible baseline exists.
- **Relevant roadmap phase:** Phase 9 future backlog
- **Scope:** Define exact matrix, seeds, traffic profiles, fault masks, warm-up, simulation window, output directories, analysis rules, and claim limits before execution; run only the approved limited matrix into new artifact directories.
- **Out of scope:** Overwriting T0026/T0027/T0028 artifacts, full final-sweep regeneration unless explicitly approved, changing simulator/source behavior, changing report claims before analysis review, and `./regression.sh --update`.
- **Files likely to change:** `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, possibly `docs/ARCHITECTURE.md`, and new ignored generated directories under `external/noxim/other/generated/`.
- **Source code changes allowed:** No, unless a blocker is found and a separate implementation task is opened.
- **Simulation reruns allowed:** Yes, only the explicitly defined limited IA-XY-vs-DEFT matrix in new artifact directories.
- **Acceptance criteria:** Matrix is documented before execution; generated artifacts are isolated from T0026/T0027/T0028; every run has recorded command, log, return code, and stats file; analysis is blank-aware and claim-safe; no unsupported ranking or improvement claims are made.
- **Validation method or limitation:** Completed with a limited 24-run matrix under `external/noxim/other/generated/t0042_iaxy_deft_limited_v1/`, using existing simulator/config/stat/LUT surfaces and generated T0042 harnesses without modifying runner or analysis source semantics. Cross-checks verified 24 manifest rows, 24 return code `0` rows, 24 JSON stats files, 24 stdout logs, 24 stderr logs, no summary/stat mismatches, no config mismatches, and blank-aware condition and pair summaries. The result is exploratory report-support only.
- **Dependencies:** T0041.
- **Risk level:** High, because it produces new experimental artifacts that could affect future claims.
- **Recommended prompt:** `Start task T0042: Run Limited IA-XY vs DeFT Comparison. First define the exact limited matrix and new artifact directories, then execute only that matrix after confirming T0041 validation. Preserve T0026/T0027/T0028, keep claims blank-aware, update tracking docs, and run git diff --check.`
- **Files changed:** `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, `docs/ARCHITECTURE.md`, and ignored generated artifacts under `external/noxim/other/generated/t0042_iaxy_deft_limited_v1/`.
- **Notes:** Completed on 2026-05-11. Matrix: routings `INTERPOSER_AWARE_XY` and `DEFT`; traffic profiles `uniform`, `localized_40`, and `hotspot_3x10`; fault masks `0x0000` and `0x1111`; seeds `0` and `1`; `-sim 10000`; `-warmup 1000`; JSON stats. IA-XY hotspot cells injected zero packets and remain blank-aware. Some other cells support descriptive side-by-side display only, not ranking or improvement claims. Standard `XY`, `DEFT`, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis source semantics, T0026/T0027/T0028 artifacts, `final_report/main.pdf`, `final_report.zip`, and Extended Proposal files were preserved.

## T0043: Design Source-Cutoff and Post-Injection Drain Policy

- **Status:** DONE
- **Type:** design
- **Objective:** Specify how injection should stop and how drain/timeout should be measured for eventual-delivery analysis.
- **Why it exists:** The current fixed-window policy and Noxim `-volume` behavior do not provide a source-cutoff plus drain phase for eventual-delivery reachability.
- **Relevant roadmap phase:** Phase 9 future backlog
- **Scope:** Define source cutoff, drain start, in-flight empty condition, timeout policy, metric denominators, interaction with warm-up, and differences from current `-volume` behavior.
- **Out of scope:** Source-code edits, simulation reruns, implementation, report claim changes, full sweep planning, and artifact regeneration.
- **Files likely to change:** `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and possibly `docs/DECISIONS.md`.
- **Source code changes allowed:** No.
- **Simulation reruns allowed:** No.
- **Acceptance criteria:** Design clearly distinguishes source cutoff plus drain/timeout from `-volume`; records metric semantics; defines smoke-test expectations; identifies simulator/runner surfaces likely to change; preserves current fixed-window artifacts as historical final-report support.
- **Validation method or limitation:** Documentation-only validation with `git diff --check`, `external/noxim` status, and artifact-preservation guards.
- **Dependencies:** T0039.
- **Risk level:** Medium, because the design changes future metric interpretation.
- **Recommended prompt:** `Start task T0043: Design Source-Cutoff and Post-Injection Drain Policy. Produce a design-only policy that distinguishes drain/timeout from current -volume behavior, defines metrics and validation, updates tracking docs, and runs git diff --check.`
- **Files changed:** `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md`.
- **Notes:** Completed on 2026-05-12 as a design-only documentation task. The policy defines an opt-in future eventual-delivery mode with source cutoff, drain start, source quiescence, in-flight empty checks, explicit timeout, metric denominators, warm-up gating, differences from fixed-window `-sim`, differences from current Noxim `-volume`, future simulator/runner surfaces, and expected T0044 smoke cases. T0026/T0027/T0028 and T0042 remain historical fixed-window artifacts and were not regenerated or reinterpreted. No simulator source, helper source, routing logic, standard `XY`, `DEFT`, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, final-report artifacts, package artifacts, or Extended Proposal files were changed.

## T0044: Implement and Validate Drain Policy

- **Status:** DONE
- **Type:** implementation
- **Objective:** Add source-cutoff plus drain/timeout support if the T0043 design is accepted.
- **Why it exists:** Eventual-delivery analysis cannot be validated until the simulator and/or runner can stop injection and drain in-flight traffic under a bounded policy.
- **Relevant roadmap phase:** Phase 9 future backlog
- **Scope:** Implement only the accepted T0043 semantics, add configuration/runner support as needed, and run targeted validation before any broader experiment.
- **Out of scope:** Full sweeps before smoke tests pass, changing existing fixed-window metric semantics, overwriting T0026/T0027/T0028, IA-XY implementation, PARSEC/GEM5 work, report claim changes, and `./regression.sh --update`.
- **Files likely to change:** `external/noxim/src/Main.cpp`, `external/noxim/src/GlobalParams.*`, `external/noxim/src/ConfigurationManager.cpp`, `external/noxim/src/ProcessingElement.*`, `external/noxim/src/Router.*`, `external/noxim/src/Buffer.*`, `external/noxim/src/NoC.*`, `external/noxim/src/Stats.*`, `external/noxim/src/GlobalStats.*`, `external/noxim/other/deft_experiment_runner.py`, config examples, and tracking docs.
- **Source code changes allowed:** Yes, limited to the accepted drain/source-cutoff implementation and necessary runner support.
- **Simulation reruns allowed:** Yes, targeted validation only after build passes; no full sweep until smoke tests pass and a later experiment task is opened.
- **Acceptance criteria:** Completed. Build passes; source cutoff, drain completion, source quiescence, timeout, and stop reason are observable; injected/received/in-flight accounting is validated on small cases; fixed-window `-sim` and current `-volume` behavior remain available when drain mode is disabled; validation results are recorded.
- **Validation method or limitation:** Completed with the known `external/noxim` build command `./build.sh` and targeted drain smokes only: no-traffic immediate drain, same-chiplet hardcoded delivery, inter-chiplet `DEFT` delivery with a no-fault LUT, cutoff suppression, timeout, warm-up gating, disabled fixed-window compatibility, and disabled `-volume` compatibility. Do not use `./regression.sh --update`.
- **Dependencies:** T0043.
- **Risk level:** High, because it changes simulator/runner stop semantics and metric interpretation.
- **Recommended prompt:** `Start task T0044: Implement and Validate Drain Policy. Use the accepted T0043 design, add source-cutoff plus drain/timeout support, run build and targeted smoke validation only, preserve fixed-window behavior, update tracking docs, and run git diff --check.`
- **Files changed:** `external/noxim/src/GlobalParams.h`, `external/noxim/src/GlobalParams.cpp`, `external/noxim/src/ConfigurationManager.cpp`, `external/noxim/src/ProcessingElement.h`, `external/noxim/src/ProcessingElement.cpp`, `external/noxim/src/ReservationTable.h`, `external/noxim/src/ReservationTable.cpp`, `external/noxim/src/Router.h`, `external/noxim/src/Router.cpp`, `external/noxim/src/NoC.h`, `external/noxim/src/NoC.cpp`, `external/noxim/src/Main.cpp`, `external/noxim/src/GlobalStats.h`, `external/noxim/src/GlobalStats.cpp`, `external/noxim/config_examples/deft_2_5d_drain_smoke_same_chiplet.txt`, `external/noxim/config_examples/deft_2_5d_drain_smoke_inter_chiplet.txt`, `external/noxim/config_examples/deft_2_5d_drain_smoke_cutoff.txt`, `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- **Notes:** Completed on 2026-05-12. Added opt-in drain mode selected by `-drain_mode` or `-drain`, with YAML/CLI fields for source cutoff and timeout. Drain mode gates source admission during warm-up, admits measured packet heads only before the source cutoff, drains accepted traffic after cutoff, stops with `drain_completed` or `drain_timeout`, and exports stop reason, timing fields, measured injected/received denominators, undelivered counts, and in-flight counts. Empty detection covers source queues, router buffers, router reservations, pending hub/VL handshakes, and measured injected/received packet and flit balances. Drain mode and current Noxim `-volume` are mutually exclusive to avoid ambiguous stop policies; fixed-window `-sim` and current `-volume` behavior remain available when drain mode is disabled. Targeted smokes passed under ignored `external/noxim/other/generated/t0044_drain_smokes/`. No standard `XY`, `DEFT`, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, existing fixed-window metric semantics, existing runner/analysis defaults, final-report artifacts, package artifacts, or Extended Proposal files were changed. No final sweep artifacts were regenerated.

## T0045: Evaluate Directional Fault Modeling

- **Status:** DONE
- **Type:** design/feasibility
- **Objective:** Analyze whether the simulator should support single-direction endpoint fault modeling in addition to the current physical bidirectional VL fault model.
- **Why it exists:** The current implementation uses 16 physical bidirectional VLs, while the DeFT paper's fault-rate interpretation includes directional VL accounting and single-direction cases.
- **Relevant roadmap phase:** Phase 9 future backlog
- **Scope:** Compare physical bidirectional and directional endpoint fault models, identify schema/config/runtime impacts, document paper compatibility, and recommend whether to implement.
- **Out of scope:** Source-code edits, fault-injection behavior changes, LUT schema changes, simulation reruns, artifact regeneration, and report claim changes.
- **Files likely to change:** `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, and `docs/PROMPTS.md`.
- **Source code changes allowed:** No.
- **Simulation reruns allowed:** No.
- **Acceptance criteria:** Completed. Feasibility note explains how single-direction endpoint faults would map to VL IDs, masks, LUT generation, runtime lookup, validation, and paper fault-rate wording; recommends deferring support behind a future versioned fault-model task.
- **Validation method or limitation:** Documentation-only validation with `git diff --check`, `external/noxim` status, and protected-artifact guards.
- **Dependencies:** T0039.
- **Risk level:** Medium, because implementation would affect fault injection, LUTs, and result interpretation.
- **Recommended prompt:** `Start task T0045: Evaluate Directional Fault Modeling. Analyze compatibility between the current 16 physical bidirectional VL model and directional endpoint faults, produce a feasibility recommendation, update tracking docs, and run git diff --check.`
- **Files changed:** `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, and `docs/PROMPTS.md`.
- **Notes:** Completed on 2026-05-12 as a documentation-only feasibility task. The current simulator remains a 16 physical bidirectional VL model: one `VerticalLinkInfo::is_functional` state per physical VL, 16-bit physical `fault_mask_id` keys in `deft_vl_lut.v1`, physical fault masks in the runner and generator, and physical functional-state checks in `DEFT` and IA-XY routing. T0045 recommends deferring directional endpoint support because it would require explicit per-direction state, new config/CLI fields, schema-v2 LUT generation/runtime lookup, directional route checks, new validation, new artifact directories, and clear result labels. Existing T0026/T0027/T0028, T0042, T0044, final-report, package, and Extended Proposal artifacts were preserved and must not be reinterpreted as single-direction fault evidence.

## T0046: PARSEC/GEM5 Trace Support Feasibility

- **Status:** DONE
- **Type:** feasibility
- **Objective:** Assess required external dependencies, trace format, workload mapping, and validation burden for PARSEC/GEM5 trace evaluation.
- **Why it exists:** PARSEC/GEM5 trace evaluation remains unvalidated and must not be claimed until a reproducible pipeline exists.
- **Relevant roadmap phase:** Phase 9 future backlog
- **Scope:** Identify trace source requirements, expected format, router/workload mapping, dependency setup, data volume, reproducibility concerns, and minimal smoke validation plan.
- **Out of scope:** Installing dependencies, importing traces, source-code edits, simulations, report claim changes, and claiming PARSEC support.
- **Files likely to change:** `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and possibly `docs/DECISIONS.md`.
- **Source code changes allowed:** No.
- **Simulation reruns allowed:** No.
- **Acceptance criteria:** Completed. Feasibility document records dependency list, trace format assumptions, workload-to-router mapping, validation burden, blockers, artifact policy, claim-safety limits, and a defer recommendation.
- **Validation method or limitation:** Documentation-only validation with `git diff --check`, `external/noxim` status, and protected-artifact guards; no network install, external trace generation, simulation, or Noxim rebuild.
- **Dependencies:** T0039.
- **Risk level:** High, because it may require external tools and large validation effort.
- **Recommended prompt:** `Start task T0046: PARSEC/GEM5 Trace Support Feasibility. Assess dependencies, trace format, workload mapping, and validation burden without installing tools or claiming support. Update tracking docs and run git diff --check.`
- **Files changed:** `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, and `docs/PROMPTS.md`.
- **Notes:** Completed on 2026-05-12 as a documentation-only feasibility task. The extended proposal and original DeFT paper justify PARSEC/GEM5 real-application evaluation as a future workload path, but the current workspace has no GEM5/PARSEC dependencies, full-system images/checkpoints, trace-generation scripts, trace inputs, or Noxim-ready trace schema. Existing Noxim `TRAFFIC_TABLE_BASED` and `TRAFFIC_HARDCODED` inputs can support aggregate or tiny event-style traffic, but they are not a complete claim-safe GEM5/PARSEC pipeline. T0046 recommends deferring trace ingestion until a versioned minimal trace schema, tiny fixture, core/router and agent/router mapping policy, dependency provenance, invalid-trace rejection, and small Noxim smoke validation are accepted. No source code, simulator behavior, traffic behavior, metrics, runner/analysis behavior, generated artifacts, final-report artifacts, package artifacts, or Extended Proposal files were changed.

## T0047: Implement PARSEC/GEM5 Trace Ingestion

- **Status:** BLOCKED
- **Type:** implementation
- **Objective:** Implement trace ingestion only after T0046 defines the trace format and validation plan.
- **Why it exists:** Real-application traffic cannot be evaluated until the simulator or helper pipeline can ingest a validated trace format.
- **Relevant roadmap phase:** Phase 9 future backlog
- **Scope:** Add only the accepted trace parser/import path, mapping checks, small example trace support, and smoke-test workflow.
- **Out of scope:** Large workload sweeps before small trace smokes pass, unsupported PARSEC claims, IA-XY work, drain-policy work, report updates before validated artifacts exist, and `./regression.sh --update`.
- **Files likely to change:** `external/noxim/other/*`, `external/noxim/src/ProcessingElement.*` or traffic-table surfaces if required by T0046, config examples, and tracking docs.
- **Source code changes allowed:** Yes, only after T0046 accepts a trace format and validation plan.
- **Simulation reruns allowed:** Yes, small trace smoke tests only before any large workload.
- **Acceptance criteria:** Parser/import path accepts the documented trace format; invalid traces fail clearly; a tiny trace smoke validates routing launch and stats export; no PARSEC-scale claim is made.
- **Validation method or limitation:** Blocked by T0046's defer recommendation until a versioned trace schema, tiny fixture, dependency provenance plan, and workload mapping policy are supplied and accepted. After that, use T0046-defined small trace smokes plus build validation if C++ source changes are required. Do not run large workloads until a later experiment task is opened.
- **Dependencies:** T0046.
- **Risk level:** High, because it may affect traffic generation and depend on external trace quality.
- **Recommended prompt:** `Start task T0047: Implement PARSEC/GEM5 Trace Ingestion. Use the accepted T0046 feasibility plan, implement only the trace ingestion path and tiny smoke validation, avoid large workloads or support claims, update tracking docs, and run git diff --check.`
- **Notes:** Blocked after T0046. Trace ingestion should not start from full PARSEC-scale traces. It needs a small accepted `deft_trace.v1`-style schema or equivalent, a tiny fixture, mapping documentation, dependency provenance, and invalid-fixture validation first.

## T0048: Regenerate Report with New Validated Results

- **Status:** DONE
- **Type:** report
- **Objective:** Review T0056 and T0053 and update the report only where new validated artifacts support denominator-safe wording.
- **Why it exists:** Stronger claims or additional comparisons require report updates that preserve claim-safety and cite new validated artifact directories.
- **Relevant roadmap phase:** Phase 10 reachability closure and final report refresh.
- **Scope:** Completed. Reviewed T0056 and T0053 artifacts, updated `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex` with artifact-scoped drain-mode summaries, and kept PDF/package regeneration out of scope.
- **Out of scope:** Simulator/source changes, new experiments, overwriting old artifacts, unsupported performance claims, hidden metric reinterpretation, and `./regression.sh --update`.
- **Files changed:** `docs/FINAL_REPORT_DRAFT.md`, `final_report/main.tex`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/ROADMAP.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- **Source code changes allowed:** No.
- **Simulation reruns allowed:** No.
- **Acceptance criteria:** Completed. Report updates cite only validated T0056/T0053 artifacts; blank-aware fixed-window rules remain intact; new drain-mode statements are denominator-safe and artifact-scoped; PDF/package status is recorded as out of scope; old final-report artifacts are unchanged.
- **Validation method or limitation:** Documentation/report validation, `git diff --check`, `external/noxim` status, and protected-artifact checks. LaTeX/PDF build was not run because PDF regeneration was explicitly out of scope.
- **Dependencies:** T0056 and T0053 are complete and provide the current new drain-mode artifact sets. T0048 must still preserve their claim limits.
- **Risk level:** Medium, because it can alter final report wording and claims.
- **Recommended prompt:** Completed by this report-integration task.
- **Notes:** T0048 integrated T0056 as a 95/95 `DEFT` drain-completed matrix-scoped result and T0053 as a denominator-safe `DEFT` versus `INTERPOSER_AWARE_XY` drain comparison with 68 matched complete-delivery rows and 27 timeout/non-100% descriptive-only rows. It preserved T0026/T0027/T0028 fixed-window tables as historical final-report support, preserved standard `XY` as cardinal-only, did not relabel IA-XY as standard `XY`, and made no source, simulation, PDF, package, Extended Proposal, or generated-artifact changes.

## T0049: Define Reachability Closure Plan

- **Status:** DONE
- **Type:** planning/documentation
- **Objective:** Reopen the project completion plan around claim-safe DeFT reachability closure before changing source code or report claims.
- **Why it exists:** The user wants to finish the project more rigorously by investigating the gap between DeFT's expected reachability behavior and the current fixed-window simulation results, correcting implementation or simulator issues if found, and comparing against a proper interposer-aware baseline.
- **Relevant roadmap phase:** Phase 10 reachability closure and final report refresh.
- **Scope:** Record the ordered closure path, define the safe interpretation of 100% reachability as an eventual-delivery/drain-mode claim rather than a fixed-window claim, add follow-up tasks, update progress and prompt history, and preserve claim-safety rules.
- **Out of scope:** Source-code edits, simulator runs, Noxim rebuilds, generated artifact changes, final report PDF/package regeneration, Extended Proposal changes, and unsupported reachability claims.
- **Files changed:** `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/ROADMAP.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- **Source code changes allowed:** No.
- **Simulation reruns allowed:** No.
- **Acceptance criteria:** Completed. The documentation records the new reachability-closure direction, the next diagnostic task, downstream implementation/experiment/report tasks, and validation limitations.
- **Validation method or limitation:** Documentation-only validation with `git diff --check`, status checks, and protected-artifact guards. No simulator validation is performed in this planning task.
- **Dependencies:** User explicitly reopened project completion work after presentation preparation.
- **Risk level:** Low, because this task changes only planning documents.
- **Recommended prompt:** Completed by this documentation update.
- **Notes:** T0049 does not claim that current DeFT reaches 100%. It records that such a claim must be supported by new drain-based artifacts after diagnosis and, if necessary, implementation fixes.

## T0050: Diagnose DeFT Drain-Based Reachability Gap

- **Status:** DONE
- **Type:** diagnosis/validation
- **Objective:** Determine whether the gap between DeFT's expected reachability behavior and current results is caused by fixed-window measurement, DeFT implementation bugs, simulator/drain behavior, LUT selection, VN transition filtering, or traffic/fixture setup.
- **Why it exists:** Current T0026/T0027/T0028 results are fixed-window and blank-aware. They do not prove eventual delivery, and they also do not isolate whether any DeFT implementation issue exists.
- **Relevant roadmap phase:** Phase 10 reachability closure and final report refresh.
- **Scope:** Inspect relevant DeFT routing, topology, VN, LUT, fault, drain, and hardcoded traffic surfaces; define and run only small deterministic drain-mode diagnostics in a new artifact directory if validation is in scope; isolate failing source/destination/fault-mask cases with enough provenance for a later fix task.
- **Out of scope:** Broad sweeps, final-report updates, performance claims, standard `XY` changes, PARSEC/GEM5 work, directional endpoint faults, `./regression.sh --update`, and overwriting historical generated artifacts.
- **Files changed:** `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`. Ignored diagnostic artifacts were generated under `external/noxim/other/generated/t0050_deft_reachability_diagnosis_v1/`.
- **Source code changes allowed:** No by default. If a source bug is found, stop after documenting it and open T0051 for the fix.
- **Simulation reruns allowed:** Yes, only small deterministic drain-mode diagnostics after the exact matrix and artifact directory are documented.
- **Acceptance criteria:** Completed for the documented tiny matrix. Read-only source inspection and 12 deterministic drain-mode cases did not isolate a concrete DeFT, LUT, VN, fault-mask, hardcoded-traffic, or drain-accounting bug. All diagnostic cases stopped with `drain_completed`, injected packets equaled received packets, and no undelivered packets, buffered flits, reservations, or pending handshakes remained at stop.
- **Validation method or limitation:** Parent and `external/noxim` status checks, documented small diagnostic commands, `git diff --check`, `external/noxim` status after validation, and protected-artifact guards. This is diagnostic evidence only, not an all-pairs or final reachability claim.
- **Dependencies:** T0044 drain mode and T0049 closure plan.
- **Risk level:** Medium, because even small diagnostics can be misread as performance evidence if claim limits are not preserved.
- **Recommended prompt:** Completed by this diagnosis.
- **Notes:** The sampled fixed-window gap is most consistent with measurement/load semantics rather than a deterministic reachability failure in the inspected DeFT path, but T0050 does not prove universal DeFT reachability. T0051 remains blocked because no concrete source bug was isolated. T0052 should define and run the next accepted drain-based validation matrix.

## T0051: Fix DeFT Destination-Stress Flow-Control Blocker

- **Status:** DONE
- **Type:** implementation
- **Objective:** Fix the DeFT destination-convergence drain blocker isolated by T0055.
- **Why it exists:** DeFT routing, VN transition restrictions, LUT use, and VL fault handling are high-risk surfaces. Fixes should be targeted to diagnosed failures rather than speculative rewrites.
- **Relevant roadmap phase:** Phase 10 reachability closure and final report refresh.
- **Scope:** Inspect and modify only the diagnosed destination-convergence flow-control, reservation, VN, or route-phase implementation surface; add or update minimal deterministic fixtures if needed; rebuild Noxim; rerun the failing T0055 cases plus targeted smokes.
- **Out of scope:** Broad sweeps before targeted fixes pass, unrelated refactors, standard `XY` changes, traffic model changes, LUT schema changes unless T0050 identifies schema insufficiency and a separate design is accepted, report claim changes, and `./regression.sh --update`.
- **Files changed:** `external/noxim/src/ReservationTable.cpp`, `external/noxim/src/DeftVirtualNetwork.cpp`, generated ignored artifacts under `external/noxim/other/generated/t0051_deft_destination_stress_fix_v1/`, and tracking docs.
- **Source code changes allowed:** Yes, but only for the diagnosed root cause.
- **Simulation reruns allowed:** Yes, targeted failing cases and minimal smokes after build validation.
- **Acceptance criteria:** Completed. The documented T0051 targeted destination-stress rerun matrix passed 32 of 32 `DEFT` drain-mode cases, including dense no-fault and accepted `0x1111` destination-0 and destination-63 fixtures that had failed in T0055. Historical artifacts remained unchanged, and no final-report claim was strengthened.
- **Validation method or limitation:** Known Noxim build command `./build.sh`, targeted failing-case reruns, `git diff --check`, `external/noxim` diff/status checks, and protected-artifact guards.
- **Dependencies:** Reopened after T0055. T0055 isolated a repeatable DeFT/Noxim flow-control/reservation deadlock-style blocker under dense destination-convergence traffic: small and well-spaced cases drain, but dense no-fault destination-0 and destination-63 cases retain router-buffer flits and reservations indefinitely after source queues are empty.
- **Risk level:** High, because it can alter DeFT correctness.
- **Recommended prompt:** Completed by this implementation.
- **Notes:** T0051 fixed two tightly scoped DeFT/Noxim integration issues. First, `ReservationTable::checkReservation()` now treats an output VC as exclusive for a given output port regardless of input port, preventing two packets from the same physical input but different input VCs from reserving and interleaving on the same downstream output VC after DeFT output-VC translation. `ReservationTable::release()` also computes the removed reservation index before erasing the vector iterator. Second, `DeftVirtualNetwork::sourceCanUseEitherVirtualNetwork()` now allows a boundary inter-chiplet source to use either VN only when its attached physical VL is functional; if the attached VL is faulted and the source must horizontally detour to another boundary VL, it starts in VN0 so the later horizontal-to-down movement is legal. Assumption: the T0051 matrix is targeted fix evidence, not a final universal reachability sweep. Blocked: T0053 and final-report claim strengthening remain blocked until a broader post-fix DeFT drain-mode validation artifact supports comparison or stronger claims.

## T0052: Run Drain-Based DeFT Reachability Validation Matrix

- **Status:** DONE
- **Type:** experiment/validation
- **Objective:** Produce a new versioned DeFT reachability artifact set under source-cutoff plus drain/timeout semantics.
- **Why it exists:** A 100% reachability statement must be based on eventual-delivery-style evidence after sources stop, not on the historical fixed-window continuous-injection sweep.
- **Relevant roadmap phase:** Phase 10 reachability closure and final report refresh.
- **Scope:** Define a finite validation matrix over selected or all valid source/destination pairs, accepted physical fault masks, deterministic traffic fixtures, drain timeout policy, and artifact directory; run only after T0050 and any needed T0051 fixes are complete.
- **Out of scope:** Standard `XY` changes, PARSEC/GEM5 traces, directional endpoint fault support, report updates before analysis, overwriting T0026/T0027/T0028 or T0042 artifacts, and unsupported improvement claims.
- **Files changed:** Generated ignored artifacts under `external/noxim/other/generated/t0052_deft_drain_reachability_v1/` and tracking docs.
- **Source code changes allowed:** No, unless a new blocker is found and a separate fix task is opened.
- **Simulation reruns allowed:** Yes, only the accepted T0052 matrix.
- **Acceptance criteria:** Completed as an artifact-producing validation task, but the documented matrix did not validate 100% reachability. The artifact set records commands, config fixture, LUT provenance, traffic fixture, raw stats, summaries, stop reasons, injected/received denominators, and timeout/non-100% cases. All five aggregate all-pairs cases returned code `0` but stopped with `drain_timeout`.
- **Validation method or limitation:** Manifest/stat cross-checks, protected-artifact guards, `git diff --check`, and `external/noxim` status.
- **Dependencies:** T0050 is complete. T0051 is not required unless a later validation matrix exposes a concrete fixable root cause.
- **Risk level:** Medium, because the matrix size and timeout policy determine claim strength.
- **Recommended prompt:** Completed by this validation.
- **Notes:** T0052 used `DEFT` only, seed `0`, opt-in drain mode, a generated schema-v1 LUT for masks `0x0000`, `0x0001`, `0x0011`, `0x0111`, and `0x1111`, and one hardcoded all-valid-pairs fixture covering 4032 ordered source/destination pairs over chiplet routers `0..63` for each mask. The traffic schedule rotated sources so each source appeared once every 64 cycles, with source cutoff `4032` and drain timeout `20000`. All five simulator runs returned `0` but timed out. Measured injected packets were only 243-312 of the 4032 planned pairs, measured received packets were 83-153, and thousands of packets remained queued at sources at timeout. This is a validation blocker and possible load/deadlock diagnosis input, not a concrete DeFT source-root-cause diagnosis. At T0052 completion, T0051 remained blocked, T0053 was blocked, and T0054 was selected to diagnose the T0052 timeout behavior before any fix or comparison.

## T0053: Run Drain-Based IA-XY vs DeFT Comparison

- **Status:** DONE
- **Type:** experiment/validation
- **Objective:** Compare DeFT against a proper interposer-aware baseline using drain-mode artifacts after DeFT reachability behavior has been validated.
- **Why it exists:** Standard `XY` is not a fair unrestricted inter-chiplet baseline on `DEFT_2_5D`; comparison should use the separately implemented interposer-aware baseline or another explicitly validated 2.5D-aware algorithm.
- **Relevant roadmap phase:** Phase 10 reachability closure and final report refresh.
- **Scope:** Define a claim-safe comparison matrix using `DEFT` and `INTERPOSER_AWARE_XY`, drain-mode denominators, selected traffic/fault settings, and a new artifact directory; compare reachability, latency, and throughput only where denominators support the comparison.
- **Out of scope:** Changing standard `XY`, changing DeFT behavior, changing IA-XY behavior unless a separate fix task is opened, PARSEC/GEM5 traces, directional endpoint faults, final-report edits before analysis, and unsupported ranking or improvement claims.
- **Files changed:** Generated ignored artifacts under `external/noxim/other/generated/t0053_drain_iaxy_deft_comparison_v1/` and tracking docs.
- **Source code changes allowed:** No by default.
- **Simulation reruns allowed:** Yes, only the accepted comparison matrix.
- **Acceptance criteria:** Completed. Comparison artifacts are complete, denominator-safe, and clearly separate standard `XY` from the proper interposer-aware baseline. The artifact set records commands, copied config, generated schema-v1 DeFT LUT, deterministic traffic fixtures, stdout/stderr logs, JSON stats, manifest, summary, received-pair table, failing-case table, and denominator-safe comparison table. Any report-ready interpretation remains claim-limited.
- **Validation method or limitation:** Manifest/stat cross-checks, protected-artifact guards, `git diff --check`, and `external/noxim` status.
- **Dependencies:** Unblocked by T0056, which provides matrix-scoped post-fix DeFT drain-mode reachability evidence. T0053 must still create its own versioned comparison artifacts and keep claims denominator-safe.
- **Risk level:** Medium, because comparison claims can easily overstate limited artifacts.
- **Recommended prompt:** Completed by this validation.
- **Notes:** T0053 used `DEFT` and `INTERPOSER_AWARE_XY` only, seed `0`, opt-in drain mode, `-warmup 0`, the full accepted physical fault-mask ladder, the same 19 deterministic fixture definitions as T0056, and 190 simulator cases. All 95 `DEFT` cases passed with `drain_completed`. IA-XY passed 68 of 95 cases and timed out in 27 cases: all route-family and source-isolated rows passed, while some destination-stress and prefix rows timed out and all five all-pairs aggregate rows timed out. The denominator-safe comparison table classifies 68 matched rows as `complete_delivery_both_modes` and 27 rows as `descriptive_only_timeout_or_non100`. Assumption: T0053 validates only this documented drain-mode matrix. Blocked: ranking, improvement percentages, statistical conclusions, and final-report claim strengthening remain blocked until a later report task uses T0056/T0053 safely.

## T0054: Diagnose T0052 Drain Timeout Behavior

- **Status:** DONE
- **Type:** diagnosis/validation
- **Objective:** Determine whether the T0052 all-pairs drain timeouts are caused by aggregate offered load/source-queue backpressure, a drain fixture policy issue, a simulator accounting issue, or a concrete DeFT deadlock/root cause.
- **Why it exists:** T0052 produced a complete artifact set but did not validate reachability; all aggregate all-pairs cases timed out with many packets still queued at sources. A source fix should not begin until a smaller diagnostic isolates a specific root cause.
- **Relevant roadmap phase:** Phase 10 reachability closure and final report refresh.
- **Scope:** Inspect T0052 artifacts; define a smaller exact DeFT-only diagnostic matrix before execution; prefer pair-isolated, source-isolated, or bounded low-load hardcoded fixtures selected from T0052 timeout phases; write outputs to a new ignored `external/noxim/other/generated/t0054_*` directory; identify whether any failing source/destination/fault-mask case has a concrete route, VN, LUT, fault-mask, drain, or flow-control root cause.
- **Out of scope:** Source-code edits, IA-XY comparison, standard `XY` changes, `DEFT` behavior changes before a root cause is documented, PARSEC/GEM5 traces, directional endpoint faults, final-report changes, final-sweep regeneration, and `./regression.sh --update`.
- **Files changed:** Generated ignored artifacts under `external/noxim/other/generated/t0054_deft_drain_timeout_diagnosis_v1/` and tracking docs.
- **Source code changes allowed:** No. If a concrete source bug is isolated, stop and open T0051 instead of fixing it inside T0054.
- **Simulation reruns allowed:** Yes, only the documented T0054 diagnostic matrix.
- **Acceptance criteria:** Completed as a diagnosis task. T0054 classified the T0052 timeout behavior as destination-convergence fixture/load-triggered in-network drain blocking with source-queue backpressure as a downstream symptom in larger prefixes. It did not isolate a specific fixable DeFT routing, VN, LUT, or fault-mask source root cause. No 100% reachability or comparison claim is made.
- **Validation method or limitation:** Manifest/stat/log cross-checks, protected-artifact guards, `git diff --check`, and `external/noxim` status.
- **Dependencies:** T0052.
- **Risk level:** Medium, because diagnosing aggregate timeout behavior may reveal high-risk DeFT or flow-control interactions.
- **Recommended prompt:** Completed by this diagnosis.
- **Notes:** T0054 ran 50 `DEFT` drain-mode cases over the accepted physical fault-mask ladder. All 20 pair-isolated cases and all 10 source-isolated cases passed with `drain_completed`, exact injected/received counts, and zero remaining in-flight state. All 10 destination-stress cases and all 10 bounded-prefix cases timed out with nonzero router-buffer flits and router reservations; the bounded-prefix cases also retained source queues and pending handshakes. The T0052 hardcoded all-pairs fixture orders traffic by destination rounds, so it repeatedly creates many-to-one destination stress rather than a neutral pair-isolated reachability check.

## T0055: Diagnose DeFT Destination-Stress Flow-Control Blocker

- **Status:** DONE
- **Type:** diagnosis/validation
- **Objective:** Isolate why DeFT destination-convergence fixtures from T0054 leave router buffers, reservations, and sometimes source queues nonempty after the drain timeout.
- **Why it exists:** T0054 ruled out sampled pair-isolated, source-isolated, LUT-mask, and simple drain-accounting causes, but destination-stress fixtures still timed out after all or most packet heads were admitted. A source fix should not begin until the specific flow-control, reservation, VN, route-phase, or fixture-policy root cause is known.
- **Relevant roadmap phase:** Phase 10 reachability closure and final report refresh.
- **Scope:** Use T0054 artifacts as diagnosis input; inspect existing router reservation, VC/full-status, VN transition filtering, detailed logs/stats, and any existing non-source tracing surfaces; define a small exact DeFT-only follow-up matrix focused on destination-0 and destination-63 stress cases; preserve historical artifacts; classify whether the blocker is traffic-fixture policy, expected bounded-buffer stress, drain timeout policy, simulator accounting, or a concrete implementation bug.
- **Out of scope:** Source-code fixes, IA-XY comparison, standard `XY` changes, DeFT behavior changes before a root cause is documented, PARSEC/GEM5 traces, directional endpoint faults, final-report changes, final-sweep regeneration, and `./regression.sh --update`.
- **Files changed:** Generated ignored artifacts under `external/noxim/other/generated/t0055_deft_destination_stress_diagnosis_v1/` and tracking docs.
- **Source code changes allowed:** No. If a concrete source bug is isolated, stop and open T0051 instead of fixing it inside T0055.
- **Simulation reruns allowed:** Yes, only the documented T0055 diagnostic matrix.
- **Acceptance criteria:** Completed as a diagnosis task. T0055 classified the blocker as a dense destination-convergence DeFT/Noxim flow-control/reservation deadlock-style condition rather than a pair-route, LUT/fault-mask, simulator-accounting, or 20,000-cycle timeout-budget issue. No 100% reachability or comparison claim is made.
- **Validation method or limitation:** Manifest/stat/log cross-checks, protected-artifact guards, `git diff --check`, and `external/noxim` status.
- **Dependencies:** T0054.
- **Risk level:** Medium-high, because the failing state touches router buffers, reservations, VN behavior, and DeFT route phases.
- **Recommended prompt:** Completed by this diagnosis.
- **Notes:** T0055 ran 32 `DEFT` drain-mode cases over destination-0 and destination-63 strict convergence fixtures, using seed `0`, no-fault mask `0x0000`, and accepted 25% physical-fault mask `0x1111`. Six cases completed and 26 timed out. All n4 gap-1 cases passed, and the no-fault n63 gap-64 cases passed for both destinations. Dense no-fault n8 gap-1 cases already timed out with source queues and pending handshakes at zero, while router-buffer flits and router reservations remained nonzero. Extending dense n63 gap-1 cases from 20,000 to 100,000 drain cycles did not change the stuck counts. This supports opening T0051 for a targeted source fix while keeping T0053 and final-report claims blocked.

## T0056: Run Post-Fix DeFT Drain Reachability Validation Matrix

- **Status:** DONE
- **Type:** experiment/validation
- **Objective:** Validate DeFT drain-mode reachability behavior after the T0051 destination-stress flow-control fix with a broader versioned artifact set before any IA-XY comparison or report-claim update.
- **Why it exists:** T0051 shows the diagnosed destination-stress blocker is fixed in a targeted matrix, but it is not a universal reachability sweep and should not be used alone to reopen comparison or final-report claims.
- **Relevant roadmap phase:** Phase 10 reachability closure and final report refresh.
- **Scope:** Define an exact DeFT-only post-fix drain validation matrix, timeout policy, artifact directory, expected summary fields, and claim limits before execution; use T0051 as fix evidence and T0052/T0054/T0055 as diagnosis context; write outputs under a new ignored `external/noxim/other/generated/t0056_*` directory.
- **Out of scope:** IA-XY comparison, standard `XY` changes, additional source fixes unless a new concrete blocker is found and a separate task is opened, PARSEC/GEM5 traces, directional endpoint faults, final-report PDF/package regeneration, final-report claim strengthening, and `./regression.sh --update`.
- **Files changed:** Generated ignored artifacts under `external/noxim/other/generated/t0056_deft_post_fix_reachability_v1/` and tracking docs.
- **Source code changes allowed:** No by default.
- **Simulation reruns allowed:** Yes, only the accepted T0056 DeFT drain-mode matrix.
- **Acceptance criteria:** Completed. The artifact set records commands, copied config, generated schema-v1 LUT, hardcoded traffic fixtures, stdout/stderr logs, JSON stats, manifest, summary, received-pair table, and an empty failing-case table. All claims are limited to the validated matrix.
- **Validation method or limitation:** `git diff --check`, manifest/stat cross-checks, protected-artifact guards, and `external/noxim` status. Use the documented Noxim build command only if source changes are explicitly made.
- **Dependencies:** T0051.
- **Risk level:** Medium-high, because the selected matrix and timeout policy determine whether post-fix reachability evidence is claim-safe.
- **Recommended prompt:** Completed by this validation.
- **Notes:** T0056 used `DEFT` only, seed `0`, opt-in drain mode, `-warmup 0`, the full accepted physical fault-mask ladder (`0x0000`, `0x0001`, `0x0011`, `0x0111`, `0x1111`), 19 deterministic hardcoded fixtures, and 95 simulator cases. Fixture groups covered eight route-family pair-isolated probes, four source-isolated all-destination sweeps, four strict destination-convergence sweeps, two T0052 first-256 prefix probes, and one T0052-style 4032-pair all-valid-pairs aggregate rerun with a 100,000-cycle drain timeout. All 95 simulator invocations returned `0`, stopped with `drain_completed`, and passed with exact injected/received packet and flit counts and zero remaining in-flight state. T0056 supports only matrix-scoped DeFT drain reachability statements and unblocks T0053 for a new claim-safe comparison artifact task; it does not update final-report claims by itself.

## T0057: Refresh Updated Final Report PDF and Submission Package

- **Status:** DONE
- **Type:** report/packaging
- **Objective:** Regenerate the final PDF and zip package from the T0048-updated report source when explicitly requested.
- **Why it exists:** T0048 updated `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex` only; the existing `final_report/main.pdf` and `final_report.zip` still reflect the earlier source.
- **Relevant roadmap phase:** Phase 10 reachability closure and final report refresh.
- **Scope:** Build `final_report/main.tex` in the validated TeX-enabled environment, refresh `final_report/main.pdf`, refresh `final_report.zip` if requested, and verify that the package includes only intended final report files.
- **Out of scope:** Simulator/source changes, Noxim rebuilds, simulation reruns, generated experiment artifact changes, Extended Proposal changes, unsupported claim edits, and dependency installation unless the TeX toolchain is already available or explicitly approved by the user.
- **Files changed:** `final_report/main.pdf`, `final_report.zip`, refreshed LaTeX build byproducts under `final_report/` (`main.aux`, `main.bbl`, `main.blg`, `main.log`, and `main.out`), and tracking docs. The T0048-updated `final_report/main.tex` source was consumed but not edited during T0057.
- **Source code changes allowed:** No.
- **Simulation reruns allowed:** No.
- **Acceptance criteria:** Completed. The updated PDF reflects the T0048 LaTeX source, the zip package was refreshed with the intended final report files, report/package provenance was recorded, and no generated experiment or Extended Proposal artifact was changed.
- **Validation method or limitation:** `latexmk -pdf main.tex` was attempted from `final_report/` but was blocked because MiKTeX could not find the required Perl script engine. The documented fallback sequence `pdflatex main.tex`, `bibtex main`, `pdflatex main.tex`, `pdflatex main.tex` completed successfully. `git diff --check` completed with exit code `0`; zip contents were inspected; `external/noxim` remained clean; protected generated-artifact and Extended Proposal checks returned no changes.
- **Dependencies:** T0048.
- **Risk level:** Low-medium, because packaging can accidentally include stale or unrelated files.
- **Recommended prompt:** Completed by this packaging task.
- **Notes:** Completed on 2026-05-29. Parent status before work already contained the T0048 report-source/tracking-doc changes; `external/noxim` status was clean. The previous `final_report/main.pdf` was 5 pages and 344758 bytes from 2026-05-11, and the previous `final_report.zip` still contained the older 27449-byte `main.tex`. T0057 regenerated `final_report/main.pdf` as a 6-page, 373494-byte PDF from the T0048-updated source. `final_report.zip` was refreshed to contain exactly `final_report/main.pdf`, `final_report/main.tex`, `final_report/references.bib`, `final_report/IEEEtran.cls`, `final_report/README.md`, and `final_report/figures/schematic.png`. The refreshed PDF SHA-256 is `D3B0DDF2D74ABA648FEF9B4D763781968AD7825D9E06F5F4D0CDC6444F0AC0C9`, and the refreshed zip SHA-256 is `A3026F5C997D1AC65F5AED5638F1FFF18986D9B4879F3EEEEB99BB88B34F6DE4`. Assumption: T0038's six-file archive scope remains the intended submission package shape. Blocked: `latexmk` remains blocked until Perl is available to MiKTeX, but the documented fallback toolchain completed the PDF build. Blocked: stronger claims, ranking, improvement percentages, PARSEC/GEM5 claims, directional endpoint fault claims, and universal reachability remain outside T0057.

## T0058: Final Refreshed Submission Handoff Check

- **Status:** DONE
- **Type:** report/packaging
- **Objective:** Perform a final read-only handoff check after T0057 to confirm the refreshed PDF and zip are ready for submission.
- **Why it exists:** T0057 refreshed the generated deliverables. A final handoff check can summarize exact artifact paths, sizes, hashes, and remaining limitations without editing report claims or rerunning experiments.
- **Relevant roadmap phase:** Phase 10 reachability closure and final report refresh.
- **Scope:** Inspect `final_report/main.pdf`, `final_report.zip`, package contents, current Git status, and `external/noxim` status; summarize handoff artifacts and remaining blockers.
- **Out of scope:** Report wording changes, source changes, Noxim rebuilds, simulations, regenerated experiment artifacts, Extended Proposal changes, dependency installation, and unsupported claim edits.
- **Files changed:** `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, `docs/DECISIONS.md`
- **Source code changes allowed:** No.
- **Simulation reruns allowed:** No.
- **Acceptance criteria:** Completed. The refreshed submission artifacts were identified with paths, sizes, hashes, package contents, validation state, and remaining blockers.
- **Validation method or limitation:** Read-only status, PDF metadata, zip-content inspection, `git diff --check`, protected-artifact checks, and `external/noxim` status.
- **Dependencies:** T0057.
- **Risk level:** Low, because the task is read-only unless tracking docs are updated.
- **Recommended prompt:** Completed by this handoff check.
- **Notes:** Completed on 2026-05-29. The parent repository was clean before checks on `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with the branch ahead by two commits, and `external/noxim` was clean on `feat/baseline-noxim...origin/feat/baseline-noxim`. `final_report/main.pdf` is a 6-page, 373494-byte PDF with SHA-256 `D3B0DDF2D74ABA648FEF9B4D763781968AD7825D9E06F5F4D0CDC6444F0AC0C9`. `final_report.zip` is 670414 bytes with SHA-256 `A3026F5C997D1AC65F5AED5638F1FFF18986D9B4879F3EEEEB99BB88B34F6DE4` and contains exactly `final_report/main.pdf`, `final_report/main.tex`, `final_report/references.bib`, `final_report/IEEEtran.cls`, `final_report/README.md`, and `final_report/figures/schematic.png`. `git diff --check` completed with exit code `0`; `external/noxim` remained clean; protected generated-artifact, Extended Proposal, and final deliverable status checks returned no changed tracked files. Assumption: ignored generated report-support artifacts are guarded by tracked-status checks and by preserving their paths without writes. Blocked: `latexmk` remains blocked until Perl is available to MiKTeX, and stronger ranking, improvement percentages, universal reachability, PARSEC/GEM5 workload claims, directional endpoint fault claims, and statistical conclusions remain blocked.

## T0059: Align Final Report With Instructor Final-Report Instructions

- **Status:** DONE
- **Type:** report/packaging
- **Objective:** Incorporate the late instructor final-report instructions into the final report structure and refresh the submission package.
- **Why it exists:** The instructor instructions explicitly require continuing in the same IEEE double-column LaTeX document and adding a `Results and Evaluation` section with `Performance Results`, `Comparative Analysis`, `Discussion`, and `Reproducibility`, followed by `Conclusion and Future Work`.
- **Relevant roadmap phase:** Phase 10 reachability closure and final report refresh.
- **Scope:** Inspect `C:\Users\ysfth\Downloads\CMP720_Final_Report_Instructions.pdf`, align `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex` section structure with the instructions, rebuild `final_report/main.pdf` with the documented TeX fallback, refresh `final_report.zip`, inspect package contents, and record validation/provenance.
- **Out of scope:** Simulator/source changes, report-claim strengthening, new experiments, Noxim rebuilds, generated experiment artifact changes, Extended Proposal changes, dependency installation, PARSEC/GEM5 traces, and `./regression.sh --update`.
- **Files changed:** `docs/FINAL_REPORT_DRAFT.md`, `final_report/main.tex`, `final_report/main.pdf`, `final_report.zip`, refreshed LaTeX byproducts under `final_report/` (`main.aux`, `main.bbl`, `main.blg`, `main.log`, and `main.out`), and tracking docs.
- **Source code changes allowed:** No.
- **Simulation reruns allowed:** No.
- **Acceptance criteria:** Completed. The report follows the instructor-required final-report section structure, the PDF and zip package were refreshed, package contents were inspected, and no simulator behavior, generated experiment artifact, Extended Proposal artifact, or unsupported claim was changed.
- **Validation method or limitation:** PDF instruction inspection, LaTeX fallback build, final log scan, PDF text heading check, zip-content inspection, hashes/sizes, `git diff --check`, protected generated-artifact status checks, Extended Proposal status checks, and `external/noxim` status.
- **Dependencies:** T0058 handoff state plus the late instructor instruction PDF.
- **Risk level:** Low-medium, because report-structure edits can accidentally alter claim boundaries or package stale content.
- **Recommended prompt:** No next project task is required for final submission unless new instructor instructions appear.
- **Notes:** Completed on 2026-05-29. Assumption: `CMP720_Final_Report_Instructions.pdf` is a report-structure instruction source only; `Extended_Proposal.pdf` and the original DeFT paper remain the project and algorithmic sources of truth. The report was reorganized without changing the validated T0026/T0027/T0028 fixed-window limitations or the T0056/T0053 drain-mode claim limits. The refreshed PDF is 7 pages and 377584 bytes with SHA-256 `A04BC3FAA6A57116022D06320434AB5B107851FFCDA09F07E580892254BA7689`. The refreshed zip is 673499 bytes with SHA-256 `A7FA7F98D54394B8390EA379261BC686B6BD7262BCA5C7B970C93DE55C5BB5AE` and contains exactly `final_report/main.pdf`, `final_report/main.tex`, `final_report/references.bib`, `final_report/IEEEtran.cls`, `final_report/README.md`, and `final_report/figures/schematic.png`. Blocked: `latexmk` remains blocked until Perl is available to MiKTeX; stronger ranking, improvement percentages, universal reachability beyond documented matrices, PARSEC/GEM5 workload claims, directional endpoint fault claims, and statistical conclusions remain blocked.

## T0060: Exhaustive DeFT Reachability Claim Audit

- **Status:** DONE
- **Type:** experiment/validation
- **Objective:** Audit whether current DeFT evidence can support a stronger all-valid-ordered-pair accepted-fault-ladder drain reachability claim.
- **Why it exists:** T0056 was explicitly matrix-scoped and T0059 preserved that limit in the report. A stronger DeFT reachability statement requires a separate audit over all valid chiplet-router source/destination pairs and the accepted physical fault-mask ladder.
- **Relevant roadmap phase:** Phase 10 reachability closure and final report refresh.
- **Scope:** Check parent and registered `external/noxim` status, inspect T0056 artifacts, inspect T0053 only as comparison context, define a task-local audit plan, run `DEFT` only under opt-in drain mode, use accepted masks `0x0000`, `0x0001`, `0x0011`, `0x0111`, and `0x1111`, and write generated outputs only under ignored `external/noxim/other/generated/t0060_deft_reachability_audit_v1/`.
- **Out of scope:** Simulator source edits, DeFT/VN/VL/LUT behavior changes, standard `XY` or IA-XY changes, final-report source/PDF/package changes, Extended Proposal changes, PARSEC/GEM5 traces, directional endpoint fault modeling, stochastic workload claims, performance ranking, statistical conclusions, and `./regression.sh --update`.
- **Files changed:** Generated ignored artifacts under `external/noxim/other/generated/t0060_deft_reachability_audit_v1/` and tracking docs.
- **Source code changes allowed:** No.
- **Simulation reruns allowed:** Yes, only the accepted T0060 DeFT drain-mode audit matrix.
- **Acceptance criteria:** Completed. The artifact set records the runner, README, matrix, commands, copied config, generated schema-v1 LUT, deterministic traffic fixtures, logs, JSON stats, summary CSV, received-pair CSV, fixture coverage CSV, empty failing-case CSV, and manifest.
- **Validation method or limitation:** Manifest/stat/log cross-checks, fixed-window artifact interpretation review, `git diff --check`, `external/noxim` status, protected generated-artifact guards, final-report artifact hash checks, and Extended Proposal status checks.
- **Dependencies:** T0056 is the prior DeFT drain matrix evidence. T0053 is comparison context only. T0026/T0027/T0028 remain fixed-window report-support context only.
- **Risk level:** Medium-high, because claim wording can easily exceed the actual drain-mode artifact scope.
- **Recommended prompt:** Completed by this audit.
- **Notes:** T0060 used `DEFT` only, seed `0`, opt-in drain mode, `-warmup 0`, the full accepted physical fault-mask ladder, 130 deterministic hardcoded fixtures, and 650 simulator cases. Fixture groups covered one gap-128 near-isolated sequential all-pairs fixture, 64 source-isolated all-destination fixtures, 64 destination-stress fixtures, and one all-pairs aggregate fixture, each repeated for all five masks. All 650 simulator cases returned `0`, stopped with `drain_completed`, and passed with exact measured packet/flit delivery. The pair-coverage rows delivered all 4032 valid ordered source/destination pairs for every accepted mask, with zero missing or partial pairs. Assumption: the gap-128 sequential all-pairs fixture is sufficient as a task-local near-isolated delivery audit, but it is not per-pair independent timing evidence. T0060 supports a stronger DeFT drain-mode all-pair accepted-physical-fault-ladder delivery claim within deterministic hardcoded fixtures and the current physical VL fault model. It does not support fixed-window workload, universal timing, performance-ranking, statistical, PARSEC/GEM5, stochastic-traffic, or directional endpoint fault claims. No DeFT routing, VN transition, VL fault, LUT, Noxim source, final-report artifact, or Extended Proposal fix was needed.

## T0023: Add or Register Noxim Source Tree

- **Status:** DONE
- **Objective:** Make the Noxim source location explicit by adding the source tree to the repository or documenting the exact external local source path to use.
- **Relevant roadmap phase:** Phase 1
- **Files changed:** `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, `docs/DECISIONS.md`
- **Acceptance criteria:** Noxim source availability is explicit, the top-level Noxim structure is documented, and the next task can inspect real build documentation without guessing.
- **Validation command:** `git status --short`
- **Notes:** Completed on 2026-05-04 and corrected on 2026-05-04 after the user reported that an accidental root-level Noxim submodule addition had been fixed. The intended Noxim source location is the `external/noxim` submodule, with URL `https://github.com/YusufTahirOrhan/noxim`. This submodule is the modifiable Noxim fork for the project. Noxim source must not be vendored directly into the main repository. `.gitmodules` contains only the `external/noxim` submodule entry for Noxim, and `git ls-files --stage` records `external/noxim` as a submodule gitlink at commit `d02fde4f3a07be5d15743f9b1993a292636133fb`. Top-level directories include `bin`, `config_examples`, `doc`, `other`, and `src`. Top-level files include `.gitignore`, `build.sh`, `README.md`, `regression.sh`, and `visualNoxim`. The detected build system is Bash wrapper scripts plus GNU Make: `build.sh` runs `other/setup/fix-dependencies.sh` and then `make -C bin`, while `bin/Makefile` builds C++11/SystemC sources with `g++` into `bin/noxim`. Documented build/setup commands include `./build.sh`, `./other/setup/fix-dependencies.sh`, and the legacy manual `make` flow from the `bin` directory. Documented regression commands include `./regression.sh`, `./regression.sh --list`, `./regression.sh --case mesh_8x8_buf4`, and `./regression.sh --update`. No Noxim source files or DeFT behavior were modified during this documentation correction.

## T0024: Decide Windows 11 Development Environment and Persist Paper Reference

- **Status:** DONE
- **Objective:** Recommend the practical Windows 11 development environment for the Noxim build flow and place the original DeFT paper in a local ignored documentation reference path.
- **Relevant roadmap phase:** Phase 1
- **Files changed:** `.gitignore`, `AGENTS.md`, `docs/references/README.md`, `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/ROADMAP.md`, `docs/TASKS.md`, `docs/VALIDATION.md`
- **Acceptance criteria:** The original paper is available locally under `docs/references`, the PDF path is ignored by Git, the Windows/WSL recommendation is documented, and no Noxim source files are modified.
- **Validation command:** `git status --short`
- **Notes:** Completed on 2026-05-05. The original DeFT paper was copied from `C:/Users/ysfth/OneDrive/Desktop/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` to `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`. `.gitignore` ignores that exact local PDF path. Environment inspection found `wsl.exe`, but WSL is not installed. `bash`, `make`, and `g++` are not available in the Windows PATH. Recommendation: use Windows 11 for editing and WSL Ubuntu for T0003 build validation and later Noxim simulation work. No Noxim source files or DeFT behavior were modified.
