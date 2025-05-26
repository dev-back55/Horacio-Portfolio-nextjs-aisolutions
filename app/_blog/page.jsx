"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Clock, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"

export default function BlogPage() {
  const [darkMode, setDarkMode] = useState(true)

  const posts = [
    {
      id: 1,
      title: "How AI is Revolutionizing Web Development",
      excerpt: "Learn how artificial intelligence is changing the way we build websites and applications.",
      date: "March 15, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "Technology",
    },
    {
      id: 2,
      title: "The Future of E-commerce in 2024",
      excerpt: "Explore the trends and technologies shaping online retail this year.",
      date: "February 28, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "E-commerce",
    },
    {
      id: 3,
      title: "Mastering SEO for Small Businesses",
      excerpt: "Simple strategies to improve your search rankings and attract more customers.",
      date: "February 10, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "Marketing",
    },
    {
      id: 4,
      title: "Building a Fast and Responsive Website with Next.js",
      excerpt: "A step-by-step guide to creating high-performance web applications.",
      date: "January 22, 2024",
      readTime: "10 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "Development",
    },
    {
      id: 5,
      title: "Why User Experience Matters More Than Ever",
      excerpt: "How focusing on UX can dramatically improve conversion rates and customer satisfaction.",
      date: "January 5, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "Design",
    },
  ]

  const categories = ["All", "Technology", "E-commerce", "Marketing", "Development", "Design"]

  return (
    <>

      {/* Main content */}
      <main className="ml-[220px] w-[calc(100%-220px)] p-8 md:p-12 lg:p-16">
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-[#18230F]"
          >
            Blog
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full py-3 pl-12 pr-4 rounded-md bg-white border border-[#72BF78]/30 text-[#18230F] focus:border-[#72BF78] focus:outline-none"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#27391C]" size={18} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 overflow-x-auto"
          >
            <div className="flex space-x-2 pb-2">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`whitespace-nowrap px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    index === 0
                      ? "bg-[#72BF78] text-white"
                      : "bg-[#FEFF9F] text-[#18230F] hover:bg-[#A0D683] hover:text-[#18230F]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="rounded-lg overflow-hidden bg-white shadow-sm border border-[#72BF78]/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-[#A0D683] text-[#18230F] border border-[#72BF78]/30">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm mb-3 text-[#27391C]">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-[#18230F] hover:text-[#1F7D53] transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="mb-4 text-[#27391C]">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="flex items-center font-medium text-[#1F7D53] hover:text-[#1F7D53]/80 transition-colors"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="px-6 py-3 rounded-md font-medium bg-[#72BF78] text-white hover:bg-[#72BF78]/90 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

