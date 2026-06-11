const pptxgen = require("pptxgenjs");
const p = new pptxgen();
p.layout = "LAYOUT_WIDE"; // 13.3 x 7.5
p.author = "Cowork"; p.title = "The Gut-Brain Axis — Presentable with Depth";

const INK="201B17", DARK="2A2420", RUST="D2603A", RUSTD="A8431F",
      TEAL="2F7D77", TEALD="1F5651", GOLD="D9A441", PLUM="7A4B6B",
      GREEN="5B8A4F", CREAM="FBF7F2", GREY="6B625A", LINE="E7DDD1", WHITE="FFFFFF";
const HF="Georgia", BF="Calibri";
const sh=()=>({type:"outer",color:"000000",blur:9,offset:3,angle:135,opacity:0.16});

function titleBlock(s,kick,title,kc=RUST){
  s.addText(kick.toUpperCase(),{x:0.6,y:0.42,w:11.5,h:0.3,fontFace:BF,fontSize:13,bold:true,color:kc,charSpacing:3,margin:0});
  s.addText(title,{x:0.6,y:0.70,w:12.1,h:0.95,fontFace:HF,fontSize:30,bold:true,color:INK,margin:0});
}
function card(s,x,y,w,h,fill){ s.addShape(p.shapes.ROUNDED_RECTANGLE,{x,y,w,h,fill:{color:fill||WHITE},line:{color:LINE,width:1},rectRadius:0.09,shadow:sh()}); }
function source(s,txt){ s.addText(txt,{x:0.6,y:7.0,w:12.1,h:0.3,fontFace:BF,fontSize:9.5,italic:true,color:GREY,margin:0}); }
// stat cluster
function statRow(s,y,items){ items.forEach((it,i)=>{const x=0.6+i*(12.1/items.length); const w=12.1/items.length-0.25; card(s,x,y,w,1.7);
  s.addText(it[0],{x:x+0.1,y:y+0.18,w:w-0.2,h:0.7,fontFace:HF,fontSize:30,bold:true,color:it[2],align:"center",margin:0});
  s.addText(it[1],{x:x+0.2,y:y+0.92,w:w-0.4,h:0.7,fontFace:BF,fontSize:12.5,color:INK,align:"center",margin:0,lineSpacingMultiple:1.02});}); }
// 2x2 or row cards with colored edge
function edgeCards(s,startY,cards,cols){
  cols=cols||2; const cw=(cols===2?5.85:3.85);
  cards.forEach((c,i)=>{const x=0.6+(i%cols)*(cw+0.3), y=startY+Math.floor(i/cols)*2.05;
    card(s,x,y,cw,1.85); s.addShape(p.shapes.RECTANGLE,{x,y,w:0.13,h:1.85,fill:{color:c[2]}});
    s.addText(c[0],{x:x+0.3,y:y+0.16,w:cw-0.5,h:0.45,fontFace:BF,fontSize:15.5,bold:true,color:INK,margin:0});
    s.addText(c[1],{x:x+0.3,y:y+0.62,w:cw-0.5,h:1.15,fontFace:BF,fontSize:12.5,color:GREY,margin:0,lineSpacingMultiple:1.03});});
}
function dataTable(s,x,y,w,colW,rows){
  const td=rows.map((r,ri)=>r.map((c,ci)=>{
    if(ri===0) return {text:c,options:{fill:{color:ci===0?INK:TEALD},color:WHITE,bold:true,fontFace:BF,fontSize:13,valign:"middle"}};
    return {text:c,options:{fill:{color:ri%2?WHITE:"FAF6F0"},color:ci===0?TEALD:INK,bold:ci===0,fontFace:BF,fontSize:12.5,valign:"middle"}};}));
  s.addTable(td,{x,y,w,colW,border:{pt:1,color:LINE},margin:[3,6,3,6],rowH:0.42});
}
let s;

/* 1 TITLE */
s=p.addSlide(); s.background={color:DARK};
s.addShape(p.shapes.OVAL,{x:9.7,y:-1.6,w:5.6,h:5.6,fill:{color:RUSTD,transparency:55}});
s.addShape(p.shapes.OVAL,{x:11.2,y:3.6,w:4.8,h:4.8,fill:{color:TEALD,transparency:55}});
s.addText("A FIELD GUIDE TO YOUR INSIDES",{x:0.8,y:1.65,w:10,h:0.4,fontFace:BF,fontSize:15,bold:true,color:GOLD,charSpacing:4,margin:0});
s.addText("The Gut–Brain Axis",{x:0.75,y:2.1,w:11.5,h:1.4,fontFace:HF,fontSize:56,bold:true,color:WHITE,margin:0});
s.addText("How the microbes in your belly hold a lifelong, two-way conversation with your brain — shaping mood, cravings, health, and even the choices you make.",
  {x:0.8,y:3.7,w:9.7,h:1.2,fontFace:BF,fontSize:18,color:"E7DDD1",margin:0,lineSpacingMultiple:1.1});
