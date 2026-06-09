import { useEffect } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WelcomeModal from '@/components/WelcomeModal'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function MainLayout() {
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <>
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:tap-target focus:px-4 focus:rounded-lg focus:bg-brand-sky focus:text-white focus:font-bold focus:text-sm"
      >
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="main-content" className="relative min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {outlet}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <WelcomeModal />
    </>
  )
}
