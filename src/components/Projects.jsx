import { createSignal, onMount } from "solid-js";
import { projects } from "../data/portfolio";

const statusColors = {
  LIVE: "text-emerald-700",
  MCP: "text-violet-700",
  API: "text-sky-700",
  "IN PROGRESS": "text-amber-700",
  ONGOING: "text-amber-700",
  HACKATHON: "text-rose-700",
  TEMPLATE: "text-zinc-600",
  "PRE-ALPHA": "text-cyan-700",
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
  const sc = statusColors[p.status] || "text-accent-dim";

  return (
    <div
      ref={cardRef}
      class="card card-hover lg:col-span-3 p-8 md:p-10 relative overflow-hidden"
      classList={{ reveal: true, active: visible() }}
    >
      <div class="grid lg:grid-cols-[1.4fr_0.9fr] gap-10 lg:items-center">
        <div>
          <div class="flex flex-wrap items-center gap-3 mb-5">
            <span class="text-xs font-mono text-accent uppercase tracking-widest">
              Currently building
            </span>
            <span class={`text-xs font-mono ${sc}`}>{p.status}</span>
          </div>

          <div class="flex items-center gap-4 mb-4">
            <img
              src="/vergate-logo.svg"
              alt="Vergate logo"
              class="w-12 h-12 rounded-xl border border-border bg-white p-1.5 shrink-0"
            />
            <div>
              <h3 class="font-serif text-2xl md:text-3xl font-medium text-ink">
                {p.title}
              </h3>
              <p class="text-muted text-sm mt-1">{p.subtitle}</p>
            </div>
          </div>

          <p class="text-muted text-sm leading-relaxed max-w-2xl">{p.desc}</p>

          <div class="flex flex-wrap gap-2 mt-5">
            {p.tags.map((t) => (
              <span class="chip">{t}</span>
            ))}
          </div>

          <div class="flex flex-wrap items-center gap-5 mt-6 pt-5 border-t border-border">
            <a href={p.url} target="_blank" rel="noopener noreferrer" class="btn-primary">
              Visit live site →
            </a>
            <span class="text-xs font-mono text-muted">
              Q3 2026 beta · early access open
            </span>
          </div>
        </div>

        <div class="bg-raised border border-border rounded-xl p-6">
          <p class="text-accent text-xs tracking-widest uppercase font-mono mb-2">
            Platform metrics
          </p>
          {p.highlights.map((h) => (
            <div class="flex items-center justify-between gap-4 py-3 border-b border-border last:border-0">
              <span class="text-xs text-muted">{h.label}</span>
              <span class="font-mono text-sm font-medium text-ink">{h.value}</span>
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

  const sc = statusColors[props.project.status] || "text-muted";

  return (
    <div
      ref={cardRef}
      class="card card-hover p-6 relative overflow-hidden"
      classList={{ reveal: true, active: visible() }}
    >
      <div class="flex items-start justify-between gap-3 mb-4">
        <span class="font-mono text-xs text-muted/60">
          {String(props.index + 1).padStart(2, "0")}
        </span>
        <span class={`text-xs font-mono ${sc}`}>{props.project.status}</span>
      </div>
      <h3 class="font-serif text-lg font-medium text-ink">
        {props.project.title}
      </h3>
      <p class="text-muted text-xs mt-1 mb-3">{props.project.subtitle}</p>
      <p class="text-muted text-xs leading-relaxed mb-5 min-h-[3rem]">
        {props.project.desc}
      </p>
      <div class="flex flex-wrap gap-2 mb-5">
        {props.project.tags.map((t) => (
          <span class="chip">{t}</span>
        ))}
      </div>
      <div class="flex gap-5 pt-3 border-t border-border">
        {props.project.url && (
          <a href={props.project.url} target="_blank" class="text-xs font-mono text-muted hover:text-ink transition-colors">
            Visit →
          </a>
        )}
        {props.project.github && (
          <a href={props.project.github} target="_blank" class="text-xs font-mono text-muted hover:text-ink transition-colors">
            Source ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" class="py-20 scroll-mt-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex items-end justify-between mb-10">
          <div class="section-label">Selected work</div>
          <span class="text-muted font-mono text-xs">
            {projects.length} projects
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