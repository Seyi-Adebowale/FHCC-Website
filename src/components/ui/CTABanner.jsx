import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTABanner({ heading, buttonText, buttonLink, variant = 'primary' }) {
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';
  
  // Refined gradients for a premium look
  const bgClass = isPrimary
    ? 'bg-gradient-to-r from-primary-dark to-primary'
    : isSecondary
    ? 'bg-gradient-to-r from-[#E07A5F] to-[#F4A261]' // Elegant coral gradient
    : 'bg-white border border-gray-100 shadow-soft'; // Light variant

  const textClass = isPrimary || isSecondary ? 'text-white' : 'text-primary-dark';
  const headingClass = isPrimary || isSecondary ? 'text-white' : 'text-primary-dark';
  
  const btnClass = isPrimary || isSecondary
    ? 'bg-white text-primary-dark hover:bg-gray-50 shadow-lg'
    : 'bg-primary text-white hover:bg-primary-dark shadow-lg';

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`${bgClass} rounded-[2rem] md:rounded-[3rem] p-10 md:p-16 lg:p-20 relative overflow-hidden group`}
        >
          {/* Subtle animated blobs */}
          {(isPrimary || isSecondary) && (
            <>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 transition-transform duration-1000 group-hover:scale-150" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 transition-transform duration-1000 group-hover:scale-150" />
            </>
          )}

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold max-w-2xl leading-tight ${headingClass}`}>
              {heading}
            </h2>
            <Link
              to={buttonLink}
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-full transition-all duration-300 hover:-translate-y-1 flex-shrink-0 ${btnClass}`}
            >
              {buttonText}
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
