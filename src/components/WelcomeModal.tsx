import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IconClose, IconArrowRight, IconSport, IconBook, IconStar, IconHeart } from './icons'

type ThemeType = 'copa' | 'matriculas' | 'festa-junina' | 'dia-criancas'

interface ThemeConfig {
  id: ThemeType
  imageSrc: string
  imageAlt: string
  badgeIcon: React.ElementType
  badgeText: string
  badgeColor: string
  title: React.ReactNode
  body: React.ReactNode
  buttonText: string
}

const THEMES: Record<ThemeType, ThemeConfig> = {
  copa: {
    id: 'copa',
    imageSrc: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&h=440&q=85&auto=format&fit=crop',
    imageAlt: 'Estádio iluminado durante a Copa do Mundo',
    badgeIcon: IconSport,
    badgeText: 'Copa do Mundo 2026',
    badgeColor: 'bg-brand-orange',
    title: <>Garanta a vaga antes<br />do apito final!</>,
    body: (
      <>
        2026 é o ano da <strong className="text-brand-navy">Copa do Mundo</strong> — e o melhor momento para garantir o futuro do seu filho. Matrículas abertas na <strong className="text-brand-navy">Tempo de Aprender</strong>!
      </>
    ),
    buttonText: 'Garantir minha vaga'
  },
  matriculas: {
    id: 'matriculas',
    imageSrc: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&h=440&q=85&auto=format&fit=crop',
    imageAlt: 'Crianças estudando e sorrindo',
    badgeIcon: IconBook,
    badgeText: 'Matrículas Abertas',
    badgeColor: 'bg-brand-sky-mid',
    title: <>O futuro começa<br />agora mesmo!</>,
    body: (
      <>
        Garanta o melhor ensino para o seu filho com metodologia ativa, ambiente seguro e professores que ensinam com muito amor.
      </>
    ),
    buttonText: 'Fazer matrícula'
  },
  'festa-junina': {
    id: 'festa-junina',
    imageSrc: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=900&h=440&q=85&auto=format&fit=crop',
    imageAlt: 'Decoração típica de festa junina',
    badgeIcon: IconStar,
    badgeText: 'Arraiá da Escola',
    badgeColor: 'bg-brand-orange-mid',
    title: <>Prepare-se para o<br />nosso Arraiá!</>,
    body: (
      <>
        Muita comida típica, brincadeiras, quadrilha e diversão para toda a família. Não fique de fora da festa mais animada do ano!
      </>
    ),
    buttonText: 'Saber mais'
  },
  'dia-criancas': {
    id: 'dia-criancas',
    imageSrc: 'https://images.unsplash.com/photo-1564429238817-393bd4286b2d?w=900&h=440&q=85&auto=format&fit=crop',
    imageAlt: 'Brinquedos educativos e lúdicos',
    badgeIcon: IconHeart,
    badgeText: 'Dia das Crianças',
    badgeColor: 'bg-brand-green-mid',
    title: <>Uma semana inteira<br />de diversão!</>,
    body: (
      <>
        Preparamos uma programação super especial com atividades lúdicas, gincanas e muitas surpresas para comemorar o Dia das Crianças.
      </>
    ),
    buttonText: 'Ver programação'
  }
}

// Alterar o tema ativo aqui:
const ACTIVE_THEME: ThemeType = 'copa'

export default function WelcomeModal() {
  const [rendered, setRendered] = useState(false)
  const [visible, setVisible] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

  const theme = THEMES[ACTIVE_THEME]

  const location = useLocation()
  const isHome = location.pathname === '/'

  /* Mostrar após 900ms a cada carregamento de página (apenas na home e apenas 1 vez por sessão) */
  useEffect(() => {
    if (!isHome || sessionStorage.getItem('welcome_modal_seen')) return

    const timer = setTimeout(() => {
      setRendered(true)
      /* Dois frames para garantir que a transição CSS dispare após o mount */
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)))
      sessionStorage.setItem('welcome_modal_seen', 'true')
    }, 900)
    return () => clearTimeout(timer)
  }, [isHome])

  /* Focar o dialog ao abrir */
  useEffect(() => {
    if (visible) dialogRef.current?.focus()
  }, [visible])

  /* Travar scroll do body enquanto o modal está aberto */
  useEffect(() => {
    if (!rendered) return
    document.body.style.overflow = visible ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [visible, rendered])

  function dismiss() {
    setVisible(false)
    setTimeout(() => setRendered(false), 350)
  }

  /* Fechar com Escape */
  useEffect(() => {
    if (!visible) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') dismiss()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [visible])

  if (!rendered) return null

  const BadgeIcon = theme.badgeIcon

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center px-4 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={dismiss}
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        className="relative z-10 w-full max-w-sm sm:max-w-md bg-white outline-none"
        style={{
          borderRadius: '40px 40px 10px 40px', // Formato mais orgânico e lúdico
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 40px rgba(50, 130, 246, 0.2)',
          transform: visible ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(40px)',
          transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)', // Efeito elástico (bouncy)
        }}
      >
        {/* Botão fechar orgânico */}
        <button
          type="button"
          onClick={dismiss}
          aria-label="Fechar banner"
          className="absolute top-4 right-4 z-20 tap-target w-10 h-10 flex items-center justify-center rounded-full bg-white text-brand-navy shadow-lg hover:bg-brand-red hover:text-white hover:scale-110 hover:-rotate-12 transition-all duration-300"
        >
          <IconClose className="w-5 h-5" />
        </button>

        {/* Imagem do tema com corte ondulado / curvo */}
        <div className="relative h-60 overflow-hidden" style={{ borderRadius: '40px 40px 40px 0' }}>
          <img
            src={theme.imageSrc}
            alt={theme.imageAlt}
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Gradiente suave */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent opacity-90"
          />

          {/* Badge + título sobre a imagem */}
          <div className="absolute bottom-6 left-6 right-10">
            <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-xs font-display font-black uppercase tracking-widest shadow-md ${theme.badgeColor}`}>
              <BadgeIcon className="w-4 h-4" aria-hidden="true" />
              {theme.badgeText}
            </span>
            <h2
              id="modal-title"
              className="mt-3 font-display font-black text-3xl text-white leading-tight drop-shadow-sm"
            >
              {theme.title}
            </h2>
          </div>
        </div>

        {/* Corpo super lúdico */}
        <div className="px-6 pt-6 pb-8">
          <p className="text-base text-brand-gray-dark leading-relaxed font-medium">
            {theme.body}
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              to="/contato"
              onClick={dismiss}
              className="tap-target flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-brand-orange text-brand-navy font-display font-black text-lg hover:brightness-110 transition-all shadow-[0_6px_0_rgba(200,60,40,1)] hover:translate-y-1 hover:shadow-[0_2px_0_rgba(200,60,40,1)] active:translate-y-1.5 active:shadow-none"
            >
              {theme.buttonText} <IconArrowRight className="w-6 h-6 animate-pulse" />
            </Link>
            <button
              type="button"
              onClick={dismiss}
              className="tap-target mt-2 text-sm text-brand-gray-mid hover:text-brand-navy transition-colors font-bold font-display uppercase tracking-wider"
            >
              Agora não, obrigado
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
