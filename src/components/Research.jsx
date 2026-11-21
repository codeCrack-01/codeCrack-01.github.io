import { research } from "../data/portfolio";

export default function Research() {
  return (
    <section id="research" class="section" style="background:var(--color-paper-2);border-top:var(--rule-bar) solid var(--color-rule);border-bottom:var(--rule-bar) solid var(--color-rule);">
      <div class="container">
        <h2>Research</h2>
        <p class="lead" style="margin-top:var(--space-md);margin-bottom:var(--space-xl);color:var(--color-muted);">Empirical systems work and ongoing collaboration.</p>
        <div style="margin-top:var(--space-xl);">
          {research.map((r) => (
            <div class="row">
              <div style="display:grid;grid-template-columns:1fr auto;gap:var(--space-md);align-items:baseline;">
                <h3>{r.title}</h3>
                <span class="num" style="font-size:var(--text-sm);color:var(--color-muted);">{r.period}</span>
              </div>
              <p style="font-size:var(--text-sm);color:var(--color-muted);margin-top:var(--space-xs);">
                {r.role} · {r.institution} · Supervisor: {r.supervisor}
              </p>
              <ul style="margin-top:var(--space-md);padding-left:var(--space-lg);font-size:var(--text-md);line-height:1.6;">
                {r.bullets.map((b) => (
                  <li style="margin-bottom:var(--space-xs);">{b}</li>
                ))}
              </ul>
              {r.metric && (
                <p class="num" style="margin-top:var(--space-md);font-size:var(--text-lg);color:var(--color-accent);">
                  {r.metric.value} {r.metric.label}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}