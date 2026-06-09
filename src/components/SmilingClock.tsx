import { SVGProps } from 'react'

export default function SmilingClock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Círculo externo do relógio */}
      <circle cx="50" cy="50" r="42" stroke="#0D3B8C" strokeWidth="4" />

      {/* Carinha Sorridente no centro */}
      {/* Olhos (Ponteiros do relógio) */}
      <path
        d="M50 50 L34 34"
        stroke="#0D3B8C"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M50 50 L66 34"
        stroke="#0D3B8C"
        strokeWidth="4"
        strokeLinecap="round"
      />
      
      {/* Centro dos ponteiros */}
      <circle cx="50" cy="50" r="3.5" fill="#0D3B8C" />

      {/* Boca sorridente */}
      <path
        d="M38 60 Q50 72 62 60"
        stroke="#FF5E7E"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Bochechas (dois círculos lúdicos) */}
      <circle cx="34" cy="56" r="2.5" fill="#FF5E7E" opacity="0.4" />
      <circle cx="66" cy="56" r="2.5" fill="#FF5E7E" opacity="0.4" />

      {/* Marcadores de hora (ticks) - 12 posições coloridas alternadas */}
      {/* 12h */}
      <line x1="50" y1="12" x2="50" y2="18" stroke="#FF5E7E" strokeWidth="3" strokeLinecap="round" />
      {/* 1h */}
      <line x1="69" y1="17" x2="66" y2="22.2" stroke="#3282F6" strokeWidth="3" strokeLinecap="round" />
      {/* 2h */}
      <line x1="83" y1="31" x2="77.8" y2="34" stroke="#2BB673" strokeWidth="3" strokeLinecap="round" />
      {/* 3h */}
      <line x1="88" y1="50" x2="82" y2="50" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" />
      {/* 4h */}
      <line x1="83" y1="69" x2="77.8" y2="66" stroke="#FF5E7E" strokeWidth="3" strokeLinecap="round" />
      {/* 5h */}
      <line x1="69" y1="83" x2="66" y2="77.8" stroke="#3282F6" strokeWidth="3" strokeLinecap="round" />
      {/* 6h */}
      <line x1="50" y1="88" x2="50" y2="82" stroke="#2BB673" strokeWidth="3" strokeLinecap="round" />
      {/* 7h */}
      <line x1="31" y1="83" x2="34" y2="77.8" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" />
      {/* 8h */}
      <line x1="17" y1="69" x2="22.2" y2="66" stroke="#FF5E7E" strokeWidth="3" strokeLinecap="round" />
      {/* 9h */}
      <line x1="12" y1="50" x2="18" y2="50" stroke="#3282F6" strokeWidth="3" strokeLinecap="round" />
      {/* 10h */}
      <line x1="17" y1="31" x2="22.2" y2="34" stroke="#2BB673" strokeWidth="3" strokeLinecap="round" />
      {/* 11h */}
      <line x1="31" y1="17" x2="34" y2="22.2" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
