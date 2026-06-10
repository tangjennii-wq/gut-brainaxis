# The Gut–Brain Axis 🧠↔️🦠

A self-contained teaching kit on the **gut–brain axis** and the **GLP-1 drugs (Ozempic) that
hijack it** — built to learn from, teach from, and present. Full technical depth (mechanisms,
trials, effect sizes, citation markers) wrapped in plain-language explainers, analogies, and
self-quizzes.

> Educational synthesis — **not medical advice.** Sources (via OpenEvidence) include NEJM, JAMA /
> JAMA Psychiatry, The Lancet / Lancet Psychiatry, Nature, Science, and Wiley journals. The NEJM
> neuropod passage is quoted with attribution; diagrams are original recreations.

---

## 📖 How to read it

**Start here →** open [`index.html`](index.html) in any browser. It's the visual tour (interactive
diagrams) and the front door — every other piece is linked from its "Go Deeper" section.

Then, depending on what you need:

| If you want to… | Open |
|---|---|
| **Learn it deeply, then teach it** | [`teaching-guide-app.html`](teaching-guide-app.html) — the textbook: full depth + plain-terms boxes, analogies, and click-to-reveal self-quiz |
| **Look up a mechanism, trial, or stat** | [`gut-brain-axis-indepth.html`](gut-brain-axis-indepth.html) — the complete reference with citation markers |
| **Present to people** | `Gut-Brain-Axis-Deck-Depth.pptx` — 26-slide deck (depth, but presentable) |
| **Print or hand out** | `Gut-Brain-Axis-Handout-INDEPTH.pdf` — 23-page in-depth handout |

> 💡 **Read the HTML pages live on the web:** turn on **GitHub Pages** (see below) and they render
> as real web pages at `https://<your-username>.github.io/gut-brain-axis/`. (In the plain repo view,
> GitHub shows HTML as source code, not a rendered page.)

---

## 🗂️ What's in here

### Read & learn (HTML — open in a browser)
- **`index.html`** — the main page: interactive visual tour + hub linking everything else.
- **`teaching-guide-app.html`** — study & teaching textbook (Figtree/app style, 11 chapters, 32 self-checks).
- **`teaching-guide.html`** — the same study guide in a warmer serif style.
- **`gut-brain-axis-indepth.html`** — the full technical reference.

### Present & hand out
- **`Gut-Brain-Axis-Deck-Depth.pptx`** — the slide deck (26 slides).
- **`Gut-Brain-Axis-Handout-INDEPTH.pdf`** — the printable handout.

### Build / iterate (for improving the diagrams)
- **`AGENTS.md`** — guide for an AI coding agent (e.g. Codex) on how the diagrams are built + house rules.
- **`CODEX_PROMPT.md`** — ready-to-paste prompts to refine the inline SVG diagrams.
- **`IMAGE-PROMPTS.md`** — prompts for an image model (Gemini/ChatGPT) to generate raster illustrations.

---

## 🧭 What it covers

**The gut–brain axis** — the enteric "second brain," the vagus nerve (80% sensing), neuropod
synapses, the four signaling channels (microbial metabolites, the HPA stress axis, the cholinergic
anti-inflammatory brake, and immune/"leaky gut"), and how dysfunction shows up across IBS, IBD,
depression, autism, and the gut-origin hypothesis of Parkinson's.

**GLP-1 receptor agonists** — how semaglutide reaches the brain through circumventricular organs,
turns down the VTA→nucleus-accumbens dopamine reward circuit, and its clinical signal across mood,
alcohol/substance use, neurodegeneration, and even decision-making.

---

## 🚀 Publish & read on GitHub

```bash
# 1. Create a new EMPTY repo on github.com named "gut-brain-axis" (no README/license).
# 2. From this folder:
git remote add origin https://github.com/<your-username>/gut-brain-axis.git
git branch -M main
git push -u origin main
```

**To read the HTML pages as live web pages:** on GitHub → **Settings → Pages** → *Build and
deployment* → Source: **Deploy from a branch** → Branch: **main / (root)** → Save. After a minute,
your tour is live at `https://<your-username>.github.io/gut-brain-axis/`.
