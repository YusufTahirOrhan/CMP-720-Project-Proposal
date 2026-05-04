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

- `T0003` - Establish baseline build command.
- `T0004` - Run baseline Noxim simulation.

## Last Validation Result

- T0003 baseline build validation attempted on 2026-05-04.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, and `docs/DECISIONS.md`.
- `external/noxim/README.md`, `external/noxim/doc/Noxim_User_Guide.md`, and `external/noxim/build.sh` document the normal post-clone build command from the Noxim repository root as `./build.sh`.
- `external/noxim/build.sh` is a Bash wrapper that runs `other/setup/fix-dependencies.sh` and then `make -C bin`.
- `external/noxim/bin/Makefile` builds C++11/SystemC sources with `g++` and links the simulator as `bin/noxim`.
- `external/noxim/doc/INSTALL.txt` documents the legacy manual flow from the `bin` directory using `make`.
- The selected baseline build command for this source tree is `./build.sh` from `external/noxim`.
- `./build.sh` was executed from `external/noxim` in the current Windows PowerShell sandbox. It returned exit code `0` with no output, but it did not create `external/noxim/bin/noxim`, `external/noxim/bin/libs`, or `external/noxim/bin/build`.
- Because no simulator binary or build artifact was produced, the `./build.sh` execution is not accepted as a verified baseline build.
- Environment checks found that `bash`, `make`, and `g++` are not available in the current PATH (`where.exe bash`, `where.exe make`, and `where.exe g++` all returned no files).
- `external/noxim/other/deps-backup` contains local backup archives for SystemC 2.3.1a and yaml-cpp 0.6.0, but the documented setup still requires a Bash and GNU toolchain environment to use them.
- Blocked: T0003 cannot be completed in the current environment because the documented Bash/GNU Make/G++ build flow cannot be executed and verified.
- `git status --short` returned no output before this documentation update.
- After this documentation update, `git status --short` showed only modified tracking docs: `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- `git status --short` in `external/noxim` could not be used because Git reported dubious ownership for the submodule path under the sandbox user.
- No Noxim source files were modified.
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
- Assumption: The baseline build command remains `./build.sh` from `external/noxim`, but it is not a validated project command until it produces `bin/noxim` in a compatible environment.
- Assumption: A compatible environment needs Bash, GNU Make, `g++`, and the tools required by `other/setup/fix-dependencies.sh`.
- Assumption: The local backup archives under `external/noxim/other/deps-backup` may avoid network downloads for SystemC and yaml-cpp once the required build tools are available.
- Assumption: The implementation target remains a 4-chiplet 2.5D system with 4x4 mesh chiplets and four Vertical Links per chiplet.

## Open Questions

- Should the original DeFT paper be copied into the repository for persistent availability?
- Is submodule gitlink commit `d02fde4f3a07be5d15743f9b1993a292636133fb` the intended baseline commit for T0003, or should it be updated before build validation?
- What Bash/GNU Make/G++ environment will be used to complete `./build.sh` validation?
- Will the documented dependency setup work from the local backup archives, or will network access be needed in the chosen build environment?
- How should the active interposer dimensions and router mapping be represented?
- Should Vertical Link fault percentages be counted over physical bidirectional links or directional links?
- Are GEM5/PARSEC traces required for final delivery, or are synthetic traffic experiments sufficient?

## Next Recommended Task

Continue `T0003` in a Bash-capable build environment and verify that `./build.sh` creates `external/noxim/bin/noxim`.

## Next Ready-to-Send Prompt

```text
Continue task T0003: Establish baseline build command.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, and docs/DECISIONS.md.

Use the registered Noxim source tree at:
external/noxim

`external/noxim` is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

Do not implement DeFT behavior yet. Do not modify Noxim source files, routing logic, topology logic, VN logic, fault injection logic, or simulation behavior in this task.

Goal: complete the blocked T0003 build validation by running the documented baseline Noxim build command in a compatible Bash/GNU Make/G++ environment.

Use only commands explicitly documented in `external/noxim` documentation or build files. Do not invent download, build, test, validation, or simulation commands.

Known T0003 result so far: `external/noxim/README.md`, `external/noxim/doc/Noxim_User_Guide.md`, and `external/noxim/build.sh` document `./build.sh` from the Noxim repository root as the normal post-clone build command. In the current Windows PowerShell sandbox, `./build.sh` returned exit code `0` with no output but did not create `bin/noxim`; `bash`, `make`, and `g++` were not available in PATH.

Run the documented baseline build command from `external/noxim`:

./build.sh

Verify whether it creates `external/noxim/bin/noxim`. If the command fails because dependencies, shell support, permissions, network access, or platform support are missing, record the exact failure and keep T0003 blocked. If sandbox/network approval is required by the environment, request it through the tool approval flow.

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
docs: record blocked Noxim build validation
```
