import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { projects } from '../data/content'

export default function Work() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow="Portfolio" heading="Selected Work" />
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-charcoal transition-colors hover:text-brass"
        >
          View all projects
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href="#work"
            onClick={(e) => e.preventDefault()}
            initial={reduceMotion ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative block overflow-hidden ${
              project.span ? 'sm:col-span-2 lg:row-span-2' : ''
            }`}
          >
            <div className={`overflow-hidden ${project.span ? 'aspect-[16/10] lg:aspect-auto lg:h-full' : 'aspect-[4/5]'}`}>
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-cream/80">
                {project.category} · {project.year}
              </p>
              <h3 className="mt-2 font-serif text-2xl text-cream">{project.title}</h3>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
