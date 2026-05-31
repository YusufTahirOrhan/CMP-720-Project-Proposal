# Architecture Decision Records

This document records project decisions that affect implementation, validation, or development process.

## ADR-0001: Use `Extended_Proposal.pdf` as the Primary Technical Source

- **Date:** 2026-05-04
- **Status:** Accepted
- **Context:** The repository contains both an initial proposal and an extended proposal.
- **Decision:** `Extended_Proposal.pdf` is the primary technical source for requirements, architecture, algorithm behavior, and evaluation scope.
- **Consequences:** Future implementation decisions should be checked against `Extended_Proposal.pdf` first.

## ADR-0002: Use `Proposal.pdf` as Initial Project Context

- **Date:** 2026-05-04
- **Status:** Accepted
- **Context:** The initial proposal describes the original project motivation and topic approval context.
- **Decision:** `Proposal.pdf` is used only as initial project context.
- **Consequences:** If `Proposal.pdf` and `Extended_Proposal.pdf` differ, `Extended_Proposal.pdf` takes precedence.

## ADR-0003: Exclude Peer Evaluation Material

- **Date:** 2026-05-04
- **Status:** Accepted
- **Context:** The repository contains a peer evaluation document unrelated to implementation.
- **Decision:** The peer evaluation document is out of scope and must be ignored completely.
- **Consequences:** It must not influence requirements, design, tasks, evaluation, or project documentation.

## ADR-0004: Use English for All Project Artifacts

- **Date:** 2026-05-04
- **Status:** Accepted
- **Context:** The project needs consistent documentation and traceability across future Codex sessions.
- **Decision:** All project documentation, comments, identifiers, commit messages, logs, and task notes must be in English.
- **Consequences:** Non-English prompts must be summarized in English before being recorded in project documentation.

## ADR-0005: Develop Task by Task

- **Date:** 2026-05-04
- **Status:** Accepted
- **Context:** DeFT routing and Noxim simulation behavior are high-risk implementation areas.
- **Decision:** Development will proceed through small, explicit, reviewable tasks.
- **Consequences:** Codex must work only on the selected task and update tracking documents after task completion.

## ADR-0006: Validate Each Task When Possible

- **Date:** 2026-05-04
- **Status:** Accepted
- **Context:** Simulator changes can introduce subtle routing or deadlock regressions.
- **Decision:** Each task should have validation when a valid command is known.
- **Consequences:** Validation results must be recorded. If validation cannot be run, the reason must be documented.

## ADR-0007: Do Not Invent Build or Simulation Commands

- **Date:** 2026-05-04
- **Status:** Accepted
- **Context:** Noxim source code and build files are not currently present in the repository.
- **Decision:** Build, test, validation, and simulation commands must be discovered from the repository or provided by the user.
- **Consequences:** Until commands are confirmed, documentation must state that commands are unknown.

## ADR-0008: Use the Original DeFT Paper as the Algorithmic Reference

- **Date:** 2026-05-04
- **Status:** Accepted
- **Context:** The project and thesis are based on the original DeFT paper by Taheri, Pasricha, and Nikdast.
- **Decision:** The original DeFT paper is the primary algorithmic reference for DeFT routing behavior, VN assignment, VN transition restrictions, Vertical Link selection, fault-tolerance analysis, and baseline interpretation. A local ignored copy is kept at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
- **Consequences:** Future DeFT-specific implementation tasks must check this paper in addition to the proposal documents. `Extended_Proposal.pdf` remains the primary project requirements source.

## ADR-0009: Provide Next Prompt and Commit Message After Each Task

- **Date:** 2026-05-04
- **Status:** Accepted
- **Context:** The project should preserve memory across Codex sessions and make continuation easy.
- **Decision:** After each completed task, Codex must provide a ready-to-send prompt for the next recommended task and a suggested commit message for the completed work.
- **Consequences:** `docs/PROGRESS.md` should record the next prompt and suggested commit message. Final task responses should include both items.

## ADR-0010: Register Noxim Fork Submodule at `external/noxim`

- **Date:** 2026-05-04
- **Status:** Accepted
- **Context:** T0023 required the Noxim source location to be explicit before baseline build validation and future DeFT implementation tasks. The user corrected an accidental root-level Noxim submodule addition and confirmed the intended project fork.
- **Decision:** Use `external/noxim` as the registered Noxim submodule. The submodule URL is `https://github.com/YusufTahirOrhan/noxim`. Treat this submodule as the modifiable Noxim fork for this project.
- **Consequences:** T0003 and later source-inspection tasks should use `external/noxim` unless a later decision replaces this source path. Future Noxim implementation work should modify the fork through this submodule when the selected task explicitly calls for source changes. Noxim source must not be vendored directly into the main repository. Baseline build and regression commands must still be verified before they become validated project commands.

## ADR-0011: Keep the Original DeFT Paper as an Ignored Local Reference

- **Date:** 2026-05-05
- **Status:** Accepted
- **Context:** The original DeFT paper should remain easy to access from the project workspace, but third-party paper content should not be committed to the repository.
- **Decision:** Copy the original DeFT paper into `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` for local use and ignore that exact PDF path in `.gitignore`.
- **Consequences:** Future sessions can use the local workspace copy when present. Clones that do not have the PDF should obtain it from the user or another allowed local source and place it at the documented ignored path.

## ADR-0012: Use WSL Ubuntu for Noxim Build Validation on Windows 11

- **Date:** 2026-05-05
- **Status:** Accepted
- **Context:** The project is being developed on Windows 11. The documented Noxim build flow uses Bash, GNU Make, and `g++`, and the current Windows PATH does not provide those tools. `wsl.exe` exists, but WSL is not installed yet.
- **Decision:** Keep editing, documentation, and repository management on Windows 11, but use WSL Ubuntu for Noxim build validation, regression execution, and simulator runs once WSL is installed.
- **Consequences:** T0003 should continue in WSL Ubuntu. Native Windows PowerShell should not be treated as a validated Noxim build environment unless the documented Bash/GNU Make/G++ flow is later proven there.

## ADR-0013: Keep Noxim Build Scripts and Makefiles LF-Normalized for WSL

- **Date:** 2026-05-05
- **Status:** Accepted
- **Context:** The Windows checkout converted Noxim shell scripts and Makefiles to CRLF. WSL failed to execute `./build.sh` because the shebang was read as `bash\r`.
- **Decision:** Normalize only Noxim build scripts and Makefiles to LF line endings and set the Noxim submodule local Git config `core.autocrlf=false`.
- **Consequences:** WSL can execute the documented Noxim build flow. This decision changes no DeFT behavior, routing logic, topology logic, VN logic, fault injection logic, or simulation logic. Future Windows Git operations should avoid converting these build files back to CRLF.

## ADR-0014: Use Existing Noxim Extension Surfaces for Future DeFT Work

- **Date:** 2026-05-05
- **Status:** Accepted
- **Context:** T0005 inspected `external/noxim` and mapped the existing extension points for configuration, topology construction, routing, selection, traffic, statistics, power, logging, tracing, and regression assets.
- **Decision:** Future DeFT work should integrate through existing Noxim surfaces where feasible: `ConfigurationManager.*` and `GlobalParams.*` for configuration, `NoC.*` and `Tile.h` for topology construction, `Router.*` and `DataStructs.h` for routing pipeline and flit/VC metadata, registered implementations under `routingAlgorithms/*` for routing behavior, registered implementations under `selectionStrategies/*` for output selection, `ProcessingElement.*` plus the global traffic table/hardcoding classes for traffic generation, and `GlobalStats.*`/`Stats.*`/`Power.*` for reporting.
- **Consequences:** DeFT changes should be smaller and easier to validate because they will follow Noxim's existing ownership boundaries. Any future task that needs to bypass these surfaces must document why the existing surface is insufficient before modifying lower-level simulator behavior.

## ADR-0015: Use Global-Footprint Router IDs for the 2.5D Mapping

- **Date:** 2026-05-05
- **Status:** Accepted
- **Context:** T0006 needed a deterministic router ID and coordinate design for four 4x4 chiplets on an active interposer before topology code changes. Noxim's existing mesh model uses flat row-major node IDs and a two-field `Coord`, while the 2.5D topology needs chiplet ownership and a distinct interposer layer.
- **Decision:** Use chiplet router IDs `0..63` as row-major positions in an 8x8 global chiplet footprint, and use active-interposer router IDs `64..127` as the same 8x8 footprint offset by 64. Packet source and final destination IDs remain chiplet router IDs only. Chiplet ownership is derived from the global footprint coordinate. Each physical bidirectional VL is identified by `vl_id = chiplet_id * 4 + vl_slot`, where slots are `NORTH`, `EAST`, `SOUTH`, and `WEST`.
- **Consequences:** A chiplet router and the interposer router directly below it share the same footprint index, which keeps VL endpoint mapping simple. Future 2.5D code must use a layer-aware mapping helper instead of treating `id2Coord()` and `Router::getNeighborId()` as sufficient for all router IDs. Existing mesh behavior must remain unchanged for normal `MESH` configurations.

