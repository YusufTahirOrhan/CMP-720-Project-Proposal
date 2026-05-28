# Validation Strategy

This document records validation strategy and known commands. Do not invent commands. Future tasks must update this file as real commands become known.

## Repository Inspection

Purpose:

- Confirm repository contents.
- Confirm whether Noxim source code is present.
- Confirm whether required source documents are present or accessible.
- Confirm whether build, test, or simulation files exist.
- Confirm no unrelated files are modified.

Known validation:

- `git status --short`

Additional repository listing commands may be used for inspection, but they should not be treated as project build or test commands.

T0002 result on 2026-05-04:

- `rg --files` could not be used because `rg.exe` returned access denied.
- PowerShell file inspection was used as the fallback.
- No Noxim source tree, Noxim-named path, C/C++/SystemC source file, script source file, or recognized build-system file was found in the repository.
- `git status --short` returned no output before T0002 documentation updates.
- After T0002 documentation updates, `git status --short` shows only modified documentation files: `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.

T0023 result on 2026-05-04:

- `git status --short` returned no output before T0023 documentation updates.
- `rg --files` could not be used because `rg.exe` returned access denied.
- PowerShell top-level and recursive directory/file inspection was used as the fallback.
- Repository inspection found no Noxim source tree, Noxim-named path, C/C++/SystemC source file, script source file, or recognized build-system file.
- No top-level Noxim structure or Noxim build documentation could be inspected because no Noxim source tree or explicit external Noxim source path is available.
- T0023 is blocked pending the intended Noxim source location or import method.
- No source code files were changed.

Latest T0023 continuation result on 2026-05-04:

- `git status --short` returned no output before the latest T0023 continuation documentation updates.
- The current continuation prompt again left the intended Noxim source location or import method as the literal placeholder `<insert the local source path, repository import method, archive path, or other explicit source registration instruction here>`.
- `rg --files` could not be used because `rg.exe` returned access denied.
- PowerShell top-level and recursive directory/file inspection was used as the fallback.
- Repository inspection found no Noxim source tree, Noxim-named path, C/C++/SystemC source file, script source file, or recognized build-system file.
- A repeat recognized build-file inspection found no `Makefile`, `CMakeLists.txt`, `SConstruct`, `meson.build`, `package.json`, `configure`, Visual Studio project file, `.mk`, or `.pro` file.
- No top-level Noxim structure or Noxim build documentation could be inspected because no Noxim source tree or explicit external Noxim source path is available.
- Blocked: T0023 remains blocked pending a real Noxim source location or import method.
- After the latest T0023 continuation documentation updates, `git status --short` showed only modified documentation files: `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- No source code files were changed.

T0023 source registration result on 2026-05-04:

