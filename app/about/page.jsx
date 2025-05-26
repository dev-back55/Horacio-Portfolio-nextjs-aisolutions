"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Code, Download, ExternalLink, Layers, Star, Store } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export default function AboutPage() {
  const [darkMode, setDarkMode] = useState(true)

  const skills = [
    { name: "Web Development", level: 100},
    { name: "IT Solutions Provider", level: 100 },
    { name: "Digital Structure", level: 100 },
    { name: "Project Management", level: 100 },
    { name: "Computer Technical Support", level: 100},
  ]

  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      icon: Code,
    },
    {
      title: "Web Design",
      description: "Intuitive and engaging user interfaces that enhance user experience and drive conversions.",
      icon: Layers,
    },
    {
      title: "Digital Structure",
      description:
        "Design an intuitive and functional web architecture, optimizing all elements of your digital ecosystem.",
      icon: ExternalLink,
    },
    {
      title: "Service & Store",
      description:
        "Consulting, professional computer technical service, and IT Store, with quality and prices, and over 30 years of experience in the field.",
      icon: Store,
    },
  ]

  const tools = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Framer Motion", category: "Animation" },
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Figma", category: "Design" },
    { name: "UX Pilot", category: "Design" },
    { name: "Google Analytics", category: "Marketing" },
    { name: "SEMrush", category: "Marketing" },
    { name: "GitHub", category: "DevOps" },
    { name: "Vercel", category: "DevOps" },
  ]

  const education = [
    {
      degree: "Programmer Analyst",
      institution: "UNPSJB",
      year: "1985 - 1987",
      description: "Specialized in software development and system analysis",
    },
    {
      degree: "Full Stack Web Development",
      institution: "Henry Academy",
      year: "2022",
      description: "Graduated with expertise in fullstack software development and web technologies",
    },
    {
      degree: "Development Expert Training",
      institution: "No Country Academy",
      year: "2023",
      description: "Comprehensive training in fullstack software development, design patterns, Scrum and Agile tecniques and analytics",
    },
  ]

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
            About Me
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
                 My method integrates experience and technical skills with marketing strategies to develop websites and applications that not only stand out for their design, but are also optimized to convert visitors into loyal customers.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-lg mb-6 text-[#27391C]"
                >
                  I am committed to using the most advanced new AI technologies to automate and streamline processes, increase efficiency, and deliver high-quality results in less time.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-lg text-[#27391C]"
                >
                  My mission is to support you in the rapid launch of your business, creating excellent digital products that generate real impact and value in just weeks, rather than months.
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
                Download Resume
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
            <h2 className="text-3xl font-bold mb-8 text-[#18230F]">Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-lg bg-[#A0D683] shadow-sm"
                >
                  <div className="mb-4 text-[#1F7D53]">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#18230F]">{service.title}</h3>
                  <p className="text-[#27391C]">{service.description}</p>
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
            <h2 className="text-3xl font-bold mb-8 text-[#18230F]">Tools & Technologies</h2>

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
            <h2 className="text-3xl font-bold mb-8 text-[#18230F]">Skills & Expertise</h2>

            <div className="grid grid-cols-1 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-[#18230F]">{skill.name}</span>
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
            <h2 className="text-3xl font-bold mb-8 text-[#18230F]">Experience</h2>

            <div className="border-l-2 border-[#72BF78]/30">
              {[
                {
                  year: "2022 - Present",
                  position: "Freelance Web Developer, IT Consultant and Computer Technical Solutions",
                  description:
                    "Working with startups and businesses to build effective online presences and solid technical foundations.",
                },
                {
                  year: "2024 - Present",
                  position: "Founder and CEO of Rawson Chubut Online",
                  description:
                    "Founder and developer of the website rawsonchubut.com.ar. This project was born as a tribute to my hometown, with the goal of gathering all possible information for travelers or anyone who wants to discover Rawson, the heart of Argentine Patagonia.",
                },
                {
                  year: "2024 - Present",
                  position: "Founder and CEO of iTech Informatica Rawson",
                  description:
                    "Founder and developer of the website itechrawson.com.ar. An online IT product store, with the goal of providing my Rawson neighbors with the highest quality IT products and services, utilizing my extensive experience in the field.",
                },
                {
                  year: "2008 - 2016",
                  position: "Founder and Seo of Computer Service Store",
                  description: "Seo and manager of Computer Service Store, owner.",
                },
                {
                  year: "2006 - 2007",
                  position: "Project Leader and SysAdmin",
                  description: "Project Leader IBM xSeries Tower Servers and SysAdmin to Banco del Chubut S.A.",
                },
                {
                  year: "1991 - 1997",
                  position: "Software Developer",
                  description: "Developed and implemented management software systems to Banco del Chubut S.A.",
                },
                {
                  year: "1987 - 1991",
                  position: "Software Developer",
                  description: "Developed and implemented management software systems to Catastro y Geodesia of Chubut.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className="relative pl-8 pb-8 text-[#27391C]"
                >
                  <span className="absolute left-[-8px] top-2 w-3.5 h-3.5 rounded-full bg-[#A0D683] border-2 border-[#72BF78]"></span>
                  <h3 className="text-xl font-bold text-[#18230F]">{item.position}</h3>
                  <p className="text-sm mb-2 text-[#1F7D53] font-medium">{item.year}</p>
                  <p>{item.description}</p>
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
            <h2 className="text-3xl font-bold mb-8 text-[#18230F]">Education</h2>

            <div className="grid grid-cols-1 gap-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="p-6 rounded-lg bg-[#A0D683] shadow-sm"
                >
                  <h3 className="text-xl font-bold mb-1 text-[#18230F]">{item.degree}</h3>
                  <p className="text-sm mb-2 text-[#1F7D53] font-medium">
                    {item.institution} | {item.year}
                  </p>
                  <p className="text-[#27391C]">{item.description}</p>
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
            <h2 className="text-2xl font-bold mb-4 text-[#18230F]">Ready to work together?</h2>
            <p className="mb-6 text-[#27391C]">I'm currently available for freelance projects and consulting work.</p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md font-medium bg-[#72BF78] text-white hover:bg-[#72BF78]/90 transition-colors"
            >
              Get in touch
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  )
}

