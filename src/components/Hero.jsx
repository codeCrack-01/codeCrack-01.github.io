import { createSignal, onMount } from "solid-js";
import { personal } from "../data/portfolio";

function TextScramble(props) {
  const [display, setDisplay] = createSignal("");
  let frameId;
  let frame = 0;
  let currentText = "";

  const chars = "!<>-_\\/[]{}—=+*^?#________";

  const scramble = (newText) => {
    cancelAnimationFrame(frameId);
    frame = 0;
    const from = currentText;
    const length = Math.max(from.length, newText.length);
    const queue = [];
    for (let i = 0; i < length; i++) {
      const f = from[i] || "";
      const t = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.push({ from: f, to: t, start, end, char: "" });
    }

    const update = () => {
      let output = "";
      let complete = 0;
      for (const item of queue) {
        if (frame >= item.end) {
          complete++;
          output += item.to;
        } else if (frame >= item.start) {
          if (!item.char || Math.random() < 0.28) {
            item.char = chars[Math.floor(Math.random() * chars.length)];
          }
          output += `<span class="text-accent">${item.char}</span>`;
        } else {
          output += item.from;
        }
      }
      setDisplay(output);
      if (complete === queue.length) {
        currentText = newText;
      } else {
        frame++;
        frameId = requestAnimationFrame(update);
      }
    };
    update();
  };

  onMount(() => {
    let counter = 0;
    const next = () => {
      scramble(personal.taglines[counter]);
      counter = (counter + 1) % personal.taglines.length;
    };
    next();
    setInterval(next, 3500);
  });

  return <span innerHTML={display()} />;
}

function Terminal() {
  const lines = [
    { prompt: "~/zain", cmd: "whoami", out: "zain_ahmed_khan · backend engineer · CS@LUMS" },
    { prompt: "~/zain", cmd: "cat achievements/2026.md", out: "NASA Space Apps — 1st Place (Regional)" },
    { prompt: "~/zain", cmd: "npm run deploy -- --target=your-team", out: "✓ build passed · ✓ ready to hire" },
  ];
  return (
    <div class="card p-0 overflow-hidden animate-fade-up" style="animation-delay: 200ms">
      <div class="flex items-center gap-2 px-4 py-3 bg-[#1a2030]/80 border-b border-border">
        <span class="w-3 h-3 rounded-full bg-rose-400/80" />
        <span class="w-3 h-3 rounded-full bg-amber-400/80" />
        <span class="w-3 h-3 rounded-full bg-emerald-400/80" />
        <span class="ml-2 text-[10px] font-mono text-muted tracking-widest">
          zain@lums: ~
        </span>
      </div>
      <div class="p-5 space-y-4 font-mono text-xs">
        {lines.map((l) => (
          <div>
            <div class="text-accent-dim">
              <span class="text-accent-cyan">➜</span>{" "}
              <span class="text-muted">{l.prompt}</span> <span class="text-ink">$ {l.cmd}</span>
            </div>
            <p class="text-muted mt-1.5 pl-4">{l.out}</p>
          </div>
        ))}
        <div class="text-accent-dim">
          <span class="text-accent-cyan">➜</span> <span class="text-muted">~/zain</span>{" "}
          <span class="text-ink">$</span>
          <span class="cursor-blink !ml-1.5 !h-3.5" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section class="min-h-screen flex items-center relative pt-28 pb-20">
      <div class="w-full max-w-6xl mx-auto px-6">
        <div class="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-grad-pill border border-accent/20 text-[10px] tracking-[0.18em] uppercase font-mono text-accent-dim mb-7 animate-fade-up">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
              Backend Engineer · CS Undergrad
            </div>

            <h1 class="font-sans text-5xl md:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.92] text-ink mb-7 animate-fade-up">
              BUILDING<br />
              <span class="grad-text">RELIABLE</span> SYSTEMS<br />
              THAT SCALE
            </h1>

            <div class="h-9 flex items-center mb-6 animate-fade-up" style="animation-delay: 120ms">
              <p class="text-muted text-base md:text-lg font-mono">
                <TextScramble />
                <span class="cursor-blink" />
              </p>
            </div>

            <p class="text-muted max-w-xl leading-relaxed border-l-2 border-accent/50 pl-5 text-sm md:text-base animate-fade-up" style="animation-delay: 180ms">
              {personal.blurb}
            </p>

            <div class="flex flex-wrap gap-4 pt-9 animate-fade-up" style="animation-delay: 240ms">
              <button
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
                }}
                class="btn-primary"
              >
                View My Work
                <span class="text-base leading-none">→</span>
              </button>
              <a href={`mailto:${personal.email}`} class="btn-ghost">
                Get In Touch
              </a>
              <a
                href={personal.github}
                target="_blank"
                aria-label="GitHub"
                class="btn-ghost !px-4"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.12v3.15c0 .3.21.67.8.55A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </a>
            </div>

            <div class="mt-5 animate-fade-up" style="animation-delay: 280ms">
              <a
                href="https://api.vergate.dev/badge/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ2ZXJnYXRlLmRldiIsInN1YiI6ImJkZ192azV4NTZydmlmIiwiZG9tYWluIjoiY29kZWNyYWNrLTAxLmdpdGh1Yi5pbyIsInRpZXIiOiJ2ZXJpZmllZCIsImlhdCI6MTc4Njc4NjUyMCwiZXhwIjoxODAyMzM4NTIwfQ.k9U79E3asQMnv0vMo6P7Ti60hxrW_aEMPaYxyNzjsQQ"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block"
              >
                <script
                  src="https://api.vergate.dev/badge.js"
                  data-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ2ZXJnYXRlLmRldiIsInN1YiI6ImJkZ192azV4NTZydmlmIiwiZG9tYWluIjoiY29kZWNyYWNrLTAxLmdpdGh1Yi5pbyIsInRpZXIiOiJ2ZXJpZmllZCIsImlhdCI6MTc4Njc4NjUyMCwiZXhwIjoxODAyMzM4NTIwfQ.k9U79E3asQMnv0vMo6P7Ti60hxrW_aEMPaYxyNzjsQQ"
                  data-style="dark"
                  async={true}
                />
              </a>
            </div>

            <div class="grid grid-cols-3 gap-4 pt-12 animate-fade-up" style="animation-delay: 300ms">
              <div class="card card-hover p-4">
                <div class="text-xl md:text-2xl font-bold font-sans text-ink">
                  {personal.cgpa}
                  <span class="text-accent-cyan text-sm">/4.0</span>
                </div>
                <div class="text-[9px] text-muted tracking-widest mt-1 uppercase font-mono">
                  CGPA · LUMS
                </div>
              </div>
              <div class="card card-hover p-4">
                <div class="text-xl md:text-2xl font-bold font-sans text-ink">
                  5<span class="text-accent-cyan text-sm">yr</span>
                </div>
                <div class="text-[9px] text-muted tracking-widest mt-1 uppercase font-mono">
                  Programming
                </div>
              </div>
              <div class="card card-hover p-4">
                <div class="text-xl md:text-2xl font-bold font-sans text-ink">
                  1<span class="text-accent-cyan text-sm">st</span>
                </div>
                <div class="text-[9px] text-muted tracking-widest mt-1 uppercase font-mono">
                  NASA Space Apps
                </div>
              </div>
            </div>
          </div>

          <div class="hidden lg:block">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
