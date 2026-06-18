import { createSignal } from "solid-js";
import { personal } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = createSignal(false);

  const links = [
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Stack", href: "#stack" },
    { label: "GitHub", href: personal.github, external: true },
  ];

  return (
    <nav class="fixed top-0 w-full z-40 border-b border-border bg-white/90 backdrop-blur-md">
      <div class="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" class="flex items-center gap-2 text-ink font-bold text-sm tracking-widest">
          <span class="w-2 h-2 rounded-full bg-accent" />
          ZAIN_KHAN
        </a>

        <div class="hidden md:flex gap-8 text-xs tracking-widest text-muted">
          {links.map((l) => (
            <a
              href={l.href}
              target={l.external ? "_blank" : undefined}
              class="hover:text-accent transition-colors uppercase"
            >
              {l.label}
            </a>
          ))}
        </div>

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

      {open() && (
        <div class="md:hidden border-t border-border bg-white">
          <div class="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                href={l.href}
                target={l.external ? "_blank" : undefined}
                class="text-sm text-muted hover:text-accent transition-colors uppercase tracking-widest"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
