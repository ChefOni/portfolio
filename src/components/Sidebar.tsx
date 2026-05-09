import { motion, AnimatePresence } from 'framer-motion'
import BinaryDecoder from './BinaryDecoder'

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

const sections = ['About', 'Work', 'Projects', 'Contact']

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const scrollTo = (id: string) => {
    const index = sections.findIndex(s => s.toLowerCase() === id)
    if (index >= 0) {
      const top = (index + 1) * window.innerHeight
      ;(window as any).lenis?.scrollTo(top, { immediate: false })
    }
  }

  return (
    <AnimatePresence>
      {sidebarOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/20 z-40"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[40vw] bg-white/10 backdrop-blur-xl z-50 shadow-2xl"
          >
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-center mb-16">
                <h2 className="text-sm font-medium text-orange-500 tracking-widest uppercase">Menu</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="cursor-pointer text-orange-500 hover:text-orange-400 transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="space-y-8">
                {sections.map((item) => {
                  const id = item.toLowerCase()
                  return (
                    <a
                      key={item}
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        setSidebarOpen(false)
                        setTimeout(() => scrollTo(id), 200)
                      }}
                      className="block text-5xl md:text-6xl font-bold text-white hover:text-white/60 transition-colors"
                    >
                      <BinaryDecoder text={item} trigger="hover" />
                    </a>
                  )
                })}
              </nav>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

export default Sidebar
