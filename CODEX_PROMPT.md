# Ready-to-paste Codex prompt

Open the `gut-brain-codex` folder in Codex, then paste the prompt below. (Codex will also
read `AGENTS.md` automatically, which has the full diagram inventory and house rules.)

---

## Prompt — improve all the diagrams

> This project is a single self-contained teaching page, `index.html`, that explains the
> gut–brain axis to a family audience. All illustrations are inline `<svg>`. Please make the
> diagrams clearer, more anatomically suggestive, and more beautiful — while keeping the page
> single-file, offline, and responsive.
>
> Follow `AGENTS.md` exactly: use the existing CSS color variables (no raw hex), keep every
> `<svg>` with a `viewBox` + `width="100%"`, preserve the `class="hot"` / `onmouseover="t(...)"`
> hover-tooltip pattern and the matching `<div class="tip">` blocks, and add a `<title>` to each svg.
>
> Work through the six diagrams listed in the AGENTS.md inventory. For each one:
> 1. Keep the same meaning and labels, but raise the visual quality — better proportions,
>    spacing, simple gradients/shading via SVG, friendlier organ shapes, small molecule glyphs
>    where noted.
> 2. Make sure it stays legible at phone width and on a projector.
> 3. Don't touch the prose, the comparison `<table>`, or the nav.
>
> Also add the OPTIONAL new "blood–brain barrier / leaky windows (CVOs)" figure described in
> the inventory, in the GLP-1 section, using the same tooltip pattern.
>
> When finished, give me a short bullet list of what you changed per diagram, and confirm the
> page still opens by double-click with no console errors.

---

## Smaller, focused alternatives

If you'd rather go one at a time, paste one of these instead:

- **"In `index.html`, improve only the vagus-nerve diagram in the `#hardware` section: make the
  brain and gut look like simple organs, show many small afferent fibers bundling into the thick
  upward arrow, and lightly label the brainstem (NTS). Keep the hover tooltips and color
  variables. Don't change anything else."**

- **"In `index.html`, redraw the reward-circuit diagram in the `#glp1` section as a small
  VTA→nucleus-accumbens circuit: a GABA neuron inhibiting a dopamine neuron that projects to the
  NAc, with the existing 4-step labels kept as a legend. Same palette and tooltip pattern."**

- **"In `index.html`, polish the 3-panel microbiome map in the `#software` section: even spacing,
  add small molecule glyphs (a fatty-acid squiggle, an indole ring, a bile-acid steroid skeleton),
  and connect the middle panel's lanes to the brain with subtle arrows."**

---

## Tips for working with Codex on this

- Ask Codex to **change one diagram per commit** so you can preview and accept incrementally.
- After each change, open `index.html` in your browser and refresh to check it.
- If a diagram looks worse, tell Codex "revert that one" — single-file means easy rollback.
- Codex can also run `python3 -m http.server` to serve a live preview if you ask.
