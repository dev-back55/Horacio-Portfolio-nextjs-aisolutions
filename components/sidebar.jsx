"use client"

import { Home, Info, Mail, Store } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { LinkedIn, Twitter } from "@/components/icons"
import { useTranslations, useLocale } from 'next-intl'
import { LanguageSelector } from "./language-selector"

export function Sidebar() {
  const t = useTranslations('nav')
  const tSidebar = useTranslations('sidebar')
  const locale = useLocale()

  // Build localized path - Spanish uses /es prefix, English uses /en prefix
  const getLocalizedPath = (path) => {
    if (path === '/') {
      return `/${locale}`;
    }
    return `/${locale}${path}`;
  };

  return (
    <aside className="w-[220px] hidden fixed top-0 left-0 h-full sm:flex flex-col bg-[#A0D683] border-r border-[#72BF78]/30">
      <div className="flex flex-col items-center pt-8 pb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[#72BF78]">
          <Image
            src="/images/horacio-rostro.jpg"
            alt="Horacio Abitu"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
        <h2 className="text-lg font-semibold text-center text-[#18230F]">Horacio Abitú</h2>
        <p className="text-sm text-center text-[#27391C] whitespace-pre-line">
          {tSidebar('role')}
        </p>
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        <Link
          href="https://x.com/AbituHoracio" target="_blank" rel="noopener noreferrer"
          className="text-[#27391C] hover:text-[#1F7D53] transition-colors"
        >
          <Twitter className="w-5 h-5" />
          <span className="sr-only">Twitter</span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/horacioabitu/" target="_blank" rel="noopener noreferrer"
          className="text-[#27391C] hover:text-[#1F7D53] transition-colors"
        >
          <LinkedIn className="w-5 h-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </div>

      <nav className="flex-1 px-4">
        <ul className="space-y-1">
          <li>
            <Link
              href={getLocalizedPath('/')}
              className="flex items-center space-x-3 px-4 py-2.5 rounded-md"
            >
              <Home size={18} />
              <span>{t('home')}</span>
            </Link>
          </li>
          <li>
            <Link
              href={getLocalizedPath('/about')}
              className="flex items-center space-x-3 px-4 py-2.5 rounded-md">
              <Info size={18} />
              <span>{t('about')}</span>
            </Link>
          </li>
          <li>
            <Link
              href={getLocalizedPath('/contact')}
              className="flex items-center space-x-3 px-4 py-2.5 rounded-md">
              <Mail size={18} />
              <span>{t('contact')}</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.itechrawson.com.ar" target="_blank" rel="noopener noreferrer"
              className="flex items-center space-x-3 px-4 py-2.5 rounded-md">
              <Store size={18} />
              <span>{t('store')}</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Language Selector */}
      <div className="px-4 py-4 border-t border-[#72BF78]/30">
        <LanguageSelector />
      </div>
    </aside>
  )
}


