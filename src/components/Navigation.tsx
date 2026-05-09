import { motion } from 'framer-motion'

interface NavigationProps {
  setSidebarOpen: (open: boolean) => void
}


const Navigation = ({ setSidebarOpen }: NavigationProps) => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-40 bg-black/5 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-end">
        <button
          onClick={() => setSidebarOpen(true)}
          className="cursor-pointer text-orange-500 hover:text-orange-400 transition-colors"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  )
}

export default Navigation
