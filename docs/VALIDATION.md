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

T0023 continuation result on 2026-05-04:

- `git status --short` returned no output before T0023 continuation documentation updates.
- The intended Noxim source location or import method in the prompt was still the literal placeholder `<insert the local source path, repository import method, archive path, or other explicit source registration instruction here>`.
- `rg --files` could not be used because `rg.exe` returned access denied.
- PowerShell top-level and recursive directory/file inspection was used as the fallback.
- Repository inspection found no Noxim source tree, Noxim-named path, C/C++/SystemC source file, script source file, or recognized build-system file.
- No top-level Noxim structure or Noxim build documentation could be inspected because no Noxim source tree or explicit external Noxim source path is available.
- Blocked: T0023 remains blocked pending a real Noxim source location or import method.
- After T0023 continuation documentation updates, `git status --short` showed only modified documentation files: `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- No source code files were changed.

## Build Validation

Purpose:

- Confirm that Noxim builds before project-specific implementation begins.
- Record exact compiler, SystemC, and build environment requirements.

Command:

- Unknown until repository inspection.

Notes:

- Noxim source code is not currently present in the repository as of the T0023 continuation check on 2026-05-04.
- No build-system file such as `Makefile`, `CMakeLists.txt`, `SConstruct`, `meson.build`, `package.json`, or Visual Studio project file was found during T0002 or T0023.
- Build commands must come from the repository, Noxim documentation, or user-provided instructions.
- T0023 did not add a build command because the Noxim source location or import method is still unknown.

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

Command:

- Unknown until repository inspection.

Notes:

- Test framework availability is unknown.
- If no test framework exists, future tasks should document the smallest safe validation method before adding one.

## Noxim Simulation Runs

Purpose:

- Validate baseline XY behavior.
- Validate 2.5D topology construction.
- Validate DeFT routing behavior under synthetic traffic and fault scenarios.

Command:

- Unknown until repository inspection.

Notes:

- Simulation commands must not be invented.
- Baseline simulation must be confirmed before DeFT-specific changes are evaluated.
- Blocked as of T0023 because Noxim source code and build files are not present or registered.

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
