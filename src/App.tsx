import { Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import HomePage from './pages/HomePage'
import OverviewPage from './pages/OverviewPage'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route
            path="*"
            element={<p className="py-16 text-center text-gray-500">Halaman belum tersedia.</p>}
          />
        </Routes>
      </main>
      <Footer />
    </>
  )
}