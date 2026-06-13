import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, kicker, light = false, align = 'center' }) {
  return (
    <div className={`mb-10 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {kicker && (
          <div className={`inline-flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
            <div className="w-8 h-px bg-secondary opacity-60" />
            <span className="font-heading text-xs font-bold tracking-[0.2em] text-secondary uppercase">
              {kicker}
            </span>
            <div className="w-8 h-px bg-secondary opacity-60" />
          </div>
        )}
        
        <h2 
          className={`text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight mb-6 ${
            light ? 'text-white' : 'text-primary-dark'
          }`}
        >
          {title}
        </h2>
        
        {subtitle && (
          <p 
            className={`text-lg md:text-xl font-light leading-relaxed max-w-2xl ${
              align === 'center' ? 'mx-auto' : ''
            } ${light ? 'text-white/80' : 'text-text-muted'}`}
          >
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
