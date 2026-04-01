# Neo-Minimal Permaweb Guide

Function and form intertwined. Light-first. Minimal by default.

## 1) Route and Aesthetic References for Styling Guidance

Use these live routes and reference systems as **styling and behavior references only**, not as required pages to generate:

- `Luma` from `shadcn/ui` should also be used as an aesthetic reference for overall polish, restraint, spacing, and compositional feel.
- `https://ao.arweave.net/#/delegate`
- `https://ao.arweave.net/#/mint`
- `https://ao.arweave.net/#/read`
- `https://ao.arweave.net/#/read/<slug>`

These references should inform visual language, spacing, hierarchy, interaction patterns, and general UI tone. They are **not mandatory destinations, required flows, or required page types** in generated output.

If a generated app does not need mint, read, or delegate-style pages, do not create them. Only borrow from them where stylistically relevant.

---

## 2) Foundation

- Use `shadcn/ui` for core UI primitives, accessibility, and component structure.
- Treat `shadcn/ui` as the foundation, not the final visual style.
- All `shadcn/ui` components should be restyled to match this neo-minimal Permaweb guide.
- Do not rely on default `shadcn/ui` styling decisions if they conflict with this system.
- This guide overrides default `shadcn/ui` radius, shadows, spacing feel, color use, and component presentation.
- Use `Luma` from `shadcn/ui` as an additional aesthetic guide for refinement, restraint, layout rhythm, and overall interface feel.

---

## 3) Core Visual Direction

- Prioritize light mode and high legibility.
- Keep surfaces clean, low-noise, and structured.
- Let spacing, hierarchy, and contrast carry the design.
- Build interfaces that feel calm, precise, and fast.
- Minimal by default. Decorative treatment should be rare.
- Do not use shadows in the app UI.
- Shadows may be used very sparingly only for things like tooltips, where layering clarity truly requires it.
- Use no border radius anywhere.
- Prefer borders and separators over decorative containers.
- When content is related, use borders as separation rather than introducing large gaps.
- Use spacing more sparingly and structurally, not to create soft card-like layouts.
- The interface should feel flat, crisp, and gridded.
- Do not overlap borders. Borders should align cleanly and resolve into a clear single edge.
- Avoid doubled lines, stacked outlines, or competing border intersections.

---

## 4) Typography Rules

- Only use one font to start: `DM Sans, sans-serif`
- Do not introduce any additional fonts unless explicitly instructed to do so.
- Do not use monospace fonts anywhere unless specifically requested.
- Do not use uppercase typography as a default style.
- Prefer sentence case and natural casing throughout the interface.
- Allowed font weights only:
  - `400` regular
  - `500` medium
- Never use bold or extra-bold (`600+` disallowed).

Suggested hierarchy:
- Section titles: 16–24px, 500
- Supporting copy: 13–16px, 400
- Data headers/meta: 12–13px, 400
- Key values/row labels: 13–15px, 500
- Micro text/actions: 10–12px, 400–500

Typography should feel quiet, flat, and highly readable.

---

## 5) Accent Color System

Use these families as available accent sources:

- **Red**: `#CD0D34`, `#FD9069`, `#FFCDCD`, `#FFE4E4`
- **Blue**: `#0072C8`, `#BDC9FF`, `#CDECFF`, `#E4F4FF`
- **Green**: `#008F20`, `#D3FF8C`, `#CDFFD9`, `#E4FFEA`

Accent usage rules:
- If using any RGB accent family, choose **only one family per interface or screen context**:
  - red **or**
  - blue **or**
  - green
- Never mix red, blue, and green accents together in the same UI unless there is a very explicit reason.
- Be very stingy with color usage.
- Most of the interface should remain neutral.
- Do not use color as the default background for buttons.
- Buttons should be white or neutral by default.
- Color may be used sparingly in icons, text emphasis, status moments, or small accents, but not everywhere.
- Accent should support hierarchy, not dominate it.
- Prefer darker shades for small moments of emphasis.
- Use lighter shades only for subtle fills or highly restrained support states.

The overall UI should read as neutral-first, not color-first.

---

## 6) Blog / Reading UX Contract

For blog-like or editorial apps, `#/read` and `#/read/<slug>` should act as reference points only.

Suggested patterns:
- Narrow, centered reading column.
- Clear metadata stack.
- Strong spacing rhythm.
- High readability with restrained emphasis.
- Accessible interactions for links and focus states.

Do not force blog pages into apps that do not need them. Only apply these patterns when an editorial or reading experience is actually part of the product.

---

## 7) Graphics, Imagery, and Motion Surfaces

- Use `three.js` when creating logos, custom graphics, visual scenes, or image-like motion elements for the app.
- Logos should be created with `three.js` when custom branded motion or visual identity is needed.
- If branded visual assets do not exist yet, generate tasteful placeholder visuals, abstract forms, or mock logos that fit the system.
- Mock content is acceptable when needed to complete the composition or demonstrate the interface.
- Any generated logo or visual should follow the same neo-minimal rules:
  - light-first
  - flat and restrained
  - minimal color usage
  - no unnecessary glow, bloom, or dramatic effects
  - no rounded, soft, inflated visual language
- Moving logos or animated visual marks should feel precise, quiet, and structural rather than flashy.
- Motion graphics should support the identity of the product without overpowering the interface.
- Prefer wireframe, line-based, grid-based, typographic, field-based, or simple geometric motion systems over decorative 3D spectacle.
- If color is used in these visuals, remain very restrained and follow the single-accent-family rule where possible.
- `three.js` visuals should feel like part of the product system, not like a separate landing-page gimmick.

---

## 8) Animation Guidance

