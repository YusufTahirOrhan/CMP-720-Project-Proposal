# DeFT Routing for 2.5D Chiplet Networks: Final Report Draft

This draft mirrors the current IEEE-style LaTeX final report source in `final_report/main.tex`. It separates finite-window synthetic-traffic measurements from opt-in drain-mode reachability validation, preserves denominator-safe interpretation, and avoids unsupported latency, throughput, ranking, statistical, PARSEC/GEM5, or directional-fault claims.

Metric cells are left blank when the supporting denominator is absent. Reachability is blank when no packets were injected in the measured window. Latency is blank when no packets were received in the measured window.

The fixed-window tables describe the 150-run synthetic-traffic sweep. The drain-mode audit describes eventual delivery after source cutoff and network drain. These regimes answer different questions and should not be merged into a single performance claim.

## Source Scope

Primary project requirements source:

- `Extended_Proposal.pdf` for project scope, implementation expectations, synthetic traffic evaluation, fault scenarios, and required metrics.

Primary algorithmic reference:

- `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` for DeFT routing, VN behavior, movement restrictions, and design-time VL selection.

Initial context source:

- `Proposal.pdf`.

Out-of-scope source:

- Peer evaluation material is ignored completely.

The extended proposal defines the project as an extension of the cycle-accurate Noxim simulator for 2.5D chiplet networks, with evaluation under synthetic traffic profiles, permanent Vertical Link fault scenarios, and reachability, latency, and throughput metrics. The original DeFT paper provides the algorithmic reference for the VN assignment strategy, movement restrictions, and design-time VL selection idea used by this implementation.

Citation wording in this draft is source-scoped: project requirements are attributed to `Extended_Proposal.pdf`, DeFT algorithm details are attributed to the original DeFT paper, and implementation or validation provenance is attributed to the tracked project documentation and generated artifacts.

Real-application PARSEC/GEM5 trace evaluation is outside the current validated artifact set and would require a separate documented setup and validation path before inclusion.

## Abstract

This project implements and evaluates a Noxim-based `DEFT_2_5D` simulator extension for studying DeFT-style routing in a 2.5D chiplet network. The implementation models four chiplets on an active interposer, a deterministic physical Vertical Link inventory, startup permanent VL faults, DeFT VN assignment rules, movement-transition filtering, schema-v1 offline VL lookup tables, explicit `XY` baseline modes, synthetic traffic profiles, machine-readable metrics export, and traceable experiment/analysis helpers.

The fixed-window synthetic-traffic sweep completed 150 simulator runs across routing modes, traffic profiles, fault masks, and seeds. Those measurements are reported descriptively because the finite simulation window contains empty and partial injection cells, including 54 completed runs with zero packets injected after the warm-up boundary. A separate opt-in drain-mode DeFT reachability audit provides stronger evidence within its own boundary: under deterministic hardcoded fixtures, seed 0, the current physical bidirectional VL fault model, and accepted masks `0x0000`, `0x0001`, `0x0011`, `0x0111`, and `0x1111`, all 650 cases passed and all 4032 valid ordered chiplet-router source-destination pairs were delivered for every accepted mask. The report therefore separates finite-window traffic behavior from eventual-delivery validation after injection cutoff and drain.

## 1. Introduction

2.5D chiplet integration connects multiple smaller dies through an active interposer. This architecture can improve modularity, but it also makes inter-chiplet routing sensitive to Vertical Link availability and deadlock-avoidance constraints. DeFT is a routing approach proposed for this setting. It combines VN assignment rules with fault-aware VL selection so inter-chiplet packets can be routed through the interposer while respecting deadlock-avoidance constraints.

The project goal is to extend Noxim so DeFT-style behavior can be studied in a reproducible simulator workflow. The implementation in this repository focuses on a four-chiplet system with 4x4 chiplet-local meshes, a modeled active interposer layer, four physical bidirectional VLs per chiplet, permanent startup VL faults, two VCs for VN.0 and VN.1, and final descriptive metrics for reachability, average latency, and network throughput.

The current implementation models 16 physical bidirectional VLs. This physical fault model differs from single-direction endpoint fault modeling in the original paper and is treated as an evaluation constraint.

