import { site } from '../data/site';

export const SITE_URL = 'https://www.meaningfulinteriors.com';

export function absolute(path: string) {
  return new URL(path, SITE_URL).toString();
}

const BUSINESS_ID = `${SITE_URL}/#studio`;
export const businessRef = { '@id': BUSINESS_ID };

export function business(image: string, logo: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': BUSINESS_ID,
    name: site.name,
    description:
      'Luxury residential interior design and closet design in Los Angeles, guided by neurodesign principles.',
    url: absolute('/'),
    image,
    logo,
    email: site.email,
    founder: { '@type': 'Person', name: site.founder, jobTitle: 'Neurodesign Interior Designer' },
    address: { '@type': 'PostalAddress', addressLocality: 'Los Angeles', addressRegion: 'CA', addressCountry: 'US' },
    areaServed: site.serviceAreas.map((name) => ({ '@type': 'City', name })),
    sameAs: [site.instagram, site.facebook],
    knowsAbout: ['Interior design', 'Neurodesign', 'Closet design', 'Luxury residential interiors'],
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absolute(c.path),
    })),
  };
}

export function faqPage(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function service(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: absolute(path),
    provider: businessRef,
    areaServed: { '@type': 'City', name: 'Los Angeles' },
    serviceType: name,
  };
}
