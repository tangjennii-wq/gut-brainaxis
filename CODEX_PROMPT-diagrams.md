# Codex prompt — polish the diagrams

Open `~/Desktop/Projects/gut-brain-axis/` in Codex and paste the prompt below. (Codex also reads
`AGENTS.md` automatically for the house rules.)

---

Polish the hand-drawn inline SVG diagrams in this project so they look more professional and
anatomically clearer — **without changing their meaning, labels, or the page layout.**

**Files & diagrams to improve**
- `teaching-guide-app.html` → the three `<figure>` SVGs in the §0.5 "Brain basics" section:
  (1) the neuron/synapse diagram, (2) the sympathetic-vs-parasympathetic comparison, and
  (3) the "key pathways" brain schematic.
- `gut-brain-axis-indepth.html` → the same "key pathways" brain schematic in the Primer section
  (keep it visually identical to the teaching-guide version).

**Rules (do not break these)**
- Keep everything **inline SVG in the same file** — no external images, libraries, or CDNs; the
  pages must still open offline by double-click.
- Keep each `<svg>` with its `viewBox` and `max-width:100%` so it stays responsive; keep the `<title>`.
- Keep the existing palette: indigo `#4f46e5` (reward / neurons), teal `#0e7c73`
  (vagal / parasympathetic / GABA), amber `#b7791f` (HPA / glutamate), rose `#d6455d` (sympathetic),
  plum `#6f4361` (limbic). No off-palette colors.
- Keep all current labels, the figcaptions, and the legend on the pathways diagram. Don't touch the
  surrounding text, the sidebar, or the click-to-reveal quiz JavaScript.

**Improvements to make**
- **Neuron / synapse:** make the neuron read clearly — cell body, branching dendrites, an axon with a
  few myelin segments, a terminal bouton. Show synaptic vesicles releasing into the cleft and
  receptors on the next dendrite, and add a subtle action-potential wave along the axon. Keep the
  "glutamate = excite (+) / GABA = inhibit (−)" pills.
- **Sympathetic vs parasympathetic:** tighten the alignment, add small simple organ glyphs (eye,
  heart, stomach) beside each row, and make the two columns clearly distinct (rose vs teal). Keep it a
  clean two-column comparison.
- **Key-pathways brain:** make the outline look more brain-like (gentle gyri/folds), space the nodes
  so no labels overlap (the hypothalamus / nucleus accumbens / VTA cluster is currently tight), smooth
  the arrow curves, and give the nodes a consistent style. Keep the three color-coded routes (reward,
  vagal, HPA) and the legend exactly as-is in meaning.

**When done:** list what you changed per diagram, and confirm both pages still open offline with no
console errors and the diagrams stay legible at phone width.

---

### One-at-a-time alternatives
If you'd rather do them individually, paste one of these:

- *"In `teaching-guide-app.html`, improve ONLY the neuron/synapse SVG in §0.5.1: clearer neuron with
  dendrites/axon/myelin/terminal, vesicles releasing into the cleft, receptors on the next dendrite,
  a subtle action-potential wave. Keep the palette, labels, and the excite/inhibit pills. Change
  nothing else."*
- *"In both `teaching-guide-app.html` and `gut-brain-axis-indepth.html`, improve ONLY the 'key
  pathways' brain schematic: more brain-like outline with gyri, no overlapping labels, smoother
  arrows. Keep the three color-coded routes and legend identical in meaning, and keep both copies
  matching."*
