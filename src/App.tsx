import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import HomePage from '@/pages/HomePage'
import SobrePage from '@/pages/SobrePage'
import GaleriaPage from '@/pages/GaleriaPage'
import NoticiasPage from '@/pages/NoticiasPage'
import CalendarioPage from '@/pages/CalendarioPage'
import DepoimentosPage from '@/pages/DepoimentosPage'
import ContatoPage from '@/pages/ContatoPage'
import EquipePage from '@/pages/EquipePage'
import NotFoundPage from '@/pages/NotFoundPage'

/* Rotas pré-renderizadas no build (scripts/prerender.mjs) */
export const ROUTES = ['/', '/sobre', '/galeria', '/noticias', '/calendario', '/depoimentos', '/equipe', '/contato']

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/galeria" element={<GaleriaPage />} />
        <Route path="/noticias" element={<NoticiasPage />} />
        <Route path="/calendario" element={<CalendarioPage />} />
        <Route path="/depoimentos" element={<DepoimentosPage />} />
        <Route path="/equipe" element={<EquipePage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
