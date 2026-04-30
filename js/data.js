/**
 * ============================================================
 * data.js
 * ============================================================
 *
 * BIO            → updates hero, about section, contact links
 * STATS          → the 4 numbers on the hero card
 * OPEN_TO        → the tags on the hero card + contact section
 * EXPERIENCE     → timeline entries
 * SKILLS         → skill groups
 * PROJECTS       → project cards (see instructions below)
 *
 * ── HOW TO ADD A PROJECT ────────────────────────────────────
 * 1. Copy one object from PROJECTS and paste it at the top
 *    of the array (or wherever you want it to appear).
 * 2. Set featured: true on at most ONE project — it gets the
 *    full-width slot with a preview panel.
 * 3. Set liveUrl, githubUrl, huggingfaceUrl to null if not applicable.
 * 4. For a screenshot: save PNG to assets/ and set
 *    previewImage: "assets/your-file.png"
 * 5. rowGroup controls which row a non-featured card sits in.
 *    Cards with the same rowGroup number appear side by side.
 *    Change groupSize to 2 or 3 to control columns in that row.
 * ────────────────────────────────────────────────────────────
 */

const BIO = {
  name:     "Aisha Adam Opaluwa",
  initials: "aao",
  role:     "AI Researcher & Engineer",
  tagline:  "MSc Engineering & AI · Carnegie Mellon",
  blurb: `I build AI systems with a focus on evaluation design, interpretability, and rigorous failure analysis.
Background in NLP, scientific computing, and five years of production
software engineering.`,
  about: [
    `I'm an AI researcher and engineer at CMU, currently working as a Research Assistant. My work sits at the intersection of <strong>NLP systems</strong>, <strong>model evaluation</strong>, and <strong>computational materials science</strong>, with a consistent thread of caring whether things actually work and being able to demonstrate why. That means evaluation design, interpretability, and building frameworks that surface failure modes before deployment.`,
    `I TA'd Introduction to Deep Learning at CMU, which sharpened a conviction that <strong>explaining something clearly is how you know you understand it</strong>. That shows up in how I build: not just accuracy, but where models break, and why.`,
    `With five years experience building production software — privacy-preserving AI infrastructure (FHE, MPC, blockchain), full-stack DeFi protocols on Tezos with smart contract integration, and genomics platforms, I think carefully about system design, tradeoffs, and how decisions hold up in practice.`,
    `Targeting <strong>ML/AI engineering and research roles</strong>. Also genuinely interested in human-AI interaction and AI ethics research — my computational materials science thread is a foundation for scientific ML/AI.`,
  ],
  currently: `<strong>Research Assistant</strong>, Carnegie Mellon University<br>DFT simulations on wolframite materials; manuscript in preparation.`,
  education: `<strong>MSc Engineering & AI</strong> — CMU, 2024–2025<br>TA: Intro to Deep Learning · Research Methods in Engineering`,
  email:     "adamaisha352@gmail.com",
  github:    "https://github.com/Aeesh",
  linkedin:  "http://linkedin.com/in/aisha-opaluwa-7287b11b4",
};

const STATS = [
  { val: "CMU",  label: "MSc Engineering & AI, 2024–2025" },
  { val: "5yr",  label: "Production Software Engineering Experience" },
  { val: "DFT",  label: "Quantum Materials Research, Manuscript In Prep" },
];

const OPEN_TO = [
  "ML Engineering",
  "AI Engineering",
  "AI Research",
  "Scientific ML",
  "Human-AI Interaction",
  "AI Ethics Research",
];

// ── PROJECTS ─────────────────────────────────────────────────────────────────
// featured: true  → full-width featured card (only one at a time)
// rowGroup: N     → cards sharing same N appear in the same row
// groupSize: 2|3  → how many columns in that row (default 3)

