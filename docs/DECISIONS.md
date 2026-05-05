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
