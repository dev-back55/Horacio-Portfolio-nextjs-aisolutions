import { Inter } from "next/font/google"
import "./globals.css"
import { ProviderTheme } from '@/components/theme-provider';
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import { Toaster } from 'sonner';
import { MenuBar } from "@/components/menu-bar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Horacio Abitú | Web Developer",
  description: "Portfolio of Horacio Abitú, a creative developer building exceptional digital experiences.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
      <ProviderTheme defaultTheme={['light']} enableSystem={false} attribute="class" themes={['light', 'dark']}>
        <div className="flex min-h-screen bg-[#D3EE98] text-[#18230F]">
          <div className="flex md:flex-col">
            {/* The Sidebar component will be rendered on all pages */}
            {/* We'll determine the current page in each page component */}
            <Sidebar />
          <div>
            {children}
            <Toaster position="top-center" richColors />
            <MenuBar />
            <Footer />
          </div>
          </div>
        </div>
        </ProviderTheme>
      </body>
    </html>
  )
}



import './globals.css'