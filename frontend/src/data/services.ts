export type ServiceCategory = 'primaryCare' | 'specialty' | 'diagnostics';
export type Service = { id: string; icon: string; titleKey: string; descriptionKey: string; category: ServiceCategory; detailKey: string; image: string };

export const services: Service[] = [
  { id: 'family-medicine', icon: 'heart-pulse', titleKey: 'services.familyMedicine.title', descriptionKey: 'services.familyMedicine.description', category: 'primaryCare', detailKey: 'services.familyMedicine.detail', image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1000&q=82' },
  { id: 'womens-health', icon: 'flower-2', titleKey: 'services.womensHealth.title', descriptionKey: 'services.womensHealth.description', category: 'specialty', detailKey: 'services.womensHealth.detail', image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1000&q=82' },
  { id: 'child-health', icon: 'baby', titleKey: 'services.childHealth.title', descriptionKey: 'services.childHealth.description', category: 'primaryCare', detailKey: 'services.childHealth.detail', image: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=1000&q=82' },
  { id: 'cardiology', icon: 'activity', titleKey: 'services.cardiology.title', descriptionKey: 'services.cardiology.description', category: 'specialty', detailKey: 'services.cardiology.detail', image: 'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&w=1000&q=82' },
  { id: 'diagnostics', icon: 'scan-search', titleKey: 'services.diagnostics.title', descriptionKey: 'services.diagnostics.description', category: 'diagnostics', detailKey: 'services.diagnostics.detail', image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=82' },
  { id: 'mental-wellness', icon: 'brain', titleKey: 'services.mentalWellness.title', descriptionKey: 'services.mentalWellness.description', category: 'specialty', detailKey: 'services.mentalWellness.detail', image: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&w=1000&q=82' },
];