s.addShape(p.shapes.ROUNDED_RECTANGLE,{x:0.8,y:5.2,w:5.6,h:0.6,fill:{color:RUST},rectRadius:0.3});
s.addText("Made for Sam & family  ·  presentable + depth edition",{x:0.8,y:5.2,w:5.6,h:0.6,fontFace:BF,fontSize:13,bold:true,color:WHITE,align:"center",valign:"middle",margin:0});

/* 2 BIG IDEA */
s=p.addSlide(); s.background={color:WHITE};
titleBlock(s,"The big idea","Two organs, one constant conversation");
s.addText("For centuries we treated the gut as plumbing. We now know it is one of the most heavily wired, chemically chatty organs in the body — and most of that wiring reports UP to the brain.",
  {x:0.6,y:1.8,w:6.0,h:2.0,fontFace:BF,fontSize:17,color:INK,margin:0,lineSpacingMultiple:1.15});
s.addText([{text:"Two cities ",options:{}},{text:"joined by a highway, a postal service, and a private phone line",options:{bold:true,color:RUSTD}},{text:" — all running at once, both directions.",options:{}}],
  {x:0.6,y:4.0,w:6.0,h:1.4,fontFace:HF,fontSize:19,italic:true,color:INK,margin:0,lineSpacingMultiple:1.1});
card(s,7.0,1.9,5.7,3.9,CREAM);
s.addShape(p.shapes.OVAL,{x:7.5,y:2.5,w:1.9,h:1.9,fill:{color:"F7E3DA"},line:{color:RUSTD,width:2}});
s.addText("BRAIN",{x:7.5,y:2.5,w:1.9,h:1.9,fontFace:BF,fontSize:14,bold:true,color:RUSTD,align:"center",valign:"middle",margin:0});
s.addShape(p.shapes.OVAL,{x:10.3,y:3.6,w:1.9,h:1.9,fill:{color:"E3EFEE"},line:{color:TEALD,width:2}});
s.addText("GUT",{x:10.3,y:3.6,w:1.9,h:1.9,fontFace:BF,fontSize:14,bold:true,color:TEALD,align:"center",valign:"middle",margin:0});
s.addShape(p.shapes.LINE,{x:9.4,y:3.45,w:0.9,h:1.05,line:{color:TEAL,width:5,endArrowType:"triangle",beginArrowType:"triangle"}});
s.addText("highway · post · phone line",{x:7.2,y:5.25,w:5.3,h:0.4,fontFace:BF,fontSize:13,italic:true,color:GREY,align:"center",margin:0});

/* 3 THREE STATS */
s=p.addSlide(); s.background={color:WHITE};
titleBlock(s,"By the numbers","Why the gut earns the nickname 'second brain'");
statRow(s,2.4,[["~500M","neurons line the gut — more than the spinal cord",TEAL],
  ["~95%","of the body's serotonin is made in the gut",RUST],
  ["38 trillion","microbes — a chemical factory & second organ",GOLD]]);
s.addText("…and ~80% of the vagus nerve carries signals UP, from gut to brain.",{x:0.6,y:4.5,w:12,h:0.5,fontFace:HF,fontSize:19,italic:true,color:INK,align:"center",margin:0});

/* 4 BRAIN BASICS (depth primer) */
s=p.addSlide(); s.background={color:WHITE};
titleBlock(s,"Orientation","Brain basics — the five ideas everything hangs on");
edgeCards(s,1.95,[
 ["Two chemicals run the show","GABA is the brake (inhibits neurons); glutamate is the accelerator (excites them). Almost every effect here is one pressing on the other.",PLUM],
 ["Dopamine = 'I want that'","Made in the reward circuit. Food, sugar, alcohol, nicotine all push it. The GLP-1 drugs turn it down.",RUST],
 ["The reward circuit","VTA → nucleus accumbens (mesolimbic dopamine). VTA dopamine neurons have a GABA 'brake' sitting on them — the whole GLP-1 story.",TEAL],
 ["The walled brain","The blood–brain barrier seals the brain off — except a few leaky 'windows' (CVOs) where drugs like semaglutide sneak in.",GREEN]],2);

/* 5 ENS depth */
s=p.addSlide(); s.background={color:WHITE};
titleBlock(s,"The hardware · 1","A second brain: the enteric nervous system");
s.addText([{text:"200–600 million neurons",options:{bold:true,color:TEALD}},{text:" line the gut — more than the spinal cord — in two plexuses: the ",options:{}},{text:"myenteric (Auerbach's)",options:{italics:true}},{text:" runs motility; the ",options:{}},{text:"submucosal (Meissner's)",options:{italics:true}},{text:" runs secretion & blood flow.",options:{}}],
  {x:0.6,y:1.85,w:6.1,h:1.9,fontFace:BF,fontSize:16,color:INK,margin:0,lineSpacingMultiple:1.15});