## 2. Background

### 2.1 2.5D Topology

The project topology uses a 2x2 chiplet grid. Each chiplet contains 16 chiplet routers arranged as a 4x4 local mesh. The active interposer is represented as an 8x8 routing layer below the chiplets. Chiplet router IDs are `0..63`; interposer router IDs are `64..127`. Packet sources and final destinations remain chiplet routers only.

Each chiplet owns four physical bidirectional VLs at deterministic boundary routers. The current model therefore has 16 physical bidirectional VLs. These physical links can also be described as 32 directional-equivalent channels for paper-aligned fault-rate reporting, but the simulator fault model disables a physical bidirectional VL as one object.

### 2.2 DeFT Routing Concepts

The original DeFT paper is the algorithmic reference for the following concepts used by this implementation:

- VN.0 and VN.1 are represented through two virtual channels.
- Inter-chiplet routing uses VN assignment and transition restrictions to avoid forbidden movement patterns.
- VL selection is prepared at design time and used at runtime through lookup-table entries.
- The source-side exit VL and destination-side entry VL matter for inter-chiplet routing.

This project maps VN.0 to VC 0 and VN.1 to VC 1 for `DEFT_2_5D`. It also uses a runtime schema-v1 LUT loader and a separate `DEFT` routing algorithm. The implementation does not claim a new formal proof; it follows the documented DeFT surfaces and records the validation that was performed in this repository.

### 2.3 Baseline Routing

The project includes explicit `XY` baseline configurations on the same `DEFT_2_5D` topology. The final sweep runs `XY` and `DEFT` over the same synthetic traffic profiles, fault masks, seeds, simulation window, and warm-up window.

A follow-up diagnosis classified the current standard `XY` implementation as a limited control baseline on `DEFT_2_5D`, not as an interposer-aware unrestricted inter-chiplet baseline. The existing `XY` route path selects only cardinal directions from the global footprint. It does not select VL, hub, interposer, or chiplet-layer phases. On `DEFT_2_5D`, unrestricted inter-chiplet routes require VL/hub/interposer traversal, so standard `XY` can select chiplet-layer movement that has no physical cross-chiplet cardinal link.

The later drain-mode comparison therefore uses `INTERPOSER_AWARE_XY`, a separate baseline that can traverse the modeled interposer path. This baseline is not standard `XY`, and this draft keeps those labels separate.

## 3. Implementation Summary

The simulator extension follows Noxim's existing topology, routing, configuration, and statistics surfaces.

Main implemented surfaces:

- `external/noxim/src/DeftTopology.*`: layer-aware router mapping, physical VL records, boundary-router inventory, and topology validation.
- `external/noxim/src/DeftFaultInjectionManager.*`: startup permanent physical VL fault configuration and validation.
- `external/noxim/src/DeftVirtualNetwork.*`: VN/VC mapping helpers and DeFT VN assignment support.
- `external/noxim/src/routingAlgorithms/Routing_DEFT.*`: runtime DeFT route selection through schema-v1 VL LUT entries.
- `external/noxim/src/DeftVerticalLinkLut.*`: schema-v1 VL LUT loader and validator.
- `external/noxim/config_examples/`: `DEFT_2_5D` topology, `XY` baselines, and synthetic traffic configurations.
- `external/noxim/other/deft_vl_lut_generator.py`: deterministic offline VL LUT generator.
- `external/noxim/other/deft_experiment_runner.py`: traceable experiment launcher.
- `external/noxim/other/deft_analysis_artifacts.py`: analysis artifact generator.
- `external/noxim/src/GlobalStats.*` and `external/noxim/src/ProcessingElement.*`: machine-readable metrics export and injected-packet counters.

The implementation preserves Noxim's existing extension surfaces where possible. It uses explicit configuration and helper artifacts rather than embedding final experiment assumptions directly into routing logic. Generated artifacts under `external/noxim/other/generated/` are used as reproducibility records and remain traceable to their manifests.

## 4. Evaluation Method

The fixed-window synthetic sweep matrix was:

| Dimension | Values |
| --- | --- |
| Routing modes | `XY`, `DEFT` |
| Traffic profiles | `uniform`, `localized_40`, `hotspot_3x10` |
| Fault masks | `0x0000`, `0x0001`, `0x0011`, `0x0111`, `0x1111` |
| Physical fault rates (%) | 0, 6.25, 12.5, 18.75, 25 |
| Seeds | `0`, `1`, `2`, `3`, `4` |
| Simulation window | `-sim 10000` |
| Warm-up window | `-warmup 1000` |
| Stats format | JSON |

The final sweep contains exactly 150 planned and completed simulator runs. No post-injection drain phase is included in the fixed-window policy.

A post-injection drain/source-cutoff policy is needed for eventual-delivery analysis. That policy does not by itself fix standard `XY` topology incompatibility on unrestricted inter-chiplet `DEFT_2_5D` traffic, because standard `XY` still has no VL/hub/interposer route phase.

The drain-mode evaluations use opt-in source-cutoff plus drain semantics for deterministic hardcoded fixtures. They are not fixed-window final sweeps and are not substitutes for the synthetic-traffic tables; instead, they answer the separate question of eventual delivery after injection stops and the network drains.

A zero-injection row is a completed simulator run with `total_injected_packets == 0` in the measured stats window. It is not treated as a failed simulator invocation. Warm-up-0 diagnostics are used only as traceability evidence that traffic sources were not empty; they are not replacement performance data. The fixed-window runner policy does not evaluate eventual delivery after a post-injection drain phase, and the physical bidirectional fault model does not represent the original paper's single-direction 3.125% fault case.

## 5. Validation Provenance

The fixed-window synthetic-traffic results are traceable through these generated artifacts:

- T0026 final sweep output: `external/noxim/other/generated/t0026_final_sweep_v1/`.
- T0026 final analysis output: `external/noxim/other/generated/t0026_final_analysis_v1/`.
- T0027 report-support output: `external/noxim/other/generated/t0027_report_support_v1/`.
- T0028 report results draft: `external/noxim/other/generated/t0028_final_report_results_v1/report_results_draft.md`.

The executed fixed-window manifest records `mode: execute`, `run_count: 150`, 150 completed runs, and 150 return code `0` runs. All 150 JSON stats files were present and contained the exported metric fields.

The derived condition and pair tables were cross-checked against the raw statistics and generated summaries.

A separate diagnosis explains the source of the `XY` blank cells by inspecting the runner warm-up policy, injected-packet accounting, standard `XY` routing, and `DEFT_2_5D` topology wiring. It does not add new fixed-window performance rows, does not replace the 150-run sweep, and does not change simulator behavior.

Additional drain-mode provenance is traceable through:

- T0060 DeFT reachability audit: `external/noxim/other/generated/t0060_deft_reachability_audit_v1/`.
- T0053 drain IA-XY versus DeFT comparison output: `external/noxim/other/generated/t0053_drain_iaxy_deft_comparison_v1/`.

The T0060 audit used `DEFT` only, seed 0, opt-in drain mode, deterministic hardcoded fixtures, a generated schema-v1 LUT, and accepted physical fault masks `0x0000`, `0x0001`, `0x0011`, `0x0111`, and `0x1111`. It recorded 650 cases, 650 pass cases, zero timeout or non-100% cases, and all 4032 valid ordered chiplet-router source-destination pairs delivered for every accepted fault mask. The T0053 comparison matrix is retained only for denominator-safe IA-XY comparison context: all `DEFT` rows passed, while IA-XY passed 68 rows and timed out in 27 rows.

## 6. Results and Evaluation

This section separates two measurement regimes. Sections 6.1.1 through 6.1.5 report finite-window synthetic-traffic behavior from the 150-run sweep; blank cells indicate that the supporting denominator is absent. Section 6.1.6 reports deterministic drain-mode validation after source cutoff and network drain. The latter validates eventual delivery within its fixture boundary and does not reinterpret the finite-window metrics.

### 6.1 Performance Results

All 150 planned simulator runs completed with return code `0`, and the generated report-support tables were cross-checked against the executed manifest, raw JSON stats, sweep summary, analysis run summary, and analysis comparison summary with zero mismatches.

