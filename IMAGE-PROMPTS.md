# Image-model prompts — gut–brain axis diagrams

Generate these in **Gemini** or **ChatGPT (GPT-image)**, then drop the PNGs into this folder
(`~/Desktop/Projects/gut-brain-axis/`) using the **filename listed under each prompt**. Tell me
when they're in and I'll embed them into the HTML pages and the deck.

## Read this first (3 tips that make or break it)

1. **Keep text labels short or skip them.** Image models misspell. Either request *no text* and
   let me add precise labels in the page/slide, or keep labels to 1–2 words and check spelling.
   Each prompt below says which to do.
2. **Reuse the STYLE BLOCK** (below) at the top of every prompt so the whole set looks like one
   family of figures. Paste STYLE BLOCK + the specific prompt together.
3. **Aspect ratio matters.** Use the ratio noted per image (16:9 for slides, etc.). In ChatGPT say
   "make it 16:9"; in Gemini pick the matching aspect option.

---

## ★ STYLE BLOCK (paste at the top of every prompt)

> Clean modern scientific/medical illustration, flat vector style with soft cell-shaded gradients
> and gentle shadows. Friendly and editorial, not clinical or gory. Cohesive warm palette:
> terracotta/rust (#C1542F) for the brain and brain-side elements, teal/sage green (#2F7D77) for
> the gut and gut-side elements, warm gold (#D9A441) for highlights, soft cream background
> (#FBF7F2), charcoal (#231F1B) for outlines and labels. Rounded organic shapes, even line weight,
> generous whitespace, balanced composition. No photorealism, no horror, no exposed viscera —
> stylized and approachable.

---

## 1 · The vagus-nerve highway  →  `fig-vagus-highway.png`  · 16:9
A stylized cross-section showing a friendly brain (terracotta) on the left connected to a stylized
stomach/intestine (teal) on the right by a single thick nerve "cable" — the vagus nerve. Show MANY
small signal arrows flowing from gut toward brain (a thick bundle) and only a FEW thin arrows
flowing brain to gut, visually conveying an ~80% up / 20% down ratio. Small glowing nodes where the
nerve meets the brainstem. **Keep text minimal:** at most the words "GUT" and "BRAIN" — I'll add
the 80%/20% labels myself. Clean, infographic feel.

## 2 · The neuropod millisecond synapse  →  `fig-neuropod.png`  · 4:3
Close-up illustration of the gut lining: a row of epithelial cells, with one special
enteroendocrine cell (teal) growing a long tail downward that forms a synapse onto a nerve fiber
(the vagus). In the gut interior above, show a glucose molecule (gold hexagon) sending a bright
strong signal-spark into the cell, versus an artificial-sweetener molecule (grey) sending a faint
weak spark. Little lightning/spark motifs to suggest "milliseconds." **No text labels** — pure
illustration; I'll annotate. Crisp, educational, slightly zoomed-in cellular view.

## 3 · The microbiome → gut–brain axis map  →  `fig-microbiome-map.png`  · 16:9
A three-zone horizontal infographic. LEFT zone: icons for what shapes the microbiome (an apple/fiber,
DNA helix, pill bottle, a stressed face, a baby, a running figure) arranged around a central glowing
gut full of cute stylized bacteria. MIDDLE zone: a stylized body silhouette showing four labeled
channels rising from gut to brain — a hormone droplet, a nerve line, an immune cell, a stress bolt.
RIGHT zone: three molecule cards (a fatty-acid squiggle, a hexagonal ring for indoles, a steroid
skeleton for bile acids). Cohesive, poster-like. **Keep any text to single short words** and expect
me to redo the labels for accuracy. Warm palette, lots of structure.

## 4 · The reward circuit & the GLP-1 brake  →  `fig-reward-circuit.png`  · 16:9
A stylized brain interior showing the mesolimbic reward pathway: a cluster of dopamine neurons in
the VTA sending an arrow up to the nucleus accumbens, with dopamine shown as glowing gold dots.
Sitting ON the dopamine neurons, show inhibitory GABA "brake" neurons (in plum/purple). A
semaglutide drug molecule (a small capsule/peptide icon in rust) is pressing the GABA brake, and
the dopamine dots downstream are visibly fewer/dimmer — conveying "craving turned down." **No text
except maybe "VTA" and "NAc"** (check spelling) — I'll add the rest. Elegant, circuit-diagram-meets-
illustration.

## 5 · How the drug sneaks past the blood–brain barrier  →  `fig-bbb-cvo.png`  · 4:3
A stylized brain protected by a glowing wall/membrane (the blood–brain barrier). Most drug molecules
(rust capsules in the bloodstream) bounce off the wall — but a few slip through a small number of
"open windows" (the circumventricular organs), shown as gold gaps in the wall, and reach the inner
brain. Convey "guarded wall with a few open gates." **No text labels.** Clean, conceptual, a little
bit playful.

## 6 · The four communication channels  →  `fig-four-channels.png`  · 16:9
A clean overview: gut at the bottom, brain at the top, connected by four distinct parallel "lanes,"
each with its own icon and color — (1) microbial chemicals (gold molecule), (2) HPA stress hormones
(plum bolt), (3) the vagus/anti-inflammatory nerve brake (teal nerve), (4) immune cells (green cell).
Each lane is visually separate but parallel. **Single-word labels max**, expect me to relabel.
Balanced, symmetric, infographic.

## 7 · (Optional) Parkinson's: gut-to-brain spread  →  `fig-parkinsons-spread.png`  · 16:9
A stylized side view showing a misfolded protein (small red clumps, α-synuclein) starting in the gut
wall and travelling UP the vagus nerve in a dotted trail into the brainstem and then the brain,
prion-style. A small inset showing a "scissors cutting the nerve" that stops the trail (the vagotomy
finding). Serious-but-clean, not scary. **No text labels.**

---

## After you generate them
- Save each with the exact filename above into this folder.
- A quick gut-check: is the color-coding consistent (brain = rust, gut = teal)? Regenerate any that
  drift off-palette — consistency is what makes them read as a set.
- Ping me ("images are in") and I'll wire them into `index.html`, the teaching guide, and the deck,
  adding crisp, correctly-spelled labels on top where needed.

## Meanwhile — the Codex track (parallel)
Open `~/Desktop/Projects/gut-brain-axis/` in Codex and paste the prompt from **`CODEX_PROMPT.md`**.
Codex refines the *existing inline SVG* diagrams (proportions, shading, molecule shapes) — a good
fallback/complement to the AI images. The two tracks don't conflict: AI images are raster art I embed;
the SVGs stay editable in `index.html`.
