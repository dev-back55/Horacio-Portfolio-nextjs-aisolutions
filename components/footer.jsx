"use client"
import { useState } from "react"
import { toast } from "sonner"
import { sendEmailToPaciente } from "@/actions/emailActions"
import { Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"
import { LinkedIn } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { useTranslations, useLocale } from 'next-intl'

export function Footer({ darkMode }) {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const locale = useLocale()
  const currentYear = new Date().getFullYear()

  // Build localized path
  const getLocalizedPath = (path) => {
    if (path === '/') {
      return `/${locale}`;
    }
    return `/${locale}${path}`;
  };
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Newsletter Suscripción",
    message: "Hola quiero suscribirme al newsletter, gracias!",
  })

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formState.email.trim() || !formState.message.trim() || !formState.name.trim() || !formState.subject.trim()) {
      toast.error("Por favor complete todos los campos")
      return
    }
    await sendEmailToPaciente(formState)
    console.log(formState)
    toast.success("Gracias por enviar tu mensaje. En breve te contactare.")
    setFormState({
      name: "",
      email: "",
    })
  }

  return (
    <footer className="flex sm:ml-[220px] sm:w-[calc(100%-220px) py-12 bg-[#A0D683] text-[#18230F] border-t border-[#72BF78]/30">
      <div className="mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#18230F]">Horacio Abitú</h3>
            <p className="mb-4 text-[#27391C]">
              {t('role')}
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => window.open("https://twitter.com", "_blank")}
                className="text-[#27391C] hover:text-[#1F7D53] transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </button>
              <button
                onClick={() => window.open("https://linkedin.com", "_blank")}
                className="text-[#27391C] hover:text-[#1F7D53] transition-colors"
              >
                <LinkedIn className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#18230F]">{t('quickLinks')}</h3>
            <ul className="space-y-2 text-[#27391C]">
              <li>
                <Link href={getLocalizedPath('/')} className="hover:text-[#1F7D53] transition-colors">
                  {tNav('home')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/about')} className="hover:text-[#1F7D53] transition-colors">
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/contact')} className="hover:text-[#1F7D53] transition-colors">
                  {tNav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#18230F]">{t('contact')}</h3>
            <ul className="space-y-3 text-[#27391C]">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-[#1F7D53]" />
                <Link href="/contact" className="hover:text-[#1F7D53] transition-colors">
                  contacto@horacioabitu.com.ar
                </Link>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-[#1F7D53]" />
                <Link href="https://calendar.app.google/qB7HtErZcYHQXboN7" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F7D53] transition-colors">
                  {t('scheduleCall')}
                </Link>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-[#1F7D53]" />
                <Link href="https://www.rawsonchubut.com.ar" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F7D53] transition-colors">
                <span>Rawson, Chubut, Patagonia Argentina</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#18230F]">{t('store')}</h3>
            <Link href="https://www.itechrawson.com.ar" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F7D53] transition-colors">
            {t('storeDescription')}
            </Link>
          </div>  
        </div> 

        <div className="mt-10 pt-6 border-t border-[#72BF78]/30 text-center text-[#27391C]">
          <p>© {currentYear} Horacio Abitú. {t('rights')}</p>
        </div>
      </div>
    </footer>
  )
}


