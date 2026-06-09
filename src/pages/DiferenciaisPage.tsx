import { Link } from 'react-router-dom'
import PageHero from '@/components/PageHero'
import BentoGrid from '@/components/BentoGrid'
import SEO from '@/components/SEO'
import { useReveal, useStaggerReveal } from '@/hooks/useReveal'
import { IconArrowRight, IconBook, IconUsers, IconGraduation } from '@/components/icons'

const HIGHLIGHTS = [
  { icon: IconBook, title: 'Metodologia ativa', text: 'Aprendizado por experience, ludicidade e experimentação — não apenas teoria.', accent: 'text-brand-sky-mid' },
  { icon: IconUsers, title: 'Comunidade integrada', text: 'Família e escola parceiras no desenvolvimento de cada criança, com canal aberto e transparente.', accent: 'text-brand-green' },
  { icon: IconGraduation, title: 'Excelência acadêmica', text: 'Base sólida na Educação Infantil e no Fundamental I que prepara para os próximos desafios.', accent: 'text-brand-orange' },
]

export default function DiferenciaisPage() {
  const [introRef, introVisible, introStagger] = useStaggerReveal<HTMLDivElement>()
  const [ctaRef, ctaVisible] = useReveal<HTMLDivElement>()

  return (
    <>
      <SEO
        title="Nossos Diferenciais — Escola Tempo de Aprender em Escada, PE"
        description="Descubra por que a escola Tempo de Aprender é referência em Escada, PE. Metodologia ativa, robótica, inglês, inclusão escolar e ambiente acolhedor."
        keywords="diferenciais escola tempo de aprender, metodologia ativa Escada PE, escola referência Escada PE, diferenciais escola infantil Escada"
      />
      <PageHero
        title="Nossos Diferenciais"
        subtitle="Descubra tudo o que faz da Tempo de Aprender uma escola especial — atividades lúdicas, inclusão, cultura regional e muito mais."
        breadcrumb="Diferenciais"
      />

      {/* Highlights — breve introdução antes do BentoGrid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={introRef}
            className={`reveal grid md:grid-cols-3 gap-6 md:gap-10 ${introVisible ? 'visible' : ''}`}
          >
            {HIGHLIGHTS.map(({ icon: Icon, title, text, accent }, i) => (
              <div
                key={title}
                className="reveal-child flex gap-5 items-start group"
                style={{ transitionDelay: introStagger(i) }}
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

      <BentoGrid />

      {/* CTA */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div aria-hidden="true" className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-sky/10 blur-3xl" />
        <div aria-hidden="true" className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-orange/10 blur-3xl" />
        <div
          ref={ctaRef}
          className={`reveal relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${ctaVisible ? 'visible' : ''}`}
        >
          <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-sky">
            Agende uma visita
          </span>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-white">
            Quer ver nossos diferenciais de perto?
          </h2>
          <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-xl mx-auto">
            Agende uma visita e veja como trabalhamos o desenvolvimento integral do seu filho — com amor, criatividade e método.
          </p>
          <Link
            to="/contato"
            className="tap-target mt-10 inline-flex items-center gap-2 px-8 rounded-xl bg-brand-sky-mid text-white font-display font-bold text-base hover:bg-brand-navy transition-colors shadow-lg"
          >
            Agendar visita <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
