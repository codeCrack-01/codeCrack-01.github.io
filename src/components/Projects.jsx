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

  return (
    <div
      ref={cardRef}
      class="island-card border border-border/60 p-6"
      classList={{ reveal: true, active: visible() }}
    >
      <div class="flex justify-between items-start mb-4">
        <div>
          <h3 class="font-sans text-lg font-bold text-ink">{props.project.title}</h3>
          <p class="text-muted text-xs mt-0.5">{props.project.subtitle}</p>
        </div>
        <span class="whitespace-nowrap px-2.5 py-1 text-[10px] border border-accent/30 text-accent rounded-full bg-accent/5 flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-accent" />
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
      <div class="flex gap-4">
        {props.project.url && (
          <a href={props.project.url} target="_blank" class="text-xs text-muted hover:text-accent flex items-center gap-1 transition-colors">
            VISIT <span class="text-lg leading-none">→</span>
          </a>
        )}
        {props.project.github && (
          <a href={props.project.github} target="_blank" class="text-xs text-muted hover:text-accent flex items-center gap-1 transition-colors">
            SOURCE <span class="text-lg leading-none">↗</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" class="py-24">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-label mb-10">
          Selected Work
          <span class="text-muted text-[10px] ml-auto font-sans normal-case tracking-normal">{String(projects.length).padStart(2, "0")}</span>
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
