# DeFT Final Project Presentation Study Guide

This document consolidates the technical explanations, table meanings, module summaries, and Q&A answers needed to study for the final project presentation.

## 1. Core Project Message

The project implements a DeFT-oriented 2.5D chiplet-network extension in Noxim. It models four CPU chiplets on an active interposer, permanent Vertical Link faults, two virtual networks, LUT-based DeFT routing, synthetic traffic profiles, machine-readable metrics, experiment runners, and blank-aware analysis.

The safest presentation claim is:

> This project implemented and validated a DeFT-oriented 2.5D Noxim extension. The results are real finite-window measurements, but because several XY/DEFT pairs are empty or latency-blank, the report presents descriptive results instead of unsupported performance-improvement claims.

Do not say:

> DeFT is faster than XY in our final results.

Do say:

> The implementation and measurement pipeline are in place, but the current fixed-window data set does not support a final ranking claim.

## 2. High-Level System Model

The system models a 2.5D chiplet network:

- Four CPU chiplets.
- Each chiplet has a 4x4 mesh, so there are 64 chiplet routers.
- The active interposer is modeled as an 8x8 mesh, so there are 64 interposer routers.
- Total routers: 128.
- Packet endpoints are chiplet routers only, IDs 0..63.
- Interposer routers are internal transit routers, IDs 64..127.
- There are 16 physical bidirectional Vertical Links, four per chiplet.

Inter-chiplet traffic follows this conceptual path:

1. Move inside the source chiplet.
2. Reach a source-side boundary router.
3. Go down through a Vertical Link to the interposer.
4. Move across the interposer.
5. Go up through a Vertical Link into the destination chiplet.
6. Move inside the destination chiplet to the final router.

## 3. Important Technical Terms

### 2.5D Integration

2.5D integration places multiple chiplets side by side on an interposer. It improves scalability and yield compared with one large monolithic die, but it creates routing and reliability challenges.

### Chiplet

A chiplet is a smaller die used as part of a larger package. In this project, each chiplet is modeled as a 4x4 mesh of routers.

### Network-on-Chip / NoC

A NoC is the router-based communication fabric inside a chip or chiplet. Packets move through routers instead of using one shared bus.

### Noxim

Noxim is a cycle-accurate NoC simulator. It simulates packet generation, routing, buffering, and delivery over clock cycles.

### Router

A router receives flits from input ports, chooses an output direction, reserves a virtual channel, and forwards flits.

### Processing Element / PE

A PE is a packet source or destination endpoint. In this project, only chiplet routers are traffic endpoints.

### Active Interposer

The active interposer is the routing layer below the chiplets. It carries inter-chiplet traffic between chiplet footprints.

### Vertical Link / VL

A Vertical Link connects a chiplet boundary router to an interposer router. VLs are the main fault-sensitive physical links in this model.

### Boundary Router

A boundary router is a chiplet router connected to a VL. It is the entry or exit point between a chiplet and the interposer.

### Intra-Chiplet Traffic

Traffic whose source and destination are inside the same chiplet.

### Inter-Chiplet Traffic

Traffic whose source and destination are in different chiplets. It must use VL and interposer traversal.

### Horizontal, Down, and Up Movement

- Horizontal: movement within the same layer using North, East, South, or West directions.
- Down: movement from chiplet layer to interposer layer through a VL.
- Up: movement from interposer layer to chiplet layer through a VL.

### Deadlock

Deadlock occurs when packets wait on each other in a cycle, so none can make progress. 2.5D up-down-up traffic can create cyclic channel dependencies even if each individual chiplet mesh is deadlock-free.

### Fault Tolerance

Fault tolerance is the ability to keep routing packets even when some physical links fail. DeFT attempts to avoid faulty VLs by choosing alternative functional VLs.

## 4. DeFT Concepts

### DeFT

DeFT stands for Deadlock-Free and Fault-Tolerant routing. It has two main ideas:

- Use virtual-network rules to avoid deadlock.
- Use fault-aware VL selection through lookup tables to tolerate VL failures.

### Virtual Network / VN

A virtual network is a logical channel class. DeFT uses two VNs: VN.0 and VN.1.

The core purpose of VNs is to break dependency cycles. Inter-chiplet routing can create a cycle if all traffic shares the same channel class. By separating traffic into ordered VN classes, DeFT prevents packets from moving backward into a cyclic dependency.

### Virtual Channel / VC

A VC is the hardware mechanism used to implement separate logical channels. In this project:

- VN.0 maps to VC 0.
- VN.1 maps to VC 1.
- DeFT-enabled runs require exactly two VCs.

### VN Rules

The DeFT rules are:

