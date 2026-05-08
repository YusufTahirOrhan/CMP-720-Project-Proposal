# Prompt History

This file preserves important Codex prompts across sessions. Prompt entries must be recorded in English.

## 2026-05-04: Create Project Management Documentation

- **Date:** 2026-05-04
- **Prompt summary:** Create an industry-standard, traceable, step-by-step documentation structure for the DeFT project without writing implementation code.
- **Full prompt:**

```text
I want this project to follow an industry-standard, traceable, step-by-step development process.

Do not write implementation code yet. First, create a persistent project-management and development-tracking documentation structure inside the repository.

Use only these two documents as the project source of truth:

1. Extended_Proposal.pdf
2. Proposal.pdf

Ignore all other unrelated files, especially the peer evaluation document.

Goal:
I want this repository to preserve project memory across future Codex sessions. In each session, it should be clear what prompts were given, what tasks were completed, what decisions were made, which files changed, what validation was run, and what the next recommended task is.

Please create or use a docs/ directory at the repository root and create the following files:

1. AGENTS.md at the repository root with Codex rules for English-only project work, required startup reading, task-scoped development, validation discipline, proposal scope, peer evaluation exclusion, and extra caution for DeFT routing, VN assignment, Vertical Link faults, LUT generation, Noxim behavior, and C++ / SystemC correctness.

2. docs/ROADMAP.md with phases from repository analysis and documentation setup through final analysis and report support. Each phase should include goal, deliverables, success criteria, validation method, and risks or assumptions.

3. docs/TASKS.md with small, safe, reviewable tasks. Each task should include ID, status, objective, roadmap phase, likely changed files, acceptance criteria, validation command, and notes. The first task must be repository analysis and documentation setup only.

4. docs/ARCHITECTURE.md describing the target architecture, including 2.5D chiplet topology, chiplets, active interposer, routers, boundary routers, Vertical Links, Fault Injection Manager, DeFT routing pipeline, VN.0 / VN.1 rules, VN restrictions, offline VL LUT, traffic models, fault scenarios, evaluation metrics, and XY baseline comparison.

5. docs/DECISIONS.md as Architecture Decision Records covering the source of truth, initial context, peer evaluation exclusion, English-only artifacts, task-by-task development, validation when possible, and not inventing build or simulation commands.

6. docs/PROMPTS.md preserving important prompts across sessions with date, summary, full prompt, result summary, and follow-up tasks. Add this current prompt as the first entry in English.

7. docs/PROGRESS.md with current phase, completed tasks, in-progress tasks, blocked tasks, last validation result, changed files, assumptions, open questions, and next recommended task. Mention that no implementation task is complete, Noxim source is not present if absent, and build/test commands are unknown if absent.

8. docs/VALIDATION.md with strategy sections for repository inspection, build validation, unit or regression tests, Noxim simulation runs, experiment validation, metrics validation, and documentation validation. Do not invent commands.

General requirements: English-only project content, no implementation code, no source code modifications, documentation-only changes, no unrelated file analysis, no peer evaluation use, practical maintainable Markdown, and traceability through TASKS.md, PROGRESS.md, PROMPTS.md, and DECISIONS.md.

Before making changes, briefly summarize the plan, list files to create, and confirm no implementation code will be changed.

After making changes, report created files, modified files, whether source code files changed, current project phase, next recommended task, and unknowns or blockers.
```

- **Result summary:** Documentation structure requested and created as a documentation-only task.
- **Follow-up tasks:** Complete `T0001`, then start `T0002` to confirm repository contents and Noxim availability.

## 2026-05-04: Add Original DeFT Paper as a Source

- **Date:** 2026-05-04
- **Prompt summary:** Add the original DeFT paper as a source for the project and thesis.
- **Full prompt:**

```text
And also use this one too. This is original paper that my project and thesis will be based on.

Referenced file:
C:/Users/9500203/Downloads/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf
```

- **Result summary:** The original DeFT paper was registered as the primary algorithmic reference source for DeFT-specific behavior.
- **Follow-up tasks:** Confirm whether the original DeFT paper should be copied into the repository for long-term reproducibility.

## 2026-05-04: Require Next Prompts and Commit Messages

- **Date:** 2026-05-04
- **Prompt summary:** Require Codex to provide the next ready-to-send prompt and suggested commit messages after each completed task.
- **Full prompt:**

```text
Also provide the first prompt to start the project. After completing every task, provide the next prompt. Record this requirement too.

Also provide the commit messages too.
```

- **Result summary:** Project rules and progress documentation were updated to require a next prompt and suggested commit message after every completed task.
- **Follow-up tasks:** Use the ready-to-send prompt in `docs/PROGRESS.md` to start `T0002`.

## 2026-05-04: Start T0002 Repository Availability Check

- **Date:** 2026-05-04
- **Prompt summary:** Confirm repository contents, Noxim availability, required source-document availability, and known build/test/simulation commands without writing implementation code.
- **Full prompt:**

```text
Start task T0002: Confirm repository contents, Noxim availability, and source-document availability.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, and docs/ARCHITECTURE.md.

Do not write implementation code. Do not modify source code files. Inspect only the repository structure and the required source documents:

- Extended_Proposal.pdf
- Proposal.pdf
- C:/Users/9500203/Downloads/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf

Ignore the peer evaluation document completely.

Confirm whether Noxim source code is present in the repository. If it is not present, record that explicitly. Confirm whether build, test, and simulation commands are known. Do not invent commands.

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

- **Result summary:** T0002 confirmed the repository contains documentation and proposal artifacts but no Noxim source tree, Noxim-named path, C/C++/SystemC source file, script source file, or recognized build-system file. The required source documents are available. Build, test, and simulation commands remain unknown. No source code files were changed.
- **Follow-up tasks:** Start `T0023` to add or register the Noxim source tree before attempting `T0003`.
- **Next ready-to-send prompt:**

```text
Start task T0023: Add or register the Noxim source tree.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, and docs/ARCHITECTURE.md.

Do not implement DeFT behavior yet. Do not modify routing logic, topology logic, VN logic, fault injection logic, or simulation behavior in this task.

Goal: make Noxim source availability explicit so T0003 can establish a real baseline build command.

If Noxim source code has already been added to the repository, inspect only its top-level structure and build documentation. If it has not been added, record that the task is blocked and ask for the intended Noxim source location or import method. Do not invent download, build, test, or simulation commands.

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

## 2026-05-04: Start T0023 Noxim Source Registration

- **Date:** 2026-05-04
- **Prompt summary:** Add or register the Noxim source tree so a real baseline build command can be established later, without implementing DeFT behavior or changing simulation logic.
- **Full prompt:**

```text
Start task T0023: Add or register the Noxim source tree.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, and docs/ARCHITECTURE.md.

Do not implement DeFT behavior yet. Do not modify routing logic, topology logic, VN logic, fault injection logic, or simulation behavior in this task.

Goal: make Noxim source availability explicit so T0003 can establish a real baseline build command.

If Noxim source code has already been added to the repository, inspect only its top-level structure and build documentation. If it has not been added, record that the task is blocked and ask for the intended Noxim source location or import method. Do not invent download, build, test, or simulation commands.

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

- **Result summary:** T0023 is blocked. Repository inspection found no Noxim source tree, explicit external Noxim source path, C/C++/SystemC source file, script source file, or recognized build-system file. No top-level Noxim structure or build documentation could be inspected. No DeFT behavior or source code was changed.
- **Follow-up tasks:** Continue `T0023` after the intended Noxim source location or import method is provided.
- **Next ready-to-send prompt:**

```text
Continue task T0023: Add or register the Noxim source tree.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, and docs/ARCHITECTURE.md.

Use this intended Noxim source location or import method:
<insert the local source path, repository import method, archive path, or other explicit source registration instruction here>

Do not implement DeFT behavior yet. Do not modify routing logic, topology logic, VN logic, fault injection logic, or simulation behavior in this task.

Goal: make Noxim source availability explicit so T0003 can establish a real baseline build command.

If a Noxim source tree is available, inspect only its top-level structure and build documentation. If it is still not available, record that the task remains blocked. Do not invent download, build, test, or simulation commands.

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

## 2026-05-04: Continue T0023 Noxim Source Registration

- **Date:** 2026-05-04
- **Prompt summary:** Continue T0023 using the intended Noxim source location or import method if available, otherwise record that the task remains blocked.
- **Full prompt:**

```text
Continue task T0023: Add or register the Noxim source tree.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, and docs/ARCHITECTURE.md.

Use this intended Noxim source location or import method:
<insert the local source path, repository import method, archive path, or other explicit source registration instruction here>

Do not implement DeFT behavior yet. Do not modify routing logic, topology logic, VN logic, fault injection logic, or simulation behavior in this task.

Goal: make Noxim source availability explicit so T0003 can establish a real baseline build command.

If a Noxim source tree is available, inspect only its top-level structure and build documentation. If it is still not available, record that the task remains blocked. Do not invent download, build, test, or simulation commands.

Ignore the peer evaluation document completely.

Update docs/PROGRESS.md, docs/TASKS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result.
```

- **Result summary:** T0023 remains blocked. The provided intended source location or import method was still the literal placeholder, and repository inspection found no Noxim source tree, Noxim-named path, C/C++/SystemC source file, script source file, or recognized build-system file. No top-level Noxim structure or build documentation could be inspected. No DeFT behavior or source code was changed.
- **Follow-up tasks:** Continue `T0023` after replacing the placeholder with an actionable Noxim source location, repository import method, archive path, or equivalent source registration instruction.
- **Next ready-to-send prompt:**

```text
Continue task T0023: Add or register the Noxim source tree.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, and docs/ARCHITECTURE.md.

Use this intended Noxim source location or import method:
<insert the local source path, repository import method, archive path, or other explicit source registration instruction here>

Do not implement DeFT behavior yet. Do not modify routing logic, topology logic, VN logic, fault injection logic, or simulation behavior in this task.

Goal: make Noxim source availability explicit so T0003 can establish a real baseline build command.

If a Noxim source tree is available, inspect only its top-level structure and build documentation. If it is still not available, record that the task remains blocked. Do not invent download, build, test, or simulation commands.

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

## 2026-05-04: Continue T0023 Noxim Source Registration Placeholder Check

- **Date:** 2026-05-04
- **Prompt summary:** Continue T0023 again, using the intended Noxim source location or import method if provided, otherwise record that the task remains blocked.
- **Full prompt:**

```text
Continue task T0023: Add or register the Noxim source tree.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, and docs/ARCHITECTURE.md.

