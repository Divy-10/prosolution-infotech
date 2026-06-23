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
    <div className="bg-bgLight min-h-screen relative overflow-hidden text-brandDark">
      {/* ───── Hero Section ───── */}
      <section className="pt-36 pb-20 px-6 relative">
        {/* Background Blobs */}
        <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-brandSoft/20 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-brandLight/30 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brandAccent/10 rounded-full blur-[100px]" />

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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-brandSecondary text-sm font-semibold mb-8"
            >
              <Sparkles size={14} className="text-brandAccent" />
              #1 Digital Solutions Partner
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-brandDark leading-[1.1] tracking-tight font-poppins">
              Grow your business with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandSecondary via-brandAccent to-brandSoft font-black">
                smart digital
              </span>{' '}
              solutions
            </h1>

            <p className="text-brandSecondary/70 mt-8 text-lg max-w-lg leading-relaxed font-medium">
              Websites • Software • Marketing • AI Solutions. We help businesses go online and generate real customers using modern digital strategies.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-brandSecondary to-brandAccent text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-brandAccent/25 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
              >
                Get Started
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 border border-brandAccent/30 text-brandSecondary rounded-2xl font-bold hover:bg-brandLight/20 hover:border-brandAccent/50 transition-all duration-300"
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
            <div className="relative z-10 glass-card p-6 rounded-[2.5rem] shadow-2xl border border-white/60 bg-white/40">
              {/* Simulated Dashboard UI */}
              <div className="bg-gradient-to-br from-white to-brandLight/10 rounded-[2rem] p-6 space-y-4 border border-white/60">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="text-xs text-brandSecondary/60 font-mono font-semibold">prosolution.app</div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Revenue', value: '₹12.4L', change: '+24%', color: 'text-emerald-600' },
                    { label: 'Visitors', value: '8,420', change: '+18%', color: 'text-brandAccent' },
                    { label: 'Leads', value: '342', change: '+32%', color: 'text-brandSecondary' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/60 rounded-xl p-3 border border-white/80 shadow-sm shadow-brandDark/2">
                      <p className="text-brandSecondary/60 text-xs font-semibold">{stat.label}</p>
                      <p className="text-brandDark font-extrabold text-base mt-0.5">{stat.value}</p>
                      <p className={`text-xs font-bold ${stat.color}`}>{stat.change}</p>
                    </div>
                  ))}
                </div>

                {/* Chart simulation */}
                <div className="bg-white/60 rounded-xl p-4 border border-white/80 shadow-sm shadow-brandDark/2">
                  <div className="flex justify-between items-end h-24">
                    {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                        className="w-[6%] rounded-full bg-gradient-to-t from-brandSecondary to-brandAccent"
                      />
                    ))}
                  </div>
                </div>

                {/* Activity row */}
                <div className="flex gap-3">
                  <div className="flex-1 bg-white/60 rounded-xl p-3 border border-white/80 shadow-sm shadow-brandDark/2">
                    <p className="text-xs text-brandSecondary/60 font-semibold">Active Users</p>
                    <p className="text-brandDark font-extrabold text-base mt-0.5">1,247</p>
                  </div>
                  <div className="flex-1 bg-white/60 rounded-xl p-3 border border-white/80 shadow-sm shadow-brandDark/2">
                    <p className="text-xs text-brandSecondary/60 font-semibold">Conversion</p>
                    <p className="text-brandDark font-extrabold text-base mt-0.5">4.8%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-brandSecondary to-brandAccent p-4 rounded-2xl text-white shadow-xl shadow-brandAccent/20 z-20"
            >
              <p className="font-bold text-sm">🚀 10x Faster Growth</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-brandSecondary to-brandAccent p-4 rounded-2xl text-white shadow-xl shadow-brandAccent/20 z-20"
            >
              <p className="font-bold text-sm">⚡ AI Powered</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ───── Trusted By Section ───── */}
      <section className="py-16 px-6 border-y border-brandLight/50 bg-white/20">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-brandSecondary/60 text-xs font-bold uppercase tracking-widest mb-8">Trusted by businesses across industries</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {trustedLogos.map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-brandSecondary/60 font-bold text-lg hover:text-brandSecondary transition-colors cursor-default"
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
                className="text-center glass-card rounded-3xl p-8 hover:shadow-lg hover:shadow-brandDark/2 hover:scale-[1.02] transition-all duration-300 group border border-white/60 bg-white/40"
              >
                <div className="inline-flex p-3 rounded-2xl bg-brandLight/50 text-brandSecondary mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-black text-brandDark mb-2 font-poppins">{stat.number}</h3>
                <p className="text-brandSecondary/70 text-sm font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Services Preview ───── */}
      <section className="py-24 px-6 relative">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brandSoft/15 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-brandAccent text-sm font-bold uppercase tracking-widest mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brandDark mb-4 font-poppins">
              Solutions that <span className="gradient-text font-black">drive results</span>
            </h2>
            <p className="text-brandSecondary/70 max-w-2xl mx-auto font-medium">
              From stunning websites to AI-powered tools, we build everything your business needs to thrive online.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Web Development',
                desc: 'Business websites, E-commerce, and landing pages that convert visitors into customers.',
                emoji: '🌐',
                gradient: 'from-blue-500/5',
              },
              {
                title: 'Digital Marketing',
                desc: 'Social media management, SEO, and paid ads that bring real, qualified leads.',
                emoji: '📈',
                gradient: 'from-purple-500/5',
              },
              {
                title: 'AI & Software',
                desc: 'Custom billing systems, CRMs, and AI-powered tools for modern businesses.',
                emoji: '🤖',
                gradient: 'from-cyan-500/5',
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-3xl p-8 bg-gradient-to-br from-white/80 to-brandLight/20 hover:shadow-lg hover:shadow-brandDark/2 transition-all duration-300 border border-white/60 group cursor-pointer"
              >
                <div className="text-4xl mb-6">{service.emoji}</div>
                <h3 className="text-xl font-bold text-brandDark mb-3 font-poppins">{service.title}</h3>
                <p className="text-brandSecondary/70 text-sm leading-relaxed mb-6 font-medium">{service.desc}</p>
                <Link to="/services" className="text-brandAccent text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
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
            <div className="absolute inset-0 bg-gradient-to-br from-brandSecondary via-brandAccent to-brandSoft" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMicvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

            <div className="relative z-10 text-center py-20 px-8">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-poppins">
                Ready to transform your business?
              </h2>
              <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 font-semibold">
                Join 30+ businesses that trust ProSolution Infotech for their digital growth journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-brandDark rounded-2xl font-bold hover:bg-brandLight hover:scale-105 transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-brandSecondary/25"
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