- Rule 1: VN.1 to VN.0 is forbidden; VN.0 to VN.1 is allowed.
- Rule 2: In VN.0, Up-to-Horizontal movement is forbidden.
- Rule 3: In VN.1, Horizontal-to-Down movement is forbidden.

These rules create ordered channel classes and prevent cyclic dependencies.

### Why VNs Cause Area Overhead

VNs cause area overhead because they are implemented through VCs. Each extra VC requires:

- Buffer storage.
- VC state.
- VC allocation and arbitration logic.
- Output-VC reservation state.
- VN assignment and transition-control logic.

The original DeFT paper reports less than 2 percent area overhead. This project does not synthesize hardware, so the overhead statement is literature-based, not a project measurement.

## 5. Routing and Fault Terms

### LUT / Lookup Table

A LUT stores precomputed VL selections. Instead of solving VL optimization at runtime, the DeFT route path loads a schema-v1 LUT and looks up the selected source exit VL and destination entry VL.

### Fault Mask

A fault mask is a hexadecimal bitset describing which physical VLs are faulty.

Examples:

- 0x0000: no faulty VLs.
- 0x0001: one physical VL fault.
- 0x0011: two physical VL faults.
- 0x0111: three physical VL faults.
- 0x1111: four physical VL faults, which is 25 percent of the 16 physical VLs.

### Startup Permanent Fault

A startup permanent fault is applied before simulation routing begins. The faulty VL state remains fixed throughout the run.

### Fail-Closed Behavior

Fail-closed means the route returns no legal direction if a selected LUT entry is missing or nonfunctional. It does not silently invent an unsupported path.

## 6. Traffic Profiles

### Uniform Traffic

Traffic destinations are distributed broadly across the network. This is a general synthetic traffic profile.

### Localized_40 Traffic

40 percent of traffic attempts to remain within the same chiplet. This models locality, where some communication is local and some is inter-chiplet.

### Hotspot_3x10 Traffic

Traffic is concentrated toward three hotspot nodes, each with a hotspot effect of 10 percent. This stresses congestion behavior.

### PARSEC/GEM5

PARSEC/GEM5 was part of the proposal and the original DeFT paper's real-application evaluation context. It was deferred in this project because the workspace does not contain a reproducible GEM5/PARSEC setup, checkpoints, traces, trace-generation scripts, or a validated Noxim trace schema.

Safe statement:

> PARSEC/GEM5 remains future work until a versioned trace schema, tiny fixture, mapping policy, provenance, and smoke validation exist.

## 7. Baseline Terms

### Standard XY

Standard XY is a 2D mesh routing algorithm. It compares current and destination x/y coordinates and moves through cardinal directions only.

Why it is limited here:

- It assumes a flat 2D mesh.
- It does not know how to go down to the interposer or up to a chiplet.
- It does not select source and destination VLs.
- It can stall on unrestricted inter-chiplet traffic in the DEFT_2_5D topology.

Safe statement:

> Standard XY was tested, but it is cardinal-only and not interposer-aware, so it is a limited control baseline rather than a fair unrestricted 2.5D baseline.

### Interposer-Aware XY / IA-XY

IA-XY is a later exploratory baseline that includes explicit interposer traversal. It is separate from standard XY. It may be useful for future comparisons, but the current final report does not use it for strong ranking claims.

## 8. Metrics

### Injected Packets / Inj.

The number of packets injected into the network during the measured window.

### Received Packets / Recv.

The number of packets that reached their destination during the measured window.

### Reachability / Reach.

Reachability is:

```text
received packets / injected packets
```

Important: this project's reachability is finite-window packet delivery. It is not the same as proving eventual topological reachability.

### Latency

Latency is the average time for received packets to travel from source to destination. If no packets are received, latency is blank because there are no delay samples.

### Throughput / Thput.

Throughput measures how much data the network delivers per unit time. In this project, it is reported in flits per cycle.

### Flit

A flit is a flow-control unit, or a small piece of a packet. A packet may contain multiple flits.

### Warm-Up

Warm-up is the initial simulation period excluded from measurement. It avoids measuring startup transients. Some zero-injection cases are related to the warm-up boundary and fixed measurement window.

### Fixed-Window Measurement

The simulation runs for a fixed number of cycles. If a packet is still in the network when the simulation ends, it is not counted as received.

### Drain Mode

Drain mode stops injection and waits for the network to empty or time out. This project implemented and smoke-validated opt-in drain mode, but the final sweep did not use a drain policy. Therefore, the final report does not claim eventual delivery.

## 9. Why Our Results Did Not Show 100 Percent Reachability

The original DeFT paper reports strong reachability under VL fault scenarios up to 25 percent, assuming network connectivity remains available.

The project table does not measure exactly the same thing. It measures finite-window packet delivery:

```text
Reachability = packets received before simulation ends / packets injected after warm-up
```

Reasons the measured value can be below 1.0:

