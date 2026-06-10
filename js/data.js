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
    `Targeting <strong>ML/AI engineering and research roles</strong>. Also genuinely interested in human-AI interaction and AI Safety research — my computational materials science thread is a foundation for scientific ML/AI.`,
  ],
  currently: `<strong>Research Assistant</strong>, Carnegie Mellon University<br>DFT simulations on wolframite materials; manuscript in preparation.`,
  education: `<strong>MSc Engineering & AI</strong> — CMU, 2024–2025<br>TA: Intro to Deep Learning · Research Methods in Engineering`,
  email:     "aopaluwa@alumni.cmu.edu",
  github:    "https://github.com/aeesh",
  linkedin:  "http://linkedin.com/in/aisha-opaluwa-7287b11b4",
  resume:   "assets/aisha_opaluwa_resume.pdf",
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
  "AI Safety Research",
];

// ── PROJECTS ─────────────────────────────────────────────────────────────────
// featured: true  → full-width featured card (only one at a time)
// rowGroup: N     → cards sharing same N appear in the same row
// groupSize: 2|3  → how many columns in that row (default 3)

const PROJECTS = [
  {
    id:            "quilltale",
    title:         "Quilltale",
    subtitle:      "Structured World State · Grounded LLM · Episodic Memory · RPG · AI Agents",
    category:      "LLM Systems · Agentic AI",
    year:          "2026",
    featured:      true,
    filterTag:     "ai-engineering",
    rowGroup:      null,
    groupSize:     null,
    liveUrl:       "https://huggingface.co/spaces/aeesh1/quilltale",
    githubUrl:     "https://github.com/aeesh/quilltale",
    huggingfaceUrl:null,
    previewImage:  "assets/quilltale-preview.png",
    description:   `An AI-powered text adventure where story generation and world facts are
                    deliberately separated. The language model writes the prose with the formal world
                    model enforcing the facts. Every location, item, NPC, and player action is
                    tracked in a structured Python dataclass. The challenge here is in
                    keeping a game world consistent across an unbounded number of turns.`,
    highlights: [
      "Validated state transitions: AI-proposed world changes checked against formal model before reaching the player with invalid moves caught and reflected in narration",
      "Per-NPC episodic memory with significance scoring where the barkeep remembers a threat from 15 turns ago because memory is retrieved in the current location and injected into the llm's context",
      "Automated 20-turn evaluation framework: factual consistency 85%, memory utilisation 91.7%, invalid transition rate ~12%",
      "Failure analysis: plausible invention, narration-state lag, and judge miscalibration on movement turns all documented",
      "Scene images generated via FLUX.1-schnell on player movement; graceful degradation on rate limit",
    ],
    stack: ["Python", "Gemini Api", "Gradio", "FLUX.1-schnell", "HuggingFace Spaces", "LLM-as-Judge"],
  },
  {
    id:            "scireason-bench",
    title:         "SciReason-Bench",
    subtitle:      "LLM Evaluation · Scientific Reasoning",
    category:      "Benchmark Design",
    year:          "2026",
    featured:      false,
    filterTag:     "ai-engineering",
    rowGroup:      0,
    groupSize:     3,
    liveUrl:       "https://scireason-bench.streamlit.app",
    githubUrl:     "https://github.com/Aeesh/scireason-bench",
    huggingfaceUrl:null,
    previewImage:  "assets/scireason-preview.png",
    description:   `A structured benchmark evaluating 4 LLMs across 5 scientific reasoning
                    categories — factual recall, conceptual explanation, numerical reasoning,
                    cross-domain synthesis, and calibration. The calibration category tests whether
                    models know what they don't know, a critical property for deployed AI systems.
                    Scored by LLM-as-judge with an explicit rubric; findings go beyond accuracy
                    to reveal where model size fails to predict performance.`,
    highlights: [
      "100 questions across AI/ML and materials science; 4 models (Gemini, Phi-3, Mistral, Llama) evaluated end-to-end",
      "Calibration & uncertainty category: tests whether models express appropriate doubt rather than confident wrong answers",
      "Key finding: Phi-3 Mini (3.8B) outperforms Mistral 7B indicating architecture and training data matter more than parameter count at this scale",
      "Numerical reasoning is the sharpest differentiator with 36–45% for open-source vs 95% for Gemini",
      "Honest limitations: judge bias documented, single-run variance acknowledged, future work clearly scoped",
    ],
    stack: ["Python", "Gemini API", "Ollama", "Streamlit", "LLM-as-Judge", "Pandas", "Matplotlib"],
  },
  {
    id:            "abstract-classifier",
    title:         "arXiv Abstract Classifier",
    filterTag:     "ai-engineering",
    subtitle:      "Fine-tuning · Explainability · HPC",
    category:      "NLP / Fine-tuning",
    year:          "2026",
    featured:      false,
    rowGroup:      0,
    groupSize:     3,
    liveUrl:       "https://huggingface.co/spaces/aeesh1/arxiv-abstract-classifier",
    githubUrl:     "https://github.com/aeesh/abstract-classifier",
    huggingfaceUrl:"https://huggingface.co/aeesh1/arxiv-abstract-classifier",
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
    id:            "paper-qa",
    title:         "Scientific Paper QA System",
    subtitle:      "RAG · Retrieval Design · Evaluation",
    category:      "NLP / AI Systems",
    year:          "2026",
    featured:      false,
    filterTag:     "ai-engineering",
    rowGroup:      0,
    groupSize:     3,
    liveUrl:       null, // "https://huggingface.co/spaces/aeesh1/paper-qa-system",
    githubUrl:     "https://github.com/aeesh/paper-qa-system",
    huggingfaceUrl:"https://huggingface.co/spaces/aeesh1/paper-qa-system",
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
    id:            "monkeypox",
    title:         "Monkeypox Detection + Explainability",
    filterTag:     "ai-research",
    subtitle:      "Medical Imaging · Transfer Learning",
    category:      "Computer Vision",
    year:          "2025",
    featured:      false,
    rowGroup:      1,
    groupSize:     3,
    liveUrl:       null,
    paperUrl:       "https://drive.google.com/file/d/1L2c3XNqmg71gXo60lc_zGGguR9kv5M9R/view?usp=sharing",
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
    id:            "cipherbot-study",
    title:         "Chatbot Access Advantage Study",
    subtitle:      "Human-AI Interaction · Educational AI · QCRI",
    category:      "AI Research",
    year:          "2025",
    featured:      false,
    filterTag:     "ai-research",
    rowGroup:      1,
    groupSize:     3,
    liveUrl:       null, // "https://cipherbot.qcri.org",
    paperUrl:       null,
    githubUrl:     null,
    huggingfaceUrl:null,
    previewImage:  null,
    description:   `Research study conducted with Qatar Computing Research Institute
  analysing how access conditions affect student engagement with CipherBot,
  an AI-powered educational platform. Investigated how modality (text vs audio),
  mobile access, and translation features shaped dialogue complexity and
  learning interaction patterns.`,
    highlights: [
      "Analysed student–AI dialogue corpora for engagement and interaction patterns",
      "Compared modality effects: text vs audio, mobile vs desktop, native vs translated",
      "Research sits at the intersection of human-AI interaction and educational technology",
    ],
    stack: ["Dialogue Analysis", "Human-AI Interaction", "Educational AI", "QCRI"],
  },
  {
    id:            "emotion-recognition",
    title:         "Multimodal Emotion Recognition",
    filterTag:     "ai-research",
    subtitle:      "ASD Support · Speech + Vision Fusion",
    category:      "Multimodal AI",
    year:          "2024",
    featured:      false,
    rowGroup:      1,
    groupSize:     3,
    liveUrl:       null,
    paperUrl:       "https://drive.google.com/file/d/1xDsb5konN0IUj-k0JYaNAMSoJGLsQFuY/view?usp=sharing",
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
    filterTag:     "ai-engineering",
    subtitle:      "Privacy-Preserving AI · Blockchain",
    category:      "Privacy AI / Engineering",
    year:          "2024–2025",
    featured:      false,
    rowGroup:      2,
    groupSize:     1,
    liveUrl:       "https://monadicdna.com/",
    githubUrl:     "https://github.com/Monadic-DNA/MonadicDNA",
    huggingfaceUrl:null,
    previewImage:  null,
    description:   `Production genomics platform enabling blind AI inference on encrypted
                    23andMe data. Led frontend, iOS and Android app development; built
                    the Rust library service enabling cross-platform cryptographic
                    computation compiled for both iOS and Android. Contributed to backend
                    and Nillion MPC integration. Built SnipperBot end-to-end — SNP ingestion,
                    encrypted MPC computation, on-chain attestations — deployed with 30+
                    real participants using live genomic data.`,
    highlights: [
      "Built WASM-compiled Zama FHE service for cross-platform cryptographic computation — compiled and validated for both iOS and Android",
      "Led frontend and both mobile apps (iOS + Android); contributed to backend and Nillion MPC integration",
      "Built SnipperBot end-to-end: DNA Passport ingestion → encrypted trait analysis on Nillion → on-chain Sign Protocol attestations",
      "Overall winner, Scaling Ethereum 2024 hackathon; moved into production with Nillion partnership",
    ],
    stack: ["TypeScript", "React", "Swift", "Kotlin", "Rust", "Nillion", "FHE/Zama", "Sign Protocol", "WASM"],
  },
  {
    id:            "project-guardian",
    title:         "Project Guardian",
    filterTag:     "engineering",
    subtitle:      "Institutional DeFi · MAS · JP Morgan · DBS · SBI",
    category:      "Institutional Finance · Blockchain",
    year:          "2022–2023",
    featured:      false,
    rowGroup:      3,
    groupSize:     3,
    liveUrl:       "https://www.mas.gov.sg/news/media-releases/2022/first-industry-pilot-for-digital-asset-and-decentralised-finance-goes-live",
    githubUrl:     null,
    huggingfaceUrl:null,
    previewImage:  null,
    description: `Contributed to the Monetary Authority of Singapore's institutional DeFi
                  pilot — a tokenised real-world asset lending platform with JP Morgan, DBS,
                  and SBI as participants. Led frontend engineering and contributed to smart
                  contract integration and backend. One of the first live institutional DeFi
                  deployments globally.`,
    highlights: [
      "Frontend lead and smart contract integration across the full lending platform",
      "Worked within a regulated institutional finance context with JPMorgan, DBS, and SBI",
    ],
    stack: ["TypeScript", "React", "Smart Contracts", "DeFi", "Tezos"],
  },
  {
    id:            "tezfin",
    title:         "TezFin / TEZEX",
    filterTag:     "engineering",
    subtitle:      "DeFi Protocol · Full-Stack Engineering",
    category:      "Web3 / Full-Stack",
    year:          "2022–2024",
    featured:      false,
    rowGroup:      3,
    groupSize:     3,
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
    id:            "persimmon",
    title:         "Persimmon",
    filterTag:     "engineering",
    subtitle:      "iOS App · Crypto Wallet Monitoring · Privacy",
    category:      "Mobile Engineering",
    year:          "2023",
    featured:      false,
    rowGroup:      3,
    groupSize:     3,
    liveUrl:       "https://apps.apple.com/us/app/persimmon-alerts/id6450377537",
    githubUrl:     null,
    huggingfaceUrl:null,
    previewImage:  null,
    description:   `A live iOS app for privacy-focused crypto self-hosters. Tracks digital
                    wallet activity across multiple addresses and sends daily alerts on
                    balance changes — so theft, missed staking income, or DeFi activity
                    doesn't go unnoticed. Led end-to-end: design, engineering, and App Store
                    deployment.`,
    highlights: [
      "Live on the Apple App Store — production software with real users",
      "Built for self-hosters who manage their own crypto keys and need passive monitoring without custodial risk",
    ],
    stack: ["SwiftUI", "iOS", "Crypto", "REST APIs"],
  },
  {
    id:            "metasurf",
    title:         "MetaSurf",
    subtitle:      "NFT Video · Superfluid Streams · Hackathon",
    category:      "Web3 / Engineering",
    year:          "2022",
    featured:      false,
    filterTag:     "engineering",
    rowGroup:      4,
    groupSize:     2,
    liveUrl:       null,
    githubUrl:     "https://github.com/aeesh/MetaSurf",
    huggingfaceUrl:null,
    devfolioUrl:   "https://devfolio.co/projects/metasurf-b5ce",
    previewImage:  null,
    description:   `Hackathon project (Ethernals on Devfolio) — a decentralised platform where
  users post NFT video content and earn via Superfluid payment streams while
  viewers watch. Built in a team of four; implemented Biconomy, Superfluid,
  and Livepeer integrations.`,
    highlights: [],
    stack: ["Superfluid", "Biconomy", "Livepeer", "React", "Solidity"],
  },
  {
    id:            "pace-timesheet",
    title:         "Employee Timesheet App",
    filterTag:     "engineering",
    subtitle:      "React · Component Architecture",
    category:      "Frontend Engineering",
    year:          "2021",
    featured:      false,
    rowGroup:      4,
    groupSize:     2,
    liveUrl:       null,
    githubUrl:     "https://github.com/aeesh/Pace-Employee-TimeSheet",
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
    org:    "Recherché Inc ·(formerly Cryptonomic)· Remote",
    role:   "Software Engineer",
    bullets: [
      "Project Guardian (MAS) — led frontend engineering and contributed to smart contract integration and backend for the Monetary Authority of Singapore's institutional DeFi pilot alongside JP Morgan, DBS, and SBI; tokenised real-world asset lending platform",
      "Institutional DiD — built decentralised identity components (frontend, mobile app, SDKs, smart contracts) for a major investment bank; work resulted in two granted patents on distributed ledger identity management",
      "Monadic DNA — led frontend, iOS and Android app development; built the Rust library service enabling cross-platform cryptographic computation (compiled for both iOS and Android); contributed to backend and Nillion MPC integration. Built SnipperBot end-to-end: parses 23andMe SNP data, stores secrets on Nillion's MPC network, runs blind trait analysis without raw data ever being decrypted, and issues on-chain VerifiedTrait attestations via Sign Protocol. Overall winner, Scaling Ethereum 2024 hackathon. Deployed with 30+ real participants at ETHDenver using live genomic data.",
      "Persimmon — led end-to-end development of a live iOS app for privacy-focused crypto wallet monitoring with daily balance alerts; shipped to the Apple App Store.",
      "Full-stack across TezFin DeFi protocol, TEZEX exchange, and Galleon wallet on Tezos mainnet",
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
    items: ["PyTorch", "HuggingFace Transformers", "LlamaIndex", "Agentic AI", "Gradio", "ChromaDB", "Captum", "WandB", "Ollama", "scikit-learn", "TensorFlow"],
  },
  {
    label: "Languages & Data",
    items: ["Python", "Rust", "C++", "TypeScript", "JavaScript", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    label: "Infrastructure",
    items: ["HPC / SLURM", "PSC Bridges-2", "Quantum ESPRESSO", "Docker", "Git", "Streamlit", "Flask", "REST APIs", "AWS DynamoDB"],
  },
  {
    label: "Research Areas",
    items: ["NLP", "RAG / Retrieval Systems", "LLM Evaluation", "Agentic Systems", "World Modelling", "Computer Vision", "ASR / Speech", "Human-AI Interaction", "AI Safety", "Scientific ML"],
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
