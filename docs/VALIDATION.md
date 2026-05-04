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

- `external/noxim` exists and contains a valid Noxim checkout cloned by the user.
- Top-level Noxim directories found: `.git`, `bin`, `config_examples`, `doc`, `other`, and `src`.
- Top-level Noxim files found: `.gitignore`, `build.sh`, `README.md`, `regression.sh`, and `visualNoxim`.
- Main source folder: `external/noxim/src`.
- Main build folder and files: `external/noxim/bin`, including `Makefile`, `Makefile.deps`, and `power.yaml`.
- Main configuration files: YAML examples under `external/noxim/config_examples`, including `default_config.yaml`, `default_configMesh.yaml`, and other shipped examples.
- Main documentation files found under `external/noxim/doc`: `INSTALL.txt`, `MANUAL.txt`, `Noxim_User_Guide.md`, `Noxim_User_Guide.pdf`, `noxim_tutorial.pdf`, `AUTHORS.txt`, and `LICENSE.txt`.
- Detected build system: Bash wrapper scripts plus GNU Make. `build.sh` runs `other/setup/fix-dependencies.sh` and then `make -C bin`; `bin/Makefile` compiles C++11/SystemC sources with `g++` into `bin/noxim`.
- Explicitly documented build/setup commands include `./build.sh`, `./other/setup/fix-dependencies.sh`, and the legacy manual `make` flow from the `bin` directory.
- Explicitly documented regression/validation commands include `./regression.sh`, `./regression.sh --list`, `./regression.sh --case mesh_8x8_buf4`, and `./regression.sh --update`.
- Noxim nested Git metadata could not be queried with `git -C external/noxim ...` because Git reported a safe-directory ownership mismatch in the sandbox.
- T0023 is complete because Noxim source availability is now explicit and the top-level structure/build documentation are documented.
- No Noxim source files were modified.
- No DeFT behavior, routing logic, topology logic, VN logic, fault injection logic, or simulation behavior was modified.
- After T0023 documentation updates, `git status --short` showed modified tracking docs (`docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`) and untracked `external/`, which contains the user-cloned Noxim source tree.

## Build Validation

Purpose:

- Confirm that Noxim builds before project-specific implementation begins.
- Record exact compiler, SystemC, and build environment requirements.

Documented candidate commands, not yet verified as project validation:

- From the Noxim repository root: `./build.sh`
- Dependency setup only, from the Noxim repository root: `./other/setup/fix-dependencies.sh`
- Legacy manual build from `external/noxim/bin`: `make`

Notes:

- Noxim source code is registered at `external/noxim` as of T0023 on 2026-05-04.
- The normal post-clone build command documented by `external/noxim/README.md` and `external/noxim/doc/Noxim_User_Guide.md` is `./build.sh`.
- `external/noxim/build.sh` runs `other/setup/fix-dependencies.sh` and then `make -C bin`.
- `external/noxim/bin/Makefile` builds C++11/SystemC sources with `g++` and links `bin/noxim`.
- T0003 must execute and verify the selected build command before it is treated as the validated project build command.

## Source Document Validation

Purpose:

- Confirm that required project source documents are available before design or implementation tasks.
- Confirm that DeFT-specific behavior is checked against the original paper when relevant.

Known sources:

- `Extended_Proposal.pdf`
- `Proposal.pdf`
- `C:/Users/9500203/Downloads/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`

Command:

- Availability check: `Get-Item -LiteralPath <required-source-path>`

Notes:

- T0002 confirmed that `Extended_Proposal.pdf`, `Proposal.pdf`, and `C:/Users/9500203/Downloads/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` are available.
- The original DeFT paper is currently outside the repository.
- Future tasks should decide whether to copy it into the repository for reproducibility.

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
- T0003 should first establish the baseline build command. Regression execution can be selected after the build command is verified.

## Noxim Simulation Runs

Purpose:

- Validate baseline XY behavior.
- Validate 2.5D topology construction.
- Validate DeFT routing behavior under synthetic traffic and fault scenarios.

Command:

- Baseline simulation command not yet selected or run.

Notes:

- Simulation commands must not be invented.
- Baseline simulation must be confirmed before DeFT-specific changes are evaluated.
- `external/noxim/doc/Noxim_User_Guide.md` includes documented sample simulator invocations, but T0004 must choose and verify the baseline simulation command after T0003 confirms the build.

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
