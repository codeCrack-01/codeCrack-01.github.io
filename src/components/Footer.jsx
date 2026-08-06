import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer class="border-t border-border bg-[#0d1019]/80 relative overflow-hidden">
      <div class="absolute inset-x-0 top-0 h-px bg-grad-primary opacity-40" />

      <div class="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div class="text-center space-y-6">
          <div class="section-label justify-center !after:max-w-0 !after:flex-none w-fit mx-auto">
            Let's Build Together
          </div>
          <h2 class="font-sans text-3xl md:text-5xl font-bold tracking-tight text-ink">
            Need a backend engineer<br />
            who ships <span class="grad-text">reliable systems</span>?
          </h2>
          <p class="text-muted max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Currently open to internships, freelance contracts, and full-time backend
            engineering roles. Let's talk about what you're building.
          </p>
          <div class="flex flex-wrap justify-center gap-4 pt-2">
            <a href={`mailto:${personal.email}`} class="btn-primary">
              Say Hello
              <span class="text-base leading-none">→</span>
            </a>
            <a href={personal.linkedin} target="_blank" class="btn-ghost">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-border py-8">
        <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-5">
          <div class="text-muted text-[10px] tracking-widest uppercase font-mono">
            Zain Ahmed Khan © {new Date().getFullYear()}
          </div>
          <div class="flex gap-8 text-[10px] tracking-widest text-muted uppercase font-mono">
            <a href={personal.github} target="_blank" class="hover:text-accent-dim transition-colors">GitHub</a>
            <a href={personal.linkedin} target="_blank" class="hover:text-accent-dim transition-colors">LinkedIn</a>
            <a href={`mailto:${personal.email}`} class="hover:text-accent-dim transition-colors">Email</a>
            <span class="text-border">·</span>
            <span class="text-muted/70">SolidJS + Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
