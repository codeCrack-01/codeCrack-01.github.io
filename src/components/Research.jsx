import { createSignal, onMount } from "solid-js";
import { research } from "../data/portfolio";

export default function Research() {
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
    <section id="research" class="py-20 scroll-mt-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex items-end justify-between mb-10">
          <div class="section-label">Research</div>
          <span class="text-muted font-mono text-xs">Undergraduate · LUMS</span>
        </div>

        <div
          ref={sectionRef}
          class="card p-8 md:p-12 relative overflow-hidden"
          classList={{ reveal: true, active: visible() }}
        >
          <div class="relative z-10 grid md:grid-cols-[1.6fr_0.9fr] gap-10">
            <div class="space-y-6">
              <p class="text-xs font-mono text-accent uppercase tracking-widest">
                {research.institution} · Supervisor: {research.supervisor}
              </p>
              <h3 class="font-serif text-2xl md:text-4xl font-medium text-ink leading-tight">
                {research.title}
              </h3>
              <p class="text-muted text-sm font-mono">
                {research.role} · {research.period}
              </p>
              <ul class="space-y-4 mt-2">
                {research.bullets.map((b, i) => (
                  <li class="flex gap-4 text-sm text-muted leading-relaxed">
                    <span class="text-accent font-mono text-xs mt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div class="flex md:flex-col items-center justify-center gap-4 md:gap-0 border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-10">
              <div class="text-center">
                <div class="text-5xl md:text-6xl font-serif font-medium text-accent">
                  {research.metric.value}
                </div>
                <div class="text-[10px] text-muted tracking-widest mt-2 uppercase font-mono">
                  {research.metric.label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}