const PROJECTS = [
  {
    id:            "paper-qa",
    title:         "Scientific Paper QA System",
    subtitle:      "RAG · Retrieval Design · Evaluation",
    category:      "NLP / AI Systems",
    year:          "2026",
    featured:      true,
    rowGroup:      null,
    groupSize:     null,
    liveUrl:       null,
    githubUrl:     "https://github.com/Aeesh/paper-qa-system",
    huggingfaceUrl:null,
    previewImage:  null,   // e.g. "assets/paper-qa.png"
    description:   `A retrieval-augmented generation pipeline for querying domain-specific
research papers. The interesting part isn't the RAG — it's the evaluation
layer: a 34-question dataset with expert-verified answers, a hybrid scorer
that checks numbers, acronyms, and phrases independently, and a failure
analysis that distinguishes retrieval misses from model hallucination.`,
    highlights: [
      "Semantic chunking across 5 papers → 156 indexed chunks; BAAI/bge-small embeddings + ChromaDB",
      "Hybrid evaluation scorer: numbers, acronyms, and comma-separated phrases checked independently",
      "Failure taxonomy by type — retrieval miss vs. model hallucination — not a single accuracy number",
      "Deployed Streamlit interface; fully local via Ollama/Llama 3.2 — zero API cost",
    ],
    stack: ["Python", "LlamaIndex", "ChromaDB", "Ollama", "HuggingFace", "Streamlit"],
  },
  {
    id:            "abstract-classifier",
    title:         "arXiv Abstract Classifier",
    subtitle:      "Fine-tuning · Explainability · HPC",
    category:      "NLP / Fine-tuning",
    year:          "2026",
    featured:      false,
    rowGroup:      1,
    groupSize:     3,
    liveUrl:       null,
    githubUrl:     "https://github.com/Aeesh/abstract-classifier",
    huggingfaceUrl:null,   // add HF Hub URL here when published
    previewImage:  null,
    description:   `Fine-tuned DistilBERT on 28k arXiv abstracts across 11 scientific
fields, trained on PSC Bridges-2 V100 GPUs via SLURM. Goes beyond accuracy:
per-class F1, confusion matrix, and token-level explainability via Captum
integrated gradients to show which words drove each prediction.`,
    highlights: [
      "Weighted cross-entropy loss + AdamW with linear warmup; full SLURM job on V100",
      "WandB experiment tracking: loss curves, per-epoch F1, learning rate schedule",
      "Captum integrated gradients — top-25 influential tokens visualised per prediction",
      "Model on HuggingFace Hub; interactive Streamlit app",
    ],
    stack: ["PyTorch", "HuggingFace", "Captum", "WandB", "SLURM/HPC", "Streamlit"],
  },
  {
    id:            "monkeypox",
    title:         "Monkeypox Detection + Explainability",
    subtitle:      "Medical Imaging · Transfer Learning",
    category:      "Computer Vision",
    year:          "2025",
    featured:      false,
    rowGroup:      1,
    groupSize:     3,
    liveUrl:       null,
    githubUrl:     null,
    huggingfaceUrl:null,
    previewImage:  null,
    description:   `Extended a published VGG16-based clinical detection model by integrating
ConvNeXt with transfer learning. Multi-fold cross-validation and Grad-CAM
visualisations for interpretability — in medical settings, the reasoning
matters as much as the result.`,
    highlights: [
      "ConvNeXt + transfer learning with hyperparameter tuning on limited clinical data",
      "Multi-fold cross-validation for reliable performance estimation on small datasets",
      "Grad-CAM heatmaps for clinical interpretability of individual predictions",
    ],
    stack: ["PyTorch", "ConvNeXt", "VGG16", "Grad-CAM", "Transfer Learning"],
  },
  {
    id:            "emotion-recognition",
    title:         "Multimodal Emotion Recognition",
    subtitle:      "ASD Support · Speech + Vision Fusion",
    category:      "Multimodal AI",
    year:          "2024",
    featured:      false,
    rowGroup:      1,
    groupSize:     3,
    liveUrl:       null,
    githubUrl:     null,
    huggingfaceUrl:null,
    previewImage:  null,
    description:   `Emotion recognition for Autism Spectrum Disorder support, fusing CNN
facial expression analysis with LSTM speech emotion recognition. Empirically
validates the fusion design — audio-visual combination outperforms either
unimodal system rather than just assuming it would.`,
    highlights: [
      "Separate preprocessing pipelines for image and audio (MFCC spectrograms)",
      "Late fusion via MLP; quantified improvement of multimodal over unimodal baselines",
    ],
    stack: ["PyTorch", "CNN", "LSTM", "MFCC", "Feature Fusion"],
  },
  {
    id:            "monadic-dna",
    title:         "Monadic DNA",
    subtitle:      "Privacy-Preserving AI · Blockchain",
    category:      "Privacy AI",
    year:          "2024–2025",
    featured:      false,
    rowGroup:      2,
    groupSize:     2,
    liveUrl:       "https://monadicdna.com/",
    githubUrl:     "https://github.com/Monadic-DNA/MonadicDNA",
    huggingfaceUrl:null,
    previewImage:  null,
    description:   `Contributed to a genomics platform enabling AI inference on encrypted
health data using homomorphic encryption, multiparty computation, and
blockchain-based permissioning. Production software with real cryptographic
privacy guarantees — not a proof-of-concept.`,
    highlights: [
      "Nillion MPC permissioning and WASM-compiled Zama FHE libraries integrated on iOS",
      "Attestation flows, file upload pipeline, provider filtering — shipped to production",
    ],
    stack: ["TypeScript", "React", "FHE/Zama", "Nillion", "WASM", "Blockchain"],
  },
  {
    id:            "tezfin",
    title:         "TezFin / TEZEX",
    subtitle:      "DeFi Protocol · Full-Stack Engineering",
    category:      "Web3 / Full-Stack",
    year:          "2022–2024",
    featured:      false,
    rowGroup:      2,
    groupSize:     2,
    liveUrl:       "https://app.tezos.finance/",
    githubUrl:     "https://github.com/StableTechnologies/TezFin",
    huggingfaceUrl:null,
    previewImage:  null,
    description:   `Full-stack engineering across TezFin (decentralised lending protocol)
and TEZEX exchange on Tezos —  shipped to production apps serving
real mainnet users. Work spanned frontend, smart contract integration,
blockchain operations, and wallet SDK integration end-to-end.`,
    highlights: [
      "Borrowing flows, collateral, APY display, wallet integration (Beacon SDK), mobile responsiveness",
      "Smart contract interaction: delegation, operations, voting scripts",
      "Shipped alongside TezFin mainnet launch",
    ],
    stack: ["TypeScript", "React", "Tezos", "Beacon SDK", "GraphQL", "Smart Contracts"],
  },
  {
    id:            "pace-timesheet",
    title:         "Employee Timesheet App",
    subtitle:      "React · Component Architecture",
    category:      "Frontend Engineering",
    year:          "2021",
    featured:      false,
    rowGroup:      3,
    groupSize:     3,
    liveUrl:       null,
    githubUrl:     "https://github.com/Aeesh/Pace-Employee-TimeSheet",
    huggingfaceUrl:null,
    previewImage:  null,
    description:   `A responsive React-based employee timesheet application — early
professional work demonstrating component architecture, state management,
and clean UI engineering.`,
    highlights: [],
    stack: ["React", "CSS", "JavaScript"],
  },
];

