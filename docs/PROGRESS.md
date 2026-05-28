# Project Progress

## Current Phase

Phase 10 - Reachability Closure and Final Report Refresh (T0055 destination-stress flow-control diagnosis complete; T0051 targeted fix is next)

## Completed Tasks

- `T0001` - Repository analysis and documentation setup.
- `T0002` - Confirm repository contents, Noxim availability, and source-document availability.
- `T0003` - Establish baseline build command.
- `T0004` - Run baseline Noxim simulation.
- `T0005` - Map Noxim extension points.
- `T0006` - Design 2.5D router ID and coordinate mapping.
- `T0007` - Implement 2.5D topology construction.
- `T0008` - Add Vertical Link data model.
- `T0009` - Add Boundary Router Identification.
- `T0010` - Implement Fault Injection Manager.
- `T0011` - Add Fault Mask Validation.
- `T0012` - Design VN State Representation.
- `T0013` - Implement VN Assignment Rules.
- `T0014` - Enforce VN Transition Restrictions.
- `T0015` - Design Offline VL LUT Format.
- `T0016` - Implement Offline VL LUT Generator.
- `T0017` - Load and Use VL LUT at Boundary Routers.
- `T0018` - Configure XY Baseline Modes.
- `T0019` - Add Synthetic Traffic Configurations.
- `T0020` - Add Metrics Collection.
- `T0021` - Add Experiment Runner.
- `T0022` - Prepare Final Analysis Artifacts.
- `T0023` - Add or register the Noxim source tree.
- `T0024` - Decide Windows 11 development environment and persist paper reference.
- `T0025` - Define Final Sweep Policy.
- `T0026` - Run Final Sweep Matrix.
- `T0027` - Review Final Sweep Results for Report Support.
- `T0028` - Draft Claim-Safe Final Report Results Text.
- `T0029` - Assemble Claim-Safe Final Report Draft.
- `T0030` - Review Final Report Draft for Submission Readiness.
- `T0031` - Prepare Final Submission Artifact.
- `T0032` - Generate Final Report PDF in a TeX-Enabled Environment.
- `T0033` - Diagnose and Reduce Final-Report Blockers.
- `T0034` - Decide Next Gap-Closure Direction and Add Follow-up Tasks.
- `T0035` - Revise Final Report with T0033 Diagnosis.
- `T0036` - Post-Final Experimental Extension Design Gate.
- `T0037` - Final Submission Handoff Check.
- `T0038` - Refresh Final Submission Package.
- `T0039` - Analyze Remaining Gaps and Document Future Task Backlog.
- `T0040` - Design Interposer-Aware XY Baseline.
- `T0041` - Implement Interposer-Aware XY Baseline.
- `T0042` - Run Limited IA-XY vs DeFT Comparison.
- `T0043` - Design Source-Cutoff and Post-Injection Drain Policy.
- `T0044` - Implement and Validate Drain Policy.
- `T0045` - Evaluate Directional Fault Modeling.
- `T0046` - PARSEC/GEM5 Trace Support Feasibility.
- `T0049` - Define Reachability Closure Plan.
- `T0050` - Diagnose DeFT Drain-Based Reachability Gap.
- `T0052` - Run Drain-Based DeFT Reachability Validation Matrix.
- `T0054` - Diagnose T0052 Drain Timeout Behavior.
- `T0055` - Diagnose DeFT Destination-Stress Flow-Control Blocker.

DeFT VN assignment behavior, the first VN movement-transition restriction enforcement layer, the offline VL LUT schema/generator, the runtime schema-v1 LUT loading/use path, explicit XY fault-free/fault-injected baseline configuration modes, proposal-required synthetic traffic configuration profiles, machine-readable metrics export, tiny experiment-runner launch support, final-analysis scaffolding, the final sweep policy, the validated T0026 150-run final sweep output set, T0027 blank-aware report-support tables, T0028 claim-safe final report results draft, the T0029 tracked claim-safe Markdown report draft, the T0030 submission-readiness polish, the T0031 IEEE-style LaTeX final report source artifact, the T0032 generated final report PDF, the T0033 blocker diagnosis, the T0034 report-revision direction decision, the T0035 final-report diagnosis revision, the T0036 post-final experimental design gate, the T0037 final submission handoff check, the T0038 final submission archive refresh, the T0039 future backlog documentation, the T0040 IA-XY baseline design, the T0041 IA-XY baseline implementation, the T0042 limited IA-XY-vs-DEFT artifact set, the T0043 source-cutoff/drain policy design, the T0044 opt-in drain-mode implementation with targeted smoke validation, the T0045 directional fault-model feasibility decision, the T0046 PARSEC/GEM5 trace-support feasibility decision, the T0049 reachability-closure plan, the T0050 small drain-mode DeFT reachability diagnosis, the T0052 all-pairs drain-timeout artifact set, the T0054 destination-stress timeout diagnosis, and the T0055 destination-stress flow-control diagnosis now exist for `DEFT_2_5D`. Historical performance claims remain limited to descriptive, blank-aware report support only. New 100% reachability or baseline-comparison claims remain blocked until a targeted fix and follow-up drain-mode validation support them.

## In-Progress Tasks

- None.

## Blocked Tasks

- `T0047` - PARSEC/GEM5 Trace Ingestion is blocked until a versioned trace schema, tiny fixture, dependency/provenance plan, workload mapping policy, and small smoke-validation path are supplied and accepted.
- `T0053` - Drain-based IA-XY vs DeFT comparison is blocked until the T0055 dense destination-convergence blocker is fixed or reclassified and DeFT drain-based reachability behavior is validated.

## Last Validation Result

- T0055 Diagnose DeFT Destination-Stress Flow-Control Blocker completed as a diagnosis/validation task on 2026-05-28.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Source-document roles were preserved: `Extended_Proposal.pdf` is the primary project requirements source, the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` is the primary algorithmic reference, `Proposal.pdf` is initial context only, and the peer evaluation document was ignored completely.
- Parent repository status before diagnosis was clean on `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points`. `external/noxim` status before diagnosis was clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- Before simulator execution, the T0054 artifact set was inspected and an exact T0055 matrix, timeout policy, artifact directory, and summary fields were defined. Assumption: T0055 may generate ignored artifacts only under `external/noxim/other/generated/t0055_deft_destination_stress_diagnosis_v1/`. Assumption: the fixed packet size is eight flits. Assumption: seed `0` is sufficient because the traffic fixture is hardcoded. Blocked: T0053 and final-report claim updates remain blocked.
- Read-only source inspection covered router reservations, output-VC forwarding, downstream VC full-status checks, VN transition filtering, drain accounting, hardcoded fixture admission, and `DEFT` route phases. No source code was edited.
- The documented T0055 matrix used `DEFT` only, seed `0`, opt-in drain mode, generated schema-v1 LUT `luts/deft_vl_lut_t0055.yaml`, two fault masks (`0x0000` and `0x1111`), 16 strict destination-convergence fixtures for destination `0` and destination `63`, and 32 simulator cases. Fixtures used n4/n8/n16/n32/n63 gap-1 threshold probes, n63 gap-8/gap-64 spacing probes, and n63 gap-1 timeout probes at 100,000 drain cycles.
- Generated artifacts were written only under ignored `external/noxim/other/generated/t0055_deft_destination_stress_diagnosis_v1/`. The directory contains the runner, `README.txt`, `matrix.tsv`, copied config fixture, fixture coverage CSV, generated hardcoded traffic fixtures, generated LUT, `commands.sh`, 32 JSON stats files, stdout/stderr logs including LUT-generation logs, `return_codes.tsv`, `summary.csv`, `received_pairs.csv`, `failing_cases.csv`, and `manifest.json`.
- Artifact sanity checks found 32 summary rows and manifest fields `case_count: 32`, `passing_case_count: 6`, `failure_row_count: 535`, `lut_generation_return_code: 0`, and `claims_allowed: false`.
- All 32 simulator invocations returned code `0`. Six cases stopped with `drain_completed`; 26 stopped with `drain_timeout`.
- All n4 gap-1 cases drained for both destinations and both masks. No-fault n63 gap-64 cases drained for both destinations, separating pair/LUT availability from dense offered timing.
- Dense no-fault n8 gap-1 cases already timed out with source queues and pending handshakes at zero, while router-buffer flits and router reservations remained nonzero. Destination 0 retained 21 router-buffer flits and 4 reservations; destination 63 retained 14 router-buffer flits and 3 reservations.
- Dense no-fault n63 gap-1 cases had identical stuck counts at 20,000 and 100,000 drain cycles. Destination 0 retained 284 router-buffer flits and 58 reservations; destination 63 retained 240 router-buffer flits and 51 reservations.
- The accepted `0x1111` mask showed the same class of in-network blocker. Some larger faulted dense rows also retained source queues and pending handshakes as downstream symptoms, while faulted n63 gap-64 rows nearly completed but still timed out with one or two missing full packets.
- Diagnosis: T0055 rules out a pair-isolated route failure, LUT/fault-mask mismatch, simulator received-packet accounting issue, and short 20,000-cycle timeout budget as the primary cause. The blocker is best classified as a dense destination-convergence DeFT/Noxim flow-control/reservation deadlock-style issue under bounded-buffer many-to-one traffic.
- T0054 `received_pairs.csv` remains diagnosis context only because its parser can misread later `routed_flits` matrix rows as detailed received-pair rows. The T0055 parser restricts received-pair extraction to the detailed statistics block.
- No source code, standard `XY`, `DEFT` routing behavior, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, traffic-generation behavior, metrics/runner/analysis behavior, final-report claims, `final_report/main.pdf`, `final_report.zip`, Extended Proposal files, T0026/T0027/T0028 artifacts, T0042 artifacts, T0044 artifacts, T0050 artifacts, T0052 artifacts, T0054 artifacts, or `./regression.sh --update` was changed.
- `git diff --check` completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final `external/noxim` status remained clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- The generated-artifact guard returned no changed files for `external/noxim/other/generated/t0026_final_sweep_v1`, `t0026_final_analysis_v1`, `t0027_report_support_v1`, `t0028_final_report_results_v1`, `t0042_iaxy_deft_limited_v1`, `t0044_drain_smokes`, `t0050_deft_reachability_diagnosis_v1`, `t0052_deft_drain_reachability_v1`, or `t0054_deft_drain_timeout_diagnosis_v1`.
- The final-report and proposal artifact guard returned no changed files for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, `Extended_Proposal.zip`, or `Extended_Proposal/`.
- Final parent status showed only modified tracking docs: `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/ROADMAP.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- T0051 is reopened as the next targeted fix task for the diagnosed destination-convergence flow-control/reservation blocker. T0053 remains blocked because DeFT drain-based reachability behavior is not validated under dense destination-convergence fixtures. Final-report claims remain unchanged.

