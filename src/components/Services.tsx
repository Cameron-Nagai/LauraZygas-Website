import type { ComponentType } from 'react'
import { Building2, Lamp, PencilRuler, Sofa } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { services } from '../data/content'

const icons: Record<string, ComponentType<{ size?: number | string; className?: string }>> = {
  sofa: Sofa,
  building: Building2,
  'pencil-ruler': PencilRuler,
  lamp: Lamp,
}

export default function Services() {
  return (
    <section id="services" className="bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10">
        <SectionHeading eyebrow="What We Do" heading="Services" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Sofa
            return (
              <Reveal key={service.title} delay={i * 0.1}>
                <div className="group h-full border border-cream/10 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-brass/60 hover:bg-cream/5">
                  <Icon size={32} className="text-brass" />
                  <h3 className="mt-6 font-serif text-2xl">{service.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-cream/70">{service.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
