import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white relative overflow-hidden mt-12">
      {/* Refined decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-light/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6 lg:pt-16 lg:pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5 lg:pr-12">
            <Link to="/" className="inline-flex items-center gap-4 mb-6 group">
              <div className="p-1 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 group-hover:bg-white/10 transition-colors">
                <img src="/images/logo.webp" alt="FHCC Logo" className="w-14 h-14 rounded-full" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold tracking-wide text-white">FLOWER HOUSE</h3>
                <p className="font-heading text-xs font-semibold tracking-widest text-sage opacity-80">CRECHE CARE</p>
              </div>
            </Link>
            <p className="text-white/60 text-[14px] leading-relaxed mb-6 max-w-sm">
              Providing premium child care and early education in an enriching, secure, and nurturing environment since 2015.
            </p>
            <div className="flex gap-4">
              {[
                { href: 'tel:+2348022242422', icon: <Phone size={18} />, label: 'Phone' },
                { href: 'https://wa.me/+2348073362906', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>, label: 'WhatsApp' },
                { href: 'https://facebook.com/fhcrechecare/', icon: <Facebook size={18} />, label: 'Facebook' },
                { href: 'mailto:info@flowerhousecrechecare.com.ng', icon: <Mail size={18} />, label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h4 className="font-heading text-[15px] font-bold mb-6 text-white uppercase tracking-wider">Working Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Clock size={14} className="text-secondary" />
                </div>
                <div className="text-[14px] text-white/60 pt-1.5">
                  <div className="flex flex-col gap-3">
                    <div>
                      <span className="block text-white/80 mb-0.5">Monday - Thursday:</span>
                      <span className="font-semibold text-white">7:00 AM - 7:00 PM</span>
                    </div>
                    <div>
                      <span className="block text-white/80 mb-0.5">Friday:</span>
                      <span className="font-semibold text-white">7:00 AM - 6:00 PM</span>
                    </div>
                    <div>
                      <span className="block text-white/80 mb-0.5">Weekends & Public Holidays:</span>
                      <span className="font-semibold text-white italic">By appointment only</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="font-heading text-[15px] font-bold mb-6 text-white uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-secondary" />
                </div>
                <div className="text-[14px] text-white/60 pt-1.5">
                  <a href="tel:+2348022242422" className="hover:text-white transition-colors block mb-1">0802 224 2422</a>
                  <a href="tel:+2348072821395" className="hover:text-white transition-colors block">0807 282 1395</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-secondary" />
                </div>
                <div className="text-[14px] text-white/60 pt-1.5 break-all">
                  <a href="mailto:info@flowerhousecrechecare.com.ng" className="hover:text-white transition-colors block mb-1">info@flowerhousecrechecare.com.ng</a>
                  <a href="mailto:fhcceduprogram@gmail.com" className="hover:text-white transition-colors block">fhcceduprogram@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-secondary" />
                </div>
                <span className="text-[14px] text-white/60 pt-1.5 leading-relaxed">
                  50, Eyita-Ojokoro Road, Off Sagamu Road, Ikorodu, Lagos State
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-[12px]">
            © {new Date().getFullYear()} Flower House Creche Care. All Rights Reserved.
          </p>
          <p className="text-white/40 text-[12px]">
            A{' '}
            <a href="https://technovada.com.ng" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-secondary transition-colors border-b border-transparent hover:border-secondary">
              Technovada
            </a>
            {' '}Creation
          </p>
        </div>
      </div>
    </footer>
  );
}
