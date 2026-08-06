import { createSignal, onMount } from "solid-js";
import { skills, recognition, education, researchInterests } from "../data/portfolio";

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
      class="card card-hover p-6"
      classList={{ reveal: true, active: visible() }}
    >
      <h4 class="text-accent-dim text-xs tracking-widest mb-4 uppercase font-mono">
        {props.category}
      </h4>
      <div class="flex flex-wrap gap-2">
        {props.items.map((item) => (
          <span class="chip">{item}</span>
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
    <section id="stack" class="py-24 scroll-mt-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex items-end justify-between mb-10">
          <div class="section-label">Tech Stack</div>
          <span class="text-muted font-mono text-xs">Python · Systems · Cloud</span>
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

        <div class="mt-8 grid md:grid-cols-2 gap-5">
          <div class="card p-8">
            <h4 class="text-accent-dim text-xs tracking-widest mb-6 uppercase font-mono">
              Recognition
            </h4>
            <ul class="space-y-3.5">
              {recognition.map((r) => (
                <li class="text-xs text-muted font-mono flex gap-2.5 leading-relaxed">
                  <span class="text-accent-cyan shrink-0">▹</span>
                  <span>
                    {/https?:\/\/[^\s]+/.test(r) ? (
                      <a
                        href={r.match(/https?:\/\/[^\s]+/)[0]}
                        target="_blank"
                        class="text-accent-dim underline underline-offset-2 decoration-accent/40 hover:decoration-accent-cyan hover:text-ink transition-colors"
                      >
                        {r.replace(/ — https?:\/\/[^\s]+/, "")}
                      </a>
                    ) : (
                      r
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div class="card p-8">
            <h4 class="text-accent-dim text-xs tracking-widest mb-6 uppercase font-mono">
              Education
            </h4>
            <ul class="space-y-6">
              {education.map((e) => (
                <li>
                  <p class="text-sm text-ink font-bold font-sans">{e.institution}</p>
                  <p class="text-xs text-muted mt-1 font-mono">{e.degree} · {e.period}</p>
                  {e.detail && <p class="text-xs text-accent-cyan mt-1 font-mono">{e.detail}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div class="mt-8 card p-8">
          <h4 class="text-accent-dim text-xs tracking-widest mb-5 uppercase font-mono">
            Research Interests
          </h4>
          <div class="flex flex-wrap gap-2">
            {researchInterests.map((interest) => (
              <span class="chip">{interest}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
