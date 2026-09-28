import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { bannerQuote, img } from '../data/content'

export default function Banner() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])

  return (
    <section ref={ref} className="relative flex h-[70vh] items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 -top-[20%] h-[140%]"
        style={reduceMotion ? undefined : { y }}
      >
        <img src={img(1)} alt="Featured project" className="h-full w-full object-cover" loading="lazy" />
      </motion.div>
      <div className="absolute inset-0 bg-charcoal/55" />
      <div className="relative z-10 max-w-3xl px-6 text-center text-cream">
        <p className="font-serif text-3xl italic leading-snug md:text-4xl">{bannerQuote.text}</p>
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.3em] text-cream/80">
          {bannerQuote.attribution}
        </p>
      </div>
    </section>
  )
}
