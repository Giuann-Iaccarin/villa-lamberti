import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Camere from './pages/Camere'
import Territorio from './pages/Territorio'
import Colazione from './pages/Colazione'
import ComeRaggiungerci from './pages/ComeRaggiungerci'
import Contatti from './pages/Contatti'
import Prenota from './pages/Prenota'

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camere" element={<Camere />} />
          <Route path="/territorio" element={<Territorio />} />
          <Route path="/colazione" element={<Colazione />} />
          <Route path="/come-raggiungerci" element={<ComeRaggiungerci />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/prenota" element={<Prenota />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}
