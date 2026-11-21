import { experience, activities } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" class="section">
      <div class="container">
        <h2>Experience</h2>
        <div style="margin-top:var(--space-xl);">
          {experience.map((job) => (
            <div class="row">
              <div style="display:grid;grid-template-columns:1fr auto;gap:var(--space-md);align-items:baseline;">
                <h3>{job.role}</h3>
                <span style="font-size:var(--text-sm);color:var(--color-muted);">{job.period}</span>
              </div>
              <p style="font-size:var(--text-sm);color:var(--color-muted);margin-top:var(--space-xs);">{job.platform}</p>
              <ul style="margin-top:var(--space-md);padding-left:var(--space-lg);font-size:var(--text-md);line-height:1.6;">
                {job.bullets.map((b) => (
                  <li style="margin-bottom:var(--space-xs);">{b}</li>
                ))}
              </ul>
              {job.links && (
                <div style="display:flex;gap:var(--space-md);margin-top:var(--space-md);font-size:var(--text-sm);">
                  {job.links.map((link) => (
                    <a href={link.url} target="_blank">{link.label}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <h3 style="margin-top:var(--space-2xl);">Leadership & activities</h3>
        <div style="margin-top:var(--space-md);">
          {activities.map((a) => (
            <div class="row" style="display:grid;grid-template-columns:1fr auto;gap:var(--space-md);align-items:baseline;">
              <div>
                <p style="font-weight:500;">{a.role}</p>
                <p style="font-size:var(--text-sm);color:var(--color-muted);">{a.org}</p>
                <p style="font-size:var(--text-sm);margin-top:var(--space-xs);">{a.desc}</p>
              </div>
              <span style="font-size:var(--text-sm);color:var(--color-muted);">{a.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}