# Project Roadmap

This roadmap is based on `Extended_Proposal.pdf`, `Proposal.pdf`, and the original DeFT paper, with a local ignored copy at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.

`Extended_Proposal.pdf` is the primary project requirements source. The original DeFT paper is the primary algorithmic reference for DeFT routing, VN rules, and VL selection. `Proposal.pdf` is initial project context.

## Phase 0: Repository Analysis and Documentation Setup

**Goal:** Establish project memory and traceable development workflow before implementation begins.

**Main deliverables:**

- Repository inspection summary.
- Project rules in `AGENTS.md`.
- Source hierarchy including the original DeFT paper.
- Roadmap, task tracker, architecture, decisions, prompt history, progress, and validation documents.

**Success criteria:**

- Documentation structure exists and is readable by future Codex sessions.
- The source hierarchy is explicit.
- No implementation code is changed.
- Noxim source availability is explicitly recorded.

**Validation method:**

- Repository file listing.
- Git status inspection.
- Documentation file existence check.

**Risks or assumptions:**

- Assumption: The repository currently contains proposal artifacts only and does not contain Noxim source code.
- Assumption: The original DeFT paper is available as a local ignored reference copy under `docs/references`.

## Phase 1: Noxim Baseline Build and Validation

**Goal:** Add or locate the Noxim simulator source and establish a reproducible baseline build.

**Main deliverables:**

- Noxim source tree or documented external source setup.
- Confirmed build commands.
- Confirmed baseline simulation command.
- Initial validation notes.

**Success criteria:**

- Noxim builds successfully.
- A baseline Noxim simulation runs without project-specific modifications.
- Build and run commands are documented.

**Validation method:**

- Unknown until repository inspection after Noxim source is added.

**Risks or assumptions:**

- Blocked: Noxim source code is not currently present in the repository.
- Assumption: Noxim requires a C++ and SystemC-compatible environment, likely on Linux as described in the proposal.

## Phase 2: 2.5D Topology Model

**Goal:** Extend Noxim topology support for a 2.5D chiplet network on an active interposer.

**Main deliverables:**

- Four-chiplet topology model.
- 4x4 2D mesh per chiplet.
- Active interposer topology representation.
- Router coordinate and chiplet ID mapping.

**Success criteria:**

- Simulator can instantiate the planned 2.5D topology.
- Router ownership and coordinates are deterministic.
- Intra-chiplet and interposer routers can be distinguished.

**Validation method:**

- Topology construction smoke test.
- Connectivity inspection or topology dump, when supported by the codebase.

**Risks or assumptions:**

- Assumption: Interposer dimensions are not fully specified in the proposal and must be chosen conservatively during design.

## Phase 3: Vertical Link Model and Boundary Router Support

**Goal:** Model Vertical Links and the boundary routers that connect chiplets to the active interposer.

**Main deliverables:**

- Vertical Link representation.
- Boundary router identification.
- Bidirectional chiplet-to-interposer connectivity.
- Chiplet-local Vertical Link inventory.

**Success criteria:**

- Each chiplet has exactly four Vertical Links.
- Total Vertical Link count and mapping are reproducible.
- Boundary routers can be queried by routing logic.

**Validation method:**

- Connectivity validation for all chiplets.
- Boundary router and Vertical Link mapping dump or equivalent test.

**Risks or assumptions:**

- Assumption: A Vertical Link is modeled as a bidirectional physical connection unless later implementation evidence requires directional modeling.

## Phase 4: Fault Injection Manager

**Goal:** Support permanent Vertical Link faults injected before simulation begins.

**Main deliverables:**

- Centralized Fault Injection Manager.
- Fault rate configuration.
- Seed-controlled fault selection.
- Constraint that no chiplet is fully disconnected.

**Success criteria:**

- Fault masks are reproducible with a seed.
- Faulty Vertical Links are excluded from route selection.
- Fault injection supports rates up to 25%.

**Validation method:**

- Fault mask generation tests.
- Connectivity constraint tests.
- Simulation startup validation with selected fault scenarios.

**Risks or assumptions:**

- Assumption: Faults are permanent microbump or Vertical Link failures, not transient faults.
- Risk: The proposal contains an ambiguity between total physical Vertical Links and directional link counts for percentage calculations.

## Phase 5: DeFT VN Assignment Logic

**Goal:** Implement DeFT Virtual Network assignment rules using exactly two Virtual Channels.

**Main deliverables:**

- VN.0 and VN.1 metadata in packet or flit state.
- VN assignment logic.
- VN transition restrictions.
- Routing checks for forbidden movement patterns.

**Success criteria:**

- VN.1 to VN.0 transition is forbidden.
- Up-to-Horizontal movement in VN.0 is forbidden.
- Horizontal-to-Down movement in VN.1 is forbidden.
- Inter-chiplet traffic follows DeFT assignment rules.

**Validation method:**

- Unit or regression tests for VN transitions, if the codebase supports tests.
- Targeted short simulations for inter-chiplet traffic.

**Risks or assumptions:**

- Risk: Incorrect VC allocation can break the DeFT deadlock-freedom guarantee even if route selection appears correct.
- Risk: DeFT-specific behavior must be checked against the original paper before implementation.

