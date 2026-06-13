import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-warm-white flex items-center justify-center py-32 px-4 relative overflow-hidden">
      <SEO title="Thank You" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none animate-blob" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none animate-blob" style={{ animationDelay: '2s' }} />

      <div className="max-w-2xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[3rem] p-12 md:p-20 shadow-float border border-gray-50 flex flex-col items-center"
        >
          <div className="w-24 h-24 bg-sage-light/50 rounded-full flex items-center justify-center mb-8">
            <CheckCircle2 size={50} className="text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-dark mb-6">
            Thank You!
          </h1>
          
          <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-12 max-w-lg">
            Your enrollment application has been successfully submitted. Our team will review it and contact you within 24-48 hours.
          </p>
          
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <ArrowLeft size={20} />
            Return to Home Page
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
