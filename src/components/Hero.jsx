import { personal } from "../data/portfolio";

export default function Hero() {
  return (
    <section>
      <h2 class="font-serif text-3xl md:text-4xl font-bold text-ink leading-tight">
        Building reliable backend systems and ML infrastructure.
      </h2>
      <p class="mt-4 text-ink leading-relaxed max-w-2xl">
        {personal.blurb}
      </p>
    </section>
  );
}