## ADR-0016: Do Not Create Task Branches Automatically

- **Date:** 2026-05-05
- **Status:** Accepted
- **Context:** During T0006, an attempted branch creation for the supplied task branch failed with a `.git` ref permission error. The user then instructed Codex not to create new branches for tasks ever again and to continue on the existing branch.
- **Decision:** Future tasks must not create or switch Git branches automatically, even when a prompt includes a suggested branch name. Work should continue on the currently checked-out branch unless the user explicitly asks for a branch operation in that future message.
- **Consequences:** Final task summaries should report the next-task branch field as `None; continue on the existing branch` unless the user changes this instruction. This decision does not prohibit providing commit-message suggestions or using normal non-branch Git status validation.

## ADR-0017: Add `DEFT_2_5D` as the Construction-Only Topology Mode

- **Date:** 2026-05-06
- **Status:** Accepted
- **Context:** T0007 needed the smallest selectable Noxim topology mode that instantiates the T0006 four-chiplet plus active-interposer graph without implementing DeFT routing, VN behavior, VL fault behavior, or LUT selection.
- **Decision:** Add a new Noxim topology string, `DEFT_2_5D`, backed by a layer-aware `DeftTopology` helper and `NoC::buildDeft2D()`. The mode constructs chiplet router IDs `0..63`, interposer router IDs `64..127`, four isolated 4x4 chiplet meshes, one 8x8 active-interposer mesh, and the 16 deterministic physical bidirectional VLs from T0006.
- **Consequences:** Existing `MESH`, `BUTTERFLY`, `BASELINE`, and `OMEGA` topology behavior remains separate. Future DeFT routing tasks can select `DEFT_2_5D` without overloading ordinary `MESH` dimensions. T0007's topology-aware statistics compatibility exists only so construction smoke runs can exit cleanly; it is not final evaluation-metric work.

## ADR-0018: Use `DIRECTION_HUB` as the Temporary VL Wiring Carrier

- **Date:** 2026-05-06
- **Status:** Accepted
- **Context:** Noxim currently has four cardinal directions plus `DIRECTION_LOCAL` and `DIRECTION_HUB`; it has no explicit `DIRECTION_UP` or `DIRECTION_DOWN`. Adding new physical directions in T0007 would affect router arrays, buffers, NoP state, and routing behavior beyond topology construction.
- **Decision:** For T0007 only, wire each physical bidirectional Vertical Link through the existing tile/router hub port. Winoc hub mode is rejected for `DEFT_2_5D` in this task to avoid sharing that port with radio-hub behavior.
- **Consequences:** The 2.5D graph can be constructed and inspected without changing the router direction count. Future DeFT routing and VN-transition tasks must still decide and document final Up/Down semantics; they must not assume `DIRECTION_HUB` is the final algorithmic port representation.

## ADR-0019: Centralize Physical Vertical Link State in `DeftTopology`

- **Date:** 2026-05-06
- **Status:** Accepted
- **Context:** T0008 needed the smallest reusable Vertical Link data model after T0007. The T0007 helper already owned deterministic VL endpoint records, but future fault injection and routing tasks need a central place to query and mutate functional state without changing route selection yet.
- **Decision:** Keep each physical bidirectional VL as a `DeftTopology::VerticalLinkInfo` record and centralize default functional state, mutation helpers, functional-link queries, bidirectional endpoint lookup, and structural validation in `external/noxim/src/DeftTopology.*`.
- **Consequences:** Later fault injection and routing tasks can reuse the same stable VL IDs, chiplet ownership, slots, endpoints, and functional-state queries. T0008 does not implement fault-rate configuration, startup-time random fault injection, fault-mask generation, DeFT route selection, VN behavior, or LUT generation. Fault-mask validation and any directional VL accounting remain future tasks.

## ADR-0020: Derive Boundary Router Inventory from the Vertical Link Model

- **Date:** 2026-05-06
- **Status:** Accepted
- **Context:** T0009 needed a reusable boundary-router identification/query contract after T0008. The existing `DeftTopology` helper already knew which chiplet endpoint belonged to each physical VL, so creating a second independent boundary-router endpoint table would duplicate source-of-truth data.
- **Decision:** Represent boundary routers through `DeftTopology::BoundaryRouterInfo` as a derived view of the centralized `VerticalLinkInfo` records. Provide inventory, per-chiplet lookup, router-ID lookup, VL-ID lookup, and structural validation helpers in `external/noxim/src/DeftTopology.*`.
- **Consequences:** Future DeFT routing, VN assignment, and VL LUT tasks can query boundary-router identity without duplicating topology data. Boundary-router identity remains inspectable and stable, while physical VL identity and functional state remain centralized in the VL model. T0009 does not implement route selection, VN behavior, fault injection, or LUT generation.

## ADR-0021: Configure T0010 Faults Over Physical Vertical Link IDs

- **Date:** 2026-05-07
- **Status:** Accepted
- **Context:** T0010 needed startup-time permanent VL fault-state setup after the centralized physical VL model and boundary-router inventory. The proposal and original paper still leave a project-level ambiguity between physical bidirectional VLs and directional VL accounting for percentage-based fault rates.
- **Decision:** For T0010, configure startup faults directly over the current 16 physical bidirectional VL IDs. Support either an explicit `deft_faulty_vertical_links` list or a seed-controlled `deft_vl_fault_count`, and keep those modes mutually exclusive.
- **Consequences:** T0010 avoids premature percentage conversion and directional accounting decisions while still enabling reproducible startup fault masks. Future fault-mask validation and experiment automation must decide how proposal-level percentages map onto physical or directional VL counts before final sweeps. T0010 does not alter physical VL wiring, DeFT routing behavior, route selection, VN behavior, or VL LUT behavior.

## ADR-0022: Validate Fault Masks Against the Current Physical VL Model

- **Date:** 2026-05-07
- **Status:** Accepted
- **Context:** T0011 needed the smallest validation surface after T0010 so explicit and generated startup fault masks are reproducible and rejected when invalid for the current physical VL model. The source documents still contain a physical-vs-directional ambiguity for final percentage accounting.
- **Decision:** Validate T0011 masks over the existing 16 physical bidirectional VL IDs from `DeftTopology`. The validator normalizes masks, rejects duplicate/out-of-range/nonexistent IDs, rejects impossible mask sizes, rejects masks that disconnect any chiplet, and treats four physical VL faults as the current physical-model 25% validation target for inspectability.
- **Consequences:** DeFT routing, VN behavior, VL LUT generation, metrics, experiments, and golden outputs remain unchanged. Future percentage-based experiment automation must still resolve whether final fault-rate sweeps use physical bidirectional VLs, directional VL channels, or another explicitly documented accounting basis.

## ADR-0023: Represent DeFT VN State with Existing VC IDs

- **Date:** 2026-05-07
- **Status:** Accepted
- **Context:** T0012 inspected the DeFT source requirements and the current Noxim data path. The extended proposal requires exactly two VCs, one for VN.0 and one for VN.1. The original DeFT paper assumes one VC per VN for the evaluated design. Noxim already stores `vc_id` in `Packet`, `Flit`, and `RouteData`, and router buffers are indexed by VC. Adding a separate VN field would risk divergence from the actual VC buffer used for flow control.
- **Decision:** For DeFT-enabled runs, represent VN.0 and VN.1 directly with the existing VC ID: `vc_id == 0` is VN.0 and `vc_id == 1` is VN.1. Do not add a parallel `vn_id` field unless a future implementation task proves the existing VC ID cannot safely carry the state. DeFT-enabled routing should require exactly two configured VCs.
- **Consequences:** Baseline Noxim routing remains unchanged. Future VN assignment work should wrap the mapping in a small helper API and validate that DeFT flits use only VC 0 or VC 1. Future boundary-router reassignment from VN.0 to VN.1 must add output-VC-aware reservation and forwarding behavior, because the current router reservation path assumes the input VC and output VC are the same index.

## ADR-0024: Make DeFT Boundary Reassignment Output-VC-Aware

- **Date:** 2026-05-07
- **Status:** Accepted
- **Context:** T0013 implemented DeFT VN assignment rules after T0012 mapped VN.0/VN.1 directly onto VC 0/VC 1. Boundary-router reassignment can legally move a packet from VN.0 to VN.1. The pre-existing router pipeline reserved outputs, checked downstream full status, and forwarded flits using only the input buffer VC, which would make a reassigned flit unsafe.
- **Decision:** For `DEFT_2_5D`, select an explicit output VC during head-flit reservation and store that output VC in the reservation entry. Forwarding still reads from the original input buffer VC, but it checks downstream full status for the selected output VC and writes the flit with `Flit::vc_id` set to that same selected output VC. Existing hub users keep the old input-VC reservation view.
- **Consequences:** DeFT boundary reassignment can safely move VN.0 traffic to VN.1 without adding a parallel VN field. `DEFT_2_5D` now requires exactly two configured VCs. This decision does not implement final VL selection or full movement-transition enforcement; those remain future tasks.

