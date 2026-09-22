import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { MenuBar } from "@/components/menu-bar"

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#D3EE98] text-[#18230F]">
      <div className="flex md:flex-col w-full">
        {/* The Sidebar component will be rendered on all regular pages */}
        <Sidebar />
        <div className="flex-1">
          {children}
          <MenuBar />
          <Footer />
        </div>
      </div>
    </div>
  )
}
