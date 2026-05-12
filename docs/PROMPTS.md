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

## 2026-05-08: Start T0019 Synthetic Traffic Configurations

- **Date:** 2026-05-08
- **Prompt summary:** Add the smallest safe synthetic traffic configuration support for Uniform, Localized with 40% intra-chiplet traffic, and Hotspot with 3 hotspot nodes at 10% rate, using existing Noxim traffic-generation surfaces where possible and keeping the work independent from metrics, experiment runners, performance analysis, and routing changes.
- **Full prompt:**

```text
Start task T0019: Add Synthetic Traffic Configurations.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, docs/DECISIONS.md, and docs/PROMPTS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

external/noxim is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

T0007 added selectable DEFT_2_5D topology construction and the DeftTopology mapping helper. T0008 centralized the physical Vertical Link model and functional state. T0009 added the derived boundary-router inventory. T0010 added startup-time permanent physical VL fault injection. T0011 added focused explicit/generated fault-mask validation and inspectability against the current 16 physical bidirectional VL model. T0012 mapped DeFT VN state directly onto Noxim VC IDs. T0013 implemented VN assignment and output-VC-aware reservation/forwarding. T0014 added DeFT-only VN transition-restriction filtering without packet/flit movement-history metadata. T0015 designed the offline VL LUT format. T0016 added the standalone deterministic deft_vl_lut.v1 generator. T0017 added runtime LUT loading, deft_vl_lut_filename / -deft_vl_lut, and registered routing algorithm DEFT. T0018 added explicit XY baseline configs for fault-free and fault-injected DEFT_2_5D modes without changing source code.

Goal: add the smallest safe synthetic traffic configuration support needed for later XY-vs-DeFT comparison on the same project topology. Focus on selecting or configuring the proposal-required synthetic traffic shapes: uniform, localized with 40% intra-chiplet traffic, and hotspot with 3 hotspot nodes at 10% injection rate. Keep the work independent from experiment runners, result sweeps, metrics extraction, final analysis, golden regression output updates, and performance experiments.

Use existing Noxim traffic-generation surfaces where possible. Do not change DeFT routing, VN transition logic, VL fault injection, T0016 generator format, or T0017 runtime LUT schema/use path unless source inspection proves a narrow compatibility fix is required. If a new traffic mode is required for DEFT_2_5D, keep it narrowly scoped and document why before editing.

Use Extended_Proposal.pdf as the primary project requirements source and the original DeFT paper at docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf as the primary algorithmic reference. Use Proposal.pdf only as initial context. Ignore the peer evaluation document completely.

Before coding, produce a short implementation plan. Work only on the selected synthetic traffic configuration task. Do not modify unrelated files. Clearly mark assumptions as Assumption and blockers as Blocked.

Use only known validation commands. If build-integrated Noxim C++ changes are made, use the documented ./build.sh from external/noxim in WSL Ubuntu and run only documented smoke invocations that remain valid. For config-only changes, validate with repository/submodule status and the smallest known simulator smoke shape needed to confirm configuration loading. Do not invent experiment commands. Do not use ./regression.sh --update.

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

- **Result summary:** T0019 completed. Added `DEFT_2_5D` synthetic traffic configs for uniform, localized 40% intra-chiplet, and hotspot 3x10 traffic. Uniform uses existing `TRAFFIC_RANDOM`; localized and hotspot use existing `TRAFFIC_TABLE_BASED` with deterministic tables. The localized table assigns each source total PIR `0.01` with `0.004` same-chiplet and `0.006` other-chiplet probability. The hotspot table uses routers `9`, `13`, and `41`, gives each hotspot a 10% destination share for non-hotspot sources, excludes self-destinations, and keeps each source total PIR at `0.01`. Approved WSL smokes confirmed all three configs load. No C++/SystemC source, routing behavior, VN transition logic, VL fault injection, metrics, experiment automation, golden outputs, generator format, or runtime LUT schema/use path was changed.
- **Follow-up tasks:** Start `T0020` to add metrics collection.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `chore: add synthetic traffic configurations`

## 2026-05-08: Start T0020 Add Metrics Collection

- **Date:** 2026-05-08
- **Prompt summary:** Add the smallest safe metrics collection support needed for later XY-vs-DeFT comparison, focused on machine-readable reachability, average latency, and network throughput.
- **Full prompt:**

```text
Start task T0020: Add Metrics Collection.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, docs/DECISIONS.md, and docs/PROMPTS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

external/noxim is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

T0007 added selectable DEFT_2_5D topology construction and the DeftTopology mapping helper. T0008 centralized the physical Vertical Link model and functional state. T0009 added the derived boundary-router inventory. T0010 added startup-time permanent physical VL fault injection. T0011 added focused explicit/generated fault-mask validation and inspectability against the current 16 physical bidirectional VL model. T0012 mapped DeFT VN state directly onto Noxim VC IDs. T0013 implemented VN assignment and output-VC-aware reservation/forwarding. T0014 added DeFT-only VN transition-restriction filtering without packet/flit movement-history metadata. T0015 designed the offline VL LUT format. T0016 added the standalone deterministic deft_vl_lut.v1 generator. T0017 added runtime LUT loading, deft_vl_lut_filename / -deft_vl_lut, and registered routing algorithm DEFT. T0018 added explicit XY baseline configs for fault-free and fault-injected DEFT_2_5D modes without changing source code. T0019 added uniform, localized-40%, and hotspot-3x10 synthetic traffic configs/tables using existing Noxim traffic surfaces.

Goal: add the smallest safe metrics collection support needed for later XY-vs-DeFT comparison. Focus on reachability, average latency, and network throughput in a machine-readable form that can be compared across routing modes and traffic profiles. Keep the work independent from full experiment runners, result sweeps, final analysis, golden regression output updates, and performance experiments.

Use existing Noxim statistics surfaces where possible. Do not change DeFT routing, VN transition logic, VL fault injection, T0016 generator format, T0017 runtime LUT schema/use path, or T0019 traffic profile semantics unless source inspection proves a narrow compatibility fix is required. If new metric fields or export options are required, keep them narrowly scoped and document why before editing.

Use Extended_Proposal.pdf as the primary project requirements source and the original DeFT paper at docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf as the primary algorithmic reference. Use Proposal.pdf only as initial context. Ignore the peer evaluation document completely.

Before coding, produce a short implementation plan. Work only on the selected metrics collection task. Do not modify unrelated files. Clearly mark assumptions as Assumption and blockers as Blocked.

Use only known validation commands. If build-integrated Noxim C++ changes are made, use the documented ./build.sh from external/noxim in WSL Ubuntu and run only documented smoke invocations that remain valid. Do not invent experiment commands. Do not use ./regression.sh --update.

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

- **Result summary:** T0020 completed. Reused the existing `GlobalStats` CSV/JSON export path and added injected-packet/injected-flit counters at the PE head-flit injection point. Machine-readable exports now include routing algorithm, traffic distribution, active DeFT fault mask, total injected packets/flits, total received packets/flits, reachability ratio, average latency, and network throughput. Validation built Noxim successfully and confirmed JSON and CSV metrics exports with the localized traffic smoke. No DeFT routing, VN transition logic, VL fault injection, generator format, runtime LUT schema/use path, synthetic traffic semantics, experiment runner, performance sweep, final analysis, or golden regression output was changed.
- **Follow-up tasks:** Start `T0021` to add experiment runner support.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `feat: add metrics collection`

## 2026-05-09: Start T0021 Add Experiment Runner

- **Date:** 2026-05-09
- **Prompt summary:** Add the smallest safe experiment runner support for traceable single-run or tiny dry-run comparisons across existing routing modes, traffic profiles, fault settings, and seeds using known Noxim invocation shapes and T0020 metrics export.
- **Full prompt:**

```text
Start task T0021: Add Experiment Runner.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, docs/DECISIONS.md, and docs/PROMPTS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

external/noxim is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

T0007 added selectable DEFT_2_5D topology construction and the DeftTopology mapping helper. T0008 centralized the physical Vertical Link model and functional state. T0009 added the derived boundary-router inventory. T0010 added startup-time permanent physical VL fault injection. T0011 added focused explicit/generated fault-mask validation and inspectability against the current 16 physical bidirectional VL model. T0012 mapped DeFT VN state directly onto Noxim VC IDs. T0013 implemented VN assignment and output-VC-aware reservation/forwarding. T0014 added DeFT-only VN transition-restriction filtering without packet/flit movement-history metadata. T0015 designed the offline VL LUT format. T0016 added the standalone deterministic deft_vl_lut.v1 generator. T0017 added runtime LUT loading, deft_vl_lut_filename / -deft_vl_lut, and registered routing algorithm DEFT. T0018 added explicit XY baseline configs for fault-free and fault-injected DEFT_2_5D modes without changing source code. T0019 added uniform, localized-40%, and hotspot-3x10 synthetic traffic configs/tables using existing Noxim traffic surfaces. T0020 added machine-readable CSV/JSON metrics export through existing stats_format/stats_file surfaces, including routing algorithm, traffic distribution, active DeFT fault mask, injected/received packet and flit counts, reachability ratio, average latency, and network throughput fields.

Goal: add the smallest safe experiment runner support needed to launch traceable single-run or tiny dry-run comparisons across existing routing modes, traffic profiles, fault settings, and seeds, using known simulator invocation shapes and existing metrics export. Keep the work independent from full result sweeps, final analysis, golden regression output updates, and performance claims.

Use existing configs, CLI surfaces, and T0020 metrics export where possible. Do not change DeFT routing, VN transition logic, VL fault injection, T0016 generator format, T0017 runtime LUT schema/use path, T0019 traffic profile semantics, or T0020 metrics semantics unless source inspection proves a narrow compatibility fix is required. If generated temporary LUTs are needed for DEFT dry runs, keep them under a scratch/output path and document provenance; do not commit experiment-scale generated artifacts.

Use `Extended_Proposal.pdf` as the primary project requirements source and the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` as the primary algorithmic reference. Use `Proposal.pdf` only as initial context. Ignore the peer evaluation document completely.