- The final sweep used a fixed simulation window.
- No post-injection drain phase was used in the final sweep.
- Some packets may still be in flight when the simulation ends.
- Congestion and backpressure can delay delivery.
- The synthetic traffic and Noxim implementation are not an exact reproduction of the paper's full evaluation setup.
- Some condition cells are partial or empty.

Safe presentation answer:

> Our reported reachability is finite-window packet delivery, not eventual topological reachability. Since the final sweep did not use a post-injection drain phase, packets still in flight at the end of the run are not counted as received. Therefore, the current measurements do not reproduce the paper's 100 percent reachability claim.

## 10. Final Report Table 4: Condition-Level Descriptive Metrics

Table 4 answers:

> What was measured for each routing, traffic, and fault condition?

Column meanings:

| Column | Meaning |
| --- | --- |
| Routing | Routing algorithm: DEFT or XY. |
| Traffic | Synthetic traffic profile: uniform, localized_40, or hotspot_3x10. |
| Mask | VL fault mask, such as 0x0000 or 0x1111. |
| Fault | Fault percentage represented by the mask. |
| Nonempty | Number of seeds, out of 5, that injected at least one packet in the measured window. |
| Empty | Number of seeds, out of 5, that injected no packets in the measured window. |
| Inj. | Total injected packets in the measured window. |
| Recv. | Total received packets in the measured window. |
| Reach. | Recv. / Inj. |
| Latency | Average latency for received packets. Blank if Recv. is 0. |
| Thput. | Throughput in flits per cycle. |
| Status | C, P, or E condition-cell status. |

Status meanings:

| Status | Full Name | Meaning |
| --- | --- | --- |
| C | complete_injection_cell | All five seeds had measured packet injection. |
| P | partial_injection_cell | Some seeds had measured packet injection and some did not. |
| E | empty_injection_cell | No seed had measured packet injection. |

How to explain Table 4:

> Table 4 contains the condition-level metrics from the final sweep. It shows real injected and received packet counts, reachability, latency, and throughput. However, some cells are partial or empty, so the table supports descriptive reporting rather than a strong performance-improvement claim.

## 11. Final Report Table 5: XY/DEFT Pairwise Readiness

Table 5 answers:

> Can XY and DEFT be compared safely for this traffic and fault-mask pair?

Column meanings:

| Column | Meaning |
| --- | --- |
| Traffic | The traffic profile being compared. |
| Fault mask | The VL fault mask for both routing modes. |
| XY status | C/P/E status for XY under that condition. |
| DEFT status | C/P/E status for DEFT under that condition. |
| Readiness | Whether the pair is comparison-ready or blocked. |

Readiness meanings:

| Readiness | Meaning |
| --- | --- |
| XY-empty | The XY side injected zero packets in the measured cell, so the pair cannot be compared. |
| latency-blank | Both modes may have injection, but one side has no received packets, so latency comparison is blocked. |

How to explain Table 5:

> Table 5 is the claim-safety table. It explains why the current results are not a ranking claim. Many pairs are XY-empty or latency-blank, so the report avoids delta columns and does not claim that DeFT outperforms XY.

## 12. Module Summary

### DeftTopology

Defines the 2.5D router identity model, chiplet/interposer decoding, physical VL inventory, boundary-router lookup, and validation of the topology model.

What to say:

> DeftTopology is the source of truth for router IDs, chiplet ownership, interposer IDs, and Vertical Link endpoints.

### NoC::buildDeft2D

Constructs the DEFT_2_5D graph inside Noxim: chiplet routers, interposer routers, local links, interposer links, and VL links.

What to say:

> This is where the simulator instantiates the 128-router 2.5D topology.

### DeftFaultInjectionManager

Applies startup permanent VL faults, validates fault masks, and ensures chiplet connectivity constraints.

What to say:

> This module turns a configured fault mask into functional/faulty VL state before routing begins.

### DeftVirtualNetwork

Assigns VN.0/VN.1 and enforces legal movement transitions.

What to say:

> This is the implementation of the deadlock-avoidance rules.

### Router.cpp

Integrates the routing pipeline with VN filtering and output VC reservation. It checks whether candidate output directions are legal under the current VN.

What to say:

> The router does not only choose a physical direction; it also checks whether that movement is legal for the packet's virtual network.

### DeftVerticalLinkLut

Loads and validates the schema-v1 LUT, then provides runtime lookup of source exit and destination entry VLs.

What to say:

> The LUT turns the active fault mask and source/destination context into selected VLs.

### Routing_DEFT

Implements the DEFT route path. It uses the LUT to route to source exit VL, across the interposer, through destination entry VL, and finally to the destination chiplet router.

What to say:

> Routing_DEFT is where fault-aware DeFT routing is selected at runtime.

