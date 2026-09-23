# Meaningful Interiors — Astro redesign

Redesign of [meaningfulinteriors.com](https://www.meaningfulinteriors.com) (currently Squarespace) as a static Astro + Tailwind CSS v4 site.

```sh
npm install
npm run dev      # http://localhost:4322
npm run build    # outputs dist/
```

## Pages

Same URLs as the live site, so existing rankings and links keep working.

| URL | Content |
| --- | --- |
| `/` | Home: neurodesign approach, services, gallery, studio video, FAQ |
| `/interior-design-services` | Full-service interior design: what's included, fit, process, design boards |
| `/neurodesign-closet-design-los-angeles` | Closet design: process, FAQ, service areas |
| `/about` | Gabriela Brum and the studio |
| `/contactus` | Inquiry form and fit criteria |
| `/contact` | Redirects to `/contactus` (the live site's buttons link here) |

The empty blog and Squarespace's template demo pages (`/leeme`, `/moreau-1`, `/blog-edit`) were not carried over.

## Design

- Logo: extracted from the live site's favicon (500×500) with the charcoal background removed. `src/assets/img/logo-*` has light and dark versions, stacked and horizontal; the originals are in `legacy-site/media/favicon-logo.png`.
- Type: DM Serif Text for display, Arimo for text.
- Palette taken from the studio's own renders: bone, linen, espresso, brass. Tokens live in `src/styles/global.css`.
- Images reveal with a curtain wipe; everything is visible without JavaScript or with reduced motion.

## Content and media

- All copy comes from the live site. Images are in `src/assets/img/` (renamed descriptively; Astro converts them to optimized WebP) and the studio video is `public/media/studio.mp4`.
- `legacy-site/` holds the full download: HTML and JSON for every page, all media at 2500px, the sitemap, and `content.json` with the extracted text.

## Contact form

The site is static, so the form opens the visitor's email app addressed to `meaningfulinteriorsdecor@gmail.com`. To receive inquiries directly, connect `src/pages/contactus.astro` to a form service (Formspree, Web3Forms) or an endpoint.

## SEO

Titles and descriptions per page, canonical URLs, Open Graph, `robots.txt`, sitemap, and JSON-LD: `ProfessionalService` (the studio, with service areas), `Service` on both service pages, `FAQPage` on home and closets, `Person` for Gabriela on About, and breadcrumbs.
