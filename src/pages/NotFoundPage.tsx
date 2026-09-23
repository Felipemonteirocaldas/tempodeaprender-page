import { Link } from 'react-router-dom'
import PageHero from '@/components/PageHero'
import { IconArrowRight } from '@/components/icons'

export default function NotFoundPage() {
  return (
    <>
      <PageHero
        title="Página não encontrada"
        subtitle="O endereço que você acessou não existe ou mudou de lugar. Que tal voltar ao início ou falar com a nossa secretaria?"
        breadcrumb="Página não encontrada"
      />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="tap-target inline-flex items-center gap-2 px-8 rounded-xl bg-brand-navy text-white font-display font-bold text-base hover:bg-brand-navy-light transition-colors shadow-lg"
          >
            Voltar ao início <IconArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contato"
            className="tap-target inline-flex items-center px-8 rounded-xl border-2 border-brand-navy/30 text-brand-navy font-display font-bold text-base hover:bg-brand-sky-pale transition-colors"
          >
            Falar com a escola
          </Link>
        </div>
      </section>
    </>
  )
}