Animation should be restrained and purposeful:
- Animate only for clarity, feedback, or spatial continuity.
- Reduce or remove animation on high-frequency interactions.
- Prefer `transform` and `opacity`.
- Avoid layout-heavy animation.
- Avoid flashy entrances.
- Use subtle press feedback only where helpful.
- Respect reduced-motion settings.

Timing guidance:
- Press feedback: `100–160ms`
- Tooltips/popovers: `125–200ms`
- Dropdowns/selects: `150–250ms`
- Modals/drawers: `200–500ms`
- Keep most UI transitions under `300ms`
- Prefer strong `ease-out` for entering interactions

Motion should never make the interface feel ornamental.

---

## 9) Layout and Separation Rules

- Use separators generously where they improve clarity.
- Prefer hard dividers, table rules, panel lines, and section borders over soft visual grouping.
- If pieces of content belong together, separate them with borders rather than large amounts of empty space.
- Use gaps when content is distinct, not as the default structure everywhere.
- Favor table-like, list-like, and grid-aligned organization when appropriate.
- Panels, rows, tabs, and sections should often feel connected through shared borders.
- Avoid floating-card compositions unless explicitly needed.
- Do not overlap borders between adjacent elements.
- When two bordered elements meet, resolve them into a single clean divider rather than doubled edges.

---

## 10) Button and Control Rules

- Buttons should default to white or neutral backgrounds.
- Do not use filled accent-color buttons as a default pattern.
- Use borders, text contrast, and layout placement to establish emphasis before using color.
- Colored icons may appear inside controls, but only selectively.
- Keep controls flat and crisp.
- Use no border radius on buttons, inputs, panels, tabs, or containers.
- Inputs, search bars, tabs, and table controls should feel integrated into the border system of the page.
- Avoid nested border treatments that create heavy or overlapping outlines.

---

## 11) How `shadcn/ui` Should Be Adapted

- Remove default rounded corners and use no border radius.
- Remove default shadows except possibly very subtle tooltip shadows when necessary.
- Keep button backgrounds neutral by default rather than using filled accent colors.
- Use borders, separators, and layout structure as the main visual organization system.
- Keep typography constrained to `DM Sans` and weights `400` and `500`.
- Do not default to uppercase labels, tabs, buttons, or metadata.
- Reduce unnecessary color, especially in badges, buttons, tabs, and icons.
- Make components feel flatter, more gridded, and more architectural than stock `shadcn/ui`.
- Prefer connected panel systems and shared borders over isolated card-like blocks.
- Ensure border systems resolve cleanly without overlapping strokes.
- Use `Luma` from `shadcn/ui` as an aesthetic reference for calm polish and compositional refinement, but still follow this guide when conflicts arise.

---

## 12) Build Contract

When generating new screens or components:
1. Use the canonical routes as **style references only**.
2. Do not force creation of mint, delegate, read, or article pages unless the product actually needs them.
3. Use `shadcn/ui` for component foundations, accessibility, and behavior where helpful.
4. Use `Luma` from `shadcn/ui` as an additional aesthetic reference for the interface.
5. This guide overrides the default visual styling of `shadcn/ui` components.
6. When `shadcn/ui` defaults conflict with this system, follow this guide.
7. Enforce typography limits (`400/500` only).
8. Use only `DM Sans` to start unless instructed otherwise.
9. Do not use uppercase typography by default.
10. Keep the neo-minimal, light-first aesthetic.
11. Do not use shadows in the app UI, except very sparingly for tooltips if necessary.
12. Use no border radius anywhere.
13. Use color very sparingly.
14. Do not use color-filled button backgrounds by default.
15. If accent is used, choose only one of red, green, or blue as the interface accent.
16. Prefer neutral buttons, neutral surfaces, and mostly neutral icons.
17. Use borders and separators as the primary organizational system.
18. When content is related, prefer border-based separation over gaps.
19. Do not overlap borders; resolve adjacent borders into a single clean edge.
20. Use `three.js` for logos, custom moving graphics, generated images, or animated visual identity when needed.
21. Mock content, placeholder logos, or abstract branded imagery may be created where real assets do not yet exist.
22. Any `three.js` output should remain minimal, structural, and aligned with the flat border-based visual system.
23. Preserve readability and hierarchy over decoration.
24. Prefer flat, structured, grid-aligned layouts with restrained visual treatment.

---

## 13) Acceptance Checklist

- [ ] Uses canonical routes as styling reference only
- [ ] Does not force mint, delegate, or read pages unless needed
- [ ] `shadcn/ui` is used only as a foundation where helpful
- [ ] `Luma` from `shadcn/ui` is used as an additional aesthetic reference
- [ ] Default `shadcn/ui` styling has been overridden to match this guide
- [ ] Light mode prioritized
- [ ] Uses only `DM Sans` to start unless instructed otherwise
- [ ] No monospace fonts unless specifically requested
- [ ] No font weight above 500
- [ ] No uppercase typography by default
- [ ] No border radius
- [ ] No shadows in the app UI, except possibly very subtle tooltip shadows when necessary
- [ ] Accent colors limited to approved red, blue, or green families
- [ ] Only one accent family is used sparingly per interface
- [ ] Buttons are neutral by default, not color-filled
- [ ] Color use is restrained and not applied everywhere
- [ ] Borders and separators are used as the primary organization system
- [ ] Related content is separated with borders more often than gaps
- [ ] Borders do not overlap or double up
- [ ] Blog/read patterns are only used when relevant
- [ ] `three.js` is used for logos or custom graphics when appropriate
- [ ] Mock content or placeholder brand visuals are acceptable when needed
- [ ] Generated visuals remain minimal, restrained, and system-consistent
- [ ] Motion is subtle, functional, and accessibility-safe