- T0054 Diagnose T0052 Drain Timeout Behavior completed as a diagnosis/validation task on 2026-05-28.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Source-document roles were preserved: `Extended_Proposal.pdf` is the primary project requirements source, the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` is the primary algorithmic reference, `Proposal.pdf` is initial context only, and the peer evaluation document was ignored completely.
- Parent repository status before diagnosis was clean on `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points`. `external/noxim` status before diagnosis was clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- Before simulator execution, the T0052 artifact set was inspected and an exact T0054 matrix, timeout policy, artifact directory, and summary fields were defined. Assumption: T0054 may generate ignored artifacts only under `external/noxim/other/generated/t0054_deft_drain_timeout_diagnosis_v1/`. Assumption: the accepted physical fault-mask ladder remains `0x0000`, `0x0001`, `0x0011`, `0x0111`, and `0x1111`. Blocked: T0051, T0053, and final-report claim updates remain blocked.
- The documented T0054 matrix used `DEFT` only, seed `0`, opt-in drain mode, generated schema-v1 LUT `luts/deft_vl_lut_t0054.yaml`, 10 hardcoded fixtures, 50 simulator cases, and source cutoffs/timeouts chosen by fixture: pair-isolated `1/2000`, source-isolated `63/20000`, destination-stress `64/20000`, dense first-256 prefix `256/20000`, and gap-8 first-256 prefix `2048/20000`.
- Generated artifacts were written only under ignored `external/noxim/other/generated/t0054_deft_drain_timeout_diagnosis_v1/`. The directory contains the runner, `README.txt`, `matrix.tsv`, copied config fixture, fixture coverage CSV, generated hardcoded traffic fixtures, generated LUT, `commands.sh`, 50 JSON stats files, stdout/stderr logs including LUT-generation logs, `return_codes.tsv`, `summary.csv`, `received_pairs.csv`, `failing_cases.csv`, and `manifest.json`.
- Artifact sanity checks found 50 summary rows, 50 stats files, 51 stdout logs, 51 stderr logs, four CSV files, and manifest fields `case_count: 50`, `passing_case_count: 30`, `failure_row_count: 1987`, and `claims_allowed: false`.
- All 50 simulator invocations returned code `0`.
- All 20 pair-isolated cases and all 10 source-isolated cases stopped with `drain_completed`; measured injected packets equaled measured received packets; source queues, router-buffer flits, router reservations, and pending handshakes were all zero at stop.
- All 10 destination-stress cases and all 10 bounded-prefix cases stopped with `drain_timeout`. Destination-stress cases admitted all 64 packet heads but retained nonzero router-buffer flits and router reservations after 20,000 drain cycles. The bounded first-256 dense and gap-8 fixtures retained source queues, router-buffer flits, router reservations, and pending handshakes at timeout.
- Diagnosis: T0052's all-pairs hardcoded fixture groups traffic by destination rounds. The timeout is therefore best classified as destination-convergence fixture/load-triggered in-network drain blocking, with source-queue backpressure as a downstream symptom in larger prefixes. T0054 did not isolate a pair-specific route failure, LUT/fault-mask mismatch, drain-accounting mismatch, or concrete fixable DeFT source root cause.
- No source code, standard `XY`, `DEFT` routing behavior, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, traffic-generation behavior, metrics/runner/analysis behavior, final-report claims, `final_report/main.pdf`, `final_report.zip`, Extended Proposal files, T0026/T0027/T0028 artifacts, T0042 artifacts, T0044 artifacts, T0050 artifacts, T0052 artifacts, or `./regression.sh --update` was changed.
- `git diff --check` completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final `external/noxim` status remained clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- The generated-artifact guard returned no changed files for `external/noxim/other/generated/t0026_final_sweep_v1`, `t0026_final_analysis_v1`, `t0027_report_support_v1`, `t0028_final_report_results_v1`, `t0042_iaxy_deft_limited_v1`, `t0044_drain_smokes`, `t0050_deft_reachability_diagnosis_v1`, or `t0052_deft_drain_reachability_v1`.
- The final-report and proposal artifact guard returned no changed files for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, `Extended_Proposal.zip`, or `Extended_Proposal/`.
- Final parent status showed only modified tracking docs: `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/ROADMAP.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- At T0054 completion, T0051 remained blocked because no concrete fixable source root cause was identified. T0053 remained blocked because DeFT drain-based reachability behavior was not validated under destination-stress or bounded-prefix fixtures. T0055 was selected as the next diagnosis task.

- T0052 Run Drain-Based DeFT Reachability Validation Matrix completed as an artifact-producing validation task on 2026-05-28.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Source-document roles were preserved: `Extended_Proposal.pdf` is the primary project requirements source, the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` is the primary algorithmic reference, `Proposal.pdf` is initial context only, and the peer evaluation document was ignored completely.
- Parent repository status before validation was clean on `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with the branch ahead by two commits. `external/noxim` status before validation was clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- Before running the matrix, a short plan and exact validation policy were produced. Assumption: T0052 may generate ignored artifacts only under `external/noxim/other/generated/t0052_deft_drain_reachability_v1/`. Assumption: the accepted physical fault-mask ladder is `0x0000`, `0x0001`, `0x0011`, `0x0111`, and `0x1111`. Assumption: seed `0` is sufficient because the traffic fixture is hardcoded, packet size is fixed at eight flits, and DeFT VN assignment overrides random source VC selection. Blocked: T0051 remains blocked unless a concrete source root cause is isolated; final-report claims remain blocked until a later report task uses validated artifacts.
- The documented T0052 matrix was `DEFT` only, seed `0`, opt-in drain mode, `-warmup 0`, source cutoff `4032`, drain timeout `20000`, and one generated hardcoded all-valid-pairs fixture covering all 4032 ordered source/destination pairs over chiplet routers `0..63` for each fault mask. The schedule rotated sources so each source appeared once every 64 cycles.
- Generated artifacts were written only under ignored `external/noxim/other/generated/t0052_deft_drain_reachability_v1/`. The directory contains the runner script, `README.txt`, `matrix.tsv`, copied config fixture, pair coverage CSV, deterministic hardcoded traffic fixture, generated LUT `luts/deft_vl_lut_t0052.yaml`, `commands.sh`, five JSON stats files, stdout/stderr logs including LUT-generation logs, `return_codes.tsv`, `summary.csv`, `failing_cases.csv`, and `manifest.json`.
- Artifact sanity checks found five summary rows, five JSON stats files, six stdout logs, six stderr logs, 4032 pair-coverage rows, and 8064 traffic lines. The manifest records `claims_allowed: false`.
- All five simulator invocations returned code `0`, but all five stopped with `drain_timeout`, not `drain_completed`. No T0052 row validated 100% reachability.
- Measured injected packets were `258`, `247`, `250`, `243`, and `312` for masks `0x0000`, `0x0001`, `0x0011`, `0x0111`, and `0x1111`. Measured received packets were `89`, `85`, `86`, `83`, and `153`. Thousands of packets remained queued at sources at timeout, with nonzero router-buffer flits, reservations, and pending handshakes.
- `failing_cases.csv` records timeout/non-100% rows with routing mode, fault mask, source, destination, stop reason, injected/received counts, undelivered counts, remaining in-flight counts, and suspected route phase. Because the aggregate fixture timed out before most planned packets were admitted, these rows are diagnosis input rather than proof that every listed pair has an isolated route bug.
- T0052 did not isolate a concrete DeFT source root cause. The result is most immediately a validation blocker around aggregate all-pairs offered load/source-queue backpressure and possible load-induced deadlock, requiring a smaller follow-up diagnosis before opening T0051 or running T0053.
- No source code, standard `XY`, `DEFT` routing behavior, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, traffic-generation behavior, metrics/runner/analysis behavior, final-report claims, `final_report/main.pdf`, `final_report.zip`, Extended Proposal files, T0026/T0027/T0028 artifacts, T0042 artifacts, T0044 artifacts, T0050 artifacts, or `./regression.sh --update` was changed.
- `external/noxim` status after artifact generation remained clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- The generated-artifact guard returned no changed files for `external/noxim/other/generated/t0026_final_sweep_v1`, `t0026_final_analysis_v1`, `t0027_report_support_v1`, `t0028_final_report_results_v1`, `t0042_iaxy_deft_limited_v1`, `t0044_drain_smokes`, or `t0050_deft_reachability_diagnosis_v1`.
- The final-report and proposal artifact guard returned no changed files for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, `Extended_Proposal.zip`, or `Extended_Proposal/`.
- `git diff --check` completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/ROADMAP.md`, `docs/TASKS.md`, and `docs/VALIDATION.md` were updated for T0052 traceability and the next diagnosis task.

- T0050 Diagnose DeFT Drain-Based Reachability Gap completed as a diagnosis/validation task on 2026-05-28.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Source-document roles were preserved: `Extended_Proposal.pdf` is the primary project requirements source, the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` is the primary algorithmic reference, `Proposal.pdf` is initial context only, and the peer evaluation document was ignored completely.
- Parent repository status before diagnostics was clean on `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with the branch ahead by one commit. Direct `external/noxim` status initially hit Git's safe-directory ownership guard; the per-command safe-directory override reported a clean `feat/baseline-noxim...origin/feat/baseline-noxim` tree.
- Before running diagnostics, a short diagnostic plan and exact small matrix were produced. Assumption: T0050 may generate ignored diagnostic artifacts but must not alter simulator source or report claims. Blocked: source fixes remain blocked unless a concrete bug is isolated.
- Read-only source inspection covered `Routing_DEFT`, `DeftTopology`, `DeftVirtualNetwork`, output-VC-aware router reservation/forwarding, runtime schema-v1 LUT lookup and active fault-mask derivation, fault-mask application, T0044 drain empty detection/accounting, and hardcoded traffic parsing.
- A small deterministic drain-mode matrix was run under ignored `external/noxim/other/generated/t0050_deft_reachability_diagnosis_v1/`. The artifact directory contains `matrix.tsv`, `commands.sh`, generated traffic fixtures, generated LUT `luts/deft_vl_lut_t0050.yaml`, 12 JSON stats files, stdout/stderr logs, `summary.csv`, `failing_cases.csv`, and `manifest.json`.
- The matrix covered same-chiplet control, single inter-chiplet paths, source-boundary and destination-boundary cases, reverse and diagonal chiplet pairs, single physical VL faults, the physical `0x1111` one-fault-per-chiplet mask, a destination-boundary attached-VL fault, and two tiny multi-packet cases.
- All 12 diagnostic cases completed with return code `0`, stop reason `drain_completed`, measured injected packets equal to measured received packets, zero undelivered packets/flits, zero router-buffer flits, zero reservations, and zero pending handshakes at stop. `failing_cases.csv` contains only the header row.
- Diagnosis: the documented tiny drain-mode cases did not isolate a deterministic DeFT routing, topology, VN transition, LUT lookup, fault-mask, hardcoded-traffic, or drain-accounting bug. For the sampled cases, the reachability gap is most consistent with historical fixed-window continuous-injection measurement/load semantics rather than fixture setup or a concrete source bug. This does not prove universal DeFT reachability.
- At T0050 completion, T0051 remained blocked because no fixable implementation root cause was identified, and T0052 was selected as the next validation task before any 100% claim or report update.
- No source code, standard `XY`, `DEFT` routing behavior, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, traffic-generation behavior, metrics/runner/analysis behavior, final-report claims, `final_report/main.pdf`, `final_report.zip`, Extended Proposal files, T0026/T0027/T0028 artifacts, T0042 artifacts, or `./regression.sh --update` was changed.
- `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md` were updated for T0050 traceability.
- `git diff --check` completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final `external/noxim` status remained clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- The generated-artifact guard returned no changed files for `external/noxim/other/generated/t0026_final_sweep_v1`, `t0026_final_analysis_v1`, `t0027_report_support_v1`, `t0028_final_report_results_v1`, or `t0042_iaxy_deft_limited_v1`.
- The final-report and proposal artifact guard returned no changed files for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, `Extended_Proposal.zip`, or `Extended_Proposal/`.
- Final parent status showed only modified tracking docs: `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.