s.addText([{text:"20+ neurotransmitters",options:{bold:true,color:RUSTD}},{text:" — acetylcholine, nitric oxide, serotonin, GABA, dopamine. ",options:{}},{text:"~95% of body serotonin",options:{bold:true,color:RUSTD}},{text:" is gut-made (enzymes TPH1 in EC cells, TPH2 in neurons). Enteric glia outnumber the neurons.",options:{}}],
  {x:0.6,y:3.9,w:6.1,h:2.0,fontFace:BF,fontSize:16,color:INK,margin:0,lineSpacingMultiple:1.15});
card(s,7.0,1.95,5.7,4.2,CREAM);
s.addText("It can run digestion entirely on its own — without checking in with the brain.",{x:7.3,y:2.25,w:5.1,h:1.0,fontFace:HF,fontSize:18,italic:true,color:TEALD,margin:0,lineSpacingMultiple:1.1});
s.addText([{text:"Why we call it the “second brain”:\n",options:{bold:true,color:INK}},{text:"same neurotransmitters, same architecture (neurons + glia), its own reflex circuits — a nervous system in your gut wall.",options:{color:GREY}}],
  {x:7.3,y:3.6,w:5.1,h:2.2,fontFace:BF,fontSize:14.5,margin:0,lineSpacingMultiple:1.12});

/* 6 VAGUS 80/20 */
s=p.addSlide(); s.background={color:WHITE};
titleBlock(s,"The hardware · 2","The vagus nerve: an 80% sensing highway");
s.addText([{text:"~80% of vagal fibers carry signals UP",options:{bold:true,color:TEALD}},{text:" (gut→brain); only 20% carry commands down. Your gut talks far more than it listens — a giant sensory organ streaming a status report to your head.",options:{}}],
  {x:0.6,y:1.85,w:6.0,h:2.0,fontFace:BF,fontSize:17,color:INK,margin:0,lineSpacingMultiple:1.15});
s.addShape(p.shapes.ROUNDED_RECTANGLE,{x:0.6,y:4.2,w:6.0,h:1.4,fill:{color:"FCF4E3"},rectRadius:0.1});
s.addText([{text:"“Gut feeling” is literal — ",options:{bold:true,color:GOLD}},{text:"the gut streams real-time data the brain blends into mood, appetite and alertness.",options:{}}],
  {x:0.85,y:4.35,w:5.5,h:1.1,fontFace:BF,fontSize:15.5,color:INK,valign:"middle",margin:0,lineSpacingMultiple:1.1});
card(s,7.0,1.9,5.7,3.9,CREAM);
s.addImage({path:"fig-vagus-highway.png",x:7.18,y:2.14,w:5.34,h:3.0});
s.addText("Gut-to-brain highway",{x:7.35,y:5.28,w:5.0,h:0.28,fontFace:BF,fontSize:11.5,italic:true,color:GREY,align:"center",margin:0});

/* 7 Vagus pathways depth */
s=p.addSlide(); s.background={color:WHITE};
titleBlock(s,"The hardware · 2 (detail)","Three lines in and out of the gut");
edgeCards(s,1.95,[
 ["Afferent (bottom-up)","Nodose-ganglion fibers sense stretch & chemistry → the NTS in the brainstem → hypothalamus, amygdala, hippocampus, insular/prefrontal cortex. One route even links gut signals to memory.",TEAL],
 ["Efferent (top-down)","From the dorsal motor nucleus (DMV) — but they don't touch gut muscle directly; they synapse onto the enteric nervous system, which executes the command.",RUST],
 ["Spinal afferents","Splanchnic & pelvic fibers (dorsal-root ganglia) carry pain/noxious signals — the main route for visceral PAIN, vs the vagus carrying everyday physiological chatter.",PLUM],
 ["The integration hub: NTS","The nucleus tractus solitarius is the brain's 'inbox' for the gut — and, later, exactly where the GLP-1 drugs land.",GOLD]],2);

/* 8 NEUROPOD */
s=p.addSlide(); s.background={color:WHITE};
titleBlock(s,"A discovery that changed the field","The millisecond synapse: how the gut tastes sugar");
s.addText([{text:"Certain gut cells grow a tail — a ",options:{}},{text:"neuropod",options:{bold:true,color:TEALD}},{text:" — that wires directly into the vagus (Bohórquez 2015; Kaelberer 2018 showed it uses glutamate, signaling in milliseconds). They tell ",options:{}},{text:"real sugar from sweetener",options:{bold:true,color:RUSTD}},{text:": glucose fires a strong SGLT1 signal driving dopamine reward; sweeteners fire only a weak one.",options:{}}],
  {x:0.6,y:1.8,w:6.1,h:2.6,fontFace:BF,fontSize:16,color:INK,margin:0,lineSpacingMultiple:1.15});
