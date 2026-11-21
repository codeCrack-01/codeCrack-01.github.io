import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer class="border-t border-border bg-white mt-12">
      <div class="max-w-5xl mx-auto px-6 py-12">
        <h2 class="font-serif text-2xl font-semibold text-ink mb-3">Let's work together</h2>
        <p class="text-muted max-w-xl text-sm leading-relaxed">
          Open to internships, research roles, and freelance backend work. If you're building something, I'd like to hear about it.
        </p>
        <div class="flex flex-wrap gap-3 mt-6">
          <a href={`mailto:${personal.email}`} class="btn-primary">Email me</a>
          <a href={personal.linkedin} target="_blank" class="btn-ghost">LinkedIn</a>
        </div>
        <div class="flex gap-4 mt-8 text-xs text-muted">
          <a href={personal.github} target="_blank" class="hover:text-ink">GitHub</a>
          <a href={personal.linkedin} target="_blank" class="hover:text-ink">LinkedIn</a>
          <a href={`mailto:${personal.email}`} class="hover:text-ink">Email</a>
        </div>
        <p class="text-xs text-muted mt-6">© {new Date().getFullYear()} Zain Ahmed Khan</p>
      </div>
    </footer>
  );
}