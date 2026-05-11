# Project Progress

## Current Phase

Phase 9 - Final Analysis and Report Support (final package ready; future backlog documented)

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

DeFT VN assignment behavior, the first VN movement-transition restriction enforcement layer, the offline VL LUT schema/generator, the runtime schema-v1 LUT loading/use path, explicit XY fault-free/fault-injected baseline configuration modes, proposal-required synthetic traffic configuration profiles, machine-readable metrics export, tiny experiment-runner launch support, final-analysis scaffolding, the final sweep policy, the validated T0026 150-run final sweep output set, T0027 blank-aware report-support tables, T0028 claim-safe final report results draft, the T0029 tracked claim-safe Markdown report draft, the T0030 submission-readiness polish, the T0031 IEEE-style LaTeX final report source artifact, the T0032 generated final report PDF, the T0033 blocker diagnosis, the T0034 report-revision direction decision, the T0035 final-report diagnosis revision, the T0036 post-final experimental design gate, the T0037 final submission handoff check, the T0038 final submission archive refresh, and the T0039 future backlog documentation now exist for `DEFT_2_5D`. Performance claims remain limited to descriptive, blank-aware report support only. No future backlog item blocks the current final submission.

## In-Progress Tasks

- None.

## Blocked Tasks

- None.

## Last Validation Result

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
- Blocked: True post-injection drain validation needs a source cut-off plus drain/timeout mechanism beyond the current runner and Noxim `-volume` stop condition.
- Blocked: Strong inter-chiplet XY-vs-DEFT comparison needs either a newly designed interposer-aware baseline route or a narrower traffic policy that explicitly limits XY comparison to route-compatible traffic.
- Blocked: Stronger final-report claims remain blocked after T0035; the selected immediate path improved explanation, not measured performance coverage.
- Blocked: No current PDF-generation blocker remains after T0032; stronger final-report claims remain blocked without a separate approved validation or rerun policy.
- Blocked: Reopening interposer-aware baseline routing, source-cutoff/drain semantics, route-compatible intra-chiplet comparison, PARSEC/GEM5 traces, directional endpoint faults, or stronger performance claims requires a new explicit task with its own design and validation policy.

## Open Questions

- Are GEM5/PARSEC traces required for final delivery, or are synthetic traffic experiments sufficient?
- Should WSL be configured persistently with `ldconfig` for the local SystemC library, or should future Noxim runs keep using a per-process `LD_LIBRARY_PATH`?
- Should final DeFT routing keep using `DIRECTION_HUB` as the physical Vertical Link carrier, or introduce explicit semantic Up/Down ports after the LUT design is complete?
- Should a future `deft_vl_lut.v2` add `destination_router_id` for destination-router-granular entry VL optimization?
- How should final traffic-profile-specific LUT generation encode non-uniform `T_inter_r` inputs?
- Should final hotspot experiments keep hotspot routers `9`, `13`, and `41`, or should an explicit source-document or instructor-provided hotspot-node set replace them?
- Why did Git fail to create task branch refs in the current Windows worktree? This is no longer operationally important because user instruction now forbids automatic task branch creation.
- Should future validation add a documented packet-carrying hardcoded inter-chiplet DeFT smoke once the allowed smoke command and expected behavior are designed?
- Should a future implementation add directional endpoint fault modeling for the original paper's single-direction 3.125% fault case?
- Should a future helper add source cut-off and post-injection drain support for eventual-delivery reachability checks?
- Should the generated final-analysis scaffold blocker text be updated in a future task to reflect the T0025 policy resolutions while still keeping generated scaffold outputs conservative?
- Should a future report-packaging cleanup install or vendor the exact `IEEEtran.bst` style, or keep the currently installed `ieeetr` BibTeX style used for the generated PDF?

## Next Recommended Task

None for submission; start the backlog only if more development is required.

## Next Ready-to-Send Prompt

```text
No next task is required for final submission. If more development is required, start T0040: Design Interposer-Aware XY Baseline. Before starting, read AGENTS.md and the required project tracking documents, continue on the existing branch, do not create or switch branches, keep the task design-only, clearly state that IA-XY is not standard XY, do not edit source code or run simulations, update tracking docs, and run git diff --check.
```

## Suggested Branch Name for Next Task

```text
None; continue on the existing branch.
```

## Suggested Commit Message

```text
docs: document future development backlog
```