Use this intended Noxim source location or import method:
<insert the local source path, repository import method, archive path, or other explicit source registration instruction here>

Do not implement DeFT behavior yet. Do not modify routing logic, topology logic, VN logic, fault injection logic, or simulation behavior in this task.

Goal: make Noxim source availability explicit so T0003 can establish a real baseline build command.

If a Noxim source tree is available, inspect only its top-level structure and build documentation. If it is still not available, record that the task remains blocked. Do not invent download, build, test, or simulation commands.

Ignore the peer evaluation document completely.

Update docs/PROGRESS.md, docs/TASKS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result.
```

- **Result summary:** T0023 remains blocked. The provided intended source location or import method is still the literal placeholder, and repository inspection found no Noxim source tree, Noxim-named path, C/C++/SystemC source file, script source file, recognized build-system file, or explicit external source path. No top-level Noxim structure or build documentation could be inspected. No DeFT behavior or source code was changed.
- **Follow-up tasks:** Continue `T0023` after replacing the placeholder with an actionable Noxim source location, repository import method, archive path, or equivalent source registration instruction.
- **Next ready-to-send prompt:**

```text
Continue task T0023: Add or register the Noxim source tree.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, and docs/ARCHITECTURE.md.

Use this intended Noxim source location or import method:
<insert the local source path, repository import method, archive path, or other explicit source registration instruction here>

Do not implement DeFT behavior yet. Do not modify routing logic, topology logic, VN logic, fault injection logic, or simulation behavior in this task.

Goal: make Noxim source availability explicit so T0003 can establish a real baseline build command.

If a Noxim source tree is available, inspect only its top-level structure and build documentation. If it is still not available, record that the task remains blocked. Do not invent download, build, test, or simulation commands.

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

## 2026-05-04: Continue T0023 with `external/noxim`

- **Date:** 2026-05-04
- **Prompt summary:** Continue T0023 using `external/noxim` as the intended Noxim source location, inspect only top-level structure and build documentation, and mark the task done if the source tree is valid.
- **Full prompt:**

```text
Continue task T0023: Add or register the Noxim source tree.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, and docs/DECISIONS.md.

Use this intended Noxim source location:

external/noxim

I have cloned the baseline Noxim repository from https://github.com/davidepatti/noxim into external/noxim.

Do not implement DeFT behavior yet. Do not modify routing logic, topology logic, VN logic, fault injection logic, or simulation behavior in this task.

Goal: make Noxim source availability explicit so T0003 can establish a real baseline build command.

Inspect only the Noxim top-level structure and build documentation. Identify the detected build system, main source folders, configuration files, documentation files, and any explicitly documented build or validation commands.

Do not invent download, build, test, or simulation commands. Only record commands if they are explicitly present in the repository documentation or build files.

Ignore the peer evaluation document completely.

Update docs/PROGRESS.md, docs/TASKS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result.

Expected outcome:
1. If external/noxim contains a valid Noxim source tree, mark T0023 as DONE.
2. If external/noxim is missing or invalid, keep T0023 as BLOCKED and explain why.
3. Do not modify any Noxim source files.
4. Report all modified documentation files.
5. Recommend the next task, likely T0003: establish baseline build and validation command.
```

- **Result summary:** T0023 completed. `external/noxim` exists and contains a valid Noxim source checkout with top-level directories `.git`, `bin`, `config_examples`, `doc`, `other`, and `src`. The detected build system is Bash wrapper scripts plus GNU Make: `build.sh` runs `other/setup/fix-dependencies.sh` and then `make -C bin`; `bin/Makefile` builds C++11/SystemC sources with `g++` into `bin/noxim`. Documented build/setup commands include `./build.sh`, `./other/setup/fix-dependencies.sh`, and the legacy manual `make` flow from `bin`. Documented regression/validation commands include `./regression.sh`, `./regression.sh --list`, `./regression.sh --case mesh_8x8_buf4`, and `./regression.sh --update`. No Noxim source files or DeFT behavior were modified.
- **Follow-up tasks:** Start `T0003` to establish and verify the baseline Noxim build command using `external/noxim`.
- **Next ready-to-send prompt:**

```text
Start task T0003: Establish baseline build command.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, and docs/DECISIONS.md.

Use the registered Noxim source tree at:
external/noxim

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

## 2026-05-04: Correct T0023 Noxim Submodule Registration

- **Date:** 2026-05-04
- **Prompt summary:** Correct the T0023 documentation to record `external/noxim` as the intended Noxim submodule path, using the project fork URL, and state that Noxim must remain a submodule rather than being vendored.
- **Full prompt:**

```text
Update the project documentation for T0023.

I accidentally added the Noxim submodule to the repository root before because I forgot to pass the target path. That was corrected.

The intended and correct Noxim submodule location is:

external/noxim

The submodule URL is:

https://github.com/YusufTahirOrhan/noxim

Treat external/noxim as the modifiable Noxim fork for this project. Do not vendor Noxim source directly into the main repository.

Record this in docs/PROGRESS.md, docs/TASKS.md, docs/VALIDATION.md, docs/PROMPTS.md, and docs/DECISIONS.md if relevant.

Do not implement DeFT yet.
Do not modify Noxim source code in this task.
Only inspect and document the source availability and submodule decision.
```

- **Result summary:** T0023 documentation was corrected. `.gitmodules` records `external/noxim` with URL `https://github.com/YusufTahirOrhan/noxim`, and `git ls-files --stage` records `external/noxim` as a submodule gitlink at commit `d02fde4f3a07be5d15743f9b1993a292636133fb`. `external/noxim/.git` is a submodule gitfile pointing into the parent repository's `.git/modules` directory, confirming that Noxim is not vendored directly. The docs now state that `external/noxim` is the modifiable Noxim fork for future explicit implementation tasks. No Noxim source files or DeFT behavior were modified.
- **Follow-up tasks:** Start `T0003` to establish and verify the baseline Noxim build command using the `external/noxim` submodule.
- **Next ready-to-send prompt:**

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

## 2026-05-04: Start T0003 Baseline Build Command

- **Date:** 2026-05-04
- **Prompt summary:** Establish and verify the documented baseline Noxim build command from `external/noxim`, without modifying Noxim source or DeFT behavior.
- **Full prompt:**

```text
Start task T0003: Establish baseline build command.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, and docs/DECISIONS.md.

Use the registered Noxim source tree at:
external/noxim

Do not implement DeFT behavior yet. Do not modify Noxim source files, routing logic, topology logic, VN logic, fault injection logic, or simulation behavior in this task.

Use only commands explicitly documented in external/noxim documentation or build files. Establish and verify the baseline build command, then update the tracking docs with the result.
```

- **Result summary:** T0003 is blocked in the current Windows PowerShell sandbox. The documented baseline build command is `./build.sh` from `external/noxim`, supported by `README.md`, `doc/Noxim_User_Guide.md`, and `build.sh`. The wrapper runs `other/setup/fix-dependencies.sh` and then `make -C bin`. The command was attempted from `external/noxim` and returned exit code `0` with no output, but it did not create `bin/noxim`, `bin/libs`, or `bin/build`, so the build was not verified. Environment checks found no `bash`, `make`, or `g++` in PATH. No Noxim source files or DeFT behavior were modified.
- **Follow-up tasks:** Continue `T0003` in a Bash-capable environment with GNU Make and `g++` available, then rerun the documented `./build.sh` command from `external/noxim`.
- **Next ready-to-send prompt:**

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

## 2026-05-05: Recommend Windows 11 Environment and Persist Original Paper

- **Date:** 2026-05-05
- **Prompt summary:** Recommend whether the project should continue on native Windows 11 or use WSL Ubuntu, and optionally copy the original DeFT paper into the project documentation folder while ignoring it in Git.
- **Full prompt:**

```text
For this project, what do you suggest? We are working on Windows 11 right now, and we can only use Windows 11. If necessary, we can install WSL Ubuntu. All information needed is under docs. The original DeFT paper is attached and can be added to the project's docs folder, but it must be added to .gitignore. If needed, look at Proposal.pdf and Extended_Proposal.pdf.

Referenced file:
C:/Users/ysfth/OneDrive/Desktop/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf
```

- **Result summary:** T0024 completed. The original DeFT paper was copied to `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`, and `.gitignore` now ignores that exact PDF path. Environment inspection found `wsl.exe`, but WSL is not installed. `bash`, `make`, and `g++` are not available in the Windows PATH. The documented recommendation is to use Windows 11 for editing and repository work, and WSL Ubuntu for Noxim build validation, regressions, and simulator runs. No Noxim source files or DeFT behavior were modified.
- **Follow-up tasks:** Install WSL Ubuntu if needed, then continue `T0003` inside WSL Ubuntu and verify the documented `./build.sh` command from `external/noxim`.
- **Next ready-to-send prompt:**

