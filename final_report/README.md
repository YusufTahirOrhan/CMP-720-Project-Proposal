# Final Report Artifact

This directory contains the T0031 final submission artifact source.

Source hierarchy:

1. `docs/FINAL_REPORT_DRAFT.md` is the reviewed content source.
2. `Extended_Proposal.zip` is the IEEE conference-style LaTeX template reference.
3. `Extended_Proposal.pdf` is the primary project requirements source if clarification is needed.
4. `Proposal.pdf` is initial context only.

Contents:

- `main.tex`: IEEE conference-style LaTeX final report.
- `references.bib`: cited bibliography entries reused from the Extended Proposal source.
- `IEEEtran.cls`: local IEEEtran class copied from `Extended_Proposal.zip`.
- `figures/schematic.png`: architecture schematic copied from `Extended_Proposal.zip`.

Build:

```bash
latexmk -pdf main.tex
```

If `latexmk` is unavailable, a standard BibTeX flow can be used:

```bash
pdflatex main.tex
bibtex main
pdflatex main.tex
pdflatex main.tex
```

The report preserves blank result cells, assumptions, blockers, validation provenance, and limitations from the reviewed Markdown draft. It does not rerun simulations or change simulator behavior.

Validation note:

- `latexmk`, `pdflatex`, `bibtex`, and `tectonic` were not available on the Windows PATH during T0031 validation on 2026-05-09, so no PDF was generated in this workspace.
