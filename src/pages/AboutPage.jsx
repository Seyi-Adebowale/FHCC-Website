import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import CTABanner from '../components/ui/CTABanner';
import FAQAccordion from '../components/ui/FAQAccordion';
import { faqItems } from '../data/faq';

const qualityItems = [
  'We ensure that the environment is secured, clean and conducive for kids',
  'We ensure that kids develop in a naturally nurtured playground',
  'We expose kids to vocational education through fun, games, art, music and TV-Jokes',
  'We connect pedagogy to internet and audio visual aids',
  "We provide Kids' Library as a learning site",
  'We carefully select our tutors/kids nurses and motivate them to meet our expectations',
  'We lay sustainable foundation for Basic Education using the NERDC / UNICEF Curriculum and the Approved National Curriculum For Nursery Schools',
];

export default function AboutPage() {
  return (
    <div className="bg-warm-white">
      <PageHeader
        title="About Us"
        subtitle="Discover the Flower House Creche Care story and our commitment to excellence."
        backgroundImage="/images/carousel-imgs/Landscape.webp"
      />

      {/* Mission Statement */}
      <section className="py-16 md:py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">Our Mission</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary-dark leading-tight">
              Educating Children, Enriching Lives, Making a Difference, and a Commitment to Excellence.
            </h2>
            <div className="mt-12 w-20 h-1 bg-secondary/30 rounded-full mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* About Story */}
      <section className="py-16 md:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Image collage */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative"
            >
              <div className="grid grid-cols-2 gap-4 lg:gap-6 relative z-10 pb-12">
                <img src="/images/carousel-imgs/MainClassroom.webp" alt="Classroom" className="rounded-[2rem] shadow-soft w-full h-[250px] object-cover hover:shadow-float transition-all duration-500" />
                <img src="/images/carousel-imgs/KidsLibrary.webp" alt="Library" className="rounded-[2rem] shadow-soft w-full h-[250px] object-cover lg:translate-y-12 hover:shadow-float transition-all duration-500" />
                <img src="/images/carousel-imgs/OutdoorClassroom.webp" alt="Outdoor" className="rounded-[2rem] shadow-soft w-full h-[250px] object-cover hover:shadow-float transition-all duration-500" />
                <img src="/images/carousel-imgs/ArtGallery.webp" alt="Art Gallery" className="rounded-[2rem] shadow-soft w-full h-[250px] object-cover lg:translate-y-12 hover:shadow-float transition-all duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-sage-light/40 to-transparent blur-3xl -z-10 translate-x-12 translate-y-12" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <span className="text-secondary font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">Our Story</span>
              <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-primary-dark mb-8 leading-tight">
                A Home Away <br /> From Home
              </h2>
              <div className="text-text-muted leading-relaxed space-y-6 text-lg">
                <p>
                  Established and Licensed in 2015, Flower House Creche Care is a child care center located in a highly accessible area for all working parents in Ikorodu. We have built a stellar reputation accompanied by a warm, stimulating, and natural environment.
                </p>
                <p>
                  Our policies are transparent and well-established. We adhere strictly to a well-structured, child-centered, and age-specific curriculum. We boast of qualified, dedicated, and professional staff with vast experience in child care. Simply put, our creche is impeccably clean and perfectly safe, and the parents who patronize us are a testament to our quality.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Child Care */}
      <section className="py-16 md:py-20 relative bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="Achieving Quality Child Care" kicker="Our Promise" light />
          
          <div className="grid gap-6 mt-16">
            {qualityItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-6 bg-white/5 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="p-2 bg-secondary/20 rounded-full flex-shrink-0 mt-1">
                  <CheckCircle2 size={24} className="text-secondary" />
                </div>
                <p className="text-white/80 text-lg leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <a
              href="%PUBLIC_URL%/images/FHCC POLICY HANDBOOK.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-3 md:py-4 bg-white text-primary-dark font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Download size={20} />
              Download Policy Handbook
            </a>
          </motion.div>
        </div>
      </section>

      {/* Proprietor */}
      <section className="py-16 md:py-20 bg-warm-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Meet Our Proprietor" kicker="Leadership" subtitle="Driven by a passion for community development and early childhood education." />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-10 md:p-16 shadow-soft hover:shadow-float transition-all duration-500 border border-gray-50 flex flex-col md:flex-row items-center md:items-start gap-12 mt-16"
          >
            <div className="flex-shrink-0">
              <div className="p-2 bg-gradient-to-br from-primary-light to-sage rounded-[2.5rem] shadow-lg">
                <img
                  src="/images/proprietor.webp"
                  alt="Kunle Adebowale"
                  className="w-40 h-40 md:w-56 md:h-56 rounded-[2rem] object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-heading font-extrabold text-primary-dark mb-2">Kunle Adebowale</h3>
              <p className="text-secondary font-medium tracking-wide mb-8">PhD, Public Servant & Community Leader</p>
              
              <ul className="space-y-4">
                {[
                  'PhD - George August University, Goettingen, Germany.',
                  'Retired Public Servant - Nigeria Deposit Insurance Corporation',
                  'Chairman - Eyita Community Development Advisory Board',
                  'Chairman - Eyita-North Community Development Area'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span className="text-text-muted text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner heading="Take a look at our facilities" buttonText="Explore Facilities" buttonLink="/facilities" variant="warm" />

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" kicker="Support" subtitle="Everything you need to know about our services and policies." />
          <div className="mt-16">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTABanner heading="Ready to begin the journey?" buttonText="Enrol Now" buttonLink="/enrol" variant="secondary" />
    </div>
  );
}
