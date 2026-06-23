import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Code, BarChart3, Palette, Smartphone, Brain, MessageSquare, ShoppingCart } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Web Development',
    desc: 'Custom business websites, landing pages, and e-commerce stores built with modern technologies for maximum performance.',
    icon: <Laptop size={24} />,
    color: 'from-blue-500/10',
  },
  {
    title: 'Software Solutions',
    desc: 'Custom billing systems, inventory management, CRMs, and business automation tools tailored to your workflow.',
    icon: <Code size={24} />,
    color: 'from-purple-500/10',
  },
  {
    title: 'Digital Marketing',
    desc: 'Social media management, SEO optimization, Google Ads, and content strategies that generate real leads.',
    icon: <BarChart3 size={24} />,
    color: 'from-pink-500/10',
  },
  {
    title: 'Design & Branding',
    desc: 'Logo design, brand identity, UI/UX design, and creative assets that make your brand unforgettable.',
    icon: <Palette size={24} />,
    color: 'from-cyan-500/10',
  },
  {
    title: 'Mobile Apps',
    desc: 'Cross-platform mobile applications that deliver seamless experiences on both iOS and Android devices.',
    icon: <Smartphone size={24} />,
    color: 'from-emerald-500/10',
  },
  {
    title: 'AI Solutions',
    desc: 'AI-powered chatbots, content generation, and intelligent automation to supercharge your business operations.',
    icon: <Brain size={24} />,
    color: 'from-amber-500/10',
  },
  {
    title: 'Social Media',
    desc: 'Complete social media management including content creation, scheduling, analytics, and growth strategies.',
    icon: <MessageSquare size={24} />,
    color: 'from-rose-500/10',
  },
  {
    title: 'E-Commerce',
    desc: 'Full-featured online stores with payment integration, inventory management, and order tracking systems.',
    icon: <ShoppingCart size={24} />,
    color: 'from-indigo-500/10',
  },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'We understand your business, goals, and target audience.' },
  { step: '02', title: 'Strategy', desc: 'We craft a tailored plan with clear milestones and deliverables.' },
  { step: '03', title: 'Build', desc: 'Our team designs and develops your solution with precision.' },
  { step: '04', title: 'Launch', desc: 'We deploy, test, and optimize for maximum performance.' },
];

const Services = () => (
  <div className="bg-bgLight min-h-screen text-brandDark overflow-hidden">
    {/* ───── Hero ───── */}
    <section className="pt-36 pb-20 px-6 relative overflow-hidden">
      <div className="absolute top-20 -left-20 w-[400px] h-[400px] bg-brandSoft/15 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brandLight/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-brandAccent text-sm font-bold uppercase tracking-widest mb-4">Our Services</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-brandDark mb-6 font-poppins">
            Digital solutions for{' '}
            <span className="gradient-text font-black">every need</span>
          </h1>
          <p className="text-brandSecondary/70 text-lg max-w-2xl mx-auto font-medium">
            From concept to deployment, we offer end-to-end digital services tailored to help your business grow and succeed in the modern digital landscape.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ───── Services Grid ───── */}
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} index={i} />
        ))}
      </div>
    </section>

    {/* ───── Process ───── */}
    <section className="py-24 px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brandLight/20 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-brandAccent text-sm font-bold uppercase tracking-widest mb-4">How We Work</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brandDark font-poppins">
            Our proven <span className="gradient-text font-black">process</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-3xl p-8 text-center hover:shadow-lg hover:shadow-brandDark/2 transition-all duration-300 border border-white/60 bg-white/40 group relative"
            >
              <div className="text-6xl font-extrabold text-brandDark/5 absolute top-4 right-6 group-hover:text-brandAccent/15 transition-colors font-poppins">
                {p.step}
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-brandSecondary to-brandAccent text-white font-bold text-sm mb-6 shadow-sm">
                  {p.step}
                </div>
                <h3 className="text-xl font-bold text-brandDark mb-3 font-poppins">{p.title}</h3>
                <p className="text-brandSecondary/70 text-sm leading-relaxed font-medium">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ───── CTA ───── */}
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[3rem] p-12 md:p-16 border border-white/60 bg-white/40 shadow-xl shadow-brandDark/2"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-brandDark mb-4 font-poppins">
            Need a custom solution?
          </h2>
          <p className="text-brandSecondary/70 mb-8 max-w-lg mx-auto font-medium">
            Let's discuss your project requirements and find the perfect solution for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brandSecondary to-brandAccent text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-brandAccent/25 hover:scale-105 transition-all duration-300 shadow-md"
          >
            Get Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Services;
