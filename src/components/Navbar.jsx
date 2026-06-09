import { personal, projects } from "../data/portfolio";

export default function Navbar() {
  return (
    <nav class="fixed top-0 w-full z-40 border-b border-border/60 backdrop-blur-md bg-[#1C2826]/80">
      <div class="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" class="flex items-center gap-2 text-cream font-bold text-sm tracking-widest">
          <span class="w-2 h-2 rounded-full bg-orange status-dot" />
          ZAIN_KHAN
        </a>
        <div class="hidden md:flex gap-8 text-xs tracking-widest text-muted">
          <a href="#projects" class="hover:text-orange transition-colors uppercase">Projects</a>
          <a href="#research" class="hover:text-orange transition-colors uppercase">Research</a>
          <a href="#stack" class="hover:text-orange transition-colors uppercase">Stack</a>
          <a href={personal.github} target="_blank" class="hover:text-orange transition-colors uppercase">GitHub</a>
        </div>
      </div>
    </nav>
  );
}