Before coding, produce a short implementation plan. Work only on the selected experiment runner task. Do not modify unrelated files. Clearly mark assumptions as `Assumption` and blockers as `Blocked`.

Use only known validation commands. If build-integrated Noxim C++ changes are made, use the documented ./build.sh from external/noxim in WSL Ubuntu and run only documented smoke invocations that remain valid. Otherwise validate runner behavior with a dry-run or tiny run using documented simulator smoke and T0020 stats export surfaces. Do not use ./regression.sh --update.

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

- **Result summary:** T0021 completed. Added `external/noxim/other/deft_experiment_runner.py`, a standalone dry-run-first runner that composes existing T0019 traffic configs, routing overrides, physical fault masks, seeds, temporary T0016 LUT generation for `DEFT`, and T0020 stats exports into traceable manifests, command files, logs, per-run stats, and summary CSV output. Generated artifacts are written under the ignored `external/noxim/other/generated/` tree. Validation confirmed syntax/help, dry-run command generation for XY and DEFT, fault-setting command generation for `0x1111`, and a tiny WSL execute smoke for XY and DEFT localized traffic with JSON metrics. No C++/SystemC source, routing behavior, VN transition logic, VL fault injection, LUT schema/use path, traffic semantics, metrics semantics, final sweep, performance analysis, or golden output was changed.
- **Follow-up tasks:** Start `T0022` to prepare final analysis artifacts.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `feat: add experiment runner`

## 2026-05-09: Start T0022 Prepare Final Analysis Artifacts

- **Date:** 2026-05-09
- **Prompt summary:** Prepare the smallest safe final-analysis artifact support from validated T0021 runner outputs and T0020 stats exports, focused on traceability, summary tables, limitations, and report-support scaffolding without running full sweeps or making performance claims.
- **Full prompt:**

```text
Start task T0022: Prepare Final Analysis Artifacts.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, docs/DECISIONS.md, and docs/PROMPTS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

external/noxim is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

T0007 added selectable DEFT_2_5D topology construction and the DeftTopology mapping helper. T0008 centralized the physical Vertical Link model and functional state. T0009 added the derived boundary-router inventory. T0010 added startup-time permanent physical VL fault injection. T0011 added focused explicit/generated fault-mask validation and inspectability against the current 16 physical bidirectional VL model. T0012 mapped DeFT VN state directly onto Noxim VC IDs. T0013 implemented VN assignment and output-VC-aware reservation/forwarding. T0014 added DeFT-only VN transition-restriction filtering without packet/flit movement-history metadata. T0015 designed the offline VL LUT format. T0016 added the standalone deterministic deft_vl_lut.v1 generator. T0017 added runtime LUT loading, deft_vl_lut_filename / -deft_vl_lut, and registered routing algorithm DEFT. T0018 added explicit XY baseline configs for fault-free and fault-injected DEFT_2_5D modes without changing source code. T0019 added uniform, localized-40%, and hotspot-3x10 synthetic traffic configs/tables using existing Noxim traffic surfaces. T0020 added machine-readable CSV/JSON metrics export through existing stats_format/stats_file surfaces. T0021 added a standalone tiny experiment runner that records manifests, commands, logs, JSON/CSV stats paths, temporary DEFT LUT provenance, and summary CSV output under ignored generated-output directories.

Goal: prepare the smallest safe final-analysis artifact support from validated experiment outputs. Focus on traceability, summary tables, limitations, and report-support scaffolding that can consume T0021 runner manifests and T0020 stats exports. Keep this independent from running full sweeps, inventing missing experiment results, changing simulator behavior, updating golden regression outputs, or making unsupported performance claims.

Use existing T0021 runner outputs, T0020 metrics export fields, and project documentation where possible. If no validated final sweep outputs exist, create only analysis scaffolding and clearly mark missing data as `Blocked`; do not fabricate results. Do not change DeFT routing, VN transition logic, VL fault injection, T0016 generator format, T0017 runtime LUT schema/use path, T0019 traffic profile semantics, T0020 metrics semantics, or T0021 runner semantics unless source inspection proves a narrow compatibility fix is required.

Use `Extended_Proposal.pdf` as the primary project requirements source and the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` as the primary algorithmic reference. Use `Proposal.pdf` only as initial context. Ignore the peer evaluation document completely.

Before coding, produce a short implementation plan. Work only on the selected final-analysis artifact task. Do not modify unrelated files. Clearly mark assumptions as `Assumption` and blockers as `Blocked`.

Use only known validation commands. If no simulator source changes are made, do not rebuild Noxim. Validate any analysis helper with syntax checks and a small fixture or existing ignored T0021 output if available. Do not run full sweeps unless explicitly requested. Do not use ./regression.sh --update.

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

- **Result summary:** T0022 completed. Added `external/noxim/other/deft_analysis_artifacts.py`, a standalone analysis helper that consumes T0021 runner output directories and T0020 stats exports, then writes generated `analysis_manifest.json`, `run_summary.csv`, `comparison_summary.csv`, and `report_scaffold.md` artifacts under ignored generated-output directories. Validation confirmed syntax/help and generated a scaffold from the existing T0021 20-cycle execute smoke. The generated scaffold marks missing final sweep data as `Blocked` and sets `claims_allowed` to `false`. No simulator source, routing behavior, VN transition logic, VL fault injection, LUT schema/use path, traffic semantics, metrics semantics, runner semantics, final sweep, golden output, or performance claim was changed.
- **Follow-up tasks:** Start `T0025` to define the final sweep policy before running or interpreting final sweeps.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `feat: add final analysis scaffolding`

## 2026-05-09: Start T0025 Define Final Sweep Policy

- **Date:** 2026-05-09
- **Prompt summary:** Define the final sweep policy before running or interpreting final sweeps, including exact matrix, fault-rate accounting, simulation length, warm-up/drain policy, seed count, traffic profiles, routing modes, validation checks, and result-claim rules.
- **Full prompt:**

```text
Start task T0025: Define Final Sweep Policy.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, docs/DECISIONS.md, and docs/PROMPTS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

external/noxim is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

T0007 through T0021 implemented the DEFT_2_5D topology, physical VL model, boundary-router inventory, permanent startup VL faults, fault-mask validation, VN assignment and transition filtering, schema-v1 VL LUT generator/runtime loading, XY baseline configs, synthetic traffic configs, metrics export, and a tiny traceable experiment runner. T0022 added final-analysis scaffolding with external/noxim/other/deft_analysis_artifacts.py, which consumes T0021 manifests and T0020 stats exports but marks smoke-only or missing final-sweep data as Blocked and sets claims_allowed to false.

Goal: define the final sweep policy before running or interpreting final sweeps. Focus on deciding the exact experiment matrix, fault-rate accounting basis, simulation length, warm-up/drain policy, seed count, traffic profiles, routing modes, validation checks, and result-claim rules. Keep this as a policy/documentation task unless a narrow helper update is clearly required.

Do not run full sweeps in this task unless explicitly requested. Do not fabricate results or performance claims. Do not change DeFT routing, VN transition logic, VL fault injection, T0016 generator format, T0017 runtime LUT schema/use path, T0019 traffic profile semantics, T0020 metrics semantics, T0021 runner semantics, or T0022 analysis semantics unless source inspection proves a narrow compatibility fix is required.

Use Extended_Proposal.pdf as the primary project requirements source and the original DeFT paper at docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf as the primary algorithmic reference. Use Proposal.pdf only as initial context. Ignore the peer evaluation document completely.

Before coding or documentation edits, produce a short implementation plan. Work only on the selected final sweep policy task. Do not modify unrelated files. Clearly mark assumptions as Assumption and blockers as Blocked.

Use only known validation commands. If no simulator source changes are made, do not rebuild Noxim. Documentation/status validation is sufficient unless the task explicitly changes a helper. Do not use ./regression.sh --update.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable implementation or experiment decision becomes clear, update docs/DECISIONS.md too.

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

- **Result summary:** T0025 completed as a documentation-only policy task. The final executable sweep is exactly 150 runs: `XY` and `DEFT` over `uniform`, `localized_40`, and `hotspot_3x10`; physical fault masks `0x0000`, `0x0001`, `0x0011`, `0x0111`, and `0x1111`; seeds `0..4`; `-sim 10000`; `-warmup 1000`; and JSON stats. The policy resolves final fault-rate accounting for the current implementation by using physical bidirectional VL masks and reporting matching directional-equivalent percentages for the paper's 32-channel wording. It also defines no-drain fixed-window semantics, validation gates, and result-claim rules. No source code, helper code, full sweep, Noxim rebuild, golden outputs, or performance claims were changed.
- **Follow-up tasks:** Start `T0026` to run the final sweep matrix and regenerate final analysis artifacts.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: define final sweep policy`

## 2026-05-09: Start T0026 Run Final Sweep Matrix

- **Date:** 2026-05-09
- **Prompt summary:** Run the T0025 150-run final sweep matrix after first validating the dry-run manifest, regenerate final analysis artifacts, cross-check all generated tables against raw manifests and JSON stats, and update tracking documents without changing simulator behavior.
- **Full prompt:**

