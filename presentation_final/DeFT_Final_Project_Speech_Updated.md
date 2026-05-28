# DeFT Final Project Presentation - Updated Speaker Script

Target length: about 11 to 13 minutes.

Delivery note: do not read every number in Table 4. Use it as evidence that the analysis is traceable, then explain the columns and the main interpretation.

## Slide 1 - Title

Good morning. My project is the implementation of DeFT, a deadlock-free and fault-tolerant routing algorithm for 2.5D chiplet networks, in the Noxim simulator.

The main idea is that inter-chiplet communication is different from a normal 2D mesh. Packets may need to leave a chiplet, go down to the active interposer, move horizontally there, and then go up into another chiplet. This creates two challenges: possible deadlock due to cyclic channel dependencies, and reliability problems when Vertical Links fail.

In this project, I modeled 128 routers in total: 64 chiplet routers and 64 interposer routers. I also modeled 16 physical bidirectional Vertical Links, startup permanent fault masks, and two virtual networks mapped onto two virtual channels.

## Slide 2 - What Changed After The Proposal Stage

This slide summarizes the evolution from the proposal to the current implementation.

At the proposal stage, the plan was to implement DeFT in a cycle-accurate Noxim extension, evaluate synthetic traffic and PARSEC/GEM5 traces, compare against XY routing, and report reachability, latency, and throughput.

The applied part is the main implementation progress. The project now has the DEFT_2_5D topology, physical Vertical Link fault modeling, two virtual-network transition enforcement, schema-v1 Vertical Link LUTs, DeFT route selection, synthetic traffic profiles, metrics export, a runner, analysis scripts, and a completed final synthetic sweep.

The changed part is also important. PARSEC/GEM5 was deferred because the dependency and trace pipeline are not present in the workspace. Also, standard XY is treated only as a limited control baseline because it is cardinal-only and does not naturally understand the interposer path. So the results are descriptive and blank-aware, not a claim that DeFT outperforms XY in every condition.

## Slide 3 - Two Coupled Risks

The motivation comes from two coupled risks in inter-chiplet traffic.

The first risk is deadlock. A packet can move horizontally inside a chiplet, go down through a Vertical Link, move horizontally on the interposer, and then go up into the destination chiplet. If these resource dependencies are not ordered carefully, the route can create a cycle.

The second risk is reliability. Vertical Links are the physical access points between a chiplet boundary router and the interposer. If one of these links fails, the chiplet may lose one path into or out of the interposer. DeFT tries to address both issues: virtual networks are used to break dependency cycles, and a fault-aware lookup table is used to avoid failed Vertical Links.

## Slide 4 - Router Pipeline

This slide shows the router pipeline view that I use to explain where DeFT fits into the simulator.

The model is a five-stage synchronous router pipeline. In the routing computation stage, the router decides the next output direction. For DeFT, this is also where the route can consult the Vertical Link lookup table. In the virtual-channel allocation stage, the router assigns or reserves the correct virtual channel, which also represents the current virtual network. Then switch allocation, switch traversal, and link traversal move the flit through the router and onto the next link.

The key point is that DeFT is not only a shortest-path routing choice. It also depends on virtual-network state and legal movement transitions. So the implementation has to connect route computation, virtual-channel reservation, and transition filtering. If one of these parts is inconsistent, the deadlock-freedom argument would not be safely represented in the simulator.

## Slide 5 - Concrete 2.5D Topology

This slide explains the implemented topology.

The chiplet layer has four chiplets, and each chiplet is a 4 by 4 mesh. The interposer is modeled as an 8 by 8 active mesh below the chiplets. Importantly, the four chiplets are not treated as one directly connected 8 by 8 chiplet mesh. Chiplet-local links only connect routers inside the same chiplet. Inter-chiplet movement must go through Vertical Links and the interposer.

The router ID space is 0 to 127. IDs 0 to 63 are chiplet routers, and IDs 64 to 127 are interposer routers. Packet endpoints are only 0 to 63 because synthetic traffic should inject from chiplet processing elements, not from internal interposer routers.

There are 16 physical bidirectional Vertical Links. The fault policy is startup permanent, meaning the fault mask is chosen before packet routing begins and stays fixed during the run.

## Slide 6 - Why Virtual Networks Are Needed