card(s,7.0,1.85,5.7,4.6,"F3F0EC");
s.addText("“",{x:7.1,y:1.7,w:1,h:1,fontFace:HF,fontSize:60,color:RUST,margin:0});
s.addText("Some enteroendocrine cells have long, basal extensions, called neuropods, which synapse with vagal afferent fibers to directly convey sugar-sensing information to the brain within milliseconds.",
  {x:7.5,y:2.55,w:4.8,h:2.6,fontFace:HF,fontSize:16.5,italic:true,color:"3A322C",margin:0,lineSpacingMultiple:1.15});
s.addText([{text:"— Josephine M. Egan, M.D.\n",options:{bold:true}},{text:"New England Journal of Medicine, 2024",options:{color:GREY}}],
  {x:7.5,y:5.4,w:4.8,h:0.9,fontFace:BF,fontSize:13,color:INK,margin:0});

/* 9 FOUR CHANNELS */
s=p.addSlide(); s.background={color:WHITE};
titleBlock(s,"The software","Four channels gut and brain talk on");
edgeCards(s,1.95,[
 ["Microbial chemicals","SCFAs from fiber calm inflammation & feed the brain; some microbes make GABA, dopamine, serotonin outright.",TEAL],
 ["The stress line (HPA)","Stress hormones loosen the gut lining & unsettle microbes — a vicious loop back to the brain.",PLUM],
 ["The anti-inflammatory brake","The vagus dials inflammation DOWN via acetylcholine on immune cells. Low vagal tone → more inflammation.",GREEN],
 ["The immune wire & 'leaky gut'","Bad microbes let bacterial bits into the blood, tripping the immune alarm toward the brain.",RUST]],2);

/* 10 SCFA depth */
s=p.addSlide(); s.background={color:WHITE};
titleBlock(s,"The software · channel 1","Short-chain fatty acids: fiber → brain signals");
s.addText("Bacteria ferment fiber into butyrate, propionate & acetate, which act on three receptors:",{x:0.6,y:1.8,w:12,h:0.5,fontFace:BF,fontSize:16,color:INK,margin:0});
edgeCards(s,2.4,[
 ["FFAR2 (GPR43)","On gut endocrine & immune cells — triggers GLP-1 & PYY release (the appetite hormones).",TEAL],
 ["FFAR3 (GPR41)","On enteric, vagal, dorsal-root & sympathetic neurons — a direct neural sensor of microbial activity.",RUST],
 ["GPR109a","On colon epithelium & immune cells — part of the anti-inflammatory tone.",PLUM],
 ["Butyrate's day job","Also an HDAC inhibitor — changes gene expression, calms microglia, and SCFAs help seal the blood–brain barrier.",GREEN]],2);

/* 11 TRYPTOPHAN table */
s=p.addSlide(); s.background={color:WHITE};
titleBlock(s,"The software · channel 1 (detail)","One amino acid, three fates: tryptophan");
dataTable(s,0.6,2.0,12.1,[3.0,3.4,5.7],[
 ["Pathway","Products","Why the brain cares"],
 ["Serotonin","5-HT (TPH1/TPH2)","~95% of body serotonin; tunes vagus & ENS (doesn't cross BBB)"],
 ["Kynurenine","Kynurenic vs quinolinic acid","Inflammation (IDO) tips the balance toward the NEUROTOXIC side"],
 ["Indole","Indole-3-aldehyde, tryptamine","Activate AhR → IL-22 → barrier integrity & BBB upkeep"]]);
s.addShape(p.shapes.ROUNDED_RECTANGLE,{x:0.6,y:4.9,w:12.1,h:1.1,fill:{color:"FCF4E3"},rectRadius:0.1});
s.addText([{text:"The key idea:  ",options:{bold:true,color:GOLD}},{text:"inflammation flips tryptophan from making calming serotonin to making neurotoxic quinolinic acid — a direct chemical link from gut inflammation to mood.",options:{}}],
  {x:0.85,y:5.0,w:11.6,h:0.9,fontFace:BF,fontSize:15,color:INK,valign:"middle",margin:0,lineSpacingMultiple:1.05});

