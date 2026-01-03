# Icon visual consistency review (manual)

- Date: 2026-01-03
- Scope: warnings from icon-naming-audit for numeral usage

## Findings

- [packages/core/optimized/astronomy/star-3d/linear.svg](packages/core/optimized/astronomy/star-3d/linear.svg)
  - Visual: multi-stroke star form with faceted/3D-style construction; no numeral rendered.
  - Issue: Name uses numeral "3" but the icon does not depict a number (rule 6).
  - Suggested rename: `star-three-dimensional` (or another non-numeric descriptive variant such as `star-isometric`).

- [packages/core/optimized/essential/square-4-k/linear.svg](packages/core/optimized/essential/square-4-k/linear.svg)
  - Visual: square badge containing the characters "4K"; numeral is explicitly drawn.
  - Conclusion: Numeric use is justified by the artwork; name aligns with rule 6. Optional tidy-up (not required): consider collapsing to `square-4k` for compactness.

- [packages/core/optimized/home-furniture/bedside-table-2-drawers/linear.svg](packages/core/optimized/home-furniture/bedside-table-2-drawers/linear.svg)
  - Visual: bedside table with two drawer lines; no numeral rendered.
  - Issue: Name uses numeral "2" but the icon does not depict a number (rule 6).
  - Suggested rename: `bedside-table-two-drawers` (or `bedside-table-double-drawer`).