- T0049 Define Reachability Closure Plan completed as a documentation-only planning task on 2026-05-27.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, and `docs/ARCHITECTURE.md`; `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md` were also inspected because this task updates tracking documents.
- Parent repository status before edits showed only untracked presentation-support files: `DeFT A Deadlock-Free and Fault-Tolerant Routing Algorithm for 2.5D Chiplet Networks.pptx`, `Speech Proposal.docx`, and `presentation_final/`. `external/noxim` status before edits was clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- Before editing, a short documentation plan was produced. Assumption: This task is planning-only and should not edit source code, run simulations, rebuild Noxim, regenerate final artifacts, or strengthen report claims. Blocked: A 100% DeFT reachability claim remains blocked until a later drain-mode validation task produces supporting artifacts.
- The project direction was reopened for completion work after presentation preparation. ADR-0050 records the durable policy: treat 100% reachability as an eventual-delivery/drain-mode validation target, diagnose DeFT reachability before fixing code, fix only documented root causes, compare against a proper interposer-aware baseline only after DeFT reachability behavior is validated, and update the final report only after new validated artifacts exist.
- Added T0049 as the completed planning task and added ordered follow-up tasks: T0050 diagnose DeFT drain-based reachability gap, T0051 fix DeFT reachability issues only after a concrete root cause exists, T0052 run a drain-based DeFT reachability validation matrix, and T0053 run a drain-based IA-XY-vs-DEFT comparison.
- `docs/ROADMAP.md`, `docs/TASKS.md`, `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, and `docs/VALIDATION.md` were updated. No simulator source, helper source, generated artifacts, final-report PDF, package artifact, Extended Proposal file, Noxim rebuild, simulation run, regression command, or performance claim was changed.
- `git diff --check` completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final `external/noxim` status remained clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- The generated-artifact guard returned no changed files for `external/noxim/other/generated/t0026_final_sweep_v1`, `t0026_final_analysis_v1`, `t0027_report_support_v1`, `t0028_final_report_results_v1`, or `t0042_iaxy_deft_limited_v1`.
- The final-report and proposal artifact guard returned no changed files for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, `Extended_Proposal.zip`, or `Extended_Proposal/`.

- T0046 PARSEC/GEM5 Trace Support Feasibility completed as a documentation-only feasibility task on 2026-05-12.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Source-document roles were preserved: `Extended_Proposal.pdf` is the primary project requirements source, the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` is the primary algorithmic reference, `Proposal.pdf` is initial context only, and the peer evaluation document was ignored completely.
- Parent repository status before edits was clean on `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points`; `external/noxim` status before edits was clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- Before editing, a short feasibility plan was produced. Assumption: T0046 is documentation-only and should make no simulator, dependency, trace, traffic, metrics, runner, analysis, report-artifact, package-artifact, or Extended Proposal changes. Blocked: PARSEC/GEM5 workload claims remain blocked until a reproducible external trace-generation or trace-import pipeline and Noxim ingestion/validation path exist.
- Source-document inspection confirmed that the extended proposal includes PARSEC traces generated via GEM5 and that the original DeFT paper reports PARSEC/GEM5 evaluation using a 64-core x86 full-system setup and eight PARSEC workloads.
- Dependency checks found no GEM5/PARSEC source tree, full-system image/checkpoint, trace-generation script, trace input, or Noxim-ready application trace schema in the repository. Windows PATH did not expose `gem5`; WSL Ubuntu exposed `/usr/bin/python3` but not `gem5.opt`, `gem5`, or `scons`; checked `/parsec`, `/opt/parsec`, and `/opt/gem5` paths were absent.
- Read-only Noxim inspection confirmed that VCD tracing is simulator debug output, not workload input; `TRAFFIC_TABLE_BASED` supports aggregate `src dst [pir [por [t_on t_off t_period]]]` rows; and `TRAFFIC_HARDCODED` supports cycle-delimited `src dst` packet entries without packet size, application ID, core/thread ID, operation type, memory address, flow ID, or response metadata.
- T0046 recommends deferring trace ingestion. ADR-0049 records the durable policy: do not claim PARSEC/GEM5 workload support until a versioned trace schema, tiny fixture, core/router and agent/router mapping policy, dependency provenance, invalid-trace rejection, and small Noxim smoke validation exist.
- `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, `docs/ARCHITECTURE.md`, and `docs/DECISIONS.md` were updated for T0046 traceability and the PARSEC/GEM5 trace-ingestion deferral decision.
- No source code, simulator behavior, standard `XY`, `DEFT`, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, traffic behavior, metrics, runner/analysis behavior, generated artifacts, simulations, Noxim rebuild, final-report PDF, `final_report.zip`, Extended Proposal files, dependency installation, trace import/generation, or `./regression.sh --update` was changed.
- `git diff --check` completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final `external/noxim` status remained clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- The generated-artifact guard returned no changed files for T0026/T0027/T0028 or T0042 generated directories.
- The final-report and Extended Proposal artifact guard returned no changed files for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, `Extended_Proposal.zip`, or `Extended_Proposal/`.
- Final parent status shows only modified tracking docs: `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.

- T0045 Evaluate Directional Fault Modeling completed as a documentation-only feasibility task on 2026-05-12.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Source-document roles were preserved: `Extended_Proposal.pdf` is the primary project requirements source, the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` is the primary algorithmic reference, `Proposal.pdf` is initial context only, and the peer evaluation document was ignored completely.
- Parent repository status before edits was clean on `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points`; `external/noxim` status before edits was clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- Before editing, a short feasibility plan was produced. Assumption: T0045 is documentation-only and should make no simulator, LUT, topology, routing, or artifact changes. Blocked: no blocker at task start; implementation of single-direction fault cases remains blocked unless this feasibility task accepts a follow-up implementation policy.
- Source-document inspection found the core ambiguity: the extended proposal describes four bidirectional VLs per chiplet but also lists 3.125% with one faulty VL up to 25% with eight faulty VLs; the original DeFT paper describes four bidirectional VLs per chiplet and reports four-chiplet reachability over `total VLs=32`.
- Read-only source inspection confirmed that the current implementation uses 16 physical bidirectional VL IDs, one `is_functional` flag per physical VL, physical fault IDs in `deft_faulty_vertical_links` / `-deft_faulty_vls`, schema-v1 `fault_mask_id` over physical VL bits, physical-mask LUT generation, runtime active-mask derivation from nonfunctional physical VLs, and physical functional-state checks in both `DEFT` and IA-XY traversal paths.
- T0045 recommends deferring directional endpoint support. ADR-0048 records the durable policy: preserve the current 16-physical-VL model as the default and as the only interpretation of existing artifacts; implement directional endpoint support only through a future versioned fault-model task with per-direction state, new config/CLI fields, schema-v2 LUT generation/runtime lookup, directional route checks, new validation, new artifact directories, and explicit result labels.
- No source code, simulator behavior, standard `XY`, `DEFT`, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, generated artifacts, simulations, Noxim rebuild, final-report PDF, `final_report.zip`, Extended Proposal files, or `./regression.sh --update` was changed.
- `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, `docs/ARCHITECTURE.md`, and `docs/DECISIONS.md` were updated for T0045 traceability and the directional fault-model deferral decision.
- `git diff --check` completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final `external/noxim` status remained clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- The generated-artifact guard returned no changed files for T0026/T0027/T0028 or T0042 generated directories.
- The final-report and Extended Proposal artifact guard returned no changed files for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, or `Extended_Proposal.zip`.
- Final parent status shows only modified tracking docs: `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.

- T0044 Implement and Validate Drain Policy completed on 2026-05-12.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- The T0043 source-cutoff and post-injection drain policy in `docs/ARCHITECTURE.md` and ADR-0046 in `docs/DECISIONS.md` were read before implementation.
- Source-document roles were preserved: `Extended_Proposal.pdf` is the primary project requirements source, the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` is the primary algorithmic reference, `Proposal.pdf` is initial context only, and the peer evaluation document was ignored completely.
- Parent repository status before edits was clean on `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points`; `external/noxim` status before edits was clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- Before editing, a short implementation plan was produced. Assumption: implement the accepted T0043 policy directly in simulator phase control with source-gated warm-up and without measured-flit tagging unless the existing code required it. Blocked: none at task start; eventual-delivery report claims remain blocked until a later experiment task creates new versioned drain-mode artifacts.
- Added opt-in drain configuration fields: YAML keys `drain_mode_enabled`, `drain_source_cutoff_cycles`, and `drain_timeout_cycles`, plus CLI options `-drain_mode`, `-drain`, `-drain_source_cutoff`, and `-drain_timeout`.
- Drain mode now gates source admission during warm-up, admits measured packet heads only during `[measurement_start_cycle, source_cutoff_cycle)`, drains after cutoff, and stops with `drain_completed` when measured traffic is empty or `drain_timeout` when the explicit timeout expires.
- Empty detection now covers source PE packet queues, router buffers, router reservation tables, pending hub/VL handshakes, and measured injected/received packet and flit balances.
- Drain-mode stats export now includes explicit denominator and timing fields, including stop reason, measurement start, source cutoff, drain start, sources-quiesced cycle, completion or stop cycle, measured injected/received packets and flits, undelivered counts, drain elapsed cycles, total measured elapsed cycles, drain throughput, and remaining in-flight source/router/reservation/handshake counts.
- Fixed-window `-sim` behavior remains the default when drain mode is disabled. Current Noxim `-volume` behavior remains available when drain mode is disabled. ADR-0047 records the compatibility decision that drain mode and `-volume` are mutually exclusive because both are stop policies.
- The known Noxim build command was run from `external/noxim`: `./build.sh`. The first WSL invocation timed out while the build continued; a follow-up check found no remaining build process, and the incremental rerun completed with exit code `0`.
- Targeted smoke artifacts were written under ignored `external/noxim/other/generated/t0044_drain_smokes/`; no final sweep artifacts were regenerated.
- Targeted smokes passed: no-traffic immediate drain completed with zero measured packets; same-chiplet hardcoded delivery completed with one injected and one received packet; inter-chiplet `DEFT` delivery with no-fault LUT completed with one injected and one received packet; cutoff suppression admitted only the pre-cutoff packet; timeout stopped with `drain_timeout` and one undelivered packet; warm-up gating used measurement start cycle `1005` and source cutoff cycle `1006`; disabled fixed-window and disabled `-volume` compatibility smokes exported no drain-mode fields.
- The first inline Bash/Python JSON verifier had a here-document delimiter issue after simulator commands completed; a PowerShell JSON verifier was rerun and passed with exit code `0`.
- No standard `XY`, `DEFT`, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, existing fixed-window metric semantics, existing runner/analysis defaults outside opt-in drain mode, final-report artifacts, package artifacts, Extended Proposal files, final-sweep artifacts, or `./regression.sh --update` were changed.
- `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, `docs/ARCHITECTURE.md`, and `docs/DECISIONS.md` were updated for T0044 traceability and the drain/volume compatibility decision.
- `git diff --check` completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- The generated-artifact guard returned no changed files for T0026/T0027/T0028 or T0042 generated directories.
- The final-report and Extended Proposal artifact guard returned no changed files for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, or `Extended_Proposal.zip`.
- Final `external/noxim` status shows only the T0044 source/config-example changes on `feat/baseline-noxim...origin/feat/baseline-noxim`.

- T0043 Design Source-Cutoff and Post-Injection Drain Policy completed as a design-only documentation task on 2026-05-12.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Source-document roles were preserved: `Extended_Proposal.pdf` is the primary project requirements source, the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` is the primary algorithmic reference, `Proposal.pdf` is initial context only, and the peer evaluation document was ignored completely.
- Parent repository status before edits was clean on `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points`.
- A plain `external/noxim` status command hit Git's safe-directory guard; the documented safe-directory status command then reported `external/noxim` clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- Before editing, a short design plan was produced. Assumption: T0043 is design-only and must preserve current fixed-window artifacts and final submission artifacts as historical evidence. Blocked: eventual-delivery claims remain blocked until a later implementation task adds and validates the accepted cutoff/drain/timeout behavior.
- Read-only source inspection confirmed current `-sim` behavior is a fixed continuous-injection run, current Noxim `-volume` stops on delivered flits rather than source cutoff plus empty-network drain, `ProcessingElement.cpp` owns source generation and injection counters, and `GlobalStats.cpp` exports the current fixed-window denominator fields.
- Added the T0043 design to `docs/ARCHITECTURE.md`: source cutoff, drain start, source quiescence, in-flight empty condition, explicit timeout, metric denominators, warm-up interaction, difference from fixed-window `-sim`, difference from current `-volume`, future implementation surfaces, and future smoke-test expectations.
- Added ADR-0046 to record the durable decision that source-cutoff plus drain/timeout is an opt-in future eventual-delivery mode, not a reinterpretation of existing fixed-window artifacts.
- The policy keeps warm-up source-gated in first drain-mode implementation unless a later task explicitly designs preloaded warm-up with its own flush rule.
- T0026/T0027/T0028 remain the historical final fixed-window artifact chain. T0042 remains a limited exploratory fixed-window IA-XY-vs-DEFT artifact set. None were regenerated, overwritten, or reinterpreted as eventual-delivery evidence.
- No simulator source, helper source, routing logic, standard `XY`, `DEFT`, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, Noxim rebuild, simulation run, final-sweep regeneration, final-report PDF regeneration, package artifact, Extended Proposal file, or `./regression.sh --update` was changed.
- `git diff --check` completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final `external/noxim` status remained clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- The generated-artifact guard returned no changed files for T0026/T0027/T0028 or T0042 generated directories.
- The final-report and Extended Proposal artifact guard returned no changed files for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, or `Extended_Proposal.zip`.
- Final parent status shows only modified tracking docs: `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- At T0043 completion, the next implementation task was T0044 if the user wanted to add the accepted opt-in drain mode and run targeted smokes.

- T0042 Run Limited IA-XY vs DeFT Comparison completed on 2026-05-11.
- Required startup reading was completed before experiment work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- The T0040 IA-XY design and T0041 IA-XY implementation notes in `docs/ARCHITECTURE.md` were read before execution.
- Source-document roles were preserved: `Extended_Proposal.pdf` is the primary project requirements source, the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` is the primary algorithmic reference, `Proposal.pdf` is initial context only, and the peer evaluation document was ignored completely.
- Parent repository status before execution was clean on `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points`; `external/noxim` status before execution was clean on `feat/baseline-noxim...origin/feat/baseline-noxim`.
- Before simulator execution, a short experiment plan and exact limited matrix were produced. Assumption: reusing `-sim 10000` and `-warmup 1000` keeps the fixed-window policy comparable in shape to earlier artifacts while keeping T0042 much smaller than the final sweep. Blocked: none at execution start.
- Exact matrix: routing modes `INTERPOSER_AWARE_XY` and `DEFT`; traffic profiles `uniform`, `localized_40`, and `hotspot_3x10`; fault masks `0x0000` and `0x1111`; seeds `0` and `1`; warm-up `1000`; simulation window `10000`; stats format JSON; 24 planned runs.
- All new artifacts were written under `external/noxim/other/generated/t0042_iaxy_deft_limited_v1/`. Existing T0026/T0027/T0028 generated directories were not targeted.
- A default WSL attempt failed before simulator execution because no default WSL distribution was configured: `wsl -u root -- bash -lc "cd /mnt/c/Projects/CMP-720-Project-Proposal/external/noxim && python3 other/generated/t0042_iaxy_deft_limited_v1/run_t0042_limited.py"` returned exit code `1`.
- The explicit Ubuntu WSL run completed with exit code `0`: `wsl -d Ubuntu -u root -- bash -lc "cd /mnt/c/Projects/CMP-720-Project-Proposal/external/noxim && python3 other/generated/t0042_iaxy_deft_limited_v1/run_t0042_limited.py"`.
- Run manifest path: `external/noxim/other/generated/t0042_iaxy_deft_limited_v1/manifest.json`. Command listing path: `external/noxim/other/generated/t0042_iaxy_deft_limited_v1/commands.sh`. Per-run summary path: `external/noxim/other/generated/t0042_iaxy_deft_limited_v1/summary.csv`.
- Every simulator command, return code, per-run log path, and per-run JSON stats path is recorded in `manifest.json`; logs are under `external/noxim/other/generated/t0042_iaxy_deft_limited_v1/logs/`, stats are under `external/noxim/other/generated/t0042_iaxy_deft_limited_v1/stats/`, and generated DEFT LUTs are under `external/noxim/other/generated/t0042_iaxy_deft_limited_v1/luts/`.
- Mechanical analysis with `external/noxim/other/deft_analysis_artifacts.py` completed with exit code `0` and wrote `analysis/analysis_manifest.json`, `analysis/run_summary.csv`, `analysis/comparison_summary.csv`, and `analysis/report_scaffold.md`.
- Blank-aware cross-check completed with exit code `0` and wrote `blank_aware_condition_summary.csv`, `blank_aware_pair_summary.csv`, `blank_aware_validation.json`, and `blank_aware_report.md`.
- `blank_aware_validation.json` reports `cross_check_passed: true`, 24 completed return-code-zero runs, 24 JSON stats files, 24 stdout logs, 24 stderr logs, no summary/stat mismatches, no config mismatches, no missing artifacts, and no unexpected matrix values.
- IA-XY hotspot cells injected zero packets for both fault masks and both seeds, so those IA-XY reachability and latency cells remain blank-aware. IA-XY uniform/no-fault injected packets but received zero packets, so latency remains blank for that cell.
- The remaining packet-carrying IA-XY/DEFT cells are descriptive side-by-side evidence only. T0042 does not support ranking, improvement percentages, statistical conclusions, final-sweep replacement, or final-report claim changes.
- No simulator source code changed. Standard `XY`, `DEFT`, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis source semantics, T0026/T0027/T0028 artifacts, `final_report/main.pdf`, `final_report.zip`, and Extended Proposal files were preserved.
- `git diff --check` completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- Final `external/noxim` status remained clean on `feat/baseline-noxim...origin/feat/baseline-noxim`; generated T0042 artifacts are ignored under `external/noxim/other/generated/`.
- The generated-artifact guard returned no changed files for T0026/T0027/T0028 directories.
- The final-report and Extended Proposal artifact guard returned no changed files for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, or `Extended_Proposal.zip`.
- Final parent status shows only modified tracking docs: `docs/ARCHITECTURE.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/ARCHITECTURE.md` were updated for T0042 traceability. `docs/DECISIONS.md` was not updated because no new durable design or experiment decision was made.
- This experiment does not change the current final submission status. Existing final handoff artifacts remain `final_report/main.pdf`, the current `final_report/` source tree, and `final_report.zip`.

