import { projects } from "../data/portfolio";

export default function Work() {
  return (
    <section id="work" class="section" style="background:var(--color-accent);color:var(--color-accent-ink);border-top:var(--rule-bar) solid var(--color-accent-2);border-bottom:var(--rule-bar) solid var(--color-accent-2);">
      <div class="container">
        <h2>Selected work — {projects.length}</h2>
        <p class="lead" style="margin-top:var(--space-md);margin-bottom:var(--space-xl);">Projects shipped and in progress.</p>
        <div>
          {projects.map((p) => (
            <div class="index-row">
              <div>
                <h3 style="font-size:var(--text-title);">{p.title}</h3>
                <p style="font-size:var(--text-sm);color:var(--color-muted);margin-top:var(--space-xs);">{p.subtitle}</p>
              </div>
              <span style="font-size:var(--text-sm);color:var(--color-muted);">{p.status}</span>
              <div style="display:flex;gap:var(--space-md);font-size:var(--text-sm);">
                {p.url && <a href={p.url} target="_blank">Visit</a>}
                {p.github && <a href={p.github} target="_blank">Source</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}