The measured data set contains completed runs in which no packets were injected after the warm-up boundary. It records 54 individual zero-injection runs. At condition level, 12 cells have packet injection in all five seeds, 13 cells have packet injection in only some seeds, and 5 cells have no packet injection in any seed. The 5 empty-injection cells are all `XY` with `hotspot_3x10` traffic.

Under this fixed-window measurement policy, the `XY` hotspot cells cannot be compared with `DEFT` because the `XY` side injected zero packets in every hotspot fault-mask cell. Diagnosis showed that these `XY|hotspot_3x10` zero-injection cells are measured-window artifacts: with `-warmup 1000`, early `XY` traffic had already injected before the measured window and then stalled on topology-incompatible paths. Warm-up-0 diagnostic values are kept only as traceability evidence and are not reported as final performance results.

The `XY` uniform and localized cells injected packets in some seeds, but received zero packets in the measured window. Diagnosis classified these `XY|uniform` and `XY|localized_40` zero-received cells as standard `XY` topology incompatibility on `DEFT_2_5D`: cardinal-only `XY` cannot route unrestricted inter-chiplet traffic through the VL/hub/interposer path required by this topology. Therefore, side-by-side latency comparisons against `DEFT` are not supported.

#### 6.1.1 Artifact And Readiness Summary

| Item | Value |
| --- | --- |
| Planned and completed runs | 150 |
| Routing modes | `XY`, `DEFT` |
| Traffic profiles | `uniform`, `localized_40`, `hotspot_3x10` |
| Fault masks | `0x0000`, `0x0001`, `0x0011`, `0x0111`, `0x1111` |
| Seeds | `0,1,2,3,4` |
| Simulation window | `-sim 10000`, `-warmup 1000` |
| Raw stats rows | 150 |
| Condition cells | 30 |
| XY/DEFT pair rows | 15 |
| Individual zero-injection runs | 54 |
| Complete-injection condition cells | 12 |
| Partial-injection condition cells | 13 |
| Empty-injection condition cells | 5 |
| Cross-check mismatches | 0 |
| Interpretation scope | Descriptive fixed-window metrics |

#### 6.1.2 Coverage By Routing And Traffic

| Routing | Traffic | Runs | Nonempty injection runs | Zero-injection runs | Received runs | Injected packets | Received packets |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| DEFT | hotspot_3x10 | 25 | 22 | 3 | 16 | 336 | 134 |
| DEFT | localized_40 | 25 | 25 | 0 | 25 | 1016 | 542 |
| DEFT | uniform | 25 | 24 | 1 | 20 | 436 | 238 |
| XY | hotspot_3x10 | 25 | 0 | 25 | 0 | 0 | 0 |
| XY | localized_40 | 25 | 20 | 5 | 0 | 35 | 0 |
| XY | uniform | 25 | 5 | 20 | 0 | 5 | 0 |

#### 6.1.3 Condition-Level Descriptive Metrics

Reachability is `total_received_packets / total_injected_packets` within the condition. Latency is received-packet-weighted across runs with received packets. Mean network throughput is the exported finite-window mean across all five runs. The status labels are defined before the table to keep the wide table readable while preserving the source table terminology.

| Status label | Meaning |
| --- | --- |
| `complete_injection_cell` | All five seeds injected at least one packet in the measured window. |
| `partial_injection_cell` | Some seeds injected packets and some seeds injected none in the measured window. |
| `empty_injection_cell` | No seed injected packets in the measured window; reachability and latency stay blank. |

