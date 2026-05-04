# Task Tracker

Statuses: `TODO`, `IN_PROGRESS`, `DONE`, `BLOCKED`.

## T0001: Repository Analysis and Documentation Setup

- **Status:** DONE
- **Objective:** Create persistent project-management documentation and record the initial repository state.
- **Relevant roadmap phase:** Phase 0
- **Files likely to change:** `AGENTS.md`, `docs/ROADMAP.md`, `docs/TASKS.md`, `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`
- **Acceptance criteria:** Documentation files exist, are English-only, record the original DeFT paper as a source, and no implementation source files are changed.
- **Validation command:** `git status --short`
- **Notes:** This task was completed as documentation-only. Noxim source code is not present in the repository. The original DeFT paper was registered as an external local source. The next prompt and suggested commit message are recorded in `docs/PROGRESS.md`.

## T0002: Confirm Repository Contents, Noxim Availability, and Source Availability

- **Status:** TODO
- **Objective:** Re-inspect repository contents at the start of the next session, confirm whether Noxim source code has been added, and confirm whether the original DeFT paper remains available at the documented path.
- **Relevant roadmap phase:** Phase 1
- **Files likely to change:** `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/VALIDATION.md`
- **Acceptance criteria:** Repository structure, Noxim availability, and source-document availability are documented.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Do not add code during this task unless explicitly requested. After completion, provide the next ready-to-send prompt and suggested commit message.

## T0003: Establish Baseline Build Command

- **Status:** BLOCKED
- **Objective:** Identify and document the actual Noxim build command.
- **Relevant roadmap phase:** Phase 1
- **Files likely to change:** `docs/VALIDATION.md`, `docs/PROGRESS.md`
- **Acceptance criteria:** A real build command is documented and verified.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Blocked until Noxim source code and build files are present.

## T0004: Run Baseline Noxim Simulation

- **Status:** BLOCKED
- **Objective:** Run one unmodified baseline Noxim simulation and record the command and output summary.
- **Relevant roadmap phase:** Phase 1
- **Files likely to change:** `docs/VALIDATION.md`, `docs/PROGRESS.md`
- **Acceptance criteria:** A baseline simulation command and result are documented.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Blocked until Noxim builds successfully.

## T0005: Map Noxim Extension Points

- **Status:** BLOCKED
- **Objective:** Identify Noxim files responsible for topology construction, routing, traffic generation, configuration, and statistics.
- **Relevant roadmap phase:** Phase 1
- **Files likely to change:** `docs/ARCHITECTURE.md`, `docs/TASKS.md`, `docs/PROGRESS.md`
- **Acceptance criteria:** Extension points are documented with file paths.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Blocked until Noxim source code is present.

## T0006: Design 2.5D Router ID and Coordinate Mapping

- **Status:** TODO
- **Objective:** Define a small, reviewable design for chiplet, interposer, and router coordinate mapping before coding.
- **Relevant roadmap phase:** Phase 2
- **Files likely to change:** `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`
- **Acceptance criteria:** Mapping design is documented and assumptions are explicit.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Documentation task first; implementation should follow in a separate task. Check the original DeFT paper before finalizing mapping assumptions.

## T0007: Implement 2.5D Topology Construction

- **Status:** TODO
- **Objective:** Add the smallest code change required to instantiate the planned 2.5D topology.
- **Relevant roadmap phase:** Phase 2
- **Files likely to change:** To be confirmed after Noxim source inspection
- **Acceptance criteria:** Simulator can construct the topology and report expected router/link counts.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Requires a short implementation plan before coding.

## T0008: Add Vertical Link Data Model

- **Status:** TODO
- **Objective:** Represent Vertical Links with chiplet ownership, boundary router mapping, interposer endpoint, and active/faulty state.
- **Relevant roadmap phase:** Phase 3
- **Files likely to change:** To be confirmed after Noxim source inspection
- **Acceptance criteria:** Each chiplet has exactly four Vertical Links and mappings are inspectable.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Keep independent from fault injection behavior where possible.

## T0009: Add Boundary Router Identification

- **Status:** TODO
- **Objective:** Mark or derive boundary routers that connect chiplets to the active interposer.
- **Relevant roadmap phase:** Phase 3
- **Files likely to change:** To be confirmed after Noxim source inspection
- **Acceptance criteria:** Routing code can query whether a router is a boundary router.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Should be tested with topology mapping output.

## T0010: Implement Fault Injection Manager

- **Status:** TODO
- **Objective:** Add centralized startup-time permanent Vertical Link fault injection.
- **Relevant roadmap phase:** Phase 4
- **Files likely to change:** To be confirmed after Noxim source inspection
- **Acceptance criteria:** Fault masks are seed-controlled and do not fully disconnect any chiplet.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Fault-rate ambiguity must be resolved or explicitly parameterized.

## T0011: Add Fault Mask Validation

