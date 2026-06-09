import { Link } from 'react-router-dom'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'
import SEO from '@/components/SEO'
import { useReveal } from '@/hooks/useReveal'
import { IconPin, IconArrowRight } from '@/components/icons'

export default function ContatoPage() {
  const [headRef, headVisible] = useReveal<HTMLDivElement>()
  const [mapRef, mapVisible] = useReveal<HTMLDivElement>({ threshold: 0.05 })

  return (
    <>
      <SEO
        title="Contato e Matrículas — Escola Tempo de Aprender em Escada, PE"
        description="Fale conosco para agendar uma visita e fazer a matrícula fundamental ou infantil em Escada, PE. Localização, horário de atendimento e WhatsApp."
        keywords="contato tempo de aprender, matrícula fundamental Escada, matrícula infantil Escada PE, telefone escola Escada PE, endereço escola tempo de aprender"
      />
      <PageHero
        title="Fale Conosco"
        subtitle="Tire suas dúvidas, agende uma visita ou solicite informações sobre matrículas. Estamos prontos para receber sua família!"
        breadcrumb="Contato"
      />
      <ContactForm />

      {/* Mapa */}
      <section aria-labelledby="map-heading" className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={headRef}
            className={`reveal mb-10 ${headVisible ? 'visible' : ''}`}
          >
            <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-orange">
              Localização
            </span>
            <h2 id="map-heading" className="mt-2 font-display font-extrabold text-3xl text-brand-navy">
              Como nos encontrar
            </h2>
          </div>

          <div
            ref={mapRef}
            className={`reveal grid lg:grid-cols-3 gap-8 items-start ${mapVisible ? 'visible' : ''}`}
          >
            {/* Mapa iframe com Estilo Personalizado */}
            <div className="reveal-left lg:col-span-2 relative rounded-2xl overflow-hidden border-2 border-brand-sky-light group">
              <iframe
                title="Localização da Escola Tempo de Aprender em Escada, Pernambuco"
                src="https://maps.google.com/maps?q=Avenida+Paulo+Leite+485+Escada+Pernambuco+Brasil&output=embed&hl=pt-BR"
                className="w-full h-80 lg:h-96"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                style={{ filter: 'contrast(1.05) opacity(0.95)' }}
              />
              {/* Overlay para tingir o mapa com a cor da marca (removido no hover para permitir interação) */}
              <div className="absolute inset-0 bg-brand-navy/10 mix-blend-multiply pointer-events-none transition-opacity duration-500 group-hover:opacity-0" aria-hidden="true" />
              <div className="absolute inset-0 bg-brand-sky-mid/10 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" aria-hidden="true" />
            </div>

            {/* Cards laterais */}
            <div className="reveal-right flex flex-col gap-4">
              <div className="p-6 rounded-2xl bg-white border-2 border-brand-sky-light">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-9 h-9 rounded-xl bg-brand-sky-light flex items-center justify-center text-brand-sky-mid flex-shrink-0">
                    <IconPin className="w-4 h-4" />
                  </span>
                  <h3 className="font-display font-bold text-brand-navy">Endereço</h3>
                </div>
                <p className="text-sm text-brand-gray-mid leading-relaxed">
                  Avenida Paulo Leite, Nº 485<br />
                  Escada, Pernambuco — PE
                </p>
                <a
                  href="https://maps.google.com/?q=Avenida+Paulo+Leite+485+Escada+Pernambuco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-brand-sky-mid text-sm font-display font-bold hover:text-brand-navy transition-colors"
                  aria-label="Abrir no Google Maps"
                >
                  Abrir no Maps <IconArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-white border-2 border-brand-sky-light">
                <h3 className="font-display font-bold text-brand-navy mb-3">Horário de atendimento</h3>
                <p className="text-sm text-brand-gray-mid leading-relaxed">
                  Segunda a sexta: 07h às 17h<br />
                  Sábados: 08h às 12h
                </p>
              </div>

              <Link
                to="/contato"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="tap-target flex items-center justify-center gap-2 px-6 rounded-2xl bg-brand-navy text-white font-display font-bold text-sm hover:bg-brand-navy-light transition-colors shadow-md"
              >
                Preencher formulário <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