// ── EXPERIENCE ────────────────────────────────────────────────────────────────
const EXPERIENCE = [
  {
    period: "Aug 2025 – Present",
    org:    "Carnegie Mellon University",
    role:   "Research Assistant",
    bullets: [
      "DFT simulations on wolframite oxide materials using Quantum ESPRESSO on HPC clusters",
      "Studying band gap narrowing and conductivity trends in high-entropy transition metal oxides",
      "Manuscript in preparation",
    ],
  },
  {
    period: "Aug 2024 – Dec 2025",
    org:    "Carnegie Mellon University",
    role:   "Teaching Assistant — Deep Learning & Research Methods",
    bullets: [
      "TA for Introduction to Deep Learning (Spring 2025) — backprop, CNNs, RNNs, Transformers",
      "TA for Research Methods in Engineering (Fall 2025)",
    ],
  },
  {
    period: "Mar 2021 – Dec 2025",
    org:    "Recherché Inc · Remote",
    role:   "Software Engineer",
    bullets: [
      "Built privacy-preserving AI infrastructure combining FHE, MPC, and blockchain for secure genomic data sharing (Monadic DNA)",
      "Full-stack engineering across TezFin, TEZEX, and Galleon wallet —  shipped to mainnet production apps including smart contract integration and blockchain operations",
      "Cross-functional across AI, privacy engineering, smart contracts, and product design",
    ],
  },
  {
    period: "Jan 2021 – Feb 2021",
    org:    "Innovate for Africa · Boston",
    role:   "Data Analyst",
    bullets: [
      "Predictive modelling (linear regression, random forests) for urban housing analytics",
    ],
  },
];

// ── SKILLS ────────────────────────────────────────────────────────────────────
const SKILLS = [
  {
    label: "AI & ML",
    items: ["PyTorch", "HuggingFace Transformers", "LlamaIndex", "ChromaDB", "Captum", "WandB", "Ollama", "scikit-learn", "TensorFlow"],
  },
  {
    label: "Languages & Data",
    items: ["Python", "C++", "TypeScript", "JavaScript", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    label: "Infrastructure",
    items: ["HPC / SLURM", "PSC Bridges-2", "Quantum ESPRESSO", "Docker", "Git", "Streamlit", "Flask", "REST APIs", "AWS DynamoDB"],
  },
  {
    label: "Research Areas",
    items: ["NLP", "RAG / Retrieval Systems", "LLM Evaluation", "Computer Vision", "ASR / Speech", "Human-AI Interaction", "AI Ethics", "Scientific ML"],
  },
  {
    label: "Web & Blockchain",
    items: ["React", "Redux", "SwiftUI", "GraphQL", "Web3.js", "Ethers", "Smart Contracts", "Tezos", "Beacon SDK"],
  },
  {
    label: "Computational Science",
    items: ["DFT Simulation", "Band Structure Analysis", "Materials Science", "Privacy-Preserving ML", "FHE / MPC"],
  },
];
