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
          ? "bg-[#F4EFE6]/90 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" class="flex items-center gap-2 text-ink font-serif text-lg font-medium">
          Zain Ahmed Khan
        </a>

        <div class="hidden md:flex items-center gap-7 text-sm text-muted">
          {links.map((l) => (
            <button
              onClick={() => { setOpen(false); scrollTo(l.scroll); }}
              class="hover:text-ink transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div class="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            class="hidden md:inline-flex text-sm text-muted hover:text-ink transition-colors"
          >
            GitHub
          </a>
          <a href={`mailto:${personal.email}`} class="btn-primary !py-2 !px-4">
            Say hello
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
        <div class="md:hidden border-t border-border bg-[#F4EFE6]/95 backdrop-blur-md">
          <div class="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <button
                onClick={() => { setOpen(false); scrollTo(l.scroll); }}
                class="text-sm text-muted hover:text-ink transition-colors text-left"
              >
                {l.label}
              </button>
            ))}
            <a href={personal.github} target="_blank" class="text-sm text-muted hover:text-ink transition-colors" onClick={() => setOpen(false)}>
              GitHub
            </a>
            <a href={`mailto:${personal.email}`} class="btn-primary mt-2" onClick={() => setOpen(false)}>
              Say hello
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}