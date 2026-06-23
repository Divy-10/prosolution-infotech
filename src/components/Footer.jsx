import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, AtSign, Briefcase, ArrowUpRight } from 'lucide-react';

const Instagram = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Company': [
      { label: 'About Us', path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'Contact', path: '/contact' },
    ],
    'Services': [
      { label: 'Web Development', path: '/services' },
      { label: 'Software Solutions', path: '/services' },
      { label: 'Digital Marketing', path: '/services' },
      { label: 'Design & AI', path: '/services' },
    ],
  };

  return (
    <footer className="relative bg-bgLight border-t border-brandLight/50 overflow-hidden pt-12">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brandAccent/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10 glass-card rounded-[2.5rem] border border-white/60 bg-white/40 shadow-xl shadow-brandDark/2 mb-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brandSecondary to-brandAccent flex items-center justify-center font-black text-white text-lg">
                P
              </div>
              <span className="text-brandDark font-bold text-xl font-poppins">
                ProSolution
              </span>
            </div>
            <p className="text-brandSecondary/70 text-sm leading-relaxed mb-6 font-medium">
              Empowering businesses with modern digital solutions. Websites, software, marketing & AI — all under one roof.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <AtSign size={18} />, href: '#', label: 'Instagram' },
                { icon: <Globe size={18} />, href: '#', label: 'Facebook' },
                { icon: <Briefcase size={18} />, href: '#', label: 'LinkedIn' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="p-2.5 rounded-xl bg-white/60 text-brandSecondary hover:text-brandDark hover:bg-white border border-white/60 shadow-sm transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-brandDark font-bold mb-6 text-sm uppercase tracking-wider font-poppins">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-brandSecondary/70 hover:text-brandDark text-sm font-medium transition-colors duration-300 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-brandAccent transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="text-brandDark font-bold mb-6 text-sm uppercase tracking-wider font-poppins">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:prosolutionsw@gmail.com"
                  className="flex items-start gap-3 text-brandSecondary/70 hover:text-brandDark text-sm font-medium transition-colors"
                >
                  <Mail size={16} className="text-brandAccent mt-0.5 shrink-0" />
                  prosolutionsw@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/_pro.solutions_?igsh=bGJqMGt6c2NrMGJ2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-brandSecondary/70 hover:text-brandDark text-sm font-medium transition-colors"
                >
                  <Instagram size={16} className="text-brandAccent mt-0.5 shrink-0" />
                  @pro.solutions
                </a>
              </li>
              <li className="flex items-start gap-3 text-brandSecondary/70 text-sm font-medium">
                <MapPin size={16} className="text-brandAccent mt-0.5 shrink-0" />
                Digital Services, Worldwide
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-brandLight/50 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brandSecondary/60 text-sm font-medium">
            © {currentYear} ProSolution Infotech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-brandSecondary/60 font-medium">
            <a href="#" className="hover:text-brandDark transition">Privacy Policy</a>
            <a href="#" className="hover:text-brandDark transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