```text
Continue task T0003: Establish baseline build command.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, and docs/DECISIONS.md.

Use the registered Noxim source tree at:
external/noxim

`external/noxim` is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

Do not implement DeFT behavior yet. Do not modify Noxim source files, routing logic, topology logic, VN logic, fault injection logic, or simulation behavior in this task.

Goal: complete the blocked T0003 build validation by running the documented baseline Noxim build command in WSL Ubuntu on Windows 11.

Use only commands explicitly documented in `external/noxim` documentation or build files. Do not invent download, build, test, validation, or simulation commands.

Known result so far: `external/noxim/README.md`, `external/noxim/doc/Noxim_User_Guide.md`, and `external/noxim/build.sh` document `./build.sh` from the Noxim repository root as the normal post-clone build command. In Windows PowerShell, `./build.sh` returned exit code `0` with no output but did not create `bin/noxim`; `bash`, `make`, and `g++` were not available in PATH. T0024 confirmed `wsl.exe` exists, but WSL is not installed yet.

If WSL Ubuntu is not installed, stop and record that T0003 remains blocked until WSL Ubuntu is installed. Do not treat native Windows PowerShell as the validated build environment.

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

## 2026-05-05: Install WSL Toolchain and Verify Noxim Build

- **Date:** 2026-05-05
- **Prompt summary:** Continue after Ubuntu was installed through WSL, avoid sharing the user's Ubuntu password, install or verify the Linux build toolchain, and complete the Noxim baseline build validation.
- **Full prompt:**

```text
The user asked whether Codex could enter the Ubuntu password after WSL installed Ubuntu, created a Linux user, and required a password. The response should not ask the user to share the password. Use WSL root access from Windows if available, then continue the Noxim setup.
```

- **Result summary:** T0003 completed. Codex accessed WSL Ubuntu as `root`, so the user did not need to share the Ubuntu password. `apt-get update` completed successfully. `build-essential`, `git`, `cmake`, `pkg-config`, and `ca-certificates` were already installed. The first `./build.sh` run failed because Windows CRLF line endings made WSL resolve the script shebang as `bash\r`. Only Noxim build scripts and Makefiles were normalized to LF, and the Noxim submodule local Git config was set to `core.autocrlf=false`. The documented command `./build.sh` then completed successfully in WSL Ubuntu and created `external/noxim/bin/noxim`. No DeFT behavior, routing logic, topology logic, VN logic, fault injection logic, or simulation behavior was modified.
- **Follow-up tasks:** Start `T0004` to choose and run one unmodified baseline Noxim simulation command from documented Noxim examples.
- **Next ready-to-send prompt:**

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

## 2026-05-05: Start T0004 Baseline Noxim Simulation

- **Date:** 2026-05-05
- **Prompt summary:** Run one unmodified baseline Noxim simulation from documented Noxim examples in WSL Ubuntu, then record the command and output summary without implementing DeFT behavior.
- **Full prompt:**

```text
Start task T0004: Run baseline Noxim simulation.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, and docs/DECISIONS.md.

Use the registered Noxim source tree at:
external/noxim

`external/noxim` is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

Use WSL Ubuntu for all Noxim commands.

Do not implement DeFT behavior yet. Do not modify routing logic, topology logic, VN logic, fault injection logic, or simulation behavior in this task.

Goal: choose and run one unmodified baseline Noxim simulation command from the Noxim documentation, scripts, or example configuration files, then record the command and output summary.

Known result so far: T0003 verified the documented build command `./build.sh` in WSL Ubuntu on 2026-05-05 and created `external/noxim/bin/noxim`. The first WSL build attempt required LF normalization of Noxim build scripts and Makefiles because the Windows checkout had CRLF line endings.

Use only commands explicitly documented in `external/noxim` documentation, scripts, or example files. Do not invent simulation commands. Prefer a short baseline example suitable for smoke validation.

Do not run DeFT experiments.
Do not modify any golden regression outputs.
Do not use `./regression.sh --update`.
Ignore the peer evaluation document completely.

After the simulation, verify whether it completed successfully and summarize the important output lines or metrics.

Update docs/PROGRESS.md, docs/TASKS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result.

At the end, provide:

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

- **Result summary:** T0004 completed. The selected baseline command was the Noxim User Guide's short deterministic example: `cd bin` then `./noxim -config ../config_examples/default_config.yaml -seed 0 -sim 20 -warmup 0`. The first exact simulator attempt failed because WSL could not locate `libsystemc-2.3.1.so`; WSL dependency inspection confirmed the local SystemC library under `external/noxim/bin/libs/systemc-2.3.1/lib-linux64`. The simulator completed successfully when that local library directory was supplied through `LD_LIBRARY_PATH`, reporting `Noxim simulation completed. (1020 cycles executed)`, 1 received packet, 2 received flits, global average delay 6 cycles, network throughput 0.1 flits/cycle, and total energy `3.99398e-09` J. No DeFT behavior, routing logic, topology logic, VN logic, fault injection logic, simulation behavior, or golden regression outputs were modified.
- **Follow-up tasks:** Start `T0005` to map Noxim extension points for topology construction, routing, selection, traffic generation, configuration, simulation control, statistics, and validation hooks before implementation.
- **Next ready-to-send prompt:**

```text
Start task T0005: Map Noxim extension points.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, and docs/DECISIONS.md.

Use the registered Noxim source tree at:
external/noxim

`external/noxim` is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

Do not implement DeFT behavior yet. Do not modify routing logic, topology logic, VN logic, fault injection logic, fault injection behavior, simulator behavior, or golden regression outputs in this task.

Goal: inspect the Noxim source tree and document the extension points responsible for topology construction, routing algorithms, selection strategies, traffic generation, configuration loading, simulation control, power/statistics reporting, and any existing regression or tracing hooks.

Known result so far: T0003 verified the documented build command `./build.sh` in WSL Ubuntu on 2026-05-05 and created `external/noxim/bin/noxim`. T0004 verified the documented Noxim User Guide short deterministic baseline simulation command in WSL Ubuntu on 2026-05-05. The successful T0004 run used `LD_LIBRARY_PATH` for the local SystemC shared library and reported `Noxim simulation completed. (1020 cycles executed)`.

This is a source-inspection and documentation task. Do not change Noxim source files. Read only the files needed to identify extension points. Keep findings traceable with file paths and concise responsibilities.

Ignore the peer evaluation document completely.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable implementation decision becomes clear, update docs/DECISIONS.md too.

At the end, provide:

1. Created files
2. Modified files
3. Whether any source code files changed
4. Validation result
5. Current project phase
6. Next recommended task
7. The next ready-to-send prompt
8. Suggested branch name for the next task
9. Suggested commit message
10. Unknowns or blockers
```

- **Suggested branch name for next task:** `codex/t0005-map-noxim-extension-points`

## 2026-05-05: Require Next Task Branch Names

- **Date:** 2026-05-05
- **Prompt summary:** Require Codex to provide a suggested branch name for the next recommended task after each completed task.
- **Full prompt summary in English:** The user asked, in Turkish, to also provide the branch name for the next task from now on.
- **Result summary:** Project rules and progress documentation were updated to require a suggested branch name for the next recommended task. The suggested branch for `T0005` is `codex/t0005-map-noxim-extension-points`.
- **Follow-up tasks:** Include the next-task branch name in final task summaries and next ready-to-send prompts.

## 2026-05-05: Start T0005 Noxim Extension Point Mapping

- **Date:** 2026-05-05
- **Prompt summary:** Inspect the registered Noxim source tree and document extension points for topology, routing, selection, traffic, configuration, simulation control, statistics, power, regression, and tracing without changing simulator behavior.
- **Full prompt:**

```text
Start task T0005: Map Noxim extension points.

Suggested branch name:
codex/t0005-map-noxim-extension-points

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, and docs/DECISIONS.md.

Use the registered Noxim source tree at:
external/noxim

`external/noxim` is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

Do not implement DeFT behavior yet. Do not modify routing logic, topology logic, VN logic, fault injection logic, fault injection behavior, simulator behavior, or golden regression outputs in this task.

Goal: inspect the Noxim source tree and document the extension points responsible for topology construction, routing algorithms, selection strategies, traffic generation, configuration loading, simulation control, power/statistics reporting, and any existing regression or tracing hooks.

Known result so far: T0003 verified the documented build command `./build.sh` in WSL Ubuntu on 2026-05-05 and created `external/noxim/bin/noxim`. T0004 verified the documented Noxim User Guide short deterministic baseline simulation command in WSL Ubuntu on 2026-05-05. The successful T0004 run used `LD_LIBRARY_PATH` for the local SystemC shared library and reported `Noxim simulation completed. (1020 cycles executed)`.

Before source inspection, verify the current `external/noxim` working tree status. If the previous LF-normalization changes were reverted, do not reapply them unless a documented WSL command fails and the failure confirms the line-ending issue.

This is a source-inspection and documentation task. Do not change Noxim source files. Read only the files needed to identify extension points. Keep findings traceable with file paths and concise responsibilities.

Ignore the peer evaluation document completely.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable implementation decision becomes clear, update docs/DECISIONS.md too.

At the end, provide:

1. Created files
2. Modified files
3. Whether any source code files changed
4. Validation result
5. Current project phase
6. Next recommended task
7. The next ready-to-send prompt
8. Suggested branch name for the next task
9. Suggested commit message
10. Unknowns or blockers
```

- **Result summary:** T0005 completed as a documentation-only source-inspection task. The parent repository and `external/noxim` both reported clean status before source inspection, so the earlier LF-normalization changes were not reapplied. The extension point map was recorded in `docs/ARCHITECTURE.md`, covering configuration/global state, simulation control, topology construction, routing algorithms, selection strategies, traffic generation, statistics/power, logging, VCD tracing, visual trace viewing, deterministic regression assets, and legacy explorer helpers. No Noxim source files, DeFT behavior, routing logic, topology logic, VN logic, fault injection logic, simulator behavior, or golden regression outputs were changed.
- **Follow-up tasks:** Start `T0006` to design the 2.5D router ID and coordinate mapping before implementation.
- **Next ready-to-send prompt:**

```text
Start task T0006: Design 2.5D Router ID and Coordinate Mapping.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, and docs/DECISIONS.md.

Use the registered Noxim source tree at:
external/noxim

`external/noxim` is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

Do not implement DeFT behavior yet. Do not modify Noxim source files, routing logic, topology logic, VN logic, fault injection logic, fault injection behavior, simulator behavior, or golden regression outputs in this task.

Goal: produce a small, reviewable design for router IDs and coordinates for the 2.5D chiplet topology before coding. The design must cover four 4x4 chiplets, active-interposer routers, boundary routers, Vertical Link endpoints, chiplet ownership, and how these concepts map onto or extend the existing Noxim node ID and coordinate model.

Known result so far: T0005 mapped the relevant Noxim extension points. Topology construction is centered in `external/noxim/src/NoC.*` and `external/noxim/src/Tile.h`; router ports, directions, buffers, and VC state are centered in `external/noxim/src/Router.*`, `external/noxim/src/GlobalParams.h`, and `external/noxim/src/DataStructs.h`; routing and selection extensions use registered strategy folders under `external/noxim/src/routingAlgorithms` and `external/noxim/src/selectionStrategies`.

Use `Extended_Proposal.pdf` as the primary project requirements source and the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` as the primary algorithmic reference. Use `Proposal.pdf` only as initial context. Ignore the peer evaluation document completely.

This is a documentation-design task. Read only the project sources and the Noxim files needed to ground the mapping. Clearly mark assumptions as `Assumption` and blockers as `Blocked`.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable mapping decision becomes clear, update docs/DECISIONS.md too.

At the end, provide:

1. Created files
2. Modified files
3. Whether any source code files changed
4. Validation result
5. Current project phase
6. Next recommended task
7. The next ready-to-send prompt
8. Suggested branch name for the next task
9. Suggested commit message
10. Unknowns or blockers
```

- **Suggested branch name for next task:** `codex/t0006-design-router-coordinate-mapping`

## 2026-05-05: Start T0006 Router ID and Coordinate Mapping Design

- **Date:** 2026-05-05
- **Prompt summary:** Design the 2.5D router ID and coordinate mapping for four 4x4 chiplets, active-interposer routers, boundary routers, VL endpoints, and chiplet ownership before implementation.
- **Full prompt:**

```text
Start task T0006: Design 2.5D Router ID and Coordinate Mapping.

Suggested branch name:
feat/t0006-design-router-coordinate-mapping

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, and docs/DECISIONS.md.

Use the registered Noxim source tree at:
external/noxim

`external/noxim` is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

Do not implement DeFT behavior yet. Do not modify Noxim source files, routing logic, topology logic, VN logic, fault injection logic, fault injection behavior, simulator behavior, or golden regression outputs in this task.

Goal: produce a small, reviewable design for router IDs and coordinates for the 2.5D chiplet topology before coding. The design must cover four 4x4 chiplets, active-interposer routers, boundary routers, Vertical Link endpoints, chiplet ownership, and how these concepts map onto or extend the existing Noxim node ID and coordinate model.

Known result so far: T0005 mapped the relevant Noxim extension points. Topology construction is centered in `external/noxim/src/NoC.*` and `external/noxim/src/Tile.h`; router ports, directions, buffers, and VC state are centered in `external/noxim/src/Router.*`, `external/noxim/src/GlobalParams.h`, and `external/noxim/src/DataStructs.h`; routing and selection extensions use registered strategy folders under `external/noxim/src/routingAlgorithms` and `external/noxim/src/selectionStrategies`.

Use `Extended_Proposal.pdf` as the primary project requirements source and the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` as the primary algorithmic reference. Use `Proposal.pdf` only as initial context. Ignore the peer evaluation document completely.

This is a documentation-design task. Read only the project sources and the Noxim files needed to ground the mapping. Clearly mark assumptions as `Assumption` and blockers as `Blocked`.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable mapping decision becomes clear, update docs/DECISIONS.md too.

At the end, provide:

1. Created files
2. Modified files
3. Whether any source code files changed
4. Validation result
5. Current project phase
6. Next recommended task
7. The next ready-to-send prompt
8. Suggested branch name for the next task
9. Suggested commit message
10. Unknowns or blockers
```

- **Result summary:** T0006 completed as a documentation-only design task. The mapping design records chiplet router IDs `0..63` as an 8x8 global chiplet footprint, active-interposer router IDs `64..127` as the same footprint offset by 64, chiplet ownership derived from global footprint coordinates, deterministic boundary-router slots for each chiplet, and physical bidirectional VL IDs `0..15` with chiplet and interposer endpoints. The design records the assumption that 16 physical bidirectional VLs can derive 32 directional VL channels or endpoint directions for later paper-aligned fault accounting. No Noxim source files or simulator behavior were changed.
- **Follow-up tasks:** Start `T0007` to implement the smallest 2.5D topology construction change using the T0006 mapping, without implementing DeFT routing behavior.
- **Next ready-to-send prompt:**

```text
Start task T0007: Implement 2.5D Topology Construction.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, and docs/DECISIONS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

`external/noxim` is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

This is the first explicit 2.5D topology implementation task. Keep the change as small as possible. Do not implement DeFT routing behavior, VN assignment behavior, VN transition restrictions, VL fault injection behavior, VL LUT generation, experiment automation, metrics changes, simulator behavior outside topology construction, or golden regression output updates in this task.

Goal: add the smallest code change needed for Noxim to instantiate the planned 2.5D topology shape from the T0006 design, using four 4x4 chiplets, an 8x8 active-interposer footprint, chiplet router IDs `0..63`, interposer router IDs `64..127`, and deterministic boundary/VL endpoint mapping. The goal is topology construction and mapping inspectability only, not DeFT routing.

Known result so far: T0005 mapped the relevant Noxim extension points. Topology construction is centered in `external/noxim/src/NoC.*` and `external/noxim/src/Tile.h`; router ports, directions, buffers, and VC state are centered in `external/noxim/src/Router.*`, `external/noxim/src/GlobalParams.h`, and `external/noxim/src/DataStructs.h`. T0006 documented the router ID and coordinate design in `docs/ARCHITECTURE.md`, including the required layer-aware helper surface and the current blocker that Noxim has no explicit `DIRECTION_UP` or `DIRECTION_DOWN`.

Use `Extended_Proposal.pdf` as the primary project requirements source and the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` as the primary algorithmic reference. Use `Proposal.pdf` only as initial context. Ignore the peer evaluation document completely.

Before coding, produce a short implementation plan. Work only on the selected topology-construction task. Do not modify unrelated files. Clearly mark assumptions as `Assumption` and blockers as `Blocked`.

Use only known validation commands. The baseline build command is documented as `./build.sh` from `external/noxim` in WSL Ubuntu. The baseline short simulation command is documented in `docs/VALIDATION.md`; only run a simulation if the implementation provides a documented minimal 2.5D configuration or another clearly valid invocation. Do not use `./regression.sh --update`.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable implementation decision becomes clear, update docs/DECISIONS.md too.

At the end, provide:

1. Created files
2. Modified files
3. Whether any source code files changed
4. Validation result
5. Current project phase
6. Next recommended task
7. The next ready-to-send prompt
8. Suggested branch name for the next task
9. Suggested commit message
10. Unknowns or blockers
```

- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: design 2.5d router coordinate mapping`

## 2026-05-05: Do Not Create Task Branches Automatically

- **Date:** 2026-05-05
- **Prompt summary:** The user instructed Codex not to create new branches for tasks ever again and to continue on the existing branch.
- **Full prompt:**

```text
do not try to create new branches for tasks ever again. Continue on exiting one.
```

- **Result summary:** The instruction is recorded as ADR-0016. Future tasks must continue on the existing branch by default and must not create or switch task branches unless the user explicitly requests a branch operation in that future message.

## 2026-05-06: Start T0007 2.5D Topology Construction

- **Date:** 2026-05-06
- **Prompt summary:** Implement the smallest Noxim source change needed to instantiate the T0006 2.5D topology shape, with four 4x4 chiplets, an 8x8 active-interposer footprint, router IDs `0..127`, and deterministic VL endpoint mapping, without implementing DeFT routing or fault behavior.
- **Full prompt:**

```text
Start task T0007: Implement 2.5D Topology Construction.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, and docs/DECISIONS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

`external/noxim` is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

This is the first explicit 2.5D topology implementation task. Keep the change as small as possible. Do not implement DeFT routing behavior, VN assignment behavior, VN transition restrictions, VL fault injection behavior, VL LUT generation, experiment automation, metrics changes, simulator behavior outside topology construction, or golden regression output updates in this task.

Goal: add the smallest code change needed for Noxim to instantiate the planned 2.5D topology shape from the T0006 design, using four 4x4 chiplets, an 8x8 active-interposer footprint, chiplet router IDs `0..63`, interposer router IDs `64..127`, and deterministic boundary/VL endpoint mapping. The goal is topology construction and mapping inspectability only, not DeFT routing.

Known result so far: T0005 mapped the relevant Noxim extension points. Topology construction is centered in `external/noxim/src/NoC.*` and `external/noxim/src/Tile.h`; router ports, directions, buffers, and VC state are centered in `external/noxim/src/Router.*`, `external/noxim/src/GlobalParams.h`, and `external/noxim/src/DataStructs.h`. T0006 documented the router ID and coordinate design in `docs/ARCHITECTURE.md`, including the required layer-aware helper surface and the current blocker that Noxim has no explicit `DIRECTION_UP` or `DIRECTION_DOWN`.

Use `Extended_Proposal.pdf` as the primary project requirements source and the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` as the primary algorithmic reference. Use `Proposal.pdf` only as initial context. Ignore the peer evaluation document completely.

Before coding, produce a short implementation plan. Work only on the selected topology-construction task. Do not modify unrelated files. Clearly mark assumptions as `Assumption` and blockers as `Blocked`.

Use only known validation commands. The baseline build command is documented as `./build.sh` from `external/noxim` in WSL Ubuntu. The baseline short simulation command is documented in `docs/VALIDATION.md`; only run a simulation if the implementation provides a documented minimal 2.5D configuration or another clearly valid invocation. Do not use `./regression.sh --update`.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable implementation decision becomes clear, update docs/DECISIONS.md too.

At the end, provide:

1. Created files
2. Modified files
3. Whether any source code files changed
4. Validation result
5. Current project phase
6. Next recommended task
7. The next ready-to-send prompt
8. Suggested branch name for the next task, which should be `None; continue on the existing branch`
9. Suggested commit message
10. Unknowns or blockers
```

- **Result summary:** T0007 completed. Noxim now has a selectable `DEFT_2_5D` topology, a layer-aware `DeftTopology` helper, a `NoC::buildDeft2D()` construction path, and a no-traffic construction smoke config. Validation built successfully in WSL Ubuntu and the construction smoke reported 64 chiplet routers, 64 interposer routers, 128 total routers, 96 chiplet-local cardinal links, 112 interposer cardinal links, and 16 physical bidirectional VLs with the expected endpoint table. No DeFT routing, VN, fault injection, VL LUT, experiment automation, or golden regression output update was implemented.
- **Follow-up tasks:** Start `T0008` to add the Vertical Link data model/query surface needed by later fault injection and routing tasks, while keeping fault injection behavior out of scope.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `feat: add 2.5d topology construction`

## 2026-05-06: Start T0008 Vertical Link Data Model

- **Date:** 2026-05-06
- **Prompt summary:** Add the smallest centralized Vertical Link data model/query surface after T0007, representing physical bidirectional VL identity, chiplet ownership, slot, endpoints, and default functional state without adding fault injection, routing, VN, LUT, metrics, experiment automation, or golden-output updates.
- **Full prompt:**

```text
Start task T0008: Add Vertical Link Data Model.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, and docs/DECISIONS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

`external/noxim` is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

T0007 added selectable `DEFT_2_5D` topology construction, the static `DeftTopology` mapping helper, four isolated 4x4 chiplet meshes, an 8x8 active-interposer mesh, and the deterministic 16-VL endpoint table. The construction smoke config is:
external/noxim/config_examples/deft_2_5d_topology.yaml

