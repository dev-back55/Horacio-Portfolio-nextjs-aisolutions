"use client"

import { motion } from "framer-motion"
import { Home, ContactRound, CircleUserRound, ShoppingBag } from "lucide-react"
import { useTheme } from "next-themes"

const menuItems = [
  {
    icon: <Home className="h-6 w-6" />,
    label: "Home",
    href: "/",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: <CircleUserRound className="h-6 w-6" />,
    label: "About",
    href: "/about",
    gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
  },
  {
    icon: <ContactRound className="h-6 w-6" />,
    label: "Contact",
    href: "/contact",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    icon: <ShoppingBag className="h-6 w-6" />,
    label: "Store",
    href: "https://www.itechrawson.com.ar",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
]

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

export function MenuBar() {
  const { theme } = useTheme()

  const isDarkTheme = theme === "dark"

  return (
    <motion.nav
      className="sm:hidden py-3 px-2 bg-gradient-to-b from-background/95 to-background/90 backdrop-blur-lg border-t border-border/40 shadow-lg fixed bottom-0 left-0 right-0 z-50 w-full"
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className={`absolute inset-0 bg-gradient-radial from-transparent ${
          isDarkTheme
            ? "via-blue-400/10 via-30% via-purple-400/10 via-60% via-red-400/10 via-90%"
            : "via-blue-400/5 via-30% via-purple-400/5 via-60% via-red-400/5 via-90%"
        } to-transparent z-0 pointer-events-none`}
        variants={navGlowVariants}
      />
      <ul className="flex justify-around items-center relative z-10 px-4 max-w-lg mx-auto">
        {menuItems.map((item) => (
          <motion.li key={item.label} className="relative">
            <motion.div
              className="block overflow-visible group relative"
              style={{ perspective: "600px" }}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none rounded-xl"
                variants={glowVariants}
                style={{
                  background: item.gradient,
                  opacity: 0,
                }}
              />
              <motion.a
                href={item.href}
                className="flex flex-col items-center justify-center gap-1 px-4 py-1 relative z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl text-xs text-center"
                variants={itemVariants}
                transition={sharedTransition}
                style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
              >
                <span
                  className={`transition-colors duration-300 group-hover:${item.iconColor} text-foreground mx-auto`}
                >
                  {item.icon}
                </span>
                <span className="whitespace-nowrap font-medium">{item.label}</span>
              </motion.a>
              <motion.a
                href={item.href}
                className="flex flex-col items-center justify-center gap-1 px-4 py-1 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl text-xs text-center"
                variants={backVariants}
                transition={sharedTransition}
                style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
              >
                <span
                  className={`transition-colors duration-300 group-hover:${item.iconColor} text-foreground mx-auto`}
                >
                  {item.icon}
                </span>
                <span className="whitespace-nowrap font-medium">{item.label}</span>
              </motion.a>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}