| Routing | Traffic | Fault mask | Fault rate (%) | Nonempty seeds | Empty seeds | Injected | Received | Reachability | Latency (cycles) | Mean network throughput | Status |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| DEFT | hotspot_3x10 | 0x0000 | 0 | 5 | 0 | 69 | 19 | 0.27536232 | 12.73684211 | 0.0034222222 | complete_injection_cell |
| DEFT | hotspot_3x10 | 0x0001 | 6.25 | 4 | 1 | 19 | 4 | 0.21052632 | 16.75 | 0.0007111111 | partial_injection_cell |
| DEFT | hotspot_3x10 | 0x0011 | 12.5 | 3 | 2 | 114 | 72 | 0.63157895 | 40.36111111 | 0.0126888889 | partial_injection_cell |
| DEFT | hotspot_3x10 | 0x0111 | 18.75 | 5 | 0 | 66 | 18 | 0.27272727 | 7.61111111 | 0.0034666667 | complete_injection_cell |
| DEFT | hotspot_3x10 | 0x1111 | 25 | 5 | 0 | 68 | 21 | 0.30882353 | 9.47619048 | 0.0043333333 | complete_injection_cell |
| DEFT | localized_40 | 0x0000 | 0 | 5 | 0 | 289 | 166 | 0.57439446 | 23.37951807 | 0.0294888889 | complete_injection_cell |
| DEFT | localized_40 | 0x0001 | 6.25 | 5 | 0 | 144 | 72 | 0.5 | 16.83333333 | 0.0129777778 | complete_injection_cell |
| DEFT | localized_40 | 0x0011 | 12.5 | 5 | 0 | 114 | 60 | 0.52631579 | 16.08333333 | 0.0112 | complete_injection_cell |
| DEFT | localized_40 | 0x0111 | 18.75 | 5 | 0 | 303 | 155 | 0.51155116 | 18.50967742 | 0.0285111111 | complete_injection_cell |
| DEFT | localized_40 | 0x1111 | 25 | 5 | 0 | 166 | 89 | 0.53614458 | 18.43820225 | 0.0160888889 | complete_injection_cell |
| DEFT | uniform | 0x0000 | 0 | 5 | 0 | 82 | 38 | 0.46341463 | 24.23684211 | 0.0071555556 | complete_injection_cell |
| DEFT | uniform | 0x0001 | 6.25 | 5 | 0 | 137 | 84 | 0.61313869 | 23.96428571 | 0.0149777778 | complete_injection_cell |
| DEFT | uniform | 0x0011 | 12.5 | 5 | 0 | 63 | 17 | 0.26984127 | 22.23529412 | 0.0032888889 | complete_injection_cell |
| DEFT | uniform | 0x0111 | 18.75 | 5 | 0 | 81 | 49 | 0.60493827 | 20.08163265 | 0.0086 | complete_injection_cell |
| DEFT | uniform | 0x1111 | 25 | 4 | 1 | 73 | 50 | 0.68493151 | 21.9 | 0.0087555556 | partial_injection_cell |
| XY | hotspot_3x10 | 0x0000 | 0 | 0 | 5 | 0 | 0 |  |  | 0 | empty_injection_cell |
| XY | hotspot_3x10 | 0x0001 | 6.25 | 0 | 5 | 0 | 0 |  |  | 0 | empty_injection_cell |
| XY | hotspot_3x10 | 0x0011 | 12.5 | 0 | 5 | 0 | 0 |  |  | 0 | empty_injection_cell |
| XY | hotspot_3x10 | 0x0111 | 18.75 | 0 | 5 | 0 | 0 |  |  | 0 | empty_injection_cell |
| XY | hotspot_3x10 | 0x1111 | 25 | 0 | 5 | 0 | 0 |  |  | 0 | empty_injection_cell |
| XY | localized_40 | 0x0000 | 0 | 4 | 1 | 7 | 0 | 0 |  | 0 | partial_injection_cell |
| XY | localized_40 | 0x0001 | 6.25 | 4 | 1 | 7 | 0 | 0 |  | 0 | partial_injection_cell |
| XY | localized_40 | 0x0011 | 12.5 | 4 | 1 | 7 | 0 | 0 |  | 0 | partial_injection_cell |
| XY | localized_40 | 0x0111 | 18.75 | 4 | 1 | 7 | 0 | 0 |  | 0 | partial_injection_cell |
| XY | localized_40 | 0x1111 | 25 | 4 | 1 | 7 | 0 | 0 |  | 0 | partial_injection_cell |
| XY | uniform | 0x0000 | 0 | 1 | 4 | 1 | 0 | 0 |  | 0 | partial_injection_cell |
| XY | uniform | 0x0001 | 6.25 | 1 | 4 | 1 | 0 | 0 |  | 0 | partial_injection_cell |
| XY | uniform | 0x0011 | 12.5 | 1 | 4 | 1 | 0 | 0 |  | 0 | partial_injection_cell |
| XY | uniform | 0x0111 | 18.75 | 1 | 4 | 1 | 0 | 0 |  | 0 | partial_injection_cell |
| XY | uniform | 0x1111 | 25 | 1 | 4 | 1 | 0 | 0 |  | 0 | partial_injection_cell |

