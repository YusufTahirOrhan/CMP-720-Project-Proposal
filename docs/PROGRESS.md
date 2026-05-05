# Project Progress

## Current Phase

Phase 1 - Noxim baseline source availability and validation setup

## Completed Tasks

- `T0001` - Repository analysis and documentation setup.
- `T0002` - Confirm repository contents, Noxim availability, and source-document availability.
- `T0003` - Establish baseline build command.
- `T0004` - Run baseline Noxim simulation.
- `T0023` - Add or register the Noxim source tree.
- `T0024` - Decide Windows 11 development environment and persist paper reference.

No DeFT implementation task has been completed.

## In-Progress Tasks

- None.

## Blocked Tasks

- None.

## Last Validation Result

- T0004 baseline simulation validation completed on 2026-05-05.
- Required startup reading was completed before task work: `AGENTS.md`, `docs/PROGRESS.md`, `docs/TASKS.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/VALIDATION.md`, and `docs/DECISIONS.md`.
- The selected documented baseline simulator invocation came from `external/noxim/doc/Noxim_User_Guide.md`, section "A short deterministic example": `cd bin` then `./noxim -config ../config_examples/default_config.yaml -seed 0 -sim 20 -warmup 0`.
- The selected configuration is `external/noxim/config_examples/default_config.yaml`, which describes a 4x4 `MESH`, `XY` routing, `RANDOM` selection, `TRAFFIC_RANDOM`, one virtual channel, packet injection rate `0.01`, and 8-flit packets.
- The first exact WSL simulator attempt reached `external/noxim/bin/noxim` but failed with `error while loading shared libraries: libsystemc-2.3.1.so: cannot open shared object file`.
- WSL-side dependency inspection confirmed that `external/noxim/bin/libs/systemc-2.3.1/lib-linux64/libsystemc-2.3.1.so` exists and is resolved by `ldd` when that directory is supplied through `LD_LIBRARY_PATH`.
- The documented simulator invocation was rerun in WSL Ubuntu with the local SystemC library directory supplied through `LD_LIBRARY_PATH` and completed with exit code `0`.
- Successful run command used from `external/noxim/bin`: `LD_LIBRARY_PATH=/mnt/c/Projects/CMP-720-Project-Proposal/external/noxim/bin/libs/systemc-2.3.1/lib-linux64 ./noxim -config ../config_examples/default_config.yaml -seed 0 -sim 20 -warmup 0`.
- Important output: `Noxim simulation completed. (1020 cycles executed)`.
- Reported metrics: total received packets `1`, total received flits `2`, received/ideal flits ratio `0.078125`, average wireless utilization `0`, global average delay `6` cycles, max delay `6` cycles, network throughput `0.1` flits/cycle, average IP throughput `0.00625` flits/cycle/IP, total energy `3.99398e-09` J, dynamic energy `4.34792e-11` J, and static energy `3.9505e-09` J.
- No DeFT experiments were run, no golden regression outputs were modified, and no DeFT behavior, routing logic, topology logic, VN logic, fault injection logic, or simulation behavior was modified.
- Final status check showed only the requested documentation files modified in the parent project plus the already dirty `external/noxim` submodule from T0003 LF normalization; `git -c safe.directory=C:/Projects/CMP-720-Project-Proposal/external/noxim -C external/noxim diff --name-only --ignore-space-at-eol` returned no file names.

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

## Open Questions

- How should the active interposer dimensions and router mapping be represented?
- Should Vertical Link fault percentages be counted over physical bidirectional links or directional links?
- Are GEM5/PARSEC traces required for final delivery, or are synthetic traffic experiments sufficient?
- Should WSL be configured persistently with `ldconfig` for the local SystemC library, or should future Noxim runs keep using a per-process `LD_LIBRARY_PATH`?

## Next Recommended Task

Start `T0005` and map the Noxim extension points for topology construction, routing, traffic generation, configuration, and statistics.

## Next Ready-to-Send Prompt

```text
Start task T0005: Map Noxim extension points.

Before starting, read AGENTS.md, docs/PROGRESS.md, docs/TASKS.md, docs/ROADMAP.md, docs/ARCHITECTURE.md, docs/VALIDATION.md, and docs/DECISIONS.md.

Use the registered Noxim source tree at:
external/noxim

`external/noxim` is the Noxim submodule and modifiable project fork from:
https://github.com/YusufTahirOrhan/noxim

Do not implement DeFT behavior yet. Do not modify routing logic, topology logic, VN logic, fault injection logic, fault injection behavior, simulator behavior, or golden regression outputs in this task.

Goal: inspect the Noxim source tree and document the extension points responsible for topology construction, routing algorithms, selection strategies, traffic generation, configuration loading, simulation control, power/statistics reporting, and any existing regression or tracing hooks.

Known result so far: T0003 verified the documented build command `./build.sh` in WSL Ubuntu on 2026-05-05 and created `external/noxim/bin/noxim`. T0004 verified the documented Noxim User Guide short deterministic baseline simulation command in WSL Ubuntu on 2026-05-05. The successful T0004 run used `LD_LIBRARY_PATH` for the local SystemC shared library and reported `Noxim simulation completed. (1020 cycles executed)`.

This is a source-inspection and documentation task. Do not change Noxim source files. Read only the files needed to identify extension points. Keep findings traceable with file paths and concise responsibilities.

Ignore the peer evaluation document completely.

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
codex/t0005-map-noxim-extension-points
```

## Suggested Commit Message

```text
docs: record baseline Noxim simulation
```
