import { createSignal, onMount } from "solid-js";
import { personal } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = createSignal(false);
  const [scrolled, setScrolled] = createSignal(false);

  onMount(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
    { label: "Work", scroll: "projects" },
    { label: "Research", scroll: "research" },
    { label: "Experience", scroll: "experience" },
    { label: "Stack", scroll: "stack" },
  ];

  return (
    <nav
      class={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled()
          ? "bg-[#0b0e14]/85 backdrop-blur-xl border-b border-border shadow-lg shadow-black/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          class="flex items-center gap-2.5 text-ink font-bold text-sm tracking-widest"
        >
          <span class="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-accent-cyan to-accent shadow-glow" />
          ZAIN<span class="text-muted">_</span>KHAN
        </a>

        <div class="hidden md:flex items-center gap-8 text-xs tracking-widest text-muted">
          {links.map((l) => (
            <button
              onClick={() => { setOpen(false); scrollTo(l.scroll); }}
              class="uppercase hover:text-accent-dim transition-colors relative after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-grad-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div class="flex items-center gap-4">
          <span class="hidden lg:inline-flex items-center gap-2 text-[10px] tracking-widest uppercase font-mono text-muted">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            Open to work
          </span>
          <a
            href={`mailto:${personal.email}`}
            class="hidden md:inline-flex btn-primary !px-5 !py-2.5"
          >
            Hire Me
          </a>
          <button
            onClick={() => setOpen(!open())}
            class="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span class={`block w-5 h-px bg-ink transition-transform ${open() ? "rotate-45 translate-y-[3.5px]" : ""}`} />
            <span class={`block w-5 h-px bg-ink transition-opacity ${open() ? "opacity-0" : ""}`} />
            <span class={`block w-5 h-px bg-ink transition-transform ${open() ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
          </button>
        </div>
      </div>

      {open() && (
        <div class="md:hidden border-t border-border bg-[#0e1220]/95 backdrop-blur-xl">
          <div class="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <button
                onClick={() => { setOpen(false); scrollTo(l.scroll); }}
                class="text-sm text-muted hover:text-accent-dim transition-colors uppercase tracking-widest text-left"
              >
                {l.label}
              </button>
            ))}
            <a
              href={personal.github}
              target="_blank"
              class="text-sm text-muted hover:text-accent-dim transition-colors uppercase tracking-widest"
              onClick={() => setOpen(false)}
            >
              GitHub
            </a>
            <a
              href={`mailto:${personal.email}`}
              class="btn-primary mt-2"
              onClick={() => setOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
