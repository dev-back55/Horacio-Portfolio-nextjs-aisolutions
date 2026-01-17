import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  localePrefix: 'as-needed', // español sin prefijo, inglés con /en/
  localeDetection: false // Siempre inicia en español, ignora idioma del navegador
});