```text
Start task T0026: Run Final Sweep Matrix.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, docs/DECISIONS.md, and docs/PROMPTS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

external/noxim is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

T0007 through T0021 implemented the DEFT_2_5D topology, physical VL model, boundary-router inventory, permanent startup VL faults, fault-mask validation, VN assignment and transition filtering, schema-v1 VL LUT generator/runtime loading, XY baseline configs, synthetic traffic configs, metrics export, and a tiny traceable experiment runner. T0022 added final-analysis scaffolding with external/noxim/other/deft_analysis_artifacts.py. T0025 defined the final sweep policy as exactly 150 runs:

- routing modes: XY, DEFT
- traffic profiles: uniform, localized_40, hotspot_3x10
- physical fault masks: 0x0000, 0x0001, 0x0011, 0x0111, 0x1111
- seeds: 0, 1, 2, 3, 4
- simulation window: -sim 10000
- stats warm-up: -warmup 1000
- stats format: json

Goal: run the T0025 final sweep matrix and regenerate final analysis artifacts from completed outputs. First run the dry-run command and verify that the manifest contains exactly 150 planned runs and the full Cartesian product. Then execute the same matrix only if the dry-run manifest is correct.

Use this dry-run command from external/noxim in WSL/Linux:

python3 other/deft_experiment_runner.py \
  --routing XY --routing DEFT \
  --traffic uniform --traffic localized_40 --traffic hotspot_3x10 \
  --fault-mask 0x0000 --fault-mask 0x0001 --fault-mask 0x0011 --fault-mask 0x0111 --fault-mask 0x1111 \
  --seed 0 --seed 1 --seed 2 --seed 3 --seed 4 \
  --sim 10000 \
  --warmup 1000 \
  --stats-format json \
  --output-dir other/generated/t0026_final_sweep_v1

If the dry-run manifest is correct, execute the final sweep with the same command plus:

--execute --max-execute-runs 150

After execution, run the final analysis helper from the parent repository against the completed output directory and write artifacts under external/noxim/other/generated/t0026_final_analysis_v1.

Do not fabricate results or performance claims. Do not change DeFT routing, VN transition logic, VL fault injection, T0016 generator format, T0017 runtime LUT schema/use path, T0019 traffic profile semantics, T0020 metrics semantics, T0021 runner semantics, or T0022 analysis semantics unless source inspection proves a narrow compatibility fix is required. Do not use ./regression.sh --update.

Use Extended_Proposal.pdf as the primary project requirements source and the original DeFT paper at docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf as the primary algorithmic reference. Use Proposal.pdf only as initial context. Ignore the peer evaluation document completely.

Before running commands or documentation edits, produce a short implementation plan. Work only on the selected final sweep task. Do not modify unrelated files. Clearly mark assumptions as Assumption and blockers as Blocked.

Use only known validation commands. If no simulator source changes are made, do not rebuild Noxim. Validate that the executed manifest has mode: execute, run_count: 150, and every run has status: completed and return_code: 0. Validate that every JSON stats file exists and contains the T0020 metric fields. Cross-check final analysis tables against raw manifests and per-run JSON stats before making any report-support statements.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable implementation or experiment decision becomes clear, update docs/DECISIONS.md too.

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

- **Result summary:** T0026 completed. The dry-run manifest contained `mode: dry_run`, `run_count: 150`, and the full Cartesian product. The executed manifest contained `mode: execute`, `run_count: 150`, 150 completed runs, and 150 return code `0` runs. All 150 JSON stats files exist and contain the T0020 metric fields. Final analysis artifacts were regenerated with `--dataset-kind final_sweep` under `external/noxim/other/generated/t0026_final_analysis_v1`, and the generated run-summary/comparison tables cross-checked cleanly against the raw manifest and per-run JSON stats. No simulator source, helper source, routing behavior, VN transition logic, VL fault injection, LUT schemas, traffic semantics, metrics semantics, runner semantics, analysis semantics, golden outputs, or performance claims were changed.
- **Follow-up tasks:** Start `T0027` to review final sweep results for report-support tables and claim-safe interpretation.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: record final sweep execution`

## 2026-05-09: Start T0027 Review Final Sweep Results for Report Support

- **Date:** 2026-05-09
- **Prompt summary:** Review the completed T0026 final sweep outputs for claim-safe report support, distinguish measured values from empty cells and limitations, avoid rerunning simulations, and update tracking documents.
- **Full prompt:**

```text
Start task T0027: Review Final Sweep Results for Report Support.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, docs/DECISIONS.md, and docs/PROMPTS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

external/noxim is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

T0026 executed the T0025 final sweep matrix and regenerated final analysis artifacts:

- final sweep output: `external/noxim/other/generated/t0026_final_sweep_v1`
- final analysis output: `external/noxim/other/generated/t0026_final_analysis_v1`

The executed manifest has `mode: execute`, `run_count: 150`, 150 completed runs, and 150 return code `0` runs. All 150 JSON stats files exist and contain the T0020 fields. The generated analysis tables contain 150 run-summary rows and 30 comparison groups, and a raw-artifact cross-check found zero mismatches. The analysis helper still sets `claims_allowed: false`, and T0026 observed 54 individual runs with zero injected packets in the measured stats window.

Goal: review the completed T0026 outputs for report support without fabricating results. Produce claim-safe tables or notes that distinguish measured values, empty cells, and limitations. Do not rerun simulations unless source inspection and the documented validation status prove a narrow follow-up command is required and you document the reason first.

Do not fabricate results or performance claims. Do not change DeFT routing, VN transition logic, VL fault injection, T0016 generator format, T0017 runtime LUT schema/use path, T0019 traffic profile semantics, T0020 metrics semantics, T0021 runner semantics, or T0022 analysis semantics unless source inspection proves a narrow compatibility fix is required. Do not use `./regression.sh --update`.

Use `Extended_Proposal.pdf` as the primary project requirements source and the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` as the primary algorithmic reference. Use `Proposal.pdf` only as initial context. Ignore the peer evaluation document completely.

Before running commands or documentation edits, produce a short implementation plan. Work only on the selected final-sweep review task. Do not modify unrelated files. Clearly mark assumptions as `Assumption` and blockers as `Blocked`.

Use only known validation commands. If no simulator source changes are made, do not rebuild Noxim. Use the existing generated T0026 manifests, summary CSVs, analysis CSVs, and JSON stats for review. Cross-check any derived table or statement against raw artifacts before recording it.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable implementation or experiment decision becomes clear, update docs/DECISIONS.md too.

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

- **Result summary:** T0027 completed. Generated ignored report-support artifacts under `external/noxim/other/generated/t0027_report_support_v1/`: `manifest.json`, `condition_summary.csv`, `xy_deft_pair_summary.csv`, `zero_injection_runs.csv`, `coverage_by_routing_traffic.csv`, and `report_notes.md`. The review derived condition and pair tables from the T0026 executed manifest and raw JSON stats, then cross-checked them against T0026 `summary.csv`, analysis `run_summary.csv`, and analysis `comparison_summary.csv` with zero mismatches. T0027 classified 30 condition cells as 12 complete-injection cells, 13 partial-injection cells, and 5 empty-injection cells; all empty cells are `XY|hotspot_3x10`. No XY/DEFT pair supports latency comparison because the XY side has zero received packets wherever it injected packets. No simulator source, helper source, routing behavior, VN transition logic, VL fault injection, LUT schemas, traffic semantics, metrics semantics, runner semantics, analysis semantics, golden outputs, rerun, rebuild, or performance claim was changed.
- **Follow-up tasks:** Start `T0028` to draft claim-safe final report results text from the T0027 report-support artifacts.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: review final sweep report support`

## 2026-05-09: Start T0028 Draft Claim-Safe Final Report Results Text

- **Date:** 2026-05-09
- **Prompt summary:** Draft claim-safe final report results text and tables from T0027 report-support artifacts, preserving blank cells and limitations without rerunning simulations or making unsupported claims.
- **Full prompt:**

```text
Start task T0028: Draft Claim-Safe Final Report Results Text.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, docs/DECISIONS.md, and docs/PROMPTS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

external/noxim is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

T0027 reviewed the completed T0026 final sweep artifacts and generated claim-safe report-support outputs:

- final sweep output: `external/noxim/other/generated/t0026_final_sweep_v1`
- final analysis output: `external/noxim/other/generated/t0026_final_analysis_v1`
- final report-support output: `external/noxim/other/generated/t0027_report_support_v1`

The T0027 report-support manifest records 150 raw stats rows, 30 condition cells, 15 XY/DEFT pair rows, 54 individual zero-injection runs, 5 empty-injection condition cells, 13 partial-injection condition cells, 12 complete-injection condition cells, and zero cross-check mismatches. It keeps `claims_allowed: false`.

Goal: draft claim-safe final report results text and tables from the T0027 report-support artifacts without fabricating results or making unsupported performance claims. Preserve blank cells and limitations explicitly. Do not rerun simulations unless source inspection and documented validation status prove a narrow follow-up command is required and you document the reason first.

Do not fabricate results or performance claims. Do not change DeFT routing, VN transition logic, VL fault injection, T0016 generator format, T0017 runtime LUT schema/use path, T0019 traffic profile semantics, T0020 metrics semantics, T0021 runner semantics, or T0022 analysis semantics unless source inspection proves a narrow compatibility fix is required. Do not use `./regression.sh --update`.

Use `Extended_Proposal.pdf` as the primary project requirements source and the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` as the primary algorithmic reference. Use `Proposal.pdf` only as initial context. Ignore the peer evaluation document completely.

Before running commands or documentation edits, produce a short implementation plan. Work only on the selected report-results drafting task. Do not modify unrelated files. Clearly mark assumptions as `Assumption` and blockers as `Blocked`.

Use only known validation commands. If no simulator source changes are made, do not rebuild Noxim. Use the existing generated T0027 report-support tables and, when needed, cross-check statements against the T0026 raw artifacts before recording them.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable implementation or experiment decision becomes clear, update docs/DECISIONS.md too.

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

- **Result summary:** T0028 completed. Created ignored generated report-draft artifacts under `external/noxim/other/generated/t0028_final_report_results_v1/`: `manifest.json` and `report_results_draft.md`. The draft converts T0027 report-support artifacts into claim-safe descriptive report prose and Markdown tables while preserving blank reachability, blank latency, partial-cell coverage counts, zero-injection notes, and the T0027 limitations. It keeps `claims_allowed: false` and makes no improvement, delta, statistical-significance, latency-comparison, 100% reachability, or unsupported performance claim. No simulator source, helper source, routing behavior, VN transition logic, VL fault injection, LUT schemas, traffic semantics, metrics semantics, runner/analysis semantics, golden outputs, rerun, rebuild, or regression command was changed.
- **Follow-up tasks:** Start `T0029` to assemble a claim-safe final report draft using the T0028 results text and the existing project documentation.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: draft claim-safe final report results`

