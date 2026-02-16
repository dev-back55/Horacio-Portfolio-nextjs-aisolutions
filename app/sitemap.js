import { routing } from '@/lib/i18n/routing';

export default function sitemap() {
  const baseUrl = 'https://www.horacioabitu.com.ar';

  // Routes directly corresponding to [locale] pages
  const routes = [
    { path: '', priority: 1.0 },
    { path: '/about', priority: 0.8 },
    { path: '/contact', priority: 0.8 },
    { path: '/presupuestos', priority: 0.5 },
  ];

  const sitemapEntries = [];

  routes.forEach((route) => {
    routing.locales.forEach((locale) => {
      // Check if we need to prefix the URL logic based on "as-needed" strategy
      // defaultLocale (es) -> /path
      // other (en) -> /en/path
      
      let urlPath = '';

      if (locale === routing.defaultLocale) {
        urlPath = route.path;
      } else {
        // Handle root vs subpaths
        urlPath = route.path === '' ? `/${locale}` : `/${locale}${route.path}`;
      }

      sitemapEntries.push({
        url: `${baseUrl}${urlPath}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route.priority,
      });
    });
  });

  return sitemapEntries;
}