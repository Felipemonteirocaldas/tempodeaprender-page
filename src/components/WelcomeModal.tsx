import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IconClose, IconArrowRight, IconBook } from './icons'

export default function WelcomeModal() {
  const [rendered, setRendered] = useState(false)
  const [visible, setVisible] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

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

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center px-4 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={dismiss}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        className="relative z-10 w-full max-w-[380px] rounded-2xl outline-none overflow-hidden"
        style={{
          backgroundColor: '#265CA1', // Um tom azul inspirado na imagem
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 40px rgba(0, 0, 0, 0.1)',
          transform: visible ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
          transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
        }}
      >
        {/* Botão fechar */}
        <button
          type="button"
          onClick={dismiss}
          aria-label="Fechar banner"
          className="absolute top-4 right-4 z-20 tap-target w-8 h-8 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm transition-colors"
        >
          <IconClose className="w-4 h-4" />
        </button>

        {/* Imagem do tema e overlay */}
        <div className="relative h-[200px] w-full">
          <img
            src="/modal-bg.png"
            alt="Ilustração lúdica de uma escola"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Degradê para fundir a imagem com o fundo */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#265CA1] via-[#265CA1]/40 to-transparent" />
        </div>

        {/* Corpo do modal */}
        <div className="px-6 pb-6 relative z-10 -mt-8">
          
          <div className="mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#DF5C11] text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
              <IconBook className="w-3.5 h-3.5" aria-hidden="true" />
              Campanha de meio de ano
            </span>
          </div>
          
          <h2
            id="modal-title"
            className="font-display font-black text-[26px] text-white leading-tight drop-shadow-sm mb-4"
          >
            Matrículas Abertas<br />de Meio de Ano!
          </h2>
          
          {/* Linha divisória colorida (azul, verde, amarelo/laranja, amarelo) */}
          <div className="flex h-[3px] w-full rounded-full overflow-hidden mb-5 bg-[#007BFF]">
            <div className="w-1/4 bg-[#007BFF]"></div>
            <div className="w-1/4 bg-brand-green"></div>
            <div className="w-1/4 bg-brand-red"></div>
            <div className="w-1/4 bg-brand-yellow"></div>
          </div>
          
          <p className="text-sm text-white/90 leading-relaxed font-medium mb-6">
            O segundo semestre está chegando com novas descobertas! Garanta o melhor ensino para o seu filho com metodologia lúdica, afeto e ambiente seguro na{' '}
            <span className="text-brand-yellow font-bold">Tempo de Aprender</span>.
          </p>

          <Link
            to="/contato"
            onClick={dismiss}
            className="tap-target flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#007BFF] text-white font-display font-bold text-sm hover:bg-[#0069d9] transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            Fazer Matrícula Já <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
