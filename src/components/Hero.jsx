import { personal } from "../data/portfolio";

const GRAFFITI = `   /\\   /\\   /\\   /\\   /\\   /\\   /\\   /\\   /\\   /\\
  /  \\ /  \\ /  \\ /  \\ /  \\ /  \\ /  \\ /  \\ /  \\ /  \\
 /    \\    /    \\    /    \\    /    \\    /    \\    /
/______\\  /______\\  /______\\  /______\\  /______\\  /______
  |  |     |  |     |  |     |  |     |  |     |  |
  |  |     |  |     |  |     |  |     |  |     |  |
  |__|     |__|     |__|     |__|     |__|     |__|`;

export default function Hero() {
  return (
    <section style="position:relative;padding-block:var(--section-gap-l);background:var(--color-paper);color:var(--color-ink);overflow:hidden;border-bottom:var(--rule-bar) solid var(--color-rule);">
      <pre
        aria-hidden="true"
        style="position:absolute;inset:0;margin:0;padding:var(--space-lg);font-family:var(--font-outlier);font-size:var(--text-xs);line-height:1.2;color:var(--color-accent);opacity:0.18;pointer-events:none;white-space:pre;overflow:hidden;"
      >
        {GRAFFITI.repeat(6)}
      </pre>
      <div class="container" style="position:relative;z-index:1;">
        <div style="display:grid;grid-template-columns:5fr 7fr;gap:var(--space-3xl);align-items:center;">
          <div>
            <p style="font-family:var(--font-mono, 'JetBrains Mono', monospace);font-size:var(--text-xs);text-transform:uppercase;letter-spacing:0.18em;color:var(--color-accent);margin-bottom:var(--space-lg);">
              Undergraduate Researcher · BSCS @ LUMS
            </p>
            <h1 style="font-size:clamp(3rem, 6vw + 1rem, 5rem);color:var(--color-ink);max-width:none;line-height:1.05;">
              Zain Ahmed Khan
            </h1>
            <p class="lead" style="margin-top:var(--space-md);color:var(--color-muted);max-width:52ch;">
              Backend systems, distributed infrastructure, and ML pipelines — researching under Dr. Abdul Ali Bangash. CGPA {personal.cgpa}/4.0.
            </p>
            <div style="display:flex;gap:var(--space-md);margin-top:var(--space-xl);">
              <a href={`mailto:${personal.email}`} class="btn btn--primary">Contact</a>
              <a href={personal.github} target="_blank" class="btn">GitHub ↗</a>
            </div>
            <p style="margin-top:var(--space-lg);font-size:var(--text-sm);color:var(--color-muted);">
              CGPA {personal.cgpa}/4.0 · Lahore, PK · Open to internships
            </p>
          </div>
          <div style="display:flex;justify-content:center;">
            <div data-slot="hero" data-alt="Portrait" style="width:280px;height:280px;border-radius:50%;overflow:hidden;border:2px solid var(--color-accent);box-shadow:0 0 40px rgba(85,255,92,0.35), 0 8px 24px rgba(0,0,0,0.4);">
              <img src="/me.jpg" alt="Zain Ahmed Khan" style="border-radius:50%;width:100%;height:100%;object-fit:cover;" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}