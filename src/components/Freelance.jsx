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
      class="bg-surface border border-border/60 rounded-2xl shadow-island p-8 md:p-12 relative overflow-hidden"
      classList={{ reveal: true, active: visible() }}
    >
      <div class="absolute top-0 left-0 w-1 h-full bg-accent" />
      <div class="relative z-10 space-y-6">
        <div class="flex items-center gap-3 text-xs text-accent tracking-widest font-mono">
          <span class="w-2 h-2 bg-accent rounded-full" />
          {props.job.platform} · {props.job.period}
        </div>
        <h3 class="font-sans text-2xl md:text-3xl font-bold text-ink uppercase">
          {props.job.role}
        </h3>
        <ul class="space-y-4">
          {props.job.bullets.map((b, i) => (
            <li class="flex gap-4 text-sm text-muted">
              <span class="text-accent font-mono text-xs mt-1 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        {props.job.links && (
          <div class="flex gap-4 pt-2">
            {props.job.links.map((link) => (
              <a href={link.url} target="_blank" class="text-xs text-muted hover:text-accent flex items-center gap-1 transition-colors">
                {link.label} <span class="text-lg leading-none">↗</span>
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
    <section id="experience" class="py-24">
      <div class="max-w-6xl mx-auto px-6">
        <div class="section-label mb-10">Experience</div>
        <div class="space-y-6">
          {experience.map((job) => (
            <ExperienceCard job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
