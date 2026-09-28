import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { img, site } from '../data/content'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12])

  return (
    <section ref={ref} id="top" className="relative flex h-svh items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={reduceMotion ? undefined : { y, scale }}
      >
        <img
          src={img(0)}
          alt="Interior designed by Laura Zygas"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 px-6 text-center text-cream"
      >
        <motion.p variants={item} className="text-xs font-medium uppercase tracking-[0.4em] text-cream/80">
          Interior Design Studio
        </motion.p>
        <motion.h1 variants={item} className="mt-6 font-serif text-6xl leading-none md:text-8xl">
          {site.name}
        </motion.h1>
        <motion.p variants={item} className="mx-auto mt-6 max-w-xl text-lg text-cream/85 md:text-xl">
          {site.tagline}
        </motion.p>
        <motion.div variants={item} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#work"
            className="rounded-full bg-brass px-8 py-3 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-brass/90"
          >
            View Selected Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-cream/60 px-8 py-3 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-cream/10"
          >
            Book a Consultation
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#work"
        aria-label="Scroll down"
        className="absolute bottom-8 z-10 text-cream/80"
        animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/60 p-1.5">
          <div className="h-2 w-1 rounded-full bg-cream/80" />
        </div>
      </motion.a>
    </section>
  )
}
