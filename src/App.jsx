import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import FacilitiesPage from './pages/FacilitiesPage';
import ContactPage from './pages/ContactPage';
import EnrolPage from './pages/EnrolPage';
import ThankYouPage from './pages/ThankYouPage';

export default function App() {
  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/enrol" element={<EnrolPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
