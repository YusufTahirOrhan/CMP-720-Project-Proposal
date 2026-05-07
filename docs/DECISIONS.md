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
