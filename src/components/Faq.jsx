import { createSignal, onMount } from "solid-js";
import { faq } from "../data/portfolio";

export default function Faq() {
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
    <section id="faq" class="py-24 scroll-mt-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex items-end justify-between mb-10">
          <div class="section-label">FAQ</div>
          <span class="text-muted font-mono text-xs">Hiring & background</span>
        </div>

        <div
          ref={sectionRef}
          class="grid md:grid-cols-2 gap-5"
          classList={{ reveal: true, active: visible() }}
        >
          {faq.map((f) => (
            <div class="card card-hover p-6">
              <div class="flex items-start gap-3 mb-4">
                <span class="w-8 h-8 shrink-0 rounded-lg bg-grad-pill border border-accent/20 flex items-center justify-center text-accent-cyan font-mono text-xs font-bold">
                  Q
                </span>
                <h3 class="font-sans font-bold text-ink leading-snug">{f.question}</h3>
              </div>
              <div class="flex items-start gap-3">
                <span class="w-8 h-8 shrink-0 rounded-lg border border-border bg-surface flex items-center justify-center text-muted font-mono text-xs">
                  A
                </span>
                <p class="text-muted text-sm leading-relaxed">{f.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
