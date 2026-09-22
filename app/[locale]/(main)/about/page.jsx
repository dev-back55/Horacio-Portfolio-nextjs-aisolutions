"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Download, ExternalLink, Layers, Star, Store } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from 'next-intl'

export default function AboutPage() {
  const t = useTranslations('about')

  const skills = [
    { key: "webDev", level: 100 },
    { key: "itSolutions", level: 100 },
    { key: "digitalStructure", level: 100 },
    { key: "projectManagement", level: 100 },
    { key: "technicalSupport", level: 100 },
  ]

  const services = [
    { key: "webDev", icon: Code },
    { key: "webDesign", icon: Layers },
    { key: "digitalStructure", icon: ExternalLink },
    { key: "store", icon: Store },
  ]

  const tools = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Framer Motion", category: "Animation" },
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Supabase", category: "Database" },
    { name: "Figma", category: "Design" },
    { name: "UX Pilot", category: "Design" },
    { name: "Google Analytics", category: "Marketing" },
    { name: "SEMrush", category: "Marketing" },
    { name: "GitHub", category: "DevOps" },
    { name: "Vercel", category: "DevOps" },
  ]

  const experienceKeys = [
    "freelance",
    "rawson",
    "itech",
    "computerStore",
    "projectLeader",
    "softwareDev1",
    "softwareDev2",
  ]

  const educationKeys = ["analyst", "henry", "noCountry"]

  return (
    <>
      {/* Main content */}
      <main className="sm:ml-[220px] sm:w-[calc(100%-220px)] p-8 md:p-12 lg:p-16">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#18230F]"
          >
            {t('title')}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16"
          >
            <div className="md:col-span-2">
              <div className="prose prose-lg mb-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-lg mb-6 text-[#27391C]"
                >
                  {t('intro1')}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-lg mb-6 text-[#27391C]"
                >
                  {t('intro2')}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-lg text-[#27391C]"
                >
                  {t('intro3')}
                </motion.p>
              </div>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                href="/horacio-abitu-cv-resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 rounded-md font-medium bg-[#72BF78] text-white hover:bg-[#72BF78]/90 transition-colors mb-10"
              >
                <Download size={18} className="mr-2" />
                {t('downloadResume')}
              </motion.a>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-lg overflow-hidden mb-6 border-2 border-[#72BF78]/30"
              >
                <Image
                  src="/images/horacio.jpg"
                  alt="Horacio en Rio Blanco"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-[#18230F]">{t('servicesTitle')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-lg bg-[#A0D683] shadow-sm"
                >
                  <div className="mb-4 text-[#1F7D53]">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#18230F]">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p className="text-[#27391C]">{t(`services.${service.key}.description`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-[#18230F]">{t('toolsTitle')}</h2>

            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 rounded-full text-sm bg-[#FEFF9F] border border-[#72BF78]/20"
                >
                  <span
                    className={`font-medium ${
                      tool.category === "Frontend"
                        ? "text-[#1F7D53]"
                        : tool.category === "Backend"
                          ? "text-[#255F38]"
                          : tool.category === "Database"
                            ? "text-[#255F38]"
                            : tool.category === "Design"
                              ? "text-[#1F7D53]"
                              : tool.category === "Marketing"
                                ? "text-[#255F38]"
                                : "text-[#27391C]"
                    }`}
                  >
                    {tool.category}:
                  </span>{" "}
                  {tool.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-[#18230F]">{t('skillsTitle')}</h2>

            <div className="grid grid-cols-1 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-[#18230F]">{t(`skills.${skill.key}`)}</span>
                    <span className="text-[#1F7D53] font-medium"><Star /></span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#D3EE98] border border-[#72BF78]/20">
                    <div className="h-full rounded-full bg-[#72BF78]" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-[#18230F]">{t('experienceTitle')}</h2>

            <div className="border-l-2 border-[#72BF78]/30">
              {experienceKeys.map((key, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className="relative pl-8 pb-8 text-[#27391C]"
                >
                  <span className="absolute left-[-8px] top-2 w-3.5 h-3.5 rounded-full bg-[#A0D683] border-2 border-[#72BF78]"></span>
                  <h3 className="text-xl font-bold text-[#18230F]">{t(`experience.${key}.position`)}</h3>
                  <p className="text-sm mb-2 text-[#1F7D53] font-medium">{t(`experience.${key}.year`)}</p>
                  <p>{t(`experience.${key}.description`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-[#18230F]">{t('educationTitle')}</h2>

            <div className="grid grid-cols-1 gap-6">
              {educationKeys.map((key, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="p-6 rounded-lg bg-[#A0D683] shadow-sm"
                >
                  <h3 className="text-xl font-bold mb-1 text-[#18230F]">{t(`education.${key}.degree`)}</h3>
                  <p className="text-sm mb-2 text-[#1F7D53] font-medium">
                    {t(`education.${key}.institution`)} | {t(`education.${key}.year`)}
                  </p>
                  <p className="text-[#27391C]">{t(`education.${key}.description`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-lg bg-[#FEFF9F] shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#18230F]">{t('ctaTitle')}</h2>
            <p className="mb-6 text-[#27391C]">{t('ctaDescription')}</p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md font-medium bg-[#72BF78] text-white hover:bg-[#72BF78]/90 transition-colors"
            >
              {t('ctaButton')}
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  )
}
