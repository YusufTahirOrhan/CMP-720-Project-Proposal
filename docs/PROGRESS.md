# Project Progress

## Current Phase

Phase 5 - DeFT VN Assignment Logic

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
- `T0023` - Add or register the Noxim source tree.
- `T0024` - Decide Windows 11 development environment and persist paper reference.

No DeFT routing behavior, VN assignment behavior, VN transition restriction, VL LUT, experiment automation, or metrics task has been implemented.

## In-Progress Tasks

- None.

## Blocked Tasks

- None.

## Last Validation Result

- T0012 VN State Representation Design completed on 2026-05-07.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, `docs/DECISIONS.md`, and `docs/PROMPTS.md`.
- Before documentation edits, `git status --short --branch` in the parent repository showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` with no local file modifications.
- Before documentation edits, `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch` showed branch `feat/baseline-noxim...origin/feat/baseline-noxim` with no local file modifications.
- Source document availability was confirmed for `Extended_Proposal.pdf`, `Proposal.pdf`, and `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf`.
- Short source-document checks found the proposal requirement for exactly two VCs, one for VN.0 and one for VN.1, and the VN transition restrictions. The original paper check confirmed one VC per VN for the evaluated design, VN.0 to VN.1 monotonic transition, VN.1 to VN.0 prohibition, Up/Down/Horizontal movement definitions, and round-robin assignment when either VN is legal.
- Source inspection confirmed that Noxim already carries `vc_id` in `Packet`, `Flit`, and `RouteData`, and that router buffers and downstream full-status masks are indexed by VC.
- T0012 design decision: DeFT VN state should be represented directly by the existing Noxim `vc_id`, where VC 0 is VN.0 and VC 1 is VN.1 for DeFT-enabled runs.
- T0012 design decision: no separate `vn_id` metadata field should be added unless a future implementation task proves it necessary.
- T0012 design decision: future DeFT-enabled routing runs should require exactly two configured VCs, while non-DeFT modes and current construction-only smokes should preserve existing VC behavior.
- Source inspection found that the current router reservation path assumes the input VC and output VC are the same index. Future boundary-router reassignment must therefore add output-VC-aware reservation and forwarding behavior instead of only mutating `Flit::vc_id`.
- Assumption: The implementation target remains one VC per DeFT VN, matching the project requirement and paper evaluation model.
- Assumption: The current construction-only no-traffic configuration may remain at one VC until T0013 starts implementing VN assignment behavior because T0012 intentionally makes no simulator behavior change.
- Blocked: No T0012 work is blocked. Final Up/Down movement enforcement and output-VC remapping remain future implementation work.
- No build, simulation, or regression command was run because T0012 made no source-code change and introduced no behavior change.
- Final parent-project status after documentation updates showed only the requested tracking docs modified: `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- Final `external/noxim` status remained clean.
- No Noxim source file, DeFT routing behavior, route selection, VN assignment behavior, VN transition restriction, VL LUT generation, experiment automation, metrics change, golden regression output update, or DeFT experiment was changed.

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
- Assumption: DeFT-enabled routing should require exactly two configured VCs, while current non-DeFT and construction-only validation can preserve existing VC configuration until VN assignment is implemented.
- Assumption: A separate packet/flit `vn_id` field is unnecessary and should not be added unless future implementation proves the existing `vc_id` cannot safely carry DeFT VN state.
- Assumption: Future VN reassignment must make the router reservation and forwarding path output-VC-aware; changing only `Flit::vc_id` without matching downstream full-status checks would be unsafe.

## Open Questions

