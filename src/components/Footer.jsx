import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer class="border-t border-border py-10 bg-white/60">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-muted text-[10px] tracking-widest uppercase font-mono">
          Zain Ahmed Khan © {new Date().getFullYear()}
        </div>
        <div class="flex gap-8 text-[10px] tracking-widest text-muted uppercase font-mono">
          <a href={personal.github} target="_blank" class="hover:text-accent transition-colors">GitHub</a>
          <a href={personal.linkedin} target="_blank" class="hover:text-accent transition-colors">LinkedIn</a>
          <a href={`mailto:${personal.email}`} class="hover:text-accent transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
