import { createSignal, onMount } from "solid-js";
import { projects } from "../data/portfolio";

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

  const handleMouse = (e) => {
    const rect = cardRef.getBoundingClientRect();
    cardRef.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    cardRef.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      class="project-card relative bg-surface border border-border rounded-xl p-6 transition-colors shadow-sm"
      classList={{ reveal: true, active: visible() }}
      onMouseMove={handleMouse}
    >
      <div class="card-glow" />
      <div class="relative z-10">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="font-sans text-lg font-bold text-cream transition-colors">{props.project.title}</h3>
            <p class="text-muted text-xs mt-0.5">{props.project.subtitle}</p>
          </div>
          <span class="whitespace-nowrap px-2 py-1 text-[10px] border border-orange/30 text-orange rounded bg-orange/5 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-orange status-dot" />
            {props.project.status}
          </span>
        </div>
        <p class="text-muted text-xs leading-relaxed mb-5 h-auto min-h-[3rem]">
          {props.project.desc}
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
          {props.project.tags.map((t) => (
            <span class="text-[10px] px-2 py-1 bg-bg border border-border rounded text-muted">{t}</span>
          ))}
        </div>
        <div class="flex gap-3">
          {props.project.url && (
            <a href={props.project.url} target="_blank" class="text-xs text-muted hover:text-orange flex items-center gap-1 transition-colors">
              VISIT <span class="text-lg leading-none">→</span>
            </a>
          )}
          {props.project.github && (
            <a href={props.project.github} target="_blank" class="text-xs text-muted hover:text-orange flex items-center gap-1 transition-colors">
              SOURCE <span class="text-lg leading-none">↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" class="py-24">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex items-center gap-4 mb-12">
          <span class="text-orange text-xs tracking-[0.2em] uppercase font-mono">Selected Work</span>
          <div class="h-px flex-1 bg-border" />
          <span class="text-muted text-xs font-mono">{String(projects.length).padStart(2, "0")}</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <ProjectCard project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
