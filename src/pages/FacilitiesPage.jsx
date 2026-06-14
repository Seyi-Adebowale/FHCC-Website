import { motion } from 'framer-motion';
import PageHeader from '../components/layout/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import CTABanner from '../components/ui/CTABanner';
import { facilities, playAreas } from '../data/facilities';
import SEO from '../components/SEO';

export default function FacilitiesPage() {
  return (
    <div className="bg-warm-white">
      <SEO title="Our Facilities" />
      <PageHeader
        title="Our Facilities"
        subtitle="A sneak peek into our world of learning, play, and growth."
        backgroundImage="/images/carousel-imgs/MainClassroom.webp"
      />

      {/* Facilities Showcase */}
      <section className="py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="A Sneak Peek Into Our World" kicker="Environment" subtitle="Modern, safe, and inspiring spaces designed for young learners to thrive." />
          
          <div className="space-y-24 mt-20">
            {facilities.map((facility, index) => {
              const isReversed = index % 2 === 1;
              return (
                <motion.div
                  key={facility.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
                >
                  <div className="w-full lg:w-7/12">
                    <div className="relative rounded-[3rem] overflow-hidden shadow-float group">
                      <img
                        src={facility.image}
                        alt={facility.title}
                        loading="lazy"
                        className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-5/12">
                    <motion.div
                      initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-secondary/10 text-secondary font-bold text-lg mb-6">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-dark mb-6 leading-tight">{facility.title}</h3>
                      <p className="text-text-muted text-lg leading-relaxed">{facility.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Play Area Grid */}
      <section className="py-16 md:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Play Areas" kicker="Recreation" subtitle="Where fun meets fitness, creativity, and imagination." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
            {playAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[2.5rem] shadow-soft hover:shadow-float transition-all duration-500"
              >
                <img
                  src={area.image}
                  alt={area.title}
                  loading="lazy"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-2xl font-heading font-bold text-white">{area.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Interested in enrolling?" buttonText="Enrol Now" buttonLink="/enrol" variant="secondary" />
    </div>
  );
}