## ADR-0025: Enforce DeFT VN Movement Restrictions by Filtering Output Directions

- **Date:** 2026-05-07
- **Status:** Accepted
- **Context:** T0014 needed to enforce the original DeFT paper's VN movement restrictions after T0013 added source/boundary VN assignment and output-VC-aware reservation. The implementation still uses `DIRECTION_HUB` as the physical Vertical Link carrier and does not yet have final semantic Up/Down ports or the fault-aware VL LUT.
- **Decision:** For `DEFT_2_5D`, derive movement context from the current router layer, boundary-router status, `RouteData::dir_in`, and the candidate output direction, then filter illegal output directions before reservation. Do not add packet/flit movement-history metadata for this task. Treat chiplet-boundary hub input as Up, chiplet-boundary hub output as Down, and cardinal ports as Horizontal. Preserve VN.0 for Horizontal-to-Down movement instead of allowing boundary round-robin to select VN.1; reject Horizontal-to-Down when the selected output VN is VN.1; force Up-to-Horizontal traffic to VN.1 through the existing output-VC reassignment path.
- **Consequences:** VN.1 to VN.0, Up-to-Horizontal in VN.0, and Horizontal-to-Down in VN.1 are enforced without changing baseline routing outside `DEFT_2_5D`. Because final DeFT route selection and VL LUT generation are still future work, this layer can reject illegal candidates but cannot create an alternate legal route when the current routing algorithm supplies none.

## ADR-0026: Use a Versioned YAML Schema for Offline VL LUTs

- **Date:** 2026-05-07
- **Status:** Accepted
- **Context:** T0015 needed to define the offline Vertical Link LUT format before implementing the generator or runtime lookup. The extended proposal requires offline optimization using distance and load imbalance, and the original DeFT paper stores design-time selections in router lookup tables for runtime use under VL-fault scenarios. The current project model has 16 physical bidirectional VL IDs, physical startup fault masks, source/destination router IDs in `RouteData`, and chiplet/VL endpoint lookup through `DeftTopology`.
- **Decision:** Use a restricted, deterministic YAML schema identified by `schema: deft_vl_lut.v1`. Key entries by the current physical fault mask, source chiplet ID, source router ID, and destination chiplet ID. Represent the fault mask as a quoted fixed-width hexadecimal bitset over physical VL IDs `0..15`, with bit `vl_id` set when that physical VL is faulty. Store paired entry values for `source_exit` and `destination_entry`, each naming the selected physical `vl_id`, chiplet boundary endpoint, interposer endpoint, and deterministic ranked functional candidate VL IDs. Include the no-fault mask in generated LUTs.
- **Consequences:** T0016 can generate byte-stable LUT artifacts without inventing a format. T0017 can derive runtime lookup keys from existing `RouteData`, `DeftTopology`, and current physical VL functional state. Schema v1 intentionally follows the current physical bidirectional VL model; final experiment percentage accounting over physical versus directional VLs remains a separate future decision. Runtime loading, exact miss handling, intermediate-destination state, fallback behavior, generator algorithms, and source code changes remain out of scope for T0015.

## ADR-0027: Implement the VL LUT Generator as a Standalone Noxim Helper

- **Date:** 2026-05-07
- **Status:** Accepted
- **Context:** T0016 needed a focused offline generator without changing router runtime behavior, final route selection, experiment automation, metrics, or golden outputs. The existing `external/noxim/other` directory already contains helper tools that are not part of the simulator C++ build.
- **Decision:** Add `external/noxim/other/deft_vl_lut_generator.py` as a Python standard-library generator. The generator mirrors the current `DeftTopology` constants and T0011 physical fault-mask validation rule, emits `deft_vl_lut.v1`, and uses exact dynamic programming for the proposal's Manhattan-distance plus load-imbalance objective with `rho = 0.01` under uniform unit inter-chiplet demand. Because schema v1 has no `destination_router_id`, destination-entry selection uses the same objective over interposer contexts keyed by `(source_chiplet_id, source_router_id)` and destination-chiplet functional VL endpoints.
- **Consequences:** T0016 stays independent from Noxim C++/SystemC runtime and does not require a simulator build. Future topology changes must update the generator constants or replace the mirroring with a shared generator-facing topology export. Future traffic-profile-specific LUT generation and destination-router-granular destination-entry optimization require an explicit follow-up design or schema extension. T0017 can consume the generated YAML without retroactively changing the generator format.

## ADR-0028: Use a Runtime LUT Loader and Separate `DEFT` Routing Algorithm

- **Date:** 2026-05-07
- **Status:** Accepted
- **Context:** T0017 needed to load and use schema-v1 VL selections at runtime while preserving future XY baseline work. The existing `XY` algorithm remains useful as a baseline, and `RouteData` already carries original source, destination, current router, input direction, and VC state.
- **Decision:** Add `DeftVerticalLinkLut` as a runtime YAML loader/validator for `deft_vl_lut.v1`, and register a separate `DEFT` routing algorithm for fault-aware 2.5D DeFT route selection. The loader derives the active fault mask from current physical VL functional state after startup fault injection. The `DEFT` route path uses exact entries keyed by active fault mask, source chiplet, source router, and destination chiplet; it routes to `source_exit` on the source chiplet, to `destination_entry` on the interposer, and then to the final destination on the destination chiplet. Missing entries or nonfunctional selected VLs fail closed by returning no legal output direction. No `RouteData` intermediate-destination fields are added for schema v1.
- **Consequences:** `XY` remains selectable for later baseline configuration. Runtime LUT use is activated by selecting `DEFT` and configuring `deft_vl_lut_filename` or `-deft_vl_lut`. Construction-only no-traffic `DEFT_2_5D` runs can leave the LUT filename empty. Packet-carrying inter-chiplet DeFT route validation, traffic-profile-specific LUT artifacts, metrics, and experiment automation remain future tasks.

## ADR-0029: Configure XY Baselines with Explicit YAML Modes

- **Date:** 2026-05-08
- **Status:** Accepted
- **Context:** T0018 needed the smallest safe XY baseline setup for later comparison against DeFT on the same `DEFT_2_5D` topology, without adding experiment automation, metrics changes, new route-selection logic, golden outputs, or changes to the T0016/T0017 LUT path.
- **Decision:** Add two explicit YAML configuration modes under `external/noxim/config_examples`: one fault-free XY baseline with no startup VL faults and one fault-injected XY baseline using explicit physical VL faults `[0,4,8,12]`. Keep `routing_algorithm: XY`, keep `deft_vl_lut_filename` empty, and retain the existing two-VC `DEFT_2_5D` topology requirement. Use the existing no-traffic hardcoded file for construction-only validation until synthetic traffic configurations are implemented.
- **Consequences:** XY baseline selection is traceable and separate from `DEFT` routing. The fault-injected baseline uses the current physical-model `0x1111` mask rather than resolving final physical-vs-directional percentage accounting. Future packet-carrying experiments should reuse these routing/fault selectors with the same traffic settings as DeFT, but T0018 does not itself produce performance or reachability results.

## ADR-0030: Configure Synthetic Traffic with Existing Noxim Traffic Surfaces

- **Date:** 2026-05-08
- **Status:** Accepted
- **Context:** T0019 needed proposal-required uniform, localized, and hotspot traffic profile support without changing DeFT routing, VN transition logic, VL fault injection, LUT schemas, metrics, experiment automation, or golden outputs. Source inspection showed that Noxim's `TRAFFIC_RANDOM` works for `DEFT_2_5D` chiplet-router destination IDs, while `TRAFFIC_LOCAL` is WiNoC hub-local and not chiplet-local. Noxim hotspot percentages are CLI-only in the existing code path, so standalone YAML configs cannot express hotspot nodes directly through `GlobalParams::hotspots`.
- **Decision:** Use existing traffic surfaces only. Configure uniform traffic with `TRAFFIC_RANDOM`. Configure localized 40% intra-chiplet traffic and hotspot 3x10 traffic with deterministic `TRAFFIC_TABLE_BASED` files under `external/noxim/config_examples`. Interpret the hotspot "10% rate on each" requirement as per-hotspot destination share, consistent with Noxim's `-hs ID P` percentage semantics and the original DeFT paper wording. Select hotspot routers `9`, `13`, and `41` as deterministic near-center routers in three different chiplets because the source documents do not specify hotspot IDs.
- **Consequences:** T0019 remains config/data-only and adds no new C++ traffic mode. Future experiment automation can reuse the same traffic profiles while overriding routing, fault, and LUT settings. If final evaluation requires different hotspot IDs, global PIR sweeps, or traffic-profile-specific LUT demand inputs, that should be handled in a later explicit task.

## ADR-0031: Extend Existing Stats Export for Metrics Collection

