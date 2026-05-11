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

- **Status:** TODO
- **Objective:** After the final report artifact is revised and PDF generation is handled or explicitly blocked, decide whether any high-risk experimental extension should be designed as future work.
- **Why it exists:** T0034 deferred Options B, C, and D because they require source behavior changes, substantial validation, or external dependencies that are not appropriate before final report closure.
- **Relevant roadmap phase:** Phase 9
- **Scope:** Revisit the deferred experimental directions after final report closure: interposer-aware XY-like baseline, source-cutoff plus post-injection drain, route-compatible intra-chiplet comparison policy, and PARSEC/GEM5 trace support. Produce a design-only recommendation and, if appropriate, split one selected direction into a future implementation task.
- **Out of scope:** Source-code edits, simulation reruns, final-sweep reruns, report claim changes, generated artifact overwrites, Noxim rebuilds, external dependency installation, and `./regression.sh --update`.
- **Files likely to change:** `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md` if a durable future-work decision is made.
- **Source code changes allowed:** No.
- **Simulation reruns allowed:** No.
- **Acceptance criteria:** The task either selects one future experimental extension for a later source-change design/implementation task or explicitly records that no further experimental work should be attempted; risks, validation requirements, and dependencies are documented before any code or simulation work.
- **Validation method or limitation:** Documentation/status validation only with `git diff --check` and repository status checks. Any future source or simulation validation must be assigned to a later explicit task.
- **Recommended prompt:** `Start task T0036: Post-Final Experimental Extension Design Gate. Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, docs/DECISIONS.md, docs/PROMPTS.md, docs/FINAL_REPORT_DRAFT.md, and final_report/main.tex. Continue on the existing branch. Do not modify source code, rerun simulations, rebuild Noxim, regenerate final-sweep artifacts, install external dependencies, or use ./regression.sh --update. Revisit the deferred T0034 options only after the final report revision and PDF status are settled. Produce a design-only recommendation for whether to pursue an interposer-aware XY-like baseline, a source-cutoff plus post-injection drain policy, an intra-chiplet route-compatible comparison, PARSEC/GEM5 trace support, or no further experimental work. Update the tracking docs, run git diff --check, and report the selected future direction, validation implications, next task prompt, branch guidance, commit message, and blockers.`

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