## 2026-05-09: Start T0029 Assemble Claim-Safe Final Report Draft

- **Date:** 2026-05-09
- **Prompt summary:** Assemble a claim-safe final report draft from the source documents, existing project documentation, and T0028/T0027/T0026 report-support artifacts without rerunning simulations or adding unsupported result language.
- **Full prompt summary:** The user requested task `T0029`, required startup reading of all project tracking documents, required continuing on the existing branch, required using `external/noxim` and the generated T0026/T0027/T0028 artifacts, and required assembling a claim-safe final report draft. The prompt emphasized `Extended_Proposal.pdf` as the primary requirements source, the local original DeFT paper as the algorithmic reference, `Proposal.pdf` as initial context, and the peer evaluation document as out of scope. It also required preserving assumptions, blockers, blank cells, partial-cell coverage counts, validation provenance, and limitations; avoiding unsupported result language, latency comparisons, and complete-reachability wording; not rerunning simulations or rebuilding Noxim unless narrowly justified; not using `./regression.sh --update`; updating the tracking documents; and reporting created files, modified files, source-code status, validation, phase, next task, next prompt, branch guidance, commit message, and blockers.
- **Result summary:** T0029 completed. Created `docs/FINAL_REPORT_DRAFT.md` as the tracked claim-safe Markdown final report draft. The draft assembles source scope, abstract, introduction, background, implementation summary, evaluation method, validation provenance, T0028-derived results tables, limitations, conclusion, and references. It preserves blank reachability, blank latency, partial-cell coverage counts, zero-injection notes, assumptions, blockers, and validation provenance. It does not rerun simulations, rebuild Noxim, change source/helper behavior, update golden outputs, or add unsupported performance language.
- **Follow-up tasks:** Start `T0030` to review `docs/FINAL_REPORT_DRAFT.md` for submission readiness and optional format conversion if explicitly required.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: assemble claim-safe final report draft`

## 2026-05-09: Start T0030 Review Final Report Draft for Submission Readiness

- **Date:** 2026-05-09
- **Prompt summary:** Review and polish the tracked claim-safe Markdown final report draft for submission readiness without changing validated claims, simulator behavior, or report-support semantics.
- **Full prompt summary:** The user requested task `T0030`, required startup reading of all project tracking documents, required continuing on the existing branch, required using `external/noxim` and `docs/FINAL_REPORT_DRAFT.md`, and required polishing the final report draft for final-delivery structure, citation wording, table readability, and submission readiness. The prompt emphasized preserving all claim-safety constraints, blank cells, partial-cell coverage counts, validation provenance, assumptions, blockers, and limitations. It prohibited fabricated results, performance claims, deltas, rankings, inferential claims, latency comparisons, complete-reachability wording, unsupported result language, simulator/source behavior changes, runner/analysis semantic changes, and `./regression.sh --update`. It also required recording any requested final submission format and validation method before conversion, updating the project tracking documents, and reporting created files, modified files, source-code status, validation, phase, next task, next prompt, branch guidance, commit message, and blockers.
- **Result summary:** T0030 completed. `docs/FINAL_REPORT_DRAFT.md` was reviewed and polished for submission readiness. The title/front matter, source-scoped citation wording, evaluation table label, condition-table status legend, pair-readiness wording, and references were improved while preserving every measured value, blank reachability cell, blank latency cell, partial-cell coverage count, validation provenance item, assumption, blocker, limitation, and `claims_allowed: false` wording. No final artifact conversion was performed because no PDF, DOCX, PPTX, or other required output format was specified. No simulator source, helper source, routing behavior, VN transition logic, VL fault injection, LUT schema, traffic semantic, metrics semantic, runner/analysis semantic, golden output, rebuild, rerun, or performance claim was changed.
- **Follow-up tasks:** Start `T0031` to confirm the required final submission format and produce a final artifact only when the format is explicitly specified.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: polish final report draft for submission`

## 2026-05-09: Start T0031 Prepare Final Submission Artifact

- **Date:** 2026-05-09
- **Prompt summary:** Confirm the required final submission format and prepare the final artifact only if the format is explicitly specified; otherwise record the task as blocked.
- **Full prompt summary:** The user requested task `T0031`, required startup reading of all project tracking documents, required continuing on the existing branch, required using `external/noxim` and the reviewed tracked report draft at `docs/FINAL_REPORT_DRAFT.md`, and required preserving all claim-safety constraints, blank cells, partial-cell coverage counts, validation provenance, assumptions, blockers, and limitations. The prompt explicitly prohibited guessing a conversion target, fabricated results, unsupported result language, simulator behavior changes, reruns, rebuilds, and `./regression.sh --update`. It required using `Extended_Proposal.pdf` as the primary requirements source, the original DeFT paper as the algorithmic reference, and `Proposal.pdf` only as initial context.
- **Result summary:** T0031 is blocked. Source-document inspection found no explicit final submission artifact format. `Extended_Proposal.pdf` calls for finalizing the project report but does not specify PDF, DOCX, PPTX, Markdown, or another target format. `Proposal.pdf` contains initial proposal submission instructions for proposal source and compiled PDF files, but it is initial context only and does not define the final report format. No final artifact conversion was performed, and no simulator source, helper source, routing behavior, VN transition logic, VL fault injection, traffic semantics, metrics semantics, runner/analysis semantics, rebuild, rerun, regression command, or performance claim was changed.
- **Follow-up tasks:** Resume `T0031` after the required final submission format is explicitly supplied.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: record final artifact format blocker`

## 2026-05-09: Resume T0031 with IEEE LaTeX Final Report Format

- **Date:** 2026-05-09
- **Prompt summary:** Resume T0031 and create an IEEE conference-style LaTeX final project report artifact from the reviewed Markdown draft, using `Extended_Proposal.zip` as the LaTeX formatting/template reference.
- **Full prompt summary:** The user explicitly supplied the required final artifact format as an IEEE conference-style LaTeX final project report. The prompt required using `docs/FINAL_REPORT_DRAFT.md` as the content source, `Extended_Proposal.zip` as the LaTeX template reference, `Extended_Proposal.pdf` as the primary project requirements source if clarification was needed, `Proposal.pdf` as initial context only, and ignoring the peer evaluation document. It required creating a `final_report/` directory with LaTeX source, bibliography, figures if needed, and useful build notes. It prohibited overwriting Extended Proposal files, modifying source code, rebuilding Noxim, rerunning simulations, changing simulator behavior, or using `./regression.sh --update`. It required preserving claim-safety constraints, validation provenance, assumptions, blockers, limitations, partial-result notes, blank cells, and distinctions among implemented work, validated behavior, config-only support, and blocked or future work. It also required inspecting the archive and draft before creating the artifact, producing a short plan, running `git diff --check`, attempting LaTeX compilation if tooling was available, updating tracking documents, and reporting created files, modified files, artifact path, PDF status, source-code status, validation, phase, next task, branch guidance, commit message, and blockers.
- **Result summary:** T0031 completed as a source-artifact task. Created `final_report/main.tex`, `final_report/references.bib`, `final_report/README.md`, copied `final_report/IEEEtran.cls`, and copied `final_report/figures/schematic.png` from `Extended_Proposal.zip`. The LaTeX report follows IEEEtran conference style and preserves claim-safe wording, blank cells, partial-cell coverage counts, validation provenance, assumptions, blockers, and limitations from `docs/FINAL_REPORT_DRAFT.md`. Citation checks found no missing or uncited BibTeX entries, begin/end checks were balanced, and new text files were ASCII-only. PDF generation was blocked because `latexmk`, `pdflatex`, `bibtex`, and `tectonic` were not available on the Windows PATH. No simulator source, helper source, routing behavior, VN transition logic, VL fault injection, traffic semantics, metrics semantics, runner/analysis semantics, rebuild, rerun, regression command, or performance claim was changed.
- **Follow-up tasks:** Start `T0032` only if a compiled PDF is required and a TeX toolchain is available.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: add IEEE LaTeX final report artifact`

## 2026-05-09: Start T0033 Diagnose Final-Report Blockers

- **Date:** 2026-05-09
- **Prompt summary:** Diagnose and reduce the final-report blockers that prevent stronger XY-vs-DEFT comparison, especially XY hotspot zero-injection cells, XY localized/uniform zero-received cells, missing post-injection drain policy, and whether a small rerun can produce non-empty claim-safe data.
- **Full prompt summary:** The user requested a new task after T0031 and required startup reading of all project tracking documents, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`. The prompt required using `external/noxim`, starting as diagnosis rather than implementation, inspecting synthetic traffic configs, runner configuration, injection rate, warm-up, simulation window, traffic distribution, and stop conditions. It prohibited modifying DeFT routing, VN transition logic, VL fault injection, LUT schema, topology behavior, source code, old final-sweep artifacts, rebuilding, full-sweep reruns, and `./regression.sh --update`. It allowed only small targeted smoke simulations, preferred one or two focused XY hotspot/uniform runs, required `git diff --check`, and required updating tracking documents. The final answer had to report causes of the XY hotspot zero-injection cells, XY zero-received cells, whether drain is needed, whether config/runner changes are enough, whether source changes are required, the next task, whether the final report should be regenerated, and a commit message.
- **Result summary:** T0033 completed as a diagnosis task. Source inspection showed that injected packets are counted only when a packet head flit leaves the PE after the stats warm-up boundary, while standard `XY` on `DEFT_2_5D` is cardinal-only and cannot traverse VL/hub/interposer paths. `DEFT_2_5D` chiplet cardinal links are wired only within each 4x4 chiplet, and missing cross-chiplet cardinal ports are idle-bound. A two-run warm-up-0 WSL diagnostic under `external/noxim/other/generated/t0033_xy_diagnostic_warmup0_v1/` completed with return code `0`: `XY|hotspot_3x10|0x0000|seed0` injected 145 packets and received 6, and `XY|uniform|0x0000|seed0` injected 141 packets and received 4. Therefore the hotspot table and uniform generator are not empty; the T0027 blank cells are due to the `-warmup 1000` measured window after early XY traffic has injected and then stalled behind route-incompatible inter-chiplet paths. The current `-volume` stop condition is not a post-injection drain phase. No simulator source, helper source, routing behavior, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, old final-sweep artifact, rebuild, full sweep, regression command, or performance claim was changed.
- **Follow-up tasks:** Start `T0034` to define a claim-safe follow-up rerun, report revision, or drain/source-cutoff policy before regenerating report content.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: diagnose final report comparison blockers`

