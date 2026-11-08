import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import ScrollToTop from './components/layout/ScrollToTop'
import ErrorBoundary from './components/ui/ErrorBoundary'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ExplorePage from './pages/ExplorePage'
import HomePage from './pages/HomePage'
import OverviewPage from './pages/OverviewPage'

function AppRoutes() {
  const { pathname } = useLocation()

  return (
    <ErrorBoundary key={pathname}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="*" element={<p className="py-16 text-center text-muted">Page not found.</p>} />
      </Routes>
    </ErrorBoundary>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  )
}
