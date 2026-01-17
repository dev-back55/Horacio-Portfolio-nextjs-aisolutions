"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from 'next-intl'

export default function HomePage() {
  const t = useTranslations('home')
  const tProjects = useTranslations('projects')

  const clients = [
    { name: "OpenAI", logo: "/images/chatgpt.png" },
    { name: "Grok AI", logo: "/images/grok-logo.png" },
    { name: "Gemini AI", logo: "/images/gemini-logo.png" },
    { name: "Claude AI", logo: "/images/claude-ai-logo.png" },
    { name: "Make.com", logo: "/images/logo-make.png" },
  ]

  const projects = [
    {
      key: "rawsonChubut",
      image: "/images/rawsonchubutonline.png",
      link: "https://www.rawsonchubut.com.ar/",
    },
    {
      key: "itech",
      image: "/images/itechrawson.png",
      link: "https://www.itechrawson.com.ar",
    },
    {
      key: "camara",
      image: "/images/camara.webp",
      link: "https://www.camaracomerciorawson.com/",
    },
    {
      key: "camaraCobranzas",
      image: "/images/camara-cobranzas.webp",
      link: "https://www.camaracomerciorawson.online/",
    },
    {
      key: "flama",
      image: "/images/flama-innovacion.webp",
      link: "https://flama-innovacion.vercel.app/",
    },
    {
      key: "historias",
      image: "/images/historias-clinicas.png",
      link: "#",
    },
    {
      key: "radio",
      image: "/images/fmbahiaengano.png",
      link: "https://fmbahiaengano.com/",
    },
    {
      key: "cecilia",
      image: "/images/cecilia-aliaga.webp",
      link: "https://www.ceciliamaliaga.com.ar/",
    },
    {
      key: "marina",
      image: "/images/marina-griffiths.webp",
      link: "https://www.marinargriffiths.com.ar/",
    },
    {
      key: "nextEleven",
      image: "/images/NEXT-ELEVEN-AGENCY.png",
      link: "#",
    },
    {
      key: "techMarket",
      image: "/images/techmarket-tienda.png",
      link: "#",
    },
    {
      key: "tuDestino",
      image: "/images/tudestinoapp.png",
      link: "#",
    },
    {
      key: "fmApp",
      image: "/images/fm-app.jpeg",
      link: "https://play.google.com/store/apps/details?id=biaengano.fm",
    },
    {
      key: "junior",
      image: "/images/juniorapp.png",
      link: "https://appjunior.vercel.app/",
    },
    {
      key: "copaAmerica",
      image: "/images/copaamerica2024.png",
      link: "https://copaamerica-24.vercel.app/",
    },
    {
      key: "worldCup",
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
            {t('available')}
          </div>

          {/* Hero section */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#18230F]"
          >
            {t('greeting')} <span className="inline-block animate-wave">👋</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 text-[#27391C]"
          >
            {t('subtitle')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center mb-8 text-[#1F7D53] italic"
          >
            <MapPin size={18} className="mr-2" />
            {t('location')}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg mb-8 text-[#27391C]"
          >
            {t('description')}
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
              {t('aboutButton')}
            </Link>
            <Link 
              href="https://calendar.app.google/qB7HtErZcYHQXboN7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-2.5 rounded-md font-medium flex items-center bg-[#FEFF9F] text-[#18230F] hover:bg-[#FEFF9F]/90 transition-colors"
            >
              <Phone size={16} className="mr-2" />
              {t('bookCall')}
            </Link>
          </motion.div>

          {/* Clients - Infinite Carousel */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-12 text-[#18230F]"
            >
              {t('poweredWork')}
            </motion.h2>
            <div className="relative overflow-hidden">
              {/* Gradient masks for smooth edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#D3EE98] to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#D3EE98] to-transparent z-10"></div>
              
              <motion.div
                className="flex items-center gap-12"
                animate={{
                  x: [0, -50 * clients.length * 4],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {/* Duplicate clients multiple times for seamless loop */}
                {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 hover:opacity-100 transition-opacity"
                  >
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      width={620}
                      height={360}
                      className="h-14 w-auto object-contain"
                    />
                  </div>
                ))}
              </motion.div>
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
            {t('selectedWork')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
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
                          alt={tProjects(`${project.key}.title`)}
                          fill
                          className="object-contain"
                        />
                      </Link>
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold mb-1 flex items-center text-[#18230F]">
                    {tProjects(`${project.key}.title`)}
                    <motion.span
                      initial={{ x: -5, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="inline-block ml-2 text-[#1F7D53]"
                    >
                      <ArrowUpRight size={16} />
                    </motion.span>
                  </h3>
                  <p className="text-[#27391C]">{tProjects(`${project.key}.description`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
