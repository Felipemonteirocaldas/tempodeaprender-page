import { useEffect, useRef, useState, type RefObject } from 'react'

interface RevealOptions {
  /** Threshold (0-1) at which the observer fires */
  threshold?: number
  /** Root margin, e.g. '0px 0px -80px 0px' */
  rootMargin?: string
  /** Only trigger once */
  once?: boolean
}

/**
 * Hook that returns a ref and a boolean indicating whether the element is visible.
 * Attach the ref to any element and use `isVisible` to toggle reveal classes.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {},
): [RefObject<T>, boolean] {
  const { threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true } = options
  const ref = useRef<T>(null!)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Skip if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, isVisible]
}

/**
 * Hook for staggered children reveals.
 * Returns a ref for the container and stagger-delay utility.
 */
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {},
): [RefObject<T>, boolean, (index: number) => string] {
  const [ref, isVisible] = useReveal<T>(options)

  const staggerDelay = (index: number): string => {
    return `${index * 80}ms`
  }

  return [ref, isVisible, staggerDelay]
}
