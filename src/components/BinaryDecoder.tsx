import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

const randomBinary = (text: string) =>
  text.split('').map((c) => (c === ' ' ? ' ' : Math.random() > 0.5 ? '0' : '1')).join('')

interface BinaryDecoderProps {
  text: string
  className?: string
  as?: 'span' | 'h2' | 'h3' | 'h1'
  trigger?: 'auto' | 'hover'
}

const BinaryDecoder = ({ text, className = '', as: Tag = 'span', trigger = 'auto' }: BinaryDecoderProps) => {
  const [display, setDisplay] = useState(() => trigger === 'hover' ? text : randomBinary(text))
  const ref = useRef<any>(null)
  const tween = useRef<gsap.core.Tween | null>(null)

  useGSAP((_context, contextSafe) => {
    if (trigger === 'auto') {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 4 })
      tl.to({}, {
        duration: 2.5,
        ease: 'none',
        onUpdate() {
          const p = this.progress()
          setDisplay(
            text.split('').map((c, i) =>
              c === ' ' ? ' ' : p * text.length > i ? c : (Math.random() > 0.5 ? '0' : '1'),
            ).join(''),
          )
        },
      })
      tl.call(() => setDisplay(text))
      return
    }

    if (!contextSafe) return

    const play = contextSafe((target: string) => {
      if (tween.current) tween.current.kill()
      tween.current = gsap.to({}, {
        duration: 1.5,
        ease: 'none',
        onUpdate() {
          const p = this.progress()
          setDisplay(
            target.split('').map((c, i) =>
              c === ' ' ? ' ' : p * target.length > i ? c : (Math.random() > 0.5 ? '0' : '1'),
            ).join(''),
          )
        },
        onComplete() {
          setDisplay(target)
        },
      })
    })

    const el = ref.current
    if (!el) return

    const onEnter = () => play(randomBinary(text))
    const onLeave = () => play(text)
    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, { dependencies: [text, trigger] })

  return <Tag ref={ref} className={` ${className || ''}`}>{display}</Tag>
}

export default BinaryDecoder
