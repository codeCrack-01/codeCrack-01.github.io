import { createSignal, onMount } from "solid-js";
import { societies } from "../data/portfolio";

export default function Societies() {
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
    <section id="community" class="py-20 scroll-mt-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex items-end justify-between mb-10">
          <div class="section-label">Community</div>
          <span class="text-muted font-mono text-xs">LUMS · societies</span>
        </div>

        <div
          ref={sectionRef}
          class="grid md:grid-cols-2 gap-5"
          classList={{ reveal: true, active: visible() }}
        >
          {societies.map((s) => (
            <div class="card card-hover p-8">
              <div class="flex items-center justify-between mb-3">
                <h3 class="font-serif text-2xl font-medium text-ink">{s.name}</h3>
                {s.link && (
                  <a href={s.link} target="_blank" class="text-xs font-mono text-muted hover:text-ink transition-colors">
                    link ↗
                  </a>
                )}
              </div>
              <p class="text-accent text-xs font-mono mb-4">{s.role}</p>
              <p class="text-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}