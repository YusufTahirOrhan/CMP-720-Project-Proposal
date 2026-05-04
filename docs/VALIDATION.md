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

## Build Validation

Purpose:

- Confirm that Noxim builds before project-specific implementation begins.
- Record exact compiler, SystemC, and build environment requirements.

Command:

- Unknown until repository inspection.

Notes:

- Noxim source code is not currently present in the repository.
- Build commands must come from the repository, Noxim documentation, or user-provided instructions.

## Source Document Validation

Purpose:

- Confirm that required project source documents are available before design or implementation tasks.
- Confirm that DeFT-specific behavior is checked against the original paper when relevant.

Known sources:

- `Extended_Proposal.pdf`
- `Proposal.pdf`
- `C:/Users/9500203/Downloads/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`

Command:

- Unknown until repository inspection.

Notes:

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