### Routing_XY

Implements standard 2D XY routing. It is useful as a limited control baseline, but it is not an interposer-aware 2.5D baseline.

What to say:

> Standard XY is cardinal-only and assumes a flat mesh, so it is limited on unrestricted inter-chiplet traffic.

### GlobalStats

Exports injected packets, received packets, reachability, latency, throughput, routing mode, traffic mode, and active fault mask.

What to say:

> This module creates the machine-readable metrics used in the final tables.

### ProcessingElement

Generates packets and assigns source VN state for DeFT-enabled runs.

What to say:

> The PE is the packet source and initializes packet-level routing state.

### deft_vl_lut_generator.py

Generates schema-v1 VL lookup tables for fault masks.

What to say:

> This creates the offline routing data consumed by the runtime LUT loader.

### deft_experiment_runner.py

Creates and executes experiment matrices, records commands, manifests, logs, and stats paths.

What to say:

> The runner makes the final sweep reproducible.

### deft_analysis_artifacts.py

Consumes run outputs and produces summary CSVs, comparison summaries, report scaffolds, and blank-aware artifacts.

What to say:

> The analysis helper converts raw stats into report-ready, claim-safe tables.

## 13. Best Code Surfaces to Show in Class

If you show code, do not read long files. Open only small, meaningful sections.

Recommended order:

1. `external/noxim/src/DeftVirtualNetwork.cpp`
   - Show source VN assignment and transition logic.
   - This directly answers the instructor's virtual-network feedback.

2. `external/noxim/src/Router.cpp`
   - Show output VC selection and VN transition filtering.
   - This proves the VN rules are actually used in the router pipeline.

3. `external/noxim/src/routingAlgorithms/Routing_DEFT.cpp`
   - Show `route()` and LUT lookup.
   - This proves the DEFT route path exists.

4. `external/noxim/src/DeftFaultInjectionManager.cpp`
   - Show startup fault application.
   - This proves fault scenarios are modeled.

5. `external/noxim/src/GlobalStats.cpp`
   - Show injected/received/reachability export.
   - This proves the tables come from machine-readable metrics.

Short code-demo sentence:

> I will not read the code line by line, but these are the key implementation surfaces: VN assignment, router-side transition filtering, LUT-backed DEFT routing, startup fault injection, and metrics export.

## 14. Common Q&A Answers

### Why do we need virtual networks?

Because 2.5D inter-chiplet paths use horizontal, down, interposer-horizontal, and up movements. If all traffic shares one channel class, these movements can form a cyclic dependency. DeFT uses two ordered virtual networks to prevent packets from moving backward into the cycle.

### Why do VNs create area overhead?

Because VNs are implemented with VCs. Extra VCs need buffers, state, arbitration, reservation logic, and transition-control logic inside the router.

### Did you test XY?

Yes. Standard XY was tested, but it is a flat 2D mesh algorithm. It does not know how to use Vertical Links or the interposer, so it is a limited control baseline, not a fair unrestricted 2.5D baseline.

### Why did the project not reach 100 percent reachability?

The table reports finite-window packet delivery, not eventual topological reachability. Packets still in flight at the end of the simulation are not counted as received, and the final sweep did not use drain mode.

### Why did you defer PARSEC/GEM5?

The workspace lacks a reproducible GEM5/PARSEC setup, checkpoints, traces, trace-generation scripts, and a validated Noxim trace schema. Supporting PARSEC/GEM5 safely requires a separate trace-pipeline task.

### Should the final report be updated?

For the presentation, use the current validated report. After feedback, update the report only to clarify current status or add newly validated artifacts. Do not strengthen claims unless new validation supports them.

### What is the most important technical contribution?

The project establishes a traceable Noxim implementation foundation: topology, VL faults, VN rules, LUT-based DeFT routing, synthetic traffic, metrics export, runner, and analysis.

## 15. Presentation Flow Cheat Sheet

1. Problem: 2.5D chiplets introduce deadlock and VL fault risks.
2. Proposed method: DeFT with VN rules and fault-aware VL selection.
3. Implemented work: Noxim DEFT_2_5D topology, faults, VN, LUT, routing, metrics, runner, analysis.
4. Methodology changes: PARSEC/GEM5 deferred; standard XY treated as limited baseline.
5. VN explanation: VNs break dependency cycles and map to two VCs.
6. Results: final sweep completed 150 runs, with real metrics.
7. Limitations: fixed-window, no final drain experiment, partial/empty cells, no strong ranking claim.
8. Future work: PARSEC/GEM5 trace schema, directional faults, drain-based experiments, stronger IA-XY comparison, RL-based routing.

Final sentence to memorize:

> The implementation is real and traceable, the measurement artifacts are complete, but the current data set is intentionally reported with claim-safety limits.

