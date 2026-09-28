import { navLinks, site } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row lg:px-10">
        <a href="#top" className="font-serif text-2xl tracking-wide">
          {site.name}
        </a>
        <ul className="flex flex-wrap justify-center gap-6 text-sm text-cream/70">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-brass">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-cream/50">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
