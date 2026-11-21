import { experience, activities } from "../data/portfolio";

export default function Freelance() {
  return (
    <section id="experience" class="py-12 scroll-mt-16">
      <h2 class="section-title">Experience</h2>
      <div class="space-y-6">
        {experience.map((job) => (
          <div class="card card-hover p-6 md:p-8">
            <div class="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 class="font-serif text-xl font-semibold text-ink">{job.role}</h3>
              <span class="text-xs font-mono text-muted">{job.period}</span>
            </div>
            <p class="text-sm text-muted mb-4">{job.platform}</p>
            <ul class="space-y-2 text-sm text-ink leading-relaxed list-disc list-inside">
              {job.bullets.map((b) => (
                <li>{b}</li>
              ))}
            </ul>
            {job.links && (
              <div class="flex gap-4 mt-4 text-sm">
                {job.links.map((link) => (
                  <a href={link.url} target="_blank" class="text-accent hover:text-accent-dim font-medium">{link.label} ↗</a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <h3 class="font-serif text-lg font-semibold text-ink mt-10 mb-4">Leadership & activities</h3>
      <div class="grid md:grid-cols-2 gap-5">
        {activities.map((a) => (
          <div class="card p-6">
            <div class="flex items-baseline justify-between gap-2 mb-1">
              <h4 class="font-medium text-ink">{a.role}</h4>
              <span class="text-xs font-mono text-muted">{a.period}</span>
            </div>
            <p class="text-sm text-muted mb-2">{a.org}</p>
            <p class="text-sm text-ink leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}