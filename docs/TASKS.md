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

- **Status:** TODO
- **Objective:** Add centralized startup-time permanent Vertical Link fault injection.
- **Relevant roadmap phase:** Phase 4
- **Files likely to change:** To be confirmed after Noxim source inspection
- **Acceptance criteria:** Fault masks are seed-controlled and do not fully disconnect any chiplet.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Fault-rate ambiguity must be resolved or explicitly parameterized.

## T0011: Add Fault Mask Validation

- **Status:** TODO
- **Objective:** Validate generated fault masks for rates up to 25%.
- **Relevant roadmap phase:** Phase 4
- **Files likely to change:** To be confirmed after Noxim source inspection
- **Acceptance criteria:** Invalid masks are rejected or regenerated.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** This task should be completed before DeFT routing uses fault state.

## T0012: Design VN State Representation

- **Status:** TODO
- **Objective:** Document how VN.0 and VN.1 state will be represented in packet or flit metadata.
- **Relevant roadmap phase:** Phase 5
- **Files likely to change:** `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`
- **Acceptance criteria:** VN state design and transition assumptions are recorded.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Documentation task before implementation. VN behavior must be checked against the original DeFT paper.

## T0013: Implement VN Assignment Rules

- **Status:** TODO
- **Objective:** Implement DeFT VN assignment behavior for source routers and boundary routers.
- **Relevant roadmap phase:** Phase 5
- **Files likely to change:** To be confirmed after Noxim source inspection
- **Acceptance criteria:** Inter-chiplet traffic follows the proposal's VN assignment rules.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Must preserve exactly two VCs.

## T0014: Enforce VN Transition Restrictions

- **Status:** TODO
- **Objective:** Enforce VN.1-to-VN.0 ban, Up-to-Horizontal ban in VN.0, and Horizontal-to-Down ban in VN.1.
- **Relevant roadmap phase:** Phase 5
- **Files likely to change:** To be confirmed after Noxim source inspection
- **Acceptance criteria:** Forbidden transitions are rejected or avoided by route selection.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** High-risk deadlock-freedom task.

## T0015: Design Offline VL LUT Format

- **Status:** TODO
- **Objective:** Define the lookup table keys, values, and storage format before implementing generation.
- **Relevant roadmap phase:** Phase 6
- **Files likely to change:** `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`
- **Acceptance criteria:** LUT schema is documented and traceable to fault masks and destination chiplets.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Do not implement the generator in this task. LUT design must be checked against the original DeFT paper.

## T0016: Implement Offline VL LUT Generator

- **Status:** TODO
- **Objective:** Generate fault-aware Vertical Link selection tables using distance and load imbalance cost.
- **Relevant roadmap phase:** Phase 6
- **Files likely to change:** To be confirmed after repository inspection
- **Acceptance criteria:** Generated LUT excludes faulty Vertical Links and is deterministic.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Cost function should use the proposal's formulation with documented assumptions.

## T0017: Load and Use VL LUT at Boundary Routers

- **Status:** TODO
- **Objective:** Integrate LUT selection into inter-chiplet routing at boundary routers.
- **Relevant roadmap phase:** Phase 6
- **Files likely to change:** To be confirmed after Noxim source inspection
- **Acceptance criteria:** Boundary routers select functional Vertical Links using the current fault vector.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Should run after generator validation.

## T0018: Configure XY Baseline Modes

- **Status:** TODO
- **Objective:** Configure fault-free and fault-injected XY routing baselines for comparison.
- **Relevant roadmap phase:** Phase 7
- **Files likely to change:** To be confirmed after Noxim source inspection
- **Acceptance criteria:** XY and DeFT runs can be selected and compared under the same traffic settings.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Use existing Noxim XY behavior where available.

## T0019: Add Synthetic Traffic Configurations

- **Status:** TODO
- **Objective:** Support uniform, localized, and hotspot synthetic traffic models.
- **Relevant roadmap phase:** Phase 8
- **Files likely to change:** To be confirmed after Noxim source inspection
- **Acceptance criteria:** Traffic models match proposal definitions.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Localized traffic keeps 40% traffic intra-chiplet; hotspot uses 3 hotspot nodes with 10% injection rate.

## T0020: Add Metrics Collection

- **Status:** TODO
- **Objective:** Collect reachability, average latency, and network throughput.
- **Relevant roadmap phase:** Phase 8
- **Files likely to change:** To be confirmed after Noxim source inspection
- **Acceptance criteria:** Metrics are emitted in a machine-readable format.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Metrics must be comparable across XY and DeFT runs.

## T0021: Add Experiment Runner

- **Status:** TODO
- **Objective:** Automate sweeps across routing mode, traffic model, fault rate, and seed.
- **Relevant roadmap phase:** Phase 8
- **Files likely to change:** To be confirmed after repository inspection
- **Acceptance criteria:** A small dry-run experiment completes and records commands and outputs.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Do not invent commands; base this on confirmed simulator invocation.

## T0022: Prepare Final Analysis Artifacts

- **Status:** TODO
- **Objective:** Produce final result summaries and report-support material from validated experiment outputs.
- **Relevant roadmap phase:** Phase 9
- **Files likely to change:** To be confirmed after experiment output structure exists
- **Acceptance criteria:** Results are traceable to configurations, commands, and validation status.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Keep limitations and assumptions explicit.

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
