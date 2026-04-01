# References

## Stack

- **UI foundation:** `shadcn/ui` for primitives and accessibility—restyle per the Neo-Minimal Permaweb guide.
- **Aesthetic reference:** `Luma` from `shadcn/ui` for polish, restraint, spacing, and composition; this guide overrides on conflict.

## Typography

- **Family:** DM Sans only to start (`DM Sans, sans-serif` — Google Fonts or self-hosted).
- **Weights:** `400` and `500` only unless the user specifies otherwise. No `600+`.

## Accent palettes (one family per interface)

| Family | Strong | Mid | Light | Wash |
|--------|--------|-----|-------|------|
| Red | `#CD0D34` | `#FD9069` | `#FFCDCD` | `#FFE4E4` |
| Blue | `#0072C8` | `#BDC9FF` | `#CDECFF` | `#E4F4FF` |
| Green | `#008F20` | `#D3FF8C` | `#CDFFD9` | `#E4FFEA` |

## Live reference routes (style only)

- Luma (`shadcn/ui`) — compositional reference, not a required app structure.
- https://ao.arweave.net/#/delegate  
- https://ao.arweave.net/#/mint  
- https://ao.arweave.net/#/read  
- `https://ao.arweave.net/#/read/<slug>`  

Do not copy page types or flows unless the product requires them.

## Graphics

- Use `three.js` for logos, identity motion, or custom visuals when needed; keep minimal and aligned with the border-led UI (see `guide.md` §7).
