import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  // We need light text based on scroll position for ALL pages because they all have a dark PageHeader or Hero
  const needLightText = !isScrolled && !isMobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'pt-4 px-4 sm:px-6' : 'pt-6 px-4 sm:px-8'
      }`}
    >
      <div
        className={`mx-auto max-w-7xl transition-all duration-300 ${
          isScrolled
            ? 'bg-white/30 backdrop-blur-md backdrop-saturate-150 border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm'
            : 'bg-transparent border border-transparent rounded-full px-4 sm:px-6 py-2 sm:py-3'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group z-50">
            <div
              className={`p-1.5 rounded-full transition-colors duration-300 ${
                isScrolled ? 'bg-white shadow-soft' : 'bg-white/10 backdrop-blur-md'
              }`}
            >
              <img
                src="/images/logo.webp"
                alt="Flower House Creche Care Logo"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full"
              />
            </div>
            <div className={`hidden sm:block transition-colors duration-300 ${
              needLightText ? 'text-white' : 'text-primary-dark'
            }`}>
              <h1 className="font-heading text-[15px] md:text-base font-bold leading-tight tracking-[0.05em] text-inherit">
                FLOWER HOUSE
              </h1>
              <p className={`font-heading text-[11px] md:text-xs font-semibold tracking-widest uppercase transition-colors duration-300 text-inherit ${
                needLightText ? 'text-white/80' : 'text-text-muted'
              }`}>
                CRECHE CARE
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 md:py-3 text-sm font-medium rounded-full transition-colors duration-300 group ${
                    needLightText
                      ? 'text-white/90 hover:text-white'
                      : isActive
                        ? 'text-primary-dark font-bold bg-primary/5'
                        : 'text-text-muted hover:text-primary-dark hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/enrol"
              className={`ml-2 px-6 py-3 font-semibold text-sm rounded-full transition-colors duration-300 ${
                needLightText
                  ? 'bg-secondary text-white hover:bg-[#E07A5F]'
                  : 'bg-primary text-white hover:bg-primary-dark'
              }`}
            >
              Enrol Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`md:hidden p-2.5 rounded-full transition-all duration-300 z-50 ${
              isMobileOpen
                ? 'text-primary-dark bg-gray-100'
                : needLightText
                  ? 'text-white bg-white/10 backdrop-blur-md'
                  : 'text-primary-dark bg-gray-100'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
        {isMobileOpen && (
          <div
            className="absolute top-full left-4 right-4 mt-2 bg-white rounded-3xl shadow-float p-6 flex flex-col md:hidden z-40 border border-gray-100 overflow-hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <div key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileOpen(false)}
                      className={`block px-5 py-4 rounded-2xl text-base font-medium transition-all ${
                        isActive
                          ? 'bg-primary/5 text-primary-dark font-bold'
                          : 'text-text-muted hover:bg-gray-50 hover:text-primary-dark'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </div>
                );
              })}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link
                  to="/enrol"
                  onClick={() => setIsMobileOpen(false)}
                  className="block w-full text-center px-6 py-4 bg-primary text-white font-bold rounded-2xl shadow-soft"
                >
                  Enrol Your Child
                </Link>
              </div>
            </nav>
          </div>
        )}
    </header>
  );
}