- **Status:** TODO
- **Objective:** Validate generated fault masks for rates up to 25%.
- **Relevant roadmap phase:** Phase 4
- **Files likely to change:** To be confirmed after Noxim source inspection
- **Acceptance criteria:** Invalid masks are rejected or regenerated.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** This task should be completed before DeFT routing uses fault state.

## T0012: Design VN State Representation

- **Status:** TODO
- **Objective:** Document how VN.0 and VN.1 state will be represented in packet or flit metadata.
- **Relevant roadmap phase:** Phase 5
- **Files likely to change:** `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`
- **Acceptance criteria:** VN state design and transition assumptions are recorded.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Documentation task before implementation. VN behavior must be checked against the original DeFT paper.

## T0013: Implement VN Assignment Rules

- **Status:** TODO
- **Objective:** Implement DeFT VN assignment behavior for source routers and boundary routers.
- **Relevant roadmap phase:** Phase 5
- **Files likely to change:** To be confirmed after Noxim source inspection
- **Acceptance criteria:** Inter-chiplet traffic follows the proposal's VN assignment rules.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Must preserve exactly two VCs.

## T0014: Enforce VN Transition Restrictions

- **Status:** TODO
- **Objective:** Enforce VN.1-to-VN.0 ban, Up-to-Horizontal ban in VN.0, and Horizontal-to-Down ban in VN.1.
- **Relevant roadmap phase:** Phase 5
- **Files likely to change:** To be confirmed after Noxim source inspection
- **Acceptance criteria:** Forbidden transitions are rejected or avoided by route selection.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** High-risk deadlock-freedom task.

## T0015: Design Offline VL LUT Format

- **Status:** TODO
- **Objective:** Define the lookup table keys, values, and storage format before implementing generation.
- **Relevant roadmap phase:** Phase 6
- **Files likely to change:** `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`
- **Acceptance criteria:** LUT schema is documented and traceable to fault masks and destination chiplets.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Do not implement the generator in this task. LUT design must be checked against the original DeFT paper.

## T0016: Implement Offline VL LUT Generator

- **Status:** TODO
- **Objective:** Generate fault-aware Vertical Link selection tables using distance and load imbalance cost.
- **Relevant roadmap phase:** Phase 6
- **Files likely to change:** To be confirmed after repository inspection
- **Acceptance criteria:** Generated LUT excludes faulty Vertical Links and is deterministic.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Cost function should use the proposal's formulation with documented assumptions.

## T0017: Load and Use VL LUT at Boundary Routers

- **Status:** TODO
- **Objective:** Integrate LUT selection into inter-chiplet routing at boundary routers.
- **Relevant roadmap phase:** Phase 6
- **Files likely to change:** To be confirmed after Noxim source inspection
- **Acceptance criteria:** Boundary routers select functional Vertical Links using the current fault vector.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Should run after generator validation.

## T0018: Configure XY Baseline Modes

- **Status:** TODO
- **Objective:** Configure fault-free and fault-injected XY routing baselines for comparison.
- **Relevant roadmap phase:** Phase 7
- **Files likely to change:** To be confirmed after Noxim source inspection
- **Acceptance criteria:** XY and DeFT runs can be selected and compared under the same traffic settings.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Use existing Noxim XY behavior where available.

## T0019: Add Synthetic Traffic Configurations

- **Status:** TODO
- **Objective:** Support uniform, localized, and hotspot synthetic traffic models.
- **Relevant roadmap phase:** Phase 8
- **Files likely to change:** To be confirmed after Noxim source inspection
- **Acceptance criteria:** Traffic models match proposal definitions.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Localized traffic keeps 40% traffic intra-chiplet; hotspot uses 3 hotspot nodes with 10% injection rate.

## T0020: Add Metrics Collection

- **Status:** TODO
- **Objective:** Collect reachability, average latency, and network throughput.
- **Relevant roadmap phase:** Phase 8
- **Files likely to change:** To be confirmed after Noxim source inspection
- **Acceptance criteria:** Metrics are emitted in a machine-readable format.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Metrics must be comparable across XY and DeFT runs.

## T0021: Add Experiment Runner

- **Status:** TODO
- **Objective:** Automate sweeps across routing mode, traffic model, fault rate, and seed.
- **Relevant roadmap phase:** Phase 8
- **Files likely to change:** To be confirmed after repository inspection
- **Acceptance criteria:** A small dry-run experiment completes and records commands and outputs.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Do not invent commands; base this on confirmed simulator invocation.

## T0022: Prepare Final Analysis Artifacts

- **Status:** TODO
- **Objective:** Produce final result summaries and report-support material from validated experiment outputs.
- **Relevant roadmap phase:** Phase 9
- **Files likely to change:** To be confirmed after experiment output structure exists
- **Acceptance criteria:** Results are traceable to configurations, commands, and validation status.
- **Validation command:** To be confirmed after repository inspection
- **Notes:** Keep limitations and assumptions explicit.