- T0041 Implement Interposer-Aware XY Baseline completed on 2026-05-11.
- Required startup reading was completed before implementation work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Source-document roles were preserved: `Extended_Proposal.pdf` is the primary project requirements source, the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` is the primary algorithmic reference, `Proposal.pdf` is initial context only, and the peer evaluation document was ignored completely.
- Parent repository status before source edits was clean on `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points`; `external/noxim` status was clean on `feat/baseline-noxim...origin/feat/baseline-noxim` when checked with the documented safe-directory form.
- Before coding, a short implementation plan was produced. Assumption: IA-XY may reuse the existing `DIRECTION_HUB` physical VL carrier and the current topology-scoped two-VC VN filter without changing VN transition restrictions. Blocked: none at task start.
- Added new registered route `INTERPOSER_AWARE_XY` through `external/noxim/src/routingAlgorithms/Routing_INTERPOSER_AWARE_XY.*`.
- IA-XY routes same-chiplet traffic with local dimension-order XY only. It routes inter-chiplet traffic by selecting a functional source VL and functional destination VL, traversing the source VL through `DIRECTION_HUB`, using XY on the active interposer, traversing the destination VL through `DIRECTION_HUB`, and then using destination-local XY.
- IA-XY selection does not use the DeFT schema-v1 LUT or DeFT VL optimization. It scores all functional source/destination VL pairs by deterministic Manhattan path cost, then ties by lower source `vl_id` and lower destination `vl_id`.
- Added the routing string constant, help/config visibility, and a topology guard requiring `INTERPOSER_AWARE_XY` to run only with `DEFT_2_5D`.
- Added a matching power-model entry so the new route can pass existing router power initialization.
- Added `external/noxim/config_examples/deft_2_5d_interposer_aware_xy_baseline.yaml` and tiny hardcoded smoke traffic files for same-chiplet and inter-chiplet IA-XY validation.
- Standard `XY` and `DEFT` route source files were not modified. VN transition logic, VL fault injection semantics, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifacts, `final_report/main.pdf`, `final_report.zip`, and Extended Proposal files were preserved.
- Build validation from `external/noxim` used the known command `./build.sh` in WSL Ubuntu and completed with exit code `0`. The only emitted compiler warnings were the pre-existing `Router.cpp` warnings also seen in earlier builds.
- Route registration/config loading smoke completed with exit code `0` using `deft_2_5d_interposer_aware_xy_baseline.yaml`; startup reported routing `INTERPOSER_AWARE_XY`, DeFT LUT disabled, active fault mask `0x0000`, and four functional VLs per chiplet.
- Same-chiplet IA-XY smoke used one hardcoded packet `0 -> 3`, completed with exit code `0`, injected and received one packet/eight flits, and had no `IA-XY` VL traversal debug entries.
- Inter-chiplet no-fault IA-XY smoke used one hardcoded packet `0 -> 63`, completed with exit code `0`, injected and received one packet/eight flits, logged source exit `vl_id=0` and destination entry `vl_id=12`, and kept the DeFT LUT disabled.
- Explicit-fault IA-XY fallback smoke used the same `0 -> 63` packet with `-deft_faulty_vls 0`, completed with exit code `0`, injected and received one packet/eight flits, reported active fault mask `0x0001`, and logged fallback source exit `vl_id=1` instead of the faulty `vl_id=0`.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- Final parent `git diff --check` completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- A generated-artifact diff check for `external/noxim/other/generated/t0026_final_sweep_v1`, `t0026_final_analysis_v1`, `t0027_report_support_v1`, and `t0028_final_report_results_v1` returned no changed files.
- Final report and Extended Proposal artifact status check returned no changed files for `final_report/main.pdf`, `final_report.zip`, `Extended_Proposal.pdf`, or `Extended_Proposal.zip`.
- Final parent status shows modified tracking docs and a modified `external/noxim` subrepo pointer state only. Final `external/noxim` status shows the intended T0041 source/config changes and no generated final-sweep artifact changes.
- `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, `docs/ARCHITECTURE.md`, and `docs/DECISIONS.md` were updated for T0041 traceability.
- This implementation does not change the current final submission status. Existing final handoff artifacts remain `final_report/main.pdf`, the current `final_report/` source tree, and `final_report.zip`; IA-XY performance claims remain blocked until a separate T0042-style experiment creates validated comparison artifacts.

- T0040 Design Interposer-Aware XY Baseline completed as a design-only documentation task on 2026-05-11.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Before editing tracking documents, a short implementation plan was produced. Assumption: T0040 is design-only and must not change source code, helper source, simulator behavior, report artifacts, generated artifacts, package artifacts, or final-report claims. Blocked: implementation and experiment claims remain future tasks.
- Source-document roles were preserved: `Extended_Proposal.pdf` is the primary project requirements source, the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` is the primary algorithmic reference, `Proposal.pdf` is initial context only, and the peer evaluation document was ignored completely.
- Read-only source inspection confirmed standard `XY` is cardinal-only in `external/noxim/src/routingAlgorithms/Routing_XY.cpp`, while `DEFT` is the current 2.5D-aware route that selects VL/interposer phases through `external/noxim/src/routingAlgorithms/Routing_DEFT.cpp`.
- Added the IA-XY design to `docs/ARCHITECTURE.md`: IA-XY is a new proposed `INTERPOSER_AWARE_XY` baseline, not standard `XY`; standard `XY` remains cardinal-only and unchanged.
- IA-XY future behavior is phased: same-chiplet local XY; source-chiplet local XY to a selected functional source VL; VL traversal to the active interposer; interposer XY traversal; destination-side functional VL traversal into the destination chiplet; destination-local XY to the final destination.
- IA-XY may avoid known faulty physical VLs through existing `DeftTopology` functional-state queries, but it must not use the DeFT schema-v1 LUT, DeFT VL optimization, or new traffic/metric semantics.
- Added ADR-0044 to record that IA-XY is a separate interposer-aware baseline and not a reinterpretation of standard `XY`.
- `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, `docs/ARCHITECTURE.md`, and `docs/DECISIONS.md` were updated.
- No source code, helper source, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifact, final-report PDF artifact, `final_report.zip`, Extended Proposal file, Noxim rebuild, simulation run, final-sweep regeneration, final-report PDF regeneration, regression command, or `./regression.sh --update` was changed.
- Final `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final `external/noxim` status remained clean.

- T0039 Analyze Remaining Gaps and Document Future Task Backlog completed as a documentation-only planning task on 2026-05-11.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Before running commands or editing tracking documents, a short implementation plan was produced. Assumption: T0039 is a documentation/planning task that should not change source code, report artifacts, generated artifacts, or package artifacts. Blocked: none at task start.
- The supplied T0039 prompt was checked against existing project decisions and was accepted as consistent with ADR-0040, ADR-0041, and ADR-0042.
- The final package remains ready for handoff: `final_report/main.pdf`, the current `final_report/` source tree, and `final_report.zip`.
- Added T0039 as the completed backlog-analysis task and added ordered future TODO tasks T0040 through T0048.
- Ordered future backlog: T0040 Design Interposer-Aware XY Baseline; T0041 Implement Interposer-Aware XY Baseline; T0042 Run Limited IA-XY vs DeFT Comparison; T0043 Design Source-Cutoff and Post-Injection Drain Policy; T0044 Implement and Validate Drain Policy; T0045 Evaluate Directional Fault Modeling; T0046 PARSEC/GEM5 Trace Support Feasibility; T0047 Implement PARSEC/GEM5 Trace Ingestion; T0048 Regenerate Report with New Validated Results.
- These tasks are future backlog items and do not block current submission. They must not overwrite T0026/T0027/T0028 artifacts, and stronger claims remain blocked until new validated comparison artifacts exist.
- `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, `docs/ARCHITECTURE.md`, and `docs/DECISIONS.md` were updated.
- Added ADR-0043 to record that the post-submission backlog is non-blocking and artifact-isolated.
- No source code, helper source, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifact, final-report PDF artifact, final_report.zip, Extended Proposal file, Noxim rebuild, simulation run, final-sweep regeneration, final-report PDF regeneration, regression command, or `./regression.sh --update` was changed.
- Final `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final `external/noxim` status remained clean.

- T0038 Refresh Final Submission Package completed as a packaging-only task on 2026-05-11.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Before running commands or editing tracking documents, a short implementation plan was produced. Assumption: opening T0038 means a zip/archive package is required for submission. Blocked: none at task start.
- Source-document roles were preserved: `Extended_Proposal.pdf` is the primary project requirements source, the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` is the primary algorithmic reference, `Proposal.pdf` is initial context only, and the peer evaluation document was ignored completely.
- Confirmed current final report package inputs before archive creation: `final_report/main.pdf` (344758 bytes), `final_report/main.tex` (27449 bytes), `final_report/references.bib` (2683 bytes), `final_report/IEEEtran.cls` (281957 bytes), `final_report/README.md` (1296 bytes), and `final_report/figures/schematic.png` (241184 bytes).
- Parent repository status before archive creation showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with no tracked or untracked files listed.
- The registered Noxim source tree at `external/noxim` remained clean before archive creation.
- The previously documented stale `final_report.zip` was not present at task start, so T0038 created a fresh `final_report.zip` instead of updating an existing archive.
- Created `final_report.zip` with exactly these entries: `final_report/main.pdf`, `final_report/main.tex`, `final_report/references.bib`, `final_report/IEEEtran.cls`, `final_report/README.md`, and `final_report/figures/schematic.png`.
- Verified archive entry sizes match the current source/package files. The archive size is 659238 bytes and its SHA-256 hash is `C54186F6326B288C3C069FB396F23874CBE9A30DAD5913AA38A688E8444B5882`.
- `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, and `docs/PROMPTS.md` were updated with the completed package result.
- `docs/DECISIONS.md` was not updated because no new durable project decision was made.
- No source code, report claims, simulator behavior, helper behavior, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifact, generated final-report PDF artifact, Extended Proposal file, Noxim rebuild, simulation run, final-sweep regeneration, external dependency installation, regression command, or `./regression.sh --update` was changed.
- Final package status: `final_report.zip` is now the current archive package for zip-based submission, alongside direct handoff artifacts `final_report/main.pdf` and the current `final_report/` source tree.
- Final `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final parent status showed modified tracking docs and untracked `final_report.zip`.
- Final `external/noxim` status remained clean.