Goal: add the smallest Vertical Link data model/query surface needed after T0007. Represent each physical bidirectional VL with stable ID, owner chiplet, slot, chiplet endpoint, interposer endpoint, and default functional state. Keep the model inspectable and reusable by later fault injection and routing tasks.

Keep this task independent from startup-time fault injection behavior, fault-mask generation, fault-rate configuration, DeFT routing behavior, VN assignment behavior, VN transition restrictions, VL LUT generation, experiment automation, metrics changes, and golden regression output updates.

Known result so far: T0007's `DeftTopology` helper already contains static endpoint records and `is_functional=true` in the construction table, but it does not yet provide a mutable or centralized fault-state model, validation API, or routing-facing query contract. T0008 should decide the smallest safe extension without changing route selection.

Use `Extended_Proposal.pdf` as the primary project requirements source and the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` as the primary algorithmic reference. Use `Proposal.pdf` only as initial context. Ignore the peer evaluation document completely.

Before coding, produce a short implementation plan. Work only on the selected Vertical Link data-model task. Do not modify unrelated files. Clearly mark assumptions as `Assumption` and blockers as `Blocked`.

Use only known validation commands. The baseline build command is documented as `./build.sh` from `external/noxim` in WSL Ubuntu. The T0007 construction smoke command is documented in `docs/VALIDATION.md`; only run a simulation if the task preserves the construction-only no-traffic invocation or provides another clearly valid invocation. Do not use `./regression.sh --update`.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable implementation decision becomes clear, update docs/DECISIONS.md too.

At the end, provide:

1. Created files
2. Modified files
3. Whether any source code files changed
4. Validation result
5. Current project phase
6. Next recommended task
7. The next ready-to-send prompt
8. Suggested branch name for the next task, which should be `None; continue on the existing branch`
9. Suggested commit message
10. Unknowns or blockers
```

- **Result summary:** T0008 completed. `DeftTopology` now owns the centralized physical VL model/query surface, with stable 16-VL identity and endpoint records, mutable default functional state, reset/set/query helpers, functional-link queries per chiplet, bidirectional endpoint lookup, chiplet endpoint lookup, and structural validation for stable IDs, ownership, slots, unique endpoints, same-footprint endpoints, and exactly four VLs per chiplet. `NoC::buildDeft2D()` validates the model and prints `functional=true` for all default VLs. No startup-time fault injection, fault-mask generation, fault-rate configuration, DeFT routing, VN behavior, VL LUT, experiment automation, metrics change, or golden regression output update was implemented.
- **Follow-up tasks:** Start `T0009` to add or formalize the boundary-router identification/query surface needed by later DeFT routing and VN tasks.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `feat: add vertical link data model`

## 2026-05-06: Start T0009 Boundary Router Identification

- **Date:** 2026-05-06
- **Prompt summary:** Add the smallest boundary-router identification/query surface after T0008, representing each chiplet boundary router with stable router ID, owner chiplet, local coordinate, VL slot, attached VL ID, and attached interposer endpoint without adding fault injection, routing, VN, LUT, metrics, experiment automation, or golden-output updates.
- **Full prompt:**

```text
Start task T0009: Add Boundary Router Identification.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, and docs/DECISIONS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

external/noxim is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

T0007 added selectable DEFT_2_5D topology construction, the DeftTopology mapping helper, four isolated 4x4 chiplet meshes, an 8x8 active-interposer mesh, and the deterministic 16-VL endpoint table. T0008 extended DeftTopology into the centralized physical Vertical Link model/query surface with stable VL IDs, chiplet ownership, slots, chiplet/interposer endpoints, default functional state, functional-state query/mutation helpers, and structural VL validation. The construction smoke config is:
external/noxim/config_examples/deft_2_5d_topology.yaml

Goal: add the smallest boundary-router identification/query surface needed after T0008. Represent each chiplet boundary router with stable router ID, owner chiplet, local coordinate, VL slot, attached VL ID, and attached interposer endpoint. Keep the model inspectable and reusable by later DeFT routing and VN tasks.

Keep this task independent from startup-time fault injection behavior, fault-mask generation, fault-rate configuration, DeFT routing behavior, route selection, VN assignment behavior, VN transition restrictions, VL LUT generation, experiment automation, metrics changes, and golden regression output updates.

Known result so far: T0007 already added DeftTopology::isBoundaryRouter(id), RouterInfo::boundary_router, and VL endpoint lookup. T0008 added centralized VL state and endpoint queries. T0009 should decide whether those existing surfaces are sufficient or whether a small explicit boundary-router inventory/query contract is needed. Do not duplicate data unnecessarily.

Use Extended_Proposal.pdf as the primary project requirements source and the original DeFT paper at docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf as the primary algorithmic reference. Use Proposal.pdf only as initial context. Ignore the peer evaluation document completely.

Before coding, produce a short implementation plan. Work only on the selected boundary-router identification task. Do not modify unrelated files. Clearly mark assumptions as Assumption and blockers as Blocked.

Use only known validation commands. The baseline build command is documented as ./build.sh from external/noxim in WSL Ubuntu. The construction smoke command is documented in docs/VALIDATION.md; only run a simulation if the task preserves the construction-only no-traffic invocation or provides another clearly valid invocation. Do not use ./regression.sh --update.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable implementation decision becomes clear, update docs/DECISIONS.md too.

At the end, provide:

1. Created files
2. Modified files
3. Whether any source code files changed
4. Validation result
5. Current project phase
6. Next recommended task
7. The next ready-to-send prompt
8. Suggested branch name for the next task, which should be None; continue on the existing branch
9. Suggested commit message
10. Unknowns or blockers
```

- **Result summary:** T0009 completed. `DeftTopology` now exposes `BoundaryRouterInfo` as a derived view over the centralized VL model, with inventory, per-chiplet lookup, router-ID lookup, VL-ID lookup, and structural validation helpers. `NoC::buildDeft2D()` validates the boundary-router model and prints all 16 boundary-router records during construction smoke runs. Validation built successfully in WSL Ubuntu and the construction smoke reported `boundary_routers=16` with the expected router IDs, chiplet owners, local coordinates, slots, attached VL IDs, and interposer endpoints. No startup-time fault injection, fault-mask generation, fault-rate configuration, DeFT routing, route selection, VN behavior, VL LUT, experiment automation, metrics change, or golden regression output update was implemented.
- **Follow-up tasks:** Start `T0010` to implement the centralized startup-time permanent Vertical Link fault injection manager using the existing VL and boundary-router query surfaces.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `feat: add boundary router inventory`

## 2026-05-07: Start T0010 Fault Injection Manager

- **Date:** 2026-05-07
- **Prompt summary:** Implement the smallest centralized startup-time permanent Vertical Link fault injection manager after T0009, using the centralized physical VL model and boundary-router query surfaces, while keeping routing, VN behavior, LUT generation, metrics, experiment automation, and golden outputs out of scope.
- **Full prompt:**

```text
Start task T0010: Implement Fault Injection Manager.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, and docs/DECISIONS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

external/noxim is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

T0007 added selectable DEFT_2_5D topology construction, the DeftTopology mapping helper, four isolated 4x4 chiplet meshes, an 8x8 active-interposer mesh, and the deterministic 16-VL endpoint table. T0008 extended DeftTopology into the centralized physical Vertical Link model/query surface with stable VL IDs, chiplet ownership, slots, chiplet/interposer endpoints, default functional state, functional-state query/mutation helpers, and structural VL validation. T0009 added the derived boundary-router inventory/query surface with stable router ID, owner chiplet, local coordinate, VL slot, attached VL ID, and attached interposer endpoint. The construction smoke config is:
external/noxim/config_examples/deft_2_5d_topology.yaml

Goal: add the smallest centralized startup-time permanent Vertical Link fault injection manager needed after T0009. The manager should use the existing physical VL model and mutation helpers to mark selected VLs functional or faulty before simulation traffic runs. Keep the task focused on fault-state setup and inspectability only.

Keep this task independent from DeFT routing behavior, route selection, VN assignment behavior, VN transition restrictions, VL LUT generation, experiment automation, metrics changes, and golden regression output updates. Do not implement T0011 fault-mask validation beyond the smallest guard needed to avoid fully disconnecting any chiplet if the selected T0010 design requires it.

Known result so far: T0008 provides resetVerticalLinkStates(), setVerticalLinkFunctional(), isVerticalLinkFunctional(), functionalVerticalLinksForChiplet(chiplet_id), hasFunctionalVerticalLinkForChiplet(chiplet_id), and structural VL validation. T0009 provides boundary-router inventory and lookup helpers. T0010 should reuse these surfaces and should not introduce a parallel VL or boundary-router inventory.

Use Extended_Proposal.pdf as the primary project requirements source and the original DeFT paper at docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf as the primary algorithmic reference. Use Proposal.pdf only as initial context. Ignore the peer evaluation document completely.

Before coding, produce a short implementation plan. Work only on the selected fault-injection-manager task. Do not modify unrelated files. Clearly mark assumptions as Assumption and blockers as Blocked.

Use only known validation commands. The baseline build command is documented as ./build.sh from external/noxim in WSL Ubuntu. The construction smoke command is documented in docs/VALIDATION.md; only run a simulation if the task preserves the construction-only no-traffic invocation or provides another clearly valid invocation. Do not use ./regression.sh --update.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable implementation decision becomes clear, update docs/DECISIONS.md too.

At the end, provide:

1. Created files
2. Modified files
3. Whether any source code files changed
4. Validation result
5. Current project phase
6. Next recommended task
7. The next ready-to-send prompt
8. Suggested branch name for the next task, which should be None; continue on the existing branch
9. Suggested commit message
10. Unknowns or blockers
```

- **Result summary:** T0010 completed. `DeftFaultInjectionManager` now applies startup permanent physical VL fault state through the centralized `DeftTopology` model. The configuration surface supports `deft_faulty_vertical_links` for explicit physical VL IDs and `deft_vl_fault_count` for seed-controlled random physical VL fault selection. The manager rejects incompatible modes, duplicate/out-of-range IDs, and masks that leave any chiplet with zero functional VLs. Construction output reports the selected fault mask and per-chiplet functional counts. Validation built successfully, the default construction smoke reported no faults, and a seed-0 four-fault smoke selected VLs `[0,1,5,13]` with functional per-chiplet counts `2,3,4,3`. No routing, VN, LUT, metrics, experiment automation, or golden-output work was added.
- **Follow-up tasks:** Start `T0011` to add focused fault-mask validation for explicit/generated masks up to the proposal target without changing routing or VN behavior.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `feat: add vertical link fault injection manager`

