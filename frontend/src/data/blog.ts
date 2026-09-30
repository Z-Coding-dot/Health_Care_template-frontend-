export type BlogPost = { id: string; date: string; categoryKey: string; titleKey: string; excerptKey: string; readTime: number; color: string; image: string; featured?: boolean };

export const blogPosts: BlogPost[] = [
  { id: 'small-steps', date: '2026-08-14', categoryKey: 'blog.categories.wellness', titleKey: 'blog.posts.smallSteps.title', excerptKey: 'blog.posts.smallSteps.excerpt', readTime: 5, color: '#d9f1ed', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=82', featured: true },
  { id: 'heart-health', date: '2026-07-29', categoryKey: 'blog.categories.heart', titleKey: 'blog.posts.heartHealth.title', excerptKey: 'blog.posts.heartHealth.excerpt', readTime: 7, color: '#dcecf7', image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1000&q=82' },
  { id: 'child-checkups', date: '2026-07-12', categoryKey: 'blog.categories.family', titleKey: 'blog.posts.childCheckups.title', excerptKey: 'blog.posts.childCheckups.excerpt', readTime: 4, color: '#f8ead8', image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=82' },
];
