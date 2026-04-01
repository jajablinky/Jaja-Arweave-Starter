---
name: neo-minimal-permaweb-ui
description: Use this skill when designing or generating app UI, dashboards, editorial pages, or product interfaces that should follow the Neo-Minimal Permaweb visual system (shadcn/ui + Luma aesthetic, light-first, border-led).
---

# Neo-Minimal Permaweb UI

Use this skill when generating interfaces that should feel flat, precise, light-first, border-led, and structurally minimal.

For the full specification, checklist, and rationale, read `guide.md` in this skill folder (mirrors the repo root `neo-minimal-permaweb-guide-luma.md`).

## Foundation

- Use `shadcn/ui` for primitives, accessibility, and behavior; treat it as **scaffolding**, not the final look.
- Use **`Luma`** from `shadcn/ui` as an extra aesthetic reference for polish, restraint, spacing rhythm, and compositional feel—this guide wins when they conflict.
- Override default `shadcn/ui` radius, shadows, spacing feel, color, and component presentation to match below.

## Core requirements

- Light-first; calm, precise, fast; minimal by default.
- Use only `DM Sans` to start unless explicitly instructed otherwise.
- Use only font weights `400` and `500` (never `600+`).
- Do not use uppercase typography by default; prefer sentence case.
- Do not use monospace fonts unless explicitly requested.
- Use no border radius anywhere.
- Do not use shadows in the app UI except very sparingly for tooltips if layering clarity requires it.
- Flat, crisp, gridded; borders and separators are the primary layout system—prefer border separation for related content over large soft gaps.
- Do not overlap borders; resolve adjacent areas into a single clean divider.
- Keep color very stingy; neutral-first. Do not use filled accent-color buttons by default—buttons white or neutral.
- If accent is used, choose **only one** family per interface or screen: red, blue, or green.

## Accent families

- Red: `#CD0D34`, `#FD9069`, `#FFCDCD`, `#FFE4E4`
- Blue: `#0072C8`, `#BDC9FF`, `#CDECFF`, `#E4F4FF`
- Green: `#008F20`, `#D3FF8C`, `#CDFFD9`, `#E4FFEA`

Prefer darker shades for small emphasis; lighter shades only for subtle fills or restrained support states. Never mix red, blue, and green accents in one UI without an explicit reason.

## Layout and controls

- Prefer hard dividers, table rules, panel lines, and section borders over soft grouping or floating cards.
- Inputs, tabs, search, and tables should feel integrated into the page border system; avoid nested heavy outlines.
- Favor table-like, list-like, grid-aligned organization when appropriate.

## Typography

- Stack: `DM Sans, sans-serif`
- Hierarchy: section titles 16–24px / 500; body 13–16px / 400; metadata 12–13px / 400; key values and row labels 13–15px / 500; micro 10–12px / 400–500

## Animation

- Animate only for clarity, feedback, or spatial continuity; prefer `transform` and `opacity`; respect reduced motion.
- Timing: press 100–160ms; tooltips/popovers 125–200ms; dropdowns 150–250ms; modals/drawers 200–500ms; keep most transitions under 300ms; prefer strong ease-out on enter.

## `shadcn/ui` adaptation

- Strip radius and default shadows (tooltip exception only if needed); neutral button backgrounds; reduce color on badges, tabs, icons, and chrome.
- Use Luma standards for shadows.
- Flatter, more gridded, more architectural than stock `shadcn/ui`; connected panels and shared borders over isolated cards.
- Use loaders from shadcn
- Use `Luma` for calm polish; still enforce this guide.

## Graphics and three.js

- Use `three.js` for logos, custom graphics, visual scenes, or image-like motion when needed; mock or abstract placeholders are acceptable if assets are missing.
- Keep visuals light-first, flat, restrained, minimal color, no glow/bloom/inflated 3D unless asked; prefer wireframe, line, grid, typographic, or simple geometric motion over spectacle; align with the single-accent-family rule when color appears.

## Reference routes (style only)

- `Luma` (shadcn/ui) — polish and composition, not a page to ship.
- `https://ao.arweave.net/#/delegate`
- `https://ao.arweave.net/#/mint`
- `https://ao.arweave.net/#/read`
- `https://ao.arweave.net/#/read/<slug>`

Do not force mint, delegate, read, or article flows unless the product needs them. For editorial apps, `#/read` patterns (narrow column, metadata, readability) apply only when relevant—see `guide.md` §6.

## When responding

1. Start from a light-first, neutral interface.
2. Build on `shadcn/ui` + `Luma` sensibility; override defaults to match this system.
3. Keep color restrained and controls neutral; borders as the primary layout language.
4. Use `three.js` for logos or branded motion when appropriate; keep output minimal and system-consistent.
5. Preserve clarity and hierarchy over decoration.

## Output expectation

Generated UI should feel flat, precise, calm, structural, minimal, and editorial where relevant—never soft, bubbly, or overly decorative.
