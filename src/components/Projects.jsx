import { createSignal, onMount } from "solid-js";
import { projects } from "../data/portfolio";

const statusColors = {
  LIVE: { dot: "bg-emerald-400", text: "text-emerald-300", ring: "border-emerald-400/30 bg-emerald-400/10" },
  MCP: { dot: "bg-violet-400", text: "text-violet-300", ring: "border-violet-400/30 bg-violet-400/10" },
  API: { dot: "bg-sky-400", text: "text-sky-300", ring: "border-sky-400/30 bg-sky-400/10" },
  "IN PROGRESS": { dot: "bg-amber-400", text: "text-amber-300", ring: "border-amber-400/30 bg-amber-400/10" },
  ONGOING: { dot: "bg-amber-400", text: "text-amber-300", ring: "border-amber-400/30 bg-amber-400/10" },
  HACKATHON: { dot: "bg-rose-400", text: "text-rose-300", ring: "border-rose-400/30 bg-rose-400/10" },
  TEMPLATE: { dot: "bg-zinc-400", text: "text-zinc-300", ring: "border-zinc-400/30 bg-zinc-400/10" },
  "PRE-ALPHA": { dot: "bg-cyan-400", text: "text-cyan-300", ring: "border-cyan-400/30 bg-cyan-400/10" },
};

function FeaturedCard(props) {
  let cardRef;
  const [visible, setVisible] = createSignal(false);

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (cardRef) observer.observe(cardRef);
  });

  const p = props.project;
  const sc = statusColors[p.status] || { dot: "bg-accent", text: "text-accent-dim", ring: "border-accent/30 bg-accent/10" };

  return (
    <div
      ref={cardRef}
      class="card card-hover lg:col-span-3 p-8 md:p-10 relative overflow-hidden group"
      classList={{ reveal: true, active: visible() }}
    >
      <div class="absolute inset-x-0 top-0 h-px bg-grad-primary" />
      <div class="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
      <div class="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-accent-cyan/10 blur-3xl pointer-events-none" />

      <div class="relative z-10 grid lg:grid-cols-[1.35fr_1fr] gap-10 lg:items-center">
        <div>
          <div class="flex flex-wrap items-center gap-3 mb-6">
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-grad-primary text-bg text-[10px] tracking-widest uppercase font-mono font-bold">
              ★ Flagship Project
            </span>
            <span class={`inline-flex items-center gap-1.5 whitespace-nowrap px-2.5 py-1 text-[10px] tracking-widest uppercase font-mono ${sc.ring} ${sc.text} rounded-full`}>
              <span class={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
              {p.status}
            </span>
          </div>

          <div class="flex items-center gap-4 mb-5">
            <span class="w-12 h-12 shrink-0 rounded-xl bg-grad-primary flex items-center justify-center text-bg font-sans text-2xl font-bold shadow-glow">
              V
            </span>
            <div>
              <h3 class="font-sans text-2xl md:text-3xl font-bold text-ink tracking-tight group-hover:text-accent-dim transition-colors">
                {p.title}
              </h3>
              <p class="text-accent-cyan text-sm mt-1">{p.subtitle}</p>
            </div>
          </div>

          <p class="text-muted text-sm leading-relaxed max-w-2xl">{p.desc}</p>

          <div class="flex flex-wrap gap-2 mt-6">
            {p.tags.map((t) => (
              <span class="chip">{t}</span>
            ))}
          </div>

          <div class="flex flex-wrap items-center gap-5 mt-7 pt-5 border-t border-border/60">
            <a href={p.url} target="_blank" rel="noopener noreferrer" class="btn-primary">
              Visit Live Platform <span class="text-base leading-none">→</span>
            </a>
            <span class="text-[10px] font-mono text-muted tracking-widest uppercase">
              Q3 2026 Beta · Early Access Open
            </span>
          </div>
        </div>

        <div class="bg-[#101420] border border-border rounded-2xl p-6">
          <div class="text-accent-dim text-xs tracking-widest uppercase font-mono mb-2">
            Platform Metrics
          </div>
          {p.highlights.map((h) => (
            <div class="flex items-center justify-between gap-4 py-3 border-b border-border/50 last:border-0">
              <span class="text-xs text-muted">{h.label}</span>
              <span class="font-mono text-sm font-bold text-ink">{h.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard(props) {
  let cardRef;
  const [visible, setVisible] = createSignal(false);

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (cardRef) observer.observe(cardRef);
  });

  const sc = statusColors[props.project.status] || { dot: "bg-accent", text: "text-accent-dim", ring: "border-accent/30 bg-accent/10" };

  return (
    <div
      ref={cardRef}
      class="card card-hover p-6 relative overflow-hidden group"
      classList={{ reveal: true, active: visible() }}
    >
      <div class="absolute inset-x-0 top-0 h-px bg-grad-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div class="flex items-start justify-between gap-3 mb-4">
        <span class="font-mono text-xs text-muted/40 font-bold">
          {String(props.index + 1).padStart(2, "0")}
        </span>
        <span class={`whitespace-nowrap px-2.5 py-1 text-[10px] tracking-widest uppercase font-mono ${sc.ring} ${sc.text} rounded-full flex items-center gap-1.5`}>
          <span class={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
          {props.project.status}
        </span>
      </div>
      <h3 class="font-sans text-lg font-bold text-ink group-hover:text-accent-dim transition-colors">
        {props.project.title}
      </h3>
      <p class="text-accent-cyan text-xs mt-1 mb-3">{props.project.subtitle}</p>
      <p class="text-muted text-xs leading-relaxed mb-5 min-h-[3rem]">
        {props.project.desc}
      </p>
      <div class="flex flex-wrap gap-2 mb-5">
        {props.project.tags.map((t) => (
          <span class="chip">{t}</span>
        ))}
      </div>
      <div class="flex gap-5 pt-3 border-t border-border/60">
        {props.project.url && (
          <a href={props.project.url} target="_blank" class="text-xs font-mono text-muted hover:text-accent-dim flex items-center gap-1.5 transition-colors">
            VISIT <span class="text-base leading-none">→</span>
          </a>
        )}
        {props.project.github && (
          <a href={props.project.github} target="_blank" class="text-xs font-mono text-muted hover:text-accent-dim flex items-center gap-1.5 transition-colors">
            SOURCE <span class="text-base leading-none">↗</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" class="py-24 scroll-mt-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex items-end justify-between mb-10">
          <div class="section-label">Selected Work</div>
          <span class="text-muted font-mono text-xs">
            {String(projects.length).padStart(2, "0")} projects
          </span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) =>
            p.featured ? (
              <FeaturedCard project={p} index={i} />
            ) : (
              <ProjectCard project={p} index={i} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
