# Project Progress

## Current Phase

Phase 2 - 2.5D topology model implementation

## Completed Tasks

- `T0001` - Repository analysis and documentation setup.
- `T0002` - Confirm repository contents, Noxim availability, and source-document availability.
- `T0003` - Establish baseline build command.
- `T0004` - Run baseline Noxim simulation.
- `T0005` - Map Noxim extension points.
- `T0006` - Design 2.5D router ID and coordinate mapping.
- `T0023` - Add or register the Noxim source tree.
- `T0024` - Decide Windows 11 development environment and persist paper reference.

No DeFT implementation task has been completed.

## In-Progress Tasks

- None.

## Blocked Tasks

- None.

## Last Validation Result

- T0006 documentation-design validation completed on 2026-05-05.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, and `docs/DECISIONS.md`.
- Before source inspection, `git status --short` in the parent repository returned no output.
- Before source inspection, `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short` returned no output.
- The current branch before task work was `feat/map-noxim-extension-points`.
- An attempted switch to the supplied task branch `feat/t0006-design-router-coordinate-mapping` failed with a `.git` ref permission error, and the approval flow was not granted. The user then instructed Codex not to create task branches ever again and to continue on the existing branch. This process decision is recorded in `docs/DECISIONS.md`.
- `Extended_Proposal.pdf`, `Proposal.pdf`, and `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` were confirmed present.
- `pdftotext` was not available. Short source-document snippets were inspected with the bundled Python runtime and `pypdf`; no extracted text files were created.
- Source-document grounding confirmed the target system as four CPU chiplets on an active interposer, 4x4 mesh routers per chiplet, four bidirectional VLs per chiplet at boundaries, and DeFT's boundary-router/up-down-horizontal terminology.
- Noxim grounding inspected `external/noxim/src/DataStructs.h`, `external/noxim/src/Utils.h`, `external/noxim/src/NoC.cpp`, `external/noxim/src/Tile.h`, `external/noxim/src/Router.cpp`, `external/noxim/src/GlobalParams.h`, `external/noxim/src/ProcessingElement.cpp`, `external/noxim/src/GlobalStats.cpp`, and `external/noxim/src/routingAlgorithms/Routing_XY.cpp`.
- T0006 design result: chiplet router IDs use `0..63` as an 8x8 global chiplet footprint; active-interposer router IDs use `64..127` as the same 8x8 footprint offset by 64; chiplet ownership is derived from global footprint coordinates; packet source and final destination IDs remain chiplet router IDs only.
- T0006 VL result: each chiplet has four deterministic boundary slots, physical bidirectional VL IDs are `vl_id = chiplet_id * 4 + vl_slot`, and each VL records a boundary-router endpoint plus the interposer endpoint at the same footprint coordinate.
- Assumption: The project models 16 physical bidirectional VLs and derives 32 directional VL channels or endpoint directions when later fault accounting needs to align with the original paper's `total VLs=32` wording.
- Blocked: The final physical port encoding for Up and Down movement is not decided in T0006. Existing Noxim has no explicit `DIRECTION_UP` or `DIRECTION_DOWN`; T0007 must choose a minimal topology-construction approach without implementing DeFT routing behavior.
- No DeFT experiments were run, no build or simulation command was rerun, no golden regression outputs were modified, and no DeFT behavior, routing logic, topology logic, VN logic, fault injection logic, simulator behavior, or Noxim source file was changed.
- Final status after documentation updates showed only the requested tracking docs modified in the parent project: `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/TASKS.md`, and `docs/VALIDATION.md`.
- Final `external/noxim` status remained clean.

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
- Assumption: Future tasks must continue on the existing Git branch by default; Codex must not create or switch task branches unless the user explicitly asks for that operation.

## Open Questions

- Should Vertical Link fault percentages be counted over physical bidirectional links or directional links?
- Are GEM5/PARSEC traces required for final delivery, or are synthetic traffic experiments sufficient?
- Should WSL be configured persistently with `ldconfig` for the local SystemC library, or should future Noxim runs keep using a per-process `LD_LIBRARY_PATH`?
- What exact Noxim physical port representation should carry chiplet-to-interposer Down movement and interposer-to-chiplet Up movement without disrupting baseline mesh behavior?
- Which exact Noxim metadata fields should carry the layer-aware router mapping helper without disrupting baseline routing behavior?
- Why did Git fail to create task branch refs in the current Windows worktree? This is no longer operationally important because user instruction now forbids automatic task branch creation.

## Next Recommended Task

Start `T0007` and implement the smallest 2.5D topology construction change using the T0006 mapping, without implementing DeFT routing behavior.

## Next Ready-to-Send Prompt

```text
Start task T0007: Implement 2.5D Topology Construction.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, and docs/DECISIONS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

`external/noxim` is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

This is the first explicit 2.5D topology implementation task. Keep the change as small as possible. Do not implement DeFT routing behavior, VN assignment behavior, VN transition restrictions, VL fault injection behavior, VL LUT generation, experiment automation, metrics changes, simulator behavior outside topology construction, or golden regression output updates in this task.

Goal: add the smallest code change needed for Noxim to instantiate the planned 2.5D topology shape from the T0006 design, using four 4x4 chiplets, an 8x8 active-interposer footprint, chiplet router IDs `0..63`, interposer router IDs `64..127`, and deterministic boundary/VL endpoint mapping. The goal is topology construction and mapping inspectability only, not DeFT routing.

Known result so far: T0005 mapped the relevant Noxim extension points. Topology construction is centered in `external/noxim/src/NoC.*` and `external/noxim/src/Tile.h`; router ports, directions, buffers, and VC state are centered in `external/noxim/src/Router.*`, `external/noxim/src/GlobalParams.h`, and `external/noxim/src/DataStructs.h`. T0006 documented the router ID and coordinate design in `docs/ARCHITECTURE.md`, including the required layer-aware helper surface and the current blocker that Noxim has no explicit `DIRECTION_UP` or `DIRECTION_DOWN`.

Use `Extended_Proposal.pdf` as the primary project requirements source and the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` as the primary algorithmic reference. Use `Proposal.pdf` only as initial context. Ignore the peer evaluation document completely.

Before coding, produce a short implementation plan. Work only on the selected topology-construction task. Do not modify unrelated files. Clearly mark assumptions as `Assumption` and blockers as `Blocked`.

Use only known validation commands. The baseline build command is documented as `./build.sh` from `external/noxim` in WSL Ubuntu. The baseline short simulation command is documented in `docs/VALIDATION.md`; only run a simulation if the implementation provides a documented minimal 2.5D configuration or another clearly valid invocation. Do not use `./regression.sh --update`.

Update docs/ARCHITECTURE.md, docs/TASKS.md, docs/PROGRESS.md, docs/VALIDATION.md, and docs/PROMPTS.md with the result. If a durable implementation decision becomes clear, update docs/DECISIONS.md too.

At the end, provide:

1. Created files
2. Modified files
3. Whether any source code files changed
4. Validation result
5. Current project phase
6. Next recommended task
7. The next ready-to-send prompt
8. Suggested branch name for the next task
9. Suggested commit message
10. Unknowns or blockers
```

## Suggested Branch Name for Next Task

```text
None; continue on the existing branch.
```

## Suggested Commit Message

```text
docs: design 2.5d router coordinate mapping
```
