# Project Progress

## Current Phase

Phase 1 - Noxim baseline source availability and validation setup

## Completed Tasks

- `T0001` - Repository analysis and documentation setup.
- `T0002` - Confirm repository contents, Noxim availability, and source-document availability.
- `T0023` - Add or register the Noxim source tree.

No DeFT implementation task has been completed.

## In-Progress Tasks

- None.

## Blocked Tasks

- `T0004` - Run baseline Noxim simulation.

## Last Validation Result

- T0023 submodule-registration correction performed on 2026-05-04.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, and `docs/DECISIONS.md`.
- The intended and correct Noxim submodule location is `external/noxim`.
- The intended Noxim submodule URL is `https://github.com/YusufTahirOrhan/noxim`.
- The user reported that an accidental root-level Noxim submodule addition was corrected before this documentation update.
- `.gitmodules` contains a single Noxim submodule entry with `path = external/noxim` and `url = https://github.com/YusufTahirOrhan/noxim`.
- `git ls-files --stage .gitmodules external/noxim` shows `.gitmodules` tracked as a normal file and `external/noxim` tracked as a submodule gitlink (`160000`) at commit `d02fde4f3a07be5d15743f9b1993a292636133fb`.
- `external/noxim/.git` is a gitfile pointing to `../../.git/modules/external/noxim`, confirming the submodule layout rather than vendored source in the main repository.
- `git submodule status -- external/noxim` could not run in this Windows sandbox because Git's submodule helper could not find Unix shell utilities (`basename`, `sed`, and `git-sh-setup`). The submodule registration was validated through `.gitmodules`, the gitlink entry, and the submodule gitfile instead.
- `external/noxim` exists and contains a valid Noxim source tree.
- Top-level Noxim directories found: `.git`, `bin`, `config_examples`, `doc`, `other`, and `src`.
- Top-level Noxim files found: `.gitignore`, `build.sh`, `README.md`, `regression.sh`, and `visualNoxim`.
- Main source folder: `external/noxim/src`.
- Main build folder and files: `external/noxim/bin`, including `Makefile`, `Makefile.deps`, and `power.yaml`.
- Main configuration files: YAML examples under `external/noxim/config_examples`, including `default_config.yaml`, `default_configMesh.yaml`, and other shipped examples.
- Documentation files found under `external/noxim/doc`: `INSTALL.txt`, `MANUAL.txt`, `Noxim_User_Guide.md`, `Noxim_User_Guide.pdf`, `noxim_tutorial.pdf`, `AUTHORS.txt`, and `LICENSE.txt`.
- Detected build system: Bash wrapper scripts plus GNU Make. `build.sh` runs `other/setup/fix-dependencies.sh` and then `make -C bin`; `bin/Makefile` compiles C++11/SystemC sources with `g++` into `bin/noxim`.
- Explicitly documented build/setup commands include `./build.sh`, `./other/setup/fix-dependencies.sh`, and the legacy manual `make` flow from the `bin` directory.
- Explicitly documented regression/validation commands include `./regression.sh`, `./regression.sh --list`, `./regression.sh --case mesh_8x8_buf4`, and `./regression.sh --update`.
- Decision: `external/noxim` is the modifiable Noxim fork for this project when a future task explicitly requires Noxim source changes.
- Decision: Noxim source must not be vendored directly into the main repository; it should remain a submodule at `external/noxim`.
- No root-level Noxim submodule entry is present in `.gitmodules`.
- No Noxim source files were modified.
- No DeFT behavior, routing logic, topology logic, VN logic, fault injection logic, or simulation behavior was modified.
- Build, regression, and simulation commands were identified from documentation/build files but not executed in T0023; T0003 should verify the baseline build command next.
- `git status --short` before this documentation update returned no output.
- After this documentation correction, `git status --short` showed only modified tracking docs: `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.

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

External source tree registered during `T0023`:

- `external/noxim` - Noxim submodule and modifiable project fork from `https://github.com/YusufTahirOrhan/noxim`.

## Current Assumptions

- Assumption: `Extended_Proposal.pdf` is the primary technical source.
- Assumption: The original DeFT paper is the primary algorithmic reference for DeFT routing, VN rules, and VL selection.
- Assumption: `Proposal.pdf` is initial context only.
- Assumption: The peer evaluation document is unrelated and out of scope.
- Assumption: `external/noxim` is the baseline Noxim source tree and modifiable project fork to use for future explicit Noxim implementation tasks.
- Assumption: Noxim source should remain in the `external/noxim` submodule and should not be vendored directly into the main repository.
- Assumption: Noxim source files should not be modified during documentation and baseline-discovery tasks.
- Assumption: Documented Noxim build and regression commands must be verified in T0003 before being treated as validated project commands.
- Assumption: The implementation target remains a 4-chiplet 2.5D system with 4x4 mesh chiplets and four Vertical Links per chiplet.

## Open Questions

- Should the original DeFT paper be copied into the repository for persistent availability?
- Is submodule gitlink commit `d02fde4f3a07be5d15743f9b1993a292636133fb` the intended baseline commit for T0003, or should it be updated before build validation?
- What SystemC and compiler environment will be used?
- Will `./build.sh` be usable in the project environment, including its dependency setup step, or will a preinstalled SystemC/yaml-cpp path be required?
- How should the active interposer dimensions and router mapping be represented?
- Should Vertical Link fault percentages be counted over physical bidirectional links or directional links?
- Are GEM5/PARSEC traces required for final delivery, or are synthetic traffic experiments sufficient?

## Next Recommended Task

Start `T0003` to establish and verify the baseline Noxim build command using `external/noxim`.

## Next Ready-to-Send Prompt

```text
Start task T0003: Establish baseline build command.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, and docs/DECISIONS.md.

Use the registered Noxim source tree at:
external/noxim

`external/noxim` is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

Do not implement DeFT behavior yet. Do not modify Noxim source files, routing logic, topology logic, VN logic, fault injection logic, or simulation behavior in this task.

Goal: establish and verify the real baseline Noxim build command from the documented commands found in the Noxim source tree.

Use only commands explicitly documented in `external/noxim` documentation or build files. Do not invent download, build, test, validation, or simulation commands.

Recommended starting evidence from T0023: `external/noxim/README.md`, `external/noxim/build.sh`, `external/noxim/bin/Makefile`, `external/noxim/doc/INSTALL.txt`, and `external/noxim/doc/Noxim_User_Guide.md` document `./build.sh` as the normal post-clone build command.

Run the documented baseline build command if the environment permits. If the command fails because dependencies, shell support, permissions, network access, or platform support are missing, record the exact failure and keep T0003 blocked or in progress as appropriate. If sandbox/network approval is required by the environment, request it through the tool approval flow.

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
docs: record Noxim fork submodule decision
```
