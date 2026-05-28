# DeFT Final Project Presentation - Study Script

Recommended target time: 11 to 13 minutes.

Core message to remember: this project successfully built and validated a DeFT-oriented 2.5D Noxim simulator extension, but it reports the current results carefully because the fixed-window data set has blank and partial cells.

## Slide 1 - Title and Status

Hello everyone. My name is Yusuf Tahir Orhan, and today I will present the current status of my final project: DeFT for 2.5D chiplet networks.

The original goal was to extend the cycle-accurate Noxim simulator so that it can model a 2.5D chiplet system and evaluate DeFT, a deadlock-free and fault-tolerant routing algorithm. At this stage, the main progress is not just a proposal anymore. I now have an implemented simulator extension, a physical Vertical Link fault model, virtual-network enforcement, lookup-table-based DeFT routing, synthetic workloads, metrics export, a runner, and a final synthetic sweep.

The important caveat is that I will present the results as descriptive evidence. I am not claiming a final performance win yet, because some comparison cells are blank or partial.

## Slide 2 - What Changed After the Proposal

This slide summarizes the evolution from proposal to current project status.

In the proposal, the plan was to implement DeFT in Noxim, evaluate synthetic traffic and PARSEC/GEM5 traces, and compare against XY routing under Vertical Link fault scenarios.

The applied part is the Noxim implementation and validation workflow. I implemented the 2.5D topology, physical Vertical Link faults, two virtual networks, movement-transition filtering, schema-v1 lookup tables, DeFT route selection, synthetic traffic profiles, and machine-readable metrics.

The changed part is important. PARSEC/GEM5 trace support was deferred because the project workspace does not contain GEM5, PARSEC, checkpoints, trace generation scripts, or a validated trace schema. Also, standard XY turned out to be only a limited control baseline on this topology, because it is not interposer-aware.

## Slide 3 - Problem Definition

The problem is that 2.5D chiplet integration gives us a modular and scalable design, but it creates routing problems that are different from a normal 2D mesh.

For inter-chiplet communication, a packet may need to move inside the source chiplet, go down through a Vertical Link to the interposer, travel across the interposer, go back up through another Vertical Link, and finally move inside the destination chiplet.

This up-down-up path creates two coupled risks. The first risk is deadlock, because the route can create cyclic channel dependencies. The second risk is reliability, because Vertical Links are physical connections that may fail because of manufacturing defects or thermal stress.

So the project goal is to model these risks and evaluate a routing method that handles both.

## Slide 4 - Implemented System Model

The implemented model uses four CPU chiplets. Each chiplet has a 4 by 4 mesh, so there are 64 chiplet routers. The active interposer is modeled as an 8 by 8 mesh, so there are another 64 routers below the chiplets. In total, the topology contains 128 routers.

The packet endpoints remain only on chiplet routers. Interposer routers are internal transit routers, not application endpoints.

The model also contains 16 physical bidirectional Vertical Links, four per chiplet. The fault manager marks these links functional or faulty before the simulation begins. This keeps the fault model deterministic and inspectable.

## Slide 5 - Why Virtual Networks Are Needed

This slide responds directly to the feedback from the first presentation.

Virtual networks are needed because the up-down-up route can create a dependency cycle if all traffic shares the same channel class. For example, a packet may wait for a horizontal channel on the chiplet, then a down channel to the interposer, then a horizontal interposer channel, then an up channel back to a chiplet. If resources wait on each other in a cycle, deadlock becomes possible.

DeFT breaks this by separating the route into two ordered virtual networks. The rules are simple but powerful: VN.1 cannot go back to VN.0; in VN.0, Up-to-Horizontal movement is forbidden; and in VN.1, Horizontal-to-Down movement is forbidden.

The key idea is that packets can move forward through ordered channel classes, but they cannot move backward into a dependency cycle.

## Slide 6 - What the VNs Do in the Implementation

In my implementation, the two virtual networks are represented through the two virtual channels. VN.0 maps to VC 0, and VN.1 maps to VC 1. DeFT-enabled runs require exactly two VCs.

When a packet is routed, the router does not only ask which physical direction is next. It also checks whether that movement is legal for the packet's current virtual network. Illegal transitions are filtered before reservation. When a boundary transition must move traffic from VN.0 to VN.1, the selected output VC is stored in the reservation path and the flit is forwarded with that VC state.

The area overhead comes from the extra VC resources and control: per-VC buffering and arbitration, output-VC reservation, VN assignment and filtering logic, and boundary-router lookup tables. The DeFT paper reports less than 2 percent area overhead, but my project does not synthesize hardware, so I treat that as literature evidence, not a measured project result.

## Slide 7 - Fault-Aware Route Selection

DeFT also separates permanent faults from runtime routing.

At startup, the fault manager applies a physical Vertical Link mask, such as 0x0011. Then the DeFT lookup table is loaded. The table is keyed by the active fault mask, source chiplet, source router, and destination chiplet.

At runtime, the route uses the table to select a source-side Vertical Link and a destination-side entry. This avoids recalculating the full selection optimization during packet routing.

The route also fails closed. If a lookup entry is missing, or if the selected Vertical Link is not functional, the algorithm returns no legal output direction instead of silently inventing a path.

## Slide 8 - Implementation Evidence

This slide is included because a final presentation should show concrete implementation evidence, but I do not want to spend class time reading raw code line by line.

