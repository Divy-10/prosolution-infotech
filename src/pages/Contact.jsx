import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

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

const contactInfo = [
  { icon: <Mail size={20} />, label: 'Email', value: 'prosolutionsw@gmail.com', href: 'mailto:prosolutionsw@gmail.com' },
  { icon: <Instagram size={20} />, label: 'Instagram', value: '@pro.solutions', href: 'https://www.instagram.com/_pro.solutions_?igsh=bGJqMGt6c2NrMGJ2' },
  { icon: <MapPin size={20} />, label: 'Location', value: 'Digital Services, Worldwide', href: '#' },
  { icon: <Clock size={20} />, label: 'Response Time', value: 'Within 24 hours', href: '#' },
];

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  useEffect(() => {
    if (location.state?.service) {
      setFormData((prev) => ({
        ...prev,
        message: `Hi, I would like to enquire about your "${location.state.service}" service.`,
      }));
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('http://localhost:5002/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed');
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-bgLight min-h-screen text-brandDark">
      {/* ───── Hero ───── */}
      <section className="pt-36 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-brandSoft/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brandLight/20 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brandAccent text-sm font-bold uppercase tracking-widest mb-4">Contact Us</p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-brandDark mb-6 font-poppins">
              Let's build something{' '}
              <span className="gradient-text font-black">amazing</span>
            </h1>
            <p className="text-brandSecondary/70 text-lg max-w-2xl mx-auto font-medium">
              Ready to take your business digital? Get in touch and let's discuss how we can help you grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── Contact Cards ───── */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {contactInfo.map((info, i) => (
            <motion.a
              key={i}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:shadow-md hover:shadow-brandDark/2 hover:scale-[1.02] transition-all duration-300 group block border border-white/60 bg-white/40"
            >
              <div className="inline-flex p-2.5 rounded-xl bg-brandLight/50 text-brandSecondary mb-4 group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <p className="text-xs text-brandSecondary/60 uppercase tracking-wider mb-1 font-semibold">{info.label}</p>
              <p className="text-brandDark text-sm font-bold">{info.value}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ───── Contact Form ───── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden border border-white/60 shadow-xl shadow-brandDark/2 bg-white/40"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brandLight/10 via-transparent to-brandSoft/15" />
            <div className="absolute inset-0 glass-card border-none bg-transparent" />

            <div className="relative z-10 grid md:grid-cols-2 gap-12 p-6 sm:p-10 md:p-16">
              {/* Left Side */}
              <div>
                <h2 className="text-4xl font-extrabold text-brandDark mb-6 font-poppins">
                  Get In Touch
                </h2>
                <p className="text-brandSecondary/70 leading-relaxed mb-10 font-medium">
                  Whether you need a website, app, marketing strategy, or AI solution — we've got you covered. Fill out the form and we'll get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <a
                    href="mailto:prosolutionsw@gmail.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-brandLight/50 flex items-center justify-center text-brandSecondary shrink-0 shadow-sm border border-white/60 group-hover:scale-105 transition-transform">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-brandSecondary/60 uppercase tracking-wider font-semibold">Email</p>
                      <p className="text-brandDark font-bold group-hover:text-brandAccent transition-colors">prosolutionsw@gmail.com</p>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/_pro.solutions_?igsh=bGJqMGt6c2NrMGJ2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-brandLight/50 flex items-center justify-center text-brandSecondary shrink-0 shadow-sm border border-white/60 group-hover:scale-105 transition-transform">
                      <Instagram size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-brandSecondary/60 uppercase tracking-wider font-semibold">Instagram</p>
                      <p className="text-brandDark font-bold group-hover:text-brandAccent transition-colors">@pro.solutions</p>
                    </div>
                  </a>
                </div>

                {/* Decorative */}
                <div className="mt-12 p-6 rounded-2xl bg-white/60 border border-white/80 shadow-sm">
                  <p className="text-brandDark font-bold mb-2 font-poppins">💡 Free Consultation</p>
                  <p className="text-brandSecondary/70 text-sm font-medium">Book a free 30-minute call to discuss your project requirements and get expert advice.</p>
                </div>
              </div>

              {/* Right Side - Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs text-brandSecondary/60 uppercase tracking-wider mb-2 block font-semibold">Full Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full p-4 rounded-2xl bg-white/60 text-brandDark border border-white/80 outline-none focus:border-brandAccent focus:ring-1 focus:ring-brandAccent/30 shadow-sm transition-all placeholder:text-brandSecondary/30 font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs text-brandSecondary/60 uppercase tracking-wider mb-2 block font-semibold">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full p-4 rounded-2xl bg-white/60 text-brandDark border border-white/80 outline-none focus:border-brandAccent focus:ring-1 focus:ring-brandAccent/30 shadow-sm transition-all placeholder:text-brandSecondary/30 font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs text-brandSecondary/60 uppercase tracking-wider mb-2 block font-semibold">Phone Number</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full p-4 rounded-2xl bg-white/60 text-brandDark border border-white/80 outline-none focus:border-brandAccent focus:ring-1 focus:ring-brandAccent/30 shadow-sm transition-all placeholder:text-brandSecondary/30 font-medium"
                  />
                </div>

                <div>
                  <label className="text-xs text-brandSecondary/60 uppercase tracking-wider mb-2 block font-semibold">Your Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full p-4 rounded-2xl bg-white/60 text-brandDark border border-white/80 outline-none focus:border-brandAccent focus:ring-1 focus:ring-brandAccent/30 shadow-sm transition-all placeholder:text-brandSecondary/30 h-32 resize-none font-medium"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                    status === 'sent'
                      ? 'bg-emerald-600 hover:bg-emerald-700'
                      : status === 'error'
                      ? 'bg-rose-600 hover:bg-rose-700'
                      : 'bg-gradient-to-r from-brandSecondary to-brandAccent hover:shadow-lg hover:shadow-brandAccent/25'
                  }`}
                >
                  {status === 'idle' && (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                  {status === 'sending' && (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  )}
                  {status === 'sent' && (
                    <>
                      <CheckCircle size={18} />
                      Message Sent Successfully!
                    </>
                  )}
                  {status === 'error' && (
                    <>
                      <AlertCircle size={18} />
                      Failed to send. Try again.
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
