# DeFT Routing for 2.5D Chiplet Networks: Final Report Draft

Draft status: assembled during `T0029` and reviewed for submission readiness during `T0030` on 2026-05-09.

## Draft Status And Claim Safety Notice

This draft is assembled from the project source documents and the cross-checked T0028/T0027/T0026 report-support artifacts. It is intentionally conservative. It does not order routing modes, compute deltas, make inferential claims, compare latency between `XY` and `DEFT`, or turn blank cells into measured values.

Metric cells are left blank when the supporting denominator is absent. Reachability is blank when no packets were injected in the measured window. Latency is blank when no packets were received in the measured window.

Submission format note: no PDF, DOCX, PPTX, or other final artifact format was requested during `T0030`, so this reviewed Markdown draft remains the current deliverable.

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

Citation wording in this draft is intentionally source-scoped: project requirements are attributed to `Extended_Proposal.pdf`, DeFT algorithm details are attributed to the original DeFT paper, and implementation or validation provenance is attributed to the tracked project documentation and generated report-support artifacts.

Assumption: This draft uses the existing synthetic-traffic final sweep as the current reportable evaluation set.

Blocked: Real-application PARSEC/GEM5 trace evaluation is not represented in the T0026/T0027/T0028 final report-support artifacts and would require a separate documented setup and validation task before inclusion.

## Abstract

This project implements and evaluates a Noxim-based `DEFT_2_5D` simulator extension for studying DeFT-style routing in a 2.5D chiplet network. The implementation models four chiplets on an active interposer, a deterministic physical Vertical Link inventory, startup permanent VL faults, DeFT VN assignment rules, movement-transition filtering, schema-v1 offline VL lookup tables, explicit `XY` baseline modes, synthetic traffic profiles, machine-readable metrics export, and traceable experiment/analysis helpers.

The final sweep completed 150 simulator runs across routing modes, traffic profiles, fault masks, and seeds. The generated results are valid for descriptive report support only. The measured data set contains empty and partial injection cells, including 54 completed runs with zero packets injected after the warm-up boundary. Therefore, this draft reports finite-window measurements with coverage counts and limitations, while avoiding unsupported performance conclusions.

## 1. Introduction

2.5D chiplet integration connects multiple smaller dies through an active interposer. This architecture can improve modularity, but it also makes inter-chiplet routing sensitive to Vertical Link availability and deadlock-avoidance constraints. DeFT is a routing approach proposed for this setting. It combines VN assignment rules with fault-aware VL selection so inter-chiplet packets can be routed through the interposer while respecting deadlock-avoidance constraints.

The project goal is to extend Noxim so DeFT-style behavior can be studied in a reproducible simulator workflow. The implementation in this repository focuses on a four-chiplet system with 4x4 chiplet-local meshes, a modeled active interposer layer, four physical bidirectional VLs per chiplet, permanent startup VL faults, two VCs for VN.0 and VN.1, and final descriptive metrics for reachability, average latency, and network throughput.

Assumption: The current implementation models 16 physical bidirectional VLs and uses the T0025 policy for reporting fault rates. This differs from single-direction endpoint fault modeling and is preserved as a limitation.

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

## 3. Implementation Summary

The implementation was built task by task and recorded in `docs/TASKS.md`, `docs/PROGRESS.md`, `docs/ARCHITECTURE.md`, and `docs/DECISIONS.md`.

Main implemented surfaces:

- `external/noxim/src/DeftTopology.*`: layer-aware router mapping, physical VL records, boundary-router inventory, and topology validation.
- `external/noxim/src/DeftFaultInjectionManager.*`: startup permanent physical VL fault configuration and validation.
- `external/noxim/src/DeftVirtualNetwork.*`: VN/VC mapping helpers and DeFT VN assignment support.
- `external/noxim/src/routingAlgorithms/Routing_DEFT.*`: runtime DeFT route selection through schema-v1 VL LUT entries.
- `external/noxim/src/DeftVerticalLinkLut.*`: schema-v1 VL LUT loader and validator.
- `external/noxim/config_examples/`: `DEFT_2_5D` topology, `XY` baselines, and synthetic traffic configurations.
- `external/noxim/other/deft_vl_lut_generator.py`: deterministic offline VL LUT generator.
- `external/noxim/other/deft_experiment_runner.py`: traceable experiment launcher.
- `external/noxim/other/deft_analysis_artifacts.py`: mechanical final-analysis artifact generator.
- `external/noxim/src/GlobalStats.*` and `external/noxim/src/ProcessingElement.*`: machine-readable metrics export and injected-packet counters.

The implementation preserves Noxim's existing extension surfaces where possible. It uses explicit configuration and helper artifacts rather than embedding final experiment assumptions directly into routing logic.

Assumption: Generated artifacts under `external/noxim/other/generated/` are report-support outputs and remain traceable to their manifests.

## 4. Evaluation Method

The final sweep policy was defined in `T0025` and executed in `T0026`. The sweep matrix was:

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

The final sweep contains exactly 150 planned and completed simulator runs. No post-injection drain phase is included in the current fixed-window policy.

Assumption: A zero-injection run is a completed simulator run with `total_injected_packets == 0` in the measured stats window, not a failed run.

Blocked: The current runner policy does not evaluate eventual delivery after a post-injection drain phase.

Blocked: The current physical bidirectional fault model does not represent the original paper's single-direction 3.125% fault case.

## 5. Validation Provenance

The final report-support results are traceable through these generated artifacts:

