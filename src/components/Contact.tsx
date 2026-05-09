import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import InfiniteScroller from './InfiniteScroller'
gsap.registerPlugin(useGSAP, ScrollTrigger)

interface ContactProps {
  inContactSection: boolean
}

const Contact = ({ inContactSection }: ContactProps) => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const contacts = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oni-oluwatomiwa/' },
    { label: 'Email', href: 'mailto:temitopeoni001@gmail.com' },
    { label: 'Phone', href: 'tel:+2349164222587' },
    { label: 'Instagram', href: 'https://instagram.com/oluwatomiwa.oni' },
    { label: 'Download Resume', href: '/tomiwa_oni_cv.pdf' },
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
    <section ref={sectionRef} id="contact" className="h-screen flex flex-col bg-black relative">
      <div className="flex justify-between items-center pt-16 px-6">
        <h2 className="text-4xl md:text-5xl tracking-wide text-white">contact</h2>
        <img
          src="/Shape-04.png"
          alt=""
          className="gsap-line w-16 md:w-28 transition-transform duration-700 hover:rotate-180"
        />
      </div>

      <div className="py-28 flex items-center justify-center px-6">
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {contacts.map((c) => {
            const isResume = c.label === 'Resume'
            return (
              <a
                key={c.label}
                href={c.href}
                {...(isResume ? { download: true } : { target: '_blank', rel: 'noopener noreferrer' })}
                className="gsap-line relative text-2xl text-gray-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out after:origin-left"
              >
                {isResume ? 'Download Resume' : c.label}
              </a>
            )
          })}
        </div>
      </div>

      {inContactSection && (
        <div className="absolute bottom-0 left-0 right-0">
          <InfiniteScroller />
        </div>
      )}
    </section>
  )
}

export default Contact
