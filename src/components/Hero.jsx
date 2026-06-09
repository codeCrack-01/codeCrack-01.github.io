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
          output += `<span class="text-orange">${item.char}</span>`;
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
    setInterval(next, 3000);
  });

  return <span innerHTML={display()} />;
}

export default function Hero() {
  return (
    <section class="min-h-screen flex items-center relative pt-20 pb-16">
      <div class="absolute top-20 right-0 w-96 h-96 bg-orange/5 rounded-full blur-[120px] -z-10" />

      <div class="w-full max-w-6xl mx-auto px-6">
        <div class="grid lg:grid-cols-5 gap-8 items-center">
          {/* ASCII Art */}
          <div class="lg:col-span-2 hidden lg:block">
            <pre class="text-orange text-[0.4rem] leading-tight font-mono select-none opacity-80">
              {personal.ascii.join("\n")}
            </pre>
          </div>

          {/* Neofetch Card */}
          <div class="lg:col-span-3 neofetch-card">
            <div class="neofetch-header">
              <span class="neofetch-dot bg-red-400" />
              <span class="neofetch-dot bg-yellow-400" />
              <span class="neofetch-dot bg-green-400" />
              <span class="text-muted text-xs font-mono ml-2">zain@portfolio — bash</span>
            </div>
            <div class="p-6 md:p-8 font-mono text-sm space-y-1.5">
              <div class="text-muted">user@portfolio:~$ <span class="text-cream">fastfetch</span></div>
              <div class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-xs md:text-sm mt-3">
                <span class="text-orange">OS</span>
                <span class="text-cream">Fedora Linux 40 x86_64</span>
                <span class="text-orange">Host</span>
                <span class="text-cream">{personal.university}</span>
                <span class="text-orange">Kernel</span>
                <span class="text-cream">6.8.x Linux</span>
                <span class="text-orange">Uptime</span>
                <span class="text-cream">{personal.batch}</span>
                <span class="text-orange">Shell</span>
                <span class="text-cream">bash 5.2</span>
                <span class="text-orange">GPA</span>
                <span class="text-cream">{personal.cgpa}/4.0</span>
                <span class="text-orange">Email</span>
                <span class="text-cream">{personal.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline + Scramble */}
        <div class="mt-12 max-w-2xl">
          <div class="flex items-center gap-3 text-xs tracking-[0.2em] text-orange font-mono mb-4">
            <span class="h-px w-8 bg-orange" />
            BACKEND ENGINEER & CS UNDERGRAD
          </div>
          <h1 class="font-sans text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-cream mb-6">
            ZAIN AHMED<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange to-cream">
              Khan
            </span>
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
            <a href="#projects" class="group relative px-6 py-3 bg-cream text-bg font-bold text-xs tracking-widest overflow-hidden rounded-sm uppercase">
              <span class="relative z-10 group-hover:text-orange transition-colors">View Work</span>
              <div class="absolute inset-0 bg-cream/80 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>
            <a href={`mailto:${personal.email}`} class="px-6 py-3 border border-border text-xs tracking-widest text-muted hover:border-orange hover:text-orange transition-colors rounded-sm uppercase">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        <div class="flex gap-8 pt-12">
          <div>
            <div class="text-2xl font-sans font-bold text-cream">{personal.cgpa}<span class="text-orange text-base">/4</span></div>
            <div class="text-[10px] text-muted tracking-widest mt-1 uppercase font-mono">CGPA · {personal.university}</div>
          </div>
          <div class="w-px bg-border" />
          <div>
            <div class="text-2xl font-sans font-bold text-cream">5<span class="text-orange text-base">yr</span></div>
            <div class="text-[10px] text-muted tracking-widest mt-1 uppercase font-mono">Programming</div>
          </div>
          <div class="w-px bg-border" />
          <div>
            <div class="text-2xl font-sans font-bold text-cream">60<span class="text-orange text-base">+</span></div>
            <div class="text-[10px] text-muted tracking-widest mt-1 uppercase font-mono">Repos</div>
          </div>
        </div>
      </div>
    </section>
  );
}
