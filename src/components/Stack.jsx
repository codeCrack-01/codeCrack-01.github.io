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
      class="bg-surface border border-border/60 rounded-2xl shadow-island p-6"
      classList={{ reveal: true, active: visible() }}
    >
      <h4 class="text-accent text-xs tracking-widest mb-4 uppercase font-mono">{props.category}</h4>
      <div class="flex flex-wrap gap-2">
        {props.items.map((item) => (
          <span class="px-2.5 py-1 bg-bg border border-border rounded text-xs text-muted hover:border-accent/40 hover:text-accent transition-colors">
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
        <div class="section-label mb-10">Tech Stack</div>

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
          <div class="bg-surface border border-border/60 rounded-2xl shadow-island p-8">
            <h4 class="text-accent text-xs tracking-widest mb-6 uppercase font-mono">Recognition</h4>
            <ul class="space-y-3">
              {recognition.map((r) => (
                <li class="text-xs text-muted font-mono flex gap-2">
                  <span class="text-accent shrink-0">▹</span>
                  <span>
                    {/https?:\/\/[^\s]+/.test(r) ? (
                      <a
                        href={r.match(/https?:\/\/[^\s]+/)[0]}
                        target="_blank"
                        class="text-accent underline underline-offset-2 hover:opacity-70 transition-opacity"
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
          <div class="bg-surface border border-border/60 rounded-2xl shadow-island p-8">
            <h4 class="text-accent text-xs tracking-widest mb-6 uppercase font-mono">Education</h4>
            <ul class="space-y-5">
              {education.map((e) => (
                <li>
                  <p class="text-sm text-ink font-bold font-sans">{e.institution}</p>
                  <p class="text-xs text-muted mt-0.5 font-mono">{e.degree} · {e.period}</p>
                  {e.detail && <p class="text-xs text-accent mt-0.5 font-mono">{e.detail}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div class="mt-8 bg-surface border border-border/60 rounded-2xl shadow-island p-8">
          <h4 class="text-accent text-xs tracking-widest mb-5 uppercase font-mono">Research Interests</h4>
          <div class="flex flex-wrap gap-2">
            {researchInterests.map((interest) => (
              <span class="px-3 py-1.5 bg-bg border border-border rounded text-xs text-muted hover:border-accent/40 hover:text-accent transition-colors">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