This is the most important algorithmic part of the presentation.

Without virtual-network separation, the same class of channel resources can wait on itself around an up-down-up route. For example, a packet may use a horizontal chiplet channel, then a down movement, then a horizontal interposer channel, then an up movement. If packets hold resources while waiting for the next one, this can create a cyclic dependency.

DeFT uses two virtual networks to impose an order on these dependencies. VN.0 maps to virtual channel 0, and VN.1 maps to virtual channel 1. The rules are: routing from VN.1 back to VN.0 is forbidden, VN.0 cannot perform an Up-to-Horizontal movement, and VN.1 cannot perform a Horizontal-to-Down movement.

In simple terms, the virtual networks do not create new physical paths. They create separate logical resource classes, and the transition rules prevent packets from moving in a way that would recreate the cycle.

## Slide 7 - What The VNs Do In The Implementation

In the implementation, the virtual-network idea appears in four steps.

First, each DeFT packet has a VN state through its virtual channel: VN.0 uses VC 0 and VN.1 uses VC 1. DeFT runs require exactly two virtual channels.

Second, the routing stage proposes candidate physical directions. Third, the VN transition filter rejects illegal movement patterns such as VN.1 to VN.0, Up-to-Horizontal in VN.0, and Horizontal-to-Down in VN.1. Fourth, the router reserves the selected output virtual channel and forwards the flit with that state.

This also explains the area overhead question. The overhead comes from extra per-virtual-channel buffer and control resources, output-VC reservation logic, VN assignment and filtering logic, and boundary-router LUT storage. The original DeFT paper reports less than 2 percent area overhead. In this project, I use that as literature evidence only, because I did not synthesize hardware.

The overhead is limited because DeFT uses only two virtual networks and the additional logic is concentrated around routing, transition checks, and boundary Vertical Link selection.

## Slide 8 - Faults And Runtime Route Choice

This slide separates permanent faults from runtime routing.

At startup, the fault manager applies a physical Vertical Link mask such as 0x0011. In the current model, a physical bidirectional VL is either functional or faulty for the whole run.

The schema-v1 LUT is keyed by the fault mask, source chiplet, source router, and destination chiplet. The selected LUT entry gives a source exit Vertical Link and a destination entry Vertical Link, while avoiding links that are marked faulty.

The important implementation safety rule is fail-closed behavior. If a LUT entry is missing, or if the selected Vertical Link is nonfunctional, the route returns no legal output. It does not silently invent a path. This is safer for validation, because unsupported cases remain visible instead of being hidden by fallback behavior.

## Slide 9 - Final Synthetic Sweep

The final synthetic sweep completed, but the results must be interpreted carefully.

The matrix has 150 completed runs: two routing modes, three traffic profiles, five fault masks, and five seeds. These form 30 condition cells, where each cell is one routing, traffic, and fault-mask combination across five seeds.

There were 54 zero-injection runs in the measured window. This does not mean the simulator failed. It means that after the warm-up boundary, some completed runs had no measured packet injection. The analysis cross-check found zero raw mismatches, so the generated summaries matched the raw JSON stats.

At condition level, 12 cells are complete, 13 are partial, and 5 are empty. This is why I call the results blank-aware. Empty and partial cells are not deleted from the analysis. They are kept visible so the report does not overstate the evidence.

## Slide 10 - Table 4

Table 4 is included for traceability. I will not read every row, but I will explain how to read it.

Each row is a condition-level summary. The routing column is either DeFT or standard XY. The traffic column is one of the synthetic traffic profiles. Uniform distributes destinations across chiplet routers. Localized_40 means 40 percent same-chiplet locality. Hotspot_3x10 uses three deterministic hotspot routers, each with a 10 percent destination share.

The mask column shows the physical VL fault mask. The fault-percent column reports the corresponding fault level. Nonempty is the number of seeds, out of five, that injected measured packets. Empty is the number of seeds with no measured injection. Injected and received are aggregate packet counts. Reachability is received divided by injected. Latency is the average delay for received packets only, so it is blank if no packet was received. Throughput is measured network throughput in flits per cycle.

The status column summarizes injection coverage. C means complete injection cell, P means partial injection cell, and E means empty injection cell.

