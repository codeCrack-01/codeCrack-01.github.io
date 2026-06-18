export const personal = {
  name: "Zain Ahmed Khan",
  email: "program01code@gmail.com",
  phone: "0300-9647682",
  github: "https://github.com/codeCrack-01",
  linkedin: "www.linkedin.com/in/zain-ahmed-27a848381",
  cgpa: "3.806",
  university: "LUMS",
  degree: "BS Computer Science",
  batch: "2025 – 2029",
  taglines: [
    "Backend Infrastructure",
    "Distributed Systems",
    "High-Performance APIs",
    "ML Engineering",
    "Linux Enthusiast",
  ],
  blurb:
    "Second-year CS undergraduate at LUMS with extensive self-taught experience in enterprise backend systems, distributed architecture, and ML infrastructure. Focused on systems optimization, high-performance API design, and automated verification pipelines.",
};

export const projects = [
  {
    title: "Jotted",
    subtitle: "Note-Taking Application",
    tags: ["Ruby on Rails", "IndexedDB", "PWA"],
    desc: "Developed and deployed a fully static, client-side offline note-taking application. Implemented local data persistence entirely browser-side using IndexedDB, inspired by Excalidraw's local-first architecture. Packaged as an installable PWA and deployed via GitHub Pages.",
    status: "LIVE",
    url: "https://codecrack-01.github.io/Jotted/",
    github: "https://github.com/codeCrack-01/Jotted",
  },
  {
    title: "MakeItDone",
    subtitle: "Stateless Image Processing Suite",
    tags: ["FastAPI", "Docker", "React", "TypeScript"],
    desc: "Built a stateless REST API containerized with Docker to handle heavy image compression workflows and multi-format processing (JPEG/PNG). Designed low-latency REST endpoints for file transformations. Shipped a polished production frontend built with React and TypeScript.",
    status: "LIVE",
    url: "https://makeitdone-frontend.onrender.com/",
    github: "https://github.com/codeCrack-01/makeitdone",
  },
  {
    title: "Formulator",
    subtitle: "Mobile Calculation Engine",
    tags: ["Kotlin", "Android Studio"],
    desc: "Solo-building a mobile application automating complex unit conversions, currency exchanges, and dimensional analysis nuances. Engineered and open-sourced the core v1.0 calculation engine. Actively scaling live currency-exchange synchronization APIs.",
    status: "IN PROGRESS",
    url: "https://github.com/codeCrack-01/formulator_app",
  },
  {
    title: "Rates Middle API",
    subtitle: "Caching Middleware Proxy",
    tags: ["FastAPI", "Proxy", "Caching"],
    desc: "Developed a middleware proxy designed to cache and relay daily currency data. Successfully circumvented strict upstream API rate-limits (1-request-per-day) through intelligent caching logic to serve repeated client requests.",
    status: "API",
    url: "https://rates-middleapi.onrender.com",
    github: "https://github.com/codeCrack-01/rates-middleapi",
  },
  {
    title: "AI-Powered Email Analyzer",
    subtitle: "Softec AI Hackathon",
    tags: ["Streamlit", "LangChain", "Python"],
    desc: "Co-designed and developed an intelligent scoring and parsing engine for an automated email organization theme at the Softec AI Hackathon at FAST. Deployed to the Streamlit Community Hub.",
    status: "HACKATHON",
    url: "https://softecaihack-3e2pwy7vc4g7k94ehjghsq.streamlit.app/",
  },
  {
    title: "FastAPI + SolidJS + Auth0 Boilerplate",
    subtitle: "Authentication Starter Kit",
    tags: ["FastAPI", "SolidJS", "Auth0", "TypeScript", "Python"],
    desc: "A production-ready boilerplate for scaffolding Auth0 authentication with a FastAPI backend and SolidJS frontend. Features JWT validation, protected API routes, token-based access, and a responsive Bootstrap UI. Designed for rapid project bootstrap.",
    status: "TEMPLATE",
    github: "https://github.com/codeCrack-01/fastapi_solid-js_auth0_authentication",
  },
  {
    title: "Expense Tracker",
    subtitle: "Full-Stack Financial Manager",
    tags: ["Django", "PostgreSQL", "Supabase", "GitHub Actions"],
    desc: "Created a full-stack relational expense tracking application backed by automated testing pipelines via pytest. Deployed via GitHub Actions CI/CD to Render.",
    status: "LIVE",
    url: "https://exp-tracker-dj.onrender.com",
    github: "https://github.com/codeCrack-01/expense-tracker",
  },
  {
    title: "ML From First Principles",
    subtitle: "Algorithmic Engineering",
    tags: ["Python", "NumPy"],
    desc: "Systematically re-implementing foundational ML algorithms to study optimization, numerical methods, and model training mechanics. Developed Linear Regression and Gradient Descent from scratch using vectorized numerical computation. Investigating the gap between framework-level usage and the underlying algorithms.",
    status: "ONGOING",
    url: "https://github.com/codeCrack-01/ML-from-scratch",
  },
  {
    title: "Zombie Game [Linux]",
    subtitle: "TOP-DOWN Survival",
    tags: ["C++", "SDL2", "Linux"],
    desc: "Top-down survival game with collision detection, raycasting, sprite animation, and entity state management. Built from scratch in C++ using SDL2.",
    status: "SYSTEMS",
    url: "https://hi-tech-developerz.itch.io/shot-dead",
  },
];

