import { createSignal, onMount } from "solid-js";
import { skills, recognition, education } from "../data/portfolio";

function SkillCard(props) {
  let cardRef;
  const [visible, setVisible] = createSignal(false);
  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (cardRef) observer.observe(cardRef);
  });

  return (
    <div
      ref={cardRef}
      class="bg-surface border border-border p-6 rounded-xl"
      classList={{ reveal: true, active: visible() }}
    >
      <h4 class="text-orange text-xs tracking-widest mb-4 uppercase font-mono">{props.category}</h4>
      <div class="flex flex-wrap gap-2">
        {props.items.map((item) => (
          <span class="px-2.5 py-1 bg-bg border border-border rounded text-xs text-muted hover:border-orange/40 hover:text-cream transition-colors">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Stack() {
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
    <section id="stack" class="py-24">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex items-center gap-4 mb-12">
          <span class="text-orange text-xs tracking-[0.2em] uppercase font-mono">Tech Stack</span>
          <div class="h-px flex-1 bg-border" />
        </div>

        <div
          ref={sectionRef}
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          classList={{ reveal: true, active: visible() }}
        >
          {Object.entries(skills).map(([category, items]) => (
            <SkillCard category={category} items={items} />
          ))}
        </div>

        {/* Recognition */}
        <div class="mt-12 bg-surface border border-border rounded-xl p-8">
          <h4 class="text-orange text-xs tracking-widest mb-6 uppercase font-mono">Recognition & Education</h4>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h5 class="text-cream text-sm font-bold mb-3 font-sans">Recognition</h5>
              <ul class="space-y-3">
                {recognition.map((r) => (
                  <li class="text-xs text-muted font-mono flex gap-2">
                    <span class="text-orange shrink-0">▹</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 class="text-cream text-sm font-bold mb-3 font-sans">Education</h5>
              <ul class="space-y-4">
                {education.map((e) => (
                  <li>
                    <p class="text-xs text-cream font-bold font-sans">{e.institution}</p>
                    <p class="text-xs text-muted mt-0.5 font-mono">{e.degree} · {e.period}</p>
                    <p class="text-xs text-orange mt-0.5 font-mono">{e.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
