import { motion } from 'framer-motion';

export default function PageHeader({ title, subtitle, backgroundImage }) {
  return (
    <section className="relative min-h-[450px] md:min-h-[550px] flex flex-col justify-end pb-24 overflow-hidden rounded-b-[3rem] shadow-soft">
      {/* Background */}
      <div className="absolute inset-0">
        {backgroundImage ? (
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: 'linear' }}
            src={backgroundImage} 
            alt="" 
            className="w-full h-full object-cover" 
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent" />
        {/* Dark overlay at the top for better menu visibility */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-primary-dark/90 via-primary-dark/40 to-transparent" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] mix-blend-screen" />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-secondary" />
            <span className="font-heading text-xs font-bold tracking-[0.2em] text-secondary uppercase">
              FHCC
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight mb-6">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