- **Date:** 2026-05-08
- **Status:** Accepted
- **Context:** T0020 needed reachability, average latency, and throughput in a machine-readable form for later XY-vs-DeFT comparison. Source inspection showed that Noxim already had optional CSV/JSON export through `stats_format` and `stats_file`, and already aggregated average latency and throughput, but did not expose a measured injected-packet denominator for reachability.
- **Decision:** Reuse the existing `GlobalStats` CSV/JSON export path. Count injected packets and flits at the processing element when a packet head flit actually enters the network after the configured stats warm-up boundary. Export routing algorithm, traffic distribution, active DeFT fault mask, injected packet/flit counts, received packet/flit counts, reachability ratio, average latency, and throughput through the existing machine-readable stats file.
- **Consequences:** T0020 avoids adding an experiment runner or a parallel parser for console logs. Standard console summary labels remain compatible with existing Noxim log parsers. Short runs may report reachability below one when packets remain in flight at simulation end, so final experiment automation must choose simulation windows and warm-up/drain policy deliberately.

## ADR-0032: Add a Standalone Tiny Experiment Runner

- **Date:** 2026-05-09
- **Status:** Accepted
- **Context:** T0021 needed traceable launch support after routing modes, synthetic traffic configs, temporary LUT generation, and machine-readable metrics export existed. The task scope explicitly excluded full sweeps, final analysis, golden regression output updates, and performance claims.
- **Decision:** Add `external/noxim/other/deft_experiment_runner.py` as a standalone Python standard-library helper. The runner composes existing simulator CLI surfaces and config files rather than changing simulator behavior: T0019 traffic configs, `-routing XY|DEFT`, physical fault masks through `-deft_faulty_vls`, T0016 temporary LUT generation for `DEFT`, seed/simulation/warm-up overrides, and T0020 `-stats_format` / `-stats_file` exports. Generated run artifacts are written under `external/noxim/other/generated/`, and that directory is ignored by the Noxim submodule.
- **Consequences:** Single-run and tiny comparison launches are now reproducible through manifests, command files, logs, per-run stats, and a summary CSV. The default mode is dry-run planning, while `--execute` has a small execution safety cap. Temporary LUTs still use the T0016 uniform-unit-interchiplet demand assumption; traffic-profile-specific LUTs, final sweep policy, physical-vs-directional fault percentage accounting, result aggregation, and performance claims remain future work.

## ADR-0033: Keep Final Analysis Support as Traceable Scaffolding Until Final Sweeps Exist

- **Date:** 2026-05-09
- **Status:** Accepted
- **Context:** T0022 needed final-analysis artifact support, but the only completed runner output currently available is the short T0021 execute smoke. The task explicitly prohibited full sweeps, fabricated results, simulator behavior changes, golden regression output updates, and unsupported performance claims.
- **Decision:** Add `external/noxim/other/deft_analysis_artifacts.py` as a standalone Python standard-library helper that consumes T0021 runner output directories and T0020 stats exports. The helper emits ignored generated artifacts for report support: `analysis_manifest.json`, `run_summary.csv`, `comparison_summary.csv`, and `report_scaffold.md`. It preserves provenance and metrics mechanically, always records `claims_allowed: false`, and marks smoke-only or missing final sweep data as `Blocked`.
- **Consequences:** Report-support tables can be regenerated from validated output directories without changing Noxim runtime behavior or committing generated analysis artifacts. Final performance claims still require a future task to define the final sweep policy, run validated final sweeps, and review the generated tables against raw manifests and stats exports.

## ADR-0034: Use a Fixed Physical-VL Final Sweep Policy

- **Date:** 2026-05-09
- **Status:** Accepted
- **Context:** T0025 needed to resolve final sweep choices before any final runs or report claims. `Extended_Proposal.pdf` requires Uniform, Localized, and Hotspot synthetic traffic, permanent VL fault injection up to 25%, and reachability/latency/throughput metrics. The original DeFT paper reports four chiplets with four bidirectional VLs per chiplet, two VCs, 8-flit packets, 4-flit buffers, offline Uniform-traffic VL selection, and reachability over `total VLs=32`. The implemented simulator and runner currently operate on 16 physical bidirectional VL IDs, where one fault disables the physical bidirectional VL object.
- **Decision:** Define the final executable sweep as exactly 150 runs: routing modes `XY` and `DEFT`; traffic profiles `uniform`, `localized_40`, and `hotspot_3x10`; physical fault masks `0x0000`, `0x0001`, `0x0011`, `0x0111`, and `0x1111`; seeds `0`, `1`, `2`, `3`, and `4`; `-sim 10000`; `-warmup 1000`; and JSON stats export. Fault rates are accounted over the 16 physical bidirectional VLs for commands and over 32 directional-equivalent channels for paper comparison, with the same numeric rates because each physical VL fault disables both directions.
- **Consequences:** Final sweep execution is finite, traceable, and compatible with the existing T0021 runner and T0022 analysis helper without changing DeFT routing, VN transition logic, VL fault injection, LUT schemas, traffic semantics, metrics semantics, runner semantics, or analysis semantics. The paper's single-direction 3.125% fault case remains `Blocked` because the current implementation has no directional endpoint fault model. Eventual-delivery reachability after a post-injection drain phase remains `Blocked` because the current policy uses fixed-window continuous injection. Final claims must use only completed 150-run final outputs and must report exact measured finite-window reachability unless every relevant exported value is `1.0`.

## ADR-0035: Treat T0026 Tables as Mechanical Final-Sweep Artifacts, Not Claims

- **Date:** 2026-05-09
- **Status:** Accepted
- **Context:** T0026 executed the T0025 final matrix and regenerated final-sweep-labeled analysis artifacts. The executed manifest and all JSON stats files passed structural validation, and the generated analysis tables cross-checked cleanly against raw artifacts. However, the T0022 helper intentionally keeps `claims_allowed: false`, and T0026 observed zero injected packets in 54 individual measured-window runs.
- **Decision:** Preserve the T0026 sweep and analysis outputs as ignored, traceable report-support artifacts, but do not treat grouped means or scaffold previews as performance claims by themselves. Any final report statement must cite the completed raw artifacts, handle zero-injection cells explicitly, and follow the T0025 result-claim rules.
- **Consequences:** T0026 can be used as the validated generated data set for the next report-support task, but report prose remains a separate interpretation step. If the report needs every matrix cell to contain non-empty measurements, a future task must define an additional validation or rerun policy instead of silently reinterpreting empty cells.

## ADR-0036: Use Blank-Aware Descriptive Tables for Final Report Support

- **Date:** 2026-05-09
- **Status:** Accepted
- **Context:** T0027 reviewed the T0026 final sweep outputs for report support. The raw artifact cross-check remained clean, but 54 completed runs had zero injected packets in the measured stats window. At the condition level, 5 cells were empty, 13 were partial, and 12 had injection in all five seeds. The XY side had zero received packets in every pair where it injected packets, so latency comparisons against DEFT are not supported by the measured data set.
- **Decision:** Use T0027 blank-aware report-support tables as descriptive artifacts only. Leave reachability blank when no packets were injected, leave latency blank when no packets were received, preserve nonempty/empty seed counts beside condition-level metrics, and do not generate deltas, improvement percentages, statistical-significance claims, or latency comparisons where the denominators are absent.
- **Consequences:** Final report drafting can use `external/noxim/other/generated/t0027_report_support_v1/` for claim-safe tables and limitations. Any stronger claim, non-empty XY hotspot cell, or latency comparison requires a separate documented validation or rerun policy rather than reinterpretation of the existing empty or partial cells.

## ADR-0037: Treat T0028 Results Prose as Claim-Safe Draft Text

- **Date:** 2026-05-09
- **Status:** Accepted
- **Context:** T0028 converted the T0027 report-support artifacts into final-report-ready results prose and Markdown tables. The T0027 manifest still records `claims_allowed: false`, and the data set contains empty and partial injection cells plus no XY/DEFT pair that supports latency comparison.
- **Decision:** Use `external/noxim/other/generated/t0028_final_report_results_v1/report_results_draft.md` as claim-safe descriptive draft text only. The final report may reuse its prose and tables if it preserves blank reachability cells, blank latency cells, nonempty/empty seed counts, T0027 limitations, and the absence of deltas or improvement language.
- **Consequences:** Final report assembly can proceed from the T0028 draft without rerunning simulations or reinterpreting empty cells. Any stronger result statement, non-empty XY hotspot measurement, statistical-significance statement, latency comparison, or 100% reachability wording requires a separate documented validation or rerun policy before it is added.

## ADR-0038: Use `docs/FINAL_REPORT_DRAFT.md` as the Tracked Claim-Safe Report Draft

- **Date:** 2026-05-09
- **Status:** Accepted
- **Context:** T0029 assembled the final report draft from `Extended_Proposal.pdf`, the original DeFT paper, existing project documentation, and the T0028/T0027/T0026 generated report-support artifacts. The report needs a tracked repository location that future tasks can review or convert without treating generated artifacts as manuscript files.
- **Decision:** Use `docs/FINAL_REPORT_DRAFT.md` as the tracked claim-safe Markdown report draft. The generated T0028 draft remains the results-section source, while the tracked report draft provides the assembled manuscript structure.
- **Consequences:** Future report edits should start from `docs/FINAL_REPORT_DRAFT.md` and preserve blank reachability cells, blank latency cells, nonempty/empty seed counts, validation provenance, assumptions, blockers, and limitations. Submission-format conversion or stronger result language requires a separate documented follow-up task.

