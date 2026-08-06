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
    <section id="research" class="py-24 scroll-mt-16">
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
          <div class="absolute top-0 left-0 bottom-0 w-1 bg-grad-primary" />
          <div class="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
          <div class="relative z-10 grid md:grid-cols-[1.6fr_0.9fr] gap-10">
            <div class="space-y-6">
              <div class="flex flex-wrap items-center gap-3 text-xs tracking-widest font-mono text-accent-dim">
                <span class="w-2 h-2 rounded-full bg-grad-primary" />
                {research.institution}
                <span class="text-muted/50">·</span>
                <span>SUPERVISOR: {research.supervisor}</span>
              </div>
              <h3 class="font-sans text-2xl md:text-4xl font-bold text-ink leading-tight">
                {research.title}
              </h3>
              <p class="text-muted text-sm font-mono">
                {research.role} <span class="text-border">·</span> {research.period}
              </p>
              <ul class="space-y-5 mt-2">
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
                <div class="text-5xl md:text-6xl font-bold font-sans grad-text">
                  {research.metric.value}
                </div>
                <div class="text-[10px] text-muted tracking-widest mt-2 uppercase font-mono text-center">
                  {research.metric.label}
                </div>
              </div>
              <div class="mt-8 hidden md:block">
                <svg width="160" height="36" viewBox="0 0 160 36" fill="none" aria-hidden="true">
                  {[6, 14, 9, 20, 12, 26, 18, 30, 22, 15, 24, 28, 20, 32, 25, 18, 27, 22, 30, 26].map((h, i) => (
                    <rect key={i} x={i * 8} width="4" height={h} rx="2" fill="url(#researchBars)" opacity="0.5 + i * 0.025" />
                  ))}
                  <defs>
                    <linearGradient id="researchBars" x1="0" y1="0" x2="160" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#7C8CFF" />
                      <stop offset="1" stop-color="#22D3EE" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
