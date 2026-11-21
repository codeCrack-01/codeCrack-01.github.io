import { faq } from "../data/portfolio";

export default function Faq() {
  return (
    <section id="faq" class="py-12 scroll-mt-16">
      <h2 class="section-title">Questions</h2>
      <div class="grid md:grid-cols-2 gap-5">
        {faq.map((f) => (
          <div class="card p-6">
            <h3 class="font-medium text-ink mb-2">{f.question}</h3>
            <p class="text-sm text-muted leading-relaxed">{f.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}