## ADR-0039: Use `final_report/` as the IEEE LaTeX Final Report Source Artifact

- **Date:** 2026-05-09
- **Status:** Accepted
- **Context:** T0031 resumed after the final artifact format was explicitly supplied as an IEEE conference-style LaTeX final project report. The repository already had the reviewed Markdown content source at `docs/FINAL_REPORT_DRAFT.md` and the Extended Proposal LaTeX source archive at `Extended_Proposal.zip`.
- **Decision:** Use `final_report/` as the final report source artifact directory. Generate `final_report/main.tex` from the reviewed Markdown draft, reuse the Extended Proposal IEEEtran style and bibliography style, copy `IEEEtran.cls` and the schematic figure from `Extended_Proposal.zip`, and keep only cited reused bibliography entries in `final_report/references.bib`.
- **Consequences:** The original Extended Proposal archive and source files remain unchanged. Future PDF generation should compile `final_report/main.tex` without changing report claims. Any layout edits must preserve blank metric cells, partial-cell coverage counts, validation provenance, assumptions, blockers, limitations, and descriptive-only result wording.

## ADR-0040: Treat Standard XY on `DEFT_2_5D` as a Limited Control Baseline

- **Date:** 2026-05-09
- **Status:** Accepted
- **Context:** T0033 diagnosed the T0027 final-report blockers. The existing standard `XY` route compares only global footprint coordinates and selects cardinal directions. The `DEFT_2_5D` topology intentionally wires chiplet-layer cardinal links only inside each 4x4 chiplet and uses VL/hub/interposer movement for inter-chiplet traffic through the `DEFT` route path. A warm-up-0 diagnostic showed that `XY` hotspot and uniform traffic are not empty, but standard XY can stall before the T0026 measured window when packets need inter-chiplet traversal.
- **Decision:** Treat the current standard `XY` mode on `DEFT_2_5D` as a limited control baseline, not as an interposer-aware unrestricted inter-chiplet baseline. Do not use warm-up-0 XY diagnostic data as a strong final performance comparison. Any future stronger comparison must either clearly limit traffic to route-compatible scope, implement and validate an interposer-aware baseline route, or add an approved source-supported source-cutoff plus drain/timeout policy.
- **Consequences:** The existing T0026/T0027 blank-aware limitations remain valid and should not be overwritten by diagnostic reruns. The final report may mention the T0033 diagnosis if revised, but latency, improvement, and unrestricted inter-chiplet XY-vs-DEFT claims remain blocked until a follow-up policy is explicitly selected and validated.

## ADR-0041: Prioritize Claim-Safe Report Revision Over Late Simulator Behavior Changes

- **Date:** 2026-05-11
- **Status:** Accepted
- **Context:** T0034 compared final gap-closure directions after T0033 diagnosed the XY measured-window and topology-compatibility blockers. The current final report already has a claim-safe IEEE LaTeX source artifact, but it does not yet explain the T0033 diagnosis. Stronger unrestricted XY-vs-DEFT comparison would require either new interposer-aware baseline routing, source-supported source cut-off plus drain/timeout semantics, or a narrower route-compatible comparison policy. PARSEC/GEM5 trace support would require a separate external workflow.
- **Decision:** Select Option A as the primary next direction: revise the final report with the T0033 diagnosis and do not add new simulator behavior before final report closure. Defer interposer-aware XY-like routing, post-injection drain/source-cutoff support, PARSEC/GEM5 traces, and new comparison data to separate future tasks after the final report is revised and PDF status is resolved.
- **Consequences:** T0035 should update `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex` with explanatory T0033 provenance while preserving the T0026/T0027/T0028 measured data, blank cells, limitations, and descriptive-only wording. T0032 should compile the report only after T0035 settles the content. Options B, C, and D remain possible future work, but they are not appropriate as immediate late-project tasks because they could introduce new implementation and validation blockers.

## ADR-0042: Stop Experimental Work After Final Report Closure

- **Date:** 2026-05-11
- **Status:** Accepted
- **Context:** T0036 revisited high-risk experimental extensions after T0035 revised the final report and T0032 generated `final_report/main.pdf`. `Extended_Proposal.pdf` requires synthetic traffic, VL fault scenarios, baseline comparison context, and reachability/latency/throughput metrics, and it also describes PARSEC/GEM5 real-application traffic as part of the broader evaluation plan. The original DeFT paper's stronger reachability and latency claims depend on validated DeFT routing, design-time VL selection, and PARSEC/GEM5 or comparable workload evaluation. The current project already has a claim-safe final report PDF based on the validated T0026/T0027/T0028 artifact chain, and the remaining options would require new source behavior, new simulator/runner semantics, a narrower comparison scope, or external trace infrastructure.
- **Decision:** Do not pursue additional experimental work in the current project phase. Preserve interposer-aware XY-like routing, source-cutoff plus post-injection drain, route-compatible intra-chiplet comparison, PARSEC/GEM5 trace support, directional endpoint fault modeling, and stronger performance claims as future research only unless the user explicitly opens a new task with its own design and validation policy.
- **Consequences:** The current final experimental deliverable remains the T0026/T0027/T0028 report-support artifact chain plus the revised generated PDF at `final_report/main.pdf`. No new simulator behavior, helper behavior, generated sweep artifacts, generated PDF artifacts, or report claims should be changed for post-final experimentation. If the project is reopened, the first step must be a design task that documents dependencies, validation commands, artifact directories, and claim limits before any implementation or simulation run.

## ADR-0043: Treat the Post-Submission Backlog as Non-Blocking and Artifact-Isolated

- **Date:** 2026-05-11
- **Status:** Accepted
- **Context:** T0039 organized the remaining limitations after `final_report.zip` was created. The final package is ready for handoff, but future work may still explore an interposer-aware XY-like baseline, source-cutoff plus drain semantics, directional fault modeling, PARSEC/GEM5 traces, and report updates after new validation.
- **Decision:** The T0040-T0048 backlog is future development only and does not block the current final submission. Any future experiment must use new artifact directories and must not overwrite T0026/T0027/T0028. Standard `XY`, `DEFT`, the current generated final report PDF, and `final_report.zip` remain unchanged unless a future explicit task scopes a change.
- **Consequences:** Current handoff remains `final_report/main.pdf`, the current `final_report/` source tree, and `final_report.zip`. Stronger performance claims remain blocked until a future task creates and validates new artifacts under a documented policy. Backlog work should start with design or feasibility tasks when new routing semantics, stop semantics, fault semantics, or external trace workflows are involved.

## ADR-0044: Define IA-XY as a New Interposer-Aware Baseline, Not Standard XY

- **Date:** 2026-05-11
- **Status:** Accepted
- **Context:** T0040 designed a future baseline for unrestricted inter-chiplet comparison on `DEFT_2_5D`. The existing `XY` route is cardinal-only: it compares current and destination footprint coordinates, returns only cardinal directions, and does not traverse VL/hub/interposer phases. The `DEFT_2_5D` topology has isolated chiplet-local cardinal meshes plus an active interposer reached through Vertical Links, so standard `XY` is not an interposer-aware unrestricted baseline.
- **Decision:** Preserve standard `XY` unchanged and define Interposer-Aware XY (`IA-XY`) as a separate proposed baseline with the future routing string `INTERPOSER_AWARE_XY`. IA-XY should route same-chiplet packets with local XY and route inter-chiplet packets through a functional source-side VL, active-interposer XY traversal, a functional destination-side VL, and destination-local XY. IA-XY may avoid known faulty physical VLs through current `DeftTopology` functional-state queries, but it must not use the DeFT schema-v1 LUT, DeFT VL optimization, or any report claim unless future implementation and experiment tasks validate it.
- **Consequences:** Future T0041 implementation must add a separately selectable mode and must not reinterpret or replace `XY`. Existing `DEFT` routing, VN transition restrictions, VL fault injection, LUT schema/use path, topology behavior, traffic semantics, metrics semantics, runner/analysis semantics, final-sweep artifacts, final-report PDF, and `final_report.zip` remain unchanged by this design task. Future IA-XY-vs-DeFT claims require new versioned artifacts and blank-aware report rules.

## ADR-0045: Use Deterministic Functional-VL Pair Scoring for IA-XY