export const research = {
  title: "ML Inference Benchmarking Suite",
  supervisor: "Ahmed Wali (Senior Supervisor)",
  period: "2025 – Present",
  role: "Undergraduate Research Collaborator",
  institution: "LUMS",
  bullets: [
    "Contributed to a system predicting model inference performance across diverse target hardware (mobile, server, Jetson Nano, supercomputer) from a single local execution run.",
    "Engineered a fault-tolerant benchmarking pipeline testing 39 models across ONNX, PyTorch, and TensorFlow Lite, utilizing isolated execution so individual model failures do not abort the global run.",
    "Designed an extensible folder-structure scaffold allowing modular updates to model configurations without altering core pipeline logic, handling framework-specific preprocessing steps per model.",
    "Co-produced benchmark comparison visualizations across models and hardware profiles.",
  ],
  metric: { value: "39", label: "Models Benchmarked" },
};

export const freelance = {
  role: "Freelance Backend Developer & AI Automation Specialist",
  platform: "Fiverr & Independent Consulting",
  period: "June 2026 – Present",
  bullets: [
    "Architecting robust, high-throughput APIs using FastAPI and integrating advanced AI automation workflows for global clients.",
    "Delivering production-grade backend solutions with emphasis on scalability, reliability, and clean architecture.",
  ],
  links: [
    { label: "FastAPI Backend Gig", url: "https://www.fiverr.com/s/qDmV7qy" },
    { label: "AI Automation Gig", url: "https://www.fiverr.com/s/bdVgrYm" },
  ],
};

export const skills = {
  Languages: [
    "Python",
    "C/C++",
    "C#",
    "Kotlin",
    "Java",
    "JavaScript",
    "TypeScript",
    "HTML/CSS/HTMX",
  ],
  "Backend Frameworks": [
    "FastAPI",
    "Django",
    "Flask",
    "Ruby on Rails",
    "ASP.NET Core",
    "Spring Boot (In Progress)",
  ],
  "Databases & Caching": [
    "PostgreSQL",
    "Supabase",
    "SQLite",
    "SQL Server",
    "IndexedDB",
  ],
  "DevOps & Automation": [
    "Docker",
    "Linux (Fedora)",
    "Git & GitHub",
    "GitHub Actions CI/CD",
    "Render",
    "Vercel",
    "n8n",
  ],
  "ML / Inference": [
    "ONNX Runtime",
    "PyTorch",
    "TensorFlow Lite",
    "NumPy",
    "Scikit-Learn",
  ],
  Testing: ["pytest", "JUnit", "Jest"],
  Specialized: [
    "TCP/UDP Networking (Java)",
    "Progressive Web Apps",
    "Hardware Interfacing",
    "Formal Verification & Memory Safety",
    "Embedded Systems & Robotics",
  ],
};

export const recognition = [
  "1st Position Overall — NASA Space Apps Competition (Local Region, UMT Lahore)",
  "IBM Git & GitHub Certification — https://coursera.org/share/9824efc9aeae0a2b044339d5a11722e7",
  "Udemy — Java Networking: TCP/UDP client-server applications — https://www.udemy.com/certificate/UC-face6696-f33c-4a72-92d0-239eb723c25d/",
  "National Robotics Engineering Competition (NERC 2026) — Active Competitor",
  `CGPA: ${personal.cgpa}/4.0 @ ${personal.university}`,
];

export const education = [
  {
    institution: "Lahore University of Management Sciences (LUMS)",
    degree: "BS Computer Science",
    period: "2025 – 2029",
    detail: `Current CGPA: ${personal.cgpa} / 4.00`,
  },
  {
    institution: "APS School & College, Rahim Yar Khan",
    degree: "FSc [Pre-Engineering] & Matriculation",
    period: "2021 – 2025",
    detail: "",
  },
];

export const researchInterests = [
  "Software Development",
  "System Design",
  "SWE for AI Systems",
  "Reliable & Testable Backend Infrastructure",
  "Automated Testing & CI/CD Pipelines",
  "Embedded Systems & Robotics",
];
