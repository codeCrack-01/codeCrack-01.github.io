import { personal } from "../data/portfolio";

export default function Sidebar() {
  return (
    <aside class="md:sticky md:top-8 md:self-start">
      <div class="card p-6">
        <div class="flex md:flex-col items-center md:items-start gap-4">
          <img
            src="/me.jpg"
            alt="Zain Ahmed Khan"
            class="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover border-2 border-border bg-raised"
            onError={(e) => { e.currentTarget.style.display = "none"; const fb = e.currentTarget.nextElementSibling; if (fb) fb.style.display = "flex"; }}
          />
          <div class="w-20 h-20 md:w-28 md:h-28 rounded-full bg-raised border-2 border-border items-center justify-center font-serif text-2xl font-semibold text-accent hidden">
            ZK
          </div>
          <div>
            <h1 class="font-serif text-xl md:text-2xl font-bold text-ink">Zain Ahmed Khan</h1>
            <p class="text-sm text-muted mt-1">CS sophomore · LUMS</p>
            <p class="text-xs text-muted mt-1">Lahore, PK</p>
          </div>
        </div>

        <p class="text-sm text-ink mt-5 leading-relaxed">
          Backend systems, ML infrastructure, and research under Dr. Abdul Ali Bangash.
        </p>

        <div class="mt-5 space-y-2 text-sm">
          <a href={`mailto:${personal.email}`} class="block text-accent hover:text-accent-dim">Email</a>
          <a href={personal.github} target="_blank" class="block text-accent hover:text-accent-dim">GitHub</a>
          <a href={personal.linkedin} target="_blank" class="block text-accent hover:text-accent-dim">LinkedIn</a>
          <a href="https://portal.lrslums.com" target="_blank" class="block text-accent hover:text-accent-dim">LRS Portal</a>
        </div>

        <div class="mt-5 pt-5 border-t border-border text-xs text-muted space-y-1">
          <p>CGPA {personal.cgpa}/4.0</p>
          <p>Open to internships & research roles</p>
        </div>
      </div>

      <nav class="hidden md:block mt-4 card p-4">
        <ul class="space-y-2 text-sm">
          {["research","projects","experience","stack"].map((id) => (
            <li>
              <button
                onClick={() => {
                  const el = document.getElementById(id);
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 24, behavior: "smooth" });
                }}
                class="text-muted hover:text-ink transition-colors capitalize"
              >
                {id}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}