## 2026-05-11: Start T0034 Decide Next Gap-Closure Direction and Add Follow-up Tasks

- **Date:** 2026-05-11
- **Prompt summary:** Evaluate the current project state after T0033 and choose the most reasonable next direction among report revision, interposer-aware XY-like baseline implementation, post-injection drain/source-cutoff support, PARSEC/GEM5 trace support, documentation-only finalization, or another path.
- **Full prompt summary:** The user requested task `T0034`, required startup reading of all project tracking documents, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`, and required using the registered Noxim source tree at `external/noxim`. The prompt summarized the T0033 findings: XY hotspot zero-injection cells were measured-window artifacts after `-warmup 1000`; XY uniform/localized zero-received cells were caused by standard cardinal-only `XY` being topology-incompatible with unrestricted inter-chiplet traffic on `DEFT_2_5D`; post-injection drain is needed for eventual-delivery analysis but would not fix XY incompatibility; config/runner-only fixes can support limited diagnostics but not strong unrestricted inter-chiplet XY-vs-DEFT comparison; source changes are required only for true drain/source-cutoff support or an interposer-aware XY baseline. The user prohibited code implementation, final-sweep reruns, simulations except already documented documentation-safe validation, final report regeneration, `./regression.sh --update`, and invented results. The user required comparing Options A through F on benefit, risk, time cost, source-code impact, validation burden, external dependency burden, final-report quality, possible new blockers, and late-project appropriateness; recommending exactly one primary direction; adding small ordered follow-up tasks; and updating `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md` if a durable decision was made.
- **Result summary:** T0034 completed as a documentation-only decision task. Option A was selected as the primary next direction: revise the final report using the T0033 diagnosis without adding new simulator behavior. Option A was preferred because it improves report quality and traceability with low risk, no source-code impact, no external dependency burden, and documentation-only validation. Option B could eventually improve baseline comparability but requires new routing behavior and substantial validation. Option C could support eventual-delivery analysis but requires simulator/runner semantic changes and does not fix standard XY topology incompatibility. Option D has high external dependency and validation burden. Option E is safe but leaves the report less informative than Option A. Option F was recorded as a post-final design gate for deferred experimental extensions. Added `T0035` to revise the final report with the T0033 diagnosis and `T0036` as a post-final experimental extension design gate. Added ADR-0041 to record the durable decision to prioritize claim-safe report revision over late simulator behavior changes. `git diff --check` and the `external/noxim` diff check passed, with line-ending warnings for edited Markdown files only. No source code, simulator behavior, helper behavior, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, generated final-sweep artifact, Noxim rebuild, simulation run, final report regeneration, PDF generation, regression command, or performance claim was changed.
- **Follow-up tasks:** Start `T0035` to revise `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex` with the T0033 diagnosis before PDF generation.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: choose final report revision path`

## 2026-05-11: Start T0035 Revise Final Report with T0033 Diagnosis

- **Date:** 2026-05-11
- **Prompt summary:** Revise the claim-safe Markdown final report draft and IEEE LaTeX source so they explain the T0033 XY blocker diagnosis without adding simulator behavior or unsupported results.
- **Full prompt summary:** The user requested task `T0035`, required startup reading of all project tracking documents plus `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex`, required continuing on the existing Git branch, and required using `external/noxim` as the registered Noxim source tree. The prompt required updating `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex` so they incorporate T0033 as explanatory provenance only: `XY|hotspot_3x10` zero-injection cells are measured-window artifacts caused by `-warmup 1000` after early XY traffic injected and stalled; `XY|uniform` and `XY|localized_40` zero-received cells are caused by standard cardinal-only `XY` being topology-incompatible with unrestricted inter-chiplet `DEFT_2_5D` traffic; a post-injection drain/source-cutoff policy is needed for eventual-delivery analysis but would not by itself fix standard XY topology incompatibility; and warm-up-0 T0033 diagnostic values must not be presented as final performance results. The prompt required preserving T0026/T0027/T0028 as the only final report-support data set, using `Extended_Proposal.pdf` as the primary requirements source, the original DeFT paper as the primary algorithmic reference, `Proposal.pdf` only as initial context, and ignoring the peer evaluation document. It prohibited source/helper/routing/VN/VL/LUT/topology/traffic/metrics/runner/analysis changes, generated final-sweep artifact changes, Extended Proposal file changes, Noxim rebuilds, simulation reruns, final-sweep regeneration, `./regression.sh --update`, invented results, and unsupported performance claims. It required a short plan before editing, `git diff --check`, optional LaTeX compilation only if tooling was available, tracking-document updates, and a final report of files, validation, phase, next task, PDF-generation status, next prompt, branch guidance, commit message, and blockers.
- **Result summary:** T0035 completed as a report/documentation-only task. `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex` now explain the T0033 diagnosis while preserving blank cells, measured values, limitations, assumptions, blockers, and descriptive-only wording. The reports state that the hotspot XY blank cells are fixed-window measured-window artifacts after `-warmup 1000`, that uniform/localized XY zero-received cells come from standard cardinal-only XY being topology-incompatible with unrestricted inter-chiplet `DEFT_2_5D` traffic, that a drain/source-cutoff policy is future work for eventual-delivery analysis but not a fix for standard XY topology incompatibility, and that T0033 warm-up-0 diagnostics are traceability evidence only. No source code, simulator behavior, helper behavior, generated final-sweep artifact, rebuild, rerun, regression command, or performance claim was changed. PDF generation was not attempted because `latexmk`, `pdflatex`, `bibtex`, and `tectonic` were unavailable on the Windows PATH.
- **Follow-up tasks:** Start `T0032` to compile the revised `final_report/main.tex` into a PDF in a TeX-enabled environment.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: revise final report with xy diagnosis`

## 2026-05-11: Start T0032 Generate Final Report PDF in a TeX-Enabled Environment

- **Date:** 2026-05-11
- **Prompt summary:** Compile the revised IEEE LaTeX final report source at `final_report/main.tex` into a PDF after T0035 incorporated the T0033 diagnosis, or record the exact TeX-environment blocker if no toolchain is available.
- **Full prompt summary:** The user requested task `T0032`, required startup reading of all project tracking documents plus `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex`, required continuing on the existing branch, and required using `external/noxim` as the registered Noxim source tree. The prompt required compiling from `final_report/` with `latexmk -pdf main.tex` if available, or `pdflatex`/`bibtex`/`pdflatex`/`pdflatex` if `latexmk` was unavailable but both fallback tools existed. It required recording the generated PDF path and any warnings or layout blockers, or recording the exact blocker and leaving PDF generation blocked if no TeX toolchain was available. It prohibited modifying report claims, simulator source, helper source, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifacts, Extended Proposal files, rebuilding Noxim, rerunning simulations, regenerating the final sweep, using `./regression.sh --update`, or adding unsupported performance claims.
- **Result summary:** T0032 is blocked. `final_report/main.tex`, `final_report/references.bib`, and `final_report/IEEEtran.cls` are present, but Windows PATH does not expose `latexmk`, `pdflatex`, `bibtex`, or `tectonic`; common Windows TeX install locations checked during T0032 did not expose a visible TeX install; and `wsl -l -v` reported no installed WSL distributions. LaTeX compilation was not attempted, no PDF was generated, and no warnings or layout blockers could be inspected. `git diff --check` passed with line-ending warnings for edited Markdown files only. No report claims, simulator source, helper source, generated final-sweep artifacts, rebuild, rerun, regression command, or performance claim was changed.
- **Follow-up tasks:** Resolve the TeX-environment blocker, then continue `T0032` to compile the revised final report PDF.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: record final report pdf generation blocker`

## 2026-05-11: Continue T0032 After TeX Toolchain Blocker Check

- **Date:** 2026-05-11
- **Prompt summary:** Continue T0032 after the TeX toolchain blocker was expected to be resolved, first confirming tool availability, then compiling the report or recording the exact remaining blocker.
- **Full prompt summary:** The user requested continuing `T0032`, required startup reading of all project tracking documents plus `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex`, required continuing on the existing branch, and prohibited modifying report claims, source code, simulator behavior, generated final-sweep artifacts, or Extended Proposal files. The prompt required first confirming that a TeX toolchain is available, preferring `latexmk -pdf main.tex` from `final_report/`, with a fallback to `pdflatex`/`bibtex`/`pdflatex`/`pdflatex` only when both fallback tools are available. It required recording the generated PDF path, warnings, and layout blockers, or the exact blocker if tooling remained unavailable, updating tracking docs, and running `git diff --check`.
- **Result summary:** The T0032 continuation attempt remains blocked. Windows PATH still does not expose `latexmk`, `pdflatex`, `bibtex`, or `tectonic`; common Windows TeX install locations checked during the continuation did not expose a visible TeX install; and `wsl -l -v` still reported no installed WSL distributions. LaTeX compilation was not attempted, no PDF was generated, and no warnings or layout blockers could be inspected. `git diff --check` passed with line-ending warnings for edited Markdown files only. No report claims, source code, simulator behavior, generated final-sweep artifacts, rebuild, rerun, regression command, or performance claim was changed.
- **Follow-up tasks:** Resolve the TeX-environment blocker, then continue `T0032` to compile the revised final report PDF.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: record continued pdf generation blocker`

## 2026-05-11: Retry T0032 After WSL `pdflatex` Installation

- **Date:** 2026-05-11
- **Prompt summary:** Retry T0032 after the user reported that `pdflatex` was installed on WSL Ubuntu.
- **Full prompt:**

```text
Ok retry, I installed pdflatex on wsl ubuntu
```

- **Result summary:** T0032 completed. The sandbox-visible WSL check still reported no installed distributions, but an approved outside-sandbox WSL check found Ubuntu running under WSL 2. Windows PATH still did not expose TeX tools, and WSL did not expose `latexmk`, but WSL did expose `/usr/bin/pdflatex` and `/usr/bin/bibtex`. The fallback sequence was run from `final_report/`. Two claim-neutral TeX compatibility edits were made in `final_report/main.tex`: remove the unused `algorithmic` package import because `algorithmic.sty` was missing, and switch the bibliography style from unavailable `IEEEtran` to installed `ieeetr` because `IEEEtran.bst` was not available locally. The final PDF was generated at `final_report/main.pdf`; final log inspection found no unresolved citations or references, no LaTeX errors, no fatal errors, no overfull boxes, and BibTeX zero warnings. Remaining diagnostics were 43 underfull box messages, one underfull vbox, and the standard IEEEtran final-page column-balance reminder. No report claims, source code, simulator behavior, generated final-sweep artifacts, rebuild, rerun, regression command, or performance claim was changed.
- **Follow-up tasks:** Start `T0036` to perform the post-final experimental extension design gate.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: generate final report pdf`

