import { motion } from 'framer-motion';
import { Baby, Blocks, GraduationCap, Backpack, CalendarHeart } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import CTABanner from '../components/ui/CTABanner';
import SectionHeading from '../components/ui/SectionHeading';
import { services } from '../data/services';
import SEO from '../components/SEO';

const iconMap = { Baby, Blocks, GraduationCap, Backpack, CalendarHeart };

export default function ServicesPage() {
  return (
    <div className="bg-warm-white">
      <SEO title="Our Services" />
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive, world-class child care programs tailored for every stage of your child's development."
        backgroundImage="/images/SERVICES.webp"
      />

      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Programs Designed for Growth" kicker="Our Programs" align="center" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-16 md:mt-20">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-[3rem] p-8 md:p-12 shadow-soft hover:shadow-float transition-all duration-500 group border border-gray-50 flex flex-col relative overflow-hidden"
                >
                  {/* Background Soft Glow */}
                  <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl ${service.color} rounded-full blur-[100px] opacity-30 -translate-y-1/3 translate-x-1/3 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 pointer-events-none`} />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                      <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center flex-shrink-0 shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 bg-gradient-to-br ${service.color}`}>
                        {IconComponent && <IconComponent size={36} className="text-white drop-shadow-sm" />}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-primary-dark">{service.title}</h3>
                    </div>
                    
                    <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8 font-medium">
                      {service.summary}
                    </p>

                    <div className="w-16 h-1 bg-gradient-to-r from-gray-200 to-transparent rounded-full mb-8"></div>
                    
                    <p className="text-text-muted leading-relaxed whitespace-pre-line flex-grow text-[17px]">
                      {service.details}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner heading="Take a look at our facilities" buttonText="Explore Facilities" buttonLink="/facilities" variant="warm" />
    </div>
  );
}