/* 12 channels 2-4 depth */
s=p.addSlide(); s.background={color:WHITE};
titleBlock(s,"The software · channels 2–4","Stress, the brake, and leaky gut — in detail");
edgeCards(s,1.95,[
 ["HPA stress axis","CRF from the brain raises gut permeability & dysbiosis. CRF-R1 speeds the colon (stress diarrhea); CRF-R2 slows the stomach. Germ-free mice over-react to stress until colonized.",PLUM],
 ["Cholinergic brake","Vagus → acetylcholine → α7nAChR on macrophages → shuts off TNF-α. A splenic relay extends it. Low vagal tone shows up in IBD & IBS.",GREEN],
 ["Leaky gut → brain","LPS & peptidoglycan cross into blood → TLR4/NF-κB → IL-1β, IL-6, TNF-α reach the brain. Microbes even train microglia (immature in germ-free mice).",RUST],
 ["Bravo 2011 — the proof","One probiotic strain changed brain GABA receptors & reduced anxiety in mice — abolished by cutting the vagus. The cleanest proof microbes signal THROUGH the vagus.",TEAL]],2);

/* 13 MICROBIOME MAP */
s=p.addSlide(); s.background={color:WHITE};
titleBlock(s,"The microbiome–gut–brain map","From what you eat, to messengers, to molecular keys");
card(s,0.75,1.75,11.8,5.25,CREAM);
s.addImage({path:"fig-microbiome-map.png",x:2.05,y:1.9,w:9.2,h:5.18});
s.addShape(p.shapes.RECTANGLE,{x:0.75,y:6.66,w:11.8,h:0.34,fill:{color:WHITE,transparency:12},line:{color:WHITE,transparency:100}});
source(s,"Original recreation of the microbiome–gut–brain axis figure (Microbial Biotechnology, 2024).");

/* 14 WHEN IT BREAKS */
s=p.addSlide(); s.background={color:WHITE};
titleBlock(s,"When the axis breaks down","Trouble at one end shows up at the other");
edgeCards(s,1.95,[
 ["IBS","A 'disorder of gut–brain interaction.' Doubles–triples anxiety (HR 2.89) & depression (HR 2.71) risk — and vice versa. ~60% have visceral hypersensitivity.",TEAL],
 ["IBD (Crohn's, colitis)","Active disease ~2× anxiety (OR 2.5), 3× depression (OR 3.1) vs remission. Depression predicts more flares (RR 1.60) & surgery (RR 1.63).",RUST],
 ["Depression","A transdiagnostic signature: depleted butyrate-makers (Faecalibacterium, Coprococcus), enriched Eggerthella — shared across depression, bipolar, schizophrenia.",PLUM],
 ["Autism","GI issues in 47–80% of children. Transplanting ASD-donor microbes into germ-free mice induces autism-like behavior.",GREEN]],2);

/* 15 PARKINSON */
s=p.addSlide(); s.background={color:DARK};
s.addText("THE HEADLINE CASE",{x:0.6,y:0.5,w:11,h:0.35,fontFace:BF,fontSize:13,bold:true,color:GOLD,charSpacing:3,margin:0});
s.addText("Parkinson's may start in the gut",{x:0.6,y:0.86,w:12,h:0.9,fontFace:HF,fontSize:30,bold:true,color:WHITE,margin:0});
s.addText("α-synuclein — the Parkinson's protein — shows up in gut nerves years before the brain; constipation often precedes the tremor by a decade. The 'body-first' idea: it begins in the gut and climbs the vagus, prion-style.",
  {x:0.6,y:1.95,w:7.0,h:1.9,fontFace:BF,fontSize:16.5,color:"E7DDD1",margin:0,lineSpacingMultiple:1.15});
s.addImage({path:"fig-parkinsons-spread.png",x:0.6,y:4.0,w:3.74,h:2.1});
card(s,7.9,1.95,4.8,4.0,"33302B");
s.addText("The evidence",{x:8.15,y:2.15,w:4.3,h:0.5,fontFace:BF,fontSize:15,bold:true,color:GOLD,margin:0});
s.addText([{text:"Kim 2019:  ",options:{bold:true,color:"F2C879"}},{text:"α-synuclein injected into the mouse gut marched to the brain — blocked by cutting the vagus.",options:{}}],
  {x:8.15,y:2.7,w:4.3,h:1.3,fontFace:BF,fontSize:14,color:"E7DDD1",margin:0,lineSpacingMultiple:1.1});
s.addText([{text:"Registries:  ",options:{bold:true,color:"F2C879"}},{text:"vagotomy decades earlier → ~41–47% lower PD risk (Swedish HR 0.59, Danish HR 0.53).",options:{}}],
  {x:8.15,y:4.05,w:4.3,h:1.6,fontFace:BF,fontSize:14,color:"E7DDD1",margin:0,lineSpacingMultiple:1.1});
