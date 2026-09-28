import { marqueeItems } from '../data/content'

export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems, ...marqueeItems]
  return (
    <div className="overflow-hidden border-y border-charcoal/10 bg-cream py-5" aria-hidden>
      <div className="animate-marquee flex w-max items-center whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className="px-6 font-serif text-2xl italic text-charcoal/80 md:text-3xl">
                  {item}
                </span>
                <span className="text-brass">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
