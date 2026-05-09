import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const scrollerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.gsap-line', {
      y: 0,
      opacity: 0,
      duration: 0.9,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    if (scrollerRef.current) {
      gsap.to(scrollerRef.current, {
        x: -1200,
        duration: 20,
        ease: 'none',
        repeat: -1,
      })
    }
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="h-screen flex flex-col bg-black relative">
      <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start pt-32 px-6 gap-4">
        <h1 className="gsap-line text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white leading-none">
          tomiwa oni
        </h1>
        <img
          src="/Shape-03.png"
          alt=""
          className="gsap-line w-16 md:w-28 self-end md:self-auto transition-transform duration-700 hover:rotate-180"
        />
      </div>

      <div className="flex-1 flex items-center justify-end px-6 md:px-16">
        <p className="gsap-line text-2xl sm:text-3xl md:text-4xl text-gray-300 leading-relaxed max-w-3xl text-right">
          Shipping AI products at the intersection of tech and UX. I lead teams, obsess over quality, and turn complex ideas into reality. Let's build.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="overflow-hidden">
          <div
            ref={scrollerRef}
            className="flex whitespace-nowrap"
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="text-3xl sm:text-4xl md:text-6xl font-bold text-white/10 mx-4 md:mx-6 flex items-center gap-2 md:gap-4">scroll down <span className="text-2xl md:text-4xl">↓</span></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
