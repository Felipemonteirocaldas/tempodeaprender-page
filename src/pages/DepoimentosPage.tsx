import { Link } from 'react-router-dom'
import PageHero from '@/components/PageHero'
import Testimonials from '@/components/Testimonials'
import SEO from '@/components/SEO'
import { useReveal, useStaggerReveal } from '@/hooks/useReveal'
import { IconArrowRight, IconHeart, IconUsers, IconStar } from '@/components/icons'

const TRUST_STATS = [
  { icon: IconUsers, number: '300+', label: 'famílias atendidas', accent: 'text-brand-sky-mid' },
  { icon: IconStar, number: '5★', label: 'avaliação média', accent: 'text-brand-orange' },
  { icon: IconHeart, number: '20+', label: 'anos de confiança', accent: 'text-brand-green' },
]

export default function DepoimentosPage() {
  const [statsRef, statsVisible, statsStagger] = useStaggerReveal<HTMLDivElement>()
  const [ctaRef, ctaVisible] = useReveal<HTMLDivElement>()

  return (
    <>
      <SEO
        title="Depoimentos das Famílias — Escola Tempo de Aprender"
        description="Veja o que dizem as famílias que confiam na Escola Tempo de Aprender em Escada, PE. Mais de 20 anos de educação de excelência e afeto."
        keywords="depoimentos tempo de aprender, opiniões escola Escada PE, avaliações escola infantil Escada, escola tempo de aprender depoimentos"
      />
      <PageHero
        title="Depoimentos"
        subtitle="Veja o que as famílias que confiam na Tempo de Aprender têm a dizer sobre a experiência dos seus filhos."
        breadcrumb="Depoimentos"
      />
      <Testimonials />

      {/* Stats strip */}
      <section className="py-16 bg-brand-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={statsRef}
            className={`reveal grid sm:grid-cols-3 gap-5 sm:gap-8 text-center ${statsVisible ? 'visible' : ''}`}
          >
            {TRUST_STATS.map(({ icon: Icon, number, label, accent }, i) => (
              <div key={label} className="reveal-child" style={{ transitionDelay: statsStagger(i) }}>
                <Icon className={`w-8 h-8 mx-auto mb-3 ${accent}`} />
                <p className="font-display font-extrabold text-4xl text-brand-navy">{number}</p>
                <p className="mt-1 text-sm text-brand-gray-mid">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div aria-hidden="true" className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-sky/10 blur-3xl" />
        <div aria-hidden="true" className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-orange/10 blur-3xl" />
        <div
          ref={ctaRef}
          className={`reveal relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${ctaVisible ? 'visible' : ''}`}
        >
          <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-sky">
            Venha fazer parte
          </span>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-white">
            Faça parte dessa história
          </h2>
          <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-xl mx-auto">
            Junte-se às centenas de famílias que escolheram a Tempo de Aprender para o futuro dos seus filhos.
          </p>
          <Link
            to="/contato"
            className="tap-target mt-10 inline-flex items-center gap-2 px-8 rounded-xl bg-brand-sky-mid text-white font-display font-bold text-base hover:bg-brand-navy transition-colors shadow-lg"
          >
            Matricule-se agora <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
