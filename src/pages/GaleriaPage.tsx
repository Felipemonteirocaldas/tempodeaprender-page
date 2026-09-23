import { Link } from 'react-router-dom'
import PageHero from '@/components/PageHero'
import { IconArrowRight } from '@/components/icons'
import ImageWithSkeleton from '@/components/ImageWithSkeleton'
import { useReveal, useStaggerReveal } from '@/hooks/useReveal'

// Array of images for the masonry grid
const GALLERY_IMAGES = [
  { id: 'SJ01', alt: 'Momento na escola 1' },
  { id: 'SJ02', alt: 'Momento na escola 2' },
  { id: 'SJ03', alt: 'Momento na escola 3' },
  { id: 'SJ04', alt: 'Momento na escola 4' },
  { id: 'SJ05', alt: 'Momento na escola 5' },
  { id: 'SJ06', alt: 'Momento na escola 6' },
  { id: 'SJ07', alt: 'Momento na escola 7' },
]

export default function GaleriaPage() {
  const [gridRef, gridVisible, gridStagger] = useStaggerReveal<HTMLDivElement>({ threshold: 0.05 })
  const [ctaRef, ctaVisible] = useReveal<HTMLDivElement>()

  return (
    <>
      <PageHero
        title="Galeria de Fotos"
        subtitle="Conheça nossa estrutura e confira os melhores momentos dos nossos alunos."
        breadcrumb="Galeria"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={gridRef}
            className={`reveal columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 ${gridVisible ? 'visible' : ''}`}
          >
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className="reveal-child break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                style={{ transitionDelay: gridStagger(i) }}
              >
                <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-colors z-10 duration-300 pointer-events-none" />
                <ImageWithSkeleton
                  src={`/galeria/${img.id}.webp`}
                  srcSet={`/galeria/${img.id}-640.webp 640w, /galeria/${img.id}.webp 900w`}
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  alt={img.alt}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  wrapperClassName="w-full h-full"
                />
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
          <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-sky-light">
            Venha nos conhecer
          </span>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-white">
            Gostou da nossa estrutura?
          </h2>
          <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-xl mx-auto">
            Agende uma visita e veja tudo isso de perto! Estamos de portas abertas para receber sua família.
          </p>
          <Link
            to="/contato"
            className="tap-target mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-sky-mid text-white font-display font-bold text-base hover:bg-brand-navy transition-colors shadow-[0_4px_0_rgba(74,166,220,1)] hover:translate-y-0.5 hover:shadow-[0_2px_0_rgba(74,166,220,1)] active:translate-y-1 active:shadow-none"
          >
            Agendar visita <IconArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
