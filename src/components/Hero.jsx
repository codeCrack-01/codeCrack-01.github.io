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
    <section style="position:relative;padding-block:var(--section-gap-l);background:#0A0A0A;color:#FFFFFF;overflow:hidden;border-bottom:var(--rule-bar) solid var(--color-rule);">
      <pre
        aria-hidden="true"
        style="position:absolute;inset:0;margin:0;padding:var(--space-lg);font-family:var(--font-outlier);font-size:var(--text-xs);line-height:1.2;color:#3B82F6;opacity:0.25;pointer-events:none;white-space:pre;overflow:hidden;"
      >
        {GRAFFITI.repeat(6)}
      </pre>
      <div class="container" style="position:relative;z-index:1;">
        <div style="display:grid;grid-template-columns:5fr 7fr;gap:var(--space-3xl);align-items:center;">
          <div>
            <h1 style="font-size:clamp(4rem, 8vw + 1rem, 8rem);color:var(--color-paper);max-width:none;">Zain Ahmed Khan</h1>
            <p class="lead" style="margin-top:var(--space-md);color:var(--color-paper);max-width:52ch;">
              Backend engineer and ML infrastructure. CS sophomore at LUMS, researching under Dr. Abdul Ali Bangash.
            </p>
            <div style="display:flex;gap:var(--space-md);margin-top:var(--space-xl);">
              <a href={`mailto:${personal.email}`} class="btn btn--primary" style="background:#FFFFFF;color:#0A0A0A;border-color:#FFFFFF;">Contact</a>
              <a href={personal.github} target="_blank" class="btn" style="color:#FFFFFF;border-color:#FFFFFF;">GitHub</a>
            </div>
            <p style="margin-top:var(--space-lg);font-size:var(--text-sm);color:#FFFFFF;opacity:0.85;">
              CGPA {personal.cgpa}/4.0 · Lahore, PK
            </p>
          </div>
          <div data-slot="hero" data-alt="Portrait or project screenshot" style="aspect-ratio:1/1;min-height:280px;border-radius:50%;overflow:hidden;border:var(--rule-bar) solid #FFFFFF;">
            <img src="/me.jpg" alt="Zain Ahmed Khan" style="border-radius:50%;" />
          </div>
        </div>
      </div>
    </section>
  );
}