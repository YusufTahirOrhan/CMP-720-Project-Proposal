# Target Architecture

This document describes the planned target architecture for implementing DeFT in Noxim. It is based on `Extended_Proposal.pdf`, `Proposal.pdf`, and the original DeFT paper located at `C:/Users/9500203/Downloads/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.

`Extended_Proposal.pdf` is the primary project requirements source. The original DeFT paper is the primary algorithmic reference for DeFT routing, VN rules, and VL selection. `Proposal.pdf` is initial project context.

## Overall Project Goal

Planned: Extend the cycle-accurate Noxim simulator to model a 2.5D chiplet network and evaluate DeFT, a deadlock-free and fault-tolerant routing algorithm for inter-chiplet communication.

The implementation must evaluate DeFT against baseline XY routing using reachability, average latency, and network throughput under synthetic traffic and Vertical Link fault scenarios.

## 2.5D Chiplet Topology Model

Planned:

- Four CPU chiplets are integrated on an active interposer.
- Each chiplet contains a 4x4 2D mesh Network-on-Chip.
- Each chiplet has four bidirectional Vertical Links.
- Boundary routers connect chiplet-local meshes to the active interposer.
- Inter-chiplet traffic follows an up-down-up path through the interposer.
- Inter-chiplet routing uses two intermediate destinations: a selected source-side Vertical Link and a selected destination-side interposer or Vertical Link target.

Assumption: The exact active interposer mesh dimensions are not specified in the proposal. A conservative implementation should document the chosen mapping before coding.

## Chiplet Model

Planned:

- Each chiplet has a stable `chiplet_id`.
- Each chiplet owns 16 local routers arranged as a 4x4 mesh.
- Each local router is attached to a processing element that may generate traffic.
- Each chiplet has exactly four Vertical Links located at boundary routers.

## Active Interposer Model

Planned:

- The active interposer is modeled as a routing layer below the chiplets.
- Interposer routers carry traffic between chiplet footprints.
- Vertical Links connect chiplet boundary routers to interposer routers.

Assumption: Interposer routing can reuse mesh-style routing behavior unless Noxim integration requires a different representation.

## Router Model

Planned router categories:

- Chiplet router: router inside a chiplet-local mesh.
- Boundary router: chiplet router directly attached to a Vertical Link.
- Interposer router: router on the active interposer layer.

Router metadata should support:

- Router ID.
- Coordinates.
- Router category.
- Chiplet ownership when applicable.
- Boundary router status.
- Attached Vertical Link IDs when applicable.

## Boundary Router Concept

Planned:

- Boundary routers are the interface between intra-chiplet routing and interposer routing.
- Boundary routers read VL selection lookup tables for inter-chiplet traffic.
- Boundary routers participate in DeFT VN reassignment rules.
- Boundary routers are the primary integration point for source-chiplet exit selection and destination-chiplet entry behavior.

## Vertical Link Concept

Planned:

- A Vertical Link connects one chiplet boundary router to one active interposer router.
- Each Vertical Link has a stable ID.
- Each Vertical Link belongs to exactly one chiplet.
- Vertical Links are bidirectional in the system model.
- Vertical Links can be marked functional or faulty by the Fault Injection Manager.
- DeFT deadlock-freedom must not depend on restricting Vertical Link choices.

Assumption: Faults are represented at the Vertical Link level unless later code inspection requires directional link fault states.

## Fault Injection Manager

Planned:

- Runs before the first simulation cycle.
- Reads fault-rate configuration and random seed.
- Selects permanent faulty Vertical Links.
- Ensures at least one functional Vertical Link remains per chiplet.
- Exposes current fault state to routing and LUT lookup logic.

Assumption: Faults model permanent microbump or Vertical Link defects, not transient failures.

## DeFT Routing Pipeline

Planned high-level pipeline:

1. Classify packet as intra-chiplet or inter-chiplet.
2. Use XY routing for intra-chiplet traffic.
3. For inter-chiplet traffic, assign or preserve VN state according to DeFT rules.
4. At source-side boundary routers, select an exit Vertical Link using the VL LUT and current fault state.
5. Route downward to the active interposer.
6. Route horizontally through the active interposer.
7. Select and use a functional destination-side Vertical Link.
8. Route upward into the destination chiplet.
9. Route locally to the destination processing element.

## VN.0 / VN.1 Assignment Rules

Planned:

- If the current router is the source:
  - If the source is in the interposer, destination chiplet, or boundary set, use round-robin assignment between VN.0 and VN.1.
  - If the destination is on a different chiplet, assign VN.0.
- If the current router is a boundary router:
  - If the packet is going to the interposer, use round-robin reassignment between VN.0 and VN.1.
  - If the packet is coming from the interposer, go to or remain in VN.1.
- Otherwise, preserve the previously assigned VN.

Assumption: The exact interpretation of "source in destination chiplet or boundaries" must be mapped carefully to Noxim packet and router metadata during implementation.

Paper alignment note: The original DeFT paper also states that intra-chiplet packets may use both VNs because they do not use vertical ports.

## VN Transition Restrictions

Planned:

- VN.1 to VN.0 transition is forbidden.
- Up-to-Horizontal movement in VN.0 is forbidden.
- Horizontal-to-Down movement in VN.1 is forbidden.
- The implementation must preserve exactly two VCs: one for VN.0 and one for VN.1.

These restrictions are high risk because they are central to the deadlock-freedom guarantee.

## Offline VL Selection LUT

Planned:

- Lookup tables are generated offline and loaded during simulator initialization.
- Boundary routers query the LUT using current fault state and routing context.
- Each inter-chiplet packet needs two VL-related selections: one on the source chiplet toward the interposer and one on the interposer or destination side toward the destination chiplet.
- The generator evaluates candidate Vertical Link assignments and minimizes a cost function combining:
  - Manhattan distance from router to Vertical Link.
  - Load imbalance across functional Vertical Links.
- The proposal uses a weighting coefficient `rho = 0.01`.

Assumption: A practical LUT key should include at least fault state, source chiplet, source router, and destination chiplet. The exact schema should be decided before implementation.

Assumption: The implementation should support the original paper's intended model of offline analysis with runtime lookup under observed fault state.

## Synthetic Traffic Models

Planned:

- Uniform: packets are distributed uniformly across destination nodes.
- Localized: 40% of generated packets remain within the same source chiplet.
- Hotspot: 3 hotspot nodes receive additional directed traffic with 10% injection rate.

## Fault Scenarios

Planned:

- Static Vertical Link faults injected at simulation startup.
- Fault rates up to 25%.
- No chiplet may be completely disconnected from the interposer.

Assumption: The proposal contains ambiguity around whether percentages are counted over physical bidirectional Vertical Links or directional links. The original paper reports 32 total Vertical Links for the four-chiplet fault analysis, which suggests directional or endpoint-level counting. This must be resolved before final experiment automation.

## Evaluation Metrics

### Reachability

Planned: Ratio of successfully delivered packets to total injected packets.

### Average Latency

Planned: Average cycles from packet injection at source processing element to delivery at destination processing element, including buffering and router pipeline delays.

### Network Throughput

Planned: Delivered flits per cycle per active IP node, measured consistently across baseline XY and DeFT runs.

## Baseline Comparison with XY Routing

Planned:

- XY routing in a fault-free topology establishes the upper-bound reference.
- XY routing with injected faults demonstrates baseline degradation, failures, or deadlock behavior.
- DeFT runs use the same traffic and fault scenarios for fair comparison.
