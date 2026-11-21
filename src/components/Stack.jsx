import { skills, recognition, education } from "../data/portfolio";

export default function Stack() {
  return (
    <section id="stack" class="py-12 scroll-mt-16">
      <h2 class="section-title">Skills</h2>
      <div class="grid md:grid-cols-2 gap-5">
        {Object.entries(skills).map(([category, items]) => (
          <div class="card p-5">
            <h3 class="text-sm font-semibold text-ink mb-3">{category}</h3>
            <div class="flex flex-wrap gap-2">
              {items.map((item) => (
                <span class="chip">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 class="section-title mt-12">Education</h2>
      <div class="space-y-4">
        {education.map((e) => (
          <div class="card p-5">
            <p class="font-medium text-ink">{e.institution}</p>
            <p class="text-sm text-muted">{e.degree} · {e.period}</p>
            {e.detail && <p class="text-sm text-accent mt-1">{e.detail}</p>}
          </div>
        ))}
      </div>

      <h2 class="section-title mt-12">Recognition</h2>
      <ul class="space-y-2 text-sm">
        {recognition.map((r) => (
          <li class="card p-4">
            {/https?:\/\/[^\s]+/.test(r) ? (
              <a href={r.match(/https?:\/\/[^\s]+/)[0]} target="_blank" class="text-accent hover:text-accent-dim">
                {r.replace(/ — https?:\/\/[^\s]+/, "")}
              </a>
            ) : (
              <span class="text-ink">{r}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}