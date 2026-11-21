import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer style="background:#000000;color:#ffffff;padding:var(--space-md) 0;border-top:var(--rule-bar) solid var(--color-rule);">
      <div class="container" style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--space-md);">
        <p style="font-size:var(--text-sm);color:#9ca3af;margin:0;">Zain Ahmed Khan · {personal.email}</p>
        <div style="display:flex;gap:var(--space-md);font-size:var(--text-sm);">
          <a href={personal.github} target="_blank" style="color:#ffffff;">GitHub</a>
          <a href={personal.linkedin} target="_blank" style="color:#ffffff;">LinkedIn</a>
          <a href={`mailto:${personal.email}`} style="color:#ffffff;">Email</a>
        </div>
        <p style="font-size:var(--text-xs);color:#6b7280;margin:0;width:100%;text-align:center;">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}