import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import { Analytics } from '@vercel/analytics/react'
import Navigation from './components/Navigation'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import LoadingScreen from './components/LoadingScreen'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [inContactSection, setInContactSection] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const lenis = new Lenis()
    ;(window as any).lenis = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    const handleScroll = () => {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect()
        setInContactSection(rect.top <= 100 && rect.bottom >= 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      lenis.destroy()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [loading])

  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      >
        <Navigation setSidebarOpen={setSidebarOpen} />
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Hero />
        <About />
        <Work />
        <Projects />
        <Contact inContactSection={inContactSection} />
      </motion.div>
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>
      <Analytics />
    </div>
  )
}

export default App