Table 4 is a finite-window synthetic-traffic table. Its partial DeFT delivery ratios do not contradict the drain-mode reachability audit, because Table 4 counts packets delivered before a fixed simulation cutoff under ongoing synthetic injection, whereas the reachability audit stops injection and then waits for the network to drain.

#### 6.1.4 XY/DEFT Pairwise Readiness

No delta columns are included. These rows describe whether values can be displayed side by side, not whether either routing mode should be preferred.

| Traffic | Fault mask | XY status | DEFT status | Readiness | Interpretation note |
| --- | --- | --- | --- | --- | --- |
| hotspot_3x10 | 0x0000 | empty_injection_cell | complete_injection_cell | not_comparison_ready_xy_empty | XY injected zero packets in this measured cell; leave XY metric cells blank and do not compare. |
| hotspot_3x10 | 0x0001 | empty_injection_cell | partial_injection_cell | not_comparison_ready_xy_empty | XY injected zero packets in this measured cell; leave XY metric cells blank and do not compare. |
| hotspot_3x10 | 0x0011 | empty_injection_cell | partial_injection_cell | not_comparison_ready_xy_empty | XY injected zero packets in this measured cell; leave XY metric cells blank and do not compare. |
| hotspot_3x10 | 0x0111 | empty_injection_cell | complete_injection_cell | not_comparison_ready_xy_empty | XY injected zero packets in this measured cell; leave XY metric cells blank and do not compare. |
| hotspot_3x10 | 0x1111 | empty_injection_cell | complete_injection_cell | not_comparison_ready_xy_empty | XY injected zero packets in this measured cell; leave XY metric cells blank and do not compare. |
| localized_40 | 0x0000 | partial_injection_cell | complete_injection_cell | descriptive_reachability_only_latency_blank | Both modes have injection, but one mode has zero received packets; latency comparison is blank. |
| localized_40 | 0x0001 | partial_injection_cell | complete_injection_cell | descriptive_reachability_only_latency_blank | Both modes have injection, but one mode has zero received packets; latency comparison is blank. |
| localized_40 | 0x0011 | partial_injection_cell | complete_injection_cell | descriptive_reachability_only_latency_blank | Both modes have injection, but one mode has zero received packets; latency comparison is blank. |
| localized_40 | 0x0111 | partial_injection_cell | complete_injection_cell | descriptive_reachability_only_latency_blank | Both modes have injection, but one mode has zero received packets; latency comparison is blank. |
| localized_40 | 0x1111 | partial_injection_cell | complete_injection_cell | descriptive_reachability_only_latency_blank | Both modes have injection, but one mode has zero received packets; latency comparison is blank. |
| uniform | 0x0000 | partial_injection_cell | complete_injection_cell | descriptive_reachability_only_latency_blank | Both modes have injection, but one mode has zero received packets; latency comparison is blank. |
| uniform | 0x0001 | partial_injection_cell | complete_injection_cell | descriptive_reachability_only_latency_blank | Both modes have injection, but one mode has zero received packets; latency comparison is blank. |
| uniform | 0x0011 | partial_injection_cell | complete_injection_cell | descriptive_reachability_only_latency_blank | Both modes have injection, but one mode has zero received packets; latency comparison is blank. |
| uniform | 0x0111 | partial_injection_cell | complete_injection_cell | descriptive_reachability_only_latency_blank | Both modes have injection, but one mode has zero received packets; latency comparison is blank. |
| uniform | 0x1111 | partial_injection_cell | partial_injection_cell | descriptive_reachability_only_latency_blank | Both modes have injection, but one mode has zero received packets; latency comparison is blank. |

#### 6.1.5 Zero-Injection Run Summary

The full 54-run list is preserved in `external/noxim/other/generated/t0027_report_support_v1/zero_injection_runs.csv`.