## Phase 6: Offline VL Selection LUT Generation

**Goal:** Generate offline Vertical Link selection lookup tables for fault-tolerant and load-aware routing.

**Main deliverables:**

- LUT generator.
- Cost function using distance and load imbalance.
- Fault-vector-aware LUT format.
- Runtime LUT loader or integration point.

**Success criteria:**

- LUT entries exclude faulty Vertical Links.
- LUT generation is deterministic for the same inputs.
- Boundary routers can select exit Vertical Links from the LUT.

**Validation method:**

- Deterministic LUT output tests.
- Small known-topology checks.
- Runtime LUT load smoke test.

**Risks or assumptions:**

- Assumption: The lookup table is generated offline and used at runtime rather than recomputed dynamically during simulation.
- Assumption: The original paper's offline analysis plus runtime lookup model is the intended implementation approach.

## Phase 7: Baseline XY Routing Comparison

**Goal:** Establish fair baseline comparisons against standard XY routing.

**Main deliverables:**

- Fault-free XY baseline configuration.
- Fault-injected XY baseline configuration.
- DeFT comparison configuration.

**Success criteria:**

- Baseline runs use the same topology and traffic settings where applicable.
- Fault-free XY provides an upper-bound reference.
- Fault-injected XY demonstrates baseline behavior under Vertical Link failures.

**Validation method:**

- Short baseline simulations.
- Output log comparison.

**Risks or assumptions:**

- Assumption: Noxim already provides standard XY routing or an equivalent dimension-order routing implementation.

## Phase 8: Experiment Automation and Metrics Collection

**Goal:** Automate experiments and collect reachability, latency, and throughput metrics.

**Main deliverables:**

- Experiment runner.
- Synthetic traffic configurations.
- Fault-rate sweep.
- Metrics extraction and CSV output.

**Success criteria:**

- Uniform, localized, and hotspot traffic models are supported.
- Fault rates up to 25% are tested.
- Reachability, average latency, and network throughput are recorded.

**Validation method:**

- Single-run experiment smoke test.
- Multi-seed sweep dry run.
- Metrics parser validation on known logs.

**Risks or assumptions:**

- Assumption: Synthetic traffic is the primary evaluation target. Real-application traces may be deferred if GEM5/PARSEC setup is outside available time.

## Phase 9: Final Analysis and Report Support

**Goal:** Support final reporting with reproducible results and clear limitations.

**Main deliverables:**

- Result summaries.
- Tables or plots for reachability, latency, and throughput.
- Notes on limitations and assumptions.
- Final report support material.

**Success criteria:**

- Results can be traced to commands, configurations, and commits.
- DeFT and XY comparisons are clearly separated.
- Known limitations are documented.

**Validation method:**

- Re-run selected experiments.
- Cross-check metrics against raw simulation logs.
- Documentation review.

**Risks or assumptions:**

- Risk: Simulation runtime may limit the number of seeds or traffic rates that can be evaluated.

## Phase 10: Reachability Closure and Final Report Refresh

**Goal:** Close the gap between DeFT's expected reachability behavior and the current fixed-window simulation evidence before making stronger final-report claims.

**Main deliverables:**

- Drain-based DeFT reachability diagnosis.
- Targeted fixes only if the diagnosis isolates a concrete DeFT or simulator issue.
- A new versioned DeFT reachability validation artifact set using source-cutoff plus drain/timeout semantics.
- Follow-up timeout diagnosis when a validation matrix times out before supporting a reachability claim.
- Follow-up destination-stress flow-control diagnosis when timeout artifacts show many-to-one in-network drain blocking.
- A claim-safe comparison against a proper interposer-aware baseline, not standard cardinal-only `XY`.
- Final report updates only after new validated artifacts support the revised claims.

**Success criteria:**

- 100% reachability, if claimed, is defined as eventual delivery after source cutoff and drain completion for the validated matrix, not as a fixed-window continuous-injection result.
- Any non-100% cases are recorded with source, destination, fault mask, stop reason, and suspected route phase.
- Drain-timeout validation blockers are diagnosed before source fixes or baseline comparisons.
- Standard `XY` remains a limited control baseline; comparison claims use `INTERPOSER_AWARE_XY` or another explicitly validated 2.5D-aware algorithm.
- Historical T0026/T0027/T0028 and T0042 artifacts remain unchanged and are not reinterpreted.

**Validation method:**

- Parent and `external/noxim` status checks.
- Known Noxim build command only when source changes are explicitly scoped.
- Small deterministic drain-mode diagnostics before any broader matrix.
- Manifest/stat cross-checks for new generated artifact directories.
- Protected-artifact guards for historical generated outputs, final-report package artifacts, and Extended Proposal files.

**Risks or assumptions:**

- Assumption: The current fixed-window results are insufficient for an eventual-delivery reachability claim.
- Assumption: Drain mode is the correct first validation surface for DeFT reachability closure.
- Blocked: 100% DeFT reachability claims remain blocked until new drain-based validation artifacts support them.
- Blocked: Final report strengthening remains blocked until T0050/T0052/T0054/T0055/T0053 or equivalent validated artifacts support it.
