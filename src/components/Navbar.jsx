import { createSignal, onMount } from "solid-js";
import { personal } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = createSignal(false);
  const [scrolled, setScrolled] = createSignal(false);

  onMount(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const links = [
    { label: "Research", scroll: "research" },
    { label: "Projects", scroll: "projects" },
    { label: "Experience", scroll: "experience" },
    { label: "Skills", scroll: "stack" },
  ];

  return (
    <nav class={`fixed top-0 w-full z-40 bg-white/90 backdrop-blur border-b border-border transition-shadow ${scrolled() ? "shadow-sm" : ""}`}>
      <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" class="font-serif text-lg font-semibold text-ink">
          Zain Ahmed Khan
        </a>
        <div class="hidden md:flex items-center gap-7 text-sm text-muted">
          {links.map((l) => (
            <button onClick={() => scrollTo(l.scroll)} class="hover:text-ink transition-colors">
              {l.label}
            </button>
          ))}
          <a href={personal.github} target="_blank" class="hover:text-ink transition-colors">GitHub</a>
          <a href={`mailto:${personal.email}`} class="btn-primary !py-2 !px-4">Contact</a>
        </div>
        <button onClick={() => setOpen(!open())} class="md:hidden p-2" aria-label="Toggle menu">
          <span class="block w-5 h-px bg-ink mb-1.5" />
          <span class="block w-5 h-px bg-ink mb-1.5" />
          <span class="block w-5 h-px bg-ink" />
        </button>
      </div>
      {open() && (
        <div class="md:hidden border-t border-border bg-white">
          <div class="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <button onClick={() => { setOpen(false); scrollTo(l.scroll); }} class="text-sm text-muted hover:text-ink text-left">
                {l.label}
              </button>
            ))}
            <a href={personal.github} target="_blank" class="text-sm text-muted hover:text-ink" onClick={() => setOpen(false)}>GitHub</a>
            <a href={`mailto:${personal.email}`} class="btn-primary mt-2" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}