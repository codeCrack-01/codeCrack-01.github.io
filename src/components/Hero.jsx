import { personal, now } from "../data/portfolio";

export default function Hero() {
  return (
    <section class="pt-32 pb-20">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div>
            <p class="text-sm font-mono text-muted mb-6">
              Hi, I'm Zain — a CS sophomore at LUMS.
            </p>

            <h1 class="font-serif text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.05] text-ink mb-8">
              I build backend systems,
              <br />
              <span class="italic text-accent">ship things,</span> and
              <br />
              learn by doing.
            </h1>

            <p class="text-muted max-w-xl leading-relaxed text-base md:text-lg mb-8">
              {personal.blurb}
            </p>

            <div class="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
                }}
                class="btn-primary"
              >
                See my work
              </button>
              <a href={`mailto:${personal.email}`} class="btn-ghost">
                Get in touch
              </a>
            </div>

            <div class="mt-12 pt-8 border-t border-border">
              <p class="text-xs font-mono text-muted uppercase tracking-widest mb-4">
                Currently
              </p>
              <ul class="space-y-3">
                {now.map((n) => (
                  <li class="flex items-baseline gap-3 text-sm">
                    <span class="text-accent font-mono">→</span>
                    <span class="text-ink font-medium">{n.title}</span>
                    <span class="text-muted">— {n.desc}</span>
                    {n.url && (
                      <a href={n.url} target="_blank" class="text-accent hover:text-accent-dim text-xs font-mono">
                        link ↗
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div class="lg:pt-8">
            <div class="card p-8 flex flex-col items-center text-center">
              <div class="w-28 h-28 rounded-full bg-raised border border-border flex items-center justify-center mb-5">
                <span class="font-serif text-4xl text-accent font-medium">ZK</span>
              </div>
              <p class="font-serif text-xl text-ink font-medium">Zain Ahmed Khan</p>
              <p class="text-sm text-muted mt-1">CS sophomore · LUMS</p>
              <p class="text-xs font-mono text-muted mt-4">
                CGPA {personal.cgpa}/4.0 · Lahore, PK
              </p>
              <div class="flex gap-4 mt-6 pt-6 border-t border-border w-full justify-center text-sm">
                <a href={personal.github} target="_blank" class="text-muted hover:text-ink transition-colors">
                  GitHub
                </a>
                <a href={personal.linkedin} target="_blank" class="text-muted hover:text-ink transition-colors">
                  LinkedIn
                </a>
                <a href={`mailto:${personal.email}`} class="text-muted hover:text-ink transition-colors">
                  Email
                </a>
              </div>
            </div>

            <div class="mt-6 card p-6">
              <p class="text-xs font-mono text-muted uppercase tracking-widest mb-3">
                A small win
              </p>
              <p class="text-sm text-ink leading-relaxed">
                1st place overall at the NASA Space Apps Competition (local region, UMT Lahore). Still one of my favorite weekends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}