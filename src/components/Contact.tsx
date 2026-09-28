import type { FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import Reveal from './Reveal'
import { site } from '../data/content'

export default function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault()

  const inputClass =
    'w-full border border-charcoal/15 bg-white/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-stone/70 focus:border-brass'

  return (
    <section id="contact" className="border-t border-charcoal/10 bg-[#efe9e0]">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:py-32 lg:grid-cols-2 lg:px-10">
        <div>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-brass">Get in Touch</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Let's design something enduring.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-charcoal/70">
              Tell us about your project — a renovation, a new build, or a single room that needs
              attention. We respond within two business days.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-10 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brass" />
                <a href={`mailto:${site.email}`} className="hover:text-brass">{site.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brass" />
                <a href={`tel:${site.phone}`} className="hover:text-brass">{site.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-brass" />
                <span>{site.location}</span>
              </li>
            </ul>
            <div className="mt-8 flex gap-5">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-charcoal transition-colors hover:text-brass"
                  aria-label={s.label}
                >
                  <span className="text-sm font-medium uppercase tracking-[0.15em]">{s.label}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <input type="text" name="name" placeholder="Name" required className={inputClass} />
              <input type="email" name="email" placeholder="Email" required className={inputClass} />
            </div>
            <select name="projectType" defaultValue="" className={inputClass}>
              <option value="" disabled>
                Project type
              </option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Hospitality</option>
              <option>Styling & Furnishing</option>
              <option>Other</option>
            </select>
            <textarea
              name="message"
              placeholder="Tell us about your project…"
              rows={5}
              className={`${inputClass} resize-none`}
            />
            <button
              type="submit"
              className="w-full rounded-full bg-charcoal px-8 py-4 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-brass sm:w-auto"
            >
              Send Inquiry
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
