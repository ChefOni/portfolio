import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const jobs = [
    {
      title: 'clive alliance',
      role: 'Technical PM & QA',
      date: '2026 — Present',
      desc: 'Handling different projects, ensuring technical excellence and quality assurance across all development phases.',
    },
    {
      title: 'japa.run',
      role: 'Technical PM & QA',
      date: '2024 — 2025',
      desc: 'Led technical project management and quality assurance for the JAPA.RUN platform, focusing on scalable solutions.',
    },
  ]

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

  return (
    <section ref={sectionRef} id="work" className="h-screen flex items-center px-6 bg-[#e8e8e8]">
      <div className="w-full mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="gsap-line text-4xl md:text-5xl tracking-wide text-gray-800">
            work
          </h2>
          <img
            src="/Shape-15.png"
            alt=""
            className="gsap-line w-20 md:w-36 transition-transform duration-700 hover:rotate-180"
          />
        </div>

        <div className="space-y-12 mx-auto max-w-4xl">
          {jobs.map((job) => (
            <div key={job.title} className="gsap-line">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3 gap-1">
                <h3 className="text-3xl md:text-4xl text-gray-800">{job.title}</h3>
                <span className="text-sm text-gray-500">{job.date}</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">{job.role}</p>
              <p className="text-gray-700 text-xl leading-relaxed">{job.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
