export type Testimonial = { id: string; quoteKey: string; nameKey: string; detailKey: string; initials: string; image: string };
export const testimonials: Testimonial[] = [
  { id: 'amina', quoteKey: 'testimonials.amina.quote', nameKey: 'testimonials.amina.name', detailKey: 'testimonials.amina.detail', initials: 'AN', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=82' },
  { id: 'hamid', quoteKey: 'testimonials.hamid.quote', nameKey: 'testimonials.hamid.name', detailKey: 'testimonials.hamid.detail', initials: 'HK', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=82' },
  { id: 'soraya', quoteKey: 'testimonials.soraya.quote', nameKey: 'testimonials.soraya.name', detailKey: 'testimonials.soraya.detail', initials: 'SM', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=82' },
];
