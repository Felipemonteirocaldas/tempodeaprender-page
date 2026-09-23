import { useEffect, useRef } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WelcomeModal from '@/components/WelcomeModal'
import SEO from '@/components/SEO'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function MainLayout() {
  const location = useLocation()

  /* Anima só nas trocas de rota — no primeiro carregamento o conteúdo aparece direto (melhor LCP) */
  const firstPath = useRef(location.pathname)
  const navigated = useRef(false)
  if (location.pathname !== firstPath.current) navigated.current = true

  return (
    <>
      <SEO />
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:tap-target focus:px-4 focus:rounded-lg focus:bg-brand-sky focus:text-white focus:font-bold focus:text-sm"
      >
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="main-content" className="relative min-h-screen">
        {/* Transição de entrada em CSS — sem atrasar a navegação com animação de saída */}
        <div key={location.pathname} className={navigated.current ? 'page-enter' : undefined}>
          <Outlet />
        </div>
      </main>
      <Footer />
      <WelcomeModal />
    </>
  )
}
