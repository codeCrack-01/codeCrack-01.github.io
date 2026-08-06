import { createSignal, onMount } from "solid-js";
import { experience } from "../data/portfolio";

function ExperienceCard(props) {
  let sectionRef;
  const [visible, setVisible] = createSignal(false);

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef) observer.observe(sectionRef);
  });

  return (
    <div
      ref={sectionRef}
      class="card p-8 md:p-10 relative overflow-hidden group"
      classList={{ reveal: true, active: visible() }}
    >
      <div class="absolute top-0 left-0 bottom-0 w-1 bg-grad-primary" />
      <div class="absolute inset-x-0 top-0 h-px bg-grad-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div class="relative z-10 space-y-6">
        <div class="flex flex-wrap items-center gap-3">
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-grad-pill border border-accent/20 text-[10px] tracking-widest uppercase font-mono text-accent-dim">
            <span class="w-1.5 h-1.5 rounded-full bg-accent" />
            {props.job.platform}
          </span>
          <span class="text-muted text-xs font-mono">{props.job.period}</span>
        </div>
        <h3 class="font-sans text-xl md:text-2xl font-bold text-ink uppercase tracking-tight group-hover:text-accent-dim transition-colors">
          {props.job.role}
        </h3>
        <ul class="space-y-4">
          {props.job.bullets.map((b, i) => (
            <li class="flex gap-4 text-sm text-muted leading-relaxed">
              <span class="text-accent font-mono text-xs mt-1 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        {props.job.links && (
          <div class="flex flex-wrap gap-5 pt-3 border-t border-border/60">
            {props.job.links.map((link) => (
              <a href={link.url} target="_blank" class="text-xs font-mono text-muted hover:text-accent-dim flex items-center gap-1.5 transition-colors">
                {link.label} <span class="text-base leading-none">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Freelance() {
  return (
    <section id="experience" class="py-24 scroll-mt-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex items-end justify-between mb-10">
          <div class="section-label">Experience</div>
          <span class="text-muted font-mono text-xs">Founding → Freelance</span>
        </div>
        <div class="space-y-6">
          {experience.map((job) => (
            <ExperienceCard job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