## 2026-05-07: Start T0011 Fault Mask Validation

- **Date:** 2026-05-07
- **Prompt summary:** Add focused validation for explicit and generated DeFT Vertical Link fault masks against the current physical VL model, especially masks corresponding to the proposal's 25% target, without changing routing, VN behavior, LUT generation, metrics, experiments, or golden outputs.
- **Full prompt:**

```text
Start task T0011: Add Fault Mask Validation.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, and docs/DECISIONS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

external/noxim is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

T0007 added selectable DEFT_2_5D topology construction, the DeftTopology mapping helper, four isolated 4x4 chiplet meshes, an 8x8 active-interposer mesh, and the deterministic 16-VL endpoint table. T0008 extended DeftTopology into the centralized physical Vertical Link model/query surface. T0009 added the derived boundary-router inventory/query surface. T0010 added DeftFaultInjectionManager, deft_faulty_vertical_links, deft_vl_fault_count, seed-controlled random physical VL fault selection, startup fault-state application, inspectability output, and the minimum guard that no chiplet is left with zero functional VLs. The construction smoke config is:
external/noxim/config_examples/deft_2_5d_topology.yaml

Goal: add the smallest focused fault-mask validation layer needed after T0010. Validate explicit and generated fault masks for the current physical VL model, especially masks corresponding to the proposal's 25% target, while keeping the task focused on validation and inspectability only.

Keep this task independent from DeFT routing behavior, route selection, VN assignment behavior, VN transition restrictions, VL LUT generation, experiment automation, metrics changes, and golden regression output updates.

Known result so far: T0010 counts configured faults over the current 16 physical bidirectional VLs and leaves percentage conversion/directional accounting as future work. Decide the smallest validation surface that keeps explicit/generated masks reproducible and rejects masks that are invalid for the current physical VL model. Do not introduce a parallel VL or boundary-router inventory.

Use Extended_Proposal.pdf as the primary project requirements source and the original DeFT paper at docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf as the primary algorithmic reference. Use Proposal.pdf only as initial context. Ignore the peer evaluation document completely.

Before coding, produce a short implementation plan. Work only on the selected fault-mask-validation task. Do not modify unrelated files. Clearly mark assumptions as Assumption and blockers as Blocked.

Use only known validation commands. The baseline build command is documented as ./build.sh from external/noxim in WSL Ubuntu. The construction smoke command and the T0010 faulted construction smoke command are documented in docs/VALIDATION.md; only run simulations if they preserve construction-only no-traffic invocation or provide another clearly valid invocation. Do not use ./regression.sh --update.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable implementation decision becomes clear, update docs/DECISIONS.md too.

At the end, provide:

1. Created files
2. Modified files
3. Whether any source code files changed
4. Validation result
5. Current project phase
6. Next recommended task
7. The next ready-to-send prompt
8. Suggested branch name for the next task, which should be None; continue on the existing branch
9. Suggested commit message
10. Unknowns or blockers
```

- **Result summary:** T0011 completed. `DeftFaultInjection::validateFaultMask()` now normalizes explicit and generated masks, rejects duplicate/out-of-range/nonexistent physical VL IDs, rejects impossible connected-chiplet mask sizes, and rejects masks that leave any chiplet with zero functional physical VLs. Startup fault application validates both selection modes before mutating `DeftTopology` state. Construction output now reports physical fault count over 16 current physical VLs, a `current_physical_25_percent_target` flag, per-chiplet faulty counts, and per-chiplet functional counts. Validation built successfully, accepted generated and explicit four-fault current-physical-25% masks, and rejected an explicit mask that disconnected chiplet 0. No routing, VN, LUT, metrics, experiment automation, or golden-output work was added.
- **Follow-up tasks:** Start `T0012` to design the VN.0/VN.1 state representation before implementing VN assignment or transition restrictions.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `feat: add fault mask validation`

## 2026-05-07: Start T0012 VN State Representation Design

- **Date:** 2026-05-07
- **Prompt summary:** Design the smallest safe representation for DeFT VN.0/VN.1 state in Noxim, deciding how it maps to existing virtual-channel structures without implementing VN assignment behavior, transition restrictions, route selection, VL LUT generation, metrics, experiments, or source-code changes.
- **Full prompt:**

```text
Start task T0012: Design VN State Representation.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, docs/DECISIONS.md, and docs/PROMPTS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

external/noxim is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

T0007 added selectable DEFT_2_5D topology construction and the DeftTopology mapping helper. T0008 centralized the physical Vertical Link model and functional state. T0009 added the derived boundary-router inventory. T0010 added startup-time permanent physical VL fault injection. T0011 added focused explicit/generated fault-mask validation and inspectability against the current 16 physical bidirectional VL model.

Goal: design the smallest safe VN state representation for future DeFT VN assignment and transition-restriction tasks. Decide where VN.0/VN.1 state should live in the current Noxim data path, how it should map to the existing virtual-channel structures, and which metadata fields or helper APIs future implementation should use.

Keep this task documentation-first and independent from implementation of VN assignment behavior, VN transition restrictions, route selection, VL LUT generation, experiment automation, metrics changes, and golden regression output updates. Do not change simulator behavior in this task unless source inspection proves that a tiny compile-only metadata scaffold is required; if so, justify it before editing.

Known result so far: Noxim already has n_virtual_channels, flit/packet structs in external/noxim/src/DataStructs.h, router pipeline logic in external/noxim/src/Router.*, route data in the routing algorithm interface, and DEFT_2_5D topology/boundary/VL/fault-state query surfaces. T0012 should inspect these surfaces and document a design that preserves exactly two DeFT VNs without disrupting baseline routing.

Use Extended_Proposal.pdf as the primary project requirements source and the original DeFT paper at docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf as the primary algorithmic reference. Use Proposal.pdf only as initial context. Ignore the peer evaluation document completely.

Before editing, produce a short implementation plan. Work only on the selected VN state representation design task. Do not modify unrelated files. Clearly mark assumptions as Assumption and blockers as Blocked.

Use only known validation commands. For a documentation-only task, use repository and submodule status checks unless a source change is explicitly justified. Do not run simulations unless the design task unexpectedly changes source code and the existing construction-only no-traffic invocation remains valid. Do not use ./regression.sh --update.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable implementation decision becomes clear, update docs/DECISIONS.md too.

At the end, provide:

1. Created files
2. Modified files
3. Whether any source code files changed
4. Validation result
5. Current project phase
6. Next recommended task
7. The next ready-to-send prompt
8. Suggested branch name for the next task, which should be None; continue on the existing branch
9. Suggested commit message
10. Unknowns or blockers
```

- **Result summary:** T0012 completed as a documentation-only design task. The selected representation maps DeFT VN state directly onto Noxim VC IDs: VC 0 is VN.0 and VC 1 is VN.1 for DeFT-enabled runs. No separate `vn_id` field should be added unless a future implementation task proves it necessary. Future DeFT-enabled routing should require exactly two configured VCs. Source inspection found that the current router reservation path assumes input VC and output VC are the same index, so future boundary-router reassignment must make downstream full-status checks and forwarded `Flit::vc_id` agree on the selected output VC. No Noxim source files or simulator behavior were changed.
- **Follow-up tasks:** Start `T0013` to implement DeFT VN assignment rules using the T0012 VC-ID mapping.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: design DeFT VN state representation`

## 2026-05-07: Start T0013 VN Assignment Rules

- **Date:** 2026-05-07
- **Prompt summary:** Implement the smallest safe DeFT VN assignment behavior for source routers and boundary routers using VC 0 as VN.0 and VC 1 as VN.1, preserving baseline behavior outside DeFT-enabled runs and keeping final transition enforcement, VL LUT work, experiments, metrics, and golden outputs out of scope.
- **Full prompt:**

```text
Start task T0013: Implement VN Assignment Rules.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, docs/DECISIONS.md, and docs/PROMPTS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

external/noxim is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

T0007 added selectable DEFT_2_5D topology construction and the DeftTopology mapping helper. T0008 centralized the physical Vertical Link model and functional state. T0009 added the derived boundary-router inventory. T0010 added startup-time permanent physical VL fault injection. T0011 added focused explicit/generated fault-mask validation and inspectability against the current 16 physical bidirectional VL model. T0012 designed the DeFT VN state representation: for DeFT-enabled runs, VC 0 is VN.0 and VC 1 is VN.1. Do not add a parallel vn_id field unless source inspection proves it is necessary.

Goal: implement the smallest safe DeFT VN assignment behavior for source routers and boundary routers using the T0012 mapping. Inter-chiplet traffic from non-boundary source routers should start in VN.0. Cases where either VN is legal should use round-robin assignment or reassignment. Traffic coming from the interposer into a destination chiplet should go to or remain in VN.1. Preserve existing baseline routing behavior outside DeFT-enabled runs.

Known risk: the current router reservation path assumes input VC equals output VC. If boundary-router VN reassignment requires output-VC-aware reservation/forwarding, keep that change narrowly scoped and make downstream full-status checks and forwarded Flit::vc_id agree on the selected output VC.

Keep this task independent from VN transition-restriction enforcement beyond assignment monotonicity, VL LUT generation, experiment automation, metrics changes, and golden regression output updates. Do not implement final VL selection or DeFT performance experiments in this task.

Use Extended_Proposal.pdf as the primary project requirements source and the original DeFT paper at docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf as the primary algorithmic reference. Use Proposal.pdf only as initial context. Ignore the peer evaluation document completely.

Before coding, produce a short implementation plan. Work only on the selected VN assignment task. Do not modify unrelated files. Clearly mark assumptions as Assumption and blockers as Blocked.

Use only known validation commands. The baseline build command is documented as ./build.sh from external/noxim in WSL Ubuntu. The construction-only no-traffic smoke command is documented in docs/VALIDATION.md; only run simulations that preserve that known invocation shape unless a new command is discovered from source documentation. Do not use ./regression.sh --update.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable implementation decision becomes clear, update docs/DECISIONS.md too.

At the end, provide:

