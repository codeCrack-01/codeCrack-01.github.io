import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer class="section" style="border-top:var(--rule-bar) solid var(--color-rule-2);">
      <div class="container">
        <p style="font-size:var(--text-sm);color:var(--color-muted);">Zain Ahmed Khan · {personal.email}</p>
        <div style="display:flex;gap:var(--space-md);margin-top:var(--space-md);font-size:var(--text-sm);">
          <a href={personal.github} target="_blank">GitHub</a>
          <a href={personal.linkedin} target="_blank">LinkedIn</a>
          <a href={`mailto:${personal.email}`}>Email</a>
        </div>
        <p style="font-size:var(--text-xs, var(--text-sm));color:var(--color-muted);margin-top:var(--space-lg);">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}