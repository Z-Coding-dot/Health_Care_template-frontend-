export type Palette = { name: string; primary: string; primaryDark: string; accent: string };

export type SiteConfig = {
  name: string;
  shortName: string;
  tagline: string;
  logo: string;
  colors: { primary: string; secondary: string; accent: string; surface: string };
  palettePresets: Palette[];
  features: { darkMode: boolean };
  stats: { patients: string; specialists: string; locations: string; label: string };
  contact: { phone: string; email: string; address: string; emergency: string; hours: string };
  socials: { facebook?: string; instagram?: string; linkedin?: string };
  seo: { title: string; description: string };
};

export const siteConfig: SiteConfig = {
  name: 'Carewell Health',
  shortName: 'Carewell',
  tagline: 'Specialist care with clear next steps.',
  logo: '/assets/logo.svg',
  colors: { primary: '#0d5662', secondary: '#0b1220', accent: '#c4862a', surface: '#f4f7fa' },
  palettePresets: [
    { name: 'Teal blue', primary: '#0d5662', primaryDark: '#073f4a', accent: '#c4862a' },
    { name: 'Forest', primary: '#205548', primaryDark: '#123d34', accent: '#b87934' },
    { name: 'Cobalt', primary: '#214f78', primaryDark: '#163758', accent: '#b77928' },
  ],
  features: { darkMode: false },
  stats: { patients: '24,000+', specialists: '48', locations: '6', label: 'Edit these values in siteConfig.ts' },
  contact: { phone: '+93 20 220 4040', email: 'hello@carewell.health', address: '14 Health Avenue, Kabul', emergency: '112', hours: 'Saturday–Thursday · 08:00–18:00' },
  socials: { facebook: '#', instagram: '#', linkedin: '#' },
  seo: { title: 'Carewell Health | Specialist care with clear next steps', description: 'A modern healthcare network in Kabul with primary, specialist, diagnostic, and family care.' },
};
