export type HeroSlide = { id: string; image: string; alt: string; titleKey: string; subtitleKey: string; primaryLabelKey: string; secondaryLabelKey: string };

// These are replaceable Unsplash editorial photographs. Swap the URLs for client-owned images in production.
export const heroSlides: HeroSlide[] = [
  { id: 'care-team', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2200&q=85', alt: 'Clinician speaking with a patient in a bright consultation room', titleKey: 'home.slides.careTeam.title', subtitleKey: 'home.slides.careTeam.subtitle', primaryLabelKey: 'home.primaryCta', secondaryLabelKey: 'home.secondaryCta' },
  { id: 'specialist', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=2200&q=85', alt: 'Doctor preparing a patient for a clinical examination', titleKey: 'home.slides.specialist.title', subtitleKey: 'home.slides.specialist.subtitle', primaryLabelKey: 'home.primaryCta', secondaryLabelKey: 'home.secondaryCta' },
  { id: 'facility', image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=2200&q=85', alt: 'Modern hospital entrance with a calm welcoming interior', titleKey: 'home.slides.facility.title', subtitleKey: 'home.slides.facility.subtitle', primaryLabelKey: 'home.primaryCta', secondaryLabelKey: 'home.secondaryCta' },
];