- **Date:** 2026-05-11
- **Status:** Accepted
- **Context:** T0041 implemented `INTERPOSER_AWARE_XY` after T0040 defined the baseline but left exact tie-breaking to implementation. IA-XY needs to avoid known faulty physical VLs, stay deterministic, remain separate from DeFT, and avoid using the DeFT schema-v1 LUT or DeFT VL optimization.
- **Decision:** For each inter-chiplet packet, IA-XY evaluates every functional source-chiplet VL against every functional destination-chiplet VL using existing `DeftTopology` endpoint and functional-state queries. It selects the pair with the smallest Manhattan path score: source router to source boundary router, source interposer endpoint to destination interposer endpoint, and destination boundary router to final destination router. Ties resolve by lower source `vl_id`, then lower destination `vl_id`. IA-XY uses `DIRECTION_HUB` as the existing physical VL traversal carrier and fails closed if no valid functional VL pair exists.
- **Consequences:** IA-XY selection is reproducible, avoids known faulty VLs when an alternate exists, and remains a simple baseline rather than a DeFT LUT-optimized route. The policy is not load-balanced or performance-optimized, so IA-XY-vs-DEFT performance claims remain blocked until a later task creates validated comparison artifacts.

## ADR-0046: Define Source-Cutoff Plus Drain as an Opt-In Eventual-Delivery Mode

- **Date:** 2026-05-12
- **Status:** Accepted
- **Context:** T0043 designed a future source-cutoff and post-injection drain policy for eventual-delivery analysis. The current T0025/T0026/T0027/T0028 final-sweep chain and T0042 limited IA-XY comparison use fixed-window continuous injection with `-sim` and `-warmup`; packets may remain in flight at the end of the measured window. Current Noxim `-volume` stops on a delivered-flit threshold or the simulation cap, without stopping sources first or proving that all accepted measured packets drained.
- **Decision:** Preserve current fixed-window behavior as the default and define source-cutoff plus drain/timeout as a separate opt-in future mode. In drain mode, measured traffic begins after reset and source-gated warm-up, new measured packet heads are admitted only before `source_cutoff_cycle`, drain timeout accounting starts at the cutoff boundary, and completion requires source queues, router buffers, hub/VL carrier state, reservations, and measured injected/received packet and flit counts to indicate no remaining measured traffic. Drain mode must require an explicit timeout and must export stop reason, cutoff/drain timing, denominator counts, and remaining in-flight counts.
- **Consequences:** T0044 may implement these semantics without reinterpreting existing fixed-window artifacts. T0026/T0027/T0028 and T0042 remain historical fixed-window/exploratory artifacts. Future eventual-delivery claims remain blocked until the opt-in mode is validated through a later explicit experiment task that creates new versioned artifacts. Standard `XY`, `DEFT`, VN transition restrictions, VL fault injection semantics, LUT schema/use path, topology behavior, existing traffic semantics, existing metrics exports, and existing runner/analysis defaults must remain unchanged outside the opt-in mode.

## ADR-0047: Keep Drain Mode Mutually Exclusive with Current `-volume`

- **Date:** 2026-05-12
- **Status:** Accepted
- **Context:** T0044 implemented the ADR-0046 opt-in drain mode. Current Noxim `-volume` stops based on delivered flit volume or the simulation cap, while drain mode stops based on source cutoff, in-flight empty detection, or explicit drain timeout. Allowing both stop policies in one run would make stop reason, denominator fields, and remaining in-flight counts ambiguous.
- **Decision:** Reject configurations that enable drain mode while also setting `-volume` or `max_volume_to_be_drained`. Preserve current `-volume` behavior unchanged when drain mode is disabled.
- **Consequences:** Users must choose either current delivered-volume stopping or source-cutoff drain stopping for a run. T0044 disabled-mode smokes validate that fixed-window `-sim` and current `-volume` paths remain available outside drain mode. Future work may revisit combined behavior only with a separate design task that defines denominator and stop precedence semantics.

## ADR-0048: Defer Directional Endpoint Fault Support Behind a Versioned Fault Model

- **Date:** 2026-05-12
- **Status:** Accepted
- **Context:** T0045 compared the current 16 physical bidirectional VL model with the original DeFT paper's directional fault-rate interpretation. `Extended_Proposal.pdf` describes four bidirectional VLs per chiplet but also asks for 3.125% through 25% VL fault rates. The original DeFT paper describes four bidirectional VLs per chiplet and reports four-chiplet reachability over `total VLs=32`, which is best interpreted as directional endpoint or channel accounting over the same 16 physical VL objects. The current implementation, schema-v1 LUTs, runner, analysis artifacts, and final report artifacts all use physical bidirectional VL masks where one fault disables both directions of a physical VL.
- **Decision:** Preserve the current 16-physical-VL fault model as the default and as the only interpretation of existing artifacts. Defer directional endpoint support rather than retrofitting it into existing masks or `deft_vl_lut.v1`. If directional support is later required, add it through a separate versioned fault-model design and implementation task, with explicit per-direction state, new configuration/CLI fields, schema-v2 LUT generation/runtime lookup, directional route checks, new validation, new artifact directories, and clear result labels.
- **Consequences:** Existing T0026/T0027/T0028, T0042, T0044, final-report, and package artifacts remain physical-model artifacts and must not be reinterpreted as single-direction fault evidence. Paper-aligned single-direction cases, including the 3.125% one-direction case, remain blocked until the future directional model is implemented and validated. Future physical-model experiments may continue using existing masks and schema-v1 LUTs without change.

## ADR-0049: Defer PARSEC/GEM5 Trace Ingestion Until a Versioned Trace Pipeline Exists

- **Date:** 2026-05-12
- **Status:** Accepted
- **Context:** T0046 assessed PARSEC/GEM5 trace support after the source documents and existing Noxim traffic surfaces were inspected. `Extended_Proposal.pdf` includes real-application PARSEC traces generated by GEM5 as part of the broader evaluation plan, and the original DeFT paper reports PARSEC/GEM5 real-application evaluation. The current workspace does not contain GEM5, PARSEC, full-system images/checkpoints, trace-generation scripts, or application trace inputs. Existing Noxim `TRAFFIC_TABLE_BASED` and `TRAFFIC_HARDCODED` inputs can approximate aggregate or tiny event traffic, but they do not by themselves define a reproducible GEM5/PARSEC trace schema, mapping policy, or validation workflow.
- **Decision:** Defer PARSEC/GEM5 trace ingestion. Do not claim PARSEC/GEM5 workload support until a versioned trace-generation or import pipeline exists. A future implementation must start with a minimal versioned trace schema, a tiny fixture, explicit core/router and agent/router mapping, dependency provenance, invalid-trace rejection, and small Noxim smoke validation before any PARSEC-scale workload is imported or simulated.
- **Consequences:** Existing synthetic T0026/T0027/T0028 artifacts, T0042 exploratory artifacts, T0044 drain smokes, final-report artifacts, and package artifacts remain non-PARSEC artifacts. Large PARSEC/GEM5 traces should not be committed; future raw and converted traces must live in ignored generated directories or external storage with hashes and manifests. T0047 trace ingestion remains blocked until the trace schema, fixture, mapping policy, and provenance plan are supplied and accepted.

## ADR-0050: Reopen Completion Work Around Drain-Based DeFT Reachability Closure

- **Date:** 2026-05-27
- **Status:** Accepted
- **Context:** After presentation preparation, the user explicitly chose to continue project completion work with enough time available. The desired direction is to investigate why the current results do not demonstrate DeFT's expected reachability behavior, correct simulator or implementation issues if they are found, and then compare DeFT against a proper 2.5D-aware baseline. Existing T0026/T0027/T0028 results are fixed-window continuous-injection artifacts and cannot by themselves prove or disprove eventual delivery. T0044 already provides an opt-in source-cutoff plus drain/timeout mode that is better aligned with a reachability closure question.
- **Decision:** Treat future 100% DeFT reachability as a drain-based eventual-delivery validation target, not as a reinterpretation of historical fixed-window results. The next task must diagnose the DeFT reachability gap before any fix. Source changes are allowed only after a concrete root cause is isolated. A proper baseline comparison must use `INTERPOSER_AWARE_XY` or another explicitly validated 2.5D-aware algorithm, not standard cardinal-only `XY`. Final report strengthening must wait until new validated artifacts exist.
- **Consequences:** T0049 records the plan; T0050 is the next diagnostic task; T0051 is blocked until T0050 identifies a fixable issue; T0052 should produce any future DeFT drain-based reachability artifact set; T0053 should produce any future drain-based IA-XY-vs-DeFT comparison; and T0048 remains the report update task after new evidence exists. Existing final-report artifacts, final_report.zip, Extended Proposal files, T0026/T0027/T0028 artifacts, and T0042 artifacts remain historical and must not be overwritten or reinterpreted.

## ADR-0051: Proceed From T0050 Diagnosis to T0052 Validation Without a Source Fix

