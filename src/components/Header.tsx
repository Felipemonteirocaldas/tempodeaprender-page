import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IconMenu, IconClose } from './icons'
import SmilingClock from './SmilingClock'

interface NavLink {
  to: string
  label: string
}

const NAV_LINKS: NavLink[] = [
  { to: '/',              label: 'A Escola'        },
  { to: '/sobre',         label: 'Proposta Pedagógica' },
  { to: '/equipe',        label: 'Turmas'          },
  { to: '/diferenciais',  label: 'Galeria'         },
  { to: '/depoimentos',   label: 'Notícias'        },
  { to: '/contato',       label: 'Contato'         },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'

  /* Muda aparência ao rolar */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Fecha menu ao mudar de rota */
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const transparent = isHome && !scrolled && !menuOpen

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        transparent
          ? 'bg-transparent border-b border-white/10'
          : 'bg-white/95 backdrop-blur-md border-b border-brand-sky-light shadow-sm shadow-brand-navy/5',
      ].join(' ')}
    >
      {/* Faixa do uniforme — só aparece quando scrollado ou página interna */}
      <div
        aria-hidden="true"
        className={[
          'flex h-0.5 transition-all duration-300',
          scrolled || !isHome ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
      >
        <span className="flex-[3] bg-brand-sky" />
        <span className="flex-[2] bg-brand-navy" />
        <span className="flex-[1] bg-white" />
        <span className="flex-[1] bg-brand-green" />
        <span className="flex-[1] bg-brand-orange" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 tap-target group"
            aria-label="Tempo de Aprender — Página inicial"
          >
            <SmilingClock className="w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col select-none leading-none">
              <span className="text-[9px] tracking-[0.25em] font-extrabold text-brand-navy/80">
                ESCOLA
              </span>
              <span className="text-xs font-black tracking-wide text-brand-navy">
                TEMPO DE
              </span>
              <span className="text-sm font-black tracking-wider flex">
                <span className="text-brand-red">A</span>
                <span className="text-brand-green">P</span>
                <span className="text-brand-yellow">R</span>
                <span className="text-brand-sky">E</span>
                <span className="text-brand-red">N</span>
                <span className="text-brand-green">D</span>
                <span className="text-brand-yellow">E</span>
                <span className="text-brand-sky">R</span>
              </span>
            </div>
          </Link>

          {/* Nav desktop */}
          <nav aria-label="Menu principal" className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ to, label }) => {
              const isActive = location.pathname === to
              return (
                <Link
                  key={to}
                  to={to}
                  className={[
                    'tap-target px-3 flex items-center text-xs font-black uppercase tracking-wider transition-colors duration-200 rounded relative group',
                    isActive
                      ? 'text-brand-navy'
                      : 'text-brand-navy/80 hover:text-brand-sky',
                  ].join(' ')}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                  {/* Linha hover animada e elegante */}
                  <span
                    aria-hidden="true"
                    className={[
                      'absolute bottom-3 left-3 right-3 h-0.5 rounded-full transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100',
                      isActive ? 'scale-x-100 bg-brand-sky opacity-100' : 'bg-brand-sky/60 opacity-0 group-hover:opacity-100',
                    ].join(' ')}
                  />
                </Link>
              )
            })}
          </nav>

          {/* CTA desktop — FALE CONOSCO com coração */}
          <Link
            to="/contato"
            className={[
              'hidden md:flex tap-target items-center gap-2 px-5 py-2.5 rounded-full font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg',
              transparent
                ? 'bg-brand-sky text-white hover:bg-brand-navy'
                : 'bg-brand-sky text-white hover:bg-brand-navy',
            ].join(' ')}
            aria-label="Fale conosco"
          >
            <svg className="w-4 h-4 stroke-current fill-none" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="relative">Fale Conosco</span>
          </Link>

          {/* Botão menu mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden tap-target flex items-center justify-center rounded text-brand-navy"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Menu móvel"
        className={[
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          menuOpen ? 'max-h-[450px] opacity-100' : 'max-h-0 opacity-0',
          'bg-white/95 backdrop-blur-md border-t border-brand-sky-light',
        ].join(' ')}
      >
        <ul className="flex flex-col gap-1 px-4 py-3">
          {NAV_LINKS.map(({ to, label }) => {
            const isActive = location.pathname === to
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={[
                    'tap-target flex items-center px-2 text-sm font-bold uppercase tracking-wider transition-colors rounded',
                    isActive ? 'text-brand-navy' : 'text-brand-navy/70 hover:text-brand-navy',
                  ].join(' ')}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {/* Indicador lateral de seção ativa */}
                  <span
                    aria-hidden="true"
                    className={[
                      'w-1 rounded-full mr-3 transition-all duration-200 flex-shrink-0',
                      isActive ? 'h-4 bg-brand-sky' : 'h-0 bg-transparent',
                    ].join(' ')}
                  />
                  {label}
                </Link>
              </li>
            )
          })}
          <li>
            <Link
              to="/contato"
              className="tap-target mt-2 flex items-center justify-center gap-2 rounded-full bg-brand-sky text-white font-display font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              <svg className="w-4 h-4 stroke-current fill-none" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Fale Conosco
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
