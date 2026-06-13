import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function LightboxModal({ images, currentIndex, onClose, onNext, onPrev }) {
  if (currentIndex === null || currentIndex === undefined) return null;
  const image = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {currentIndex > 0 && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {currentIndex < images.length - 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        )}

        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl max-h-[85vh] relative"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="max-w-full max-h-[80vh] object-contain rounded-xl"
          />
          {image.desc && (
            <p className="text-center text-white/80 mt-3 text-sm">{image.desc}</p>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function GalleryGrid({ images, categories }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <div className="space-y-20 md:space-y-28">
      {categories.map((cat) => {
        // Find images for this category
        const catImages = images.filter((img) => img.category === cat.id);
        
        // Skip rendering the section if there are no images for it
        if (catImages.length === 0) return null;

        return (
          <section key={cat.id} className="relative">
            {/* Event Header */}
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-primary-dark mb-10 flex items-center gap-4">
              <span className="w-8 h-1.5 bg-secondary rounded-full"></span>
              {cat.label}
            </h2>
            
            {/* Image Grid for Event */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {catImages.map((image) => {
                  const globalIndex = images.findIndex((img) => img.id === image.id);
                  
                  return (
                    <motion.div
                      key={image.id}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "100px" }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="break-inside-avoid group cursor-pointer"
                      onClick={() => setLightboxIndex(globalIndex)}
                    >
                      <div className="relative overflow-hidden rounded-2xl bg-sage-light/20 aspect-square">
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-white text-sm font-medium">{image.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </section>
        );
      })}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <LightboxModal
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={() => setLightboxIndex(Math.min(lightboxIndex + 1, images.length - 1))}
          onPrev={() => setLightboxIndex(Math.max(lightboxIndex - 1, 0))}
        />
      )}
    </div>
  );
}
