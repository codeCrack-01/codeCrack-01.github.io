export const personal = {
  name: "Zain Ahmed Khan",
  email: "program01code@gmail.com",
  phone: "0300-9647682",
  github: "https://github.com/codeCrack-01",
  linkedin: "https://linkedin.com/in/zain-ahmed-27a848381",
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
    title: "NockIt",
    subtitle: "Open-Source MCP Server for Push Notifications",
    tags: ["TypeScript", "FastMCP", "MCP", "JSON-RPC", "CLI"],
    desc: "An open-source, local-first MCP server that gives autonomous AI coding agents real-time push notification capabilities directly to a developer's mobile device. Solves the workflow bottleneck of monitoring agents like Claude Desktop, Cursor, or OpenCode during long-running tasks by letting them autonomously ping your phone via ntfy.sh when they finish, hit an unrecoverable error, or need human input. Engineered as a TypeScript/FastMCP package with zero external dependencies using JSON-RPC over stdio transport, plus a zero-config interactive setup CLI (npx nockit setup).",
    status: "MCP",
    url: "https://codecrack-01.github.io/NockIt/",
    github: "https://github.com/codeCrack-01/NockIt",
  },
  {
    title: "Overleaf MCP",
    subtitle: "MCP Server for LaTeX Paper Management",
    tags: ["FastAPI", "Python", "MCP", "LaTeX", "Git"],
    desc: "Built an MCP (Model Context Protocol) server that enables LLM agents like Claude Code to read and update Overleaf LaTeX papers via git. Exposes tools for reading/writing paper content and bibliographies with automatic LaTeX compilation, git commit, and push workflows.",
    status: "API",
    github: "https://github.com/codeCrack-01/overleaf_mcp",
  },
  {
    title: "JottedNotes",
    subtitle: "Note-Taking Application",
    tags: ["Ruby on Rails", "IndexedDB", "PWA"],
    desc: "Developed and deployed a fully static, client-side offline note-taking application. Implemented local data persistence entirely browser-side using IndexedDB, inspired by Excalidraw's local-first architecture. Packaged as an installable PWA and deployed via GitHub Pages.",
    status: "LIVE",
    url: "https://codecrack-01.github.io/JottedNotes/",
    github: "https://github.com/codeCrack-01/JottedNotes",
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
    title: "TestFast",
    subtitle: "AI-Powered Test Suite Generator for FastAPI",
    tags: ["Rust", "CLI", "FastAPI", "AI"],
    desc: "A CLI tool written in Rust that automatically generates comprehensive test suites for FastAPI projects using LLMs. Supports Anthropic, Gemini, Groq, and OpenAI APIs to analyze your API routes, models, and dependencies — producing pytest-compatible tests with minimal configuration.",
    status: "API",
    github: "https://github.com/codeCrack-01/testfast",
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
    github:
      "https://github.com/codeCrack-01/fastapi_solid-js_auth0_authentication",
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
    title: "Zed Jinja2 HTML",
    subtitle: "Zed Extension for Jinja2 Template Support",
    tags: ["Zed", "Python", "LSP", "Jinja2", "HTML", "WASM"],
    desc: "Building a Zed IDE extension that provides Jinja2 HTML template support through an LSP-based language server with auto-completion, diagnostics, hover documentation, and Emmet snippets. The Python LSP server wraps pygls and the extension compiles to WASM.",
    status: "IN PROGRESS",
    github: "https://github.com/codeCrack-01/zed-jinja2-html",
  },
  {
    title: "raqm-core",
    subtitle: "Unified Python SDK for Pakistani Payment Gateways",
    tags: ["Python", "httpx", "Pydantic", "Async"],
    desc: "One async, type-safe interface across multiple processors — EasyPaisa, JazzCash, HBL, ABL, UBL, and more. Published on PyPI with full EasyPaisa support, mock-friendly testing infrastructure, and minimal dependencies.",
    status: "PRE-ALPHA",
    url: "https://pypi.org/project/raqm-core/",
    github: "https://github.com/codeCrack-01/raqm-core",
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

export const experience = [
  {
    role: "Founder & CEO",
    platform: "Vergate",
    period: "Aug 2026 – Present",
    bullets: [
      "Founded and leading Vergate, a security, performance & SEO platform for vibecoders — passive security scans in under 5 seconds, Core Web Vitals, SEO & AEO, accessibility audits, stack profiling, and uptime monitoring in one dashboard.",
      "Shipping MCP integration with 17 tools for AI coding assistants (Claude Code, Cursor, Windsurf) over stdio + HTTP transports, alongside a REST API and CLI for shell and CI/CD workflows.",
      "Engineering active scanning (SQLi, XSS, open redirects) in isolated ephemeral containers, provider-specific security analysis across 10 integrations (GitHub, Vercel, Supabase, Cloudflare, and more), and a 9-check email deliverability engine.",
      "Opened early access for the Q3 2026 beta and driving waitlist growth toward launch.",
    ],
    links: [{ label: "vergate.dev", url: "https://vergate.dev" }],
  },
  {
    role: "Backend Engineer",
    platform: "FlyRank AI",
    period: "June 2026 – Aug 2026",
    bullets: [
      "Contributed to the backend of FlyRank's agentic AI search growth platform, helping brands rank on Google and become the trusted answer across AI engines like ChatGPT and Perplexity.",
      "Worked on systems behind the content engine, AI visibility (GEO/AEO) tooling, and page-optimization pipelines serving DTC and B2B clients.",
    ],
    links: [{ label: "flyrank.com", url: "https://flyrank.com" }],
  },
  {
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
  },
];

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
    "Ruby",
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
  "Packt — Intro to Ruby on Rails — https://www.coursera.org/account/accomplishments/verify/4M3IWFOKQGBU",
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
