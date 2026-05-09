import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

const shapes = ['/Shape-03.png', '/Shape-10.png', '/Shape-15.png', '/Shape-16.png', '/Shape-27.png']

const LoadingScreen = () => {
  const rowRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const allImages = rowRef.current?.querySelectorAll('img')
    if (!allImages) return

    gsap.set(allImages, { opacity: 0, y: 40 })

    const tl = gsap.timeline()
    tl.to(allImages, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.06,
      ease: 'power2.out',
    })
    tl.to(rowRef.current, {
      x: -2400,
      duration: 10,
      ease: 'none',
      repeat: -1,
    }, '+=0.3')
  }, { scope: rowRef })

  return (
    <motion.div
      initial={{ clipPath: 'inset(0 0 0 0)' }}
      exit={{ clipPath: 'inset(0 0 100% 0)' }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden"
    >
      <div className="overflow-hidden w-full">
        <div ref={rowRef} className="flex items-center">
          {[...Array(3)].map((_, loop) => (
            <div key={loop} className="flex items-center shrink-0">
              {shapes.map((src, i) => (
                <img
                  key={`${loop}-${i}`}
                  src={src}
                  alt=""
                  className="w-20 sm:w-32 h-20 sm:h-32 mx-8 sm:mx-16 shrink-0"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
