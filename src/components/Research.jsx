import { research } from "../data/portfolio";

export default function Research() {
  return (
    <section id="research" class="py-12 scroll-mt-16">
      <h2 class="section-title">Research</h2>
      <div class="space-y-6">
        {research.map((r) => (
          <div class="card card-hover p-6 md:p-8">
            <div class="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 class="font-serif text-xl font-semibold text-ink">{r.title}</h3>
              <span class="text-xs font-mono text-muted">{r.period}</span>
            </div>
            <p class="text-sm text-muted">
              {r.role} · {r.institution} · Supervisor: {r.supervisor}
            </p>
            <ul class="mt-4 space-y-2 text-sm text-ink leading-relaxed list-disc list-inside">
              {r.bullets.map((b) => (
                <li>{b}</li>
              ))}
            </ul>
            {r.metric && (
              <p class="mt-4 text-sm font-mono text-accent">
                {r.metric.value} {r.metric.label}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}