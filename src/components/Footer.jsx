import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer class="border-t border-border bg-[#EDE6DA]/60 relative">
      <div class="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div class="max-w-2xl">
          <p class="section-label mb-6">Let's talk</p>
          <h2 class="font-serif text-3xl md:text-5xl font-medium tracking-tight text-ink leading-tight">
            Need a backend engineer who actually ships?
          </h2>
          <p class="text-muted max-w-xl mt-5 text-base leading-relaxed">
            I'm open to internships, freelance contracts, and interesting side
            projects. If you're building something and want help, send a note.
          </p>
          <div class="flex flex-wrap gap-3 pt-6">
            <a href={`mailto:${personal.email}`} class="btn-primary">
              Say hello
            </a>
            <a href={personal.linkedin} target="_blank" class="btn-ghost">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-border py-8">
        <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="text-muted text-xs font-mono">
            Zain Ahmed Khan © {new Date().getFullYear()}
          </div>
          <div class="flex gap-6 text-xs font-mono text-muted">
            <a href={personal.github} target="_blank" class="hover:text-ink transition-colors">GitHub</a>
            <a href={personal.linkedin} target="_blank" class="hover:text-ink transition-colors">LinkedIn</a>
            <a href={`mailto:${personal.email}`} class="hover:text-ink transition-colors">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}