"use client"

//import { useState } from "react"
import { Home, Info, Mail, Store } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { LinkedIn, Twitter } from "@/components/icons"

//import ThemeToggle from "./themeToggle";

export function Sidebar() {
 // const [darkMode, setDarkMode] = useState(true)

 // const toggleDarkMode = () => setDarkMode(!darkMode)

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
        <p className="text-sm text-center text-[#27391C]">
          Web Developer &<br />
          Solutions Provider
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
              href="/"
              className="flex items-center space-x-3 px-4 py-2.5 rounded-md"
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="flex items-center space-x-3 px-4 py-2.5 rounded-md">
              <Info size={18} />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="flex items-center space-x-3 px-4 py-2.5 rounded-md">
              <Mail size={18} />
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.itechrawson.com.ar" target="_blank" rel="noopener noreferrer"
              className="flex items-center space-x-3 px-4 py-2.5 rounded-md">
              <Store size={18} />
              <span>Store</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/*<div className="flex flex-col items-center justify-end flex-1 p-4">
        <ThemeToggle />
      </div>*/}
    </aside>
  )
}

