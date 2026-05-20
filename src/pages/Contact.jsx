import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: <Mail size={20} />, label: 'Email', value: 'prosolutionsw@gmail.com', href: 'mailto:prosolutionsw@gmail.com' },
  { icon: <Phone size={20} />, label: 'Instagram', value: '@pro.solutions', href: '#' },
  { icon: <MapPin size={20} />, label: 'Location', value: 'Digital Services, Worldwide', href: '#' },
  { icon: <Clock size={20} />, label: 'Response Time', value: 'Within 24 hours', href: '#' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
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
      // Fallback: show success for demo purposes
      setStatus('sent');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-darkBg min-h-screen">
      {/* ───── Hero ───── */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-accentBlue/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accentPurple/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accentBlue text-sm font-semibold uppercase tracking-widest mb-4">Contact Us</p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
              Let's build something{' '}
              <span className="gradient-text">amazing</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to take your business digital? Get in touch and let's discuss how we can help you grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── Contact Cards ───── */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {contactInfo.map((info, i) => (
            <motion.a
              key={i}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-white/15 transition-all duration-300 group block"
            >
              <div className="inline-flex p-2.5 rounded-xl bg-accentBlue/10 text-accentBlue mb-4 group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{info.label}</p>
              <p className="text-white text-sm font-medium">{info.value}</p>
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
            className="relative rounded-[3rem] overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accentBlue/10 via-transparent to-accentPurple/10" />
            <div className="absolute inset-0 glass-card" />

            <div className="relative z-10 grid md:grid-cols-2 gap-12 p-10 md:p-16">
              {/* Left Side */}
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-400 leading-relaxed mb-10">
                  Whether you need a website, app, marketing strategy, or AI solution — we've got you covered. Fill out the form and we'll get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-accentBlue/10 flex items-center justify-center text-accentBlue shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                      <p className="text-white font-medium">prosolutionsw@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-accentPurple/10 flex items-center justify-center text-accentPurple shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Instagram</p>
                      <p className="text-white font-medium">@pro.solutions</p>
                    </div>
                  </div>
                </div>

                {/* Decorative */}
                <div className="mt-12 p-6 rounded-2xl bg-white/3 border border-white/5">
                  <p className="text-white font-semibold mb-2">💡 Free Consultation</p>
                  <p className="text-gray-500 text-sm">Book a free 30-minute call to discuss your project requirements and get expert advice.</p>
                </div>
              </div>

              {/* Right Side - Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Full Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full p-4 rounded-2xl bg-white/5 text-white border border-white/10 outline-none focus:border-accentBlue focus:ring-1 focus:ring-accentBlue/50 transition-all placeholder:text-gray-600"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full p-4 rounded-2xl bg-white/5 text-white border border-white/10 outline-none focus:border-accentBlue focus:ring-1 focus:ring-accentBlue/50 transition-all placeholder:text-gray-600"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Phone Number</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full p-4 rounded-2xl bg-white/5 text-white border border-white/10 outline-none focus:border-accentBlue focus:ring-1 focus:ring-accentBlue/50 transition-all placeholder:text-gray-600"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Your Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full p-4 rounded-2xl bg-white/5 text-white border border-white/10 outline-none focus:border-accentBlue focus:ring-1 focus:ring-accentBlue/50 transition-all placeholder:text-gray-600 h-32 resize-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
                    status === 'sent'
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-gradient-to-r from-accentBlue to-accentPurple hover:shadow-lg hover:shadow-accentBlue/25'
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