## 2026-05-11: Start T0036 Post-Final Experimental Extension Design Gate

- **Date:** 2026-05-11
- **Prompt summary:** After final report revision and PDF generation, decide whether any high-risk experimental extension should be designed as future work or whether experimental work should stop.
- **Full prompt summary:** The user requested task `T0036`, required startup reading of all project tracking documents plus `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex`, required continuing on the existing Git branch, and prohibited creating or switching branches. The prompt required using `Extended_Proposal.pdf` as the primary project requirements source, the original DeFT paper as the primary algorithmic reference, `Proposal.pdf` only as initial context, and ignoring the peer evaluation document. It required using the registered Noxim source tree at `external/noxim` for context only. The task was design-only and prohibited source-code edits, report-claim changes, simulator/helper behavior changes, routing/VN/VL/LUT/topology/traffic/metrics/runner/analysis changes, generated final-sweep artifact changes, generated final-report PDF artifact changes, Extended Proposal file changes, Noxim rebuilds, simulation reruns, final-sweep regeneration, external dependency installation, and `./regression.sh --update`. The user required revisiting the deferred T0034 options: interposer-aware XY-like baseline, source-cutoff plus post-injection drain policy, explicitly route-compatible intra-chiplet comparison, PARSEC/GEM5 trace support, or no further experimental work; recording risks, validation requirements, dependencies, and blockers before implementation; updating tracking docs; updating `docs/DECISIONS.md` only if a durable decision was made; and running `git diff --check`.
- **Result summary:** T0036 completed as a documentation-only design gate. The selected future-work direction is no further experimental work for the current project phase. Interposer-aware XY-like routing was not selected because it requires new routing behavior, build validation, focused route tests, and new versioned comparison artifacts. Source-cutoff plus post-injection drain was not selected because it changes simulator/runner stop semantics, requires metric-interpretation work, and does not fix standard `XY` topology incompatibility by itself. A route-compatible intra-chiplet comparison was not selected because it narrows away from the central unrestricted inter-chiplet DeFT case and would need a separate validation and report policy. PARSEC/GEM5 trace support was not selected because it requires external trace-generation or import infrastructure, workload mapping, and substantial validation. Added ADR-0042 to record the durable decision to stop experimental work after final report closure. No source code, report claims, simulator behavior, helper behavior, generated final-sweep artifacts, generated final-report PDF artifacts, rebuild, rerun, external dependency installation, regression command, or performance claim was changed.
- **Follow-up tasks:** No further experimental task is recommended. Start `T0037` only if a final submission handoff check is desired.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: close post-final experimental gate`

## 2026-05-11: Start T0037 Final Submission Handoff Check

- **Date:** 2026-05-11
- **Prompt summary:** Perform a documentation-only final handoff check after T0036 selected no further experimental work.
- **Full prompt summary:** The user requested task `T0037`, required startup reading of all project tracking documents plus `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex`, required continuing on the existing Git branch, and prohibited creating or switching task branches. The prompt required using `Extended_Proposal.pdf` as the primary project requirements source, the original DeFT paper as the primary algorithmic reference, `Proposal.pdf` only as initial context, and ignoring the peer evaluation document completely. The prompt required using the registered Noxim source tree at `external/noxim`, producing a short implementation plan before commands or tracking-document edits, and clearly marking assumptions and blockers. The task prohibited source-code edits, report-claim changes, simulator/helper behavior changes, routing/VN/VL/LUT/topology/traffic/metrics/runner/analysis changes, generated final-sweep artifact changes, generated final-report PDF artifact changes, Extended Proposal file changes, Noxim rebuilds, simulation reruns, final-sweep regeneration, external dependency installation, and `./regression.sh --update`. The user required confirming final artifact paths, repository status, tracking-document consistency, and remaining blockers only, updating `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, and `docs/PROMPTS.md`, updating `docs/DECISIONS.md` only if a new durable decision was made, running `git diff --check`, and reporting final handoff details.
- **Result summary:** T0037 completed as a documentation-only handoff check. Confirmed `final_report/main.pdf` exists at `C:\Projects\CMP-720-Project-Proposal\final_report\main.pdf` with size 344758 bytes, and `final_report/main.log` records a 5-page PDF output. Confirmed current `final_report/main.tex`, `references.bib`, `IEEEtran.cls`, `README.md`, and `figures/schematic.png` are present. Confirmed T0026/T0027/T0028 report-support artifact paths are present, including 150 T0026 JSON stats files, 300 log files, and 5 generated LUT files. Parent repository status before documentation edits showed only the pre-existing untracked `final_report.zip`, and `external/noxim` remained clean. The handoff caveat is that `final_report.zip` is stale: it is untracked, does not contain `final_report/main.pdf`, and contains an older `main.tex`, so it should not be used as the current final submission package unless refreshed separately. `docs/FINAL_REPORT_DRAFT.md` also still contains an older PDF-blocked note, but current tracking docs and the generated PDF supersede it; it was left unchanged because T0037 did not edit report content. Final `git diff --check` completed with exit code `0`, with line-ending conversion warnings for edited Markdown files only. No source code, report claims, simulator behavior, generated final-sweep artifacts, generated final-report PDF artifacts, rebuild, rerun, external dependency installation, regression command, or performance claim was changed.
- **Follow-up tasks:** Start `T0038` only if a zip/archive package is required for submission. Otherwise no further project task is recommended, and no further experimental work is recommended.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: record final submission handoff`

## 2026-05-11: Start T0038 Refresh Final Submission Package

- **Date:** 2026-05-11
- **Prompt summary:** Refresh the final submission package only if an archive is required, preserving report contents, simulator behavior, generated artifacts, and final-report PDF artifacts.
- **Full prompt summary:** The user requested task `T0038`, required startup reading of all project tracking documents plus `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex`, required continuing on the existing Git branch, and prohibited creating or switching task branches. The prompt required using `Extended_Proposal.pdf` as the primary project requirements source, the original DeFT paper as the primary algorithmic reference, `Proposal.pdf` only as initial context, and ignoring the peer evaluation document completely. It required using `external/noxim` as the registered Noxim source tree, producing a short implementation plan before commands or tracking-document edits, and clearly marking assumptions and blockers. The task prohibited source-code edits, report-claim changes, simulator/helper behavior changes, routing/VN/VL/LUT/topology/traffic/metrics/runner/analysis changes, generated final-sweep artifact changes, generated final-report PDF artifact changes, Extended Proposal file changes, Noxim rebuilds, simulation reruns, final-sweep regeneration, external dependency installation, and `./regression.sh --update`. If an archive was required, the prompt required refreshing only the submission archive so it included current `final_report/main.pdf`, current `final_report/main.tex`, `final_report/references.bib`, `final_report/IEEEtran.cls`, `final_report/README.md`, and `final_report/figures/schematic.png`.
- **Result summary:** T0038 completed as a packaging-only task. Starting T0038 was treated as the archive-required path. The previously documented stale `final_report.zip` was not present at task start, so a fresh archive was created. The new `final_report.zip` contains exactly the six allowed entries with `final_report/...` paths, including the generated `final_report/main.pdf`; entry sizes match the current files. The archive size is 659238 bytes and SHA-256 is `C54186F6326B288C3C069FB396F23874CBE9A30DAD5913AA38A688E8444B5882`. No report source, generated PDF artifact, report claim, source code, simulator behavior, generated final-sweep artifact, rebuild, rerun, external dependency installation, regression command, or performance claim was changed.
- **Follow-up tasks:** No further project task is recommended. Use `final_report/main.pdf`, the current `final_report/` source tree, and `final_report.zip` for final handoff.
- **Next ready-to-send prompt:** No next project task is recommended. Use the current final handoff artifacts unless a new explicit task with its own design and validation policy is opened.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: refresh final submission package`

## 2026-05-11: Start T0039 Analyze Remaining Gaps and Document Future Task Backlog

