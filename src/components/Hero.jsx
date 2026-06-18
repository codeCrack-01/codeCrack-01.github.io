import { createSignal, onMount } from "solid-js";
import { personal } from "../data/portfolio";

function TextScramble(props) {
  const [display, setDisplay] = createSignal("");
  let frameId;
  let frame = 0;
  let currentText = "";

  const chars = "!<>-_\\/[]{}—=+*^?#________";

  const scramble = (newText) => {
    cancelAnimationFrame(frameId);
    frame = 0;
    const from = currentText;
    const length = Math.max(from.length, newText.length);
    const queue = [];
    for (let i = 0; i < length; i++) {
      const f = from[i] || "";
      const t = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.push({ from: f, to: t, start, end, char: "" });
    }

    const update = () => {
      let output = "";
      let complete = 0;
      for (const item of queue) {
        if (frame >= item.end) {
          complete++;
          output += item.to;
        } else if (frame >= item.start) {
          if (!item.char || Math.random() < 0.28) {
            item.char = chars[Math.floor(Math.random() * chars.length)];
          }
          output += `<span class="text-accent">${item.char}</span>`;
        } else {
          output += item.from;
        }
      }
      setDisplay(output);
      if (complete === queue.length) {
        currentText = newText;
      } else {
        frame++;
        frameId = requestAnimationFrame(update);
      }
    };
    update();
  };

  onMount(() => {
    let counter = 0;
    const next = () => {
      scramble(personal.taglines[counter]);
      counter = (counter + 1) % personal.taglines.length;
    };
    next();
    setInterval(next, 3500);
  });

  return <span innerHTML={display()} />;
}

export default function Hero() {
  return (
    <section class="min-h-screen flex items-center relative pt-24 pb-20">
      <div class="w-full max-w-6xl mx-auto px-6">
        <div class="flex items-center gap-3 text-xs tracking-[0.2em] text-accent font-mono mb-5">
          <span class="h-px w-8 bg-accent" />
          BACKEND ENGINEER & CS UNDERGRAD
        </div>

        <h1 class="font-sans text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-ink mb-6">
          ZAIN AHMED<br />
          <span class="text-accent">Khan</span>
        </h1>

        <div class="h-8 md:h-10 flex items-center mb-6">
          <p class="text-muted text-base md:text-lg font-mono">
            <TextScramble />
            <span class="cursor-blink" />
          </p>
        </div>

        <p class="text-muted max-w-xl leading-relaxed border-l-2 border-border pl-4 text-sm md:text-base">
          {personal.blurb}
        </p>

        <div class="flex gap-4 pt-8">
          <a
            href="#projects"
            class="px-6 py-3 bg-accent text-white font-bold text-xs tracking-widest rounded-lg uppercase hover:opacity-90 transition-opacity"
          >
            View Work
          </a>
          <a
            href={`mailto:${personal.email}`}
            class="px-6 py-3 border border-border text-xs tracking-widest text-muted hover:border-accent hover:text-accent transition-colors rounded-lg uppercase"
          >
            Get In Touch
          </a>
        </div>

        <div class="flex gap-8 pt-14">
          <div>
            <div class="text-2xl font-sans font-bold text-ink">
              {personal.cgpa}
              <span class="text-accent text-base">/4</span>
            </div>
            <div class="text-[10px] text-muted tracking-widest mt-1 uppercase font-mono">
              CGPA · {personal.university}
            </div>
          </div>
          <div class="w-px bg-border" />
          <div>
            <div class="text-2xl font-sans font-bold text-ink">
              5<span class="text-accent text-base">yr</span>
            </div>
            <div class="text-[10px] text-muted tracking-widest mt-1 uppercase font-mono">
              Programming
            </div>
          </div>
          <div class="w-px bg-border" />
          <div>
            <div class="text-2xl font-sans font-bold text-ink">
              60<span class="text-accent text-base">+</span>
            </div>
            <div class="text-[10px] text-muted tracking-widest mt-1 uppercase font-mono">
              Repos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
