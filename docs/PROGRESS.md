# Project Progress

## Current Phase

Phase 1 - Noxim baseline source availability and validation setup

## Completed Tasks

- `T0001` - Repository analysis and documentation setup.
- `T0002` - Confirm repository contents, Noxim availability, and source-document availability.
- `T0003` - Establish baseline build command.
- `T0023` - Add or register the Noxim source tree.
- `T0024` - Decide Windows 11 development environment and persist paper reference.

No DeFT implementation task has been completed.

## In-Progress Tasks

- None.

## Blocked Tasks

- None.

## Last Validation Result

- T0003 baseline build validation completed on 2026-05-05.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, and `docs/ARCHITECTURE.md`.
- WSL Ubuntu is installed and available as a WSL2 distribution.
- `wsl -u root -- apt-get update` completed successfully.
- `wsl -u root -- apt-get install -y build-essential git cmake pkg-config ca-certificates` completed successfully; all packages were already installed.
- First WSL run of `./build.sh` failed because Windows CRLF line endings made the shebang resolve to `bash\r`.
- Only Noxim build scripts and Makefiles were normalized to LF: `bin/Makefile`, `bin/Makefile.deps`, `build.sh`, `other/Makefile`, `other/run_tests.sh`, `other/setup/fedora.sh`, `other/setup/fix-dependencies.sh`, `other/setup/systemc.sh`, `other/setup/ubuntu.sh`, `other/setup/ubuntu_noboost.sh`, `other/setup/ubuntu_old.sh`, and `regression.sh`.
- The Noxim submodule local Git config was set to `core.autocrlf=false` to prevent these build files from being converted back to CRLF.
- The documented command `./build.sh` was run from `external/noxim` in WSL Ubuntu and completed with exit code `0`.
- The build used local backup archives for dependencies where available and created `external/noxim/bin/libs`, `external/noxim/bin/build`, and `external/noxim/bin/noxim`.
- `external/noxim/bin/noxim` exists and is an ELF 64-bit x86-64 Linux executable.
- The build emitted compiler warnings from SystemC, yaml-cpp, and baseline Noxim code, but no fatal build errors.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --name-only --ignore-space-at-eol` returned no file names, confirming the Noxim tracked changes are line-ending-only.
- `git status --short` shows the parent project documentation changes, the new `.gitignore`, the new `docs/references` README, and a dirty `external/noxim` submodule because of LF normalization in tracked build files.
- No DeFT behavior, routing logic, topology logic, VN logic, fault injection logic, or simulation behavior was modified.

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
- Assumption: The implementation target remains a 4-chiplet 2.5D system with 4x4 mesh chiplets and four Vertical Links per chiplet.

## Open Questions

- How should the active interposer dimensions and router mapping be represented?
- Should Vertical Link fault percentages be counted over physical bidirectional links or directional links?
- Are GEM5/PARSEC traces required for final delivery, or are synthetic traffic experiments sufficient?

## Next Recommended Task

Start `T0004` and run one unmodified baseline Noxim simulation using a command selected from the documented Noxim examples.

## Next Ready-to-Send Prompt

```text
Start task T0004: Run baseline Noxim simulation.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, and docs/DECISIONS.md.

Use the registered Noxim source tree at:
external/noxim

`external/noxim` is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

Do not implement DeFT behavior yet. Do not modify routing logic, topology logic, VN logic, fault injection logic, or simulation behavior in this task.

Goal: choose and run one unmodified baseline Noxim simulation command from the Noxim documentation or example configuration files, then record the command and output summary.

Known result so far: T0003 verified the documented build command `./build.sh` in WSL Ubuntu on 2026-05-05 and created `external/noxim/bin/noxim`. The first WSL build attempt required LF normalization of Noxim build scripts and Makefiles because the Windows checkout had CRLF line endings.

Use WSL Ubuntu for the simulation run. Use only commands explicitly documented in `external/noxim` documentation, scripts, or example files. Do not invent simulation commands. Prefer a short baseline example suitable for smoke validation.

Do not run DeFT experiments or modify any golden regression outputs in this task.

Ignore the peer evaluation document completely.

Update docs/PROGRESS.md, docs/TASKS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. At the end, provide:

1. Created files
2. Modified files
3. Whether any source code files changed
4. Validation result
5. Current project phase
6. Next recommended task
7. The next ready-to-send prompt
8. Suggested commit message
9. Unknowns or blockers
```

## Suggested Commit Message

```text
docs: record verified Noxim WSL build
```
