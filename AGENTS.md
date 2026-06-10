# AGENTS.md — Gut–Brain Axis teaching page

This repo is a **single self-contained HTML file** (`index.html`) — a teaching tool that
explains the gut–brain axis and GLP-1 drugs to a smart-but-non-expert family audience.
There is no build step, no framework, no dependencies. Open `index.html` in a browser
to see it. Everything (HTML, CSS, JS, and all illustrations as inline `<svg>`) lives in
that one file.

**Your job:** improve the **diagrams** — make the inline SVG illustrations clearer,
more accurate, and more beautiful — without breaking the page's interactivity or theme.

> There is also a second file, **`gut-brain-axis-indepth.html`** — a long-form, fully
> technical reference (mechanisms, trials, effect sizes, tables, citation markers) for a
> scientific audience. It is text/table-based with NO diagrams. Leave it alone unless the
> user asks; the diagram work below is all in `index.html`.

---

## How to preview your changes

Just open the file in a browser:

```
open index.html        # macOS
xdg-open index.html    # Linux
```

There is nothing to compile. Refresh the browser after each edit. If you want a quick
local server: `python3 -m http.server` then visit `http://localhost:8000/`.

---

## House style — DO NOT BREAK THESE

1. **Stay single-file.** Keep all SVG inline in `index.html`. Do not add external image
   files, icon libraries, or CDN dependencies. The page must work offline by double-click.
2. **Use the existing color variables**, never raw hex. They are defined in `:root`:
   - `--rust` `#d2603a`, `--rust-dark` `#a8431f` (brain / drug / warm accents)
   - `--teal` `#2f7d77`, `--teal-dark` `#1f5651` (gut / vagus / cool accents)
   - `--gold` `#d9a441` (sugar, highlights), `--plum` `#7a4b6b` (stress/GABA),
     `--green` `#5b8a4f` (immune/outcome), `--ink` `#241f1b`, `--muted` `#6b625a`,
     `--line` `#e7ddd1`, `--card` `#fffdfa`, `--bg` `#fbf7f2`.
   - In SVG, reference them with `fill="var(--teal)"` etc. so dark-mode/theming stays consistent.
3. **Preserve the hover-tooltip pattern.** Interactive SVG parts use
   `class="hot"` + an inline `onmouseover="t('TIPID','message')"` handler, and there is a
   matching `<div class="tip" id="TIPID">…</div>` below each figure. The helper is at the
   bottom of the file:
   ```js
   function t(id,msg){var el=document.getElementById(id); if(el) el.innerHTML=msg;}
   ```
   If you add new interactive parts, reuse this pattern and keep each figure's `tip` id unique.
4. **Keep `viewBox` + `width="100%"`** on every `<svg>` so they stay responsive. Don't
   hard-code pixel `width`/`height` on the root svg (a `max-width` on the style attr is fine).
5. **Accessibility:** add a `<title>` element inside each `<svg>` and keep text legible
   (min ~11px effective). Don't rely on color alone to carry meaning — keep the labels.
6. **Tone:** this is for a family, not a journal. Diagrams should be friendly and clear,
   not clinical. Favor clarity over density.

---

## Diagram inventory

Each diagram is an inline `<svg>` inside a `<figure>`. Search `index.html` for the anchor
text in **Find** to jump to it. "Improve" notes are suggestions — use judgment.

| # | Section (Find this `id=`) | What it shows | Current state | Good improvements |
|---|---|---|---|---|
| 1 | `id="hardware"` (Vagus 80/20) | Brain ⟷ Gut with a thick "80% up" arrow and thin "20% down" arrow | Two ellipses + 2 arrows. A bit plain. | Make brain/gut look more organ-like (simple anatomical silhouette), show many small afferent fibers bundling into the thick up-arrow, label the nodose ganglion / brainstem (NTS) lightly. |
| 2 | `id="neuropod"` (Millisecond synapse) | Sugar vs sweetener in gut lumen → neuropod cell → tail synapsing onto vagus → brain | Sugar (G) and sweetener pucks, a teardrop cell, a tail to a vagus bar. | Make the synapse readable (show a small synaptic cleft + neurotransmitter dots), distinguish the glucose/SGLT1 "strong" path vs sweetener "weak" path with line weight, add a tiny clock for "milliseconds". |
| 3 | `id="software"` (Microbiome map) | 3 panels: what shapes the microbiome · how signals reach the brain (HPA/vagus/immune/hormones) · the molecular keys (SCFA/indoles/bile acids) | Boxed 3-panel layout, lanes + dashed key cards. | Better balance/spacing, small molecule glyphs (a fatty-acid squiggle, an indole ring, a bile-acid steroid skeleton), connect panel B lanes to the brain with subtle arrows. |
| 4 | `id="glp1"` table (no svg) | GLP-1 comparison TABLE (HTML `<table>`, not svg) | Fine as-is. | Leave unless asked; it's a real table for screen readers. |
| 5 | `id="glp1"` (Reward circuit flow) | GLP-1 drug → GABA brakes ON → Dopamine ↓ → Craving ↓ (4 boxes + arrows) | Simple 4-box flow. | Turn into a small VTA→NAc circuit: show a GABA neuron inhibiting a dopamine neuron whose axon projects to the nucleus accumbens; keep the 4-step caption as a legend. |
| 6 | `id="glp1"` "sneaky entrance" prose | (text only — no diagram yet) | Missing a visual. | OPTIONAL: add a new figure showing the blood–brain barrier as a wall with a few "leaky windows" (circumventricular organs) where the drug enters. Reuse the `.tip` pattern. |

> Tip: the deck and PDF versions are NOT in this repo — only this HTML matters here.

---

## Constraints / definition of done

- Page still opens by double-click, offline, in current Chrome/Safari/Firefox.
- All existing hover tooltips still work; no JS errors in the console.
- Colors still come from the CSS variables; no off-palette hex sneaks in.
- Each `<svg>` keeps a `viewBox`, is responsive, and has a `<title>`.
- Diagrams are clearer and more polished than before — that's the whole point.
- Keep diffs focused on the SVGs and their captions; don't rewrite the prose content.

When done, briefly list which diagrams you changed and what you improved.
