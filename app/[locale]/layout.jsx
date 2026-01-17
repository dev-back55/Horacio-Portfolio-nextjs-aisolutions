import { Inter } from "next/font/google"
import "../globals.css"
import { ProviderTheme } from '@/components/theme-provider';
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import { Toaster } from 'sonner';
import { MenuBar } from "@/components/menu-bar"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { routing } from '@/lib/i18n/routing';

const inter = Inter({ subsets: ["latin"] })

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ProviderTheme defaultTheme={['light']} enableSystem={false} attribute="class" themes={['light', 'dark']}>
          <NextIntlClientProvider messages={messages}>
            <div className="flex min-h-screen bg-[#D3EE98] text-[#18230F]">
              <div className="flex md:flex-col">
                {/* The Sidebar component will be rendered on all pages */}
                <Sidebar />
                <div>
                  {children}
                  <Toaster position="top-center" richColors />
                  <MenuBar />
                  <Footer />
                </div>
              </div>
            </div>
          </NextIntlClientProvider>
        </ProviderTheme>
      </body>
    </html>
  )
}
