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
    <section id="research" class="py-24">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex items-center gap-4 mb-12">
          <span class="text-orange text-xs tracking-[0.2em] uppercase font-mono">Research</span>
          <div class="h-px flex-1 bg-border" />
        </div>

        <div
          ref={sectionRef}
          class="bg-surface border border-border rounded-xl p-8 md:p-12 relative overflow-hidden"
          classList={{ reveal: true, active: visible() }}
        >
          <div class="absolute top-0 left-0 w-1 h-full bg-orange" />
          <div class="relative z-10 grid md:grid-cols-3 gap-8">
            <div class="md:col-span-2 space-y-6">
              <div class="flex items-center gap-3 text-xs text-orange tracking-widest font-mono">
                <span class="w-2 h-2 bg-orange rounded-full animate-pulse" />
                {research.institution} · SUPERVISOR: {research.supervisor}
              </div>
              <h3 class="font-sans text-2xl md:text-3xl font-bold text-cream uppercase">
                {research.title}
              </h3>
              <p class="text-muted text-sm font-mono">
                {research.role} · {research.period}
              </p>
              <ul class="space-y-4 mt-4">
                {research.bullets.map((b, i) => (
                  <li class="flex gap-4 text-sm text-muted">
                    <span class="text-orange font-mono text-xs mt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div class="hidden md:flex flex-col justify-center items-center border-l border-border pl-8">
              <div class="text-3xl font-bold text-cream font-sans">{research.metric.value}</div>
              <div class="text-[10px] text-muted tracking-widest mt-1 uppercase font-mono text-center">
                {research.metric.label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
