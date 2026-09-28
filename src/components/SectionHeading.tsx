import Reveal from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  heading: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, heading, align = 'left' }: SectionHeadingProps) {
  return (
    <Reveal className={align === 'center' ? 'text-center' : ''}>
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-brass">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">{heading}</h2>
    </Reveal>
  )
}