- **Date:** 2026-05-28
- **Status:** Accepted
- **Context:** T0050 inspected DeFT routing, topology, VN assignment/filtering, runtime LUT lookup, fault-mask handling, hardcoded traffic parsing, and drain-mode accounting. It then ran 12 deterministic drain-mode `DEFT` cases in a new ignored artifact directory. The cases covered same-chiplet routing, several inter-chiplet source/destination patterns, boundary-source and destination-boundary cases, physical fault masks including `0x1111`, and two tiny multi-packet fixtures. All cases completed with `drain_completed`, injected packets equaled received packets, and no in-flight state remained at stop.
- **Decision:** Do not open T0051 for a source fix from the T0050 evidence. Treat the sampled fixed-window reachability gap as most consistent with fixed-window continuous-injection measurement/load semantics rather than a diagnosed deterministic DeFT implementation bug. Proceed next to T0052, which must define and run a larger accepted drain-based DeFT reachability validation matrix before any 100% reachability claim.
- **Consequences:** T0051 remains blocked unless T0052 or a later diagnostic isolates a concrete failing case and root cause. T0050 artifacts are diagnostic-only and cannot be used as universal reachability evidence. Final-report claims remain unchanged until T0048 or another report task uses new validated artifacts.

## ADR-0052: Treat T0052 All-Pairs Drain Timeouts as a Diagnosis Blocker

- **Date:** 2026-05-28
- **Status:** Accepted
- **Context:** T0052 defined and ran a broader `DEFT`-only drain-mode matrix using all 4032 ordered valid chiplet-router source/destination pairs for each accepted physical fault mask (`0x0000`, `0x0001`, `0x0011`, `0x0111`, and `0x1111`). The artifact set was generated under `external/noxim/other/generated/t0052_deft_drain_reachability_v1/`. All five simulator invocations returned code `0`, but every case stopped with `drain_timeout`; measured injected packets were only 243-312 of the 4032 planned pairs, and thousands of packets remained queued at sources at timeout.
- **Decision:** Do not treat T0052 as a validated reachability proof and do not open T0051 from this result alone. Classify the result as a validation blocker and diagnosis input for aggregate offered-load/source-queue backpressure, possible load-induced deadlock, or fixture/drain-policy limitations. T0053 comparison remains blocked. The next task should diagnose the T0052 timeout behavior with smaller DeFT-only deterministic fixtures before any source change.
- **Consequences:** At T0052 completion, T0051 remained blocked pending T0054 or another later diagnostic. After T0054, T0051 still remains blocked until T0055 or another diagnostic isolates a concrete fixable root cause. T0052 artifacts may be cited only as timeout/limitation evidence, not as 100% reachability evidence. Final-report claims remain unchanged until a later report task uses new validated artifacts.

## ADR-0053: Treat T0052 Timeout as Destination-Convergence Drain Blocking, Not Pair-Isolated Route Failure

- **Date:** 2026-05-28
- **Status:** Accepted
- **Context:** T0054 ran a DeFT-only drain-timeout diagnosis matrix under the accepted physical fault-mask ladder. The matrix included pair-isolated cases selected from T0052 timeout phases, source-isolated all-destination cases, destination-stress rounds copied from T0052, and first-256-pair dense and gap-8 prefixes. All 20 pair-isolated cases and all 10 source-isolated cases completed with `drain_completed`, exact injected/received counts, and zero remaining in-flight state. All 10 destination-stress cases and all 10 bounded-prefix cases timed out with nonzero router-buffer flits and router reservations; the bounded-prefix cases also retained source queues and pending handshakes.
- **Decision:** Classify the T0052 all-pairs timeout as destination-convergence fixture/load-triggered in-network drain blocking, with source-queue backpressure as a downstream symptom in larger prefixes. Do not treat it as evidence of an isolated source/destination route failure, a LUT/fault-mask mismatch, or a drain-accounting mismatch. Do not open T0051 yet because the specific fixable source-code root cause is still not isolated.
- **Consequences:** T0052 and T0054 remain diagnosis/limitation artifacts, not universal reachability proof. T0053 remains blocked. The next task should diagnose the destination-stress flow-control/reservation/VN blocker in a small DeFT-only matrix and open T0051 only if that work identifies a concrete implementation root cause.

## ADR-0054: Open a Targeted Fix for Dense DeFT Destination-Convergence Flow-Control Blocking

- **Date:** 2026-05-28
- **Status:** Accepted
- **Context:** T0055 ran a smaller DeFT-only destination-stress matrix for destination `0` and destination `63`, using opt-in drain mode, seed `0`, no-fault mask `0x0000`, and accepted 25% physical-fault mask `0x1111`. All n4 gap-1 cases drained, and the no-fault n63 gap-64 cases drained for both destinations. Dense no-fault n8 gap-1 cases already timed out with source queues and pending handshakes at zero but with router-buffer flits and router reservations remaining. Dense n63 gap-1 cases produced identical stuck counts at 20,000 and 100,000 drain cycles. The faulted `0x1111` rows showed the same class of in-network blocker, with additional source-queue or pending-handshake symptoms in some larger dense fixtures.
- **Decision:** Treat the remaining DeFT reachability blocker as a concrete dense destination-convergence flow-control/reservation deadlock-style issue in the current Noxim DeFT integration, not as a pair-isolated route failure, a LUT/fault-mask mismatch, a simulator received-packet accounting issue, or a short drain-timeout budget. Reopen T0051 for a targeted source fix around the minimal implicated surfaces: router reservation ownership/release, output VC and downstream full-status handling, VN transition filtering, and DeFT route-phase interactions under many-to-one traffic.
- **Consequences:** T0055 artifacts remain diagnostic evidence and do not support a 100% reachability claim. T0051 is now the next recommended task, with source changes allowed only for the diagnosed blocker. T0053 and final-report claim strengthening remain blocked until T0051 or an equivalent fix/reclassification is followed by a passing drain-mode DeFT validation artifact set.

## ADR-0055: Fix Destination-Stress Flow-Control With Output-VC Exclusivity and Fault-Detour VN0 Assignment

- **Date:** 2026-05-28
- **Status:** Accepted
- **Context:** T0051 started from T0055 failing evidence and inspected reservation ownership/release, output-VC forwarding, downstream VC full-status handling, VN transition filtering, drain accounting, and DeFT route phases. The no-fault dense failures were traced to output-VC reservation sharing after DeFT output-VC translation. A residual accepted `0x1111` failure class involved boundary sources whose attached physical VL was faulted, forcing a horizontal detour to an alternate source-exit boundary before the first vertical route.
- **Decision:** Make each output VC exclusive per output port in `ReservationTable::checkReservation()` regardless of input port, and compute the removed reservation index before erasing in `ReservationTable::release()`. Also restrict `DeftVirtualNetwork::sourceCanUseEitherVirtualNetwork()` so boundary inter-chiplet sources may use either VN only when their attached physical VL is functional; fault-detoured boundary sources start in VN0. Do not change standard `XY`, IA-XY, LUT schema/use path, physical VL fault semantics, topology, traffic generation, metrics, runner, analysis behavior, or final-report claims.
- **Consequences:** The targeted T0051 rerun matrix passed all 32 destination-stress cases for no-fault and accepted `0x1111` masks, with `claims_allowed: false`. T0051 fixes the diagnosed dense destination-convergence blocker but is not a universal reachability sweep. T0053 and final-report claim strengthening remain blocked until T0056 or equivalent post-fix DeFT drain-mode validation supports them.

## ADR-0056: Use T0056 as a Matrix-Scoped DeFT Drain Reachability Gate

- **Date:** 2026-05-28
- **Status:** Accepted
- **Context:** T0056 used T0051 as targeted fix evidence and T0052/T0054/T0055 as diagnosis context, then ran a broader post-fix `DEFT`-only drain-mode matrix. The matrix covered the full accepted physical fault-mask ladder, route-family pair probes, source-isolated sweeps, destination-convergence sweeps, bounded T0052-prefix probes, and a T0052-style 4032-pair all-valid-pairs aggregate rerun. All 95 simulator cases returned `0`, stopped with `drain_completed`, and passed with exact measured packet/flit delivery and zero remaining in-flight state.
- **Decision:** Treat T0056 as sufficient matrix-scoped evidence to unblock a new drain-mode `INTERPOSER_AWARE_XY` vs `DEFT` comparison task. Do not treat T0056 as universal reachability proof, do not use it to update final-report claims by itself, and do not reinterpret historical fixed-window artifacts.
- **Consequences:** T0053 can proceed as a new versioned comparison artifact task using denominator-safe rules and no standard `XY` comparison. Stronger final-report claims remain blocked until a later report task explicitly uses new validated artifacts. Future comparison or report text must state the T0056 matrix scope rather than claiming unbounded DeFT reachability.

## ADR-0057: Treat T0053 as Artifact-Scoped Drain Comparison Evidence

- **Date:** 2026-05-28
- **Status:** Accepted
- **Context:** T0053 ran a new opt-in drain-mode comparison matrix using only `DEFT` and `INTERPOSER_AWARE_XY`, with T0056 as the DeFT reachability gate and T0042 only as exploratory IA-XY context. The matrix used seed `0`, the accepted physical fault-mask ladder, the same 19 deterministic fixture definitions as T0056, and 190 simulator cases. All `DEFT` rows passed. IA-XY passed route-family and source-isolated rows, but timed out in 27 rows across destination-stress, bounded-prefix, and all-pairs aggregate fixtures.
- **Decision:** Treat T0053 as denominator-safe, artifact-scoped comparison evidence only. Report or discussion text may state the exact matrix, pass/timeout counts, and per-row denominator rules, but must not rank algorithms universally, compute improvement percentages, claim statistical conclusions, or strengthen final-report claims without a separate report task.
- **Consequences:** T0048 or an equivalent report task may review T0056 and T0053 for precise report integration. Standard `XY` remains separate from IA-XY. Historical fixed-window artifacts remain unchanged and must not be reinterpreted as drain-mode evidence. Any future source fix for IA-XY timeout behavior requires a new explicit diagnosis/fix task rather than being folded into T0053.

