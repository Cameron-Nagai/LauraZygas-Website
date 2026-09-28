import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { testimonials } from '../data/content'

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10">
      <SectionHeading eyebrow="Kind Words" heading="What Clients Say" align="center" />
      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.12}>
            <figure className="flex h-full flex-col border border-charcoal/10 bg-white/50 p-8">
              <blockquote className="flex-1 font-serif text-xl italic leading-relaxed text-charcoal/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-sm font-medium">{t.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone">{t.project}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
