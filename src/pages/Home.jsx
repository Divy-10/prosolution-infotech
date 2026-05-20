import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Globe, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { number: '50+', label: 'Projects Delivered', icon: <Sparkles size={20} /> },
  { number: '30+', label: 'Happy Clients', icon: <Users size={20} /> },
  { number: '100%', label: 'Client Satisfaction', icon: <Star size={20} /> },
  { number: '24/7', label: 'Support Available', icon: <Zap size={20} /> },
];

const trustedLogos = [
  'Startups', 'E-Commerce', 'Healthcare', 'Education', 'Real Estate', 'Retail',
];

const Home = () => {
  return (
    <div className="bg-darkBg min-h-screen relative overflow-hidden">
      {/* ───── Hero Section ───── */}
      <section className="pt-32 pb-20 px-6 relative">
        {/* Background Blobs */}
        <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-accentBlue/15 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-accentPurple/15 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accentBlue/5 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accentBlue/10 border border-accentBlue/20 text-accentBlue text-sm font-medium mb-8"
            >
              <Sparkles size={14} />
              #1 Digital Solutions Partner
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              Grow your business with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentBlue via-purple-400 to-accentPurple">
                smart digital
              </span>{' '}
              solutions
            </h1>

            <p className="text-gray-400 mt-8 text-lg max-w-lg leading-relaxed">
              Websites • Software • Marketing • AI Solutions. We help businesses go online and generate real customers using modern digital strategies.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-accentBlue to-accentPurple text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-accentBlue/25 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
              >
                Get Started
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 border border-white/15 text-white rounded-2xl font-bold hover:bg-white/5 hover:border-white/25 transition-all duration-300"
              >
                Our Work
              </Link>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative z-10 glass-card p-6 rounded-[2.5rem] shadow-2xl">
              {/* Simulated Dashboard UI */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2rem] p-6 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs text-gray-500 font-mono">prosolution.app</div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Revenue', value: '₹12.4L', change: '+24%', color: 'text-green-400' },
                    { label: 'Visitors', value: '8,420', change: '+18%', color: 'text-blue-400' },
                    { label: 'Leads', value: '342', change: '+32%', color: 'text-purple-400' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/5">
                      <p className="text-gray-500 text-xs">{stat.label}</p>
                      <p className="text-white font-bold text-lg">{stat.value}</p>
                      <p className={`text-xs ${stat.color}`}>{stat.change}</p>
                    </div>
                  ))}
                </div>

                {/* Chart simulation */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="flex justify-between items-end h-24">
                    {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                        className="w-[6%] rounded-full bg-gradient-to-t from-accentBlue to-accentPurple"
                      />
                    ))}
                  </div>
                </div>

                {/* Activity row */}
                <div className="flex gap-3">
                  <div className="flex-1 bg-white/5 rounded-xl p-3 border border-white/5">
                    <p className="text-xs text-gray-500">Active Users</p>
                    <p className="text-white font-bold">1,247</p>
                  </div>
                  <div className="flex-1 bg-white/5 rounded-xl p-3 border border-white/5">
                    <p className="text-xs text-gray-500">Conversion</p>
                    <p className="text-white font-bold">4.8%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-accentBlue to-blue-600 p-4 rounded-2xl text-white shadow-xl shadow-accentBlue/20 z-20"
            >
              <p className="font-bold text-sm">🚀 10x Faster Growth</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-accentPurple to-purple-600 p-4 rounded-2xl text-white shadow-xl shadow-accentPurple/20 z-20"
            >
              <p className="font-bold text-sm">⚡ AI Powered</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ───── Trusted By Section ───── */}
      <section className="py-16 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-600 text-sm uppercase tracking-widest mb-8">Trusted by businesses across industries</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {trustedLogos.map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-gray-600 font-semibold text-lg hover:text-gray-400 transition-colors cursor-default"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Stats Section ───── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center glass-card rounded-3xl p-8 hover:border-white/15 transition-all duration-300 group"
              >
                <div className="inline-flex p-3 rounded-2xl bg-accentBlue/10 text-accentBlue mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-extrabold text-white mb-2">{stat.number}</h3>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Services Preview ───── */}
      <section className="py-24 px-6 relative">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accentPurple/10 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accentBlue text-sm font-semibold uppercase tracking-widest mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Solutions that <span className="gradient-text">drive results</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From stunning websites to AI-powered tools, we build everything your business needs to thrive online.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Web Development',
                desc: 'Business websites, E-commerce, and landing pages that convert visitors into customers.',
                emoji: '🌐',
                gradient: 'from-blue-500/10',
              },
              {
                title: 'Digital Marketing',
                desc: 'Social media management, SEO, and paid ads that bring real, qualified leads.',
                emoji: '📈',
                gradient: 'from-purple-500/10',
              },
              {
                title: 'AI & Software',
                desc: 'Custom billing systems, CRMs, and AI-powered tools for modern businesses.',
                emoji: '🤖',
                gradient: 'from-cyan-500/10',
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -5 }}
                className={`glass-card rounded-3xl p-8 bg-gradient-to-br ${service.gradient} to-transparent hover:border-white/15 transition-all duration-300 group cursor-pointer`}
              >
                <div className="text-4xl mb-6">{service.emoji}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-accentBlue text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA Section ───── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accentBlue via-purple-600 to-accentPurple" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

            <div className="relative z-10 text-center py-20 px-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to transform your business?
              </h2>
              <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
                Join 30+ businesses that trust ProSolution Infotech for their digital growth journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-gray-900 rounded-2xl font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
                >
                  Start Your Project
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-bold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