s.addText("Caveat: most human gut–brain links are correlations. Animal 'cut-the-wire' studies are the strongest causal evidence — proving cause in people is hard.",
  {x:0.6,y:6.2,w:7.1,h:0.9,fontFace:BF,fontSize:13,italic:true,color:"C9BFB4",margin:0,lineSpacingMultiple:1.1});

/* 16 THERAPEUTICS depth */
s=p.addSlide(); s.background={color:WHITE};
titleBlock(s,"Fixing it","Therapeutics — with the trial numbers");
edgeCards(s,1.95,[
 ["Probiotics","2025 meta (23 RCTs): depression SMD −0.96, anxiety SMD −0.59. But CANMAT rates them only cautious third-line — trials inconsistent.",TEAL],
 ["Vagus stimulation (VNS)","RECOVER (n=493) missed its primary endpoint but improved quality of life & function; taVNS matched citalopram in one RCT.",PLUM],
 ["Diet — the cleanest evidence","SMILES (2017): Mediterranean diet beat control, Cohen's d −1.16, remission 32% vs 8%, NNT 4.1.",GREEN],
 ["Fecal transplant (FMT)","2025 meta (12 RCTs): depression SMD −1.21, stronger via GI delivery. Promising but no large RCTs yet.",RUST]],2);

/* 17 DECISIONS */
s=p.addSlide(); s.background={color:WHITE};
titleBlock(s,"The plot twist","Your gut and your decisions");
s.addText([{text:"Dantas et al. (2022)",options:{bold:true,color:RUSTD}},{text:" — the first placebo-controlled trial showing probiotics change economic decisions. Over 28 days the probiotic group became ",options:{}},{text:"less risk-taking",options:{bold:true}},{text:" and ",options:{}},{text:"more patient",options:{bold:true}},{text:" on real-money games.",options:{}}],
  {x:0.6,y:1.85,w:6.2,h:2.2,fontFace:BF,fontSize:17,color:INK,margin:0,lineSpacingMultiple:1.15});
s.addText("Two of economics' most 'fixed' assumptions — risk appetite and patience — shifted from a change in gut bacteria.",
  {x:0.6,y:4.2,w:6.2,h:1.6,fontFace:HF,fontSize:19,italic:true,color:INK,margin:0,lineSpacingMultiple:1.1});
card(s,7.2,1.95,5.5,2.0,CREAM); s.addText("Risk",{x:7.45,y:2.15,w:5,h:0.4,fontFace:BF,fontSize:17,bold:true,color:TEALD,margin:0});
s.addText("Probiotic group took fewer risky gambles than placebo.",{x:7.45,y:2.65,w:5.0,h:1.0,fontFace:BF,fontSize:15,color:GREY,margin:0,lineSpacingMultiple:1.1});
card(s,7.2,4.15,5.5,2.0,CREAM); s.addText("Patience",{x:7.45,y:4.35,w:5,h:0.4,fontFace:BF,fontSize:17,bold:true,color:RUSTD,margin:0});
s.addText("They chose more future-oriented options — waiting for the bigger later reward.",{x:7.45,y:4.85,w:5.0,h:1.1,fontFace:BF,fontSize:15,color:GREY,margin:0,lineSpacingMultiple:1.1});

/* 18 GLP-1 INTRO */
s=p.addSlide(); s.background={color:DARK};
s.addShape(p.shapes.OVAL,{x:10.2,y:-1.4,w:5,h:5,fill:{color:RUSTD,transparency:60}});
s.addText("PART TWO · THE SEQUEL",{x:0.7,y:1.6,w:11,h:0.4,fontFace:BF,fontSize:14,bold:true,color:GOLD,charSpacing:3,margin:0});
s.addText("Ozempic and the gut–brain axis",{x:0.7,y:2.05,w:12,h:1.0,fontFace:HF,fontSize:42,bold:true,color:WHITE,margin:0});
s.addText("GLP-1 is one of those gut hormones — released after you eat, it tells the brain you're full. Semaglutide (Ozempic / Wegovy) is a lab-made copy. Built for diabetes and weight, it's really a master key into the gut–brain reward system.",
  {x:0.7,y:3.4,w:9.8,h:2.0,fontFace:BF,fontSize:18,color:"E7DDD1",margin:0,lineSpacingMultiple:1.25});

/* 19 COMPARISON TABLE */
s=p.addSlide(); s.background={color:WHITE};
titleBlock(s,"Two GLP-1s, two modes","Your own hormone vs. the drug");
dataTable(s,0.6,1.95,12.1,[3.0,4.4,4.7],[
 ["Feature","Your own GLP-1","The drug (semaglutide)"],
 ["Half-life","1–2 minutes","~5–7 days"],
 ["Mechanism","Whispers to nearby vagus","Travels in blood + reaches brain directly"],
 ["Brain entry","Via vagus & brainstem","Through 'leaky' windows (CVOs)"],
 ["Needs the vagus?","Yes, for quick effects","No — works without it long-term"],
 ["Regions reached","Mostly local brainstem","Brainstem, hypothalamus, reward & emotion"],
 ["Blood levels","Small post-meal bump","Steady, far above natural levels"]]);
