import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface Feature {
  icon: JSX.Element
  title: string
  description: string
}

const FEATURES: Feature[] = [
  {
    icon: (
      <svg className="w-10 h-10 text-brand-red stroke-current fill-none" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Ensino com Amor',
    description: 'Cuidamos de cada aluno com carinho e dedicação.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[#3282F6] stroke-current fill-none" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.246.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.773-.564-.375-1.81.588-1.81h4.907a1 1 0 00.95-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'Aprendizagem que Inspira',
    description: 'Propostas que estimulam a curiosidade, a criatividade e o conhecimento.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-brand-yellow stroke-current fill-none" strokeWidth={1.8} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h.01M15 10h.01M9 15a3.5 3.5 0 006 0" />
      </svg>
    ),
    title: 'Ambiente Seguro e Acolhedor',
    description: 'Um espaço onde as crianças se sentem felizes e valorizadas.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-brand-green stroke-current fill-none" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: 'Preparando para o Futuro',
    description: 'Formamos crianças confiantes, éticas e protagonistas.',
  },
]

const HIGHLIGHTS: string[] = [
  'Educação Infantil e Ensino Fundamental I',
  'Escada, Pernambuco',
  'Professores dedicados e especializados',
]

export default function Hero() {
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setEntered(true), 150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <section
        id="inicio"
        aria-labelledby="hero-heading"
        className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-32 bg-gradient-to-br from-[#BBE0FC] via-[#D8EEFD] to-[#EDF6FD]"
      >
        {/* Elemento de fundo fluido esquerdo */}
        <div 
          aria-hidden="true" 
          className="absolute left-[-10%] top-[20%] w-[40%] h-[60%] bg-[#BEE3FC]/40 blur-3xl rounded-full pointer-events-none"
        />

        {/* Linha ondulada do uniforme decorativa no topo */}
        <div aria-hidden="true" className="absolute top-0 left-0 right-0 flex h-1.5 z-10">
          <span className="flex-[3] bg-brand-sky" />
          <span className="flex-[2] bg-brand-navy" />
          <span className="flex-[1] bg-white/60" />
          <span className="flex-[1] bg-brand-green" />
          <span className="flex-[1] bg-brand-orange" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Conteúdo Esquerdo */}
            <div className="lg:col-span-5 text-left">
              
              {/* Badge matrícula */}
              <span
                className={[
                  'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-sky/15 border border-brand-sky/30 text-brand-navy font-display font-bold text-xs uppercase tracking-wider mb-6 transition-all duration-700',
                  entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                ].join(' ')}
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '100ms' }}
                role="status"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" aria-hidden="true" />
                Matrículas Abertas 2026
              </span>

              <h1
                id="hero-heading"
                className={[
                  'font-display font-bold text-4xl sm:text-6xl text-brand-navy leading-[1.15] tracking-tight transition-all duration-700',
                  entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                ].join(' ')}
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '200ms' }}
              >
                Aprender hoje,<br />
                <span className="relative inline-block font-handwritten text-[#0C459E] lowercase my-1">
                  transformar
                  <svg
                    className="absolute left-0 bottom-[-10px] w-full h-3 text-brand-yellow"
                    viewBox="0 0 100 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3 6C20 2 45 3 97 5M5 8C35 5 70 6 93 8"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{' '}
                o amanhã!
              </h1>

              <p
                className={[
                  'mt-6 text-base sm:text-lg text-brand-navy/80 leading-relaxed max-w-xl transition-all duration-700',
                  entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
                ].join(' ')}
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '350ms' }}
              >
                Educação Infantil e Ensino Fundamental I com metodologia ativa,
                ambiente acolhedor e professores que fazem a diferença.
              </p>

              {/* Lista de destaques */}
              <ul
                className={[
                  'mt-6 flex flex-col gap-2.5 transition-all duration-700',
                  entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                ].join(' ')}
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '450ms' }}
                aria-label="Destaques da escola"
              >
                {HIGHLIGHTS.map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-bold text-brand-navy/90">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
                      <svg className="w-3 h-3 stroke-current" fill="none" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div
                className={[
                  'mt-8 transition-all duration-700',
                  entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                ].join(' ')}
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '550ms' }}
              >
                <Link
                  to="/contato"
                  className="tap-target inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-sky text-white font-display font-bold text-sm uppercase tracking-wider hover:bg-brand-navy transition-all shadow-lg hover:shadow-xl shadow-brand-sky/20 hover:shadow-brand-navy/20"
                  aria-label="Conheça nossa escola"
                >
                  <svg className="w-4 h-4 stroke-current fill-none" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Conheça nossa escola
                </Link>
              </div>
            </div>

            {/* Conteúdo Direito - Foto Curvada e Doodles */}
            <div className="lg:col-span-7 relative flex justify-center w-full">
              <div className="relative w-full max-w-[540px] aspect-[4/3] sm:aspect-square">
                
                {/* Moldura de Fundo Ondulada do Recorte */}
                <div 
                  aria-hidden="true" 
                  className={[
                    'absolute inset-0 bg-[#A2D5FA]/30 rounded-[45%_55%_60%_40%_/_50%_40%_60%_50%] transition-transform duration-[1.4s] scale-105 pointer-events-none z-0',
                    entered ? 'rotate-3' : 'rotate-0',
                  ].join(' ')}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '100ms' }}
                />

                {/* Recorte da foto real com bordas orgânicas fluidas */}
                <div
                  className={[
                    'relative w-full h-full overflow-hidden shadow-2xl transition-all duration-[1.2s] z-10',
                    entered ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
                    'rounded-[40%_60%_50%_50%_/_60%_45%_55%_40%] border-8 border-white bg-white',
                  ].join(' ')}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  <img
                    src="/hero_teacher_parent.png"
                    alt="Coordenadora pedagógica sorridente conversando com uma mãe"
                    className="w-full h-full object-cover transition-transform duration-[1.5s] hover:scale-105"
                    loading="eager"
                  />
                </div>

                {/* DOODLE: Sol Alegre */}
                <div aria-hidden="true" className="absolute top-[-25px] right-[-15px] sm:right-5 text-brand-yellow w-14 h-14 pointer-events-none animate-[spin_30s_linear_infinite] z-20">
                  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round">
                    <circle cx="50" cy="50" r="18" />
                    <line x1="50" y1="10" x2="50" y2="22" />
                    <line x1="50" y1="78" x2="50" y2="90" />
                    <line x1="10" y1="50" x2="22" y2="50" />
                    <line x1="78" y1="50" x2="90" y2="50" />
                    <line x1="22" y1="22" x2="31" y2="31" />
                    <line x1="69" y1="69" x2="78" y2="78" />
                    <line x1="22" y1="69" x2="31" y2="60" />
                    <line x1="69" y1="22" x2="60" y2="31" />
                  </svg>
                </div>

                {/* DOODLE: Avião de Papel com Rastro */}
                <div aria-hidden="true" className="absolute top-[20%] left-[-30px] text-brand-sky/60 w-28 h-28 pointer-events-none hidden sm:block z-20">
                  <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
                    <path
                      d="M10 100 Q40 50 60 70 T100 30"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeDasharray="6 6"
                      fill="none"
                    />
                    <path
                      d="M93 25 L108 30 L98 42 Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                {/* DOODLE: Estrelinhas Lúdicas */}
                <div aria-hidden="true" className="absolute bottom-[10%] left-[-15px] text-[#3282F6] w-6 h-6 pointer-events-none animate-pulse z-20">
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 5L62 38H97L69 58L80 95L50 73L20 95L31 58L3 38H38L50 5Z" />
                  </svg>
                </div>
                <div aria-hidden="true" className="absolute top-[10%] left-[45%] text-white w-5 h-5 pointer-events-none animate-pulse z-20">
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 5L62 38H97L69 58L80 95L50 73L20 95L31 58L3 38H38L50 5Z" />
                  </svg>
                </div>

                {/* DOODLE: Nuvem */}
                <div aria-hidden="true" className="absolute bottom-[5%] right-[-15px] text-white/80 w-16 h-10 pointer-events-none hidden sm:block z-20">
                  <svg viewBox="0 0 100 60" fill="currentColor">
                    <path d="M20 50 C 20 40, 30 30, 45 35 C 55 25, 75 25, 80 40 C 90 40, 95 48, 90 55 C 85 60, 15 60, 20 50 Z" />
                  </svg>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Transição de Onda Suave na base para ligar ao bloco de baixo */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] sm:h-[60px] text-white fill-current">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,17.43,83.5,23,161.07,38.16,240.23,67.65,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* Faixa inferior de diferenciais (Pillars) */}
      <section className="bg-white py-12 border-b border-brand-sky-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-brand-sky-light/50">
            {FEATURES.map(({ icon, title, description }, index) => (
              <div 
                key={title} 
                className={[
                  'flex flex-col items-center text-center p-4 transition-all duration-500 hover:scale-[1.02]',
                  index > 0 ? 'pt-8 sm:pt-4 lg:pt-4' : ''
                ].join(' ')}
              >
                <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
                  {icon}
                </div>
                <h3 className="font-display font-bold text-[#0D3B8C] text-sm uppercase tracking-wider mb-2">
                  {title}
                </h3>
                <p className="text-xs text-brand-navy/70 leading-relaxed max-w-[240px]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
