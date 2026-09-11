import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Hero from '@/components/Hero'
import BentoGrid from '@/components/BentoGrid'
import SEO from '@/components/SEO'
import SetembroAmarelo from '@/components/SetembroAmarelo'
import { useReveal, useStaggerReveal } from '@/hooks/useReveal'
import { IconArrowRight, IconHeart, IconUsers, IconGraduation, IconCalendar } from '@/components/icons'

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
  const navigate = useNavigate()

  /* Hook para scroll com mouse (arrastar fotos) */
  const scrollRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const hasDragged = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    isDragging.current = true
    hasDragged.current = false
    scrollRef.current.classList.add('cursor-grabbing')
    scrollRef.current.classList.remove('snap-x', 'snap-mandatory')
    startX.current = e.pageX - scrollRef.current.offsetLeft
    scrollLeft.current = scrollRef.current.scrollLeft
  }
  const handleMouseLeaveOrUp = () => {
    isDragging.current = false
    if (!scrollRef.current) return
    scrollRef.current.classList.remove('cursor-grabbing')
    scrollRef.current.classList.add('snap-x', 'snap-mandatory')
  }
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5 // velocidade do scroll
    if (Math.abs(walk) > 5) {
      hasDragged.current = true
    }
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }

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

      {/* Seção Especial Setembro Amarelo */}
      <SetembroAmarelo />

      {/* Mini Galeria Carrossel */}
      <section className="py-12 sm:py-16 bg-brand-sky-pale/20 border-b border-brand-sky-light/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-navy tracking-tight">Um pouquinho de nós</h2>
            <p className="text-brand-gray-mid mt-2 max-w-xl text-sm sm:text-base">Registros de momentos felizes, aprendizados e muita diversão na nossa escola.</p>
          </div>
          <Link
            to="/galeria"
            className="hidden sm:inline-flex items-center gap-2 text-white bg-brand-sky hover:bg-brand-sky-dark px-5 py-2.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md group tap-target flex-shrink-0"
          >
            Abrir Galeria
            <IconArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 hide-scrollbar cursor-grab select-none"
          >
            {[
              '/galeria/SJ01.jpeg',
              '/galeria/SJ02HOME.jpeg',
              '/galeria/SJ03.jpeg',
              '/galeria/SJ04.jpeg',
              '/galeria/SJ05.jpeg',
              '/galeria/SJ06.jpeg',
              '/galeria/SJ07.jpeg'
            ].map((src, i) => (
              <div
                key={i}
                onClick={() => {
                  if (!hasDragged.current) navigate('/galeria')
                }}
                className="relative w-64 h-44 sm:w-80 sm:h-56 rounded-3xl overflow-hidden flex-shrink-0 shadow-md snap-center group/img cursor-pointer"
              >
                <img src={src} alt="Momento na escola" draggable={false} className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105 pointer-events-none" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Botão Mobile */}
        <div className="flex justify-center sm:hidden mt-2 px-4">
          <Link
            to="/galeria"
            className="inline-flex w-full justify-center items-center gap-2 text-white bg-brand-sky hover:bg-brand-sky-dark px-5 py-3 rounded-xl font-bold transition-all shadow-md tap-target"
          >
            Abrir Galeria
            <IconArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <BentoGrid compact />

      {/* Calendário Resumo */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-brand-orange-pale flex items-center justify-center text-brand-orange">
                  <IconCalendar className="w-5 h-5" />
                </div>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-navy">Próximos Eventos</h2>
              </div>
              <p className="text-brand-gray-mid max-w-xl">Fique por dentro das datas mais importantes da nossa escola.</p>
            </div>
            <Link
              to="/calendario"
              className="inline-flex items-center gap-2 text-brand-navy bg-white border-2 border-brand-navy hover:bg-brand-navy hover:text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-sm tap-target"
            >
              Ver Calendário Completo
              <IconArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { day: '02', month: 'Fev', title: 'Início das Aulas', type: 'Escolar', color: 'bg-brand-yellow text-brand-navy' },
              { day: '24', month: 'Mai', title: 'Emancipação de Escada', type: 'Municipal', color: 'bg-brand-green text-white' },
              { day: '24', month: 'Jun', title: 'Festa de São João', type: 'Estadual', color: 'bg-brand-sky text-white' },
            ].map((ev, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl bg-brand-sky-pale/20 border border-brand-sky-light/40 hover:-translate-y-1 transition-transform">
                <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm border border-brand-sky-light/30 w-16 h-16 flex-shrink-0">
                  <span className="font-display font-black text-xl text-brand-navy leading-none">{ev.day}</span>
                  <span className="text-xs font-bold text-brand-orange uppercase">{ev.month}</span>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-bold text-brand-navy mb-1">{ev.title}</h3>
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide self-start ${ev.color}`}>
                    {ev.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
          <h2 className="mt-3 font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white">
            O futuro do seu filho começa aqui
          </h2>
          <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-xl mx-auto">
            Agende uma visita ou solicite informações sobre matrículas. Estamos prontos para receber sua família!
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contato"
              className="tap-target inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-orange text-brand-navy font-display font-black text-base transition-all shadow-[0_4px_0_rgba(200,60,40,1)] hover:translate-y-0.5 hover:shadow-[0_2px_0_rgba(200,60,40,1)] hover:brightness-110 active:translate-y-1 active:shadow-none"
            >
              Matricule-se <IconArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/sobre"
              className="tap-target inline-flex items-center px-8 py-4 rounded-xl border-2 border-white/40 text-white font-display font-bold text-base hover:bg-white/10 transition-colors"
            >
              Conheça nossa história
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