- T0026 final sweep output: `external/noxim/other/generated/t0026_final_sweep_v1/`.
- T0026 final analysis output: `external/noxim/other/generated/t0026_final_analysis_v1/`.
- T0027 report-support output: `external/noxim/other/generated/t0027_report_support_v1/`.
- T0028 claim-safe results draft: `external/noxim/other/generated/t0028_final_report_results_v1/report_results_draft.md`.

T0026 validation established that the executed manifest had `mode: execute`, `run_count: 150`, 150 completed runs, and 150 return code `0` runs. All 150 JSON stats files existed and contained the T0020 metric fields.

T0027 validation derived blank-aware condition and pair tables from T0026 raw artifacts and cross-checked them against the T0026 sweep summary, analysis run summary, and analysis comparison summary.

T0028 validation converted the T0027 report-support tables into claim-safe prose and Markdown tables without rerunning simulations. The T0028 manifest keeps `claims_allowed: false`.

## 6. Results

The results in this section are copied or assembled from the T0028 claim-safe results draft. They are finite-window descriptive measurements. Blank cells are intentional and should remain blank.

All 150 planned simulator runs completed with return code `0`, and the generated T0027 report-support tables were cross-checked against the T0026 executed manifest, raw JSON stats, sweep summary, analysis run summary, and analysis comparison summary with zero mismatches. The upstream report-support manifest keeps `claims_allowed: false`.

The measured data set contains completed runs in which no packets were injected after the warm-up boundary. T0027 records 54 individual zero-injection runs. At condition level, 12 cells have packet injection in all five seeds, 13 cells have packet injection in only some seeds, and 5 cells have no packet injection in any seed. The 5 empty-injection cells are all `XY` with `hotspot_3x10` traffic.

Under this fixed-window measurement policy, the `XY` hotspot cells cannot be compared with `DEFT` because the `XY` side injected zero packets in every hotspot fault-mask cell. The `XY` uniform and localized cells injected packets in some seeds, but received zero packets in the measured window. Therefore, side-by-side latency comparisons against `DEFT` are not supported.

### 6.1 Artifact And Readiness Summary

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
| Claim state | `claims_allowed: false` |

### 6.2 Coverage By Routing And Traffic

| Routing | Traffic | Runs | Nonempty injection runs | Zero-injection runs | Received runs | Injected packets | Received packets |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| DEFT | hotspot_3x10 | 25 | 22 | 3 | 16 | 336 | 134 |
| DEFT | localized_40 | 25 | 25 | 0 | 25 | 1016 | 542 |
| DEFT | uniform | 25 | 24 | 1 | 20 | 436 | 238 |
| XY | hotspot_3x10 | 25 | 0 | 25 | 0 | 0 | 0 |
| XY | localized_40 | 25 | 20 | 5 | 0 | 35 | 0 |
| XY | uniform | 25 | 5 | 20 | 0 | 5 | 0 |

### 6.3 Condition-Level Descriptive Metrics

Reachability is `total_received_packets / total_injected_packets` within the condition. Latency is received-packet-weighted across runs with received packets. Mean network throughput is the exported finite-window mean across all five runs. The status labels are defined before the table to keep the wide table readable while preserving the original T0027/T0028 terminology.

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

### 6.4 XY/DEFT Pairwise Readiness

No delta columns are included. These rows describe whether values can be displayed side by side, not whether either routing mode should be preferred.

| Traffic | Fault mask | XY status | DEFT status | Readiness | Claim-safe note |
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

### 6.5 Zero-Injection Run Summary

The full 54-run list is preserved in `external/noxim/other/generated/t0027_report_support_v1/zero_injection_runs.csv`.

| Routing | Traffic | Zero-injection runs |
| --- | --- | ---: |
| DEFT | hotspot_3x10 | 3 |
| DEFT | uniform | 1 |
| XY | hotspot_3x10 | 25 |
| XY | localized_40 | 5 |
| XY | uniform | 20 |

## 7. Limitations

Assumption: T0028 text is report-ready descriptive support, not a new analysis layer.

Assumption: Aggregated reachability is blank when no packets were injected.

Assumption: Latency is blank when no packets were received.

Blocked: Empty or partial injection cells cannot support unqualified performance claims.

Blocked: XY hotspot cells injected zero packets for all seeds and fault masks in the measured window.

Blocked: The current data set does not support XY/DEFT latency comparisons because the XY side has zero received packets wherever it injected packets.

Blocked: Stronger result statements, non-empty XY hotspot measurements, latency comparisons, single-direction fault cases, and eventual-delivery checks require separate documented validation or rerun policy.

Blocked: PARSEC/GEM5 trace evaluation remains outside the current final-sweep artifact set.

## 8. Conclusion

The project produced a traceable Noxim extension for `DEFT_2_5D` and a reproducible final-sweep artifact set. The final report-support data confirms that the planned 150-run matrix executed successfully and that generated summary tables cross-check against raw artifacts. The reportable results should remain descriptive because the measured fixed-window data contains blank and partial cells.

The safest final conclusion is that the implementation and report-support workflow are in place, while stronger experimental claims require an explicitly scoped follow-up validation policy.

## References

1. Extended proposal, primary project requirements source: `Extended_Proposal.pdf`.
2. Taheri, Pasricha, and Nikdast, DeFT original paper, primary algorithmic reference: `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
3. Initial proposal context: `Proposal.pdf`.
4. Project architecture record: `docs/ARCHITECTURE.md`.
5. Project validation record: `docs/VALIDATION.md`.
6. T0028 claim-safe results draft: `external/noxim/other/generated/t0028_final_report_results_v1/report_results_draft.md`.