The implementation evidence is organized by code surface. The topology and Vertical Link model are handled by the DeFT topology helper and Noxim construction path. Startup permanent VL faults are handled by the fault-injection manager. Virtual networks are handled by the VN helper and router pipeline checks. The runtime DeFT route path uses the schema-v1 Vertical Link lookup-table loader and the registered DEFT routing algorithm.

I also implemented the experiment support around the simulator: JSON metrics export, runner manifests, and blank-aware analysis helpers. So this is not only a theoretical design; there is a concrete implementation surface behind each methodology component.

For validation, the important direct artifacts are the final sweep and the cross-checks. The final sweep completed 150 out of 150 planned runs, and the analysis cross-check reported zero mismatches. The claim boundary is still descriptive: the artifacts prove the workflow and finite-window measurements, not a final performance ranking.

## Slide 9 - Report Table 4 Summary

This slide is a presentation-friendly summary of Table 4 from the final report. The full Table 4 is too large for one slide, so I use the most important rows and the coverage bar.

The final synthetic sweep completed 150 simulator runs. The matrix contains two routing modes, three traffic profiles, five fault masks, and five random seeds. The cross-check found zero raw mismatches.

The table shows selected condition-level rows from Table 4. For example, some DEFT cells have packet injection and received packets, so reachability and latency values exist. But standard XY localized traffic can inject packets and still receive zero packets on this topology, which is why latency is blank.

The key interpretation is that concrete results exist, but ranking and improvement claims are still blocked. There are 30 condition cells: twelve complete, thirteen partial, and five empty. That is why the report uses coverage counts and limitations instead of unsupported improvement deltas.

## Slide 10 - Report Table 5 Summary

This slide summarizes Table 5 from the final report. It explains pairwise readiness, meaning whether XY and DEFT can be shown side by side for the same traffic and fault-mask condition.

The hotspot rows are marked XY-empty because the XY side injected zero packets in the measured window. The localized and uniform rows are marked latency-blank because the comparison has injection, but one side has no received packets, so latency cannot be compared.

So the key message is this: the current results are real, but Table 5 prevents me from making an unfair ranking claim. A fairer comparison needs a validated interposer-aware baseline and a new experiment matrix.

## Slide 11 - Limitations and Trade-Offs

The current blockers are explicit.

Blocked: PARSEC/GEM5 workload support is not claimed because the dependency and trace-generation workflow are absent.

Blocked: directional endpoint fault modeling is not implemented because the current model faults physical bidirectional Vertical Links.

Blocked: eventual-delivery claims require a separate drain-mode experiment, even though the drain mechanism itself has been smoke-validated.

There are also embedded-system trade-offs. DeFT improves resilience by using extra VC resources, VN control logic, and LUT storage. The design keeps that cost limited by using only two VCs, but the overhead still comes from real router resources. As systems scale, the LUT and validation burden also grows.

## Slide 12 - Conclusion and Future Work

To conclude, the project moved from a proposal to an implemented and validated simulator extension. The main achievements are the DEFT_2_5D topology, physical Vertical Link fault model, virtual-network transition enforcement, DeFT lookup-table path, synthetic workloads, metrics export, and reproducible analysis artifacts.

Before the final report submission, I would not strengthen the claims unless new validation supports it. I may update the report after presentation feedback, especially to include a clearer explanation of virtual networks and the latest deferred-work decisions, but I would keep the results descriptive.

Future work includes a versioned PARSEC/GEM5 trace schema, tiny trace fixtures, directional fault modeling, drain-based eventual-delivery experiments, a stronger interposer-aware baseline comparison, and eventually reinforcement-learning-based route optimization.

Thank you. I am ready for questions.

## Q&A Cheat Sheet

Q: Why do you need virtual networks?

A: Because inter-chiplet routing in 2.5D uses an up-down-up style path. Without VN separation, horizontal, down, interposer-horizontal, and up movements can form a cyclic channel dependency. DeFT uses two ordered virtual networks and forbids specific transitions so packets cannot move backward into that cycle.

Q: What do the virtual networks do in your simulator?

A: VN.0 and VN.1 are represented by VC 0 and VC 1. The router checks the candidate output direction against the VN transition rules before reservation. If a transition must move from VN.0 to VN.1, the selected output VC is carried through the reservation and forwarding path.

Q: Where does the area overhead come from?

A: It comes from extra virtual-channel resources and DeFT control state: per-VC buffers and arbitration, output-VC reservation, VN assignment/filtering logic, and boundary-router lookup tables. The original DeFT paper reports less than 2 percent overhead, but this project did not run hardware synthesis.

Q: Why did PARSEC/GEM5 change from proposed to deferred?

A: The proposal and paper justify PARSEC/GEM5 as a real-application evaluation path, but the current workspace does not include GEM5, PARSEC, checkpoints, traces, or a validated Noxim trace schema. Claim-safe trace support would require a separate dependency and validation task.

Q: Should the final report be updated now?

A: For tomorrow's presentation, no. I would present from the current validated report and not regenerate the PDF overnight. For the final submission deadline, yes, it can be updated after feedback, but only to clarify current status or add newly validated artifacts. I would not strengthen performance claims without new supporting validation.

Q: Why not claim DeFT is better than XY?

A: Because the standard XY baseline is not interposer-aware on this topology. It can stall or produce blank measured cells under unrestricted inter-chiplet traffic. The current data supports descriptive implementation and validation progress, not a performance ranking.

Q: What is the most important technical achievement?

A: The project established a traceable simulator foundation: topology, faults, virtual-network enforcement, lookup-table routing, synthetic workloads, metrics, runner, and analysis. This makes future stronger experiments possible without hiding current limitations.
