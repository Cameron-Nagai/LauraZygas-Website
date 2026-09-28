import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { processSteps } from '../data/content'

export default function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 60%'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10">
      <SectionHeading eyebrow="How We Work" heading="The Process" align="center" />

      <div ref={ref} className="relative mt-20">
        <div className="absolute left-0 top-6 hidden h-px w-full bg-charcoal/15 md:block" />
        <motion.div
          className="absolute left-0 top-6 hidden h-px w-full origin-left bg-brass md:block"
          style={reduceMotion ? { scaleX: 1 } : { scaleX: lineScale }}
        />

        <div className="grid gap-12 md:grid-cols-4 md:gap-8">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.12}>
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brass bg-cream font-serif text-lg text-brass">
                  {step.number}
                </div>
                <h3 className="mt-6 font-serif text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
