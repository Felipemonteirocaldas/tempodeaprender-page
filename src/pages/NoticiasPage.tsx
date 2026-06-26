import PageHero from '@/components/PageHero'
import SEO from '@/components/SEO'

export default function NoticiasPage() {
  return (
    <>
      <SEO
        title="Notícias — Escola Tempo de Aprender"
        description="Acompanhe as últimas novidades, eventos e comunicados da Escola Tempo de Aprender em Escada, PE."
      />
      <PageHero
        title="Fique por dentro"
        subtitle="Acompanhe as últimas novidades, eventos e comunicados da Escola Tempo de Aprender."
        breadcrumb="Notícias"
      />
      <section className="py-20 bg-brand-sky-pale/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">Novidades chegando em breve!</h2>
          <p className="text-brand-gray-mid">Estamos preparando este espaço para compartilhar todas as nossas novidades com você.</p>
        </div>
      </section>
    </>
  )
}
