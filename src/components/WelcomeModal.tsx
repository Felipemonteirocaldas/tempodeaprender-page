import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { IconClose, IconArrowRight, IconRibbon, IconPhone } from './icons'

export default function WelcomeModal() {
  const [rendered, setRendered] = useState(false)
  const [visible, setVisible] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

  const location = useLocation()
  const isHome = location.pathname === '/'

  /* Mostrar após 900ms a cada carregamento de página (apenas na home e apenas 1 vez por sessão) */
  useEffect(() => {
    if (!isHome || sessionStorage.getItem('setembro_amarelo_modal_seen')) return

    const timer = setTimeout(() => {
      setRendered(true)
      /* Dois frames para garantir que a transição CSS dispare após o mount */
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)))
      sessionStorage.setItem('setembro_amarelo_modal_seen', 'true')
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

  function handleGoToCampaign() {
    dismiss()
    setTimeout(() => {
      const el = document.getElementById('setembro-amarelo')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 200)
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
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      {/* Backdrop com desfoque */}
      <div
        aria-hidden="true"
        onClick={dismiss}
        className="absolute inset-0 bg-brand-dark/70 backdrop-blur-sm"
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        className="relative z-10 w-full max-w-[370px] sm:max-w-[400px] max-h-[92vh] flex flex-col rounded-3xl outline-none overflow-hidden bg-white shadow-2xl border border-amber-300/60"
        style={{
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.5), 0 0 35px rgba(245, 158, 11, 0.25)',
          transform: visible ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
          transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
        }}
      >
        {/* Botão fechar com alto contraste e blur */}
        <button
          type="button"
          onClick={dismiss}
          aria-label="Fechar banner do Setembro Amarelo"
          className="absolute top-3.5 right-3.5 z-30 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 backdrop-blur-md transition-all shadow-md hover:scale-105 active:scale-95"
        >
          <IconClose className="w-4 h-4" />
        </button>

        {/* Conteúdo com scroll suave para telas pequenas */}
        <div className="overflow-y-auto hide-scrollbar flex flex-col">
          {/* Banner oficial clicável */}
          <div
            onClick={handleGoToCampaign}
            className="relative cursor-pointer group bg-amber-50 overflow-hidden"
            title="Clique para saber mais sobre a campanha"
          >
            <img
              src="/banner-set-amarelo.png"
              alt="Banner Setembro Amarelo - Escola Tempo de Aprender"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              loading="eager"
            />

            {/* Selo sobreposto */}
            <div className="absolute top-3.5 left-3.5 z-20 bg-amber-400/95 text-brand-dark px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1.5 backdrop-blur-sm">
              <IconRibbon className="w-3.5 h-3.5 fill-brand-dark text-brand-dark" />
              Setembro Amarelo
            </div>

            {/* Gradiente sutil na base da imagem */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/70 to-transparent" />
          </div>

          {/* Corpo do modal com mensagem e ações */}
          <div className="px-5 pb-5 pt-1 relative z-10 bg-white flex flex-col gap-3">
            <div>
              <h2
                id="modal-title"
                className="font-display font-black text-xl text-brand-navy leading-tight"
              >
                A vida importa. Você importa! 💛
              </h2>
              <p className="text-xs text-brand-gray-mid mt-1 leading-relaxed">
                Falar sobre o que sentimos é um ato de coragem. Conheça as ações de acolhimento e bem-estar emocional na <strong className="text-brand-navy">Tempo de Aprender</strong>.
              </p>
            </div>

            {/* Linha decorativa Setembro Amarelo */}
            <div className="flex h-1 w-full rounded-full overflow-hidden bg-amber-100">
              <div className="w-1/3 bg-amber-400" />
              <div className="w-1/3 bg-brand-sky" />
              <div className="w-1/3 bg-brand-green" />
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col gap-2 pt-1">
              <button
                type="button"
                onClick={handleGoToCampaign}
                className="tap-target flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-amber-400 text-brand-dark font-display font-black text-sm hover:bg-amber-300 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>Conhecer Campanha na Escola</span>
                <IconArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:188"
                className="tap-target flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-brand-sky-pale text-brand-navy font-display font-bold text-xs hover:bg-brand-sky-light transition-colors"
                aria-label="Ligue 188 para o Centro de Valorização da Vida"
              >
                <IconPhone className="w-3.5 h-3.5 text-amber-600" />
                <span>Precisa conversar? <strong>Ligue 188 (CVV 24h)</strong></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