1. Created files
2. Modified files
3. Whether any source code files changed
4. Validation result
5. Current project phase
6. Next recommended task
7. The next ready-to-send prompt
8. Suggested branch name for the next task, which should be None; continue on the existing branch
9. Suggested commit message
10. Unknowns or blockers
```

- **Result summary:** T0013 completed. `DeftVirtualNetwork` now maps DeFT VN.0/VN.1 to VC 0/VC 1, assigns source packets according to DeFT source rules, and selects boundary output VCs for reassignment. `DEFT_2_5D` now requires exactly two VCs. The router reservation/forwarding path now carries selected output-VC metadata so downstream full-status checks and forwarded `Flit::vc_id` agree. Validation built successfully and the documented construction-only no-traffic smoke completed with the expected topology and zero traffic. No final VL selection, full movement-transition enforcement, experiment automation, metrics change, golden output update, or DeFT performance experiment was added.
- **Follow-up tasks:** Start `T0014` to enforce VN movement-transition restrictions after the T0013 assignment foundation.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `feat: implement DeFT VN assignment`

## 2026-05-07: Start T0014 VN Transition Restrictions

- **Date:** 2026-05-07
- **Prompt summary:** Enforce the smallest safe DeFT VN transition restrictions after T0013: forbid VN.1 to VN.0, Up-to-Horizontal in VN.0, and Horizontal-to-Down in VN.1, while preserving baseline behavior outside `DEFT_2_5D` and keeping VL LUT, experiments, metrics, and golden outputs out of scope.
- **Full prompt:**

```text
Start task T0014: Enforce VN Transition Restrictions.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, docs/DECISIONS.md, and docs/PROMPTS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

`external/noxim` is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

T0007 added selectable `DEFT_2_5D` topology construction and the `DeftTopology` mapping helper. T0008 centralized the physical Vertical Link model and functional state. T0009 added the derived boundary-router inventory. T0010 added startup-time permanent physical VL fault injection. T0011 added focused explicit/generated fault-mask validation and inspectability against the current 16 physical bidirectional VL model. T0012 mapped DeFT VN state directly onto Noxim VC IDs: VC 0 is VN.0 and VC 1 is VN.1. T0013 implemented the first VN assignment behavior and output-VC-aware reservation/forwarding: `DEFT_2_5D` now requires exactly two VCs, source assignment uses VN.0 or round-robin where legal, boundary reassignment preserves monotonicity, and interposer-to-destination-chiplet traffic goes to VN.1.

Goal: implement the smallest safe DeFT VN transition-restriction enforcement after T0013. Enforce the DeFT restrictions needed for deadlock freedom: VN.1 to VN.0 is forbidden, Up-to-Horizontal movement in VN.0 is forbidden, and Horizontal-to-Down movement in VN.1 is forbidden. Preserve existing baseline routing behavior outside `DEFT_2_5D`.

Keep this task independent from final VL LUT generation, experiment automation, metrics changes, golden regression output updates, and DeFT performance experiments. Do not implement final VL selection in this task. Keep any movement-state metadata or route filtering narrowly scoped and justify it before editing.

Known result so far: `Packet::vc_id`, `Flit::vc_id`, and `RouteData::vc_id` are the VN/VC state carrier. `DeftVirtualNetwork` exposes VN constants, `canTransition()`, source assignment, boundary output-VC selection, and boundary round-robin state. `Router::txProcess()` now has selected output-VC metadata in reservations, and forwarded `Flit::vc_id` agrees with downstream full-status checks. `DeftTopology` provides layer, boundary-router, and VL endpoint query surfaces. `DIRECTION_HUB` is still the current physical carrier for Vertical Link traversal, not a final semantic Up/Down port model.

Use `Extended_Proposal.pdf` as the primary project requirements source and the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` as the primary algorithmic reference. Use `Proposal.pdf` only as initial context. Ignore the peer evaluation document completely.

Before coding, produce a short implementation plan. Work only on the selected VN transition-restriction task. Do not modify unrelated files. Clearly mark assumptions as `Assumption` and blockers as `Blocked`.

Use only known validation commands. The baseline build command is documented as `./build.sh` from `external/noxim` in WSL Ubuntu. The construction-only no-traffic smoke command is documented in `docs/VALIDATION.md`; only run simulations that preserve that known invocation shape unless a new command is discovered from source documentation. Do not use `./regression.sh --update`.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable implementation decision becomes clear, update docs/DECISIONS.md too.

At the end, provide:

1. Created files
2. Modified files
3. Whether any source code files changed
4. Validation result
5. Current project phase
6. Next recommended task
7. The next ready-to-send prompt
8. Suggested branch name for the next task, which should be `None; continue on the existing branch`
9. Suggested commit message
10. Unknowns or blockers
```

- **Result summary:** T0014 completed. `DeftVirtualNetwork` now filters DeFT output directions using movement context derived from the input port, candidate output direction, router layer, and boundary-router status. `Router::selectionFunction()` applies that filtering only for `DEFT_2_5D`, and `Router::txProcess()` skips reservation if no legal DeFT output candidate exists. VN.1 to VN.0 remains forbidden through `canTransition()`. Up-to-Horizontal in VN.0 is avoided by forcing output VC VN.1 before horizontal forwarding after an Up input. Horizontal-to-Down in VN.1 is rejected, while Horizontal-to-Down in VN.0 preserves VN.0 and avoids consuming boundary round-robin state. Validation built successfully and the documented construction-only no-traffic smoke completed with the expected topology and zero traffic. No final VL selection, LUT generation, experiment automation, metrics change, golden output update, or DeFT performance experiment was added.
- **Follow-up tasks:** Start `T0015` to design the offline VL LUT format before implementing generation or runtime lookup.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `feat: enforce DeFT VN transition restrictions`

## 2026-05-07: Start T0015 Offline VL LUT Format Design

- **Date:** 2026-05-07
- **Prompt summary:** Design the offline Vertical Link LUT format before implementing generation or runtime lookup, defining lookup keys, values, storage format, deterministic ordering, and mapping to current physical VL IDs, fault masks, source router context, destination chiplet, and future runtime selection.
- **Full prompt:**

```text
Start task T0015: Design Offline VL LUT Format.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, docs/DECISIONS.md, and docs/PROMPTS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

external/noxim is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

T0007 added selectable DEFT_2_5D topology construction and the DeftTopology mapping helper. T0008 centralized the physical Vertical Link model and functional state. T0009 added the derived boundary-router inventory. T0010 added startup-time permanent physical VL fault injection. T0011 added focused explicit/generated fault-mask validation and inspectability against the current 16 physical bidirectional VL model. T0012 mapped DeFT VN state directly onto Noxim VC IDs. T0013 implemented VN assignment and output-VC-aware reservation/forwarding. T0014 added DeFT-only VN transition-restriction filtering without packet/flit movement-history metadata.

Goal: design the offline Vertical Link LUT format before implementing generation or runtime lookup. Define the lookup keys, values, storage format, deterministic ordering, and how the schema maps to current physical VL IDs, fault masks, source chiplet/router context, destination chiplet, and future runtime selection.

Keep this task documentation-first and independent from LUT generator implementation, runtime LUT loading, final VL selection, experiment automation, metrics changes, golden regression output updates, and DeFT performance experiments. Do not modify Noxim source code unless source inspection proves a tiny documentation-support scaffold is required; justify any such change before editing.

Use Extended_Proposal.pdf as the primary project requirements source and the original DeFT paper at docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf as the primary algorithmic reference. Use Proposal.pdf only as initial context. Ignore the peer evaluation document completely.

Before editing, produce a short implementation plan. Work only on the selected offline VL LUT format design task. Do not modify unrelated files. Clearly mark assumptions as Assumption and blockers as Blocked.

Use only known validation commands. For a documentation-only task, use repository and submodule status checks unless a source change is explicitly justified. Do not run simulations unless source code changes and the existing construction-only no-traffic invocation remains valid. Do not use ./regression.sh --update.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable implementation decision becomes clear, update docs/DECISIONS.md too.

At the end, provide:

1. Created files
2. Modified files
3. Whether any source code files changed
4. Validation result
5. Current project phase
6. Next recommended task
7. The next ready-to-send prompt
8. Suggested branch name for the next task, which should be None; continue on the existing branch
9. Suggested commit message
10. Unknowns or blockers
```

- **Result summary:** T0015 completed as a documentation-only design task. `docs/ARCHITECTURE.md` now defines `deft_vl_lut.v1`, a restricted deterministic YAML schema keyed by physical fault-mask bitset, source chiplet ID, source router ID, and destination chiplet ID. Entry values store paired source-exit and destination-entry physical VL selections, including selected VL ID, chiplet boundary endpoint, interposer endpoint, ranked functional candidate IDs, and optional cost fields for inspectability. ADR-0026 records the durable schema decision. No Noxim source code, generator implementation, runtime lookup, route selection, metrics, simulations, experiments, or golden regression outputs were changed.
- **Follow-up tasks:** Start `T0016` to implement the offline VL LUT generator that emits the documented `deft_vl_lut.v1` schema.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: design offline VL LUT format`

## 2026-05-07: Start T0016 Offline VL LUT Generator

- **Date:** 2026-05-07
- **Prompt summary:** Implement the smallest focused offline Vertical Link LUT generator that emits the T0015 `deft_vl_lut.v1` schema, uses Manhattan distance plus load imbalance with `rho = 0.01`, excludes faulty VLs, stays independent from runtime LUT loading and final route selection, and updates project tracking documents.
- **Full prompt:**

```text
Start task T0016: Implement Offline VL LUT Generator.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, docs/DECISIONS.md, and docs/PROMPTS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

external/noxim is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

T0007 added selectable DEFT_2_5D topology construction and the DeftTopology mapping helper. T0008 centralized the physical Vertical Link model and functional state. T0009 added the derived boundary-router inventory. T0010 added startup-time permanent physical VL fault injection. T0011 added focused explicit/generated fault-mask validation and inspectability against the current 16 physical bidirectional VL model. T0012 mapped DeFT VN state directly onto Noxim VC IDs. T0013 implemented VN assignment and output-VC-aware reservation/forwarding. T0014 added DeFT-only VN transition-restriction filtering without packet/flit movement-history metadata. T0015 designed the offline VL LUT format: deft_vl_lut.v1, a restricted deterministic YAML schema keyed by physical fault-mask bitset, source chiplet ID, source router ID, and destination chiplet ID, with paired source_exit and destination_entry values over current physical VL IDs.

