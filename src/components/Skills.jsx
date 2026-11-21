import { skills, recognition, education } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" class="section">
      <div class="container">
        <h2>Skills</h2>
        <div style="margin-top:var(--space-xl);display:grid;grid-template-columns:1fr 1fr;gap:var(--space-xl);">
          {Object.entries(skills).map(([category, items]) => (
            <div>
              <h3 style="font-size:var(--text-title);">{category}</h3>
              <p style="font-size:var(--text-sm);color:var(--color-muted);margin-top:var(--space-xs);line-height:1.6;">{items.join(", ")}</p>
            </div>
          ))}
        </div>

        <h2 style="margin-top:var(--section-gap-s);">Education</h2>
        <div style="margin-top:var(--space-xl);">
          {education.map((e) => (
            <div class="row">
              <p style="font-weight:500;">{e.institution}</p>
              <p style="font-size:var(--text-sm);color:var(--color-muted);">{e.degree} · {e.period}</p>
              {e.detail && <p style="font-size:var(--text-sm);color:var(--color-accent);margin-top:var(--space-xs);">{e.detail}</p>}
            </div>
          ))}
        </div>

        <h2 style="margin-top:var(--section-gap-s);">Recognition</h2>
        <div style="margin-top:var(--space-xl);">
          {recognition.map((r) => (
            <div class="row" style="font-size:var(--text-sm);">
              {/https?:\/\/[^\s]+/.test(r) ? (
                <a href={r.match(/https?:\/\/[^\s]+/)[0]} target="_blank">{r.replace(/ — https?:\/\/[^\s]+/, "")}</a>
              ) : (
                <span>{r}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}