- T0037 Final Submission Handoff Check completed as a documentation-only handoff task on 2026-05-11.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Before running commands or editing tracking documents, a short implementation plan was produced. Assumption: T0037 is a documentation-only handoff check and should not change code, generated artifacts, final-report claims, or simulation outputs. Blocked: none at task start.
- Source-document roles were preserved: `Extended_Proposal.pdf` is the primary project requirements source, the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` is the primary algorithmic reference, `Proposal.pdf` is initial context only, and the peer evaluation document was ignored completely.
- Confirmed final source/report artifacts: `final_report/main.tex` exists, `final_report/main.pdf` exists, `final_report/references.bib` exists, `final_report/IEEEtran.cls` exists, and `final_report/README.md` exists.
- Confirmed generated PDF path: `final_report/main.pdf`; absolute path: `C:\Projects\CMP-720-Project-Proposal\final_report\main.pdf`; size: 344758 bytes; final log records `Output written on main.pdf (5 pages, 344758 bytes)`.
- Final report log handoff check found no LaTeX errors, no fatal errors, no unresolved citations, no unresolved references, no overfull boxes, and only the previously recorded underfull box diagnostics plus one underfull vbox.
- Confirmed final report-support artifact paths exist: `external/noxim/other/generated/t0026_final_sweep_v1/`, `external/noxim/other/generated/t0026_final_analysis_v1/`, `external/noxim/other/generated/t0027_report_support_v1/`, and `external/noxim/other/generated/t0028_final_report_results_v1/report_results_draft.md`.
- Confirmed T0026 generated artifact counts remain present without rerunning anything: 150 JSON stats files, 300 log files, and 5 generated LUT files under `external/noxim/other/generated/t0026_final_sweep_v1/`.
- Parent repository status before documentation edits showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with only the pre-existing untracked `final_report.zip`.
- The registered Noxim source tree at `external/noxim` remained clean before documentation edits.
- Handoff caveat: pre-existing `final_report.zip` is stale. It is untracked, does not include `final_report/main.pdf`, and contains an older archived `final_report/main.tex` of 24531 bytes while the current source is 27449 bytes. Do not use `final_report.zip` as the current submission package unless it is refreshed in a separate packaging task.
- Handoff caveat: `docs/FINAL_REPORT_DRAFT.md` still contains an older submission-format note saying PDF generation remains blocked. The current tracking documents and `final_report/main.pdf` supersede that note. It was left unchanged because T0037 was scoped to tracking-document updates and no report-content edits.
- `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, and `docs/PROMPTS.md` were updated with the completed handoff result.
- `docs/DECISIONS.md` was not updated because no new durable project decision was made.
- No source code, report claims, simulator behavior, helper behavior, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifact, generated final-report PDF artifact, Extended Proposal file, Noxim rebuild, simulation run, final-sweep regeneration, external dependency installation, regression command, or `./regression.sh --update` was changed.
- Final `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final parent status showed modified tracking docs and the pre-existing untracked `final_report.zip`.
- Final `external/noxim` status remained clean.
- Final handoff status: ready for direct handoff of `final_report/main.pdf` and the current `final_report/` source tree; not ready for zip-based submission if `final_report.zip` is the intended package, because that archive is stale.

- T0036 Post-Final Experimental Extension Design Gate completed as a documentation-only design task on 2026-05-11.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Before running commands or editing tracking documents, a short implementation plan was produced. Assumption: T0036 was limited to documentation-only future-work selection. Blocked: stronger experimental claims remain blocked without new design, source changes, and validation.
- Parent repository status before documentation edits showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` and the pre-existing untracked `final_report.zip`.
- The registered Noxim source tree at `external/noxim` remained clean before documentation edits.
- Source-document checks used `Extended_Proposal.pdf` as the primary project requirements source and the original DeFT paper as the primary algorithmic reference. `Proposal.pdf` remained initial context only, and the peer evaluation document was ignored completely.
- The local source checks confirmed the proposal requirement for synthetic traffic, real-application PARSEC/GEM5 trace context, VL fault scenarios, and reachability/latency/throughput metrics, and confirmed the DeFT paper's reliance on design-time VL selection, two-VC/VN deadlock avoidance, reachability/latency claims, and PARSEC/GEM5 evaluation in the original study.
- T0036 revisited the deferred T0034 options: interposer-aware XY-like baseline, source-cutoff plus post-injection drain policy, explicitly route-compatible intra-chiplet comparison, PARSEC/GEM5 trace support, and no further experimental work.
- Selected future-work direction: no further experimental work for the current project phase.
- Rationale: after T0035 report revision and T0032 PDF generation, every experimental extension option either changes source behavior, changes simulator/runner semantics, narrows the study away from unrestricted inter-chiplet DeFT evaluation, or requires external trace infrastructure. Starting one now would risk new blockers without improving the already generated claim-safe final artifact.
- Interposer-aware XY-like baseline remains future research only because it requires new routing behavior, build validation, focused route tests, and new versioned comparison artifacts before supporting claims.
- Source-cutoff plus post-injection drain remains future research only because it requires simulator/runner stop-semantics design, build validation, targeted drain tests, and metric-interpretation changes, and it does not fix standard `XY` topology incompatibility by itself.
- Route-compatible intra-chiplet comparison remains future research only because it would be a narrower control study outside the central inter-chiplet DeFT requirement and would not strengthen the existing final report without a separate approved validation policy.
- PARSEC/GEM5 trace support remains future research only because it requires external trace generation/import infrastructure, workload mapping, and validation before inclusion.
- `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, `docs/PROMPTS.md`, and `docs/DECISIONS.md` were updated with the completed gate result.
- Added ADR-0042 to record the durable decision to stop experimental work after the final report rather than start a high-risk post-final extension.
- No source code, report claims, simulator behavior, helper behavior, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifact, generated final-report PDF artifact, Extended Proposal file, Noxim rebuild, simulation run, final-sweep regeneration, external dependency installation, regression command, or `./regression.sh --update` was changed.
- Final `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final parent status showed modified tracking docs and the pre-existing untracked `final_report.zip`.
- Final `external/noxim` status remained clean.

