import { useEffect, useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const highlights = [
  'AI Strategy',
  'Product Management',
  'B2B SaaS',
  'Quality Assurance',
  'Agile Leadership',
]

const getRandom = (exclude: number) => {
  let next: number
  do {
    next = Math.floor(Math.random() * highlights.length)
  } while (next === exclude)
  return next
}

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.gsap-line', {
      y: 0,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })
  }, { scope: sectionRef })

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveIndex(getRandom(activeIndex))
    }, Math.floor(Math.random() * 2500) + 1500)
    return () => clearTimeout(timeout)
  }, [activeIndex])

  return (
    <section ref={sectionRef} id="about" className="h-screen flex py-18 px-6 bg-white">
      <div className="w-full">
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <h2 className="gsap-line text-4xl md:text-5xl tracking-wide text-black">
            about
          </h2>
          <img
            src="/Shape-27.png"
            alt=""
            className="gsap-line w-16 md:w-28 transition-transform duration-700 hover:rotate-180"
          />
        </div>

        <div className="mx-auto max-w-4xl">
          <p className="gsap-line text-2xl md:text-4xl leading-relaxed">
            &ldquo;Christian, good food, and great tech. When I'm not falling down a rabbit hole of AI and tech videos, you can find me cooking up a new recipe, working out, or practicing my French. My soundtrack is usually Odeal, and my screen is usually tuned to the NFL, NBA, or Football&rdquo;
            <span className="italic text-xl mx-2">(Hala Madrid)</span>
          </p>
        </div>

        <div className="gsap-line flex flex-wrap justify-center md:justify-between gap-x-6 gap-y-3 max-w-5xl mx-auto mt-10 md:mt-16">
          {highlights.map((item, i) => (
            <span
              key={item}
              style={{ color: i === activeIndex ? '#000000' : '#e5e7eb' }}
              className="text-base md:text-xl font-medium whitespace-nowrap transition-colors duration-1000 ease-out"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
