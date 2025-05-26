"use client"

import { Search } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function SearchForm() {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative w-full max-w-xs mx-auto mt-6"
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-gray-900 border border-gray-800 rounded-full py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-1 focus:ring-white"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <motion.div
          animate={{ scale: isFocused ? 1.1 : 1 }}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <Search size={16} />
        </motion.div>
      </div>
    </motion.div>
  )
}

