import { useEffect, useRef } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import Reveal from './Reveal'
import { about, img } from '../data/content'

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(reduceMotion ? value : 0)

  useEffect(() => {
    if (!inView || reduceMotion) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, reduceMotion])

  return (
    <div ref={ref}>
      <p className="font-serif text-5xl text-brass">
        {display}
        {suffix}
      </p>
      <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-stone">{label}</p>
    </div>
  )
}

export default function About() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <motion.div
            initial={reduceMotion ? false : { clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <img src={img(0)} alt="Studio interior" className="aspect-[4/5] w-full object-cover" />
          </motion.div>
          <motion.img
            src={img(1)}
            alt="Interior detail"
            initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="absolute -bottom-10 -right-4 w-2/5 border-8 border-cream object-cover shadow-xl md:-right-10"
          />
        </div>

        <div>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-brass">{about.eyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">{about.heading}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="mt-8 border-l-2 border-brass pl-6 font-serif text-2xl italic text-charcoal/80">
              {about.quote}
            </blockquote>
          </Reveal>
          {about.body.map((p, i) => (
            <Reveal key={i} delay={0.15 + i * 0.05}>
              <p className="mt-6 leading-relaxed text-charcoal/70">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.25}>
            <div className="mt-12 grid grid-cols-3 gap-6">
              {about.stats.map((s) => (
                <Stat key={s.label} {...s} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
