import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export function staticPrerender() {
  const dataPath = resolve(__dirname, "../src/data/portfolio.js");

  return {
    name: "static-prerender",
    enforce: "post",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        const src = readFileSync(dataPath, "utf-8");

        const name = field(src, "name");
        const blurb = field(src, "blurb");
        const tagline = firstInArray(src, "taglines");
        const projects = extractProjects(src);

        const projectCards = projects
          .slice(0, 6)
          .map(
            (p) => `<div style="border:1px solid #e0e0e0;border-radius:8px;padding:16px;margin-bottom:12px">
  <h3 style="margin:0 0 4px;font-size:16px">${esc(p.title)}</h3>
  <p style="margin:0 0 8px;font-size:12px;color:#666">${esc(p.subtitle)}</p>
  <p style="margin:0 0 8px;font-size:13px;color:#444;line-height:1.5">${esc(p.desc)}</p>
  <div>${p.tags.map((t) => `<span style="display:inline-block;padding:2px 8px;margin:2px;font-size:11px;border:1px solid #ddd;border-radius:4px;color:#555">${esc(t)}</span>`).join("")}</div>
</div>`,
          )
          .join("\n");

        const staticHtml = `<div style="visibility:hidden;position:absolute;overflow:hidden;clip:rect(0,0,0,0);height:1px;width:1px">
  <nav><span>ZAIN_KHAN</span><div>Projects Research Stack GitHub</div></nav>
  <main>
    <section>
      <div>BACKEND ENGINEER & CS UNDERGRAD</div>
      <h1>${esc(name)}</h1>
      <h2>${esc(tagline)}</h2>
      <p>${esc(blurb)}</p>
    </section>
    <section id="projects">
      <h2>Selected Work (${projects.length} projects)</h2>
      ${projectCards}
    </section>
  </main>
  <footer>${esc(name)}</footer>
</div>`;

        return html.replace(
          '<div id="app"></div>',
          `<div id="app">${staticHtml}</div>`,
        );
      },
    },
  };
}

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function field(src, key) {
  const m = src.match(new RegExp(`\\b${key}:\\s*"((?:[^"\\\\]|\\\\.)*)"`));
  return m ? m[1] : "";
}

function firstInArray(src, key) {
  const idx = src.indexOf(`${key}:`);
  if (idx === -1) return "";
  const rest = src.slice(idx);
  const m = rest.match(/["']((?:[^"']|\\['"])*)["']/);
  return m ? m[1] : "";
}

function extractProjects(src) {
  const projects = [];
  const start = src.indexOf("export const projects = [");
  if (start === -1) return [];
  const body = src.slice(start);
  const projectRe = /\{\s*\n\s*title:\s*"((?:[^"\\]|\\.)*)"/g;
  const subtitleRe = /subtitle:\s*"((?:[^"\\]|\\.)*)"/;
  const descRe = /desc:\s*"((?:[^"\\]|\\.)*)"/;
  const tagsRe = /tags:\s*\[([\s\S]*?)\]/;

  let m;
  while ((m = projectRe.exec(body)) !== null) {
    const title = m[1];
    const blockStart = m.index;
    const blockEnd = body.indexOf("},", blockStart);
    const block = blockStart !== -1 && blockEnd !== -1
      ? body.slice(blockStart, blockEnd + 2)
      : "";

    const subM = block.match(subtitleRe);
    const descM = block.match(descRe);
    const tagsM = block.match(tagsRe);

    const subtitle = subM ? subM[1] : "";
    const desc = descM ? descM[1] : "";
    const tags = tagsM
      ? [...tagsM[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((t) => t[1])
      : [];

    projects.push({ title, subtitle, desc, tags });
  }
  return projects;
}