| Routing | Traffic | Zero-injection runs |
| --- | --- | ---: |
| DEFT | hotspot_3x10 | 3 |
| DEFT | uniform | 1 |
| XY | hotspot_3x10 | 25 |
| XY | localized_40 | 5 |
| XY | uniform | 20 |

#### 6.1.6 Drain-Mode Post-Fix Validation And IA-XY Comparison

The drain-mode evaluations use opt-in source-cutoff plus drain semantics rather than the fixed-window policy used for Table 4. These results do not update the fixed-window condition metrics and do not relabel IA-XY as standard `XY`.

The DeFT all-pair reachability audit is summarized below.

| Item | Value |
| --- | --- |
| Routing mode | `DEFT` |
| Drain policy | Opt-in source cutoff plus drain |
| Traffic fixtures | 130 deterministic hardcoded fixtures |
| Seed | 0 |
| Fault model | Current physical bidirectional VL model |
| Accepted masks | `0x0000`, `0x0001`, `0x0011`, `0x0111`, `0x1111` |
| Simulator cases | 650 |
| Pass cases | 650 |
| Timeout or non-100% cases | 0 |
| Valid ordered pairs per mask | 4032 / 4032 delivered |
| Accepted masks with full pair delivery | 5 / 5 |
| Source fix indicated | No |

This audit supports a stronger DeFT reachability statement within a precise boundary: deterministic hardcoded fixtures, seed 0, opt-in drain mode, the current physical bidirectional VL fault model, and the five accepted masks listed in the table. Within that boundary, every accepted mask delivered all 4032 valid ordered chiplet-router source-destination pairs. This is an eventual-delivery result after injection cutoff and drain completion, not a finite-window throughput or latency result.

T0053 compared the same 19-fixture drain matrix between `DEFT` and `INTERPOSER_AWARE_XY`:

| Fixture group | Matched rows | IA-XY drain-completed rows | IA-XY timeout rows |
| --- | ---: | ---: | ---: |
| `route_family_pair` | 40 | 40 | 0 |
| `source_isolated` | 20 | 20 | 0 |
| `destination_stress` | 20 | 6 | 14 |
| `bounded_aggregate` | 5 | 1 | 4 |
| `bounded_low_load` | 5 | 1 | 4 |
| `all_pairs_aggregate` | 5 | 0 | 5 |
| **Total** | **95** | **68** | **27** |

The denominator-safe T0053 comparison table classifies 68 matched fixture/fault rows as `complete_delivery_both_modes` and 27 rows as `descriptive_only_timeout_or_non100`. The latter rows are reported only as timeout/non-100% evidence; they are not used for ranking, improvement percentages, or statistical conclusions.

For the IA-XY all-pairs aggregate rows, the five fault-mask cases stopped at `drain_timeout` after receiving 557, 1211, 888, 995, and 795 measured packets. These rows also retained source queues and in-network state at the timeout, so they remain descriptive-only.

### 6.2 Comparative Analysis

The fixed-window comparison with standard `XY` is not comparison-ready for latency or performance ranking. The pairwise readiness table records why: hotspot rows have no measured-window `XY` injection, and the uniform/localized rows that do inject on the `XY` side have zero received packets. These rows are useful for documenting the limitation of cardinal-only `XY` on `DEFT_2_5D`, but not for computing deltas.

The later drain-mode comparison uses `INTERPOSER_AWARE_XY`, not standard `XY`, because IA-XY can traverse the modeled interposer path. The T0053 drain summary shows that `DEFT` passed all 95 matched rows while IA-XY passed 68 rows and timed out in 27 rows. This supports only the matrix-scoped statement that `DEFT` completed the documented comparison matrix and that IA-XY had descriptive timeout rows in that same matrix. It does not support universal algorithm ranking, improvement percentages, or statistical conclusions.

### 6.3 Discussion

The implementation produced a complete Noxim extension surface, a validated fixed-window synthetic sweep, and drain-mode reachability evidence for DeFT. The principal interpretation constraint is the denominator of each measurement regime. In the fixed-window sweep, aggregated reachability is undefined when no packets were injected, and latency is undefined when no packets were received. Empty or partial injection cells therefore support descriptive reporting but not unqualified performance claims.

