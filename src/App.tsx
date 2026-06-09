import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import HomePage from '@/pages/HomePage'
import SobrePage from '@/pages/SobrePage'
import DiferenciaisPage from '@/pages/DiferenciaisPage'
import DepoimentosPage from '@/pages/DepoimentosPage'
import ContatoPage from '@/pages/ContatoPage'
import EquipePage from '@/pages/EquipePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/diferenciais" element={<DiferenciaisPage />} />
          <Route path="/depoimentos" element={<DepoimentosPage />} />
          <Route path="/equipe" element={<EquipePage />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
