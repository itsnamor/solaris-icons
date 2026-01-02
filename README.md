# Solaris Icons

Solaris Icons is an open collection of 1,253 unique glyphs rendered in six consistent styles (bold, bold-duotone, broken, line-duotone, linear, outline) — 7,518 optimized 24×24 SVGs in total. The repo ships both raw assets and a fully typed React package, with playground and docs for quick previewing.

- 7,518 optimized SVGs (24×24, `currentColor`, width/height `1em`)
- React components with tree-shakable ESM exports and TypeScript typings
- Raw SVG package for any stack or custom pipelines
- Built with Bun; includes playground (Vite) and docs (Next.js + Fumadocs)

## Packages

| Package | What you get | Install |
| --- | --- | --- |
| `@solaris-icons/react` | Typed React 19 icon components with `variant`, `size`, `color`, and `title` support | `npm i @solaris-icons/react` |
| `@solaris-icons/core` | Optimized SVG sources organized by category/variant | `npm i @solaris-icons/core` |

## Install

```sh
# Pick your package manager
npm install @solaris-icons/react @solaris-icons/core
# pnpm add @solaris-icons/react @solaris-icons/core
# bun add @solaris-icons/react @solaris-icons/core
```

## React quick start

```tsx
import { ArrowDown } from "@solaris-icons/react";

export function Button() {
	return (
		<button className="inline-flex items-center gap-2">
			<ArrowDown size={20} color="#111" variant="bold" title="Download" />
			Download
		</button>
	);
}
```

### Icon props

- `variant` (default `linear`): `bold` | `bold-duotone` | `broken` | `line-duotone` | `linear` | `outline`
- `size` (default `1em`): number or string forwarded to both width/height
- `color`: falls back to `currentColor` if omitted
- `title`: renders a `<title>` for accessibility
- `...rest`: any valid `SVGProps<SVGSVGElement>` (e.g., `strokeWidth`, `aria-*`)

### Using the base `Icon`

If you need a custom path but still want consistent sizing and props:

```tsx
import { Icon } from "@solaris-icons/react";

export function CustomLogo() {
	return (
		<Icon size={28} color="#8B5CF6" title="Solaris"> 
			<circle cx="12" cy="12" r="10" fill="currentColor" />
			<path d="M12 6v12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
		</Icon>
	);
}
```

## Raw SVG usage

The core package exposes the optimized SVGs by category and variant:

```ts
import arrowDown from "@solaris-icons/core/optimized/arrow/arrow-down/linear.svg";
// Alias export path (when using the package export map):
// import arrowDown from "@solaris-icons/core/assets/arrow/arrow-down/linear.svg";
```

Each SVG is 24×24, already stripped of width/height attributes and configured for `currentColor`.

## Local development

```sh
# Install workspace dependencies
bun install

# Regenerate optimized SVGs from originals
cd packages/core && bun run gen-optimized-svg

# Regenerate React components from optimized SVGs
cd ../react && bun run gen:icons

# Build the React package
bun run build

# Playground (Vite)
cd ../../apps/playground && bun run dev

# Docs site (Next.js + Fumadocs)
cd ../documentation && bun run dev
```

## Attribution and license

- Icons are derived from the Solar Icons sets by 480 Design and Solar Icons Vol.2 by Amin Nemati, licensed under CC BY 4.0 (see ATTRIBUTION.md for details and required credit).
- Code in this repository is released under the MIT License.

Enjoy the icons! PRs and issues are welcome.
