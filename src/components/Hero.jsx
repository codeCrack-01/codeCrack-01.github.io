import { personal } from "../data/portfolio";

export default function Hero() {
  const stats = [
    { value: personal.cgpa, label: "CGPA / 4.0" },
    { value: "39", label: "Models benchmarked" },
    { value: "1st", label: "NASA Space Apps (regional)" },
    { value: "17", label: "MCP tools shipped" },
  ];

  return (
    <section style="position:relative;padding-block:var(--section-gap-l);background:var(--color-paper);color:var(--color-ink);overflow:hidden;border-bottom:var(--rule-bar) solid var(--color-rule);">
      {/* Nexus-style bokeh orbs */}
      <div class="nexus-orb" style="width:420px;height:420px;top:-120px;left:-80px;background:radial-gradient(circle, rgba(85,255,92,0.45), transparent 70%);animation:nexus-drift-a 18s ease-in-out infinite;" />
      <div class="nexus-orb" style="width:360px;height:360px;top:40px;right:-60px;background:radial-gradient(circle, rgba(59,130,246,0.35), transparent 70%);animation:nexus-drift-b 22s ease-in-out infinite;" />
      <div class="nexus-orb" style="width:300px;height:300px;bottom:-80px;left:40%;background:radial-gradient(circle, rgba(168,85,247,0.30), transparent 70%);animation:nexus-drift-c 14s ease-in-out infinite;" />
      <div class="nexus-orb" style="width:260px;height:260px;bottom:20px;right:20%;background:radial-gradient(circle, rgba(85,255,92,0.25), transparent 70%);animation:nexus-drift-a 26s ease-in-out infinite reverse;" />

      <div class="container" style="position:relative;z-index:1;">
        <div style="display:grid;grid-template-columns:4fr 8fr;gap:var(--space-3xl);align-items:center;">
          <div>
            <p style="font-family:var(--font-mono, 'JetBrains Mono', monospace);font-size:var(--text-xs);text-transform:uppercase;letter-spacing:0.18em;color:var(--color-accent);margin-bottom:var(--space-lg);">
              Undergraduate Researcher · BSCS @ LUMS
            </p>
            <h1 style="font-family:'Doto', monospace;font-weight:900;font-size:clamp(3.5rem, 7vw + 1rem, 6rem);color:var(--color-ink);max-width:none;line-height:1.0;letter-spacing:0.02em;">
              Zain Ahmed Khan
            </h1>
            <p class="lead" style="margin-top:var(--space-md);color:var(--color-muted);max-width:52ch;">
              Backend systems, distributed infrastructure, and ML pipelines — researching under Dr. Abdul Ali Bangash. CGPA {personal.cgpa}/4.0.
            </p>
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:var(--space-md);margin-top:var(--space-xl);max-width:420px;">
              {stats.map((s) => (
                <div style="padding:var(--space-md);border:var(--rule-hair) solid var(--color-rule);border-radius:var(--radius-pill);">
                  <div style="font-family:'JetBrains Mono', monospace;font-weight:800;font-size:var(--text-xl);color:var(--color-accent);line-height:1;">{s.value}</div>
                  <div style="font-size:var(--text-xs);color:var(--color-muted);margin-top:var(--space-xs);">{s.label}</div>
                </div>
              ))}
            </div>
            <div style="display:flex;gap:var(--space-md);margin-top:var(--space-xl);">
              <a href={`mailto:${personal.email}`} class="btn btn--primary">Contact</a>
              <a href={personal.github} target="_blank" class="btn">GitHub ↗</a>
            </div>
            <p style="margin-top:var(--space-lg);font-size:var(--text-sm);color:var(--color-muted);">
              CGPA {personal.cgpa}/4.0 · Lahore, PK · Open to internships
            </p>
          </div>
          <div style="display:flex;justify-content:center;">
            <div style="width:640px;height:640px;margin-left:var(--space-xl);border-radius:50%;overflow:hidden;border-top:3px solid #FFFFFF;border-left:3px solid #FFFFFF;border-right:3px solid #FFFFFF;border-bottom:3px solid transparent;box-shadow:0 0 60px rgba(85,255,92,0.4), 0 16px 50px rgba(0,0,0,0.5);">
              <img src="/me.jpg" alt="Zain Ahmed Khan" style="border-radius:50%;width:100%;height:100%;object-fit:cover;" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}