"use client"

import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const localeFlags = {
  es: '🇦🇷',
  en: '🇺🇸'
};

export function LanguageSelector() {
  const t = useTranslations('languageSelector');
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Get the path without locale prefix
  const getPathWithoutLocale = () => {
    // Remove /es or /en prefix if present
    let path = pathname;
    if (path.startsWith('/es')) {
      path = path.replace(/^\/es/, '') || '/';
    } else if (path.startsWith('/en')) {
      path = path.replace(/^\/en/, '') || '/';
    }
    return path;
  };

  const getLocalizedPath = (targetLocale) => {
    const basePath = getPathWithoutLocale();
    // Use explicit locale prefix for both languages to force cookie update
    if (targetLocale === 'es') {
      // Use /es prefix to force locale change (will redirect to / after)
      return `/es${basePath === '/' ? '' : basePath}`;
    } else {
      return `/en${basePath === '/' ? '' : basePath}`;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-md w-full text-left hover:bg-[#72BF78]/20 transition-colors text-[#18230F]"
      >
        <Globe size={18} className="text-[#1F7D53]" />
        <span className="flex-1 flex items-center">
          <span className="mr-2">{localeFlags[locale]}</span>
          <span className="text-sm">{t(locale)}</span>
        </span>
        <ChevronDown 
          size={16} 
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div className="absolute bottom-full left-0 right-0 mb-1 bg-[#D3EE98] border border-[#72BF78]/30 rounded-md shadow-lg overflow-hidden z-50">
          <Link
            href={getLocalizedPath('es')}
            onClick={() => setIsOpen(false)}
            className={`flex items-center space-x-2 px-3 py-2 w-full text-left hover:bg-[#72BF78]/20 transition-colors text-[#18230F] ${locale === 'es' ? 'bg-[#72BF78]/10' : ''}`}
          >
            <span>{localeFlags.es}</span>
            <span className="text-sm">{t('es')}</span>
          </Link>
          <Link
            href={getLocalizedPath('en')}
            onClick={() => setIsOpen(false)}
            className={`flex items-center space-x-2 px-3 py-2 w-full text-left hover:bg-[#72BF78]/20 transition-colors text-[#18230F] ${locale === 'en' ? 'bg-[#72BF78]/10' : ''}`}
          >
            <span>{localeFlags.en}</span>
            <span className="text-sm">{t('en')}</span>
          </Link>
        </div>
      )}
    </div>
  );
}