- T0032 Generate Final Report PDF in a TeX-Enabled Environment completed on 2026-05-11.
- Required startup reading was completed before retrying the PDF generation task: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Before status checks, toolchain checks, compilation, or tracking-document edits, a short implementation plan was produced. Assumption: T0032 remained limited to final report PDF generation and tracking-document updates. Blocked: if WSL exposed `pdflatex` without `bibtex`, the fallback sequence would still be incomplete.
- Parent repository status before this retry showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` ahead by two commits, modified tracking docs from the earlier blocked T0032 attempts, and the pre-existing untracked `final_report.zip`.
- The registered Noxim source tree at `external/noxim` remained clean before this retry.
- The sandbox-visible `wsl -l -v` still reported no installed WSL distributions, but the approved outside-sandbox WSL check showed Ubuntu running under WSL 2.
- Windows PATH still did not expose `latexmk`, `pdflatex`, `bibtex`, or `tectonic`.
- WSL Ubuntu did not expose `latexmk`, but exposed `pdflatex` at `/usr/bin/pdflatex` and `bibtex` at `/usr/bin/bibtex`; the fallback command sequence was therefore used from `final_report/`.
- The first `pdflatex main.tex` attempt found `algorithmic.sty` missing. Because `algorithmic` was an unused template import, `final_report/main.tex` was edited to remove only that unused package import.
- The first `bibtex main` attempt found `IEEEtran.bst` missing. No `IEEEtran.bst` file was found in the project tree, `Extended_Proposal.zip`, or the WSL TeX installation. `final_report/main.tex` was edited to use the installed `ieeetr` bibliography style.
- Final fallback sequence completed successfully from `final_report/`: `pdflatex main.tex`, `bibtex main`, `pdflatex main.tex`, and `pdflatex main.tex`.
- Generated PDF path: `final_report/main.pdf`; absolute path: `C:\Projects\CMP-720-Project-Proposal\final_report\main.pdf`; size: 344758 bytes; final PDF type check reported PDF version 1.7.
- Generated LaTeX build artifacts: `final_report/main.aux`, `final_report/main.bbl`, `final_report/main.blg`, `final_report/main.log`, `final_report/main.out`, and `final_report/main.pdf`.
- Final log inspection found no LaTeX errors, no fatal errors, no unresolved citations, no unresolved references, and no overfull boxes. BibTeX completed with zero warnings.
- Remaining layout diagnostics are 43 underfull box messages, mainly from long path/code strings and dense explanatory paragraphs, plus one underfull vbox on output and the standard IEEEtran reminder to manually equalize final-page column lengths before camera-ready submission. No hard layout blocker was found in the log.
- `pdfinfo` was unavailable in WSL, so PDF metadata inspection used `file main.pdf` plus the generated file record.
- `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, and `docs/PROMPTS.md` were updated with the completed PDF-generation result.
- `docs/DECISIONS.md` was not updated because no new durable project decision was made.
- No report claims, source code, simulator behavior, helper behavior, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifact, Extended Proposal file, Noxim rebuild, simulation run, final-sweep regeneration, regression command, `./regression.sh --update`, or performance claim was changed.
- Final `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files and `final_report/main.tex` only.
- Final parent status showed modified tracking docs, modified `final_report/main.tex`, generated untracked LaTeX build artifacts, and the pre-existing untracked `final_report.zip`.
- Final `external/noxim` status remained clean.

- T0035 Revise Final Report with T0033 Diagnosis completed as a report/documentation-only task on 2026-05-11.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Before editing, a short implementation plan was produced. Assumption: T0026/T0027/T0028 remain the only final report-support data set. Blocked: PDF generation requires a TeX-enabled environment.
- Parent repository status before edits showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` and the pre-existing untracked `final_report.zip`.
- The registered Noxim source tree at `external/noxim` remained clean before edits.
- `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex` now explain the T0033 diagnosis as explanatory provenance only.
- The report text now states that `XY|hotspot_3x10` zero-injection cells are measured-window artifacts caused by `-warmup 1000` after early XY traffic had already injected and stalled.
- The report text now states that `XY|uniform` and `XY|localized_40` zero-received cells are caused by standard `XY` being cardinal-only on `DEFT_2_5D`, where unrestricted inter-chiplet traffic requires VL/hub/interposer traversal.
- The report text now states that a post-injection drain/source-cutoff policy is needed for eventual-delivery analysis but would not by itself fix standard `XY` topology incompatibility.
- Warm-up-0 T0033 diagnostic values remain traceability evidence only and are not presented as final performance results.
- The T0026/T0027/T0028 artifact chain remains the only final report-support data set in the Markdown and LaTeX reports.
- `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/VALIDATION.md`, and `docs/PROMPTS.md` were updated for T0035 completion and the next T0032 PDF-generation task.
- `docs/DECISIONS.md` was not updated because T0035 made no new durable decision beyond ADR-0041.
- `latexmk`, `pdflatex`, `bibtex`, and `tectonic` were not available on the Windows PATH, so LaTeX compilation was not attempted and no PDF was generated.
- No simulator source, helper source, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, generated final-sweep artifact, Extended Proposal file, Noxim rebuild, simulation run, final-sweep regeneration, regression command, `./regression.sh --update`, or performance claim was changed.
- Final `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited text files, including Markdown files and `final_report/main.tex`.
- Final parent status showed modified report/tracking docs, modified `final_report/main.tex`, and the pre-existing untracked `final_report.zip`.
- Final `external/noxim` status remained clean.

- T0034 Decide Next Gap-Closure Direction and Add Follow-up Tasks completed as a documentation-only decision task on 2026-05-11.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- The registered Noxim source tree at `external/noxim` was inspected for status and remained clean before documentation edits.
- Parent repository status before edits showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` and the pre-existing untracked `final_report.zip`.
- T0034 compared Options A through F for expected benefit, risk, time cost, source-code impact, validation burden, external dependency burden, final-report-quality effect, possible new blockers, and late-project appropriateness.
- T0034 selected Option A as the single primary next direction: revise the final report with the T0033 diagnosis, without adding new simulator behavior.
- Rationale: Option A improves report quality and traceability with low risk, no source-code impact, no external dependency burden, and documentation-only validation. Options B, C, and D remain too expensive or risky before final submission because they require new routing behavior, new simulator/runner semantics, or external trace infrastructure. Option E is safe but weaker than Option A because it leaves the T0033 diagnosis out of the report. Option F is deferred to a post-final design gate.
- Added follow-up tasks `T0035` and `T0036` to make the selected report-revision path and deferred experimental-extension gate traceable.
- Added ADR-0041 to record the durable decision to prioritize claim-safe report revision over late simulator behavior changes.
- No source code, simulator behavior, helper behavior, routing logic, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, generated final-sweep artifacts, Noxim rebuild, simulation run, final report regeneration, PDF generation, regression command, `./regression.sh --update`, or performance claim was changed.
- Final `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- Final parent status showed modified tracking docs and the pre-existing untracked `final_report.zip`.
- Final `external/noxim` status remained clean.

- T0033 Diagnose and Reduce Final-Report Blockers completed as a diagnosis task on 2026-05-09.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, `docs/PROMPTS.md`, `docs/FINAL_REPORT_DRAFT.md`, and `final_report/main.tex`.
- Before implementation or documentation edits, a short diagnosis plan was produced.
- Initial parent status showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` and the pre-existing untracked `final_report.zip`.
- Initial `external/noxim` status showed branch `feat/baseline-noxim...origin/feat/baseline-noxim` with no local file modifications.
- Inspected the T0019 synthetic traffic configs and tables, the T0021 runner command construction, T0026/T0027 generated report-support artifacts, T0020 injected-packet stats code, XY/DEFT routing paths, `DEFT_2_5D` topology wiring, idle-port binding, and the existing `-volume` stop condition.
- Source inspection found that `ProcessingElement::recordInjectedPacket()` counts packets only when the packet head flit enters the network after the configured stats warm-up boundary.
- Source inspection found that `Routing_XY.cpp` chooses only one cardinal direction from global footprint coordinates; it has no VL, hub, interposer, or chiplet-layer phase logic.
- Source inspection found that `DEFT_2_5D` chiplet-layer cardinal links are only wired within each 4x4 chiplet; missing cross-chiplet cardinal ports are bound to idle ports, while `Routing_DEFT.cpp` is the route path that selects VL/hub/interposer traversal for inter-chiplet traffic.
- A two-run WSL diagnostic used the existing runner only: `XY` `hotspot_3x10` and `uniform`, fault mask `0x0000`, seed `0`, `--sim 10000`, `--warmup 0`, JSON stats, output directory `external/noxim/other/generated/t0033_xy_diagnostic_warmup0_v1/`.
- The diagnostic completed with return code `0` for both runs. `XY|hotspot_3x10|0x0000|seed0` injected 145 packets, received 6, reachability `0.041379310344827586`, and weighted average latency `5.666666666666667` cycles. `XY|uniform|0x0000|seed0` injected 141 packets, received 4, reachability `0.028368794326241134`, and weighted average latency `6.75` cycles.
- Diagnosis: the T0027 `XY|hotspot_3x10` zero-injection cells are not caused by an empty traffic table or hotspot destination-selection failure. They are measured-window cells with `-warmup 1000`; packets can inject before warm-up, but by the measured window XY has stalled because cardinal XY cannot traverse the disconnected chiplet layer.
- Diagnosis: the T0027 `XY|localized_40` and `XY|uniform` zero-received cells are the same compatibility/window issue. Some XY packets enter the network in some measured-window seeds, but the standard XY route path does not provide a valid inter-chiplet path on `DEFT_2_5D`, so no packets are received during the T0026 measured window.
- Diagnosis: a post-injection drain phase is still needed for eventual-delivery analysis, but current Noxim only provides `-volume` as a delivered-flit stop condition and the current runner has no source cut-off plus drain/timeout policy.
- No simulator source, helper source, DeFT routing, VN transition logic, VL fault injection, LUT schema/use path, topology behavior, old final-sweep artifact, Noxim rebuild, full sweep, regression command, `./regression.sh --update`, or final-report performance claim was changed.
- Final `git diff --check` in the parent repository completed with exit code `0`; Git reported line-ending conversion warnings for edited Markdown files only.
- Final `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- Final parent status showed modified tracking docs and the pre-existing untracked `final_report.zip`.
- Final `external/noxim` status remained clean; the T0033 generated diagnostic output is under the ignored `external/noxim/other/generated/` tree.

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

Files updated during `T0004` baseline simulation validation:

- `docs/PROGRESS.md`
- `docs/TASKS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`

Files updated during `T0005` source-inspection documentation:

- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files updated during `T0006` router ID and coordinate mapping design:

- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files created or updated during `T0007` 2.5D topology construction:

- `external/noxim/src/DeftTopology.h`
- `external/noxim/src/DeftTopology.cpp`
- `external/noxim/src/GlobalParams.h`
- `external/noxim/src/ConfigurationManager.cpp`
- `external/noxim/src/NoC.h`
- `external/noxim/src/NoC.cpp`
- `external/noxim/src/Router.cpp`
- `external/noxim/src/Utils.h`
- `external/noxim/src/Main.cpp`
- `external/noxim/src/GlobalStats.cpp`
- `external/noxim/config_examples/deft_2_5d_topology.yaml`
- `external/noxim/config_examples/deft_2_5d_no_traffic.txt`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files updated during `T0008` Vertical Link data model:

- `external/noxim/src/DeftTopology.h`
- `external/noxim/src/DeftTopology.cpp`
- `external/noxim/src/NoC.cpp`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files updated during `T0009` Boundary Router Identification:

- `external/noxim/src/DeftTopology.h`
- `external/noxim/src/DeftTopology.cpp`
- `external/noxim/src/NoC.cpp`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files created or updated during `T0010` Fault Injection Manager:

- `external/noxim/src/DeftFaultInjectionManager.h`
- `external/noxim/src/DeftFaultInjectionManager.cpp`
- `external/noxim/src/GlobalParams.h`
- `external/noxim/src/GlobalParams.cpp`
- `external/noxim/src/ConfigurationManager.cpp`
- `external/noxim/src/NoC.cpp`
- `external/noxim/config_examples/deft_2_5d_topology.yaml`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files updated during `T0011` Fault Mask Validation:

- `external/noxim/src/DeftFaultInjectionManager.h`
- `external/noxim/src/DeftFaultInjectionManager.cpp`
- `external/noxim/src/NoC.cpp`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files updated during `T0012` VN State Representation Design:

- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files created or updated during `T0013` VN Assignment Rules:

- `external/noxim/src/DeftVirtualNetwork.h`
- `external/noxim/src/DeftVirtualNetwork.cpp`
- `external/noxim/src/ProcessingElement.cpp`
- `external/noxim/src/Router.cpp`
- `external/noxim/src/ReservationTable.h`
- `external/noxim/src/ReservationTable.cpp`
- `external/noxim/src/ConfigurationManager.cpp`
- `external/noxim/config_examples/deft_2_5d_topology.yaml`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files updated during `T0014` VN Transition Restrictions:

- `external/noxim/src/DeftVirtualNetwork.h`
- `external/noxim/src/DeftVirtualNetwork.cpp`
- `external/noxim/src/Router.cpp`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files updated during `T0015` Offline VL LUT Format Design:

- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files created or updated during `T0016` Offline VL LUT Generator:

- `external/noxim/other/deft_vl_lut_generator.py`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files created or updated during `T0017` Runtime VL LUT Loading and Boundary Use:

- `external/noxim/src/DeftVerticalLinkLut.h`
- `external/noxim/src/DeftVerticalLinkLut.cpp`
- `external/noxim/src/routingAlgorithms/Routing_DEFT.h`
- `external/noxim/src/routingAlgorithms/Routing_DEFT.cpp`
- `external/noxim/src/GlobalParams.h`
- `external/noxim/src/GlobalParams.cpp`
- `external/noxim/src/ConfigurationManager.cpp`
- `external/noxim/src/NoC.cpp`
- `external/noxim/bin/power.yaml`
- `external/noxim/config_examples/deft_2_5d_topology.yaml`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files created or updated during `T0018` Configure XY Baseline Modes:

- `external/noxim/config_examples/deft_2_5d_xy_baseline_fault_free.yaml`
- `external/noxim/config_examples/deft_2_5d_xy_baseline_fault_injected.yaml`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files created or updated during `T0019` Add Synthetic Traffic Configurations:

- `external/noxim/config_examples/deft_2_5d_traffic_uniform.yaml`
- `external/noxim/config_examples/deft_2_5d_traffic_localized_40.yaml`
- `external/noxim/config_examples/deft_2_5d_traffic_localized_40.txt`
- `external/noxim/config_examples/deft_2_5d_traffic_hotspot_3x10.yaml`
- `external/noxim/config_examples/deft_2_5d_traffic_hotspot_3x10.txt`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files updated during `T0020` Add Metrics Collection:

- `external/noxim/src/ProcessingElement.h`
- `external/noxim/src/ProcessingElement.cpp`
- `external/noxim/src/GlobalStats.h`
- `external/noxim/src/GlobalStats.cpp`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files created or updated during `T0021` Add Experiment Runner:

- `external/noxim/other/deft_experiment_runner.py`
- `external/noxim/.gitignore`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files created or updated during `T0022` Prepare Final Analysis Artifacts:

- `external/noxim/other/deft_analysis_artifacts.py`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files updated during `T0025` Define Final Sweep Policy:

- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files updated during `T0026` Run Final Sweep Matrix:

- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Ignored generated files created or updated during `T0026`:

- `external/noxim/other/generated/t0026_final_sweep_v1/manifest.json`
- `external/noxim/other/generated/t0026_final_sweep_v1/commands.sh`
- `external/noxim/other/generated/t0026_final_sweep_v1/summary.csv`
- `external/noxim/other/generated/t0026_final_sweep_v1/logs/`
- `external/noxim/other/generated/t0026_final_sweep_v1/luts/`
- `external/noxim/other/generated/t0026_final_sweep_v1/stats/`
- `external/noxim/other/generated/t0026_final_analysis_v1/analysis_manifest.json`
- `external/noxim/other/generated/t0026_final_analysis_v1/run_summary.csv`
- `external/noxim/other/generated/t0026_final_analysis_v1/comparison_summary.csv`
- `external/noxim/other/generated/t0026_final_analysis_v1/report_scaffold.md`

Files updated during `T0027` Review Final Sweep Results for Report Support:

- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Ignored generated files created during `T0027`:

- `external/noxim/other/generated/t0027_report_support_v1/manifest.json`
- `external/noxim/other/generated/t0027_report_support_v1/condition_summary.csv`
- `external/noxim/other/generated/t0027_report_support_v1/xy_deft_pair_summary.csv`
- `external/noxim/other/generated/t0027_report_support_v1/zero_injection_runs.csv`
- `external/noxim/other/generated/t0027_report_support_v1/coverage_by_routing_traffic.csv`
- `external/noxim/other/generated/t0027_report_support_v1/report_notes.md`

Files updated during `T0028` Draft Claim-Safe Final Report Results Text:

- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Ignored generated files created during `T0028`:

- `external/noxim/other/generated/t0028_final_report_results_v1/manifest.json`
- `external/noxim/other/generated/t0028_final_report_results_v1/report_results_draft.md`

Files created or updated during `T0029` Assemble Claim-Safe Final Report Draft:

- `docs/FINAL_REPORT_DRAFT.md`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files updated during `T0030` Review Final Report Draft for Submission Readiness:

- `docs/FINAL_REPORT_DRAFT.md`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`

