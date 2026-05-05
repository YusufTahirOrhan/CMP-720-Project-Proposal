# Codex Project Rules

This repository implements and evaluates DeFT: a Deadlock-Free and Fault-Tolerant routing algorithm for 2.5D chiplet networks.

## Source of Truth

- `Extended_Proposal.pdf` is the primary project requirements source.
- `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` is the local ignored copy of the primary DeFT algorithm and thesis reference source.
- `Proposal.pdf` is initial project context.
- The peer evaluation document is out of scope and must be ignored completely.
- Stay within the scope of `Extended_Proposal.pdf`, `Proposal.pdf`, and the original DeFT paper.

## Language Rules

- The entire project must be written in English.
- Do not add Turkish comments, documentation, identifiers, commit messages, logs, task notes, or file content.
- If a prompt contains non-English text, summarize it in English before recording it in project documentation.

## Required Startup Reading

Before starting any new task, read:

- `AGENTS.md`
- `docs/PROGRESS.md`
- `docs/TASKS.md`
- `docs/ROADMAP.md`
- `docs/ARCHITECTURE.md`

## Development Process

- Do not start coding before producing a short implementation plan.
- Work only on the explicitly selected task.
- Do not modify unrelated files.
- Keep changes small, reviewable, and task-based.
- Update project tracking documents after each completed task.
- After each completed task, provide a ready-to-send prompt for the next recommended task.
- After each completed task, provide a suggested commit message for the completed work.
- Every future task should be traceable through `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md`.
- Clearly mark assumptions as `Assumption`.
- Clearly mark blockers as `Blocked`.

## Validation Rules

- Do not invent build, test, validation, or simulation commands.
- Run validation after every code change when a valid validation command is known.
- If validation cannot be run, explain why.
- Record validation results in `docs/PROGRESS.md` and update `docs/VALIDATION.md` when new commands become known.

## High-Risk Areas

Be especially careful with changes related to:

- DeFT routing logic
- VN.0 / VN.1 assignment rules
- VN transition restrictions
- Vertical Link fault injection
- VL selection LUT generation
- Noxim routing behavior
- C++ / SystemC simulation correctness
