# Example: dashboard

Neo-Minimal Permaweb patterns for data-dense views. Use **Luma**-level spacing and clarity as a reference; enforce zero radius, neutral buttons, and border-led structure.

## Structure

- Full-width header row: title (500), optional period filter, neutral outline actions.
- Body: single column of **stacked sections** separated by horizontal rules, not cards; related groups separated by borders rather than soft card padding.
- Primary content: **table or definition list** with column alignment; zebra optional only if it improves scan (very subtle neutral striping, no heavy fills).

## Chrome

- Sidebar: border-right only; nav items are text + optional 1px active indicator, not pill tabs.
- KPI row: inline metrics separated by vertical rules or consistent column grid—avoid four floating stat cards.

## Interaction

- Hover: underline or border shift, not shadow lift.
- Focus: visible outline consistent with border weight; no radius on focus rings if the system has zero radius.
- Animation: short, functional only (see `guide.md` §8); no ornamental motion on high-frequency actions.