The stronger DeFT reachability claim is limited to the deterministic drain-mode audit in Section 6.1.6. It does not extend to stochastic traffic, finite-window throughput, universal timing, PARSEC/GEM5 workloads, single-direction endpoint fault modeling, or IA-XY behavior. The fixed-window Table 4 and the drain-mode audit answer different questions, so their results should be read as complementary rather than contradictory.

The comparison baseline also has a scope constraint. Standard `XY` is cardinal-only on `DEFT_2_5D` and does not traverse the VL/hub/interposer paths required for unrestricted inter-chiplet traffic. The drain-mode comparison therefore uses `INTERPOSER_AWARE_XY`, which must remain distinct from standard `XY`. Universal rankings, improvement percentages, latency deltas, and statistical conclusions require a broader validation policy than the current artifacts provide.

### 6.4 Reproducibility

The final LaTeX artifact is generated from `final_report/main.tex`, which was derived from `docs/FINAL_REPORT_DRAFT.md` and uses the same IEEE conference-style report template family as the extended proposal. The final report source is intentionally separated from the extended proposal source so the original archive and proposal files remain unchanged.

The code and experiment configuration are in the project repository, with the registered Noxim source tree at `external/noxim`. The validated Noxim build command is `./build.sh` from `external/noxim` in the documented WSL/Linux environment. The final fixed-window experiment commands, generated LUTs, JSON statistics, manifests, and summaries are preserved under `external/noxim/other/generated/t0026_final_sweep_v1/`, `external/noxim/other/generated/t0026_final_analysis_v1/`, `external/noxim/other/generated/t0027_report_support_v1/`, and `external/noxim/other/generated/t0028_final_report_results_v1/`. The drain-mode reachability and comparison artifacts are preserved under `external/noxim/other/generated/t0060_deft_reachability_audit_v1/` and `external/noxim/other/generated/t0053_drain_iaxy_deft_comparison_v1/`; each artifact set includes the relevant commands, fixtures, generated LUTs, logs, summaries, and manifests.

The final PDF was generated from `final_report/` using the documented TeX fallback sequence `pdflatex main.tex`, `bibtex main`, `pdflatex main.tex`, and `pdflatex main.tex`. The simulator final sweep was not rerun during final-report conversion, report revision, report integration, or packaging refresh.

## 7. Conclusion and Future Work

The project produced a traceable Noxim extension for `DEFT_2_5D` and a reproducible evaluation artifact set. The fixed-window synthetic sweep confirms that the planned 150-run matrix executed successfully and that generated summary tables cross-check against raw artifacts. Those fixed-window results remain descriptive because the measured data contains blank and partial cells and because standard `XY` is not an interposer-aware unrestricted baseline for this topology.

The strongest DeFT correctness evidence comes from the opt-in drain-mode all-pair audit: within deterministic hardcoded fixtures, seed 0, the current physical bidirectional VL fault model, and the accepted fault-mask ladder, all 650 `DEFT` cases passed and all 4032 valid ordered source-destination pairs delivered for every accepted mask. No source fix is indicated by that audit. Future work should address IA-XY timeout diagnosis, broader stochastic and statistical evaluation, directional endpoint fault modeling, traffic-profile-specific LUT demand inputs, non-empty hotspot measurements for standard `XY` control runs, and validated PARSEC/GEM5 trace support before expanding latency, throughput, ranking, or workload-level claims.

## References

1. Extended proposal, primary project requirements source: `Extended_Proposal.pdf`.
2. Taheri, Pasricha, and Nikdast, DeFT original paper, primary algorithmic reference: `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
3. Initial proposal context: `Proposal.pdf`.
4. Project architecture record: `docs/ARCHITECTURE.md`.
5. Project validation record: `docs/VALIDATION.md`.
6. T0028 report results draft: `external/noxim/other/generated/t0028_final_report_results_v1/report_results_draft.md`.
7. T0060 DeFT drain reachability audit artifacts: `external/noxim/other/generated/t0060_deft_reachability_audit_v1/`.
8. T0053 drain IA-XY versus DeFT comparison artifacts: `external/noxim/other/generated/t0053_drain_iaxy_deft_comparison_v1/`.