Goal: implement the smallest focused offline Vertical Link LUT generator that emits the T0015 deft_vl_lut.v1 schema. Generate deterministic fault-aware source-exit and destination-entry VL selections using the proposal's cost formulation: Manhattan distance plus load imbalance with rho = 0.01, unless source inspection proves a narrowly documented adjustment is required.

Keep this task independent from runtime LUT loading, final route selection, experiment automation, metrics changes, golden regression output updates, and DeFT performance experiments. Do not change router runtime behavior in this task. If source code changes are needed, keep them limited to generator support and justify the chosen location before editing.

Use Extended_Proposal.pdf as the primary project requirements source and the original DeFT paper at docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf as the primary algorithmic reference. Use Proposal.pdf only as initial context. Ignore the peer evaluation document completely.

Before coding, produce a short implementation plan. Work only on the selected offline VL LUT generator task. Do not modify unrelated files. Clearly mark assumptions as Assumption and blockers as Blocked.

Use only known validation commands. If the generator is implemented in Noxim C++ or touches build-integrated source, use the documented ./build.sh from external/noxim in WSL Ubuntu and any existing construction-only no-traffic smoke only when the invocation remains valid. If the generator is a standalone script or documentation artifact, validate with deterministic output checks and repository/submodule status checks; do not invent simulator commands. Do not use ./regression.sh --update.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable implementation decision becomes clear, update docs/DECISIONS.md too.

At the end, provide:

1. Created files
2. Modified files
3. Whether any source code files changed
4. Validation result
5. Current project phase
6. Next recommended task
7. The next ready-to-send prompt
8. Suggested branch name for the next task, which should be None; continue on the existing branch
9. Suggested commit message
10. Unknowns or blockers
```

- **Result summary:** T0016 completed. `external/noxim/other/deft_vl_lut_generator.py` now emits deterministic `deft_vl_lut.v1` YAML for explicit or enumerated connected-chiplet physical fault masks. The generator mirrors the current 16 physical VL topology, uses exact dynamic programming for the proposal's Manhattan-distance plus load-imbalance objective with default `rho = 0.01`, validates that masks do not disconnect a chiplet, and records the schema-v1 destination-entry adjustment caused by the absence of `destination_router_id`. Validation passed syntax, CLI help, deterministic output checks for masks `0x0000` and `0x1111`, selected-VL-not-faulty assertions, selected-first-ranked assertions, invalid-mask rejection, and diff whitespace checks. No Noxim C++/SystemC runtime behavior, final route selection, experiment automation, metrics, simulations, regression commands, or golden outputs were changed.
- **Follow-up tasks:** Start `T0017` to load and use generated `deft_vl_lut.v1` data at boundary routers.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `feat: add offline VL LUT generator`

## 2026-05-07: Start T0017 Runtime VL LUT Loading and Boundary Use

- **Date:** 2026-05-07
- **Prompt summary:** Implement the smallest focused runtime loading and use path for `deft_vl_lut.v1` at DeFT boundary-routing points, using the current startup fault vector and preserving baseline behavior outside `DEFT_2_5D`.
- **Full prompt:**

```text
Start task T0017: Load and Use VL LUT at Boundary Routers.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, docs/DECISIONS.md, and docs/PROMPTS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

external/noxim is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

T0007 added selectable DEFT_2_5D topology construction and the DeftTopology mapping helper. T0008 centralized the physical Vertical Link model and functional state. T0009 added the derived boundary-router inventory. T0010 added startup-time permanent physical VL fault injection. T0011 added focused explicit/generated fault-mask validation and inspectability against the current 16 physical bidirectional VL model. T0012 mapped DeFT VN state directly onto Noxim VC IDs. T0013 implemented VN assignment and output-VC-aware reservation/forwarding. T0014 added DeFT-only VN transition-restriction filtering without packet/flit movement-history metadata. T0015 designed the offline VL LUT format: deft_vl_lut.v1, keyed by physical fault-mask bitset, source chiplet ID, source router ID, and destination chiplet ID, with paired source_exit and destination_entry values over current physical VL IDs. T0016 added external/noxim/other/deft_vl_lut_generator.py, a standalone deterministic generator for the T0015 schema using Manhattan distance plus load imbalance with rho = 0.01.

Goal: implement the smallest focused runtime loading and use path for deft_vl_lut.v1 at DeFT boundary-routing points. Boundary routers should select functional source-exit and destination-entry Vertical Links using the current startup fault vector and the schema-v1 lookup key. Preserve existing baseline routing behavior outside DEFT_2_5D.

Keep this task independent from experiment automation, metrics changes, golden regression output updates, and DeFT performance experiments. Do not change the T0016 generator format unless source inspection proves a narrow compatibility fix is required. If route-data intermediate-destination state is needed, keep it minimal and document why before editing.

Use Extended_Proposal.pdf as the primary project requirements source and the original DeFT paper at docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf as the primary algorithmic reference. Use Proposal.pdf only as initial context. Ignore the peer evaluation document completely.

Before coding, produce a short implementation plan. Work only on the selected runtime LUT loading/use task. Do not modify unrelated files. Clearly mark assumptions as Assumption and blockers as Blocked.

Use only known validation commands. If build-integrated Noxim C++ changes are made, use the documented ./build.sh from external/noxim in WSL Ubuntu and the existing construction-only no-traffic smoke only when the invocation remains valid. Do not invent simulator commands. Do not use ./regression.sh --update.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable implementation decision becomes clear, update docs/DECISIONS.md too.

At the end, provide:

1. Created files
2. Modified files
3. Whether any source code files changed
4. Validation result
5. Current project phase
6. Next recommended task
7. The next ready-to-send prompt
8. Suggested branch name for the next task, which should be None; continue on the existing branch
9. Suggested commit message
10. Unknowns or blockers
```

- **Result summary:** T0017 completed. `DeftVerticalLinkLut` now loads and validates `deft_vl_lut.v1`, computes the active runtime physical fault mask after startup fault injection, and exposes exact lookup by fault mask, source chiplet, source router, and destination chiplet. A separate registered `DEFT` routing algorithm uses `source_exit` on the source chiplet, `destination_entry` on the interposer, and final local routing on the destination chiplet, failing closed when the LUT is missing or a selected VL is nonfunctional. The configuration surface now includes `deft_vl_lut_filename` and `-deft_vl_lut`. Validation built successfully, the existing construction-only no-traffic smoke completed with the LUT disabled, and a runtime LUT load smoke completed with a temporary no-fault generated LUT reporting 192 active entries. No experiment automation, metrics change, golden output update, or DeFT performance experiment was added.
- **Follow-up tasks:** Start `T0018` to configure XY baseline modes.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `feat: load and use DeFT VL LUT at runtime`

## 2026-05-08: Start T0018 Configure XY Baseline Modes

- **Date:** 2026-05-08
- **Prompt summary:** Configure the smallest safe fault-free and fault-injected XY baseline modes for later comparison against DeFT on the same `DEFT_2_5D` topology, without changing the DeFT route path, experiment automation, metrics, golden outputs, or LUT schemas.
- **Full prompt:**

```text
Start task T0018: Configure XY Baseline Modes.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, docs/DECISIONS.md, and docs/PROMPTS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

external/noxim is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

T0007 added selectable DEFT_2_5D topology construction and the DeftTopology mapping helper. T0008 centralized the physical Vertical Link model and functional state. T0009 added the derived boundary-router inventory. T0010 added startup-time permanent physical VL fault injection. T0011 added focused explicit/generated fault-mask validation and inspectability against the current 16 physical bidirectional VL model. T0012 mapped DeFT VN state directly onto Noxim VC IDs. T0013 implemented VN assignment and output-VC-aware reservation/forwarding. T0014 added DeFT-only VN transition-restriction filtering without packet/flit movement-history metadata. T0015 designed the offline VL LUT format. T0016 added the standalone deterministic deft_vl_lut.v1 generator. T0017 added runtime LUT loading, deft_vl_lut_filename / -deft_vl_lut, and registered routing algorithm DEFT that uses source_exit and destination_entry while failing closed on missing or nonfunctional selections.

Goal: configure the smallest safe XY baseline modes needed for later comparison against DeFT on the same project topology. Keep the work focused on selecting and documenting fault-free and fault-injected XY baseline configurations or switches; preserve the new DEFT routing path and do not add experiment automation, metrics changes, golden regression output updates, or performance experiments.

Keep this task independent from synthetic traffic implementation, experiment runners, result sweeps, metrics extraction, and final analysis. Do not change the T0016 generator format or the T0017 runtime LUT schema/use path unless source inspection proves a narrow compatibility fix is required.

Use Extended_Proposal.pdf as the primary project requirements source and the original DeFT paper at docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf as the primary algorithmic reference. Use Proposal.pdf only as initial context. Ignore the peer evaluation document completely.

Before coding, produce a short implementation plan. Work only on the selected XY baseline configuration task. Do not modify unrelated files. Clearly mark assumptions as Assumption and blockers as Blocked.

Use only known validation commands. If build-integrated Noxim C++ changes are made, use the documented ./build.sh from external/noxim in WSL Ubuntu and the existing construction-only no-traffic smoke only when the invocation remains valid. Do not invent simulator commands. Do not use ./regression.sh --update.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable implementation decision becomes clear, update docs/DECISIONS.md too.

At the end, provide:

1. Created files
2. Modified files
3. Whether any source code files changed
4. Validation result
5. Current project phase
6. Next recommended task
7. The next ready-to-send prompt
8. Suggested branch name for the next task, which should be None; continue on the existing branch
9. Suggested commit message
10. Unknowns or blockers
```

- **Result summary:** T0018 completed. Two explicit XY baseline configuration files were added for `DEFT_2_5D`: `deft_2_5d_xy_baseline_fault_free.yaml` with no startup VL faults and `deft_2_5d_xy_baseline_fault_injected.yaml` with explicit physical VL faults `[0,4,8,12]`. Both select `routing_algorithm: XY`, keep the DeFT LUT disabled, retain the existing two-VC topology requirement, and reuse the no-traffic hardcoded file for construction-only validation. Approved WSL smokes completed for both configs. No C++/SystemC source, routing behavior, traffic generation, metrics, experiment automation, golden outputs, generator format, or runtime LUT schema/use path was changed.
- **Follow-up tasks:** Start `T0019` to add synthetic traffic configurations.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `chore: configure XY baseline modes`
