import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" class="py-12 scroll-mt-16">
      <h2 class="section-title">Projects</h2>
      <div class="grid md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <div class="card card-hover p-6 flex flex-col">
            <div class="flex items-start justify-between gap-3 mb-2">
              <h3 class="font-serif text-lg font-semibold text-ink">{p.title}</h3>
              <span class="text-xs font-mono text-muted whitespace-nowrap">{p.status}</span>
            </div>
            <p class="text-sm text-muted">{p.subtitle}</p>
            <p class="mt-3 text-sm text-ink leading-relaxed flex-1">{p.desc}</p>
            <div class="flex flex-wrap gap-2 mt-4">
              {p.tags.map((t) => (
                <span class="chip">{t}</span>
              ))}
            </div>
            <div class="flex gap-4 mt-4 text-sm">
              {p.url && (
                <a href={p.url} target="_blank" class="text-accent hover:text-accent-dim font-medium">Visit →</a>
              )}
              {p.github && (
                <a href={p.github} target="_blank" class="text-accent hover:text-accent-dim font-medium">Source ↗</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}