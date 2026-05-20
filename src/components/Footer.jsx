import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, AtSign, Briefcase, ArrowUpRight } from 'lucide-react';

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
    <footer className="relative bg-darkBg border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accentBlue/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-accentBlue to-accentPurple flex items-center justify-center font-black text-white text-lg">
                P
              </div>
              <span className="text-white font-bold text-xl">
                ProSolution
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
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
                  className="p-2.5 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-500 hover:text-white text-sm transition-colors duration-300 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <Mail size={16} className="text-accentBlue mt-0.5 shrink-0" />
                prosolutionsw@gmail.com
              </li>
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <Phone size={16} className="text-accentBlue mt-0.5 shrink-0" />
                @pro.solutions
              </li>
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <MapPin size={16} className="text-accentBlue mt-0.5 shrink-0" />
                Digital Services, Worldwide
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} ProSolution Infotech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