source(s,"Recreation of the OpenEvidence comparison table.");

/* 20 BRAIN ACCESS depth */
s=p.addSlide(); s.background={color:WHITE};
titleBlock(s,"How the drug gets in","It skips the brain's bouncer");
s.addText([{text:"Semaglutide barely crosses the blood–brain barrier",options:{bold:true,color:RUSTD}},{text:" (brain:plasma <0.01). It slips in through ",options:{}},{text:"circumventricular organs (CVOs)",options:{bold:true,color:TEALD}},{text:" — the area postrema & median eminence — where the barrier is deliberately leaky. With a 5–7 day half-life it parks there at supraphysiological levels. Its energy effects need Adcyap1+ neurons in the area postrema/NTS.",options:{}}],
  {x:0.6,y:1.85,w:6.2,h:3.2,fontFace:BF,fontSize:16,color:INK,margin:0,lineSpacingMultiple:1.2});
card(s,7.2,1.95,5.5,4.3,CREAM);
s.addImage({path:"fig-bbb-cvo.png",x:7.4,y:2.35,w:5.1,h:2.87});
s.addText("Leaky CVO windows let circulating signals reach brain circuits.",{x:7.45,y:5.45,w:5.0,h:0.46,fontFace:BF,fontSize:11.4,italic:true,color:RUSTD,align:"center",margin:0,lineSpacingMultiple:1.05});

/* 21 REWARD FLOW */
s=p.addSlide(); s.background={color:WHITE};
titleBlock(s,"What it does to craving","Turning down the dopamine");
s.addText("In the reward hub, GLP-1 receptors sit mostly on the BRAKES (VTA GABA neurons). The drug presses them, dopamine drops in the nucleus accumbens, and the pull of whatever you craved fades.",
  {x:0.6,y:1.8,w:12,h:0.95,fontFace:BF,fontSize:17,color:INK,margin:0,lineSpacingMultiple:1.1});
card(s,2.65,2.75,8.0,3.95,CREAM);
s.addImage({path:"fig-reward-circuit.png",x:3.15,y:2.95,w:7.0,h:3.94});
s.addShape(p.shapes.RECTANGLE,{x:2.65,y:6.24,w:8.0,h:0.46,fill:{color:CREAM},line:{color:CREAM,transparency:100}});
s.addText("Caveat (Zhu 2025): in mice, dopamine activity & appetite recovered during repeated dosing — possible tolerance.",
  {x:0.6,y:6.92,w:12,h:0.5,fontFace:BF,fontSize:13.2,italic:true,color:GREY,align:"center",margin:0});

/* 22 IN PEOPLE */
s=p.addSlide(); s.background={color:WHITE};
titleBlock(s,"What shows up in people","Promising, mixed, and one big surprise");
edgeCards(s,1.95,[
 ["Alcohol — strongest signal","Klausen (Lancet 2026): semaglutide cut heavy-drinking days −13.7pp, NNT 4.3 — beating naltrexone/acamprosate (NNT ≥7). Hendershot 2025 agrees.",RUST],
 ["Other habits","Lower use of nicotine (HR 0.80), cocaine (0.80), opioids (0.75), cannabis (0.86). DPP-4 inhibitors don't work — needs drug-level GLP-1R activation.",TEAL],
 ["Mood","Swedish cohort: 42% lower risk of worsening mental illness (aHR 0.62) — agent-specific (not exenatide/dulaglutide).",PLUM],
 ["Suicidality — resolved","FDA & EMA: no causal link (144-RCT meta RR 0.76). The signal was media-driven reporting bias after late 2023.",GREEN]],2);

/* 23 NEURODEGENERATION table */
s=p.addSlide(); s.background={color:WHITE};
titleBlock(s,"The brain itself","Neurodegeneration: promise, then phase-3 reality");
s.addText([{text:"Epidemiology dazzled — GLP-1 RAs tied to 45% lower dementia (OR 0.55). Then the trials landed:",options:{}}],
  {x:0.6,y:1.8,w:12,h:0.5,fontFace:BF,fontSize:16,color:INK,margin:0});
dataTable(s,0.6,2.35,12.1,[3.6,3.0,1.4,1.6,2.5],[
 ["Trial","Agent","N","Length","Outcome"],
 ["Exenatide-PD (Athauda 2017)","Exenatide","62","48 wk","Positive"],
 ["LIXIPARK (Meissner 2024)","Lixisenatide","156","12 mo","Positive (borderline)"],
 ["Exenatide-PD3 (2025)","Exenatide ph.3","194","96 wk","NEGATIVE (definitive)"],
 ["EVOKE (Alzheimer's)","Oral semaglutide","—","—","Missed cognitive endpoint"]]);
