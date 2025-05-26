"use client"
import { useState } from "react"
import { toast } from "sonner"
import { sendEmailToPaciente } from "@/actions/emailActions"
import { Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"
import { LinkedIn } from "@/components/icons"
import { Button } from "@/components/ui/button"

export function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear()
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
    // Here you would normally handle the form submission
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
              Web developer and Solutions Provider.
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
            <h3 className="text-lg font-bold mb-4 text-[#18230F]">Quick Links</h3>
            <ul className="space-y-2 text-[#27391C]">
              <li>
                <Link href="/" className="hover:text-[#1F7D53] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#1F7D53] transition-colors">
                  About
                </Link>
              </li>
              {/*<li>
                <Link href="/blog" className="hover:text-[#1F7D53] transition-colors">
                  Blog
                </Link>
              </li>*/}
              <li>
                <Link href="/contact" className="hover:text-[#1F7D53] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#18230F]">Contact</h3>
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
                  Schedule Call
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
            <h3 className="text-lg font-bold mb-4 text-[#18230F]">Store</h3>
            <Link href="https://www.itechrawson.com.ar" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F7D53] transition-colors">
            Computer technical service and IT store with the highest quality and over 30 years of experience.
            </Link>
          </div>  

          {/* Newsletter 
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#18230F]">Newsletter</h3>
            <p className="mb-4 text-[#27391C]">Subscribe to get the latest updates and news.</p>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <input
                type="string"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="flex-1 px-2 py-1 rounded-l-md bg-white border border-[#72BF78]/30 text-[#18230F] focus:outline-none"
              />
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Your email"
                className="flex-1 px-2 py-1 rounded-l-md bg-white border border-[#72BF78]/30 text-[#18230F] focus:outline-none"
              />
              <Button type="submit" className="px-4 py-2 rounded-r-md font-medium bg-[#72BF78] text-white">
                Subscribe
              </Button>
            </form>
          </div>*/}
        </div> 

        <div className="mt-10 pt-6 border-t border-[#72BF78]/30 text-center text-[#27391C]">
          <p>© {currentYear} Horacio Abitú. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

