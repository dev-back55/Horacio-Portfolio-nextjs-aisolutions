"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Copy, MapPin, Phone, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true)

  const clients = [
    { name: "OpenAI", logo: "/images/chatgpt.png" },
    { name: "Grok AI", logo: "/images/grok-logo.png" },
    { name: "Gemini AI", logo: "/images/gemini-logo.png" },
    { name: "Make.com", logo: "/images/logo-make.png" },
  ]

  const testimonials = [
    {
      quote:
        "Horacio helped us launch our startup in record time. His AI-driven approach delivered results beyond our expectations.",
      author: "Sarah Jones",
      position: "CEO, TechStart",
      image: "/images/sarajones.jpg",
      rating: 5,
    },
    {
      quote:
        "Working with Horacio was a game-changer for our business. We went from idea to paying customers in just three weeks.",
      author: "Miguel Chan",
      position: "Founder, DataFlow",
      image: "/images/miguelchan.jpg",
      rating: 5,
    },
    {
      quote:
        "The no-nonsense approach and focus on results made all the difference. Our e-commerce site is now generating consistent sales.",
      author: "Emma Perez",
      position: "Marketing Director, StyleHub",
      image: "/images/emmaperez.jpeg",
      rating: 5,
    },
  ]

  const projects = [
    {
      title: "Rawson Chubut Online",
      description: "Web App Development - Founder - Owner",
      image: "/images/rawsonchubutonline.png",
      link: "https://www.rawsonchubut.com.ar/",
    },
    {
      title: "iTech Informática Rawson",
      description: "Web App Development - Founder - Owner",
      image: "/images/itechrawson.png",
      link: "https://www.itechrawson.com.ar",
    },
    {
      title: "Flama Innovación",
      description: "Web Site Development - Web Design",
      image: "/images/flama-innovacion.webp",
      link: "https://flama-innovacion.vercel.app/",
    },
    {
      title: "Historias Clínicas",
      description: "Web App Development - SaaS",
      image: "/images/historias-clinicas.png",
      link: "#",
    },
    {
      title: "Radio FM Bahía Engaño",
      description: "Web Site Development",
      image: "/images/fmbahiaengano.png",
      link: "https://fmbahiaengano.com/",
    },
    {
      title: "Next Eleven Agency",
      description: "Web Site Development",
      image: "/images/NEXT-ELEVEN-AGENCY.png",
      link: "#",
    },
    {
      title: "Tech Market",
      description: "Web App Development",
      image: "/images/techmarket-tienda.png",
      link: "#",
    },
    {
      title: "Tu Destino App",
      description: "Web App Development",
      image: "/images/tudestinoapp.png",
      link: "#",
    },
    {
      title: "FM Bahía Engaño App",
      description: "Android App Development",
      image: "/images/fm-app.jpeg",
      link: "https://play.google.com/store/apps/details?id=biaengano.fm",
    },
    {
      title: "Junior Developers Directory",
      description: "Web App Development",
      image: "/images/juniorapp.png",
      link: "https://appjunior.vercel.app/",
    },
    {
      title: "Copa America 2024",
      description: "Web App Development",
      image: "/images/copaamerica2024.png",
      link: "https://copaamerica-24.vercel.app/",
    },
    {
      title: "World Cup Qatar 2022",
      description: "Web Development - PWA",
      image: "/images/worldcup.jpg",
      link: "https://worldcup22-football.vercel.app/",
    },
  ]

  return (
    <>
      

      {/* Main content */}
      <main className="sm:ml-[220px] sm:w-[calc(100%-220px)] p-4 md:p-12 lg:p-16">
        <div className="w-full">
          {/* Available badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm mb-8 bg-[#FEFF9F] text-[#18230F] border border-[#72BF78]/30">
            <span className="w-2 h-2 rounded-full bg-[#72BF78] mr-2"></span>
            Available for work
          </div>

          {/* Hero section */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#18230F]"
          >
            Hello! I'm Horacio <span className="inline-block animate-wave">👋</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 text-[#27391C]"
          >
            I'm using AI to provide solutions or automations within your website, or creating new web apps with AI.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center mb-8 text-[#1F7D53] italic"
          >
            <MapPin size={18} className="mr-2" />
            Currently in Rawson, Argentina
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg mb-8 text-[#27391C]"
          >
            I'm focused on creating websites and apps that are not only attractive but also effective tools for selling online. We integrate cutting-edge AI technology into your web applications to provide customized solutions and automations. By leveraging AI tools, my straightforward approach ensures a rapid launch and traffic generation to get your first customers and achieve the desired conversions.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link
              href="/about"
              className="px-6 py-2.5 rounded-md font-medium bg-[#72BF78] text-white hover:bg-[#72BF78]/90 transition-colors"
            >
              About
            </Link>
            {/*<button className="px-6 py-2.5 rounded-md font-medium flex items-center bg-[#A0D683] text-[#18230F] hover:bg-[#A0D683]/90 transition-colors">
              <Copy size={16} className="mr-2" />
              Copy email
            </button>*/}
            <Link href="https://calendar.app.google/qB7HtErZcYHQXboN7" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-md font-medium flex items-center bg-[#FEFF9F] text-[#18230F] hover:bg-[#FEFF9F]/90 transition-colors">
              <Phone size={16} className="mr-2" />
              Book Call
            </Link>
          </motion.div>

          {/* Clients */}
          <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-[#18230F]"
          >
            Powered My Work
          </motion.h2>
            <div className="flex flex-wrap justify-evenly items-center gap-8">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="hover:opacity-100 transition-opacity relative"
                >
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={620}
                    height={360}
                    className="h-14 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Selected Work */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-[#18230F]"
          >
            Selected Work
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="block">
                  <div className="overflow-hidden rounded-lg mb-4 border border-[#72BF78]/20">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                      className="relative aspect-video"
                    >
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-contain"
                      />
                      </Link>
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold mb-1 flex items-center text-[#18230F]">
                    {project.title}
                    <motion.span
                      initial={{ x: -5, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="inline-block ml-2 text-[#1F7D53]"
                    >
                      <ArrowUpRight size={16} />
                    </motion.span>
                  </h3>
                  <p className="text-[#27391C]">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials Section 
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-12 text-[#18230F]"
            >
              What Clients Say
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-lg bg-[#A0D683] shadow-sm"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-[#1F7D53] fill-[#1F7D53]" />
                    ))}
                  </div>

                  <p className="text-lg mb-6 text-[#18230F]">"{testimonial.quote}"</p>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-[#72BF78]/30">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#18230F]">{testimonial.author}</h4>
                      <p className="text-sm text-[#27391C]">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>*/}
        </div>
      </main>

    </>
  )
}