- **Date:** 2026-05-11
- **Prompt summary:** Analyze the remaining limitations after final package creation and document an ordered future backlog without changing source code, generated artifacts, final-report artifacts, or report claims.
- **Full prompt summary:** The user requested task `T0039`, required startup reading of all project tracking documents plus `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex`, required continuing on the existing Git branch, and prohibited creating or switching task branches. The prompt asked Codex to first check whether the GPT-generated task list was appropriate and to proceed only if it fit the project; otherwise, Codex should inform the user. The task was documentation/planning only and prohibited modifying simulator source, helper source, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifacts, `final_report.zip`, `final_report/main.pdf`, and Extended Proposal files. It also prohibited rebuilding Noxim, rerunning simulations, regenerating the final sweep, regenerating the final report PDF, using `./regression.sh --update`, inventing results, or strengthening unsupported claims. The requested backlog covered interposer-aware XY design and implementation, limited IA-XY-vs-DEFT comparison, source-cutoff plus drain design and implementation, directional fault modeling feasibility, PARSEC/GEM5 feasibility and ingestion, and report regeneration only after new validated artifacts exist.
- **Result summary:** T0039 completed as a documentation-only backlog task. The supplied prompt was accepted as consistent with the existing project decisions because it preserves final submission readiness, keeps high-risk work as future tasks, and requires new artifact directories for future experiments. Added T0039 as completed and added TODO tasks T0040 through T0048. Added architecture notes for the post-submission backlog, validation notes for future backlog planning, progress updates that the final package remains ready for handoff, and ADR-0043 to record the durable rule that the backlog is non-blocking and artifact-isolated. No source code, helper source, simulator behavior, generated final-sweep artifacts, final-report PDF artifact, `final_report.zip`, rebuild, rerun, external dependency installation, regression command, or performance claim was changed.
- **Follow-up tasks:** None for submission. Start T0040 only if more development is required.
- **Next ready-to-send prompt:** `No next task is required for final submission. If more development is required, start T0040: Design Interposer-Aware XY Baseline. Before starting, read AGENTS.md and the required project tracking documents, continue on the existing branch, do not create or switch branches, keep the task design-only, clearly state that IA-XY is not standard XY, do not edit source code or run simulations, update tracking docs, and run git diff --check.`
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: document future development backlog`

## 2026-05-11: Start T0040 Design Interposer-Aware XY Baseline

- **Date:** 2026-05-11
- **Prompt summary:** Design a new Interposer-Aware XY baseline for future comparison against `DEFT_2_5D`, as a documentation-only task.
- **Full prompt summary:** The user requested task `T0040`, required startup reading of all project tracking documents plus `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex`, required continuing on the existing Git branch, and prohibited creating or switching task branches. The prompt required using `Extended_Proposal.pdf` as the primary project requirements source, the original DeFT paper as the primary algorithmic reference, `Proposal.pdf` only as initial context, and ignoring the peer evaluation document completely. The prompt required using the registered Noxim source tree at `external/noxim`, and it scoped the task to design/planning only. The design had to state clearly that IA-XY is not standard XY, because standard XY is cardinal-only and remains unchanged; IA-XY should be a new baseline that intentionally routes inter-chiplet packets through Vertical Links and the interposer. The task prohibited source-code edits, helper-source edits, routing logic changes, VN transition changes, VL fault injection changes, LUT schema/use path changes, topology behavior changes, traffic/metrics/runner/analysis semantic changes, generated final-sweep artifact changes, `final_report.zip`, `final_report/main.pdf`, Extended Proposal file changes, Noxim rebuilds, simulation reruns, final-sweep regeneration, final-report PDF regeneration, `./regression.sh --update`, invented results, and unsupported stronger claims. The requested design contents included purpose and rationale, why standard XY is insufficient, route behavior, interposer entry/exit, relationship to existing XY and DeFT, naming, future source files, validation plan, risks, open questions, future implementation acceptance criteria, and claim-safety rules.
- **Result summary:** T0040 completed as a design-only documentation task. Added the IA-XY design to `docs/ARCHITECTURE.md`, marked T0040 done in `docs/TASKS.md`, recorded validation expectations in `docs/VALIDATION.md`, added progress and next prompt updates in `docs/PROGRESS.md`, and added ADR-0044 in `docs/DECISIONS.md`. IA-XY is defined as a new proposed `INTERPOSER_AWARE_XY` baseline, not standard `XY`; standard `XY` remains cardinal-only and unchanged. The future route design uses same-chiplet local XY, source-chiplet local XY to a functional source VL, active-interposer XY traversal, destination-side functional VL traversal, and destination-local XY. No source code, helper source, simulator behavior, generated artifacts, final-report artifacts, package artifacts, rebuild, rerun, regression command, or performance claim was changed.
- **Follow-up tasks:** Start `T0041` only if more development is required after the current final submission.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: design interposer-aware xy baseline`

## 2026-05-11: Start T0041 Implement Interposer-Aware XY Baseline

- **Date:** 2026-05-11
- **Prompt summary:** Implement a separately selectable `INTERPOSER_AWARE_XY` routing mode according to the accepted T0040 IA-XY design.
- **Full prompt summary:** The user requested task `T0041`, required startup reading of `AGENTS.md`, all required tracking documents, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`, and required reading the T0040 IA-XY design in `docs/ARCHITECTURE.md`. The user required continuing on the existing Git branch, using `Extended_Proposal.pdf` as the primary project requirements source, the original DeFT paper as the primary algorithmic reference, `Proposal.pdf` only as initial context, ignoring the peer evaluation document completely, and using the registered Noxim source tree at `external/noxim`. The goal was to add a new baseline route named `INTERPOSER_AWARE_XY` that preserves standard `XY` as cardinal-only and unchanged, preserves `DEFT`, VN transition restrictions, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifacts, final-report artifacts, and Extended Proposal files. The user required a short plan before coding, parent and `external/noxim` status checks, build validation using `./build.sh`, targeted smokes only, concrete smoke commands before running them, no full comparison matrix, no final-sweep regeneration, no report PDF regeneration, no `./regression.sh --update`, no invented results, and tracking-document updates.
- **Result summary:** T0041 completed. Added a new self-registered `INTERPOSER_AWARE_XY` route in `external/noxim/src/routingAlgorithms/Routing_INTERPOSER_AWARE_XY.*`, added the routing string constant, help/config visibility, a `DEFT_2_5D` topology guard, a matching power-model entry, a minimal config example, and tiny hardcoded traffic files for same-chiplet and inter-chiplet smokes. IA-XY routes same-chiplet packets with local XY only. Inter-chiplet IA-XY selects a functional source VL and functional destination VL using existing `DeftTopology` queries, routes source-local XY, traverses the source VL through `DIRECTION_HUB`, routes XY on the active interposer, traverses the destination VL through `DIRECTION_HUB`, and routes destination-local XY. It does not use the DeFT schema-v1 LUT or DeFT VL optimization. Standard `XY`, `DEFT`, VN transition restrictions, VL fault injection, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated T0026/T0027/T0028 artifacts, `final_report/main.pdf`, `final_report.zip`, and Extended Proposal files were preserved.
- **Validation summary:** The known Noxim build command `./build.sh` completed with exit code `0` in WSL Ubuntu. Route registration/config loading smoke passed with routing `INTERPOSER_AWARE_XY`, DeFT LUT disabled, active fault mask `0x0000`, and four functional VLs per chiplet. Same-chiplet `0 -> 3` smoke passed, delivered one packet/eight flits, and had no IA-XY VL traversal debug entries. Inter-chiplet no-fault `0 -> 63` smoke passed and logged source exit `vl_id=0` plus destination entry `vl_id=12`. Explicit-fault fallback with `-deft_faulty_vls 0` passed and logged fallback source exit `vl_id=1` instead of faulty `vl_id=0`. External `diff --check` passed and generated T0026/T0027/T0028 artifact directories had no changed files. These smokes are implementation validation only, not performance evidence.
- **Follow-up tasks:** Start `T0042` only if more development is required, to define and run a limited, claim-safe IA-XY-vs-DEFT comparison in new artifact directories.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `feat: implement interposer-aware xy baseline`

## 2026-05-11: Start T0042 Run Limited IA-XY vs DeFT Comparison

- **Date:** 2026-05-11
- **Prompt summary:** Run a limited, claim-safe IA-XY-vs-DEFT comparison using the validated `INTERPOSER_AWARE_XY` route and new artifact directories only.
- **Full prompt summary:** The user requested task `T0042`, required startup reading of all project tracking documents plus `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex`, and specifically required reading the T0040 IA-XY design and T0041 IA-XY implementation notes in `docs/ARCHITECTURE.md`. The user required continuing on the existing Git branch, using `Extended_Proposal.pdf` as the primary requirements source, using the original DeFT paper as the primary algorithmic reference, using `Proposal.pdf` only as initial context, and ignoring the peer evaluation document completely. The goal was to run a limited, claim-safe `INTERPOSER_AWARE_XY` vs `DEFT` comparison now that IA-XY had build and smoke validation. The prompt required producing an experiment plan before execution, checking parent and `external/noxim` status, defining the exact matrix before running anything, using new artifact directories under `external/noxim/other/generated/t0042_iaxy_deft_limited_v1/`, preserving blank-aware interpretation rules, and treating results as exploratory/report-support only unless fully supported by validated artifacts. The task prohibited simulator source modifications unless an unavoidable blocker was found, standard `XY` changes, `DEFT` routing changes, VN transition changes, VL fault injection changes, LUT schema/use path changes, topology/traffic/metrics/runner/analysis semantic changes, T0026/T0027/T0028 artifact overwrites, final sweep regeneration, final report PDF/package changes, Extended Proposal changes, `./regression.sh --update`, invented results, and unsupported stronger claims.
- **Result summary:** T0042 completed. The exact limited matrix was documented before simulator execution: routings `INTERPOSER_AWARE_XY` and `DEFT`; traffic profiles `uniform`, `localized_40`, and `hotspot_3x10`; fault masks `0x0000` and `0x1111`; seeds `0` and `1`; `-sim 10000`; `-warmup 1000`; JSON stats; 24 planned runs. All artifacts were written under `external/noxim/other/generated/t0042_iaxy_deft_limited_v1/`. The Ubuntu WSL run completed with exit code `0`, producing `manifest.json`, `commands.sh`, `summary.csv`, 24 JSON stats files, 24 stdout logs, 24 stderr logs, and generated DEFT LUTs for the two masks. The mechanical analysis scaffold and T0042 blank-aware cross-check both completed with exit code `0`; `blank_aware_validation.json` reports `cross_check_passed: true` with no summary/stat mismatches, no config mismatches, and no missing artifacts. IA-XY hotspot cells injected zero packets and remain blank-aware. The packet-carrying IA-XY/DEFT cells are descriptive side-by-side evidence only and do not support ranking, improvement percentages, statistical conclusions, or final-report claim changes. No simulator source code, standard `XY`, `DEFT`, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis source semantics, T0026/T0027/T0028 artifacts, final-report artifacts, package artifacts, or Extended Proposal files were changed.
- **Follow-up tasks:** Start `T0043` only if more development is required, to design source-cutoff plus post-injection drain/timeout semantics before any eventual-delivery implementation or experiment.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `test: run limited ia-xy deft comparison`

## 2026-05-12: Start T0043 Design Source-Cutoff and Post-Injection Drain Policy

- **Date:** 2026-05-12
- **Prompt summary:** Design, but do not implement, a source-cutoff and post-injection drain/timeout policy for eventual-delivery analysis.
- **Full prompt summary:** The user requested task `T0043`, required startup reading of all project tracking documents plus `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex`, required continuing on the existing Git branch, and prohibited creating or switching task branches. The prompt required using `Extended_Proposal.pdf` as the primary project requirements source, the original DeFT paper as the primary algorithmic reference, `Proposal.pdf` only as initial context, and ignoring the peer evaluation document completely. The prompt required using the registered Noxim source tree at `external/noxim`. The task goal was to design source cutoff, drain start, in-flight empty condition, timeout policy, metric denominators, warm-up interaction, differences from current fixed-window `-sim`, differences from current Noxim `-volume`, future simulator/runner surfaces, and smoke-test cases for a later implementation task. The prompt prohibited simulator source edits, helper source edits, routing logic changes, standard `XY` changes, `DEFT` changes, VN transition changes, VL fault injection changes, LUT schema/use path changes, topology behavior changes, traffic semantics changes, metrics semantics changes, runner/analysis semantics changes, simulations, Noxim rebuilds, final-sweep regeneration, final-report PDF regeneration, final-report package changes, Extended Proposal file changes, `./regression.sh --update`, invented results, and unsupported stronger claims.
- **Result summary:** T0043 completed as a design-only documentation task. Added the source-cutoff plus drain/timeout policy to `docs/ARCHITECTURE.md`, marked T0043 done and refined T0044 expectations in `docs/TASKS.md`, recorded validation expectations in `docs/VALIDATION.md`, updated progress and the next ready-to-send T0044 prompt in `docs/PROGRESS.md`, and added ADR-0046 in `docs/DECISIONS.md`. The policy defines an opt-in future eventual-delivery mode: measured packet heads are admitted only before a source cutoff, drain timeout starts at the cutoff boundary, completion requires source queues, router buffers, relevant VL/hub carrier state, reservations, and measured injected/received counts to be empty, and exports must report stop reason, denominator counts, timing fields, and remaining in-flight counts. It distinguishes this from fixed-window `-sim` and current Noxim `-volume`. T0026/T0027/T0028 and T0042 remain historical fixed-window artifacts and were not regenerated or reinterpreted. No source code, helper source, simulator behavior, routing behavior, traffic behavior, metric export behavior, runner behavior, generated artifacts, final-report artifacts, package artifacts, rebuild, rerun, regression command, or performance claim was changed.
- **Follow-up tasks:** Start `T0044` only if more development is required, to implement the accepted opt-in drain mode and run targeted validation smokes before any broader eventual-delivery experiment.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: design source cutoff drain policy`

