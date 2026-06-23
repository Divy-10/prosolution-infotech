import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-6 inset-x-0 mx-auto w-[92%] lg:w-[85%] xl:w-[75%] max-w-6xl z-50 px-4 sm:px-8 py-3 sm:py-3.5 flex justify-between items-center transition-all duration-500 rounded-full ${
          scrolled
            ? 'backdrop-blur-xl bg-white/75 border border-white/40 shadow-lg shadow-brandDark/5'
            : 'backdrop-blur-md bg-white/40 border border-white/20'
        }`}
      >
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brandSecondary to-brandAccent flex items-center justify-center font-black text-white text-lg group-hover:scale-110 transition-transform duration-300">
            P
          </div>
          <span className="text-brandDark font-extrabold text-base sm:text-xl tracking-wider font-poppins">
            ProSolution{' '}
            <span className="hidden min-[400px]:inline-block gradient-text font-black">Infotech</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-1 bg-white/30 backdrop-blur-md rounded-full px-2 py-1 border border-white/40 shadow-sm shadow-brandDark/2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                location.pathname === link.path
                  ? 'bg-gradient-to-r from-brandSecondary to-brandAccent text-white shadow-md'
                  : 'text-brandSecondary hover:text-brandDark hover:bg-white/50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden lg:block bg-gradient-to-r from-brandSecondary to-brandAccent text-white px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-brandAccent/25 hover:scale-105 transition-all duration-300"
          >
            Get Started
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-brandDark hover:bg-brandLight/20 rounded-xl transition"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-24 z-40 p-6 bg-white/98 backdrop-blur-3xl rounded-3xl border border-brandLight/60 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-6 py-3.5 rounded-2xl text-lg font-semibold transition-all ${
                      location.pathname === link.path
                        ? 'bg-gradient-to-r from-brandSecondary/10 to-brandAccent/10 text-brandSecondary border border-brandAccent/20'
                        : 'text-brandSecondary hover:text-brandDark hover:bg-brandLight/20'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4"
              >
                <Link
                  to="/contact"
                  className="block text-center bg-gradient-to-r from-brandSecondary to-brandAccent text-white px-6 py-3.5 rounded-2xl font-bold text-lg hover:shadow-lg"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
