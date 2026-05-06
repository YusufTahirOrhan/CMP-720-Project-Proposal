# Project Progress

## Current Phase

Phase 4 - Fault Injection Manager

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
- `T0023` - Add or register the Noxim source tree.
- `T0024` - Decide Windows 11 development environment and persist paper reference.

No DeFT routing, VN, startup-time VL fault injection, VL LUT, experiment automation, or metrics task has been completed.

## In-Progress Tasks

- None.

## Blocked Tasks

- None.

## Last Validation Result

- T0009 Boundary Router Identification validation completed on 2026-05-06.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, and `docs/DECISIONS.md`.
- Before implementation, `git status --short --branch` in the parent repository showed branch `feat/map-noxim-extension-points...origin/feat/map-noxim-extension-points` and a modified `external/noxim` gitlink because the user changed the submodule branch.
- Before implementation, `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim status --short --branch` showed branch `feat/baseline-noxim...origin/feat/baseline-noxim` with no local file modifications.
- T0009 added `BoundaryRouterInfo` as a derived boundary-router view over the centralized Vertical Link model.
- The new query surface provides `boundaryRouters()`, `boundaryRoutersForChiplet(chiplet_id)`, `boundaryRouterById(router_id)`, `boundaryRouterForVerticalLink(vl_id)`, and `validateBoundaryRouterModel(error_message)`.
- Each boundary-router record exposes stable router ID, owner chiplet, chiplet-local coordinate, VL slot, attached VL ID, and attached interposer endpoint.
- `NoC::buildDeft2D()` validates the boundary-router model before wiring VLs and prints the boundary-router inventory during construction smoke runs.
- Assumption: Boundary-router identity is derived from the physical VL inventory and should not become a parallel endpoint source of truth.
- Blocked: Explicit `DIRECTION_UP` and `DIRECTION_DOWN` semantics remain undecided for future DeFT routing and VN-transition tasks.
- The first documented build command attempt, `./build.sh` from `external/noxim`, timed out after 124 seconds without reporting a compiler or linker error.
- The same documented build command was rerun with a longer timeout and completed with exit code `0` in WSL Ubuntu.
- The build emitted only pre-existing Noxim warnings.
- The construction smoke command completed with exit code `0`: `LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/deft_2_5d_topology.yaml -seed 0 -sim 20 -warmup 0`.
- Construction smoke output reported `chiplet_routers=64`, `interposer_routers=64`, `total_routers=128`, `chiplet_cardinal_links=96`, `interposer_cardinal_links=112`, `vertical_links=16`, and `boundary_routers=16`.
- The smoke output printed all 16 expected boundary-router records, from router `1` on chiplet `0` local `(1,0)` slot `NORTH` attached to `vl_id=0` and interposer endpoint `65`, through router `52` on chiplet `3` local `(0,2)` slot `WEST` attached to `vl_id=15` and interposer endpoint `116`.
- The smoke output still printed all 16 expected VL endpoint records, each with `functional=true`.
- The construction smoke intentionally used no traffic, so it reported zero received packets and zero received flits. The `-nan` average-delay and wireless-utilization values are expected for a no-packet construction smoke and are not experiment results.
- `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --check` completed with exit code `0`.
- No startup-time fault injection behavior, fault-mask generation, fault-rate configuration, DeFT routing behavior, route selection, VN behavior, VL LUT generation, experiment automation, metrics change, golden regression output update, or DeFT experiment was run.

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
- Assumption: T0008 structural validation is not fault-mask validation; no-chiplet-disconnected checks remain a future fault-validation task.
- Assumption: The construction-only `DEFT_2_5D` smoke configuration is valid for topology instantiation checks, but not for DeFT performance evaluation because it intentionally generates no packets.
- Assumption: Future tasks must continue on the existing Git branch by default; Codex must not create or switch task branches unless the user explicitly asks for that operation.

## Open Questions

- Should Vertical Link fault percentages be counted over physical bidirectional links or directional links?
- Are GEM5/PARSEC traces required for final delivery, or are synthetic traffic experiments sufficient?
- Should WSL be configured persistently with `ldconfig` for the local SystemC library, or should future Noxim runs keep using a per-process `LD_LIBRARY_PATH`?
- What exact algorithmic representation should carry chiplet-to-interposer Down movement and interposer-to-chiplet Up movement in DeFT routing and VN-transition logic?
- Which packet, flit, or route metadata fields should carry DeFT layer/VN context without disrupting baseline routing behavior?
- Why did Git fail to create task branch refs in the current Windows worktree? This is no longer operationally important because user instruction now forbids automatic task branch creation.

## Next Recommended Task

Start `T0010` and implement the centralized startup-time permanent Vertical Link fault injection manager, using the T0008 VL model and T0009 boundary-router query surface without changing DeFT route selection or VN behavior.

## Next Ready-to-Send Prompt

```text
Start task T0010: Implement Fault Injection Manager.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, and docs/DECISIONS.md.

Continue on the existing Git branch. Do not create or switch task branches.

Use the registered Noxim source tree at:
external/noxim

`external/noxim` is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

T0007 added selectable `DEFT_2_5D` topology construction, the `DeftTopology` mapping helper, four isolated 4x4 chiplet meshes, an 8x8 active-interposer mesh, and the deterministic 16-VL endpoint table. T0008 extended `DeftTopology` into the centralized physical Vertical Link model/query surface with stable VL IDs, chiplet ownership, slots, chiplet/interposer endpoints, default functional state, functional-state query/mutation helpers, and structural VL validation. T0009 added the derived boundary-router inventory/query surface with stable router ID, owner chiplet, local coordinate, VL slot, attached VL ID, and attached interposer endpoint. The construction smoke config is:
external/noxim/config_examples/deft_2_5d_topology.yaml

Goal: add the smallest centralized startup-time permanent Vertical Link fault injection manager needed after T0009. The manager should use the existing physical VL model and mutation helpers to mark selected VLs functional or faulty before simulation traffic runs. Keep the task focused on fault-state setup and inspectability only.

Keep this task independent from DeFT routing behavior, route selection, VN assignment behavior, VN transition restrictions, VL LUT generation, experiment automation, metrics changes, and golden regression output updates. Do not implement T0011 fault-mask validation beyond the smallest guard needed to avoid fully disconnecting any chiplet if the selected T0010 design requires it.

Known result so far: T0008 provides `resetVerticalLinkStates()`, `setVerticalLinkFunctional()`, `isVerticalLinkFunctional()`, `functionalVerticalLinksForChiplet(chiplet_id)`, `hasFunctionalVerticalLinkForChiplet(chiplet_id)`, and structural VL validation. T0009 provides boundary-router inventory and lookup helpers. T0010 should reuse these surfaces and should not introduce a parallel VL or boundary-router inventory.

Use `Extended_Proposal.pdf` as the primary project requirements source and the original DeFT paper at `docs/references/DeFT_A_Deadlock-Free_and_Fault-Tolerant_Routing_Algorithm_for_2.5D_Chiplet_Networks.pdf` as the primary algorithmic reference. Use `Proposal.pdf` only as initial context. Ignore the peer evaluation document completely.

Before coding, produce a short implementation plan. Work only on the selected fault-injection-manager task. Do not modify unrelated files. Clearly mark assumptions as `Assumption` and blockers as `Blocked`.

Use only known validation commands. The baseline build command is documented as `./build.sh` from `external/noxim` in WSL Ubuntu. The construction smoke command is documented in `docs/VALIDATION.md`; only run a simulation if the task preserves the construction-only no-traffic invocation or provides another clearly valid invocation. Do not use `./regression.sh --update`.

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
feat: add boundary router inventory
```