Files updated during `T0031` Prepare Final Submission Artifact:

- `final_report/main.tex`
- `final_report/references.bib`
- `final_report/IEEEtran.cls`
- `final_report/figures/schematic.png`
- `final_report/README.md`
- `docs/ARCHITECTURE.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files updated during `T0033` Diagnose and Reduce Final-Report Blockers:

- `docs/ARCHITECTURE.md`
- `docs/DECISIONS.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`

Ignored diagnostic outputs created during `T0033`:

- `external/noxim/other/generated/t0033_xy_diagnostic_warmup0_v1/`

Files updated during `T0034` Decide Next Gap-Closure Direction and Add Follow-up Tasks:

- `docs/DECISIONS.md`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`

Files updated during `T0035` Revise Final Report with T0033 Diagnosis:

- `docs/FINAL_REPORT_DRAFT.md`
- `final_report/main.tex`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`

Files updated during `T0036` Post-Final Experimental Extension Design Gate:

- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/DECISIONS.md`

Files updated during `T0037` Final Submission Handoff Check:

- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`

Files updated or generated during `T0038` Refresh Final Submission Package:

- `final_report.zip`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`

Files updated during `T0039` Analyze Remaining Gaps and Document Future Task Backlog:

- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/ARCHITECTURE.md`
- `docs/DECISIONS.md`

Files updated during `T0040` Design Interposer-Aware XY Baseline:

- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/ARCHITECTURE.md`
- `docs/DECISIONS.md`

Files updated during `T0041` Implement Interposer-Aware XY Baseline:

- `external/noxim/src/routingAlgorithms/Routing_INTERPOSER_AWARE_XY.h`
- `external/noxim/src/routingAlgorithms/Routing_INTERPOSER_AWARE_XY.cpp`
- `external/noxim/src/GlobalParams.h`
- `external/noxim/src/ConfigurationManager.cpp`
- `external/noxim/bin/power.yaml`
- `external/noxim/config_examples/deft_2_5d_interposer_aware_xy_baseline.yaml`
- `external/noxim/config_examples/deft_2_5d_ia_xy_smoke_same_chiplet.txt`
- `external/noxim/config_examples/deft_2_5d_ia_xy_smoke_inter_chiplet.txt`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`
- `docs/ARCHITECTURE.md`
- `docs/DECISIONS.md`

Files updated or generated during `T0032` Generate Final Report PDF:

- `final_report/main.tex`
- `final_report/main.pdf`
- `final_report/main.aux`
- `final_report/main.bbl`
- `final_report/main.blg`
- `final_report/main.log`
- `final_report/main.out`
- `docs/TASKS.md`
- `docs/PROGRESS.md`
- `docs/VALIDATION.md`
- `docs/PROMPTS.md`

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
- Assumption: Supplying `LD_LIBRARY_PATH` for the local SystemC shared library is an environment setup requirement for the current WSL run, not a simulator behavior change.
- Assumption: The documented Noxim User Guide short deterministic example is suitable as the initial smoke baseline simulation command.
- Assumption: The implementation target remains a 4-chiplet 2.5D system with 4x4 mesh chiplets and four Vertical Links per chiplet.
- Assumption: Future DeFT configuration should be routed through `external/noxim/src/ConfigurationManager.*` and `external/noxim/src/GlobalParams.*`.
- Assumption: Future 2.5D topology work should start from `external/noxim/src/NoC.*`, `external/noxim/src/Tile.h`, `external/noxim/src/Router.*`, and the direction/VC structures in `external/noxim/src/GlobalParams.h` and `external/noxim/src/DataStructs.h`.
- Assumption: Future DeFT routing should use Noxim's registered routing-algorithm surface unless the next design tasks identify a safer, narrower integration point.
- Assumption: The initial 2.5D topology mapping uses a 2x2 chiplet grid, a 4x4 local mesh per chiplet, an 8x8 active-interposer footprint, chiplet router IDs `0..63`, and interposer router IDs `64..127`.
- Assumption: Packet source and final destination IDs remain chiplet router IDs only; interposer router IDs are internal transit IDs.
- Assumption: A physical bidirectional VL is identified separately from its two directional channels or endpoint directions.
- Assumption: Future 2.5D implementation should use a layer-aware mapping helper rather than relying on Noxim's mesh-only `id2Coord()` and `Router::getNeighborId()` behavior for all router IDs.
- Assumption: T0007's `DeftTopology` helper is the starting layer-aware mapping surface for future topology, VL, and boundary-router work.
- Assumption: T0007's `DIRECTION_HUB` wiring is a temporary physical carrier for VL construction only; final DeFT Up/Down movement semantics remain a future decision.
- Assumption: T0008 centralizes physical VL state in `external/noxim/src/DeftTopology.*`; future fault injection and routing tasks should reuse this surface instead of introducing a parallel VL inventory.
- Assumption: T0009 derives boundary-router identity from the centralized VL inventory; future DeFT routing, VN, and VL LUT tasks should use the boundary-router query surface instead of introducing a parallel boundary-router endpoint table.
- Assumption: A Vertical Link is represented as one physical bidirectional connection with one mutable functional state by default.
- Assumption: Directional VL channel accounting can be derived later if needed, but it should not replace the physical VL identity model without a new decision.
- Assumption: T0008 structural validation checks the VL inventory; T0011 fault-mask validation checks explicit and generated masks against the current physical VL model before startup fault state is applied.
- Assumption: The construction-only `DEFT_2_5D` smoke configuration is valid for topology instantiation checks, but not for DeFT performance evaluation because it intentionally generates no packets.
- Assumption: Future tasks must continue on the existing Git branch by default; Codex must not create or switch task branches unless the user explicitly asks for that operation.
- Assumption: T0010 fault configuration is counted over the current 16 physical bidirectional VLs. Final percentage conversion and directional VL accounting remain future work.
- Assumption: Startup fault state is metadata for future routing and LUT tasks in T0010; physical VL wiring is still constructed for all VLs, and route selection does not yet avoid faulty VLs.
- Assumption: T0011 treats four faulty physical bidirectional VLs out of 16 as the current physical 25% validation target for inspectability only.
- Assumption: T0011 does not resolve final percentage conversion or directional VL accounting for experiment automation.
- Assumption: T0012 maps DeFT VN state directly to Noxim VC IDs: VC 0 is VN.0 and VC 1 is VN.1 for DeFT-enabled runs.
- Assumption: T0013 treats `DEFT_2_5D` as the current DeFT-enabled mode and requires exactly two configured VCs for that topology.
- Assumption: A separate packet/flit `vn_id` field is unnecessary and should not be added unless future implementation proves the existing `vc_id` cannot safely carry DeFT VN state.
- Assumption: T0013's output-VC-aware reservation and forwarding path is the required foundation for safe VN reassignment; changing only `Flit::vc_id` without matching downstream full-status checks would be unsafe.
- Assumption: T0014 uses `DIRECTION_HUB` only as the current physical VL traversal carrier and derives Up/Down semantics from `DeftTopology` layer and boundary-router context.
- Assumption: T0014 does not need additional packet/flit movement-history metadata because the current input port is sufficient for the enforced Up-to-Horizontal and Horizontal-to-Down restrictions.
- Assumption: T0015 schema v1 uses a restricted deterministic YAML format named `deft_vl_lut.v1`.
- Assumption: T0015 keys runtime LUT entries by physical fault mask, source chiplet ID, source router ID, and destination chiplet ID.
- Assumption: T0015 uses a quoted fixed-width hexadecimal `fault_mask_id` over current physical bidirectional VL IDs `0..15`, where bit `vl_id` set means the physical VL is faulty.
- Assumption: T0015 stores paired `source_exit` and `destination_entry` selections because each inter-chiplet packet needs one VL choice on the source chiplet and one destination-side entry choice from the interposer.
- Assumption: T0015 keeps `destination_router_id` out of schema v1; a future schema can add destination-router granularity only through a version bump or explicitly optional field.
- Assumption: T0015 includes the no-fault mask so 0% fault scenarios can use the same lookup path.
- Assumption: T0016 generator constants mirror the current `DeftTopology` model; a future topology change must update the generator or introduce a shared topology export.
- Assumption: T0016 uses uniform unit inter-chiplet demand until traffic-profile-specific LUT generation is designed.
- Assumption: T0016 uses an interposer-context destination-entry selection model because schema v1 has no `destination_router_id`.
- Assumption: T0017 runtime DeFT LUT use is enabled by selecting routing algorithm `DEFT` and providing `deft_vl_lut_filename` or `-deft_vl_lut`.
- Assumption: T0017 does not require `RouteData` intermediate-destination fields because schema-v1 route phases can be recomputed from current router ID, original source/destination IDs, topology layer metadata, and the loaded entry.
- Assumption: T0017 construction-only `DEFT_2_5D` runs may leave the LUT filename empty when no inter-chiplet packets are routed.
- Assumption: T0018 uses explicit YAML configs, not new routing code, as the smallest safe XY baseline mode surface.
- Assumption: The T0018 fault-injected XY baseline uses the current physical-model mask `[0,4,8,12]` / `0x1111`, with one faulty physical bidirectional VL per chiplet.
- Assumption: T0019 uses existing Noxim traffic surfaces instead of adding a new C++ traffic mode.
- Assumption: `TRAFFIC_LOCAL` is not suitable for the proposal localized profile because it is WiNoC hub-local rather than chiplet-local, and `DEFT_2_5D` rejects Winoc hub mode.
- Assumption: T0019's hotspot "10% rate on each" means per-hotspot destination share of generated traffic, not a new global packet-injection-rate sweep.
- Assumption: Hotspot routers `9`, `13`, and `41` are deterministic near-center routers in three different chiplets because the source documents do not specify hotspot IDs.
- Assumption: T0020 counts an injected packet when its head flit enters the network from the processing element after the configured stats warm-up boundary.
- Assumption: T0020 short smoke reachability can be below one because packets can remain in flight at simulation end; the smoke validates export shape and metric availability only.
- Assumption: T0021 temporary DEFT LUTs use the existing T0016 uniform-unit-interchiplet demand assumption and are not traffic-profile-specific.
- Assumption: T0021 execute mode is intended for WSL/Linux because the validated `external/noxim/bin/noxim` artifact is a Linux ELF binary; Windows PowerShell can still use the runner for dry-run planning.
- Assumption: T0022 analysis inputs are T0021 runner output directories with T0020 stats exports.
- Assumption: T0022 generated grouped means are mechanical summaries for report support and are not performance claims.
- Assumption: T0025 final sweeps use explicit physical bidirectional VL masks over the current 16 physical VL IDs and report matching directional-equivalent percentages over the paper's 32-channel wording.
- Assumption: A permanent physical bidirectional VL fault disables both directions of that VL in the current implementation.
- Assumption: T0025 final sweeps use fixed-window continuous injection with `-sim 10000`, `-warmup 1000`, five seeds, and no post-injection drain phase.
- Assumption: T0026 final sweep generated outputs under `external/noxim/other/generated/` are ignored report-support artifacts and should remain traceable to their raw manifests and JSON stats.
- Assumption: T0026 analysis grouped means are mechanical summaries only and are not performance claims.
- Assumption: T0027 zero-injection rows are completed simulator rows with no packets injected during the measured stats window, not simulator failures.
- Assumption: T0027 condition-level aggregate reachability is defined as `total_received_packets / total_injected_packets` and is blank when no packets were injected.
- Assumption: T0027 condition-level aggregate latency is received-packet-weighted and is blank when no packets were received.
- Assumption: T0028 final report results prose is claim-safe descriptive support text and must be integrated only with its blank cells, partial-cell coverage counts, and limitations intact.
- Assumption: `docs/FINAL_REPORT_DRAFT.md` is the tracked claim-safe Markdown manuscript draft assembled from the source documents, project documentation, and T0028/T0027/T0026 artifacts.
- Assumption: After T0030, `docs/FINAL_REPORT_DRAFT.md` is submission-ready as a reviewed Markdown draft, but no converted final artifact exists because no final format was specified.
- Assumption: After T0031 completion, `final_report/` is the IEEE conference-style LaTeX final report source artifact generated from `docs/FINAL_REPORT_DRAFT.md` and the `Extended_Proposal.zip` template source.
- Assumption: T0031 did not generate a PDF because no TeX engine or BibTeX tool was available on the Windows PATH.
- Assumption: T0033 warm-up-0 diagnostic data can explain and reduce blank XY cells for traceability only; it is not a replacement final performance dataset.
- Assumption: The existing `XY` algorithm is a cardinal 2D footprint route and is not an interposer-aware baseline for unrestricted inter-chiplet traffic on `DEFT_2_5D`.
- Assumption: T0034 selected report revision with the T0033 diagnosis as the safest immediate gap-closure direction.
- Assumption: T0035 updated both `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex`, so T0032 should compile the revised LaTeX source when a TeX-enabled environment is available.
- Assumption: T0032 generated the current PDF at `final_report/main.pdf` from the revised `final_report/main.tex` without changing report claims.
- Assumption: The T0032 TeX compatibility edits are formatting/build-surface only: remove an unused `algorithmic` package import and use the installed `ieeetr` bibliography style because `IEEEtran.bst` was not available.
- Assumption: Options B, C, and D require separate future design or source-change tasks and should not be started implicitly during final report closure.
- Assumption: T0036 closes the post-final experimental-extension gate by selecting no further experimental work for the current project phase.
- Assumption: The current final experimental deliverable is the T0026/T0027/T0028 artifact chain plus the revised T0032 generated PDF at `final_report/main.pdf`.
- Assumption: T0037 confirmed `final_report/main.pdf` and the current `final_report/` source tree as the direct final handoff artifacts.
- Assumption: Starting T0038 means a zip/archive package is required for submission.
- Assumption: After T0038, `final_report.zip` is the current zip-based submission package and includes the current `final_report/main.pdf` plus the allowed current source files.
- Assumption: T0039 future backlog tasks are post-submission development items and do not block current handoff.
- Assumption: Future experiment tasks must write to new artifact directories and must not overwrite T0026/T0027/T0028.
- Assumption: IA-XY is a new proposed `INTERPOSER_AWARE_XY` baseline and is not standard `XY`.
- Assumption: Standard `XY` remains cardinal-only and unchanged for future work.
- Assumption: T0041 IA-XY uses existing `DeftTopology` VL endpoint and functional-state queries without adding new topology helpers.
- Assumption: T0041 IA-XY reuses `DIRECTION_HUB` as the current physical VL traversal carrier and relies on the existing topology-scoped VN filter without changing VN transition restrictions.
- Assumption: T0041 validates implementation smokes only; IA-XY performance comparison claims require a later experiment task.
- Assumption: IA-XY design or smoke validation alone supports no performance claim and does not change the current final submission status.
- Assumption: T0042 is a limited exploratory artifact set, not a final sweep, because it uses two seeds and two fault masks rather than the T0025 five-seed/five-mask policy.
- Assumption: T0042 blank-aware condition-level reachability is total received packets divided by total injected packets, and condition-level latency is received-packet-weighted and blank when no packets are received.
- Assumption: T0042 can support future report discussion only after a separate report task decides whether and how to incorporate it without strengthening unsupported claims.
- Assumption: T0043 source-cutoff plus drain/timeout is an opt-in future eventual-delivery mode and does not reinterpret current fixed-window artifacts.
- Assumption: T0043 first-implementation warm-up behavior should be source-gated unless a later task explicitly designs a preloaded warm-up and flush rule.
- Assumption: T0043 drain-mode reachability is measured received packets divided by measured injected packets after source cutoff and drain completion or timeout; it is blank when no measured packets were injected.
- Assumption: T0044 drain mode is opt-in and does not reinterpret historical fixed-window artifacts or current `-volume` output.
- Assumption: T0044 source-gated warm-up is the first supported drain-mode warm-up policy; a preloaded warm-up with flush would require a separate design task.
- Assumption: T0044 targeted smokes validate implementation mechanics only and do not create final experiment evidence.
- Assumption: T0045 interprets the original paper's four-chiplet `total VLs=32` wording as directional endpoint or channel accounting over the same 16 physical bidirectional VL objects.
- Assumption: Existing T0026/T0027/T0028, T0042, and T0044 artifacts remain physical-model artifacts and must not be reinterpreted as directional endpoint experiments.
- Assumption: Future directional endpoint support should preserve physical VL identity while adding per-direction state and a versioned LUT/config boundary.
- Assumption: T0046 treats PARSEC/GEM5 trace support as future real-application evaluation infrastructure, not as part of the current synthetic final artifact chain.
- Assumption: The first safe trace-ingestion target should be a tiny versioned `deft_trace.v1`-style fixture or equivalent, not a full PARSEC-scale dump.
- Assumption: T0052's all-pairs hardcoded fixture is useful as aggregate drain-timeout evidence, but it is not a pair-isolated reachability proof because most planned packets were still queued at sources when the timeout occurred.
- Assumption: T0052's timeout result should be diagnosed with lower-load or pair-isolated fixtures before changing source code.
- Blocked: Strong inter-chiplet IA-XY-vs-DEFT comparison needs new versioned experiment artifacts and blank-aware analysis, or a narrower traffic policy that explicitly limits comparison to route-compatible traffic.
- Blocked: Stronger final-report claims remain blocked after T0035; the selected immediate path improved explanation, not measured performance coverage.
- Blocked: No current PDF-generation blocker remains after T0032; stronger final-report claims remain blocked without a separate approved validation or rerun policy.
- Blocked: Strong IA-XY performance claims remain blocked after T0042 because the new artifact set is limited, two-seed exploratory data and still contains blank IA-XY hotspot cells.
- Blocked: Eventual-delivery claims remain blocked after T0044 until a later explicit experiment task defines timeout policy, creates new versioned drain-mode artifacts, and performs claim-safe analysis.
- Blocked: Paper-aligned single-direction fault experiments remain blocked after T0045 until a future versioned directional fault model, directional LUT path, runtime lookup, and validation policy exist.
- Blocked: PARSEC/GEM5 workload claims remain blocked after T0046 until GEM5/PARSEC dependencies or trace inputs, a versioned trace schema, workload mapping, ingestion validation, and new artifact directories exist.
- Blocked: Reopening source-cutoff/drain semantics, route-compatible intra-chiplet comparison, PARSEC/GEM5 traces, directional endpoint faults, or stronger performance claims requires a new explicit task with its own design and validation policy.
- Blocked: T0052 does not support a 100% DeFT reachability claim because every aggregate all-pairs mask case stopped with `drain_timeout`.
- Blocked: T0053 is blocked until the T0055 dense destination-convergence blocker is fixed or reclassified and DeFT drain-based reachability behavior is validated.
- Blocked: Stronger final-report claims remain blocked until a later report task uses new validated artifacts.

## Open Questions

- If PARSEC/GEM5 trace work resumes, will the user provide an existing trace bundle, or should a future task first design an external trace-generation environment?
- Should WSL be configured persistently with `ldconfig` for the local SystemC library, or should future Noxim runs keep using a per-process `LD_LIBRARY_PATH`?
- Should final DeFT routing keep using `DIRECTION_HUB` as the physical Vertical Link carrier, or introduce explicit semantic Up/Down ports after the LUT design is complete?
- Should a future `deft_vl_lut.v2` add `destination_router_id` for destination-router-granular entry VL optimization?
- How should final traffic-profile-specific LUT generation encode non-uniform `T_inter_r` inputs?
- Should final hotspot experiments keep hotspot routers `9`, `13`, and `41`, or should an explicit source-document or instructor-provided hotspot-node set replace them?
- Why did Git fail to create task branch refs in the current Windows worktree? This is no longer operationally important because user instruction now forbids automatic task branch creation.
- Should deferred directional endpoint fault support be prioritized before trace feasibility if future report claims need the original paper's single-direction 3.125% case?
- Should a later experiment policy select one global drain timeout, or traffic-profile-specific timeout budgets after T0044 smokes exist?
- Should the generated final-analysis scaffold blocker text be updated in a future task to reflect the T0025 policy resolutions while still keeping generated scaffold outputs conservative?
- Should a future report-packaging cleanup install or vendor the exact `IEEEtran.bst` style, or keep the currently installed `ieeetr` BibTeX style used for the generated PDF?

## Next Recommended Task

Start `T0051` next: fix the DeFT destination-stress flow-control/reservation blocker isolated by T0055. `T0053` remains blocked until the fix is validated by a DeFT drain-mode matrix.

## Next Ready-to-Send Prompt

```text
Start task T0051: Fix DeFT Destination-Stress Flow-Control Blocker.

