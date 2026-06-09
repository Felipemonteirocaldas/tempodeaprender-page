import { SVGProps } from 'react'

export function IllustrationStar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M50 5L62 38H97L69 58L80 95L50 73L20 95L31 58L3 38H38L50 5Z" fill="currentColor" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function IllustrationPaperPlane(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9 49L95 7L49 95L44 61L95 7L36 53L9 49Z" fill="currentColor" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function IllustrationScribble(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10 50 C 30 20, 40 80, 50 50 C 60 20, 80 80, 90 50" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none"/>
    </svg>
  )
}

export function IllustrationDots(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="20" cy="20" r="8" fill="currentColor" />
      <circle cx="50" cy="20" r="8" fill="currentColor" />
      <circle cx="80" cy="20" r="8" fill="currentColor" />
      <circle cx="20" cy="50" r="8" fill="currentColor" />
      <circle cx="50" cy="50" r="8" fill="currentColor" />
      <circle cx="80" cy="50" r="8" fill="currentColor" />
      <circle cx="20" cy="80" r="8" fill="currentColor" />
      <circle cx="50" cy="80" r="8" fill="currentColor" />
      <circle cx="80" cy="80" r="8" fill="currentColor" />
    </svg>
  )
}