The main interpretation is this: DeFT produces meaningful packet-carrying cells across many conditions, but the fixed-window sweep still does not prove eventual delivery or 100 percent reachability. Standard XY has many blank or zero-received cells because it is cardinal-only and does not provide a proper unrestricted inter-chiplet path through the VL and interposer structure. Therefore, this table supports a descriptive status report, not a strong performance ranking.

## Slide 11 - Key Result And Claim Safety

The key result is technical progress plus honest claim safety.

What succeeded is the implementation itself: a 2.5D Noxim topology, permanent Vertical Link fault model, DeFT virtual-network enforcement, LUT-backed routing, synthetic traffic, metric export, runner, and analysis pipeline.

What limited the comparison is standard XY. Standard XY compares coordinates and chooses cardinal directions. But in this 2.5D topology, unrestricted inter-chiplet routes require Vertical Link traversal and interposer traversal. So standard XY can stall or receive zero packets in measured cells.

This means I should not claim that DeFT outperforms XY based on this data. The safe claim is that DeFT support was implemented and evaluated descriptively under the final synthetic sweep. A stronger comparison would require a validated interposer-aware baseline and new validated artifacts.

## Slide 12 - Conclusion And Future Work

To conclude, the current project status is that a working DeFT-oriented Noxim extension exists. It includes topology, routing, faults, virtual networks, lookup tables, synthetic traffic, metric export, runner support, and analysis support. The final synthetic sweep completed, and the final report package is ready.

Before final report submission, the plan is to investigate the gap between the reachability behavior expected from DeFT and the current fixed-window simulation results. If the gap comes from simulator or implementation issues, I will correct them and validate the fix. I will also implement or use a proper interposer-aware comparison algorithm, then compare it against the DeFT implementation only with newly validated artifacts.

For future work, the most important items are a versioned PARSEC/GEM5 trace schema, tiny trace fixtures before any large workload import, directional fault modeling, drain-based eventual-delivery experiments, a stronger interposer-aware XY comparison, and possibly RL-based Vertical Link selection.

My final message is that the project implemented the main DeFT mechanisms, validated the artifact chain that currently exists, and kept the result interpretation honest about what the data can and cannot prove.

## Q&A Anchors

### Why did we not reach 100 percent reachability?

Because the final sweep is a fixed-window measurement, not an eventual-delivery experiment. Packets can remain in flight or stall at the end of the measurement window. Also, the current implementation uses a physical bidirectional fault model, synthetic traffic, and a finite simulation window. So the table should not be interpreted as the same claim as the original paper's full reachability statement.

### Why is XY limited here?

Standard XY is a cardinal 2D route. It does not naturally know that inter-chiplet traffic must go down to the interposer, move across the interposer, and go up into the destination chiplet. On DEFT_2_5D, chiplet-layer cardinal links do not connect different chiplets directly. So unrestricted inter-chiplet XY traffic is topology-incompatible unless a new interposer-aware XY baseline is implemented and validated.

### Why do virtual networks cause area overhead?

Virtual networks are implemented through virtual channels. Extra virtual channels need buffers, control state, arbitration and reservation logic, and VN transition checks. DeFT also needs LUT storage and lookup logic near boundary routing decisions. This is why there is area overhead, even though there are no extra physical links.

### Should code be shown during the talk?

Only if asked during Q&A. For the main 10 to 15 minute talk, the architecture and results table are more useful than code screenshots. If code is requested, the best files or classes to mention are DeftTopology for router and VL mapping, DeftFaultInjectionManager for startup fault masks, DeftVirtualNetwork and Router for VN enforcement, Routing_DEFT for route selection and LUT use, deft_vl_lut_generator.py for offline LUT generation, and GlobalStats plus the experiment runner for metrics and artifacts.

### Why no PARSEC/GEM5 results?

Because the workspace does not contain a reproducible GEM5/PARSEC trace pipeline, trace schema, full-system setup, or Noxim-ready trace input. Adding it without a tiny validated schema and fixture would create unsupported workload claims. It is therefore listed as future work.

### What is the safest one-sentence result claim?

The project implemented a DeFT-oriented 2.5D Noxim extension and completed a traceable synthetic sweep, but the current evidence is descriptive and blank-aware rather than a strong XY-versus-DeFT performance ranking.
