import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      title: 'miti',
      desc: 'A platform connecting traditional herbal practices with modern technology for better accessibility and trust in herbal healthcare solutions across Africa.',
    },
    {
      title: 'baki',
      desc: 'An AI-powered support agent for intelligent customer service solutions, exploring natural language processing and automated support workflows.',
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
    <section ref={sectionRef} id="projects" className="h-screen flex items-center px-6 bg-[#196300]">
      <div className="w-full mb-16">
        <div className="flex justify-between items-center mb-8 ">
          <h2 className="gsap-line text-4xl md:text-5xl tracking-wide text-white">
            projects
          </h2>
          <img
            src="/Shape-08.png"
            alt=""
            className="gsap-line w-16 md:w-28 transition-transform "
          />
        </div>

        <div className="space-y-12 mx-auto max-w-4xl">
          {projects.map((project) => (
            <div key={project.title} className="gsap-line">
              <h3 className="text-3xl md:text-4xl text-white mb-3">{project.title}</h3>
              <p className="text-white text-xl leading-relaxed">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
