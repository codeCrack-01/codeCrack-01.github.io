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
      class="card p-8 md:p-10 relative overflow-hidden"
      classList={{ reveal: true, active: visible() }}
    >
      <div class="relative z-10 space-y-6">
        <div class="flex flex-wrap items-center gap-3">
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-raised border border-border text-xs font-mono text-accent">
            {props.job.platform}
          </span>
          <span class="text-muted text-xs font-mono">{props.job.period}</span>
        </div>
        <h3 class="font-serif text-xl md:text-2xl font-medium text-ink">
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
          <div class="flex flex-wrap gap-5 pt-3 border-t border-border">
            {props.job.links.map((link) => (
              <a href={link.url} target="_blank" class="text-xs font-mono text-muted hover:text-ink transition-colors">
                {link.label} ↗
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
    <section id="experience" class="py-20 scroll-mt-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex items-end justify-between mb-10">
          <div class="section-label">Experience</div>
          <span class="text-muted font-mono text-xs">Founding → freelance</span>
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