import { personal } from "../data/portfolio";

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };
  return (
    <nav style="position:sticky;top:0;z-index:300;background:rgba(10,13,20,0.8);backdrop-filter:blur(12px);border-bottom:1px solid var(--color-rule);">
      <div class="container" style="display:flex;align-items:center;justify-content:space-between;height:64px;">
        <a href="#" style="font-family:var(--font-display);font-weight:600;font-size:var(--text-md);text-decoration:none;color:var(--color-ink);">Zain Ahmed Khan</a>
        <div style="display:flex;gap:var(--space-lg);font-size:var(--text-sm);">
          <button onClick={() => scrollTo("work")} style="background:none;border:none;cursor:pointer;color:var(--color-muted);font:inherit;">Work</button>
          <button onClick={() => scrollTo("research")} style="background:none;border:none;cursor:pointer;color:var(--color-muted);font:inherit;">Research</button>
          <button onClick={() => scrollTo("experience")} style="background:none;border:none;cursor:pointer;color:var(--color-muted);font:inherit;">Experience</button>
          <a href={`mailto:${personal.email}`} style="color:var(--color-accent);text-decoration:none;">Contact</a>
        </div>
      </div>
    </nav>
  );
}