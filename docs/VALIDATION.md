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

- Validate experiment sweeps across routing mode, traffic model, fault rate, and random seed.

Command:

- Unknown until repository inspection.

Expected future checks:

- Single-run smoke test.
- Small multi-seed dry run.
- Fault-rate sweep up to 25% after routing and fault injection are implemented.

## Metrics Validation

Purpose:

- Confirm correctness of reachability, average latency, and network throughput reporting.

Command:

- Unknown until repository inspection.

Expected future checks:

- Compare delivered packet counts against injected packet counts.
- Verify latency uses delivery cycle minus injection cycle.
- Verify throughput unit is flits per cycle per active IP node.

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
