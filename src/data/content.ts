export const IMAGES = [
  'https://i.imgur.com/1at4hyJ.jpeg',
  'https://i.imgur.com/Jw3ASrU.jpeg',
]

export const img = (i: number) => IMAGES[i % IMAGES.length]

export const site = {
  name: 'Laura Zygas',
  tagline: 'Interiors that hold a quiet, lasting elegance.',
  description:
    'Laura Zygas is an interior design studio crafting warm, considered spaces for residential, commercial, and hospitality clients.',
  email: 'hello@laurazygas.studio',
  phone: '+1 (555) 012-3456',
  location: 'New York, NY',
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'Pinterest', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],
}

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export const marqueeItems = [
  'Residential',
  'Commercial',
  'Hospitality',
  'Styling',
  'Space Planning',
  'Renovation',
]

export const about = {
  eyebrow: 'About the Studio',
  heading: 'A studio shaped by light, material, and restraint.',
  body: [
    'Founded by Laura Zygas, the studio approaches every interior as a dialogue between architecture and the people who inhabit it. We favour natural materials, honest joinery, and a palette drawn from the surrounding landscape.',
    'From full-home renovations to single-room styling, our work is guided by a belief that the best spaces feel inevitable — calm, cohesive, and quietly personal.',
  ],
  quote:
    '“Design is not about filling a room — it is about editing until only what matters remains.”',
  stats: [
    { value: 12, suffix: '+', label: 'Years of Practice' },
    { value: 140, suffix: '+', label: 'Projects Completed' },
    { value: 18, suffix: '', label: 'Design Awards' },
  ],
}

export interface Project {
  title: string
  category: string
  year: string
  image: string
  span?: boolean
}

export const projects: Project[] = [
  { title: 'Hudson Brownstone', category: 'Residential', year: '2024', image: img(0), span: true },
  { title: 'Marina Loft', category: 'Residential', year: '2024', image: img(1) },
  { title: 'Atelier Café', category: 'Hospitality', year: '2023', image: img(0) },
  { title: 'The Fairmont Suite', category: 'Commercial', year: '2023', image: img(1) },
  { title: 'Willow House', category: 'Residential', year: '2022', image: img(0) },
  { title: 'Gallery Nine', category: 'Commercial', year: '2022', image: img(1) },
]

export const services = [
  {
    icon: 'sofa',
    title: 'Residential Design',
    description:
      'Full-service interior design for homes — from concept and spatial planning to the final styled shelf.',
  },
  {
    icon: 'building',
    title: 'Commercial Design',
    description:
      'Workplaces, retail, and hospitality interiors that express a brand while serving the people inside them.',
  },
  {
    icon: 'pencil-ruler',
    title: 'Space Planning',
    description:
      'Thoughtful layouts that balance flow, function, and light — the quiet backbone of every good interior.',
  },
  {
    icon: 'lamp',
    title: 'Styling & Furnishing',
    description:
      'Furniture, art, and object curation to give finished spaces their final layer of warmth and character.',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We begin with conversation and site study — understanding how you live, work, and what the space should feel like.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Concepts become drawings, material palettes, and furniture plans, refined together through collaborative reviews.',
  },
  {
    number: '03',
    title: 'Develop',
    description:
      'We coordinate trades, procurement, and fabrication, keeping every detail aligned with the design intent.',
  },
  {
    number: '04',
    title: 'Deliver',
    description:
      'Installation and styling bring the project to life — finished, photographed, and ready to be lived in.',
  },
]

export const bannerQuote = {
  text: '“Laura transformed our house into a home we never want to leave. Every corner feels intentional.”',
  attribution: '— The Hartley Family, Hudson Brownstone',
}

export const testimonials = [
  {
    quote:
      '“Working with the studio was effortless. They listened first, then designed — and the result exceeded everything we imagined.”',
    name: 'Elena M.',
    project: 'Marina Loft',
  },
  {
    quote:
      '“A rare combination of creativity and rigor. Our café opened on time, on budget, and it looks extraordinary.”',
    name: 'Daniel K.',
    project: 'Atelier Café',
  },
  {
    quote:
      '“The attention to material and light is remarkable. Guests comment on the design every single day.”',
    name: 'Sofia R.',
    project: 'The Fairmont Suite',
  },
]