Before starting, read:
- AGENTS.md
- docs/PROGRESS.md
- docs/TASKS.md
- docs/ROADMAP.md
- docs/ARCHITECTURE.md
- docs/VALIDATION.md
- docs/DECISIONS.md
- docs/PROMPTS.md
- docs/FINAL_REPORT_DRAFT.md
- final_report/main.tex

Continue on the existing Git branch. Do not create or switch task branches.

Use Extended_Proposal.pdf as the primary project requirements source and the original DeFT paper as the primary algorithmic reference. Use Proposal.pdf only as initial context. Ignore the peer evaluation document completely.

Use the registered Noxim source tree at external/noxim.

Goal: fix the dense destination-convergence DeFT/Noxim flow-control/reservation blocker isolated by T0055. The failing evidence is dense destination-0 and destination-63 drain fixtures that retain router-buffer flits and router reservations indefinitely, including no-fault n8 gap-1 cases with empty source queues and no pending handshakes, and no-fault n63 gap-1 cases whose stuck counts are identical at 20,000 and 100,000 drain cycles.

Before running anything:
- Check parent repository status.
- Check external/noxim status.
- Inspect the T0055 artifact set at `external/noxim/other/generated/t0055_deft_destination_stress_diagnosis_v1/`.
- Inspect the T0054 artifact set at `external/noxim/other/generated/t0054_deft_drain_timeout_diagnosis_v1/` only as supporting diagnosis context.
- Inspect router reservation ownership/release, output VC forwarding, downstream VC/full-status handling, VN transition filtering, drain accounting, and DeFT route-phase surfaces.
- Define the exact targeted fix plan, rerun matrix, timeout policy, artifact directory, and expected summary fields before editing source.
- Clearly mark assumptions as `Assumption`.
- Clearly mark blockers as `Blocked`.

Scope:
- Use opt-in drain mode only for reachability reruns.
- Start from T0055 artifacts as failing evidence, not as final reachability evidence.
- Implement only the smallest source change needed for the diagnosed reservation, VC/full-status, VN filtering, or DeFT route-phase blocker.
- Preserve standard `XY`, IA-XY, unrelated `DEFT` behavior, VL fault injection semantics, LUT schema/use path, topology behavior, traffic generation behavior, metrics, runner, and analysis behavior unless the exact diagnosed source surface requires a tightly scoped change.
- Write any new generated validation outputs to a new ignored directory such as `external/noxim/other/generated/t0051_deft_destination_stress_fix_v1/`.
- Record commands, generated LUTs, traffic/config fixtures, stdout/stderr logs, JSON stats, manifest, summary, and every non-100% or timeout case with routing mode, fault mask, source, destination, stop reason, injected/received counts, undelivered counts, remaining in-flight state, and suspected route or flow-control phase.
- Preserve all historical fixed-window, IA-XY, T0044 drain-smoke, T0050 diagnosis, T0052 validation, T0054 diagnosis, T0055 diagnosis, final-report, package, and Extended Proposal artifacts.

Do not:
- Make broad or speculative source rewrites.
- Regenerate final sweep artifacts.
- Regenerate or modify final_report/main.pdf, final_report.zip, or Extended Proposal files.
- Install dependencies.
- Import or generate PARSEC/GEM5 traces.
- Modify standard XY, IA-XY, unrelated DEFT behavior, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, traffic generation behavior, metrics, runner, or analysis behavior outside the diagnosed minimal fix.
- Run IA-XY comparison; T0053 remains blocked until DeFT reachability behavior is validated after the fix.
- Use ./regression.sh --update.
- Invent results or claim 100% reachability beyond the validated matrix.

Validation:
- Run git diff --check.
- Rebuild Noxim with the documented command `./build.sh` after source changes.
- Run only the documented T0051 targeted rerun matrix and record commands, configs, generated LUTs, stats files, stdout/stderr logs, manifests, and summaries.
- Check external/noxim status after validation.
- Confirm T0026/T0027/T0028, T0042, T0044, T0050, T0052, T0054, and T0055 generated artifacts were not changed except for the new T0051 directory.
- Confirm final_report/main.pdf, final_report.zip, and Extended Proposal files were not changed.

Update tracking docs with validation results, blockers, and the next recommended task. Keep final-report claims unchanged until a later report task uses new validated artifacts.
```

## Suggested Branch Name for Next Task

```text
None; continue on the existing branch.
```

## Suggested Commit Message

```text
docs: record deft destination stress diagnosis
```