## 2026-05-12: Start T0044 Implement and Validate Drain Policy

- **Date:** 2026-05-12
- **Prompt summary:** Implement the accepted opt-in T0043 source-cutoff plus post-injection drain/timeout mode and validate it with targeted smokes only.
- **Full prompt summary:** The user requested task `T0044`, required startup reading of all project tracking documents plus `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex`, and specifically required reading the T0043 source-cutoff and post-injection drain policy in `docs/ARCHITECTURE.md` and ADR-0046 in `docs/DECISIONS.md`. The user required continuing on the existing Git branch without creating or switching branches, using `Extended_Proposal.pdf` as the primary requirements source, using the original DeFT paper as the primary algorithmic reference, using `Proposal.pdf` only as initial context, ignoring the peer evaluation document completely, and using the registered Noxim source tree at `external/noxim`. The goal was to implement only the accepted opt-in source-cutoff plus drain/timeout mode for eventual-delivery analysis, preserve fixed-window `-sim` behavior and current `-volume` behavior when drain mode is disabled, add explicit in-flight empty detection and denominator export fields, and run targeted smokes only. The prompt prohibited modifying standard `XY`, `DEFT`, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, existing fixed-window metric semantics, existing runner/analysis defaults outside opt-in drain mode, generated final-sweep artifacts, `final_report/main.pdf`, `final_report.zip`, Extended Proposal files, and `./regression.sh --update`.
- **Result summary:** T0044 completed. Added opt-in drain mode selected by `-drain_mode` or `-drain`, with YAML/CLI fields for source cutoff and explicit timeout. Drain mode gates source admission during warm-up, admits measured packet heads only before the cutoff, drains accepted traffic after cutoff, and stops with `drain_completed` or `drain_timeout`. Empty detection covers source queues, router buffers, router reservations, pending hub/VL handshakes, and measured injected/received packet and flit balances. Drain-mode JSON/CSV exports include explicit stop reason, timing fields, measured injected/received denominators, undelivered counts, elapsed-cycle denominators, drain throughput, and remaining in-flight counts. Fixed-window `-sim` behavior remains the default, and current `-volume` behavior remains available when drain mode is disabled. Added ADR-0047 because drain mode and `-volume` are mutually exclusive stop policies.
- **Validation summary:** The known `external/noxim` build command `./build.sh` passed after an initial WSL timeout and incremental rerun. Targeted smokes passed under ignored `external/noxim/other/generated/t0044_drain_smokes/`: no-traffic immediate drain, same-chiplet hardcoded delivery, inter-chiplet `DEFT` delivery with no-fault LUT, cutoff suppression, timeout, warm-up gating, disabled fixed-window compatibility, and disabled `-volume` compatibility. The timeout smoke stopped with `drain_timeout` and nonzero remaining in-flight counts; all delivery smokes completed with expected injected/received packet counts; disabled-mode smokes exported no drain fields. The first inline Bash/Python JSON verifier had a here-document delimiter issue after simulator commands completed, then a PowerShell JSON verifier passed. No standard `XY`, `DEFT`, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, runner/analysis defaults, generated final-sweep artifacts, final-report artifacts, package artifacts, or Extended Proposal files were changed.
- **Follow-up tasks:** Start `T0045` only if more development is required, to evaluate directional endpoint fault modeling against the current physical bidirectional VL model before any fault-model implementation.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `feat: implement drain policy`

## 2026-05-12: Start T0045 Evaluate Directional Fault Modeling

- **Date:** 2026-05-12
- **Prompt summary:** Evaluate whether the simulator should support directional endpoint fault modeling in addition to the current physical bidirectional VL fault model.
- **Full prompt summary:** The user requested task `T0045`, required startup reading of all project tracking documents plus `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex`, required continuing on the existing Git branch without creating or switching branches, and required using `Extended_Proposal.pdf` as the primary requirements source, the original DeFT paper as the primary algorithmic reference, `Proposal.pdf` only as initial context, and ignoring the peer evaluation document completely. The task required using the registered Noxim source tree at `external/noxim`, producing a short feasibility plan before editing, checking parent and `external/noxim` status, and clearly marking assumptions and blockers. The scope was to compare the current 16 physical bidirectional VL model with the paper's directional endpoint interpretation, identify impacts to fault masks, LUT generation, runtime lookup, topology state, validation, and result interpretation, and recommend implement, defer, or reject directional endpoint support. The task prohibited source-code edits, simulations, Noxim rebuilds, standard `XY` changes, `DEFT` changes, VN transition changes, VL fault injection semantic changes, LUT schema/use path changes, topology behavior changes, generated final-sweep artifacts, `final_report/main.pdf`, `final_report.zip`, Extended Proposal files, `./regression.sh --update`, invented results, and unsupported stronger claims.
- **Result summary:** T0045 completed as a documentation-only feasibility task. Source-document inspection confirmed the central ambiguity: the extended proposal describes four bidirectional VLs per chiplet while using 3.125% through 25% fault-rate wording, and the original DeFT paper reports four-chiplet reachability over `total VLs=32` while also describing four bidirectional VLs per chiplet. Read-only source inspection confirmed that the current implementation uses 16 physical bidirectional VL IDs, one functional state per physical VL, physical fault masks in configuration and runner surfaces, schema-v1 LUT keys over 16 physical bits, and physical functional-state checks in `DEFT` and IA-XY routing. Added the T0045 feasibility analysis to `docs/ARCHITECTURE.md` and added ADR-0048 to defer directional endpoint support behind a future versioned fault-model design. Existing T0026/T0027/T0028, T0042, T0044, final-report, package, and Extended Proposal artifacts remain physical-model artifacts and must not be reinterpreted as single-direction fault evidence.
- **Validation summary:** Documentation-only validation ran with `git diff --check`, final `external/noxim` status, generated-artifact guards for T0026/T0027/T0028 and T0042, and final-report/proposal artifact guards. No source code, simulator behavior, standard `XY`, `DEFT`, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, generated artifacts, simulations, Noxim rebuild, final-report PDF, package artifact, Extended Proposal file, regression command, or performance claim changed.
- **Follow-up tasks:** Start `T0046` only if more development is required, to assess PARSEC/GEM5 trace support feasibility without installing dependencies or claiming trace support.
- **Next ready-to-send prompt:** See `docs/PROGRESS.md`.
- **Suggested branch name for next task:** None; continue on the existing branch.
- **Suggested commit message:** `docs: evaluate directional fault modeling`
