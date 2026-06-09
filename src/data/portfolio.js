export const personal = {
  name: "Zain Ahmed Khan",
  email: "program01code@gmail.com",
  phone: "0300-9647682",
  github: "https://github.com/codeCrack-01",
  linkedin: "https://linkedin.com/in/m-zain-ahmed-27a848381",
  cgpa: "3.806",
  university: "LUMS",
  degree: "BS Computer Science",
  batch: "2025 – 2029",
  ascii: [
    "   ███████╗ █████╗ ██╗███╗   ██╗",
    "   ╚══███╔╝██╔══██╗██║████╗  ██║",
    "     ███╔╝ ███████║██║██╔██╗ ██║",
    "    ███╔╝  ██╔══██║██║██║╚██╗██║",
    "   ███████╗██║  ██║██║██║ ╚████║",
    "   ╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝",
  ],
  taglines: [
    "Backend Infrastructure",
    "Distributed Systems",
    "High-Performance APIs",
    "ML Engineering",
    "Linux Enthusiast",
  ],
  blurb:
    "Second-year CS undergraduate at LUMS. Architecting robust backend systems where reliability is the primary feature. Focused on resilient APIs, automated pipelines, and systems infrastructure.",
};

export const projects = [
  {
    title: "Formulator",
    subtitle: "Built for Real-World",
    tags: ["Kotlin", "Android Studio"],
    desc: "Solo-building a mobile app that automates calculation nuances — conversions for units, currencies, dimensional analysis, etc. Core engine complete and fully open-sourced.",
    status: "IN PROGRESS",
    url: "https://github.com/codeCrack-01/formulator_app",
  },
  {
    title: "Expense Tracker",
    subtitle: "Full-Stack Financial Manager",
    tags: ["Django", "PostgreSQL", "Supabase", "GitHub Actions"],
    desc: "Full-stack expense tracking application with relational models, form validation, and database-backed CRUD operations. Automated tests with pytest; deployed via CI/CD.",
    status: "LIVE",
    url: "https://exp-tracker-dj.onrender.com",
    github: "https://github.com/codeCrack-01/expense-tracker",
  },
  {
    title: "MakeItDone",
    subtitle: "Image Processing API",
    tags: ["FastAPI", "Docker", "React", "TypeScript"],
    desc: "Stateless REST API for image compression and format conversion (JPEG/PNG), containerized with Docker. Shipped a polished production frontend.",
    status: "LIVE",
    url: "https://makeitdone-frontend.onrender.com/",
    github: "https://github.com/codeCrack-01/makeitdone",
  },
  {
    title: "ML From First Principles",
    subtitle: "Algorithmic Engineering",
    tags: ["Python", "NumPy"],
    desc: "Systematically re-implementing foundational ML algorithms to study optimization, numerical methods, and model training mechanics at the implementation level.",
    status: "ONGOING",
    url: "https://github.com/codeCrack-01/ML-from-scratch",
  },
  {
    title: "Email Analyzer",
    subtitle: "Softec AI Hackathon",
    tags: ["Streamlit", "LangChain", "Python"],
    desc: "LLM-backed scoring system for automated inbox prioritization. Co-developed frontend and scoring engine for the Softec AI Hackathon at FAST.",
    status: "HACKATHON",
    url: "https://softecaihack-3e2pwy7vc4g7k94ehjghsq.streamlit.app/",
  },
  {
    title: "Rates Middle API",
    subtitle: "Caching Middleware Proxy",
    tags: ["FastAPI", "Proxy", "Caching"],
    desc: "Middleware proxy that relays currency rate data while working around upstream 1-request-per-day rate limits with caching logic for repeated client requests.",
    status: "API",
    url: "https://rates-middleapi.onrender.com",
  },
  {
    title: "Zombie Game [Linux]",
    subtitle: "TOP-DOWN Survival",
    tags: ["C++", "SDL2", "Linux"],
    desc: "TOP_DOWN survival game with collision detection, raycasting, sprite animation, and entity state management. Built from scratch in C++ using SDL2.",
    status: "SYSTEMS",
    url: "https://hi-tech-developerz.itch.io/shot-dead",
  },
  {
    title: "DinoDude Framework",
    subtitle: "Modular Godot Template",
    tags: ["GDScript", "Godot", "OOP"],
    desc: "Modular platforming template focused on architecture reusability. Implements clean state-machine patterns for game development.",
    status: "TEMPLATE",
    url: "https://github.com/codeCrack-01/DinoDudeGame",
  },
];

export const research = {
  title: "ML Inference Benchmarking Suite",
  supervisor: "Ahmed Wali (26100264@lums.edu.pk)",
  period: "2025 – Present",
  role: "Undergraduate Research Collaborator",
  institution: "LUMS",
  bullets: [
    "Architected an engine to predict ML inference performance across heterogeneous hardware — mobile, server, Jetson Nano, and HPC clusters — from a single local run.",
    "Engineered a fault-tolerant benchmarking pipeline to test 39 models across ONNX, PyTorch, and TensorFlow Lite; single model failure does not abort the run.",
    "Built an extensible folder-structure scaffold so adding or updating a model requires no changes to core pipeline logic; handled framework-specific preprocessing per model.",
    "Co-produced benchmark comparison visualizations across models and hardware profiles.",
  ],
  metric: { value: "39", label: "Models Benchmarked" },
};

export const skills = {
  Languages: ["Python", "C#", "C/C++", "Java", "JavaScript", "TypeScript"],
  Backend: [
    "Django",
    "FastAPI",
    "Flask",
    "REST API Design",
    "SQL",
    "ASP.NET Core (v5.0+)",
  ],
  "ML / Inference": [
    "NumPy",
    "Scikit-Learn",
    "ONNX Runtime",
    "PyTorch",
    "TensorFlow Lite",
    "Algorithmic ML",
  ],
  "DevOps / Tools": ["Docker", "Git & GitHub", "Linux", "Render", "Vercel"],
  Automation: ["GitHub Actions CI/CD", "n8n"],
  Databases: ["PostgreSQL", "SQLite", "Supabase", "SQL Server"],
  Testing: ["pytest", "JUnit", "Jest"],
  Other: [
    "TCP/UDP Networking (Java)",
    "Pipeline Design",
    "Process Automation",
    "Embedded Systems & Robotics (NERC 2026)",
  ],
};

export const recognition = [
  "NASA Space Apps Competition — 1st Position (Local Region, UMT Lahore)",
  "Udemy — Java Networking: TCP/UDP client-server applications",
  `CGPA: ${personal.cgpa}/4.0 @ ${personal.university}`,
];

export const education = [
  {
    institution: "Lahore University of Management Sciences (LUMS)",
    degree: "BS Computer Science",
    period: "2025 – 2029",
    detail: `CGPA (Current): ${personal.cgpa} / 4.0`,
  },
  {
    institution: "APS School & College, Rahimyar Khan",
    degree: "FSc [Pre-Engineering]",
    period: "2021 – 2025",
    detail: "Matriculation",
  },
];
