import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '', email: '', subject: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="bg-warm-white">
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch with us for any inquiries."
        backgroundImage="/images/CONTACT.webp"
      />

      <section className="py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Get In Touch" kicker="Reach Out" subtitle="Our team is always ready to assist you and answer any questions you may have." />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-16">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="bg-primary-dark rounded-[3rem] p-8 md:p-10 text-white shadow-float relative overflow-hidden h-full">
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-light/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-heading font-bold mb-8">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/10">
                        <MapPin size={24} className="text-secondary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-2">Location</h4>
                        <p className="text-white/80 text-lg leading-relaxed">50, Eyita-Ojokoro Road, Off Sagamu Road, Ile-Epo-Oba Okada Park, Ikorodu, Lagos State</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/10">
                        <Phone size={20} className="text-secondary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-2">Phone</h4>
                        <a href="tel:+2348022242422" className="block text-white/80 text-lg hover:text-white transition-colors">0802 224 2422</a>
                        <a href="tel:+2348072821395" className="block text-white/80 text-lg hover:text-white transition-colors mt-1">0807 282 1395</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/10">
                        <Mail size={20} className="text-secondary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-2">Email</h4>
                        <a href="mailto:info@flowerhousecrechecare.com.ng" className="block text-white/80 text-base hover:text-white transition-colors break-all">info@flowerhousecrechecare.com.ng</a>
                        <a href="mailto:fhcceduprogram@gmail.com" className="block text-white/80 text-base hover:text-white transition-colors break-all mt-1">fhcceduprogram@gmail.com</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/10">
                        <Clock size={20} className="text-secondary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-2">Working Hours</h4>
                        <p className="text-white/80 text-lg">Mon - Thu: 7:00 AM - 7:00 PM</p>
                        <p className="text-white/80 text-lg mt-1">Friday: 7:00 AM - 6:00 PM</p>
                        <p className="text-white/80 text-lg mt-1">Weekends & Public Holidays: <span className="text-base italic opacity-80">By appointment only</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="bg-white rounded-[3rem] p-8 md:p-10 shadow-soft border border-gray-50 h-full">
                <h3 className="text-2xl font-heading font-bold text-primary-dark mb-2">Send us a Message</h3>
                <p className="text-text-muted text-lg mb-8">Fill out the form below and we will get back to you as soon as possible.</p>
                
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center p-12 bg-sage-light/30 rounded-3xl border border-sage/30 h-[400px]"
                  >
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                      <CheckCircle2 size={40} className="text-primary" />
                    </div>
                    <h4 className="text-2xl font-bold text-primary-dark mb-3">Message Sent Successfully!</h4>
                    <p className="text-text-muted text-lg">Thank you for reaching out. We will get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-primary-dark ml-1 block">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-6 py-3 bg-warm-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-primary-dark ml-1 block">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-6 py-3 bg-warm-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-bold text-primary-dark ml-1 block">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-6 py-3 bg-warm-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-primary-dark ml-1 block">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-6 py-3 bg-warm-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-lg"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-3 px-8 py-3 md:py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <Send size={20} />}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16 md:pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[400px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-soft border border-gray-50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.3324673648356!2d3.5134700000000003!3d6.620029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bed6c9c646e7f%3A0xc31a74d2b27cc0a2!2s50%20Eyita-Ojokoro%20Road%2C%20Ikorodu%2C%20Lagos%20State%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FHCC Location Map"
              className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
