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
    <section id="faq" class="py-20 scroll-mt-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex items-end justify-between mb-10">
          <div class="section-label">Questions</div>
          <span class="text-muted font-mono text-xs">Hiring & background</span>
        </div>

        <div
          ref={sectionRef}
          class="grid md:grid-cols-2 gap-5"
          classList={{ reveal: true, active: visible() }}
        >
          {faq.map((f) => (
            <div class="card card-hover p-6">
              <h3 class="font-serif font-medium text-ink leading-snug mb-3">{f.question}</h3>
              <p class="text-muted text-sm leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}