## ADR-0058: Integrate T0056/T0053 as Source-Only Artifact-Scoped Report Summaries

- **Date:** 2026-05-28
- **Status:** Accepted
- **Context:** T0048 reviewed the T0056 post-fix `DEFT` drain reachability artifacts and the T0053 `INTERPOSER_AWARE_XY` versus `DEFT` drain comparison artifacts after both were validated. T0056 completed all 95 documented `DEFT` drain-mode cases. T0053 completed all `DEFT` rows and classified 68 matched rows as complete delivery in both modes, while 27 IA-XY rows timed out or remained non-100% and are descriptive-only.
- **Decision:** Update `docs/FINAL_REPORT_DRAFT.md` and `final_report/main.tex` with separate drain-mode summaries sourced only from T0056/T0053. Preserve T0026/T0027/T0028 as the historical fixed-window report-support tables. Keep standard `XY` cardinal-only and separate from IA-XY. Do not regenerate `final_report/main.pdf` or `final_report.zip` during T0048.
- **Consequences:** The report source now contains denominator-safe post-fix drain-mode evidence, but the current PDF and zip package remain stale relative to the T0048 source until T0057 or another explicit packaging task refreshes them. Universal ranking, improvement percentages, statistical claims, PARSEC/GEM5 workload claims, and directional endpoint fault claims remain blocked.

## ADR-0059: Refresh the Final PDF and Submission Package Without Claim Changes

- **Date:** 2026-05-29
- **Status:** Accepted
- **Context:** T0057 was explicitly requested to regenerate `final_report/main.pdf` from the T0048-updated LaTeX source and refresh `final_report.zip`. The task was packaging-only: no simulations, Noxim rebuilds, source changes, report-claim edits, generated experiment artifact changes, or Extended Proposal changes were in scope. The preferred `latexmk -pdf main.tex` command was available as a MiKTeX executable but was blocked because MiKTeX could not find Perl, the required script engine.
- **Decision:** Use the documented fallback sequence from `final_report/`: `pdflatex main.tex`, `bibtex main`, `pdflatex main.tex`, and `pdflatex main.tex`. Refresh the submission package with exactly the T0038 six-file scope: `final_report/main.pdf`, `final_report/main.tex`, `final_report/references.bib`, `final_report/IEEEtran.cls`, `final_report/README.md`, and `final_report/figures/schematic.png`.
- **Consequences:** The refreshed deliverables now reflect the T0048 source-level drain-mode summaries without changing report wording or claims. The final PDF is a 6-page artifact, and the refreshed zip preserves `final_report/...` entry paths. `latexmk` remains blocked until Perl is available to MiKTeX, but this does not block the current package because the fallback TeX workflow completed. Strong ranking, improvement percentages, statistical conclusions, PARSEC/GEM5 claims, directional endpoint fault claims, and universal reachability remain blocked.

## ADR-0060: Treat the Refreshed PDF and Zip as the Current Submission Handoff Artifacts

- **Date:** 2026-05-29
- **Status:** Accepted
- **Context:** T0058 performed a final read-only handoff check after T0057. The parent repository and registered `external/noxim` tree were clean before validation, the refreshed PDF and zip metadata matched the T0057 record, and the zip package contained exactly the intended six final-report entries. No report wording, claims, source code, generated experiment artifacts, Extended Proposal artifacts, simulations, rebuilds, dependencies, or package regeneration were in scope.
- **Decision:** Treat `final_report/main.pdf` and `final_report.zip` as the current refreshed submission handoff artifacts. The PDF handoff identity is 6 pages, 373494 bytes, SHA-256 `D3B0DDF2D74ABA648FEF9B4D763781968AD7825D9E06F5F4D0CDC6444F0AC0C9`. The package handoff identity is 670414 bytes, SHA-256 `A3026F5C997D1AC65F5AED5638F1FFF18986D9B4879F3EEEEB99BB88B34F6DE4`, with exactly `final_report/main.pdf`, `final_report/main.tex`, `final_report/references.bib`, `final_report/IEEEtran.cls`, `final_report/README.md`, and `final_report/figures/schematic.png`.
- **Consequences:** No further implementation, experiment, report, or packaging task is required for the current refreshed deliverable package. Future changes to report claims, simulations, source behavior, generated artifact sets, or submission files require a new explicit task with its own scope and validation policy. `latexmk` remains blocked until Perl is available to MiKTeX, and strong ranking, improvement percentages, statistical conclusions, PARSEC/GEM5 workload claims, directional endpoint fault claims, and universal reachability remain blocked.

## ADR-0061: Use the Instructor Final-Report Instructions for Report Structure Only

- **Date:** 2026-05-29
- **Status:** Accepted
- **Context:** After T0058, the user provided the instructor's final-report schedule/instructions and `C:\Users\ysfth\Downloads\CMP720_Final_Report_Instructions.pdf`. The PDF instructs groups to continue in the same IEEE double-column LaTeX document, update existing proposal sections to reflect completed work, and include `Results and Evaluation` with `Performance Results`, `Comparative Analysis`, `Discussion`, and `Reproducibility`, followed by `Conclusion and Future Work`. The existing final report already contained the validated content, but its results and reproducibility sections did not exactly follow that requested subsection structure.
- **Decision:** Treat the instructor PDF as a late structure/submission instruction source only. Preserve `Extended_Proposal.pdf` as the primary project requirements source and the original DeFT paper as the primary algorithmic reference. Reorganize the final report sections to match the required final-report structure, regenerate `final_report/main.pdf`, and refresh `final_report.zip` without changing simulator behavior, generated experiment artifacts, Extended Proposal artifacts, or the validated claim limits.
- **Consequences:** The current final deliverables are now the T0059 artifacts: `final_report/main.pdf` is 7 pages, 377584 bytes, SHA-256 `A04BC3FAA6A57116022D06320434AB5B107851FFCDA09F07E580892254BA7689`; `final_report.zip` is 673499 bytes, SHA-256 `A7FA7F98D54394B8390EA379261BC686B6BD7262BCA5C7B970C93DE55C5BB5AE`, with exactly the six intended `final_report/...` entries. `latexmk` remains blocked until Perl is available to MiKTeX, but the documented fallback TeX workflow completed. Strong ranking, improvement percentages, statistical conclusions, PARSEC/GEM5 workload claims, directional endpoint fault claims, and universal reachability beyond documented matrix scopes remain blocked.

## ADR-0062: Treat T0060 as All-Pair Accepted-Fault-Ladder DeFT Drain Reachability Evidence

- **Date:** 2026-05-31
- **Status:** Accepted
- **Context:** T0060 audited whether the current implementation can support a stronger DeFT reachability statement than the T0056 matrix-scoped wording. The task inspected T0056 as prior DeFT drain evidence and T0053 only as comparison context, then ran a `DEFT`-only opt-in drain-mode audit under seed `0`, `-warmup 0`, the generated schema-v1 LUT path, and accepted physical masks `0x0000`, `0x0001`, `0x0011`, `0x0111`, and `0x1111`. The generated ignored artifact set contains 130 deterministic fixtures and 650 simulator cases covering a gap-128 near-isolated sequential all-pairs fixture, 64 source-isolated all-destination fixtures, 64 destination-stress fixtures, and one all-pairs aggregate fixture, each repeated for all five masks. All 650 rows passed with `drain_completed`; all 4032 valid ordered chiplet-router source/destination pairs delivered for every accepted mask; `failing_cases.csv` is empty except for its header.
- **Decision:** Treat T0060 as sufficient evidence for a stronger DeFT drain-mode all-valid-ordered-pair accepted-physical-fault-ladder delivery claim within deterministic hardcoded fixtures, opt-in drain semantics, seed `0`, the current physical bidirectional VL fault model, and the schema-v1 LUT path. Keep fixed-window T0026/T0027/T0028/T0033 results descriptive and separate; their blank/partial or less-than-100% fixed-window values do not contradict T0060 because they do not include a post-injection drain phase.
- **Consequences:** A future report-source task may update DeFT reachability wording from T0056's matrix-scoped phrasing to T0060's all-pair drain-mode scope, but it must preserve the limits above. T0060 does not support fixed-window workload reachability, stochastic traffic, universal timing, performance ranking, improvement percentages, statistical conclusions, IA-XY claims, PARSEC/GEM5 workload claims, or directional endpoint fault claims. No source-fix task is needed from T0060, and no DeFT routing, VN transition, VL fault handling, LUT, Noxim source, final-report artifact, or Extended Proposal artifact was changed.
