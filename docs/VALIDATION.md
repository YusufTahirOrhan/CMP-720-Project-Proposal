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