s.addShape(p.shapes.ROUNDED_RECTANGLE,{x:0.6,y:5.2,w:12.1,h:1.0,fill:{color:"FCF4E3"},rectRadius:0.1});
s.addText([{text:"The lesson:  ",options:{bold:true,color:GOLD}},{text:"big observational hope didn't survive the rigorous trials. Correlation isn't cure — a perfect teaching moment.",options:{}}],
  {x:0.85,y:5.3,w:11.6,h:0.8,fontFace:BF,fontSize:15,color:INK,valign:"middle",margin:0});

/* 24 DECISION-MAKING Gill */
s=p.addSlide(); s.background={color:DARK};
s.addText("THE CIRCLE CLOSES",{x:0.7,y:1.4,w:11,h:0.4,fontFace:BF,fontSize:14,bold:true,color:GOLD,charSpacing:3,margin:0});
s.addText("A gut-hormone drug shifts how we decide",{x:0.7,y:1.85,w:12,h:0.9,fontFace:HF,fontSize:32,bold:true,color:WHITE,margin:0});
s.addText([{text:"Gill et al. (JAMA Psychiatry 2026):  ",options:{bold:true,color:"F2C879"}},{text:"in 16 weeks of oral semaglutide, MDD patients became more willing to work for rewards — parameter k (effort cost) fell (β −1.737, P=.03) — ",options:{}},{text:"independent of any change in mood.",options:{bold:true,color:"F2C879"}}],
  {x:0.7,y:3.05,w:11.6,h:2.0,fontFace:BF,fontSize:19,color:"E7DDD1",margin:0,lineSpacingMultiple:1.3});
s.addText("Probiotics nudged risk & patience; semaglutide nudged effort. Same reward dashboard, same hidden hand reaching for it from the gut.",
  {x:0.7,y:5.4,w:11.6,h:1.2,fontFace:HF,fontSize:18,italic:true,color:GOLD,margin:0,lineSpacingMultiple:1.15});

/* 25 TAKEAWAYS */
s=p.addSlide(); s.background={color:WHITE};
titleBlock(s,"In a nutshell","Takeaways for the dinner table");
edgeCards(s,1.95,[
 ["1 · You have two brains","~500M gut neurons, 95% of serotonin — talking to your head constantly, mostly upward.",RUST],
 ["2 · Microbes are messengers","Fiber → calming fatty acids; the right bugs make neurotransmitters. Diet tunes the chemistry.",TEAL],
 ["3 · Breakdowns go both ways","IBS → depression → Parkinson's — gut and brain rise and fall together; sometimes the gut leads.",PLUM],
 ["4 · It reaches your choices","Probiotics & GLP-1 drugs both nudge the reward circuit — risk, patience, craving, effort.",GREEN]],2);

/* 26 CLOSING */
s=p.addSlide(); s.background={color:DARK};
s.addShape(p.shapes.OVAL,{x:10.6,y:-1.6,w:4.6,h:4.6,fill:{color:TEALD,transparency:55}});
s.addText("SO WHAT CAN A FAMILY DO?",{x:0.7,y:1.2,w:11,h:0.4,fontFace:BF,fontSize:14,bold:true,color:GOLD,charSpacing:3,margin:0});
s.addText("The low-risk levers all point the same way",{x:0.7,y:1.65,w:12,h:0.9,fontFace:HF,fontSize:30,bold:true,color:WHITE,margin:0});
[[GOLD,"Eat fiber & fermented foods — feed the good bugs"],[TEAL,"Lean Mediterranean — the one diet with trial evidence for mood"],[PLUM,"Manage stress & sleep — the stress line is real"],[RUST,"Move your body — vagal tone and microbes both benefit"]].forEach((a,i)=>{const y=2.9+i*0.88; s.addShape(p.shapes.OVAL,{x:0.95,y:y+0.12,w:0.42,h:0.42,fill:{color:a[0]}}); s.addText(a[1],{x:1.7,y,w:10.6,h:0.66,fontFace:BF,fontSize:18,color:"E7DDD1",valign:"middle",margin:0});});
s.addText("Your gut isn't just where food goes — it's a sensing, chemical, decision-shaping organ in lifelong conversation with your brain, and medicine is only now learning to listen in.",
  {x:0.7,y:6.5,w:11.8,h:0.9,fontFace:HF,fontSize:15,italic:true,color:GOLD,margin:0,lineSpacingMultiple:1.1});

p.writeFile({fileName:"Gut-Brain-Axis-Deck-Depth.pptx"}).then(f=>console.log("WROTE",f));
