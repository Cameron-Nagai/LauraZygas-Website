# Laura Zygas — Interior Design Portfolio

A modern portfolio template built with Vite + React + TypeScript, Tailwind CSS, Framer Motion, and lucide-react.

## Run

```bash
npm install
npm run dev      # dev server (usually http://localhost:5173)
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Editing content

All copy, projects, services, process steps, testimonials, and social links live in
`src/data/content.ts`. The two placeholder images are defined at the top as `IMAGES` —
replace those URLs (or add more) and every section updates automatically; `img(i)` cycles
through the array.

## Structure

Each section is a component in `src/components/`, composed in `src/App.tsx`:

| File             | Section                                             |
| ---------------- | --------------------------------------------------- |
| `Navbar.tsx`     | Fixed nav with scroll blur + mobile menu            |
| `Hero.tsx`       | Full-viewport parallax hero                         |
| `Marquee.tsx`    | Infinite scrolling text strip                       |
| `About.tsx`      | Image reveal, pull quote, count-up stats            |
| `Work.tsx`       | Selected-work grid with hover captions              |
| `Services.tsx`   | Four service cards                                  |
| `Process.tsx`    | 4-step timeline with scroll-drawn line              |
| `Banner.tsx`     | Parallax quote banner                               |
| `Testimonials.tsx` | Client quotes                                     |
| `Contact.tsx`    | Contact info + (non-functional) inquiry form        |
| `Footer.tsx`     | Footer                                              |
| `Reveal.tsx` / `SectionHeading.tsx` | Shared animation/heading helpers |

Colors and fonts are configured in `tailwind.config.js`; global styles in `src/index.css`.
