import { Link } from 'react-router-dom'
import { IconChevronRight } from './icons'
import { IllustrationStar, IllustrationDots } from './Illustrations'
interface PageHeroProps {
  title: string
  subtitle: string
  breadcrumb: string
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#BBE0FC] via-[#D8EEFD] to-[#EDF6FD] pt-28 pb-16 overflow-hidden border-b border-brand-sky-light/40">
      {/* Faixa do uniforme — topo */}
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 flex h-1.5 z-10">
        <span className="flex-[3] bg-brand-sky" />
        <span className="flex-[2] bg-brand-navy" />
        <span className="flex-[1] bg-white/60" />
        <span className="flex-[1] bg-brand-green" />
        <span className="flex-[1] bg-brand-orange" />
      </div>

      {/* Gradiente decorativo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-brand-sky-pale via-transparent to-brand-sky-light/10 pointer-events-none"
      />

      {/* Círculos decorativos */}
      <div aria-hidden="true" className="absolute top-10 right-10 w-64 h-64 rounded-full bg-brand-sky/5 blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 left-10 w-48 h-48 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

      {/* Elementos Lúdicos */}
      <div aria-hidden="true" className="absolute top-20 right-[15%] text-brand-yellow/40 w-12 h-12 rotate-12 z-10 pointer-events-none">
        <IllustrationStar className="w-full h-full" />
      </div>
      <div aria-hidden="true" className="absolute bottom-10 left-[15%] text-brand-sky/30 w-16 h-16 -rotate-12 z-10 pointer-events-none">
        <IllustrationDots className="w-full h-full" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-sm text-brand-navy/60">
            <li>
              <Link to="/" className="hover:text-brand-navy hover:underline transition-colors">
                Início
              </Link>
            </li>
            <li aria-hidden="true">
              <IconChevronRight className="w-3.5 h-3.5" />
            </li>
            <li>
              <span className="text-brand-navy font-bold">{breadcrumb}</span>
            </li>
          </ol>
        </nav>

        <h1 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-brand-navy leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-brand-navy/80 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