- For final experiment automation, should Vertical Link fault percentages be converted from physical bidirectional links or directional links?
- Are GEM5/PARSEC traces required for final delivery, or are synthetic traffic experiments sufficient?
- Should WSL be configured persistently with `ldconfig` for the local SystemC library, or should future Noxim runs keep using a per-process `LD_LIBRARY_PATH`?
- What exact algorithmic representation should carry chiplet-to-interposer Down movement and interposer-to-chiplet Up movement in DeFT routing and VN-transition logic?
- Should T0013 extend the router reservation table with an explicit output VC, or use a narrower route-result object that carries output direction plus output VC only for DeFT routing?
- Why did Git fail to create task branch refs in the current Windows worktree? This is no longer operationally important because user instruction now forbids automatic task branch creation.

## Next Recommended Task

Start `T0013` and implement DeFT VN assignment rules using the T0012 VC-ID mapping, while preserving baseline routing behavior outside DeFT-enabled runs.

## Next Ready-to-Send Prompt

```text
Start task T0013: Implement VN Assignment Rules.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, docs/DECISIONS.md, and docs/PROMPTS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

`external/noxim` is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

T0007 added selectable `DEFT_2_5D` topology construction and the `DeftTopology` mapping helper. T0008 centralized the physical Vertical Link model and functional state. T0009 added the derived boundary-router inventory. T0010 added startup-time permanent physical VL fault injection. T0011 added focused explicit/generated fault-mask validation and inspectability against the current 16 physical bidirectional VL model.
T0012 designed the DeFT VN state representation: for DeFT-enabled runs, VC 0 is VN.0 and VC 1 is VN.1. Do not add a parallel `vn_id` field unless source inspection proves it is necessary. Future DeFT-enabled routing should require exactly two configured VCs. T0012 also found that the current router reservation path assumes input VC equals output VC, so any boundary-router VN reassignment must make downstream full-status checks and forwarded `Flit::vc_id` agree on the selected output VC.

Goal: implement the smallest safe DeFT VN assignment behavior for source routers and boundary routers using the T0012 mapping. Inter-chiplet traffic from non-boundary source routers should start in VN.0. Cases where either VN is legal should use round-robin assignment or reassignment. Traffic coming from the interposer into a destination chiplet should go to or remain in VN.1. Preserve existing baseline routing behavior outside DeFT-enabled runs.

Keep this task independent from VN transition-restriction enforcement beyond assignment monotonicity, VL LUT generation, experiment automation, metrics changes, and golden regression output updates. Do not implement final VL selection or DeFT performance experiments in this task. If safe VN reassignment requires a small output-VC-aware router pipeline change, keep it narrowly scoped and justify it before editing.

Known result so far: `Packet::vc_id`, `Flit::vc_id`, and `RouteData::vc_id` are the VN/VC state carrier. `ProcessingElement` currently assigns packet VCs randomly. `Router::txProcess()` currently reserves and forwards using the input-buffer VC index. `DeftTopology` provides layer, boundary-router, VL, and fault-state query surfaces needed to classify DeFT assignment contexts.

Use `Extended_Proposal.pdf` as the primary project requirements source and the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` as the primary algorithmic reference. Use `Proposal.pdf` only as initial context. Ignore the peer evaluation document completely.

Before coding, produce a short implementation plan. Work only on the selected VN assignment task. Do not modify unrelated files. Clearly mark assumptions as `Assumption` and blockers as `Blocked`.

Use only known validation commands. The baseline build command is documented as `./build.sh` from `external/noxim` in WSL Ubuntu. The construction-only no-traffic smoke command is documented in `docs/VALIDATION.md`; only run simulations that preserve that known invocation shape unless a new command is discovered from source documentation. Do not use `./regression.sh --update`.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable implementation decision becomes clear, update docs/DECISIONS.md too.

At the end, provide:

1. Created files
2. Modified files
3. Whether any source code files changed
4. Validation result
5. Current project phase
6. Next recommended task
7. The next ready-to-send prompt
8. Suggested branch name for the next task, which should be `None; continue on the existing branch`
9. Suggested commit message
10. Unknowns or blockers
```

## Suggested Branch Name for Next Task

```text
None; continue on the existing branch.
```

## Suggested Commit Message

```text
docs: design DeFT VN state representation
```
