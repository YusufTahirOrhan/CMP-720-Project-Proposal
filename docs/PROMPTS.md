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