- Corrected source registration: `external/noxim` is the intended Noxim submodule location.
- Corrected submodule URL: `https://github.com/YusufTahirOrhan/noxim`.
- The user reported that an accidental root-level Noxim submodule addition was corrected.
- `.gitmodules` contains a single Noxim submodule entry with `path = external/noxim` and `url = https://github.com/YusufTahirOrhan/noxim`.
- `git ls-files --stage .gitmodules external/noxim` shows `.gitmodules` tracked as a normal file and `external/noxim` tracked as a submodule gitlink (`160000`) at commit `d02fde4f3a07be5d15743f9b1993a292636133fb`.
- `external/noxim/.git` is a gitfile pointing to `../../.git/modules/external/noxim`, confirming the submodule layout rather than direct vendoring in the main repository.
- `git submodule status -- external/noxim` could not run in this Windows sandbox because Git's submodule helper could not find Unix shell utilities (`basename`, `sed`, and `git-sh-setup`).
- `external/noxim` exists and contains a valid Noxim source tree.
- Top-level Noxim directories found: `bin`, `config_examples`, `doc`, `other`, and `src`.
- Top-level Noxim files found: `.gitignore`, `build.sh`, `README.md`, `regression.sh`, and `visualNoxim`.
- Main source folder: `external/noxim/src`.
- Main build folder and files: `external/noxim/bin`, including `Makefile`, `Makefile.deps`, and `power.yaml`.
- Main configuration files: YAML examples under `external/noxim/config_examples`, including `default_config.yaml`, `default_configMesh.yaml`, and other shipped examples.
- Main documentation files found under `external/noxim/doc`: `INSTALL.txt`, `MANUAL.txt`, `Noxim_User_Guide.md`, `Noxim_User_Guide.pdf`, `noxim_tutorial.pdf`, `AUTHORS.txt`, and `LICENSE.txt`.
- Detected build system: Bash wrapper scripts plus GNU Make. `build.sh` runs `other/setup/fix-dependencies.sh` and then `make -C bin`; `bin/Makefile` compiles C++11/SystemC sources with `g++` into `bin/noxim`.
- Explicitly documented build/setup commands include `./build.sh`, `./other/setup/fix-dependencies.sh`, and the legacy manual `make` flow from the `bin` directory.
- Explicitly documented regression/validation commands include `./regression.sh`, `./regression.sh --list`, `./regression.sh --case mesh_8x8_buf4`, and `./regression.sh --update`.
- Decision recorded: `external/noxim` is the modifiable Noxim fork for this project when a future task explicitly requires Noxim source changes.
- Decision recorded: Noxim source must remain a submodule and must not be vendored directly into the main repository.
- T0023 is complete because Noxim source availability is now explicit and the top-level structure/build documentation are documented.
- No Noxim source files were modified.
- No DeFT behavior, routing logic, topology logic, VN logic, fault injection logic, or simulation behavior was modified.
- `git status --short` before the T0023 submodule documentation correction returned no output.
- After the T0023 submodule documentation correction, `git status --short` showed only modified tracking docs: `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.

## Noxim Source Inspection

Purpose:

- Identify existing Noxim extension points before implementation.
- Keep future DeFT topology, routing, selection, traffic, statistics, and tracing work grounded in actual source files.
- Confirm that documentation-only inspection does not modify Noxim source files or golden regression outputs.

Known validation:

- Parent repository status: `git status --short`
- Noxim submodule status: `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short`

T0005 result on 2026-05-05:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, and `docs/DECISIONS.md`.
- Before source inspection, `git status --short` in the parent repository returned no output.
- Before source inspection, `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short` returned no output.
- Because `external/noxim` was clean, the earlier LF-normalization changes appear to have been reverted or absorbed into the current submodule state; they were not reapplied.
- Source inspection used read-only file listing and search commands, primarily `rg`, against `external/noxim/src`, `external/noxim/regression.sh`, `external/noxim/visualNoxim`, `external/noxim/other/regression`, and selected helper files under `external/noxim/other`.
- Mapped extension-point owners include `ConfigurationManager.*`, `GlobalParams.*`, `Main.cpp`, `NoC.*`, `Tile.h`, `Router.*`, `DataStructs.h`, `routingAlgorithms/*`, `selectionStrategies/*`, `ProcessingElement.*`, `GlobalTrafficTable.*`, `GlobalTrafficHardcoding.*`, `Stats.*`, `GlobalStats.*`, `Power.*`, `Logger.*`, `Utils.h`, `regression.sh`, `visualNoxim`, and `other/noxim_trace_viewer.py`.
- No build, simulation, or regression command was run because T0005 made no code change and introduced no new validated command.
- No Noxim source files, DeFT behavior, routing logic, topology logic, VN logic, fault injection logic, simulator behavior, or golden regression outputs were modified.
- Final parent-project status after documentation updates showed only the requested tracking docs modified: `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- Final `external/noxim` status remained clean.

## Topology Mapping Design

Purpose:

- Validate documentation-only topology mapping work against the source documents and the relevant Noxim ID/coordinate code.
- Confirm that no Noxim source files, simulator behavior, or golden regression outputs are changed during pre-implementation design tasks.

Known validation:

- Parent repository status: `git status --short`
- Noxim submodule status: `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short`

T0006 result on 2026-05-05:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, and `docs/DECISIONS.md`.
- Before source inspection, `git status --short` in the parent repository returned no output.
- Before source inspection, `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short` returned no output.
- Required source documents were confirmed present: `Extended_Proposal.pdf`, `Proposal.pdf`, and `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
- `pdftotext` was not available in the current environment. The bundled Python runtime with `pypdf` was used to inspect short source-document snippets. No extracted text files were created.
- Noxim source inspection was limited to ID, coordinate, topology-construction, routing, traffic, and stats surfaces needed to ground the design: `DataStructs.h`, `Utils.h`, `NoC.*`, `Tile.h`, `Router.*`, `GlobalParams.*`, `ProcessingElement.*`, `GlobalStats.*`, and `routingAlgorithms/Routing_XY.cpp`.
- T0006 documented a deterministic 2.5D mapping: chiplet router IDs `0..63`, interposer router IDs `64..127`, a 2x2 chiplet grid, 4x4 chiplet-local meshes, an 8x8 active-interposer footprint, four boundary-router slots per chiplet, and physical bidirectional VL IDs `0..15`.
- No build, simulation, or regression command was run because T0006 made no code change and introduced no new validated command.
- No Noxim source files, DeFT behavior, routing logic, topology logic, VN logic, fault injection logic, simulator behavior, or golden regression outputs were modified.
- Final parent-project status after documentation updates showed only the requested tracking docs modified: `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- Final `external/noxim` status remained clean.

## 2.5D Topology Construction

Purpose:

- Validate that Noxim can instantiate the T0006 2.5D topology shape.
- Confirm the constructed router counts, cardinal-link counts, and deterministic VL endpoint table.
- Confirm construction without invoking DeFT routing behavior, VN behavior, VL fault injection behavior, VL LUT generation, experiment automation, or golden regression updates.

Known validation:

- Build from the Noxim repository root in WSL Ubuntu: `./build.sh`
- Construction smoke from `external/noxim/bin` in WSL Ubuntu:

```bash
LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 20 -warmup 0
```

T0007 result on 2026-05-06:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, and `docs/DECISIONS.md`.
- Before implementation, `git status --short` in the parent repository returned no output.
- Before implementation, `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short` returned no output.
- Required source documents were confirmed present: `Extended_Proposal.pdf`, `Proposal.pdf`, and `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
- Short PDF text checks confirmed source occurrences for chiplets, an active interposer, Vertical Links, boundary terminology, and 4x4 topology references.
- Implementation added selectable topology `DEFT_2_5D`, a layer-aware `DeftTopology` helper, `NoC::buildDeft2D()`, and a construction-only config/traffic pair.
- The first final construction smoke attempt from the sandbox failed with WSL `E_ACCESSDENIED`; the same command was rerun with approved WSL escalation and completed successfully.
- Final `./build.sh` from `external/noxim` completed with exit code `0`.
- Final construction smoke completed with exit code `0` and printed `DEFT_2_5D topology constructed: chiplet_routers=64, interposer_routers=64, total_routers=128, chiplet_cardinal_links=96, interposer_cardinal_links=112, vertical_links=16`.
- The printed VL endpoint table matched the T0006 canonical endpoint table, including `vl_id=0` endpoint `1 -> 65` and `vl_id=15` endpoint `52 -> 116`.
- The construction smoke used `TRAFFIC_HARDCODED` with `external/noxim/config_examples/deft_2_5d_no_traffic.txt`, so it reported zero received packets and zero received flits. The `-nan` average-delay and wireless-utilization values are expected for a no-packet smoke run and are not experiment metrics.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- No DeFT routing behavior, VN behavior, VL fault injection behavior, VL LUT generation, experiment automation, golden regression output update, or DeFT experiment was run.

## Vertical Link Data Model

Purpose:

- Validate that the centralized VL model preserves the deterministic T0007 physical endpoint table.
- Confirm that the structural validation API accepts the 16-VL inventory with exactly four VLs per chiplet.
- Confirm that adding mutable default functional state does not change route selection, traffic generation, or simulation behavior.

Known validation:

- Build from the Noxim repository root in WSL Ubuntu: `./build.sh`
- Construction smoke from `external/noxim/bin` in WSL Ubuntu:

```bash
LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 20 -warmup 0
```

T0008 result on 2026-05-06:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, and `docs/DECISIONS.md`.
- Before implementation, `git status --short` in the parent repository showed unrelated untracked `.vs/`; this task did not modify it.
- Before implementation, `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short` returned no output.
- Required source documents were confirmed present and short PDF text checks found relevant references to chiplets, active interposers, Vertical Links, boundary routers, and bidirectional VLs.
- T0008 extended `DeftTopology` with centralized mutable VL functional state, reset/set/query helpers, functional-link queries by chiplet, bidirectional endpoint lookup, chiplet endpoint lookup, and structural model validation.
- `NoC::buildDeft2D()` now validates the VL model before wiring physical VLs and prints `functional=true` for all default VLs in the construction smoke output.
- `./build.sh` from `external/noxim` completed with exit code `0` in WSL Ubuntu. It rebuilt `DeftTopology.cpp` and `NoC.cpp`; only pre-existing Noxim warnings were emitted.
- The first construction smoke attempt from the sandbox failed with WSL access denied; this is a sandbox permission failure and not a simulator failure. The same documented command was rerun with approved WSL escalation and completed with exit code `0`.
- Final construction smoke output reported `chiplet_routers=64`, `interposer_routers=64`, `total_routers=128`, `chiplet_cardinal_links=96`, `interposer_cardinal_links=112`, and `vertical_links=16`.
- The smoke output printed all 16 expected VL endpoint records, from `vl_id=0` endpoint `1 -> 65` through `vl_id=15` endpoint `52 -> 116`, each with `functional=true`.
- The construction smoke intentionally used no traffic, so it reported zero received packets and zero received flits. The `-nan` average-delay and wireless-utilization values are expected for a no-packet construction smoke and are not experiment results.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- No startup-time fault injection behavior, fault-mask generation, fault-rate configuration, DeFT routing behavior, VN behavior, VL LUT generation, experiment automation, metrics change, golden regression output update, or DeFT experiment was run.

## Boundary Router Identification

Purpose:

- Validate that the boundary-router inventory is derived from the centralized VL model rather than from a second endpoint table.
- Confirm that the structural validation API accepts the deterministic 16-entry boundary-router inventory with exactly four boundary routers per chiplet.
- Confirm that adding the boundary-router query surface does not change route selection, traffic generation, fault behavior, VN behavior, or simulation behavior beyond construction-time inspectability output.

Known validation:

- Build from the Noxim repository root in WSL Ubuntu: `./build.sh`
- Construction smoke from `external/noxim/bin` in WSL Ubuntu:

```bash
LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 20 -warmup 0
```

T0009 result on 2026-05-06:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, and `docs/DECISIONS.md`.
- Before implementation, `git status --short --branch` in the parent repository showed the current branch as `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` and a modified `external/noxim` gitlink because the user changed the submodule branch.
- Before implementation, `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch` showed the submodule branch as `feat/baseline-noxim...origin/feat/baseline-noxim` with no local file modifications.
- T0009 added `BoundaryRouterInfo` as a derived boundary-router view over the centralized Vertical Link model, plus inventory, per-chiplet lookup, router-ID lookup, VL-ID lookup, and structural validation helpers.
- `NoC::buildDeft2D()` now validates the boundary-router model and prints all 16 boundary-router records during construction smoke runs.
- The first `./build.sh` attempt from `external/noxim` timed out after 124 seconds without reporting a compiler or linker error. The same documented command was rerun with a longer timeout and completed with exit code `0`.
- The successful build emitted only pre-existing Noxim warnings.
- The construction smoke command completed with exit code `0`.
- Final construction smoke output reported `chiplet_routers=64`, `interposer_routers=64`, `total_routers=128`, `chiplet_cardinal_links=96`, `interposer_cardinal_links=112`, `vertical_links=16`, and `boundary_routers=16`.
- The smoke output printed all 16 expected boundary-router records, from router `1` on chiplet `0` local `(1,0)` slot `NORTH` attached to `vl_id=0` and interposer endpoint `65`, through router `52` on chiplet `3` local `(0,2)` slot `WEST` attached to `vl_id=15` and interposer endpoint `116`.
- The smoke output still printed all 16 expected VL endpoint records, each with `functional=true`.
- The construction smoke intentionally used no traffic, so it reported zero received packets and zero received flits. The `-nan` average-delay and wireless-utilization values are expected for a no-packet construction smoke and are not experiment results.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- No startup-time fault injection behavior, fault-mask generation, fault-rate configuration, DeFT routing behavior, route selection, VN behavior, VL LUT generation, experiment automation, metrics change, golden regression output update, or DeFT experiment was run.

## Fault Injection Manager

Purpose:

- Validate that startup-time permanent VL fault state is applied through the centralized `DeftTopology` physical VL model.
- Confirm default construction still starts with no faulty VLs.
- Confirm seed-controlled random physical VL fault selection is reproducible for a given seed and keeps at least one functional VL per chiplet.
- Confirm fault-state setup does not implement route selection, VN behavior, VL LUT lookup, traffic changes, metrics changes, or golden output updates.

Known validation:

- Build from the Noxim repository root in WSL Ubuntu: `./build.sh`
- Default construction smoke from `external/noxim/bin` in WSL Ubuntu:

```bash
LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 20 -warmup 0
```

- Faulted construction smoke from `external/noxim/bin` in WSL Ubuntu:

```bash
LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 20 -warmup 0 -deft_vl_fault_count 4
```

T0010 result on 2026-05-07:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md`.
- Before implementation, `git status --short --branch` in the parent repository showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points`.
- Before implementation, `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch` showed branch `feat/baseline-noxim...origin/feat/baseline-noxim` with no local file modifications.
- Required source documents were confirmed present: `Extended_Proposal.pdf`, `Proposal.pdf`, and `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
- Short source-document checks found the centralized permanent VL fault requirement, the no-chiplet-disconnected constraint, and 25% fault-rate target context.
- T0010 added `DeftFaultInjectionManager` for startup-time permanent physical VL fault-state setup.
- The manager supports `deft_faulty_vertical_links` for explicit physical VL IDs and `deft_vl_fault_count` for seed-controlled random physical VL selection.
- The manager reuses `DeftTopology::resetVerticalLinkStates()`, `setVerticalLinkFunctional()`, `functionalVerticalLinksForChiplet()`, and `hasFunctionalVerticalLinkForChiplet()` instead of introducing a parallel VL inventory.
- The minimum guard rejects duplicate/out-of-range explicit fault IDs, incompatible explicit/random modes, and masks that would fully disconnect a chiplet.
- Assumption: T0010 counts configured faults over the 16 physical bidirectional VLs. Percentage conversion and directional VL accounting remain future work.
- Assumption: Fault state is startup metadata in T0010. All physical VL links are still constructed; route selection does not yet avoid faulty VLs.
- `./build.sh` from `external/noxim` completed with exit code `0` in WSL Ubuntu and emitted only pre-existing Noxim warnings.
- The default construction smoke completed with exit code `0` and reported `mode=none`, `requested_fault_count=0`, `faulty_vertical_links=[]`, and per-chiplet functional VL counts `4,4,4,4`.
- The faulted construction smoke initially failed once with WSL sandbox `E_ACCESSDENIED`; the same command was rerun with approval and completed with exit code `0`.
- The faulted construction smoke reported `mode=random`, `seed=0`, `requested_fault_count=4`, `faulty_vertical_links=[0,1,5,13]`, and per-chiplet functional VL counts `2,3,4,3`.
- The faulted construction smoke printed `functional=false` for VLs `0`, `1`, `5`, and `13`, and `functional=true` for the remaining VLs.
- Both construction smoke runs intentionally used no traffic, so each reported zero received packets and zero received flits. The `-nan` average-delay and wireless-utilization values are expected for no-packet construction smokes and are not experiment results.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- No DeFT routing behavior, route selection, VN behavior, VN transition restriction, VL LUT generation, experiment automation, metrics change, golden regression output update, or DeFT experiment was run.

## Fault Mask Validation

Purpose:

- Validate explicit and generated DeFT VL fault masks against the current 16 physical bidirectional VL model.
- Confirm that masks corresponding to the current physical 25% target are accepted and inspectable.
- Confirm that invalid masks are rejected before fault state can be consumed by future routing or LUT tasks.
- Confirm that validation does not implement route selection, VN behavior, VL LUT lookup, traffic changes, metrics changes, or golden output updates.

Known validation:

- Build from the Noxim repository root in WSL Ubuntu: `./build.sh`
- Default construction smoke from `external/noxim/bin` in WSL Ubuntu:

```bash
LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 20 -warmup 0
```

- Generated current-physical-25% construction smoke from `external/noxim/bin` in WSL Ubuntu:

```bash
LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 20 -warmup 0 -deft_vl_fault_count 4
```

- Explicit current-physical-25% construction smoke from `external/noxim/bin` in WSL Ubuntu:

```bash
LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 20 -warmup 0 -deft_faulty_vls 0,4,8,12
```

- Expected invalid-mask rejection smoke from `external/noxim/bin` in WSL Ubuntu:

```bash
LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 20 -warmup 0 -deft_faulty_vls 0,1,2,3
```

T0011 result on 2026-05-07:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md`.
- Before implementation, `git status --short --branch` in the parent repository showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points`.
- Before implementation, `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch` showed branch `feat/baseline-noxim...origin/feat/baseline-noxim` with no local file modifications.
- Required source documents were confirmed present: `Extended_Proposal.pdf`, `Proposal.pdf`, and `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
- Short source-document checks found the proposal target of fault rates up to 25%, centralized permanent VL fault injection before routing, no-chiplet-disconnected constraint, and the original paper's fault-scenario context with 25% fault-injection examples.
- T0011 added `DeftFaultInjection::validateFaultMask()` and `FaultMaskValidationReport`.
- The validator normalizes masks, rejects duplicate/out-of-range/nonexistent physical VL IDs, rejects impossible connected-chiplet mask sizes, and rejects masks that leave any chiplet with zero functional physical VLs.
- Explicit and generated masks are validated through the same helper before `DeftTopology` functional state is mutated.
- Construction output now reports `physical_faults`, `current_physical_25_percent_target`, per-chiplet faulty VL counts, and per-chiplet functional VL counts.
- Assumption: T0011 validates against the current 16 physical bidirectional VL IDs. Four faulty physical VLs out of 16 are treated as the current physical 25% validation target.
- Assumption: T0011 does not add percentage-based configuration or directional VL accounting; those remain future work.
- `./build.sh` from `external/noxim` completed with exit code `0` in WSL Ubuntu and emitted only pre-existing Noxim warnings.
- The first default construction smoke attempt failed once with WSL sandbox `E_ACCESSDENIED`; the same command was rerun with approval and completed with exit code `0`.
- Default smoke output reported `mode=none`, `faulty_vertical_links=[]`, `physical_faults=0/16`, `current_physical_25_percent_target=false`, per-chiplet fault counts `0,0,0,0`, and per-chiplet functional counts `4,4,4,4`.
- The generated four-fault construction smoke initially failed once with WSL sandbox `E_ACCESSDENIED`; the same command was rerun with approval and completed with exit code `0`.
- Generated four-fault smoke output reported `mode=random`, `seed=0`, `faulty_vertical_links=[0,1,5,13]`, `physical_faults=4/16`, `current_physical_25_percent_target=true`, per-chiplet fault counts `2,1,0,1`, and per-chiplet functional counts `2,3,4,3`.
- The explicit four-fault construction smoke initially failed once with WSL sandbox `E_ACCESSDENIED`; the same command was rerun with approval and completed with exit code `0`.
- Explicit four-fault smoke output reported `mode=explicit`, `faulty_vertical_links=[0,4,8,12]`, `physical_faults=4/16`, `current_physical_25_percent_target=true`, per-chiplet fault counts `1,1,1,1`, and per-chiplet functional counts `3,3,3,3`.
- The expected invalid-mask rejection smoke initially failed once with WSL sandbox `E_ACCESSDENIED`; the same command was rerun with approval and exited with expected code `1`.
- Invalid-mask rejection output reported `Invalid DEFT_2_5D vertical link fault configuration: fault mask disconnects chiplet 0: 4 of 4 physical VLs are faulty`.
- All construction smoke runs intentionally used no traffic. Successful smokes reported zero received packets and zero received flits, and their `-nan` average-delay and wireless-utilization values remain expected for no-packet construction smokes.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- No DeFT routing behavior, route selection, VN behavior, VN transition restriction, VL LUT generation, experiment automation, metrics change, golden regression output update, or DeFT experiment was run.

## VN State Representation Design

Purpose:

- Validate documentation-only VN state design against the source documents and the current Noxim VC data path.
- Confirm that the design does not change simulator behavior, route selection, traffic generation, fault behavior, metrics, or golden regression outputs.
- Confirm that source-code validation is not required when no source code is changed.

Known validation:

- Parent repository status: `git status --short --branch`
- Noxim submodule status: `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch`

T0012 result on 2026-05-07:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md`.
- Before documentation edits, `git status --short --branch` in the parent repository showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with no local file modifications.
- Before documentation edits, `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch` showed branch `feat/baseline-noxim...origin/feat/baseline-noxim` with no local file modifications.
- Required source documents were confirmed present: `Extended_Proposal.pdf`, `Proposal.pdf`, and `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
- Short source-document checks confirmed the project requirement of exactly two VCs, one for VN.0 and one for VN.1, and the original paper's one-VC-per-VN evaluation model.
- Source inspection covered `external/noxim/src/DataStructs.h`, `external/noxim/src/ProcessingElement.cpp`, `external/noxim/src/Router.*`, `external/noxim/src/ReservationTable.*`, `external/noxim/src/routingAlgorithms/RoutingAlgorithm.h`, `external/noxim/src/GlobalParams.*`, `external/noxim/src/ConfigurationManager.cpp`, and the DeFT topology/fault query surfaces.
- T0012 documented that DeFT VN state should be represented by the existing Noxim `vc_id`: VC 0 is VN.0 and VC 1 is VN.1.
- T0012 documented that no separate `vn_id` field should be added unless future implementation proves it necessary.
- T0012 documented that future DeFT-enabled runs should require exactly two configured VCs.
- T0012 documented a future implementation risk: the current router reservation path assumes input VC and output VC are the same index, so boundary-router VN reassignment must use output-VC-aware reservation/forwarding.
- No build, simulation, or regression command was run because the task changed only documentation.
- No Noxim source files, simulator behavior, routing behavior, route selection, VN assignment behavior, VN transition restriction, VL LUT generation, experiment automation, metrics, or golden regression output was changed.

## VN Assignment Rules

Purpose:

- Validate that T0013 DeFT VN assignment code builds.
- Confirm the existing `DEFT_2_5D` construction-only no-traffic smoke still instantiates with exactly two VCs.
- Confirm that no final VL selection, full VN transition-restriction enforcement, experiment automation, metrics change, or golden regression output update is introduced.

Known validation:

- Build from the Noxim repository root in WSL Ubuntu: `./build.sh`
- Construction smoke from `external/noxim/bin` in WSL Ubuntu:

```bash
LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 20 -warmup 0
```

T0013 result on 2026-05-07:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md`.
- Before implementation, `git status --short --branch` in the parent repository showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with no local file modifications.
- Before implementation, `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch` showed branch `feat/baseline-noxim...origin/feat/baseline-noxim` with no local file modifications.
- Required source documents were confirmed present: `Extended_Proposal.pdf`, `Proposal.pdf`, and `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
- Short source-document checks confirmed the Extended Proposal's VN assignment pseudocode and the original paper's one-VC-per-VN model, monotonic VN.0 to VN.1 transition, round-robin assignment when either VN is legal, and VN.1-only destination-chiplet entry behavior.
- T0013 added `DeftVirtualNetwork` as the VN/VC helper and assignment surface.
- T0013 updated source packet creation so `DEFT_2_5D` inter-chiplet traffic from non-boundary source routers starts in VC 0/VN.0, while legal source cases use round-robin assignment.
- T0013 made router reservation and forwarding output-VC-aware for DeFT boundary reassignment, including downstream full-status checks and forwarded `Flit::vc_id`.
- T0013 updated the construction-only `DEFT_2_5D` config to `n_virtual_channels: 2`, and configuration validation now rejects any other VC count for `DEFT_2_5D`.
- `./build.sh` from `external/noxim` completed with exit code `0` in WSL Ubuntu and emitted only pre-existing Noxim warnings.
- The construction-only no-traffic smoke completed with exit code `0`, reported the expected 128-router topology, 16 boundary routers, 16 functional physical VLs, no faults, zero received packets, and zero received flits.
- The construction smoke still reports `-nan` average delay and wireless utilization because it intentionally injects no traffic; these are not experiment metrics.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- No final VL selection, full VN transition-restriction enforcement beyond assignment monotonicity, experiment automation, metrics change, golden regression output update, or DeFT performance experiment was run.

## VN Transition Restrictions

Purpose:

- Validate that T0014 DeFT VN transition-restriction code builds.
- Confirm the existing `DEFT_2_5D` construction-only no-traffic smoke still instantiates with exactly two VCs.
- Confirm that no final VL selection, LUT generation, experiment automation, metrics change, or golden regression output update is introduced.

Known validation:

- Build from the Noxim repository root in WSL Ubuntu: `./build.sh`
- Construction smoke from `external/noxim/bin` in WSL Ubuntu:

```bash
LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 20 -warmup 0
```

T0014 result on 2026-05-07:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md`.
- Before implementation, `git status --short --branch` in the parent repository showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with no local file modifications.
- Before implementation, `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch` showed branch `feat/baseline-noxim...origin/feat/baseline-noxim` with no local file modifications.
- Required source documents were confirmed present: `Extended_Proposal.pdf`, `Proposal.pdf`, and `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
- Short source-document checks confirmed the Extended Proposal's three VN restriction requirements and the original DeFT paper's Rule 1, Rule 2, and Rule 3 wording for VN.1-to-VN.0, Up-to-Horizontal in VN.0, and Horizontal-to-Down in VN.1.
- T0014 added DeFT-only output-direction filtering in `DeftVirtualNetwork::isOutputDirectionAllowed()`.
- T0014 derives Up/Down/Horizontal movement from `RouteData::dir_in`, candidate output direction, current router layer, and boundary-router status without adding packet/flit movement-history metadata.
- T0014 updated router selection to filter illegal DeFT output candidates before reservation and to skip reservation when no legal candidate exists.
- `./build.sh` from `external/noxim` completed with exit code `0` in WSL Ubuntu.
- The construction-only no-traffic smoke completed with exit code `0`, reported the expected 128-router topology, 16 boundary routers, 16 functional physical VLs, no faults, zero received packets, and zero received flits.
- The construction smoke still reports `-nan` average delay and wireless utilization because it intentionally injects no traffic; these are not experiment metrics.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- Assumption: T0014 treats chiplet-boundary hub input as Up and chiplet-boundary hub output as Down while `DIRECTION_HUB` remains the current physical VL carrier.
- Blocked: Final DeFT route selection and fault-aware VL choices remain future work, so T0014 cannot prove alternate legal route availability when the current routing algorithm offers only illegal candidates.
- No final VL selection, LUT generation, experiment automation, metrics change, golden regression output update, or DeFT performance experiment was run.

## Offline VL LUT Format Design

Purpose:

- Validate that T0015 remains documentation-only.
- Confirm the offline LUT schema is traceable to the source documents, current physical VL IDs, fault-mask model, source router context, and destination chiplet context.
- Confirm no generator implementation, runtime LUT loading, route selection, metrics, simulations, regression outputs, or Noxim source files are changed.

Known validation:

- Parent repository status: `git status --short --branch`
- Noxim submodule status: `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch`

T0015 result on 2026-05-07:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md`.
- Before documentation edits, `git status --short --branch` in the parent repository showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with no local file modifications.
- Before documentation edits, `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch` showed branch `feat/baseline-noxim...origin/feat/baseline-noxim` with no local file modifications.
- Required source documents were confirmed present: `Extended_Proposal.pdf`, `Proposal.pdf`, and `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
- `pdftotext` was not available in the current environment. The bundled Python runtime with `pypdf` was used to inspect short source-document snippets in memory. No extracted text files were created.
- Short source-document checks confirmed the Extended Proposal's offline VL-selection formulation using Manhattan distance, load imbalance, exhaustive search, LUTs, and `rho = 0.01`.
- Short source-document checks confirmed the original DeFT paper's design-time analysis over VL-fault scenarios, runtime lookup-table use, and two VL selections per inter-chiplet packet.
- Source inspection was limited to existing documentation-support surfaces in `external/noxim`: `DeftTopology.*`, `DeftFaultInjectionManager.*`, `DeftVirtualNetwork.*`, `DataStructs.h`, `Router.cpp`, `Routing_XY.cpp`, and `config_examples/deft_2_5d_topology.yaml`.
- T0015 documented `deft_vl_lut.v1`, a restricted deterministic YAML schema keyed by physical fault-mask bitset, source chiplet ID, source router ID, and destination chiplet ID.
- T0015 defines `fault_mask_id` as a quoted fixed-width hexadecimal bitset over the current 16 physical bidirectional VL IDs, and records that the no-fault mask must be included.
- T0015 stores paired `source_exit` and `destination_entry` values with selected physical VL ID, boundary router endpoint, interposer endpoint router ID, ranked functional candidate VL IDs, and optional cost fields for inspectability.
- ADR-0026 records the durable LUT schema decision.
- After documentation updates, `git status --short --branch` in the parent repository showed only the expected modified documentation files: `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- After documentation updates, `git diff --name-only` in the parent repository showed the same six documentation files only.
- After documentation updates, `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch` remained clean on branch `feat/baseline-noxim...origin/feat/baseline-noxim`.
- After documentation updates, `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --name-only` returned no files.
- No build, simulation, regression, or `./regression.sh --update` command was run because T0015 made no source-code change.
- No Noxim source files, simulator behavior, route selection, experiment automation, metrics, DeFT performance experiments, or golden regression outputs were changed.

## Offline VL LUT Generator

Purpose:

- Validate that the standalone generator emits deterministic `deft_vl_lut.v1` YAML.
- Confirm selected source-exit and destination-entry VL IDs exclude faulty physical VLs.
- Confirm connected-chiplet fault-mask rejection is preserved.
- Confirm T0016 does not change Noxim router runtime behavior, simulator commands, metrics, experiment automation, or golden regression outputs.

Known validation:

- Syntax check:

```powershell
& 'C:\Users\ysfth\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' -m py_compile external\noxim\other\deft_vl_lut_generator.py
```

- CLI help check:

```powershell
& 'C:\Users\ysfth\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' external\noxim\other\deft_vl_lut_generator.py --help
```

- Deterministic in-memory generation check for masks `0x0000` and `0x1111`, asserting:
  - repeated generator calls produce identical bytes,
  - the output contains `schema: deft_vl_lut.v1`,
  - the two selected masks produce 384 entries,
  - every selected VL excludes the current mask's faulty VL IDs,
  - every selected VL is first in its `ranked_vl_ids`.

- Invalid-mask rejection:

```powershell
& 'C:\Users\ysfth\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' external\noxim\other\deft_vl_lut_generator.py --fault-mask 0x000f
```

T0016 result on 2026-05-07:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md`.
- Before implementation, `git status --short --branch` in the parent repository showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with no local file modifications.
- Before implementation, `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch` showed branch `feat/baseline-noxim...origin/feat/baseline-noxim` with no local file modifications.
- Required source documents were confirmed present: `Extended_Proposal.pdf`, `Proposal.pdf`, and `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
- Short source-document checks confirmed the Extended Proposal's equations for `lv`, `Lv`, Manhattan distance `D`, total distance `Dv`, cost `Cs`, and `rho = 0.01`, plus the original DeFT paper's design-time offline search, runtime lookup-table use, and two VL selections per inter-chiplet packet.
- Source inspection was limited to `external/noxim/src/DeftTopology.*`, `external/noxim/src/DeftFaultInjectionManager.*`, and `external/noxim/config_examples/deft_2_5d_topology.yaml`.
- T0016 added `external/noxim/other/deft_vl_lut_generator.py` as a standalone Python generator with no C++/SystemC or runtime-router changes.
- `python -m py_compile external/noxim/other/deft_vl_lut_generator.py` completed with exit code `0`.
- The CLI help command completed with exit code `0`.
- The deterministic in-memory generation check completed with exit code `0` for masks `0x0000` and `0x1111`; SHA-256 was `05c8cf1ce081a505e58cfa91c0e24bf53e144298119dddd530e42bd218bbdee7`, entry count was 384, selected VLs excluded faulty VLs, and selected VLs appeared first in `ranked_vl_ids`.
- The invalid-mask command with `--fault-mask 0x000f` rejected the mask because it disconnects chiplet 0.
- `git diff --check` in the parent repository completed with exit code `0`.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- After the generator was added and before documentation updates, parent status showed only the submodule changed because of the new untracked generator file, and submodule status showed `?? other/deft_vl_lut_generator.py`.
- No simulator build, no simulator run, no regression command, no `./regression.sh --update`, no final route selection, no runtime LUT loading, no metrics change, no experiment automation, and no golden regression output update was performed.

## Runtime VL LUT Loading and Boundary Use

Purpose:

- Validate that Noxim still builds after adding the runtime LUT loader and `DEFT` routing algorithm.
- Confirm `DEFT_2_5D` construction still succeeds when no LUT file is configured for no-traffic smoke runs.
- Confirm a generated schema-v1 LUT can be loaded at runtime with the current active physical fault mask.
- Confirm no regression golden outputs, metrics changes, experiment automation, or DeFT performance experiments are introduced by T0017.

Known validation:

- Build from the Noxim repository root in WSL Ubuntu: `./build.sh`
- Existing construction-only no-traffic smoke from `external/noxim/bin` in WSL Ubuntu:

```bash
LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 20 -warmup 0
```

- Runtime LUT load smoke used a temporary no-fault LUT generated by the T0016 generator, then the same no-traffic configuration with `-routing DEFT -deft_vl_lut deft_vl_lut_runtime_smoke.yaml`. The temporary LUT file was removed after the smoke.

T0017 result on 2026-05-07:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md`.
- Before implementation, parent and submodule status checks showed no local file modifications.
- Required source documents were confirmed present, and short snippets confirmed the Extended Proposal's boundary-router LUT requirement plus the original DeFT paper's two-intermediate-destination routing model.
- T0017 added `DeftVerticalLinkLut`, registered routing algorithm `DEFT`, added `deft_vl_lut_filename` / `-deft_vl_lut`, loaded the LUT after startup fault injection, and added a `DEFT` routing power entry alias.
- The documented WSL `./build.sh` first timed out at the two-minute tool limit, then completed with exit code `0` when rerun with a longer timeout. Only pre-existing Noxim warnings were emitted.
- The existing construction-only no-traffic smoke completed with exit code `0` and reported `DEFT_2_5D VL LUT: disabled`, active fault mask `0x0000`, zero packets, and zero flits.
- The first runtime LUT smoke attempt with `-routing DEFT` failed because `external/noxim/bin/power.yaml` had no `DEFT` routing power entry; T0017 added a narrow alias to the XY values.
- The successful runtime LUT load smoke completed with exit code `0` and reported `DEFT_2_5D VL LUT: loaded`, file `deft_vl_lut_runtime_smoke.yaml`, active fault mask `0x0000`, `entries=192`, and `active_entries=192`.
- `git diff --check` in the parent repository completed with exit code `0`.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0` after LF-normalizing the touched `power.yaml` file.
- No packet-carrying inter-chiplet DeFT route smoke, regression command, `./regression.sh --update`, metrics change, experiment automation, golden regression output update, or DeFT performance experiment was run.

## XY Baseline Modes

Purpose:

- Confirm that explicit XY fault-free and fault-injected baseline configurations select the existing `XY` routing algorithm on the same `DEFT_2_5D` topology.
- Confirm that startup VL fault metadata is visible for the fault-injected XY baseline while the DeFT LUT remains disabled.
- Confirm no C++/SystemC source, routing behavior, traffic generation, metrics, experiment automation, or golden regression outputs are changed.

Known validation:

- Fault-free XY baseline construction smoke from `external/noxim/bin` in WSL Ubuntu:

```bash
LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_xy_baseline_fault_free.yaml -seed 0 -sim 20 -warmup 0
```

- Fault-injected XY baseline construction smoke from `external/noxim/bin` in WSL Ubuntu:

```bash
LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_xy_baseline_fault_injected.yaml -seed 0 -sim 20 -warmup 0
```

T0018 result on 2026-05-08:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md`.
- Before implementation, parent and submodule status checks showed no local file modifications.
- Required source documents were confirmed present: `Extended_Proposal.pdf`, `Proposal.pdf`, and `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
- Short source-document checks found the Extended Proposal's XY fault-free and XY fault-injected baseline requirements and the original DeFT paper's statement that intra-chiplet routing can use deadlock-free dimension-order routing such as XY.
- Source inspection covered the existing `DEFT_2_5D` config, `Routing_XY`, `Routing_DEFT`, `ConfigurationManager`, `NoC`, `ProcessingElement`, `DeftTopology`, `DeftFaultInjectionManager`, `DeftVirtualNetwork`, and `DeftVerticalLinkLut` surfaces needed to confirm config-only baseline selection was sufficient for T0018.
- T0018 added two config-only XY baseline modes: `deft_2_5d_xy_baseline_fault_free.yaml` and `deft_2_5d_xy_baseline_fault_injected.yaml`.
- The first WSL smoke attempts inside the sandbox failed because no WSL distribution was visible in the sandboxed environment. The same commands were rerun outside the sandbox with approval and completed successfully.
- The fault-free XY baseline smoke completed with exit code `0`, reported `routing_algorithm = XY`, kept `DEFT_2_5D VL LUT: disabled`, reported active fault mask `0x0000`, and reported zero packets and zero flits because it intentionally uses the no-traffic hardcoded file.
- The fault-injected XY baseline smoke completed with exit code `0`, reported explicit faulty physical VLs `[0,4,8,12]`, kept `DEFT_2_5D VL LUT: disabled`, reported active fault mask `0x1111`, reported physical faults `4/16`, and reported three functional physical VLs per chiplet.
- `git diff --check` in the parent repository and `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`; a trailing-whitespace check over the two new untracked config files returned no matches.
- No `./build.sh` run was required because no build-integrated C++/SystemC source changed.
- No packet-carrying traffic run, regression command, `./regression.sh --update`, metrics change, experiment automation, golden regression output update, DeFT performance experiment, T0016 generator format change, or T0017 runtime LUT schema/use-path change was performed.

## Synthetic Traffic Configurations

Purpose:

- Confirm that the proposal-required synthetic traffic profiles can be selected on the current `DEFT_2_5D` topology.
- Confirm that localized and hotspot traffic tables encode the intended probabilities without adding a new simulator traffic mode.
- Confirm no DeFT routing, VN transition logic, VL fault injection, metrics, experiment automation, golden regression outputs, T0016 generator format, or T0017 runtime LUT schema/use path is changed.

Known validation:

- Uniform synthetic traffic config-load smoke from `external/noxim/bin` in WSL Ubuntu:

```bash
LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_traffic_uniform.yaml -seed 0 -sim 20 -warmup 0
```

- Localized synthetic traffic config-load smoke from `external/noxim/bin` in WSL Ubuntu:

```bash
LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_traffic_localized_40.yaml -seed 0 -sim 20 -warmup 0
```

- Hotspot synthetic traffic config-load smoke from `external/noxim/bin` in WSL Ubuntu:

```bash
LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_traffic_hotspot_3x10.yaml -seed 0 -sim 20 -warmup 0
```

T0019 result on 2026-05-08:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md`.
- Before implementation, parent and submodule status checks showed no local file modifications.
- Required source documents were confirmed present: `Extended_Proposal.pdf`, `Proposal.pdf`, and `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
- Short source-document checks found the Extended Proposal's Uniform, Localized 40% intra-chiplet, and Hotspot 3x10 synthetic traffic requirement. The original DeFT paper confirmed 40% same-chiplet localized traffic and 3 hotspot points with 10% rate on each.
- Source inspection covered `ProcessingElement.cpp`, `GlobalTrafficTable.*`, `ConfigurationManager.cpp`, `NoC.cpp`, the Noxim traffic documentation, existing config examples, and the T0018 baseline configs.
- `TRAFFIC_RANDOM` was selected for the uniform profile. `TRAFFIC_TABLE_BASED` was selected for localized and hotspot profiles because existing `TRAFFIC_LOCAL` is WiNoC hub-local and unsuitable for chiplet-local traffic under `DEFT_2_5D`.
- T0019 added three synthetic traffic YAML configs and two deterministic traffic tables under `external/noxim/config_examples`.
- Table integrity checks confirmed the localized table has 4032 rows, total per-source PIR approximately `0.01`, same-chiplet PIR approximately `0.004`, and other-chiplet PIR `0.006`.
- Table integrity checks confirmed the hotspot table has 4032 rows, total per-source PIR approximately `0.01`, hotspot routers `9`, `13`, and `41`, hotspot destination PIR `0.001` per non-hotspot source, and no self-destination entries.
- The first WSL smoke attempts inside the sandbox failed because no WSL distribution was visible in the sandboxed environment. The same commands were rerun outside the sandbox with approval and completed successfully.
- The uniform config-load smoke completed with exit code `0`, loaded `deft_2_5d_traffic_uniform.yaml`, kept `DEFT_2_5D VL LUT: disabled`, reported active fault mask `0x0000`, and delivered zero packets/flits in the short 20-cycle seed-0 run.
- The localized config-load smoke completed with exit code `0`, loaded `deft_2_5d_traffic_localized_40.yaml` and its table, kept `DEFT_2_5D VL LUT: disabled`, reported active fault mask `0x0000`, and delivered 2 packets / 11 flits in the short run.
- The hotspot config-load smoke completed with exit code `0`, loaded `deft_2_5d_traffic_hotspot_3x10.yaml` and its table, kept `DEFT_2_5D VL LUT: disabled`, reported active fault mask `0x0000`, and delivered 1 packet / 2 flits in the short run.
- `git diff --check` in the parent repository and `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`; a trailing-whitespace check over the new T0019 config/table files returned no matches.
- No `./build.sh` run was required because no build-integrated C++/SystemC source changed.
- No regression command, `./regression.sh --update`, metrics change, experiment automation, golden regression output update, DeFT performance experiment, T0016 generator format change, or T0017 runtime LUT schema/use-path change was performed.

## Metrics Collection

Purpose:

- Confirm that reachability, average latency, and throughput can be emitted in machine-readable form.
- Confirm that the metrics row identifies routing mode, traffic mode, and active DeFT fault mask for later XY-vs-DeFT comparison.
- Confirm no DeFT routing, VN transition logic, VL fault injection, LUT format/use path, traffic-profile semantics, experiment sweeps, performance analysis, or golden regression output is changed.

Known validation:

- Build from the Noxim repository root in WSL Ubuntu: `./build.sh`
- JSON metrics export smoke from `external/noxim/bin` in WSL Ubuntu:

```bash
LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_traffic_localized_40.yaml -seed 0 -sim 20 -warmup 0 -stats_format json -stats_file /tmp/deft_t0020_metrics_smoke.json
```

- CSV metrics export smoke from `external/noxim/bin` in WSL Ubuntu:

```bash
LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_traffic_localized_40.yaml -seed 0 -sim 20 -warmup 0 -stats_format csv -stats_file /tmp/deft_t0020_metrics_smoke.csv
```

T0020 result on 2026-05-08:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md`.
- Before implementation, parent status showed the current branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with no local file modifications.
- Before implementation, submodule status showed branch `feat/baseline-noxim...origin/feat/baseline-noxim` with no local file modifications.
- Required source documents were confirmed present: `Extended_Proposal.pdf`, `Proposal.pdf`, and `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
- Short source-document checks found the Extended Proposal's reachability, latency, and throughput evaluation requirement and the original DeFT paper's reachability/latency motivation.
- Source inspection found an existing `stats_format` / `stats_file` CSV and JSON export path in `GlobalStats`, existing average latency and throughput aggregation, and no existing injected-packet denominator for reachability.
- T0020 added injected packet/flit counters at the PE head-flit injection point and added CSV/JSON fields for routing algorithm, traffic distribution, active DeFT fault mask, injected packets/flits, received packets/flits, reachability ratio, average latency, and throughput.
- The first WSL build attempt inside the sandbox failed because no WSL distribution was visible in the sandboxed environment.
- The first approved WSL `./build.sh` attempt timed out before returning a build result; the same documented command was rerun with a longer timeout and completed with exit code `0`.
- The successful build recompiled `ProcessingElement.cpp` and relinked `bin/noxim`. Only pre-existing warnings from `Router.cpp` and `Stats.cpp` were emitted.
- The JSON metrics export smoke completed with exit code `0`, loaded `deft_2_5d_traffic_localized_40.yaml`, kept routing `XY`, traffic `TRAFFIC_TABLE_BASED`, and active fault mask `0x0000`, and emitted JSON containing `total_injected_packets=13`, `total_injected_flits=104`, `total_received_packets=2`, `total_received_flits=11`, `reachability_ratio=0.15384615384615385`, `global_average_delay_cycles=5`, `network_throughput_flits_per_cycle=0.55`, and `average_ip_throughput_flits_per_cycle_per_ip=0.00859375`.
- The CSV metrics export smoke completed with exit code `0` and emitted the same comparison fields and values in a single header row plus one data row.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0` after LF-normalizing the modified source files.
- No regression command, `./regression.sh --update`, experiment runner, result sweep, final analysis, golden regression output update, DeFT routing change, VN transition change, VL fault-injection change, T0016 generator format change, T0017 runtime LUT schema/use-path change, or T0019 traffic semantics change was performed.
- Assumption: Reachability counts packets when their head flit actually enters the network after the configured warm-up boundary.
- Assumption: Short smoke reachability can be below one because packets can remain in flight at the end of a short 20-cycle run; the smoke validates export shape only and is not a performance result.

## Build Validation

Purpose:

- Confirm that Noxim builds before project-specific implementation begins.
- Record exact compiler, SystemC, and build environment requirements.

Documented commands:

- From the Noxim repository root: `./build.sh`
- Dependency setup only, from the Noxim repository root: `./other/setup/fix-dependencies.sh`
- Legacy manual build from `external/noxim/bin`: `make`

Notes:

- Noxim source code is registered as the `external/noxim` submodule from `https://github.com/YusufTahirOrhan/noxim` as of T0023 on 2026-05-04.
- The submodule is the modifiable project fork, but Noxim source files should only be changed in explicit implementation tasks.
- Noxim source must not be vendored directly into the main repository.
- The normal post-clone build command documented by `external/noxim/README.md` and `external/noxim/doc/Noxim_User_Guide.md` is `./build.sh`.
- `external/noxim/build.sh` runs `other/setup/fix-dependencies.sh` and then `make -C bin`.
- `external/noxim/bin/Makefile` builds C++11/SystemC sources with `g++` and links `bin/noxim`.
- T0003 selected `./build.sh` from `external/noxim` as the baseline build command and verified it in WSL Ubuntu on 2026-05-05.
- T0024 recommends WSL Ubuntu on Windows 11 as the build-validation environment because native Windows PowerShell does not currently provide Bash, GNU Make, or `g++`.

T0003 blocked result on 2026-05-04:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, and `docs/DECISIONS.md`.
- `external/noxim/README.md`, `external/noxim/doc/Noxim_User_Guide.md`, `external/noxim/build.sh`, `external/noxim/bin/Makefile`, and `external/noxim/doc/INSTALL.txt` were inspected for build-command evidence.
- The selected documented baseline command is `./build.sh` from `external/noxim`.
- `./build.sh` was executed from `external/noxim` in the current Windows PowerShell sandbox. It returned exit code `0` with no output, but no `external/noxim/bin/noxim`, `external/noxim/bin/libs`, or `external/noxim/bin/build` path was created.
- Because the simulator binary was not created, the build is not verified.
- `where.exe bash`, `where.exe make`, and `where.exe g++` all returned no files, so the current environment lacks the Bash/GNU Make/G++ toolchain required by `build.sh`, `other/setup/fix-dependencies.sh`, and `bin/Makefile`.
- `external/noxim/other/deps-backup` contains backup archives for SystemC 2.3.1a and yaml-cpp 0.6.0, which may avoid network downloads once a compatible build toolchain is available.
- `git status --short` returned no output before T0003 documentation updates.
- After T0003 documentation updates, `git status --short` showed only modified tracking docs: `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- `git status --short` inside `external/noxim` could not be used because Git reported dubious ownership for the submodule path under the sandbox user.
- No Noxim source files were modified.
- No DeFT behavior, routing logic, topology logic, VN logic, fault injection logic, or simulation behavior was modified.

T0024 environment recommendation result on 2026-05-05:

- `where.exe wsl` found `C:\Windows\System32\wsl.exe`.
- `wsl --status` reported, in Windows system language, that Windows Subsystem for Linux is not installed and suggested installing it with `wsl.exe --install`; this result is recorded here in English.
- `where.exe bash`, `where.exe make`, and `where.exe g++` found no matching tools in the Windows PATH.
- Recommendation: use Windows 11 for editing and documentation, and use WSL Ubuntu for T0003 build validation, regression execution, and later Noxim simulation runs.
- Native Windows PowerShell remains unverified for the documented Noxim build flow.
- `git check-ignore -v docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` confirmed that `.gitignore` line 2 ignores the copied paper.
- `git status --short` showed modified project documentation, a new `.gitignore`, and a new tracked-reference README under `docs/references`; the copied PDF did not appear as an untracked file because it is ignored.

T0003 completed result on 2026-05-05:

- WSL Ubuntu is installed and available as a WSL2 distribution.
- `wsl -u root -- apt-get update` completed successfully.
- `wsl -u root -- apt-get install -y build-essential git cmake pkg-config ca-certificates` completed successfully; all requested packages were already installed.
- First WSL run of `./build.sh` failed because Windows CRLF line endings made the script shebang resolve to `bash\r`.
- Only Noxim build scripts and Makefiles were normalized to LF: `bin/Makefile`, `bin/Makefile.deps`, `build.sh`, `other/Makefile`, `other/run_tests.sh`, `other/setup/fedora.sh`, `other/setup/fix-dependencies.sh`, `other/setup/systemc.sh`, `other/setup/ubuntu.sh`, `other/setup/ubuntu_noboost.sh`, `other/setup/ubuntu_old.sh`, and `regression.sh`.
- The Noxim submodule local Git config was set to `core.autocrlf=false`.
- The documented command `./build.sh` was run from `external/noxim` in WSL Ubuntu and completed with exit code `0`.
- Build output used local backup archives where available, built SystemC and yaml-cpp dependencies, and then built Noxim with `g++`.
- The build created `external/noxim/bin/noxim`.
- `wsl -u root -- bash -lc "cd /mnt/c/Projects/CMP-720-Project-Proposal/external/noxim && ls -l bin/noxim && file bin/noxim"` confirmed `bin/noxim` is an ELF 64-bit x86-64 Linux executable.
- The build emitted compiler warnings from SystemC, yaml-cpp, and baseline Noxim code, but no fatal build errors.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --name-only --ignore-space-at-eol` returned no file names, confirming the Noxim tracked changes are line-ending-only.
- `git status --short` shows a dirty `external/noxim` submodule because of LF normalization in tracked build files.
- No DeFT behavior, routing logic, topology logic, VN logic, fault injection logic, or simulation behavior was modified.

## Source Document Validation

Purpose:

- Confirm that required project source documents are available before design or implementation tasks.
- Confirm that DeFT-specific behavior is checked against the original paper when relevant.

Known sources:

- `Extended_Proposal.pdf`
- `Proposal.pdf`
- `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`

Command:

- Availability check: `Get-Item -LiteralPath <required-source-path>`

Notes:

- T0002 confirmed that `Extended_Proposal.pdf`, `Proposal.pdf`, and `C:/Users/9500203/Downloads/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` are available.
- T0024 copied the original DeFT paper from `C:/Users/ysfth/OneDrive/Desktop/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` to `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
- `.gitignore` ignores that exact local PDF path so the paper is available in this workspace but not committed.

## Unit or Regression Tests

Purpose:

- Validate isolated behavior for topology mapping, Vertical Link faults, VN transitions, LUT generation, and metrics extraction.

Documented candidate commands, not yet executed by this project:

- From the Noxim repository root: `./regression.sh`
- List available regression cases: `./regression.sh --list`
- Run matching regression cases: `./regression.sh --case mesh_8x8_buf4`
- Regenerate golden outputs after intentional simulator behavior changes: `./regression.sh --update`

Notes:

- `external/noxim/README.md`, `external/noxim/regression.sh`, and `external/noxim/doc/Noxim_User_Guide.md` document a deterministic regression suite.
- `./regression.sh` rebuilds by default unless `--skip-build` is used.
- Do not use `./regression.sh --update` unless intentionally refreshing golden outputs after planned simulator behavior changes.
- T0003 verified the baseline build command, and T0004 verified a short documented simulator smoke run. Regression execution can be selected in a future explicit validation task.

## Noxim Simulation Runs

Purpose:

- Validate baseline XY behavior.
- Validate 2.5D topology construction.
- Validate DeFT routing behavior under synthetic traffic and fault scenarios.

Command:

- Documented baseline simulator invocation from `external/noxim/doc/Noxim_User_Guide.md`, section "A short deterministic example":

```bash
cd bin
./noxim -config ../config_examples/default_config.yaml -seed 0 -sim 20 -warmup 0
```

- Current WSL runtime wrapper needed for the local build artifact to find the local SystemC shared library:

```bash
cd /mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin
LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/default_config.yaml -seed 0 -sim 20 -warmup 0
```

Notes:

- Simulation commands must not be invented.
- Baseline simulation must be confirmed before DeFT-specific changes are evaluated.
- `external/noxim/doc/Noxim_User_Guide.md` includes the selected short deterministic baseline invocation.
- T0004 confirmed the selected baseline simulation on 2026-05-05 after T0003 confirmed the build.
- Assumption: The `LD_LIBRARY_PATH` prefix is an environment setup requirement for the current local WSL build because the simulator dynamically links against the locally built SystemC shared library; it does not change the simulator invocation or simulator behavior.

T0004 result on 2026-05-05:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, and `docs/DECISIONS.md`.
- The selected command is the Noxim User Guide's "A short deterministic example".
- The baseline config is `external/noxim/config_examples/default_config.yaml`: 4x4 `MESH`, `XY` routing, `RANDOM` selection, `TRAFFIC_RANDOM`, one virtual channel, packet injection rate `0.01`, and 8-flit packets.
- The first WSL execution of the exact documented simulator command failed with `./noxim: error while loading shared libraries: libsystemc-2.3.1.so: cannot open shared object file: No such file or directory`.
- WSL-side inspection confirmed `external/noxim/bin/libs/systemc-2.3.1/lib-linux64/libsystemc-2.3.1.so` exists and is resolved by `ldd` when that directory is supplied through `LD_LIBRARY_PATH`.
- The documented simulator invocation completed successfully in WSL Ubuntu with exit code `0` when the local SystemC library path was supplied through `LD_LIBRARY_PATH`.
- Completion line: `Noxim simulation completed. (1020 cycles executed)`.
- Important metrics: total received packets `1`; total received flits `2`; received/ideal flits ratio `0.078125`; average wireless utilization `0`; global average delay `6` cycles; max delay `6` cycles; network throughput `0.1` flits/cycle; average IP throughput `0.00625` flits/cycle/IP; total energy `3.99398e-09` J; dynamic energy `4.34792e-11` J; static energy `3.9505e-09` J.
- No DeFT experiments were run.
- No golden regression outputs were modified.
- No DeFT behavior, routing logic, topology logic, VN logic, fault injection logic, or simulation behavior was modified.
- Final status check showed only the requested documentation files modified in the parent project plus the already dirty `external/noxim` submodule from T0003 LF normalization.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --name-only --ignore-space-at-eol` returned no file names, confirming there are no non-line-ending tracked Noxim changes.

## Experiment Validation

Purpose:

- Validate traceable single-run and tiny comparison launches across routing mode, traffic model, fault setting, and random seed.

Known commands:

- Runner syntax check from the parent repository:

```powershell
python -m py_compile external/noxim/other/deft_experiment_runner.py
```

- Runner help check from the parent repository:

```powershell
python external/noxim/other/deft_experiment_runner.py --help
```

- Tiny XY/DEFT dry-run planning from `external/noxim` in WSL Ubuntu:

```bash
python3 other/deft_experiment_runner.py --routing XY --routing DEFT --traffic localized_40 --fault-mask 0x0000 --seed 0 --output-dir other/generated/t0021_wsl_dry_run
```

- Tiny XY/DEFT execute smoke from `external/noxim` in WSL Ubuntu:

```bash
python3 other/deft_experiment_runner.py --routing XY --routing DEFT --traffic localized_40 --fault-mask 0x0000 --seed 0 --output-dir other/generated/t0021_execute_smoke --execute --max-execute-runs 2
```

T0021 result on 2026-05-09:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md`.
- Before implementation, parent status showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with no local file modifications.
- Before implementation, submodule status showed branch `feat/baseline-noxim...origin/feat/baseline-noxim` with no local file modifications.
- Required source documents were confirmed present: `Extended_Proposal.pdf`, `Proposal.pdf`, and `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
- Source inspection confirmed the existing T0019 traffic configs, T0016 LUT generator, T0017 `-routing DEFT` / `-deft_vl_lut` surfaces, T0010/T0011 `-deft_faulty_vls` surface, and T0020 `-stats_format` / `-stats_file` surfaces.
- T0021 added `external/noxim/other/deft_experiment_runner.py` as a standalone Python runner and added `external/noxim/other/generated/` to the Noxim submodule ignore file for generated manifests, logs, stats, summaries, and temporary LUTs.
- `python -m py_compile external/noxim/other/deft_experiment_runner.py` completed with exit code `0`.
- `python external/noxim/other/deft_experiment_runner.py --help` completed with exit code `0` and listed routing, traffic, fault-mask, seed, stats, dry-run, and execute controls.
- A local dry-run planning check with `--routing XY --routing DEFT --traffic localized_40 --fault-mask 0x0000 --seed 0` completed with exit code `0` and wrote a manifest, commands file, and summary CSV under the ignored generated-output directory.
- A local fault-setting dry-run planning check with `--fault-preset none --fault-preset physical_25` completed with exit code `0` and recorded the `0x1111` mask as `-deft_faulty_vls 0,4,8,12` with matching temporary DEFT LUT generation commands.
- The first WSL dry-run and execute attempts inside the sandbox failed because no WSL distribution was visible in the sandboxed environment. The same commands were rerun outside the sandbox with approval and completed successfully.
- The approved WSL dry-run planned two localized traffic commands: one `XY` run and one `DEFT` run using a temporary generated `deft_vl_lut_0x0000.yaml` under `other/generated/t0021_wsl_dry_run/luts/`.
- The approved WSL execute smoke completed two localized traffic runs with exit code `0` through the runner. The runner produced `manifest.json`, `commands.sh`, per-run stdout/stderr files, JSON stats files, and `summary.csv` under `external/noxim/other/generated/t0021_execute_smoke/`.
- The execute-smoke summary reported the `XY` run as completed with `total_injected_packets=13`, `total_received_packets=2`, `reachability_ratio=0.15384615384615385`, `global_average_delay_cycles=5`, and `network_throughput_flits_per_cycle=0.55`.
- The execute-smoke summary reported the `DEFT` run as completed with `total_injected_packets=17`, `total_received_packets=3`, `reachability_ratio=0.17647058823529413`, `global_average_delay_cycles=7.333333333333333`, and `network_throughput_flits_per_cycle=0.65`.
- The short execute-smoke metrics validate runner integration and export shape only; they are not performance results.
- `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- A trailing-whitespace check over the new runner, the Noxim ignore file, and edited tracking docs returned no matches.
- No `./build.sh` run was required because no build-integrated C++/SystemC source changed.
- No regression command, `./regression.sh --update`, final sweep, final analysis, golden regression output update, DeFT routing change, VN transition change, VL fault-injection change, T0016 generator format change, T0017 runtime LUT schema/use-path change, T0019 traffic-profile semantic change, or T0020 metrics semantic change was performed.

Expected future checks:

- Single-run smoke test.
- Small multi-seed dry run.
- Fault-rate sweep up to 25% after final percentage accounting and sweep policy are selected.

## Final Analysis Artifact Validation

Purpose:

- Validate that final-analysis scaffolding can consume T0021 runner manifests and T0020 stats exports.
- Confirm generated tables preserve provenance and mark missing final sweep data as `Blocked`.
- Avoid running full sweeps, rebuilding Noxim, changing simulator behavior, or making unsupported performance claims.

Known commands:

- Analysis helper syntax check from the parent repository:

```powershell
python -m py_compile external/noxim/other/deft_analysis_artifacts.py
```

- Analysis helper help check from the parent repository:

```powershell
python external/noxim/other/deft_analysis_artifacts.py --help
```

- Scaffold generation from an existing ignored T0021 execute-smoke output:

```powershell
python external/noxim/other/deft_analysis_artifacts.py --input-dir external/noxim/other/generated/t0021_execute_smoke --output-dir external/noxim/other/generated/t0022_analysis_smoke
```

T0022 result on 2026-05-09:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md`.
- Before implementation, parent status showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with no local file modifications.
- Before implementation, submodule status showed branch `feat/baseline-noxim...origin/feat/baseline-noxim` with no local file modifications.
- Existing ignored T0021 outputs were found under `external/noxim/other/generated/`, including `t0021_execute_smoke`.
- T0022 added `external/noxim/other/deft_analysis_artifacts.py` as a standalone Python helper that reads T0021 `manifest.json`, `summary.csv`, and T0020 JSON stats exports.
- The helper writes ignored generated artifacts: `analysis_manifest.json`, `run_summary.csv`, `comparison_summary.csv`, and `report_scaffold.md`.
- `python -m py_compile external/noxim/other/deft_analysis_artifacts.py` completed with exit code `0`.
- `python external/noxim/other/deft_analysis_artifacts.py --help` completed with exit code `0`.
- Scaffold generation from `external/noxim/other/generated/t0021_execute_smoke` completed with exit code `0` and wrote artifacts under `external/noxim/other/generated/t0022_analysis_smoke`.
- The generated `run_summary.csv` included both completed smoke rows, resolved the WSL `/mnt/c/...` stats paths to workspace-local paths, and captured T0020 metrics from the JSON stats files.
- The generated `comparison_summary.csv` mechanically grouped the completed smoke rows by routing, traffic, fault mask, simulation time, and warm-up. These grouped means are not final performance results.
- The generated `report_scaffold.md` marked the result as `Blocked` for final claims because no validated final sweep output set was provided. It also recorded unresolved final fault-rate accounting, simulation window, seed count, and drain policy.
- No simulator execution, full sweep, Noxim rebuild, regression command, `./regression.sh --update`, golden output update, DeFT routing change, VN transition logic change, VL fault-injection change, T0016 generator format change, T0017 runtime LUT schema/use-path change, T0019 traffic semantic change, T0020 metrics semantic change, T0021 runner semantic change, or performance claim was performed.

Expected future checks:

- Re-run the analysis helper on validated final sweep directories after T0025 defines the final sweep policy.
- Cross-check generated final-analysis tables against raw runner manifests and per-run JSON stats before using them in the report.

## Final Sweep Policy Validation

Purpose:

- Confirm that final sweep policy is documented before running final experiments.
- Confirm that the policy uses existing runner, metrics, traffic, fault, and analysis surfaces without changing simulator behavior.
- Confirm that unresolved physical-vs-directional and drain limitations are marked as `Assumption` or `Blocked` before claims are allowed.

Known future dry-run command from `external/noxim` in WSL/Linux:

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

Known future execution command from `external/noxim` in WSL/Linux, only when explicitly requested:

```bash
python3 other/deft_experiment_runner.py \
  --routing XY --routing DEFT \
  --traffic uniform --traffic localized_40 --traffic hotspot_3x10 \
  --fault-mask 0x0000 --fault-mask 0x0001 --fault-mask 0x0011 --fault-mask 0x0111 --fault-mask 0x1111 \
  --seed 0 --seed 1 --seed 2 --seed 3 --seed 4 \
  --sim 10000 \
  --warmup 1000 \
  --stats-format json \
  --output-dir other/generated/t0026_final_sweep_v1 \
  --execute \
  --max-execute-runs 150
```

T0025 result on 2026-05-09:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md`.
- Before documentation edits, parent status showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with no local file modifications.
- Before documentation edits, submodule status showed branch `feat/baseline-noxim...origin/feat/baseline-noxim` with no local file modifications.
- Required source documents were confirmed present: `Extended_Proposal.pdf`, `Proposal.pdf`, and `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
- Source-document checks found the final evaluation requirements in `Extended_Proposal.pdf`: Uniform, Localized, and Hotspot traffic, permanent VL fault injection up to 25%, XY fault-free and fault-injected baselines, and reachability, average latency, and throughput metrics.
- Source-document checks found the original DeFT paper's evaluation anchors: four bidirectional VLs per chiplet, two VCs, 8-flit packets, 4-flit buffers, Uniform-traffic offline VL optimization, synthetic Uniform/Localized/Hotspot traffic, and reachability analysis over reported `total VLs=32`.
- `python external/noxim/other/deft_experiment_runner.py --help` completed with exit code `0` and confirmed the existing runner supports repeated routing, traffic, fault-mask, seed, `--sim`, `--warmup`, and JSON stats controls needed by the policy.
- T0025 documented the exact 150-run final matrix, physical fault-rate accounting, directional-equivalent reporting basis, fixed simulation window, warm-up policy, no-drain policy, validation gates, and result-claim rules.
- No simulator source, helper source, routing behavior, VN transition logic, VL fault injection, LUT schema/use path, traffic semantics, metrics semantics, runner semantics, analysis semantics, full sweep, Noxim rebuild, regression command, `./regression.sh --update`, golden output update, or performance claim was changed.
- `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- Final parent status after documentation updates showed only the requested tracking docs modified: `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- Final `external/noxim` status remained clean.
- Assumption: A permanent physical bidirectional VL fault disables both directions and can be reported as two disabled directional channels for paper-aligned percentage comparison.
- Blocked: The paper's single-direction 3.125% fault case is not represented by the current physical bidirectional fault model.
- Blocked: Eventual-delivery reachability after a post-injection drain phase is not supported by the current fixed-window runner policy.

Expected future checks:

- Generate the T0025 dry-run manifest and verify exactly 150 planned runs before execution.
- Execute the 150-run sweep only when explicitly requested.
- Regenerate final analysis artifacts from the completed output directory.
- Cross-check analysis tables against raw manifests and JSON stats before writing final report claims.

## Final Sweep Execution Validation

Purpose:

- Validate that the T0025 final matrix can be planned and executed without changing simulator behavior.
- Confirm the executed manifest, per-run JSON stats files, and generated analysis tables are internally consistent.
- Preserve final sweep outputs as ignored generated artifacts and avoid unsupported report claims.

Known T0026 dry-run command from `external/noxim` in WSL/Linux:

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

Known T0026 execution command from `external/noxim` in WSL/Linux:

```bash
python3 other/deft_experiment_runner.py \
  --routing XY --routing DEFT \
  --traffic uniform --traffic localized_40 --traffic hotspot_3x10 \
  --fault-mask 0x0000 --fault-mask 0x0001 --fault-mask 0x0011 --fault-mask 0x0111 --fault-mask 0x1111 \
  --seed 0 --seed 1 --seed 2 --seed 3 --seed 4 \
  --sim 10000 \
  --warmup 1000 \
  --stats-format json \
  --output-dir other/generated/t0026_final_sweep_v1 \
  --execute \
  --max-execute-runs 150
```

Known T0026 analysis command from the parent repository:

```powershell
python external/noxim/other/deft_analysis_artifacts.py --input-dir external/noxim/other/generated/t0026_final_sweep_v1 --output-dir external/noxim/other/generated/t0026_final_analysis_v1 --dataset-kind final_sweep
```

T0026 result on 2026-05-09:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md`.
- Before running the dry-run command, parent status showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with no local file modifications.
- Before running the dry-run command, submodule status showed branch `feat/baseline-noxim...origin/feat/baseline-noxim` with no local file modifications.
- The first sandboxed WSL dry-run attempt could not see an installed WSL distribution. The same dry-run command was rerun with approved WSL execution and completed with exit code `0`.
- The dry-run manifest reported `mode: dry_run`, `run_count: 150`, and 150 planned runs.
- Dry-run manifest validation confirmed exactly the full Cartesian product of `XY` and `DEFT`; `uniform`, `localized_40`, and `hotspot_3x10`; `0x0000`, `0x0001`, `0x0011`, `0x0111`, and `0x1111`; and seeds `0..4`.
- Dry-run validation confirmed all planned runs used `simulation_time_cycles=10000`, `stats_warm_up_time_cycles=1000`, and `stats_format=json`; `XY` runs had no LUT enabled, and `DEFT` runs had generated LUT provenance.
- The approved WSL execution command completed with exit code `0` and wrote generated artifacts under `external/noxim/other/generated/t0026_final_sweep_v1/`.
- Executed manifest validation confirmed `mode: execute`, `run_count: 150`, 150 manifest rows, 150 completed runs, 150 return code `0` runs, no missing Cartesian-product cells, no extra cells, and no duplicate cells.
- All 150 expected JSON stats files exist under `external/noxim/other/generated/t0026_final_sweep_v1/stats/`.
- Every JSON stats file contains the T0020 config and summary fields for routing mode, traffic distribution, active DeFT fault mask, injected packet/flit counts, received packet/flit counts, reachability ratio, average latency, and throughput.
- Per-run stats cross-checking confirmed each JSON file matched its manifest row for routing mode, fault mask, seed, simulation window, and warm-up window.
- Final analysis was regenerated with `--dataset-kind final_sweep` under `external/noxim/other/generated/t0026_final_analysis_v1/`.
- The analysis manifest reported `dataset_kind: final_sweep`, `run_count: 150`, `completed_with_metrics_count: 150`, `comparison_group_count: 30`, and `claims_allowed: false`.
- The generated `run_summary.csv` contains 150 rows and `comparison_summary.csv` contains 30 routing/traffic/fault-mask groups.
- A corrected CSV/JSON cross-check script found zero mismatches between the analysis run summary, comparison summary, executed manifest, and per-run JSON stats.
- The cross-check also observed 54 individual runs with `total_injected_packets=0` in the measured stats window: 20 `XY|uniform`, 5 `XY|localized_40`, 25 `XY|hotspot_3x10`, 1 `DEFT|uniform`, and 3 `DEFT|hotspot_3x10`.
- No Noxim rebuild was run because no simulator source changed.
- No simulator source, helper source, routing behavior, VN transition logic, VL fault injection, T0016 generator format, T0017 runtime LUT schema/use path, T0019 traffic semantics, T0020 metrics semantics, T0021 runner semantics, T0022 analysis semantics, golden regression output, regression command, or `./regression.sh --update` was changed.
- `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- Final parent status after documentation updates showed only the requested tracking docs modified: `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- Final `external/noxim` status remained clean.
- Assumption: T0026 generated analysis tables are mechanical report-support summaries only.
- Blocked: Final report interpretation must handle zero-injection cells and the analysis helper's conservative `claims_allowed: false` state before any performance statement uses the grouped means.

Expected future checks:

- Completed by T0027: review T0026 result tables and raw stats to decide which rows are usable for report figures.
- If report claims require non-empty measurements in every cell, define and run a follow-up validation policy rather than reinterpreting zero-injection cells.
- If final prose uses the analysis scaffold, update or annotate the scaffold blockers so they reflect the T0025 policy resolutions and T0026 execution status.

## Final Sweep Report-Support Validation

Purpose:

- Review completed T0026 final sweep outputs for report support without rerunning simulations.
- Generate claim-safe tables that distinguish measured values, blank cells, and limitations.
- Cross-check every derived table against the T0026 executed manifest and raw JSON stats before recording it.

Known validation:

- Use existing generated T0026 artifacts under `external/noxim/other/generated/t0026_final_sweep_v1/` and `external/noxim/other/generated/t0026_final_analysis_v1/`.
- If no simulator source changes are made, do not rebuild Noxim and do not rerun the final sweep.

T0027 result on 2026-05-09:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md`.
- Before running commands or documentation edits, a short implementation plan was produced.
- Initial parent status showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with no local file modifications.
- Initial submodule status showed branch `feat/baseline-noxim...origin/feat/baseline-noxim` with no local file modifications.
- T0027 generated ignored report-support artifacts under `external/noxim/other/generated/t0027_report_support_v1/`: `manifest.json`, `condition_summary.csv`, `xy_deft_pair_summary.csv`, `zero_injection_runs.csv`, `coverage_by_routing_traffic.csv`, and `report_notes.md`.
- Generated T0027 tables were derived from the T0026 executed manifest and raw JSON stats.
- T0027 cross-checked the generated tables against T0026 `summary.csv`, analysis `run_summary.csv`, and analysis `comparison_summary.csv`.
- Cross-check validation found zero mismatches across raw manifest rows, JSON stats, sweep summary rows, analysis run-summary rows, and analysis comparison-summary grouped means.
- T0027 confirmed 150 completed raw stats rows, 30 condition cells, 15 XY/DEFT pair rows, and 54 individual zero-injection runs.
- The 30 condition cells were classified as 12 complete-injection cells, 13 partial-injection cells, and 5 empty-injection cells.
- All 5 empty-injection cells are `XY|hotspot_3x10`.
- `XY|uniform` and `XY|localized_40` are partial-injection cells with zero received packets in the measured stats window.
- No XY/DEFT pair supports latency comparison because the XY side has zero received packets in every pair where it injected packets.
- No Noxim rebuild, final-sweep rerun, simulator source change, helper source change, routing behavior change, VN transition change, VL fault-injection change, traffic semantic change, metrics semantic change, runner/analysis semantic change, golden output update, regression command, `./regression.sh --update`, or performance claim was performed.
- `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- Final parent status after documentation updates showed only the requested tracking docs modified: `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- Final `external/noxim` status remained clean.
- Assumption: T0027 zero-injection rows are completed simulator rows with no packets injected during the measured stats window, not simulator failures.
- Assumption: T0027 aggregate reachability is blank when `total_injected_packets == 0`.
- Assumption: T0027 aggregate latency is blank when `total_received_packets == 0`.
- Blocked: Final report prose must accept the T0027 blank-aware limitations or define a follow-up validation/rerun policy before making stronger claims.

Expected future checks:

- Draft final report results text from T0027 tables and spot-check any cited measured value against the generated T0027 CSV and T0026 raw JSON stats.
- If the final report requires non-empty XY hotspot cells or latency comparisons, define a separate validation/rerun policy before adding claims.

## Claim-Safe Final Report Results Draft Validation

Purpose:

- Draft final report results prose and tables from T0027 report-support artifacts without rerunning simulations.
- Preserve blank reachability, blank latency, partial-cell coverage, and limitations explicitly.
- Confirm the draft remains descriptive and does not introduce unsupported performance claims.

Known validation:

- Use existing generated T0027 artifacts under `external/noxim/other/generated/t0027_report_support_v1/`.
- Use existing generated T0026 artifacts under `external/noxim/other/generated/t0026_final_sweep_v1/` and `external/noxim/other/generated/t0026_final_analysis_v1/` for spot checks.
- If no simulator source changes are made, do not rebuild Noxim and do not rerun the final sweep.

T0028 result on 2026-05-09:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md`.
- Before running commands or documentation edits, a short implementation plan was produced.
- Initial parent status showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with no local file modifications.
- Initial submodule status showed branch `feat/baseline-noxim...origin/feat/baseline-noxim` with no local file modifications.
- Required source-document paths were present: `Extended_Proposal.pdf`, `Proposal.pdf`, and `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
- T0028 used the existing generated T0027 report-support artifacts only for result drafting and did not rerun simulations.
- T0028 created ignored report-draft artifacts under `external/noxim/other/generated/t0028_final_report_results_v1/`: `manifest.json` and `report_results_draft.md`.
- The T0027 manifest counts were spot-checked before drafting: 150 raw stats rows, 30 condition cells, 15 pair rows, 54 zero-injection runs, 5 empty-injection cells, 13 partial-injection cells, 12 complete-injection cells, and zero cross-check mismatches.
- Condition status counts were spot-checked from `condition_summary.csv`: 12 complete-injection cells, 13 partial-injection cells, and 5 empty-injection cells.
- Pair readiness counts were spot-checked from `xy_deft_pair_summary.csv`: 5 `not_comparison_ready_xy_empty` rows and 10 `descriptive_reachability_only_latency_blank` rows.
- Zero-injection run grouping was spot-checked from `zero_injection_runs.csv`: 25 `XY|hotspot_3x10`, 20 `XY|uniform`, 5 `XY|localized_40`, 3 `DEFT|hotspot_3x10`, and 1 `DEFT|uniform`.
- The draft preserves blank reachability cells where no packets were injected and blank latency cells where no packets were received.
- The draft makes no improvement, delta, statistical-significance, latency-comparison, or unsupported performance claim and keeps `claims_allowed: false`.
- No Noxim rebuild, final-sweep rerun, simulator source change, helper source change, routing behavior change, VN transition change, VL fault-injection change, traffic semantic change, metrics semantic change, runner/analysis semantic change, golden output update, regression command, `./regression.sh --update`, or performance claim was performed.
- `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- Final parent status after documentation updates showed only the requested tracking docs modified: `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- Final `external/noxim` status remained clean.

Expected future checks:

- Integrate `external/noxim/other/generated/t0028_final_report_results_v1/report_results_draft.md` into the final report only with its blank cells and limitations intact.
- If the final report requires stronger claims, non-empty XY hotspot cells, or latency comparisons, define a separate validation/rerun policy before changing the report language.

## Claim-Safe Final Report Draft Assembly Validation

Purpose:

- Assemble a tracked Markdown final report draft from the source documents, project documentation, and T0028/T0027/T0026 report-support artifacts.
- Preserve blank cells, partial-cell coverage counts, zero-injection notes, validation provenance, assumptions, blockers, and limitations.
- Confirm the assembled report draft does not introduce unsupported result language.

Known validation:

- Use `docs/FINAL_REPORT_DRAFT.md` as the tracked report draft.
- Use `external/noxim/other/generated/t0028_final_report_results_v1/report_results_draft.md` as the source for results prose and tables.
- Use `external/noxim/other/generated/t0027_report_support_v1/` and T0026 generated artifacts for spot checks.
- If no simulator source changes are made, do not rebuild Noxim and do not rerun the final sweep.

T0029 result on 2026-05-09:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md`.
- Before documentation edits, a short implementation plan was produced.
- Initial parent status showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with no local file modifications.
- Initial submodule status showed branch `feat/baseline-noxim...origin/feat/baseline-noxim` with no local file modifications.
- Required source-document paths were present: `Extended_Proposal.pdf`, `Proposal.pdf`, and `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
- Read-only PDF snippet checks confirmed the extended proposal's Noxim, synthetic traffic, permanent VL fault, reachability, latency, and throughput scope, and the original DeFT paper's VN, two-VC, VL-selection, and 2.5D routing context.
- Created the tracked draft `docs/FINAL_REPORT_DRAFT.md`.
- The draft uses T0028 results prose and tables as the results-section source and preserves blank reachability, blank latency, nonempty/empty seed counts, zero-injection notes, and limitations.
- Spot checks against T0028/T0027 confirmed 150 completed runs, 30 condition rows, 15 pair rows, 54 zero-injection runs, 12 complete-injection cells, 13 partial-injection cells, 5 empty-injection cells, and zero cross-check mismatches.
- Claim-safety search found no complete-reachability wording, no non-ASCII characters, and no obvious ranking or latency-claim phrases in `docs/FINAL_REPORT_DRAFT.md`.
- No Noxim rebuild, final-sweep rerun, simulator source change, helper source change, routing behavior change, VN transition change, VL fault-injection change, traffic semantic change, metrics semantic change, runner/analysis semantic change, golden output update, regression command, `./regression.sh --update`, or performance claim was performed.
- `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- Final parent status after documentation updates showed only the requested tracking docs modified plus the new tracked report draft: `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/FINAL_REPORT_DRAFT.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- Final `external/noxim` status remained clean.

Expected future checks:

- Review `docs/FINAL_REPORT_DRAFT.md` for final submission formatting and citation style while preserving its claim-safety constraints.
- If a PDF, DOCX, or presentation artifact is required, record the requested output format and validate the rendered artifact separately.

## Final Report Submission-Readiness Validation

Purpose:

- Review the tracked Markdown final report draft for submission readiness without changing validated measurements.
- Preserve claim-safety constraints, blank metric cells, partial-cell coverage counts, validation provenance, assumptions, blockers, and limitations.
- Confirm that no unsupported result language is introduced during report polish.

Known validation:

- Use `docs/FINAL_REPORT_DRAFT.md` as the tracked report draft.
- Use existing T0028/T0027/T0026 artifacts only for traceability checks.
- Use documentation/status validation and targeted claim-safety searches.
- If no simulator source changes are made, do not rebuild Noxim and do not rerun simulations.
- If a PDF, DOCX, PPTX, or other final artifact is requested, record the requested format and validation method before conversion.

T0030 result on 2026-05-09:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md`.
- Before documentation edits, a short implementation plan was produced.
- Initial parent status showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with no local file modifications.
- Initial submodule status showed branch `feat/baseline-noxim...origin/feat/baseline-noxim` with no local file modifications.
- Required source-document paths were present: `Extended_Proposal.pdf`, `Proposal.pdf`, and `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
- The default Python environment did not provide `pypdf`, so T0030 did not extract new bibliographic details from PDFs. Citation wording was kept source-scoped to verified local paths and existing project records.
- Polished `docs/FINAL_REPORT_DRAFT.md` for title/front-matter clarity, source-scope wording, citation wording, table readability, and submission-readiness notes.
- Added a submission-format note recording that no PDF, DOCX, PPTX, or other final artifact format was requested during T0030.
- Added a status-label legend for the condition-level metrics table while preserving every measured value, blank reachability cell, blank latency cell, nonempty/empty seed count, status label, and zero-injection note.
- Claim-safety searches found only negative or limitation-context occurrences for deltas and latency comparison language, with no unsupported ordering, improvement, complete-reachability, statistical-significance, or latency-comparison claim added.
- Count checks in `docs/FINAL_REPORT_DRAFT.md` confirmed 30 condition rows, 12 complete-injection rows, 13 partial-injection rows, 5 empty-injection rows, and preserved blank-cell rows.
- ASCII checks found no non-ASCII characters in the edited Markdown files.
- No final submission artifact was generated because no final format was specified.
- No Noxim rebuild, final-sweep rerun, simulator source change, helper source change, routing behavior change, VN transition change, VL fault-injection change, traffic semantic change, metrics semantic change, runner/analysis semantic change, golden output update, regression command, `./regression.sh --update`, or performance claim was performed.
- `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- Final parent status after documentation updates showed only requested Markdown files modified: `docs/ARCHITECTURE.md`, `docs/FINAL_REPORT_DRAFT.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- Final `external/noxim` status remained clean.
- Assumption: At T0030 completion, `docs/FINAL_REPORT_DRAFT.md` was submission-ready as a reviewed Markdown draft, but not yet as a converted PDF, DOCX, PPTX, or other final artifact. This was superseded by the T0031 LaTeX source artifact.
- Blocked: At T0030 completion, final artifact conversion was pending until the required submission format was specified. This was superseded by T0031; only PDF generation remains blocked by missing TeX tooling.

Expected future checks:

- If the final report requires PDF, DOCX, PPTX, or another artifact, record the requested output format before conversion and validate the rendered artifact separately.
- If stronger claims, non-empty XY hotspot cells, latency comparisons, directional endpoint fault modeling, real-application traces, or eventual-delivery checks are required, define a separate validation policy before changing report language.

## Final Submission Artifact Validation

Purpose:

- Convert the reviewed report draft into the explicitly requested IEEE conference-style LaTeX artifact.
- Preserve claim-safety constraints, blank metric cells, partial-cell coverage counts, validation provenance, assumptions, blockers, and limitations.
- Validate the generated LaTeX source when local PDF compilation is not available.

Known validation:

- Use `docs/FINAL_REPORT_DRAFT.md` as the reviewed report draft.
- Use `Extended_Proposal.zip` as the LaTeX formatting/template reference.
- Use `Proposal.pdf` only as initial context.
- Use the original DeFT paper only as the algorithmic reference.
- If no simulator source changes are made, do not rebuild Noxim and do not rerun simulations.
- Run `git diff --check`.
- If LaTeX tooling is available, compile the final report and record the generated PDF path.
- If LaTeX tooling is not available, record the exact PDF generation blocker.

T0031 result on 2026-05-09:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md`.
- Before running commands or documentation edits, a short implementation plan was produced.
- Initial parent status showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with no local file modifications.
- Initial `external/noxim` status showed branch `feat/baseline-noxim...origin/feat/baseline-noxim` with no local file modifications.
- Required source-document paths were present: `Extended_Proposal.pdf`, `Proposal.pdf`, and `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
- The explicitly supplied final artifact format was IEEE conference-style LaTeX.
- `Extended_Proposal.zip` was inspected before artifact creation. Its usable template source contains `conference_101719.tex`, `IEEEtran.cls`, `references.bib`, and `figures/schematic.png`.
- Created `final_report/main.tex`, `final_report/references.bib`, `final_report/README.md`, and copied `final_report/IEEEtran.cls` and `final_report/figures/schematic.png` from `Extended_Proposal.zip`.
- `final_report/main.tex` uses IEEEtran conference style, IEEE bibliography style, the Extended Proposal author/title convention family, and IEEE-style sections.
- `final_report/references.bib` contains only cited bibliography entries reused from the Extended Proposal source.
- The LaTeX report preserves claim-safety constraints, blank reachability cells, blank latency cells, partial-cell coverage counts, validation provenance, assumptions, blockers, limitations, and descriptive-only result wording.
- Citation/BibTeX consistency checks found no cited key missing from `references.bib` and no uncited BibTeX entries.
- LaTeX source environment count check found balanced `\begin{...}` and `\end{...}` counts.
- ASCII checks found no non-ASCII characters in `final_report/main.tex`, `final_report/references.bib`, or `final_report/README.md`.
- `latexmk`, `pdflatex`, `bibtex`, and `tectonic` were not available on the Windows PATH, so no PDF was generated.
- No Noxim rebuild, final-sweep rerun, simulator source change, helper source change, routing behavior change, VN transition change, VL fault-injection change, traffic semantic change, metrics semantic change, runner/analysis semantic change, golden output update, regression command, `./regression.sh --update`, or performance claim was performed.
- Final `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- Final parent status showed modified tracking docs and the new untracked `final_report/` artifact directory.
- Final `external/noxim` status remained clean.
- Assumption: `final_report/` is ready as the final LaTeX source artifact.
- Blocked: PDF generation requires a TeX-enabled environment.

Expected future checks:

- Compile `final_report/main.tex` in a TeX-enabled environment and record the generated PDF path.
- Inspect the generated PDF for layout issues, especially wide result tables.
- Preserve claim-safety constraints if any LaTeX layout edits are needed.

## Final Report Blocker Diagnosis Validation

Purpose:

- Diagnose the measured-window blockers that prevent stronger XY-vs-DEFT final-report comparison claims.
- Confirm whether the XY hotspot zero-injection cells are traffic/config problems or warm-up/topology interaction.
- Confirm whether XY zero-received cells are a missing drain problem, a short-window problem, or a route-compatibility limitation.

Known validation:

- Use existing generated T0026 artifacts under `external/noxim/other/generated/t0026_final_sweep_v1/`.
- Use existing generated T0027 artifacts under `external/noxim/other/generated/t0027_report_support_v1/`.
- If no simulator source changes are made, do not rebuild Noxim and do not rerun the full final sweep.
- Small targeted WSL runner diagnostics may use the already documented T0021/T0026 runner surface with new versioned output directories under `external/noxim/other/generated/`.
- Run `git diff --check`.
- Do not use `./regression.sh --update`.

T0033 result on 2026-05-09:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Before implementation or documentation edits, a short diagnosis plan was produced.
- Inspected the synthetic traffic configs and tables: `deft_2_5d_traffic_uniform.yaml`, `deft_2_5d_traffic_localized_40.yaml`, `deft_2_5d_traffic_localized_40.txt`, `deft_2_5d_traffic_hotspot_3x10.yaml`, and `deft_2_5d_traffic_hotspot_3x10.txt`.
- Inspected `external/noxim/other/deft_experiment_runner.py`; the T0026 final sweep used `-sim 10000`, `-warmup 1000`, routing overrides, JSON stats export, and no post-injection drain or PIR override.
- Inspected `ProcessingElement.cpp`, `GlobalTrafficTable.cpp`, `Routing_XY.cpp`, `Routing_DEFT.cpp`, `Router.cpp`, `NoC.cpp`, `Utils.h`, `DeftTopology.*`, `DeftVirtualNetwork.cpp`, `Main.cpp`, and `ConfigurationManager.cpp` for injection accounting, table traffic, route selection, topology wiring, idle-port behavior, warm-up, and drain-related controls.
- Confirmed from code that injected-packet stats are counted only when the packet head flit leaves the PE after the stats warm-up boundary.
- Confirmed from code that standard `XY` uses only cardinal footprint-coordinate movement and never selects VL/hub/interposer traversal.
- Confirmed from code that `DEFT_2_5D` chiplet cardinal links are wired only inside each 4x4 chiplet, and missing cross-chiplet cardinal ports are bound to idle ports.
- Confirmed from code that current `-volume` stops after delivered flits and is not a post-injection drain phase with source cut-off.
- The first sandboxed WSL diagnostic attempt could not see a WSL distribution. The same two-run diagnostic was rerun with approved WSL execution and completed with exit code `0`.
- Diagnostic command from `external/noxim` in WSL/Linux:

```bash
python3 other/deft_experiment_runner.py \
  --routing XY \
  --traffic hotspot_3x10 --traffic uniform \
  --fault-mask 0x0000 \
  --seed 0 \
  --sim 10000 \
  --warmup 0 \
  --stats-format json \
  --output-dir other/generated/t0033_xy_diagnostic_warmup0_v1 \
  --execute \
  --max-execute-runs 2
```

- The diagnostic wrote ignored artifacts under `external/noxim/other/generated/t0033_xy_diagnostic_warmup0_v1/`.
- `XY|hotspot_3x10|0x0000|seed0` completed with return code `0`, injected 145 packets, received 6 packets, reachability `0.041379310344827586`, and weighted average latency `5.666666666666667` cycles.
- `XY|uniform|0x0000|seed0` completed with return code `0`, injected 141 packets, received 4 packets, reachability `0.028368794326241134`, and weighted average latency `6.75` cycles.
- T0033 diagnosis: the hotspot traffic table is non-empty and hotspot destination selection is not the cause of the T0027 empty hotspot cells.
- T0033 diagnosis: the T0026/T0027 zero-injection and zero-received XY cells are primarily caused by `-warmup 1000` measuring after early XY traffic has already injected and then stalled behind cardinal routes that cannot traverse the disconnected chiplet layer.
- T0033 diagnosis: a config/runner-only warm-up-0 policy can create non-empty diagnostic XY data, but it does not create a strong full inter-chiplet comparison because the existing `XY` route remains topology-incompatible for unrestricted inter-chiplet traffic.
- T0033 diagnosis: source changes would be required for a true post-injection drain/source-cutoff policy, and an interposer-aware XY baseline would also be a separate source-change task if selected.
- No simulator source, helper source, DeFT routing, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, old final-sweep artifact, Noxim rebuild, full sweep, regression command, `./regression.sh --update`, or final-report performance claim was changed.
- Final `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- Final parent status showed modified tracking docs and the pre-existing untracked `final_report.zip`.
- Final `external/noxim` status remained clean; the T0033 generated diagnostic output is under the ignored `external/noxim/other/generated/` tree.

Expected future checks:

- T0034 selected final report revision with the T0033 diagnosis before PDF generation; T0035 should perform that revision.
- If a follow-up rerun is selected, use a new versioned generated-output directory and preserve the T0026/T0027 artifacts unchanged.
- If eventual-delivery validation is selected, first design and approve source cut-off plus drain/timeout behavior before editing simulator source.

## Gap-Closure Direction Validation

Purpose:

- Decide the safest final-report gap-closure direction after the T0033 blocker diagnosis.
- Compare report revision, interposer-aware baseline routing, post-injection drain/source-cutoff support, PARSEC/GEM5 trace support, documentation-only finalization, and other possible follow-up paths before any implementation work.
- Record validation implications for the selected and deferred paths.

Known validation:

- Use existing project tracking documents, `docs/FINAL_REPORT_DRAFT.md`, `final_report/main.tex`, and the registered Noxim source tree at `external/noxim`.
- Do not rerun simulations, rebuild Noxim, regenerate the final report, regenerate final-sweep outputs, or use `./regression.sh --update`.
- For documentation-only direction decisions, use `git diff --check` and repository status checks.

T0034 result on 2026-05-11:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- The registered Noxim source tree at `external/noxim` was inspected for status; it was clean before documentation edits.
- T0034 selected Option A as the primary next direction: revise the final report with the T0033 diagnosis without adding simulator behavior.
- Validation implication for Option A: use documentation consistency checks, claim-safety review, `git diff --check`, and optional LaTeX compilation only when TeX tooling is available. Do not run simulations or rebuild Noxim.
- Validation implication for Option B: an interposer-aware XY-like baseline would require a separate source-design task, simulator build validation, focused route tests, and new versioned comparison artifacts before it could support report claims.
- Validation implication for Option C: source-cutoff plus post-injection drain would require a separate simulator/runner semantics design, build validation, targeted drain tests, and careful metric interpretation. It would not fix standard XY topology incompatibility by itself.
- Validation implication for Option D: PARSEC/GEM5 trace support would require external trace-generation or trace-import infrastructure plus separate validation, and is not appropriate for immediate final-report closure.
- Validation implication for Option E: documenting remaining work only is validation-light but leaves report quality lower than Option A because it does not incorporate the diagnosis.
- Validation implication for Option F: any other heavier experimental direction should be handled by a post-final design gate before source or simulation work.
- Added `T0035` for final report revision with T0033 diagnosis and `T0036` as a post-final experimental extension design gate.
- Added ADR-0041 to record the durable report-revision-over-late-source-change policy.
- No source code, simulator behavior, helper behavior, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, generated final-sweep artifacts, Noxim rebuild, simulation run, final report regeneration, PDF generation, regression command, `./regression.sh --update`, or performance claim was changed.
- Final `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- Final parent status showed modified tracking docs and the pre-existing untracked `final_report.zip`.
- Final `external/noxim` status remained clean.

Expected future checks:

- T0035 completed the report revision and ran `git diff --check`.
- T0032 should compile the revised `final_report/main.tex` when a TeX toolchain is available.
- Any future source-change or simulation-rerun direction must get its own task, design, validation commands, and versioned output directories before implementation.

## Final Report Diagnosis Revision Validation

Purpose:

- Revise `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex` with the T0033 `XY` blocker diagnosis.
- Preserve T0026/T0027/T0028 as the only final report-support data set.
- Keep T0033 warm-up-0 diagnostics as provenance only, not as final performance results.
- Avoid simulator source changes, helper source changes, generated final-sweep artifact changes, Noxim rebuilds, simulation reruns, and unsupported performance claims.

Known validation:

- Use documentation/source consistency checks only.
- Run `git diff --check`.
- Check whether `latexmk`, `pdflatex`, `bibtex`, or `tectonic` are available before attempting PDF compilation.

T0035 result on 2026-05-11:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Before editing, a short implementation plan was produced with the T0026/T0027/T0028 final-report-support data set as the controlling assumption and PDF generation as blocked without TeX tooling.
- `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex` were revised to explain T0033 as provenance only.
- The revised report text states that `XY|hotspot_3x10` zero-injection cells are measured-window artifacts caused by `-warmup 1000` after early XY traffic had already injected and then stalled.
- The revised report text states that `XY|uniform` and `XY|localized_40` zero-received cells are caused by standard `XY` being cardinal-only on `DEFT_2_5D`, where unrestricted inter-chiplet routes need VL/hub/interposer traversal.
- The revised report text states that a post-injection drain/source-cutoff policy is needed for eventual-delivery analysis but would not by itself fix standard `XY` topology incompatibility.
- Warm-up-0 T0033 diagnostic values are not presented as final performance results.
- `latexmk`, `pdflatex`, `bibtex`, and `tectonic` were not available on the Windows PATH, so no PDF was generated and T0032 remains the PDF-generation task.
- No simulator source, helper source, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifacts, Extended Proposal files, Noxim rebuild, simulation run, final-sweep regeneration, regression command, `./regression.sh --update`, or performance claim was changed.
- Final `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited text files, including Markdown files and `final_report/main.tex`.
- Final `external/noxim` status remained clean.

Expected future checks:

- T0032 should compile `final_report/main.tex` in a TeX-enabled environment and record the generated PDF path or exact blocker.
- If any layout-only edits are required during PDF generation, preserve the T0035 diagnosis wording, blank metric cells, claim-safety constraints, and T0026/T0027/T0028-only result policy.

## Final Report PDF Generation Validation

Purpose:

- Compile `final_report/main.tex` into a PDF when a TeX-enabled environment is available.
- Record the generated PDF path, LaTeX warnings, and any layout blockers.
- Preserve report claims, simulator behavior, generated final-sweep artifacts, and Extended Proposal files.

Known validation:

- Preferred command from `final_report/`: `latexmk -pdf main.tex`.
- Fallback command sequence from `final_report/` only when both tools are available: `pdflatex main.tex`, `bibtex main`, `pdflatex main.tex`, `pdflatex main.tex`.
- Run `git diff --check`.
- Do not rebuild Noxim, rerun simulations, regenerate the final sweep, or use `./regression.sh --update`.

T0032 result on 2026-05-11:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Before status checks, toolchain checks, or tracking-document edits, a short implementation plan was produced.
- Parent repository status before documentation edits showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` ahead by one commit and the pre-existing untracked `final_report.zip`.
- The registered Noxim source tree at `external/noxim` remained clean before documentation edits.
- `final_report/main.tex`, `final_report/references.bib`, and `final_report/IEEEtran.cls` are present.
- Windows PATH did not expose `latexmk`, `pdflatex`, `bibtex`, or `tectonic`.
- Common Windows TeX install locations checked during T0032 did not expose a visible TeX install.
- `wsl.exe` exists, but `wsl -l -v` reported no installed WSL distributions, so no WSL TeX environment is usable from this workspace.
- LaTeX compilation was not attempted because neither `latexmk` nor the `pdflatex` plus `bibtex` fallback toolchain is available.
- No PDF was generated. Generated PDF path: none.
- No LaTeX warnings or PDF layout blockers could be inspected because compilation did not run.
- No report claims, simulator source, helper source, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifacts, Extended Proposal files, Noxim rebuild, simulation run, final-sweep regeneration, regression command, `./regression.sh --update`, or performance claim was changed.
- `docs/DECISIONS.md` was not updated because no new durable decision was made.
- Final `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final parent status showed modified tracking docs and the pre-existing untracked `final_report.zip`.
- Final `external/noxim` status remained clean.

T0032 continuation result on 2026-05-11:

- Required startup reading was completed again before the continuation work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Before status checks, toolchain checks, or tracking-document edits, a short implementation plan was produced.
- Parent repository status before continuation documentation edits showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` ahead by two commits and the pre-existing untracked `final_report.zip`.
- The registered Noxim source tree at `external/noxim` remained clean before continuation documentation edits.
- Windows PATH still did not expose `latexmk`, `pdflatex`, `bibtex`, or `tectonic`.
- Common Windows TeX install locations checked during the continuation attempt did not expose a visible TeX install.
- `wsl.exe` exists, but `wsl -l -v` still reported no installed WSL distributions, so no WSL TeX environment is usable from this workspace.
- LaTeX compilation was not attempted because neither `latexmk` nor the `pdflatex` plus `bibtex` fallback toolchain is available.
- No PDF was generated. Generated PDF path: none.
- No LaTeX warnings or PDF layout blockers could be inspected because compilation did not run.
- No report claims, source code, simulator behavior, helper behavior, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifacts, Extended Proposal files, Noxim rebuild, simulation run, final-sweep regeneration, regression command, `./regression.sh --update`, or performance claim was changed.
- `docs/DECISIONS.md` was not updated because no new durable decision was made.
- Final `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final parent status showed modified tracking docs and the pre-existing untracked `final_report.zip`.
- Final `external/noxim` status remained clean.

T0032 final PDF generation result on 2026-05-11:

- Required startup reading was completed again before the successful retry: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Before status checks, toolchain checks, compilation, or tracking-document edits, a short implementation plan was produced.
- Parent repository status before the retry showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` ahead by two commits, modified tracking docs from earlier T0032 attempts, and the pre-existing untracked `final_report.zip`.
- The registered Noxim source tree at `external/noxim` remained clean before the retry.
- The sandbox-visible `wsl -l -v` still reported no installed WSL distributions, but the approved outside-sandbox WSL check showed Ubuntu running under WSL 2.
- Windows PATH still did not expose `latexmk`, `pdflatex`, `bibtex`, or `tectonic`.
- WSL Ubuntu did not expose `latexmk`; WSL Ubuntu did expose `pdflatex` at `/usr/bin/pdflatex` and `bibtex` at `/usr/bin/bibtex`.
- The fallback command sequence was run from `final_report/`: `pdflatex main.tex`, `bibtex main`, `pdflatex main.tex`, `pdflatex main.tex`.
- The first `pdflatex main.tex` attempt failed because `algorithmic.sty` was not installed. `algorithmic` was an unused template import, so `final_report/main.tex` was edited to remove only that package import.
- The first `bibtex main` attempt failed because `IEEEtran.bst` was not installed or present locally. No `IEEEtran.bst` file was found in the project tree, `Extended_Proposal.zip`, or WSL TeX installation; `final_report/main.tex` was edited to use the installed `ieeetr` bibliography style.
- After those claim-neutral TeX compatibility edits, `pdflatex main.tex`, `bibtex main`, `pdflatex main.tex`, and `pdflatex main.tex` completed with exit code `0`.
- Generated PDF path: `final_report/main.pdf`; absolute path: `C:\Projects\CMP-720-Project-Proposal\final_report\main.pdf`; size: 344758 bytes.
- Generated LaTeX build artifacts: `final_report/main.aux`, `final_report/main.bbl`, `final_report/main.blg`, `final_report/main.log`, `final_report/main.out`, and `final_report/main.pdf`.
- `file main.pdf` reported a PDF document, version 1.7. `pdfinfo` was not available in WSL.
- Final `main.log` inspection found no LaTeX errors, no fatal errors, no unresolved citations, no unresolved references, no rerun request, and no overfull boxes.
- Final `main.blg` inspection found BibTeX completed with zero warnings.
- Remaining layout diagnostics: 43 underfull box messages, mainly due to long path/code strings and dense explanatory paragraphs, one underfull vbox, and the standard IEEEtran camera-ready reminder to manually equalize final-page column lengths.
- No hard layout blocker was found in the log.
- No report claims, source code, simulator behavior, helper behavior, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifacts, Extended Proposal files, Noxim rebuild, simulation run, final-sweep regeneration, regression command, `./regression.sh --update`, or performance claim was changed.
- `docs/DECISIONS.md` was not updated because no new durable decision was made.
- Final `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files and `final_report/main.tex` only.
- Final parent status showed modified tracking docs, modified `final_report/main.tex`, generated untracked LaTeX build artifacts, and the pre-existing untracked `final_report.zip`.
- Final `external/noxim` status remained clean.

Expected future checks:

- If the PDF is packaged for submission, include `final_report/main.pdf` and the revised `final_report/main.tex`; optionally install or vendor exact `IEEEtran.bst` in a separate report-packaging cleanup if exact IEEEtran bibliography styling is required.
- If visual page inspection is requested, review `final_report/main.pdf` for final-page column balance and the underfull-box regions involving long path/code strings.

## Post-Final Experimental Extension Gate Validation

Purpose:

- Decide whether to start any high-risk experimental extension after final report revision and PDF generation.
- Compare the deferred options before any implementation: interposer-aware XY-like baseline routing, source-cutoff plus post-injection drain, route-compatible intra-chiplet comparison, PARSEC/GEM5 trace support, and no further experimental work.
- Record dependencies, risks, validation requirements, and blockers without modifying simulator source, report claims, generated artifacts, or final-report PDFs.

Known validation:

- Use existing project tracking documents, `docs/FINAL_REPORT_DRAFT.md`, `final_report/main.tex`, `Extended_Proposal.pdf`, `Proposal.pdf`, the original DeFT paper, and the registered Noxim source tree at `external/noxim`.
- Do not rerun simulations, rebuild Noxim, regenerate the final sweep, modify generated final-report PDF artifacts, install external dependencies, or use `./regression.sh --update`.
- For documentation-only gate decisions, use `git diff --check`, parent repository status, and `external/noxim` status checks.

T0036 result on 2026-05-11:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Before running commands or editing tracking documents, a short implementation plan was produced.
- Source-document checks used `Extended_Proposal.pdf` as the primary project requirements source and the original DeFT paper as the primary algorithmic reference. `Proposal.pdf` remained initial context only, and the peer evaluation document was ignored.
- T0036 selected no further experimental work for the current project phase.
- Validation implication for an interposer-aware XY-like baseline: would require a new routing design, source changes, Noxim build validation, route-level tests, regression or focused smokes, and new versioned comparison artifacts before any claim.
- Validation implication for source-cutoff plus post-injection drain: would require simulator/runner semantics design, source changes, build validation, drain/timeout tests, metric interpretation review, and new artifacts. It would not solve standard `XY` topology incompatibility by itself.
- Validation implication for route-compatible intra-chiplet comparison: could be lower risk than unrestricted inter-chiplet baseline work, but it would require an explicitly scoped traffic policy, config validation, artifact regeneration in a new output directory, and careful report wording because it would not evaluate the central inter-chiplet DeFT case.
- Validation implication for PARSEC/GEM5 trace support: would require external trace generation or import infrastructure, workload mapping, trace validation, simulator launch validation, and new analysis artifacts.
- Validation implication for no further experimental work: use documentation/status validation only and preserve the current final report PDF and final-sweep artifacts.
- Added ADR-0042 to record the durable decision to stop experimental work after the final report rather than start a high-risk post-final extension.
- No source code, report claims, simulator behavior, helper behavior, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifact, generated final-report PDF artifact, Extended Proposal file, Noxim rebuild, simulation run, final-sweep regeneration, external dependency installation, regression command, or `./regression.sh --update` was changed.
- Final `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final parent status showed modified tracking docs and the pre-existing untracked `final_report.zip`.
- Final `external/noxim` status remained clean.

Expected future checks:

- Do not start experimental validation after T0036 unless the user explicitly opens a new task.
- If a future user reopens one of the deferred experimental directions, begin with a design task that records source changes, validation commands, artifact directories, and claim limits before implementation.
- If final handoff is requested, perform status and documentation consistency checks only.

## Final Submission Handoff Validation

Purpose:

- Confirm final artifact paths, repository status, tracking-document consistency, and remaining blockers after post-final experimental work is closed.
- Preserve the generated final-report PDF, generated final-sweep artifacts, report claims, simulator behavior, and source code.
- Identify any packaging caveats without starting an experimental extension.

Known validation:

- Parent repository status: `git status --short --branch`
- Noxim submodule status: `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch`
- Documentation whitespace check: `git diff --check`
- Artifact existence and archive-content inspection only. Do not rebuild Noxim, rerun simulations, regenerate the final sweep, regenerate the final-report PDF, install dependencies, or use `./regression.sh --update`.

T0037 result on 2026-05-11:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Before status checks or tracking-document edits, a short implementation plan was produced. Assumption: the task is documentation-only and must not change code, generated artifacts, report claims, or simulation outputs. Blocked: none at task start.
- Source-document roles were preserved: `Extended_Proposal.pdf` is the primary requirements source, the original DeFT paper is the primary algorithmic reference, `Proposal.pdf` is initial context only, and the peer evaluation document was ignored completely.
- Confirmed final artifact paths: `final_report/main.pdf`, `final_report/main.tex`, `final_report/references.bib`, `final_report/IEEEtran.cls`, `final_report/README.md`, and `final_report/figures/schematic.png`.
- Confirmed generated PDF path: `final_report/main.pdf`; absolute path: `C:\Projects\CMP-720-Project-Proposal\final_report\main.pdf`; size: 344758 bytes. `final_report/main.log` records `Output written on main.pdf (5 pages, 344758 bytes)`.
- Final log handoff check found no LaTeX errors, no fatal errors, no unresolved citations, no unresolved references, and no overfull boxes. The remaining layout diagnostics are the previously recorded underfull boxes plus one underfull vbox.
- Confirmed final report-support paths: `external/noxim/other/generated/t0026_final_sweep_v1/`, `external/noxim/other/generated/t0026_final_analysis_v1/`, `external/noxim/other/generated/t0027_report_support_v1/`, and `external/noxim/other/generated/t0028_final_report_results_v1/report_results_draft.md`.
- Confirmed final-sweep artifact counts without rerunning anything: 150 JSON stats files, 300 log files, and 5 generated LUT files under `external/noxim/other/generated/t0026_final_sweep_v1/`.
- Parent repository status before T0037 documentation edits showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with only the pre-existing untracked `final_report.zip`.
- The registered Noxim source tree at `external/noxim` was clean before T0037 documentation edits.
- Handoff caveat: `final_report.zip` is stale. It is untracked, does not include `final_report/main.pdf`, and contains an older `final_report/main.tex` of 24531 bytes while the current source is 27449 bytes. It should not be used as the current final submission package unless refreshed in a separate packaging task.
- Handoff caveat: `docs/FINAL_REPORT_DRAFT.md` still contains an older note saying PDF generation remains blocked. Current tracking docs and `final_report/main.pdf` supersede that note, and it was left unchanged because T0037 was scoped to tracking-document updates.
- No source code, report claims, simulator behavior, helper behavior, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifact, generated final-report PDF artifact, Extended Proposal file, Noxim rebuild, simulation run, final-sweep regeneration, external dependency installation, regression command, or `./regression.sh --update` was changed.
- `docs/DECISIONS.md` was not updated because no new durable project decision was made.
- Final `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final parent status showed modified tracking docs and the pre-existing untracked `final_report.zip`.
- Final `external/noxim` status remained clean.

Expected future checks:

- If direct PDF submission is accepted, use `final_report/main.pdf` and the current `final_report/` source tree.
- If a zip/archive submission is required, refresh the archive in a separate packaging task and verify that it contains the current PDF and source files.
- Do not start new experimental validation unless the user explicitly opens a new task with a design and validation policy.

## Final Submission Package Validation

Purpose:

- Refresh and verify the final zip/archive package only when a zip/archive submission is required.
- Preserve the generated final-report PDF, generated final-sweep artifacts, report claims, simulator behavior, and source code.
- Confirm that the package includes the current PDF and allowed current report-source files.

Known validation:

- Parent repository status: `git status --short --branch`
- Noxim submodule status: `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch`
- Archive content inspection using PowerShell/.NET ZIP APIs.
- Documentation whitespace check: `git diff --check`
- Do not rebuild Noxim, rerun simulations, regenerate the final sweep, regenerate the final-report PDF, install dependencies, or use `./regression.sh --update`.

T0038 result on 2026-05-11:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Before status checks, package creation, or tracking-document edits, a short implementation plan was produced. Assumption: opening T0038 means a zip/archive package is required for submission. Blocked: none at task start.
- Confirmed current package inputs before archive creation: `final_report/main.pdf` (344758 bytes), `final_report/main.tex` (27449 bytes), `final_report/references.bib` (2683 bytes), `final_report/IEEEtran.cls` (281957 bytes), `final_report/README.md` (1296 bytes), and `final_report/figures/schematic.png` (241184 bytes).
- Parent repository status before archive creation showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with no tracked or untracked files listed.
- The registered Noxim source tree at `external/noxim` remained clean before archive creation.
- The previously documented stale `final_report.zip` was not present at task start, so T0038 created a fresh `final_report.zip`.
- The fresh archive contains exactly these entries: `final_report/main.pdf`, `final_report/main.tex`, `final_report/references.bib`, `final_report/IEEEtran.cls`, `final_report/README.md`, and `final_report/figures/schematic.png`.
- Verified archive entry sizes match the current files. The archive size is 659238 bytes and its SHA-256 hash is `C54186F6326B288C3C069FB396F23874CBE9A30DAD5913AA38A688E8444B5882`.
- No source code, report claims, simulator behavior, helper behavior, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifact, generated final-report PDF artifact, Extended Proposal file, Noxim rebuild, simulation run, final-sweep regeneration, external dependency installation, regression command, or `./regression.sh --update` was changed.
- `docs/DECISIONS.md` was not updated because no new durable project decision was made.
- Final `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final parent status showed modified tracking docs and untracked `final_report.zip`.
- Final `external/noxim` status remained clean.

Expected future checks:

- Use `final_report.zip` only if zip-based submission is needed.
- Use `final_report/main.pdf` and the current `final_report/` source tree for direct handoff.
- Do not start new experimental validation unless the user explicitly opens a new task with a design and validation policy.

## Future Backlog Planning Validation

Purpose:

- Convert known post-submission gaps into ordered future tasks without changing simulator behavior, report claims, generated artifacts, final-report PDFs, or package artifacts.
- Preserve current final submission readiness while making future development traceable.
- Record validation expectations for future design, implementation, experiment, feasibility, and report tasks before any work starts.

Known validation:

- Parent repository status: `git status --short --branch`
- Noxim submodule status: `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch`
- Documentation whitespace check: `git diff --check`
- Do not rebuild Noxim, rerun simulations, regenerate the final sweep, regenerate the final-report PDF, modify `final_report.zip`, install dependencies, or use `./regression.sh --update`.

T0039 result on 2026-05-11:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Before status checks or tracking-document edits, a short implementation plan was produced. Assumption: T0039 is a documentation/planning task and should not modify source, generated artifacts, report PDF artifacts, package artifacts, or report claims. Blocked: none at task start.
- The supplied future-backlog prompt was accepted as consistent with existing project decisions because it keeps final submission unblocked and treats high-risk work as future design, feasibility, implementation, experiment, or report tasks.
- Added T0039 as the completed backlog-analysis task and added future TODO tasks T0040 through T0048.
- The ordered backlog is: T0040 design IA-XY baseline; T0041 implement IA-XY baseline; T0042 run limited IA-XY-vs-DEFT comparison; T0043 design source-cutoff plus drain policy; T0044 implement and validate drain policy; T0045 evaluate directional fault modeling; T0046 assess PARSEC/GEM5 trace feasibility; T0047 implement PARSEC/GEM5 trace ingestion; T0048 regenerate report with new validated results.
- Future experiment tasks must use new artifact directories and must not overwrite T0026/T0027/T0028.
- Current final submission remains ready: `final_report/main.pdf`, the current `final_report/` source tree, and `final_report.zip`.
- Added ADR-0043 to record the durable rule that the post-submission backlog is non-blocking and artifact-isolated.
- No source code, helper source, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifact, final-report PDF artifact, `final_report.zip`, Extended Proposal file, Noxim rebuild, simulation run, final-sweep regeneration, final-report PDF regeneration, external dependency installation, regression command, or `./regression.sh --update` was changed.
- Final `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final `external/noxim` status remained clean.

Expected future checks:

- Start backlog tasks only if more development is required after submission.
- Start design or feasibility tasks before implementation when the task depends on new semantics, external workflows, or claim-impacting validation.
- Require new artifact directories for any future experiment.
- Update report text only after new validated artifacts exist.

## Interposer-Aware XY Baseline Design Validation

Purpose:

- Record the IA-XY baseline design before any routing implementation.
- Preserve the distinction between standard `XY` and the proposed interposer-aware `IA-XY` baseline.
- Define future implementation validation without changing simulator source, helper source, generated artifacts, final-report artifacts, or report claims during T0040.

Known validation for T0040:

- Parent repository status: `git status --short --branch`
- Noxim submodule status: `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch`
- Documentation whitespace check: `git diff --check`
- Source-document and source-tree inspection only. Do not rebuild Noxim, rerun simulations, regenerate the final sweep, regenerate the final-report PDF, modify `final_report.zip`, or use `./regression.sh --update`.

T0040 result on 2026-05-11:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Before editing tracking documents, a short implementation plan was produced. Assumption: T0040 is design-only and must not change source code, report artifacts, generated artifacts, package artifacts, or simulator behavior. Blocked: implementation and experiment claims remain future tasks.
- Source-document checks confirmed that `Extended_Proposal.pdf` is the primary project requirements source, the original DeFT paper is the primary algorithmic reference, `Proposal.pdf` is initial context only, and the peer evaluation document was ignored completely.
- Read-only source inspection used `external/noxim/src/routingAlgorithms/Routing_XY.cpp`, `external/noxim/src/routingAlgorithms/Routing_DEFT.cpp`, `external/noxim/src/routingAlgorithms/RoutingAlgorithms.cpp`, `external/noxim/src/GlobalParams.h`, `external/noxim/src/ConfigurationManager.cpp`, `external/noxim/src/DeftTopology.h`, `external/noxim/src/DeftVirtualNetwork.cpp`, `external/noxim/src/Router.cpp`, `external/noxim/bin/Makefile`, and `external/noxim/bin/power.yaml`.
- The design defines IA-XY as a new proposed `INTERPOSER_AWARE_XY` baseline, not standard `XY`.
- Standard `XY` remains cardinal-only and unchanged.
- IA-XY future behavior is phased: same-chiplet local XY; source-chiplet local XY to a selected functional source VL; VL traversal to the active interposer; interposer XY to a selected functional destination entry; VL traversal into the destination chiplet; destination-local XY to the final destination.
- IA-XY may avoid known faulty physical VLs through current `DeftTopology` functional-state queries, but it must not use the DeFT schema-v1 LUT, DeFT VL optimization, or new traffic/metric semantics.
- Added ADR-0044 to record the durable design decision that IA-XY is a separate interposer-aware baseline and not a reinterpretation of standard `XY`.
- No source code, helper source, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifact, final-report PDF artifact, `final_report.zip`, Extended Proposal file, Noxim rebuild, simulation run, final-sweep regeneration, final-report PDF regeneration, regression command, or `./regression.sh --update` was changed.
- Final `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final parent status showed modified tracking docs only: `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- Final `external/noxim` status remained clean.

Expected future T0041 checks:

- Confirm `external/noxim` is clean before source edits.
- Use the known Noxim build command from `external/noxim`: `./build.sh`.
- Add a separately selectable `INTERPOSER_AWARE_XY` routing mode without changing standard `XY` or `DEFT`.
- Run targeted smokes only after the new mode builds: route registration/config loading, same-chiplet local XY behavior, inter-chiplet no-fault VL/interposer traversal, and explicit-fault fallback to an alternate functional VL.
- Define concrete smoke commands in T0041 only after the new config files and any tiny hardcoded traffic inputs exist.
- Do not run a full IA-XY-vs-DeFT matrix, do not overwrite T0026/T0027/T0028, and do not use `./regression.sh --update`.

## Interposer-Aware XY Baseline Implementation Validation

Purpose:

- Validate that `INTERPOSER_AWARE_XY` is separately selectable and scoped to `DEFT_2_5D`.
- Validate same-chiplet IA-XY behavior without interposer traversal.
- Validate inter-chiplet IA-XY behavior through functional VLs and the active interposer.
- Validate explicit-fault fallback to another functional VL when possible.
- Preserve standard `XY`, `DEFT`, VN transition restrictions, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifacts, final-report artifacts, and Extended Proposal files.

Known validation for T0041:

- Build from `external/noxim`: `./build.sh`
- Route registration/config loading smoke from `external/noxim/bin`: run `./noxim` with `../config_examples/deft_2_5d_interposer_aware_xy_baseline.yaml`, `-seed 0`, `-sim 20`, and `-warmup 0`.
- Same-chiplet smoke: run `INTERPOSER_AWARE_XY` with hardcoded traffic `../config_examples/deft_2_5d_ia_xy_smoke_same_chiplet.txt` containing `0 3`, debug router logging, JSON stats export, `-sim 80`, and `-warmup 0`.
- Inter-chiplet no-fault smoke: run `INTERPOSER_AWARE_XY` with hardcoded traffic `../config_examples/deft_2_5d_ia_xy_smoke_inter_chiplet.txt` containing `0 63`, debug router logging, JSON stats export, `-sim 160`, and `-warmup 0`.
- Explicit-fault fallback smoke: repeat the inter-chiplet smoke with `-deft_faulty_vls 0`.
- Whitespace checks: `git diff --check` in the parent repository and `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check`.
- Generated-artifact guard: check that `external/noxim/other/generated/t0026_final_sweep_v1`, `t0026_final_analysis_v1`, `t0027_report_support_v1`, and `t0028_final_report_results_v1` have no changed files.

T0041 result on 2026-05-11:

- Required startup reading was completed before task work, including `AGENTS.md`, all required tracking documents, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Parent repository and `external/noxim` were clean before source edits, using the documented safe-directory form for `external/noxim`.
- `./build.sh` completed with exit code `0` in WSL Ubuntu. The only compiler warnings were pre-existing `Router.cpp` warnings.
- Route registration/config loading smoke completed with exit code `0`, reported routing `INTERPOSER_AWARE_XY`, DeFT LUT disabled, active fault mask `0x0000`, and four functional VLs per chiplet.
- Same-chiplet `0 -> 3` smoke completed with exit code `0`, injected and received one packet/eight flits, and produced no `IA-XY` VL traversal debug entries.
- Inter-chiplet no-fault `0 -> 63` smoke completed with exit code `0`, injected and received one packet/eight flits, and logged source exit `vl_id=0` plus destination entry `vl_id=12`.
- Explicit-fault `0 -> 63` smoke with `-deft_faulty_vls 0` completed with exit code `0`, reported active fault mask `0x0001`, injected and received one packet/eight flits, and logged fallback source exit `vl_id=1` instead of faulty `vl_id=0`.
- External `diff --check` completed with exit code `0`.
- Final parent `git diff --check` completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- The generated-artifact guard returned no changed files for T0026/T0027/T0028 artifact directories.
- The final-report and Extended Proposal artifact status guard returned no changed files for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, or `Extended_Proposal.zip`.
- Final `external/noxim` status shows the intended T0041 source/config changes and no generated final-sweep artifact changes.
- The smokes validate implementation behavior only. They do not support IA-XY-vs-DEFT performance claims.

## Limited IA-XY vs DeFT Comparison Validation

Purpose:

- Run only the approved T0042 limited IA-XY-vs-DEFT matrix.
- Preserve standard `XY`, `DEFT`, VN transition restrictions, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis source semantics, generated final-sweep artifacts, final-report artifacts, and Extended Proposal files.
- Record commands, return codes, manifest paths, log paths, stats paths, and blank-aware claim limits.

Known validation for T0042:

- Parent repository status: `git status --short --branch`
- Noxim submodule status: `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch`
- Limited matrix launcher from WSL Ubuntu:

```bash
cd /mnt/c/Projects/CMP-720-Project-Proposal/external/noxim
python3 other/generated/t0042_iaxy_deft_limited_v1/run_t0042_limited.py
```

- Mechanical analysis scaffold:

```bash
cd /mnt/c/Projects/CMP-720-Project-Proposal/external/noxim
python3 other/deft_analysis_artifacts.py --input-dir other/generated/t0042_iaxy_deft_limited_v1 --output-dir other/generated/t0042_iaxy_deft_limited_v1/analysis --dataset-kind smoke
```

- Blank-aware cross-check:

```bash
cd /mnt/c/Projects/CMP-720-Project-Proposal/external/noxim
python3 other/generated/t0042_iaxy_deft_limited_v1/analyze_t0042_blank_aware.py
```

T0042 result on 2026-05-11:

- Required startup reading was completed before execution: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- The T0040 IA-XY design and T0041 IA-XY implementation notes in `docs/ARCHITECTURE.md` were read before execution.
- Source-document roles were preserved: `Extended_Proposal.pdf` is the primary project requirements source, the original DeFT paper is the primary algorithmic reference, `Proposal.pdf` is initial context only, and the peer evaluation document was ignored completely.
- Parent repository status before execution was clean on `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points`.
- `external/noxim` status before execution was clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- Existing generated artifact directories were confirmed before execution: `t0026_final_sweep_v1`, `t0026_final_analysis_v1`, `t0027_report_support_v1`, and `t0028_final_report_results_v1`.
- A short implementation/experiment plan and the exact limited matrix were documented before simulator execution.
- Matrix: routings `INTERPOSER_AWARE_XY` and `DEFT`; traffic profiles `uniform`, `localized_40`, and `hotspot_3x10`; fault masks `0x0000` and `0x1111`; seeds `0` and `1`; `-sim 10000`; `-warmup 1000`; JSON stats; 24 planned runs.
- New artifact directory: `external/noxim/other/generated/t0042_iaxy_deft_limited_v1/`.
- A default WSL attempt failed before simulator execution because no default WSL distribution was configured. Command: `wsl -u root -- bash -lc "cd /mnt/c/Projects/CMP-720-Project-Proposal/external/noxim && python3 other/generated/t0042_iaxy_deft_limited_v1/run_t0042_limited.py"`. Return code: `1`.
- The Ubuntu WSL launch command completed with exit code `0`: `wsl -d Ubuntu -u root -- bash -lc "cd /mnt/c/Projects/CMP-720-Project-Proposal/external/noxim && python3 other/generated/t0042_iaxy_deft_limited_v1/run_t0042_limited.py"`.
- Run manifest: `external/noxim/other/generated/t0042_iaxy_deft_limited_v1/manifest.json`.
- Command listing: `external/noxim/other/generated/t0042_iaxy_deft_limited_v1/commands.sh`.
- Per-run summary: `external/noxim/other/generated/t0042_iaxy_deft_limited_v1/summary.csv`.
- Per-run log paths are recorded in `manifest.json` and written under `external/noxim/other/generated/t0042_iaxy_deft_limited_v1/logs/`.
- Per-run JSON stats paths are recorded in `manifest.json` and written under `external/noxim/other/generated/t0042_iaxy_deft_limited_v1/stats/`.
- Generated DEFT LUTs are under `external/noxim/other/generated/t0042_iaxy_deft_limited_v1/luts/`.
- Mechanical analysis command completed with exit code `0` and produced `external/noxim/other/generated/t0042_iaxy_deft_limited_v1/analysis/analysis_manifest.json`, `run_summary.csv`, `comparison_summary.csv`, and `report_scaffold.md`.
- Blank-aware cross-check completed with exit code `0` and produced `blank_aware_condition_summary.csv`, `blank_aware_pair_summary.csv`, `blank_aware_validation.json`, and `blank_aware_report.md`.
- `blank_aware_validation.json` reports `cross_check_passed: true`, `run_count: 24`, `completed_count: 24`, `return_code_zero_count: 24`, `stats_file_count: 24`, `stdout_file_count: 24`, `stderr_file_count: 24`, no summary metric mismatches, no config mismatches, no missing artifacts, and no unexpected matrix values.
- IA-XY hotspot cells injected zero packets for both fault masks and both seeds, so the blank-aware pair summary marks those cells `not_comparison_ready_iaxy_empty`.
- IA-XY uniform/no-fault injected packets but received zero packets, so latency remains blank for that cell.
- The remaining packet-carrying IA-XY/DEFT cells are descriptive side-by-side only and do not support ranking, improvement, or statistical claims.
- No source code was changed during T0042. Standard `XY`, `DEFT`, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, and runner/analysis source semantics were preserved.
- `git diff --check` completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- Final `external/noxim` status was clean on `feat/baseline-noxim...origin/feat/baseline-noxim`; generated T0042 artifacts are ignored under `external/noxim/other/generated/`.
- A generated-artifact guard returned no changed files for `external/noxim/other/generated/t0026_final_sweep_v1`, `t0026_final_analysis_v1`, `t0027_report_support_v1`, and `t0028_final_report_results_v1`.
- A final-report and proposal artifact guard returned no changed files for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, or `Extended_Proposal.zip`.
- Final parent status showed only modified tracking docs: `docs/ARCHITECTURE.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- T0042 does not change the current final submission status and does not update `final_report/main.pdf`, `final_report.zip`, or Extended Proposal files.

## Source-Cutoff and Post-Injection Drain Policy Design Validation

Purpose:

- Record source-cutoff plus drain/timeout semantics before implementation.
- Preserve T0026/T0027/T0028 and T0042 as historical fixed-window artifacts.
- Confirm the policy is design-only and does not modify simulator source, helper source, routing behavior, traffic behavior, metric exports, runner semantics, generated artifacts, final-report artifacts, package artifacts, or Extended Proposal files.

Known validation for T0043:

- Parent repository status before edits: `git status --short --branch`
- Noxim submodule status before and after edits: `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch`
- Documentation whitespace check: `git diff --check`
- Generated-artifact guard for T0026/T0027/T0028 and T0042 generated directories.
- Final-report and proposal artifact guard for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, and `Extended_Proposal.zip`.
- Do not rebuild Noxim, run simulations, regenerate final sweeps, regenerate `final_report/main.pdf`, modify `final_report.zip`, modify Extended Proposal files, or use `./regression.sh --update`.

T0043 result on 2026-05-12:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Source-document roles were preserved: `Extended_Proposal.pdf` is the primary project requirements source, the original DeFT paper is the primary algorithmic reference, `Proposal.pdf` is initial context only, and the peer evaluation document was ignored completely.
- Parent repository status before edits was clean on `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points`.
- A plain `external/noxim` status command hit Git's safe-directory guard; the documented safe-directory status command was then used and reported a clean `external/noxim` worktree on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- Before editing, a short design plan was produced. Assumption: T0043 is design-only and must preserve current fixed-window artifacts and final submission artifacts as historical evidence. Blocked: eventual-delivery claims remain blocked until a later implementation task adds and validates the accepted cutoff/drain/timeout behavior.
- Read-only source inspection confirmed current `-sim` runs a fixed continuous-injection window through `Main.cpp`, current `-volume` stops on delivered flits through `Router.cpp` and does not provide source cutoff, `ProcessingElement.cpp` owns packet generation and injection counters, and `GlobalStats.cpp` exports the current fixed-window denominator fields.
- The accepted design defines source cutoff, drain start, source quiescence, in-flight empty, explicit timeout, metric denominators, warm-up interaction, differences from fixed-window `-sim`, differences from current Noxim `-volume`, likely future implementation surfaces, and expected future smoke cases.
- T0043 records drain mode as an opt-in future mode. Current fixed-window `-sim` and current `-volume` behavior remain the existing behavior unless T0044 explicitly implements an opt-in drain mode.
- No simulator source, helper source, routing logic, standard `XY`, `DEFT`, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, Noxim build, simulation run, final-sweep regeneration, final-report PDF regeneration, package artifact, Extended Proposal file, or `./regression.sh --update` was changed.
- T0026/T0027/T0028 final fixed-window artifacts and the T0042 exploratory fixed-window artifact set remain historical artifacts. T0043 does not reinterpret them as eventual-delivery evidence.
- T0043 adds ADR-0046 to record the durable opt-in source-cutoff plus drain policy.
- `git diff --check` completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final `external/noxim` status remained clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- The generated-artifact guard returned no changed files for `external/noxim/other/generated/t0026_final_sweep_v1`, `t0026_final_analysis_v1`, `t0027_report_support_v1`, `t0028_final_report_results_v1`, or `t0042_iaxy_deft_limited_v1`.
- The final-report and proposal artifact guard returned no changed files for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, or `Extended_Proposal.zip`.
- Final parent status showed only modified tracking docs: `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.

## Source-Cutoff and Post-Injection Drain Policy Implementation Validation

Purpose:

- Validate the T0044 opt-in source-cutoff plus drain/timeout implementation.
- Preserve existing fixed-window `-sim` behavior and current `-volume` behavior when drain mode is disabled.
- Confirm the implementation does not modify standard `XY`, `DEFT`, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, generated final-sweep artifacts, final-report artifacts, package artifacts, or Extended Proposal files.

Known validation for T0044:

- Parent repository status before edits: `git status --short --branch`
- Noxim source-tree status before and after edits: `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch`
- Known Noxim build command from `external/noxim`: `./build.sh`
- Targeted smoke commands from `external/noxim/bin` with `LD_LIBRARY_PATH=libs/systemc-2.3.1/lib-linux64`
- Documentation/source whitespace checks: `git diff --check` and `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check`
- Generated-artifact guard for T0026/T0027/T0028 and T0042 generated directories.
- Final-report and proposal artifact guard for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, and `Extended_Proposal.zip`.
- Do not run full sweeps, regenerate `final_report/main.pdf`, modify `final_report.zip`, modify Extended Proposal files, or use `./regression.sh --update`.

T0044 result on 2026-05-12:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- The T0043 drain policy in `docs/ARCHITECTURE.md` and ADR-0046 in `docs/DECISIONS.md` were read before source edits.
- Source-document roles were preserved: `Extended_Proposal.pdf` is the primary project requirements source, the original DeFT paper is the primary algorithmic reference, `Proposal.pdf` is initial context only, and the peer evaluation document was ignored completely.
- Parent repository status before edits was clean on `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points`; `external/noxim` status before edits was clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- Before editing, a short implementation plan was produced. Assumption: implement the accepted T0043 policy directly in simulator phase control with source-gated warm-up. Blocked: none at task start; eventual-delivery report claims remain blocked until a later experiment task creates new versioned drain-mode artifacts.
- The known build command `./build.sh` was run from `external/noxim`. The first WSL invocation timed out while compilation continued; after confirming no build process remained, the incremental rerun completed with exit code `0`.
- A no-fault DEFT LUT was generated only for smokes: `python3 ../other/deft_vl_lut_generator.py --fault-mask 0x0000 --output ../other/generated/t0044_drain_smokes/deft_vl_lut_0x0000.yaml`.
- No-traffic immediate drain smoke: `./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 20 -warmup 0 -drain_mode -drain_source_cutoff 1 -drain_timeout 20 -stats_format json -stats_file ../other/generated/t0044_drain_smokes/no_traffic.json`.
- Same-chiplet hardcoded delivery smoke: `./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 80 -warmup 0 -traffic hardcoded ../config_examples/deft_2_5d_drain_smoke_same_chiplet.txt -drain_mode -drain_source_cutoff 1 -drain_timeout 80 -stats_format json -stats_file ../other/generated/t0044_drain_smokes/same_chiplet.json`.
- Inter-chiplet `DEFT` no-fault LUT smoke: `./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 200 -warmup 0 -routing DEFT -deft_vl_lut ../other/generated/t0044_drain_smokes/deft_vl_lut_0x0000.yaml -traffic hardcoded ../config_examples/deft_2_5d_drain_smoke_inter_chiplet.txt -drain_mode -drain_source_cutoff 1 -drain_timeout 200 -stats_format json -stats_file ../other/generated/t0044_drain_smokes/inter_deft.json`.
- Cutoff suppression smoke: `./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 80 -warmup 0 -traffic hardcoded ../config_examples/deft_2_5d_drain_smoke_cutoff.txt -drain_mode -drain_source_cutoff 1 -drain_timeout 80 -stats_format json -stats_file ../other/generated/t0044_drain_smokes/cutoff.json`.
- Timeout smoke: `./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 40 -warmup 0 -traffic hardcoded ../config_examples/deft_2_5d_drain_smoke_inter_chiplet.txt -drain_mode -drain_source_cutoff 1 -drain_timeout 40 -stats_format json -stats_file ../other/generated/t0044_drain_smokes/timeout.json`.
- Warm-up gating smoke: `./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 80 -warmup 5 -traffic hardcoded ../config_examples/deft_2_5d_drain_smoke_same_chiplet.txt -drain_mode -drain_source_cutoff 1 -drain_timeout 80 -stats_format json -stats_file ../other/generated/t0044_drain_smokes/warmup.json`.
- Disabled fixed-window compatibility smoke: `./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 80 -warmup 0 -traffic hardcoded ../config_examples/deft_2_5d_drain_smoke_same_chiplet.txt -stats_format json -stats_file ../other/generated/t0044_drain_smokes/disabled_fixed_window.json`.
- Disabled `-volume` compatibility smoke: `./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 80 -warmup 0 -traffic hardcoded ../config_examples/deft_2_5d_drain_smoke_same_chiplet.txt -volume 8 -stats_format json -stats_file ../other/generated/t0044_drain_smokes/disabled_volume.json`.
- Smoke results: `no_traffic`, `same_chiplet`, `inter_deft`, `cutoff`, and `warmup` stopped with `drain_completed`; `timeout` stopped with `drain_timeout`; disabled fixed-window and disabled `-volume` smokes exported no drain-mode fields.
- Packet counts: no-traffic injected/received `0/0`; same-chiplet `1/1`; inter-chiplet `1/1`; cutoff `1/1`; timeout `1/0`; warm-up `1/1`; disabled fixed-window `1/1`; disabled `-volume` `1/1`.
- Timeout smoke exported one undelivered packet, eight undelivered flits, seven router-buffer flits, two router reservations, and one pending handshake at stop.
- Warm-up gating smoke exported `drain_measurement_start_cycle = 1005` and `drain_source_cutoff_cycle = 1006`.
- The first inline Bash/Python JSON verifier had a here-document delimiter issue after simulator commands completed. A PowerShell JSON verifier was rerun and passed with exit code `0`.
- T0044 added ADR-0047 to record that drain mode and current `-volume` are mutually exclusive; disabled-mode smokes validate that `-volume` remains available when drain mode is disabled.
- T0026/T0027/T0028 final fixed-window artifacts and the T0042 exploratory fixed-window artifact set remain historical artifacts. T0044 does not reinterpret them as eventual-delivery evidence.
- `git diff --check` completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- Final `external/noxim` status shows only the T0044 source/config-example changes listed in `docs/TASKS.md` on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- The generated-artifact guard returned no changed files for `external/noxim/other/generated/t0026_final_sweep_v1`, `t0026_final_analysis_v1`, `t0027_report_support_v1`, `t0028_final_report_results_v1`, or `t0042_iaxy_deft_limited_v1`.
- The final-report and proposal artifact guard returned no changed files for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, or `Extended_Proposal.zip`.
- Final parent status shows modified tracking docs plus the modified nested `external/noxim` source tree; no protected final-report, package, or Extended Proposal artifacts are modified.

## Directional Endpoint Fault Modeling Feasibility Validation

Purpose:

- Compare the current physical bidirectional VL fault model with the original DeFT paper's directional fault-rate interpretation.
- Record the implementation surfaces that would be affected by directional endpoint faults.
- Preserve existing simulator behavior, source code, schema-v1 LUTs, generated artifacts, final-report artifacts, package artifacts, and Extended Proposal files.

Known validation for T0045:

- Parent repository status before edits: `git status --short --branch`
- Noxim source-tree status before and after edits: `git status --short --branch` from `external/noxim`
- Documentation whitespace check: `git diff --check`
- Generated-artifact guard for T0026/T0027/T0028 and T0042 generated directories.
- Final-report and proposal artifact guard for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, and `Extended_Proposal.zip`.
- Do not rebuild Noxim, run simulations, regenerate final sweeps, regenerate `final_report/main.pdf`, modify `final_report.zip`, modify Extended Proposal files, or use `./regression.sh --update`.

T0045 result on 2026-05-12:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Source-document roles were preserved: `Extended_Proposal.pdf` is the primary project requirements source, the original DeFT paper is the primary algorithmic reference, `Proposal.pdf` is initial context only, and the peer evaluation document was ignored completely.
- Parent repository status before edits was clean on `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points`.
- `external/noxim` status before edits was clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- Before editing, a short feasibility plan was produced. Assumption: T0045 is documentation-only and should make no simulator, LUT, topology, routing, or artifact changes. Blocked: no blocker at task start; implementation of single-direction fault cases remains blocked unless this feasibility task accepts a follow-up implementation policy.
- Source-document inspection found the extended proposal's tension between four bidirectional VLs per chiplet and 3.125% through 25% fault-rate wording, and found the original DeFT paper's four-chiplet `total VLs=32` reachability denominator.
- Read-only source inspection confirmed that current fault injection, validation, LUT generation, runtime lookup, stats labels, runner masks, `DEFT`, and IA-XY use physical bidirectional VL state and physical fault masks.
- T0045 records a deferral decision in ADR-0048: preserve the existing physical model and existing artifacts; add directional endpoint support only through a future versioned fault-model task with per-direction state, new config/CLI fields, schema-v2 LUT generation/runtime lookup, directional route checks, new validation, and new artifact directories.
- No source code, simulator behavior, standard `XY`, `DEFT`, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, generated artifacts, simulations, Noxim rebuild, final-report PDF, package artifact, Extended Proposal file, or `./regression.sh --update` was changed.
- `git diff --check` completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final `external/noxim` status remained clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- The generated-artifact guard returned no changed files for `external/noxim/other/generated/t0026_final_sweep_v1`, `t0026_final_analysis_v1`, `t0027_report_support_v1`, `t0028_final_report_results_v1`, or `t0042_iaxy_deft_limited_v1`.
- The final-report and proposal artifact guard returned no changed files for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, or `Extended_Proposal.zip`.
- Final parent status showed only modified tracking docs: `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.

## PARSEC/GEM5 Trace Support Feasibility Validation

Purpose:

- Assess PARSEC/GEM5 dependency availability and trace-ingestion burden without installing dependencies or importing traces.
- Record the minimum trace schema and workload-mapping considerations before any implementation.
- Preserve existing simulator behavior, source code, traffic generation, metrics, runner/analysis behavior, generated artifacts, final-report artifacts, package artifacts, and Extended Proposal files.

Known validation for T0046:

- Parent repository status before edits: `git status --short --branch`
- Noxim source-tree status before and after edits: `git status --short --branch` from `external/noxim`
- Documentation whitespace check: `git diff --check`
- Generated-artifact guard for T0026/T0027/T0028 and T0042 generated directories.
- Final-report and proposal artifact guard for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, `Extended_Proposal.zip`, and Extended Proposal source files.
- Do not rebuild Noxim, run simulations, install dependencies, import or generate traces, regenerate final sweeps, regenerate `final_report/main.pdf`, modify `final_report.zip`, modify Extended Proposal files, or use `./regression.sh --update`.

T0046 result on 2026-05-12:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Source-document roles were preserved: `Extended_Proposal.pdf` is the primary project requirements source, the original DeFT paper is the primary algorithmic reference, `Proposal.pdf` is initial context only, and the peer evaluation document was ignored completely.
- Parent repository status before edits was clean on `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points`.
- `external/noxim` status before edits was clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- Before editing, a short feasibility plan was produced. Assumption: T0046 is documentation-only and should make no simulator, dependency, trace, traffic, metrics, runner, analysis, report-artifact, package-artifact, or Extended Proposal changes. Blocked: PARSEC/GEM5 workload claims remain blocked until a reproducible external trace-generation or trace-import pipeline and Noxim ingestion/validation path exist.
- Source-document inspection confirmed that the extended proposal describes real-application PARSEC traces generated via GEM5, and the original DeFT paper reports PARSEC/GEM5 evaluation with a 64-core x86 full-system setup and eight PARSEC workloads.
- Dependency inspection found no GEM5/PARSEC source tree, full-system image/checkpoint, trace-generation script, trace input, or Noxim-ready application trace schema in the repository. Windows PATH did not expose `gem5`; WSL Ubuntu exposed `/usr/bin/python3` but not `gem5.opt`, `gem5`, or `scons`, and checked `/parsec`, `/opt/parsec`, and `/opt/gem5` directories were absent.
- Read-only Noxim inspection confirmed that current VCD tracing is debug output rather than workload input, `TRAFFIC_TABLE_BASED` supports aggregate `src dst [pir [por [t_on t_off t_period]]]` rows, and `TRAFFIC_HARDCODED` supports cycle-delimited `src dst` packet entries only.
- T0046 records a deferral decision in ADR-0049: do not claim PARSEC/GEM5 workload support until a versioned trace schema, tiny fixture, mapping policy, dependency provenance, invalid-trace rejection, and small Noxim smoke validation exist.
- No source code, simulator behavior, standard `XY`, `DEFT`, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, traffic behavior, metrics, runner/analysis behavior, generated artifacts, simulations, Noxim rebuild, final-report PDF, package artifact, Extended Proposal file, dependency installation, trace import/generation, or `./regression.sh --update` was changed.
- `git diff --check` completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final `external/noxim` status remained clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- The generated-artifact guard returned no changed files for `external/noxim/other/generated/t0026_final_sweep_v1`, `t0026_final_analysis_v1`, `t0027_report_support_v1`, `t0028_final_report_results_v1`, or `t0042_iaxy_deft_limited_v1`.
- The final-report and proposal artifact guard returned no changed files for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, `Extended_Proposal.zip`, or `Extended_Proposal/`.
- Final parent status showed only modified tracking docs: `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.

## Reachability Closure Planning Validation

Purpose:

- Record the validation limits for T0049, which reopens project completion around drain-based DeFT reachability closure.
- Define the validation expectations for the next diagnostic task without changing source behavior or historical artifacts.

Known validation for T0049:

- Parent repository status before edits: `git status --short --branch`
- Noxim source-tree status before edits: `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch`
- Documentation whitespace check: `git diff --check`
- Noxim source-tree status after validation.
- Generated-artifact guard for T0026/T0027/T0028 and T0042 generated directories.
- Final-report and proposal artifact guard for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, `Extended_Proposal.zip`, and Extended Proposal source files.
- Do not rebuild Noxim, run simulations, edit source code, regenerate final sweeps, regenerate `final_report/main.pdf`, modify `final_report.zip`, modify Extended Proposal files, or use `./regression.sh --update`.

T0049 result on 2026-05-27:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, and `docs/ARCHITECTURE.md`. Additional tracking files `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md` were inspected because the task updates them.
- Source-document roles were preserved: `Extended_Proposal.pdf` is the primary project requirements source, the original DeFT paper is the primary algorithmic reference, `Proposal.pdf` is initial context only, and the peer evaluation document was ignored completely.
- Parent status before edits showed only untracked presentation-support files. `external/noxim` status before edits was clean.
- Before editing, a short documentation plan was produced. Assumption: T0049 is planning-only and should not make simulator, source, artifact, or report-claim changes. Blocked: A future 100% DeFT reachability claim remains blocked until a new drain-mode validation artifact set supports it.
- T0049 added the Phase 10 reachability-closure direction, ADR-0050, and follow-up tasks T0050 through T0053.
- T0049 did not run simulations, rebuild Noxim, edit source code, regenerate generated artifacts, modify `final_report/main.pdf`, modify `final_report.zip`, modify Extended Proposal files, or use `./regression.sh --update`.
- `git diff --check` completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final `external/noxim` status remained clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- The generated-artifact guard returned no changed files for `external/noxim/other/generated/t0026_final_sweep_v1`, `t0026_final_analysis_v1`, `t0027_report_support_v1`, `t0028_final_report_results_v1`, or `t0042_iaxy_deft_limited_v1`.
- The final-report and proposal artifact guard returned no changed files for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, `Extended_Proposal.zip`, or `Extended_Proposal/`.

Expected future validation for T0050:

- Define any diagnostic matrix before execution.
- Write generated outputs only to a new ignored `external/noxim/other/generated/t0050_*` directory.
- Prefer deterministic drain-mode hardcoded-packet diagnostics before any broader matrix.
- Record routing mode, fault mask, source, destination, stop reason, injected/received counts, undelivered counts, and suspected route phase for every failing case.
- Preserve historical T0026/T0027/T0028, T0042, final-report, package, and Extended Proposal artifacts.

T0050 result on 2026-05-28:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Source-document roles were preserved: `Extended_Proposal.pdf` is the primary project requirements source, the original DeFT paper is the primary algorithmic reference, `Proposal.pdf` is initial context only, and the peer evaluation document was ignored completely.
- Parent status before diagnostics was clean on `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with the branch ahead by one commit. Direct `external/noxim` status hit Git's safe-directory ownership guard, and the per-command safe-directory override reported a clean `feat/baseline-noxim...origin/feat/baseline-noxim` tree.
- Read-only inspection covered DeFT routing phases, `DeftTopology` router/VL/boundary mapping, `DeftVirtualNetwork` assignment and transition filtering, output-VC-aware reservations, schema-v1 LUT lookup and active fault-mask derivation, fault-mask application, drain empty detection/accounting, and hardcoded traffic parsing.
- The exact diagnostic matrix was defined before simulator execution and written to `external/noxim/other/generated/t0050_deft_reachability_diagnosis_v1/matrix.tsv`.
- Generated diagnostic artifacts were written only under ignored `external/noxim/other/generated/t0050_deft_reachability_diagnosis_v1/`, including `commands.sh`, `matrix.tsv`, generated traffic files, generated LUT `luts/deft_vl_lut_t0050.yaml`, 12 JSON stats files, stdout/stderr logs, `summary.csv`, `failing_cases.csv`, and `manifest.json`.
- The matrix ran 12 deterministic `DEFT` drain-mode cases: one same-chiplet control, five no-fault inter-chiplet source/destination samples, four single/four-physical-fault cases, and two tiny multi-packet cases.
- All 12 cases completed with return code `0`, stop reason `drain_completed`, measured injected packets equal to measured received packets, zero undelivered packets/flits, zero router-buffer flits, zero reservations, and zero pending handshakes at stop. `failing_cases.csv` contains no failing rows.
- No concrete DeFT routing, topology, VN transition, LUT lookup, fault-mask, hardcoded-traffic, or drain-accounting bug was isolated. The sampled gap is most consistent with fixed-window continuous-injection measurement/load semantics, but this is not a universal reachability claim.
- No source code, simulator behavior, standard `XY`, `DEFT`, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, traffic-generation behavior, metrics/runner/analysis behavior, generated final sweep artifacts, final-report claims, final-report PDF/package artifacts, Extended Proposal files, or `./regression.sh --update` was changed.
- `git diff --check` completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final `external/noxim` status remained clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- The generated-artifact guard returned no changed files for `external/noxim/other/generated/t0026_final_sweep_v1`, `t0026_final_analysis_v1`, `t0027_report_support_v1`, `t0028_final_report_results_v1`, or `t0042_iaxy_deft_limited_v1`.
- The final-report and proposal artifact guard returned no changed files for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, `Extended_Proposal.zip`, or `Extended_Proposal/`.
- Final parent status showed only modified tracking docs: `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.

T0052 result on 2026-05-28:

- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Source-document roles were preserved: `Extended_Proposal.pdf` is the primary project requirements source, the original DeFT paper is the primary algorithmic reference, `Proposal.pdf` is initial context only, and the peer evaluation document was ignored completely.
- Parent status before validation was clean on `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with the branch ahead by two commits. `external/noxim` status before validation was clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- The exact T0052 matrix, timeout policy, artifact directory, and summary fields were defined before simulator execution. Assumption: the accepted physical fault-mask ladder is `0x0000`, `0x0001`, `0x0011`, `0x0111`, and `0x1111`. Assumption: seed `0` is sufficient for the deterministic hardcoded fixture. Blocked: 100% reachability and final-report claim updates remain blocked.
- Generated outputs were written only under ignored `external/noxim/other/generated/t0052_deft_drain_reachability_v1/`.
- The matrix used `DEFT` only, seed `0`, opt-in drain mode, `-warmup 0`, source cutoff `4032`, drain timeout `20000`, a generated schema-v1 LUT for all five masks, and one deterministic hardcoded fixture covering all 4032 ordered valid source/destination pairs over chiplet routers `0..63`.
- The artifact set contains the runner, `README.txt`, `matrix.tsv`, copied config fixture, pair coverage CSV, traffic fixture, generated LUT, `commands.sh`, five JSON stats files, stdout/stderr logs including LUT-generation logs, `return_codes.tsv`, `summary.csv`, `failing_cases.csv`, and `manifest.json`.
- Artifact sanity checks found five summary rows, five stats files, six stdout logs, six stderr logs, 4032 pair-coverage rows, and 8064 traffic lines.
- All five simulator invocations returned code `0`, but all five stopped with `drain_timeout`. Measured injected packets were 258, 247, 250, 243, and 312 for masks `0x0000`, `0x0001`, `0x0011`, `0x0111`, and `0x1111`; measured received packets were 89, 85, 86, 83, and 153. Nonzero source queues, router-buffer flits, reservations, and pending handshakes remained at timeout.
- `failing_cases.csv` records timeout/non-100% rows with routing mode, fault mask, source, destination, stop reason, injected/received counts, undelivered counts, and suspected route phase. Because most planned packets remained queued at sources, the failure rows are diagnosis input and not pair-isolated root-cause evidence.
- No source code, simulator behavior, standard `XY`, `DEFT`, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, traffic-generation behavior, metrics/runner/analysis behavior, generated final-sweep artifacts, final-report claims, final-report PDF/package artifacts, Extended Proposal files, or `./regression.sh --update` was changed.
- Final `external/noxim` status remained clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- The generated-artifact guard returned no changed files for `external/noxim/other/generated/t0026_final_sweep_v1`, `t0026_final_analysis_v1`, `t0027_report_support_v1`, `t0028_final_report_results_v1`, `t0042_iaxy_deft_limited_v1`, `t0044_drain_smokes`, or `t0050_deft_reachability_diagnosis_v1`.
- The final-report and proposal artifact guard returned no changed files for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, `Extended_Proposal.zip`, or `Extended_Proposal/`.
- `git diff --check` completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.

Expected future validation for T0054:

- Define the exact DeFT-only timeout-diagnosis matrix, timeout policy, artifact directory, and summary fields before execution.
- Use T0052 as diagnosis input, not as a 100% reachability artifact.
- Write generated outputs only to a new ignored `external/noxim/other/generated/t0054_*` directory.
- Preserve T0026/T0027/T0028, T0042, T0044, T0050, T0052, final-report, package, and Extended Proposal artifacts.
- Record every non-100% or timeout case with routing mode, fault mask, source, destination, stop reason, injected/received counts, undelivered counts, and suspected route phase.
- Do not claim 100% reachability or run IA-XY comparison unless DeFT reachability behavior is validated first.

## Metrics Validation

Purpose:

- Confirm correctness of reachability, average latency, and network throughput reporting.

Known validation:

- T0020 JSON and CSV metrics export smokes listed under `Metrics Collection`.

Expected future checks:

- Cross-check T0020 exported metrics in longer packet-carrying runs after final sweep policy exists.
- Compare delivered packet counts against injected packet counts across XY and DeFT modes.
- Verify warm-up and in-flight packet handling for final experiment windows.

## Documentation Validation

Purpose:

- Confirm project management documents remain current and traceable.
- Confirm English-only repository documentation.
- Confirm future sessions can resume from project state.

Known validation:

- `git status --short`

Expected future checks:

- Ensure `docs/PROGRESS.md` names current phase and next recommended task.
- Ensure `docs/TASKS.md` status changes match completed work.
- Ensure `docs/PROMPTS.md` records important prompts in English.
- Ensure `docs/DECISIONS.md` records durable decisions.
