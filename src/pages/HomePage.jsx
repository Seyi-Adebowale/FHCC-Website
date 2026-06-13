import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Quote, Clock, CalendarDays, BookOpen, TreePine, Sparkles, Apple, Users, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import CTABanner from '../components/ui/CTABanner';
import { servicesPreview } from '../data/services';
import { testimonials } from '../data/testimonials';
import { whyChooseUs } from '../data/whyChooseUs';

const iconMap = { Clock, CalendarDays, BookOpen, TreePine, Sparkles, Apple, Users, ShieldCheck };

const carouselImages = [
  { src: '/images/carousel-imgs/Landscape.webp', alt: 'Beautiful landscape view of Flower House Creche Care' },
  { src: '/images/carousel-imgs/MainClassroom.webp', alt: 'Main Classroom' },
  { src: '/images/carousel-imgs/KidsLibrary.webp', alt: "Kids' Library" },
];

const homeGalleryImages = [
  '/images/hg1.webp', '/images/hg2.webp', '/images/hg3.webp', '/images/hg5.webp',
  '/images/lif6.webp', '/images/hg4.webp', '/images/hg6.webp', '/images/bicy.webp',
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-warm-white">
      <SEO title="Home" />
      {/* ======================== PREMIUM FULL-SCREEN HERO ======================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={carouselImages[currentSlide].src}
              alt={carouselImages[currentSlide].alt}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          {/* Gradient Overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/50 to-primary-dark/80" />
        </div>

        {/* Hero Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">Welcome to FHCC</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white leading-tight mb-6 drop-shadow-lg"
          >
            Where Every Child <br className="hidden sm:block" />
            <span className="text-secondary italic font-accent font-normal px-2">Blossoms</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-lg lg:text-xl text-white/80 font-light mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Providing a world-class foundation for your child through premium care and early education in an enriching, secure environment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Link
              to="/enrol"
              className="inline-flex items-center justify-center gap-3 px-8 py-3 md:py-4 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-[0_8px_30px_rgba(224,122,95,0.4)] hover:shadow-[0_12px_40px_rgba(224,122,95,0.6)] transition-all duration-300 hover:-translate-y-1"
            >
              Enrol Your Child
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/facilities"
              className="inline-flex items-center justify-center gap-3 px-8 py-3 md:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-full border border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              Explore Facilities
            </Link>
          </motion.div>
        </div>

        {/* Refined Carousel Controls */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentSlide ? 'w-12 bg-white' : 'w-4 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ======================== SERVICES ======================== */}
      <section className="py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Premium Services" kicker="Excellence" subtitle="Tailored programs designed to nurture, educate, and inspire your child at every stage of their early development." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16">
            {servicesPreview.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="bg-white rounded-[2.5rem] p-6 lg:p-8 shadow-soft hover:shadow-float transition-all duration-500 border border-gray-50 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 mb-6 rounded-full bg-sage-light/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <img src={service.image} alt={service.title} className="w-10 h-10 object-contain" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary-dark mb-3">{service.title}</h3>
                <p className="text-text-muted leading-relaxed mb-6 flex-grow">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 font-bold text-secondary group-hover:text-secondary-light transition-colors"
                >
                  Discover more <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== BENTO GRID: WHY CHOOSE US ======================== */}
      <section className="py-16 md:py-20 bg-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="The FHCC Advantage" kicker="Why Us" subtitle="We go above and beyond to provide an exceptional environment for your child's growth." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            {whyChooseUs.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              // Make some items span 2 columns for a bento box look
              const isLarge = index === 0 || index === 3;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-warm-white rounded-[2rem] p-6 flex flex-col justify-between group hover:bg-primary-dark hover:text-white transition-colors duration-500 ${
                    isLarge ? 'md:col-span-2' : 'col-span-1'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-500 ${
                    isLarge ? 'bg-white text-primary-dark group-hover:bg-white/10 group-hover:text-white' : 'bg-white text-secondary group-hover:bg-white/10 group-hover:text-secondary-light'
                  }`}>
                    {IconComponent && <IconComponent size={28} />}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-white transition-colors text-primary-dark">{item.title}</h3>
                    <p className="text-sm text-text-muted group-hover:text-white/80 transition-colors leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================== ELEGANT TESTIMONIALS ======================== */}
      <section className="py-16 md:py-20 bg-primary-dark relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow" style={{ animationDuration: '60s' }}>
            <path d="M50 0 C 80 0 100 20 100 50 C 100 80 80 100 50 100 C 20 100 0 80 0 50 C 0 20 20 0 50 0 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Quote size={48} className="text-secondary mx-auto mb-12 opacity-80" />
          
          <div className="min-h-[280px] flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7 }}
                className="px-4 md:px-16"
              >
                <p className="text-2xl md:text-3xl lg:text-4xl text-white font-accent italic leading-snug mb-10 font-light">
                  &ldquo;{testimonials[testimonialIndex].quote}&rdquo;
                </p>
                <div className="flex flex-col items-center">
                  <p className="text-white font-bold tracking-wide uppercase text-sm mb-1">{testimonials[testimonialIndex].author}</p>
                  <p className="text-white/50 text-xs tracking-widest uppercase">Parent</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* ======================== GALLERY SHOWCASE ======================== */}
      <section className="py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Moments of Joy" kicker="Gallery" subtitle="A glimpse into the daily life, learning, and laughter at FHCC." />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
            {homeGalleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="relative overflow-hidden rounded-[2rem] group aspect-square"
              >
                <img
                  src={src}
                  alt="FHCC Gallery Moment"
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/20 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary-dark font-bold rounded-full shadow-soft border border-gray-100 hover:shadow-float transition-all duration-300 hover:-translate-y-1"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ======================== LATEST UPDATES (FACEBOOK) ======================== */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Latest Updates" kicker="Stay Connected" subtitle="Follow our journey and stay up to date with the latest news, activities, and events at FHCC." align="center" />
          
          <div className="mt-16 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[2rem] shadow-float p-2 sm:p-4 border border-gray-50 overflow-hidden w-full max-w-[530px] flex justify-center"
            >
              <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffhcrechecare%2F&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                width="500" 
                height="600" 
                style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="FHCC Facebook Feed"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================== FINAL CTA ======================== */}
      <CTABanner
        heading="Begin your child's journey with us"
        buttonText="Enrol Now"
        buttonLink="/enrol"
        variant="primary"
      />
    </div>
  );
}
