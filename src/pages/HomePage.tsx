import { Link } from 'react-router-dom'
import Hero from '@/components/Hero'
import BentoGrid from '@/components/BentoGrid'
import SEO from '@/components/SEO'
import { useReveal, useStaggerReveal } from '@/hooks/useReveal'
import { IconArrowRight, IconHeart, IconUsers, IconGraduation } from '@/components/icons'

interface QuickStat {
  icon: typeof IconHeart
  title: string
  text: string
  accent: string
}

const QUICK_STATS: QuickStat[] = [
  { icon: IconHeart, title: 'Amor e cuidado', text: 'Cada criança é única e recebe atenção individualizada.', accent: 'text-brand-orange' },
  { icon: IconUsers, title: 'Comunidade forte', text: 'Família e escola juntas no desenvolvimento infantil.', accent: 'text-brand-green' },
  { icon: IconGraduation, title: 'Excelência acadêmica', text: 'Metodologia ativa que prepara para o futuro.', accent: 'text-brand-sky-mid' },
]

export default function HomePage() {
  const [statsRef, statsVisible, staggerDelay] = useStaggerReveal<HTMLDivElement>()
  const [ctaRef, ctaVisible] = useReveal<HTMLDivElement>()

  return (
    <>
      <SEO
        title="Tempo de Aprender — Escola Infantil e Ensino Fundamental em Escada, PE"
        description="Escola Tempo de Aprender em Escada, PE. Matrículas abertas para Educação Infantil e Ensino Fundamental. Metodologia ativa, afeto e excelência no ensino."
        keywords="escola infantil em Escada PE, matrícula fundamental Escada, escola tempo de aprender, educação infantil Escada PE, ensino fundamental Escada"
      />
      <Hero />

      {/* Seção de destaque rápido */}
      <section className="py-12 sm:py-20 bg-white border-b border-brand-sky-light/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={statsRef}
            className={`reveal grid md:grid-cols-3 gap-6 md:gap-10 ${statsVisible ? 'visible' : ''}`}
          >
            {QUICK_STATS.map(({ icon: Icon, title, text, accent }, i) => (
              <div
                key={title}
                className="reveal-child flex gap-5 items-start group"
                style={{ transitionDelay: staggerDelay(i) }}
              >
                <span className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-sky-pale flex items-center justify-center ${accent} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="w-7 h-7" />
                </span>
                <div>
                  <h3 className="font-display font-bold text-brand-navy text-lg">{title}</h3>
                  <p className="mt-1.5 text-sm text-brand-gray-mid leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BentoGrid compact />

      {/* CTA Section */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div aria-hidden="true" className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-sky/10 blur-3xl" />
        <div aria-hidden="true" className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-orange/10 blur-3xl" />
        <div
          ref={ctaRef}
          className={`reveal relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${ctaVisible ? 'visible' : ''}`}
        >
          <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-sky">
            Venha nos conhecer
          </span>
          <h2 className="mt-3 font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white">
            O futuro do seu filho começa aqui
          </h2>
          <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-xl mx-auto">
            Agende uma visita ou solicite informações sobre matrículas. Estamos prontos para receber sua família!
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contato" className="tap-target inline-flex items-center gap-2 px-8 rounded-xl bg-brand-sky-mid text-white font-display font-bold text-base hover:bg-brand-navy transition-colors shadow-lg">
              Fale conosco <IconArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/sobre" className="tap-target inline-flex items-center px-8 rounded-xl border-2 border-white/40 text-white font-display font-bold text-base hover:bg-white/10 transition-colors">
              Conheça nossa história
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
