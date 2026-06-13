import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, GraduationCap, ChevronRight, ChevronLeft, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import CTABanner from '../components/ui/CTABanner';
import SEO from '../components/SEO';

export default function EnrolPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    program: 'creche',
    startDate: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleNextStep = (e) => {
    e.preventDefault();
    if (formData.parentName && formData.email && formData.phone) {
      setStep(2);
    } else {
      alert("Please fill in all required parent information fields.");
    }
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/thank-you');
    }, 1500);
  };

  return (
    <div className="bg-warm-white">
      <SEO title="Enrol Now" description="Secure your childs spot at Flower House Creche Care. Start our simple, secure online enrollment process today." />
      <PageHeader
        title="Enrolment"
        subtitle="Take the first step towards a bright future for your child."
        backgroundImage="/images/OutdoorClassroom.webp"
      />

      <section className="py-16 md:py-20 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sage-light/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="Enrol Your Child" kicker="Join Us" subtitle="Please fill out the form to begin the enrollment process. We will contact you shortly to schedule a visit." align="center" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-16">
            
            {/* Left Column: Info & Process */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col space-y-6 h-full"
            >
              <div className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-soft border border-gray-50 h-full">
                <h3 className="text-xl font-heading font-bold text-primary-dark mb-4">What Happens Next?</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold flex-shrink-0 z-10 shadow-md">1</div>
                      <div className="w-px flex-1 bg-gray-200 my-2"></div>
                    </div>
                    <div className="pb-6">
                      <h4 className="text-lg font-bold text-primary-dark mb-1">Submit Application</h4>
                      <p className="text-text-muted text-sm leading-relaxed">Fill out the multi-step form with your and your child's details. Our team will receive your application immediately.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold flex-shrink-0 z-10 shadow-md">2</div>
                      <div className="w-px flex-1 bg-gray-200 my-2"></div>
                    </div>
                    <div className="pb-6">
                      <h4 className="text-lg font-bold text-primary-dark mb-1">Application Review</h4>
                      <p className="text-text-muted text-sm leading-relaxed">Our administration team will review your application and contact you within 24 hours to discuss the next steps.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 z-10 shadow-md">
                        <CheckCircle2 size={18} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary-dark mb-1">Welcome to FHCC!</h4>
                      <p className="text-text-muted text-sm leading-relaxed">Upon successful review and payment of the required fees, we'll finalize your registration paperwork and officially welcome your child to our family!</p>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* Right Column: Multi-Step Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 bg-white rounded-[3rem] p-8 md:p-12 shadow-soft hover:shadow-float transition-shadow duration-500 border border-gray-50 h-full flex flex-col"
            >
              <form onSubmit={step === 1 ? handleNextStep : handleSubmit} className="space-y-8">
              
              {/* Step Progress Bar */}
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center gap-4 w-full max-w-md">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-colors duration-500 ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>1</div>
                  <div className={`flex-1 h-1 rounded-full transition-colors duration-500 ${step >= 2 ? 'bg-primary' : 'bg-gray-100'}`} />
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-colors duration-500 ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>2</div>
                </div>
              </div>

              {/* Step 1: Parent Info Section */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary-dark">Parent/Guardian Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-dark ml-1 block">Full Name *</label>
                    <input
                      type="text" name="parentName" required value={formData.parentName} onChange={handleChange}
                      className="w-full px-6 py-4 bg-warm-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-dark ml-1 block">Email Address *</label>
                    <input
                      type="email" name="email" required value={formData.email} onChange={handleChange}
                      className="w-full px-6 py-4 bg-warm-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-primary-dark ml-1 block">Phone Number *</label>
                    <input
                      type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                      className="w-full px-6 py-4 bg-warm-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg"
                      placeholder="0802 224 2422"
                    />
                    </div>
                  </div>
                  
                  <div className="pt-8">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      Next Step
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Child Info Section */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary-dark">Child Information</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-dark ml-1 block">Child's Full Name *</label>
                    <input
                      type="text" name="childName" required value={formData.childName} onChange={handleChange}
                      className="w-full px-6 py-4 bg-warm-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg"
                      placeholder="Child's Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-dark ml-1 block">Child's Age (in months or years) *</label>
                    <input
                      type="text" name="childAge" required value={formData.childAge} onChange={handleChange}
                      className="w-full px-6 py-4 bg-warm-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg"
                      placeholder="e.g. 18 months"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-dark ml-1 block">Program of Interest *</label>
                    <div className="relative">
                      <select
                        name="program" required value={formData.program} onChange={handleChange}
                        className="w-full px-6 py-4 bg-warm-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg appearance-none cursor-pointer"
                      >
                        <option value="creche">Creche (3 months - 1.5 years)</option>
                        <option value="preschool">Pre-school (1.5 years - 3 years)</option>
                        <option value="nursery">Nursery (3 years - 5 years)</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-dark ml-1 block">Preferred Start Date *</label>
                    <input
                      type="date" name="startDate" required value={formData.startDate} onChange={handleChange}
                      className="w-full px-6 py-4 bg-warm-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-primary-dark ml-1 block">Additional Information (Optional)</label>
                    <textarea
                      name="additionalInfo" rows="4" value={formData.additionalInfo} onChange={handleChange}
                      className="w-full px-6 py-4 bg-warm-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-lg"
                      placeholder="Any allergies, special needs, or questions?"
                    ></textarea>
                  </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row gap-4">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="w-full md:w-1/3 flex items-center justify-center gap-3 px-8 py-4 bg-warm-white hover:bg-gray-100 text-primary-dark font-bold text-xl rounded-2xl transition-all duration-300"
                    >
                      <ChevronLeft size={24} />
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-2/3 flex items-center justify-center gap-3 px-8 py-4 bg-secondary hover:bg-secondary-light text-white font-bold text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-1"
                    >
                      {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                      {!isSubmitting && <Send size={24} />}
                    </button>
                  </div>
                </motion.div>
              )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner heading="Got Questions?" buttonText="Contact Us" buttonLink="/contact" variant="primary" />
    </div>
  );
}
