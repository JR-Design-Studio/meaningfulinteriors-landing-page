export const site = {
  name: 'Meaningful Interiors',
  founder: 'Gabriela Brum',
  tagline: 'We design spaces to support how you live, feel, and move through life.',
  email: 'meaningfulinteriorsdecor@gmail.com',
  city: 'Los Angeles, California',
  instagram: 'https://www.instagram.com/meaningful_interiors/',
  facebook: 'https://www.facebook.com/meaningfulinteriorsdecor',
  // Zonas que lista la página de clósets del sitio original
  serviceAreas: [
    'Los Angeles',
    'Glendale',
    'Pasadena',
    'West Hollywood',
    'Beverly Hills',
    'Studio City',
    'Encino',
    'Sherman Oaks',
    'Calabasas',
    'Malibu',
    'Santa Barbara',
    'Orange County',
  ],
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/interior-design-services', label: 'Interior Design' },
  { href: '/neurodesign-closet-design-los-angeles', label: 'Closet Design' },
  { href: '/about', label: 'About' },
  { href: '/contactus', label: 'Contact' },
];
