# Thirteen Ways of Looking at a Blackbird — Portfolio Site

A minimalist, monochrome, responsive portfolio for a fine art photography book. Built as a static site with clean typography, subtle interactions, and generous white space.

## Structure

- `index.html` — Home
- `about.html` — About the photographer and artist statement
- `book.html` — Book overview, sample images, technical details, CTA
- `contact.html` — Contact form and direct contact info
- `assets/css/style.css` — Global styles (monochrome theme)
- `assets/js/main.js` — Small enhancements (nav, form UX)
- `assets/images/` — Put your images here

## Getting Started

1. Open a local server and visit the site:
   - Python: `python3 -m http.server 8000` then visit `http://localhost:8000`
   - Or open `index.html` directly in a browser

2. Replace placeholder images:
   - Hero image: `assets/images/hero-blackbird.jpg`
   - Artist portrait: `assets/images/artist-portrait.jpg`
   - Book samples: `assets/images/sample-1.jpg`, `sample-2.jpg`, `sample-3.jpg`, `sample-4.jpg`

3. Update textual content in the HTML files as needed:
   - Photographer name in the header brand
   - About page biography and artist statement
   - Technical details on `book.html`
   - Contact email and social links on `contact.html`

## Contact Form

- The form currently uses a `mailto:` action for simplicity. For production or gallery inquiries you may want a form service:
  - Formspree, Basin, Netlify Forms, or a custom backend
- To integrate Formspree, replace the form `action` with your endpoint and keep `method="POST"`.

## Typography & Theme

- Headings: Cormorant Garamond (serif)
- Body: Inter (sans-serif)
- Strict monochrome palette (black/white/gray) with high contrast

## Accessibility

- Semantic HTML, labeled navigation, focus-visible outlines
- Alt text placeholders on all images (please refine with accurate descriptions)

## Deployment

- Any static host works: GitHub Pages, Netlify, Vercel, S3/CloudFront
- Ensure assets paths remain relative at the project root

## License

- This site template is provided as-is for your project. Replace all placeholder text, images, and details with your own.
