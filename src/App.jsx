import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MuquiAssistant from './components/MuquiAssistant'
import WhatsAppButton from './components/WhatsAppButton'

import Home from './pages/Home'
import ProgramaPage from './pages/ProgramaPage'
import ParticipantesPage from './pages/ParticipantesPage'
import PreciosPage from './pages/PreciosPage'
import FeriaTecnologicaPage from './pages/FeriaTecnologicaPage'
import GaleriaPage from './pages/GaleriaPage'
import InscripcionDetallePage from './pages/InscripcionDetallePage'

// Helper para hacer scroll arriba al cambiar de página o navegar a un hash (#ubicacion, etc)
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 150)
      return () => clearTimeout(timer)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-dark-bg text-white font-montserrat flex flex-col justify-between">
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programa" element={<ProgramaPage />} />
            <Route path="/participantes" element={<ParticipantesPage />} />
            <Route path="/ponentes" element={<ParticipantesPage defaultTab="ponentes" />} />
            <Route path="/auspiciadores" element={<ParticipantesPage defaultTab="auspiciadores" />} />
            <Route path="/colaboradores" element={<ParticipantesPage defaultTab="colaboradores" />} />
            <Route path="/precios" element={<InscripcionDetallePage />} />
            <Route path="/inversion" element={<InscripcionDetallePage />} />
            <Route path="/inscripcion" element={<InscripcionDetallePage />} />
            <Route path="/feria-tecnologica" element={<FeriaTecnologicaPage />} />
            <Route path="/galeria" element={<GaleriaPage />} />
          </Routes>
        </div>

        {/* Widgets Flotantes de interacción permanente */}
        <MuquiAssistant />
        <WhatsAppButton />

        <Footer />
      </div>
    </Router>
  )
}
