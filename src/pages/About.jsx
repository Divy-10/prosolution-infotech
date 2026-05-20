import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Shield, Lightbulb, Users } from 'lucide-react';

const values = [
  { icon: <Heart size={24} />, title: 'Client First', desc: 'Every decision we make is driven by our clients\' success and satisfaction.' },
  { icon: <Lightbulb size={24} />, title: 'Innovation', desc: 'We stay ahead of trends to deliver cutting-edge digital solutions.' },
  { icon: <Shield size={24} />, title: 'Reliability', desc: 'Dependable delivery, transparent communication, and lasting partnerships.' },
  { icon: <Users size={24} />, title: 'Collaboration', desc: 'We work as an extension of your team, not just a service provider.' },
];

const team = [
  { name: 'Founder', role: 'CEO & Lead Developer', avatar: '👨‍💻' },
  { name: 'Creative Lead', role: 'Design & Branding', avatar: '🎨' },
  { name: 'Marketing Head', role: 'Digital Strategy', avatar: '📊' },
];

const About = () => {
  return (
    <div className="bg-darkBg min-h-screen">
      {/* ───── Hero ───── */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-accentPurple/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accentBlue/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-accentBlue text-sm font-semibold uppercase tracking-widest mb-4">About Us</p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              We build digital{' '}
              <span className="gradient-text">experiences</span>{' '}
              that matter
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              ProSolution Infotech is a modern digital agency helping businesses grow through
              beautiful websites, powerful software, strategic marketing, and AI-driven creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── Mission & Vision ───── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-10 hover:border-white/15 transition-all duration-300"
          >
            <div className="inline-flex p-3 rounded-2xl bg-accentBlue/10 text-accentBlue mb-6">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To empower small and medium businesses with affordable, premium-quality digital solutions
              that drive real growth. We believe every business deserves a strong online presence,
              regardless of its size.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-10 hover:border-white/15 transition-all duration-300"
          >
            <div className="inline-flex p-3 rounded-2xl bg-accentPurple/10 text-accentPurple mb-6">
              <Eye size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To become the most trusted digital partner for businesses across India and beyond.
              We envision a future where technology is accessible, beautiful, and impactful for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── Our Story ───── */}
      <section className="py-24 px-6 relative">
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-accentBlue/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-accentBlue text-sm font-semibold uppercase tracking-widest mb-4">Our Story</p>
              <h2 className="text-4xl font-bold text-white mb-6">
                From a small idea to a growing digital agency
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  ProSolution Infotech started with a simple belief: that every business, no matter how small,
                  deserves world-class digital solutions. What began as a passion project quickly grew into a
                  full-service digital agency.
                </p>
                <p>
                  Today, we've helped 50+ businesses across multiple industries establish their online presence,
                  automate their operations, and reach new customers through smart digital strategies.
                </p>
                <p>
                  Our team combines technical expertise with creative thinking to deliver solutions that
                  don't just look great — they perform brilliantly.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '50+', label: 'Projects' },
                  { number: '30+', label: 'Clients' },
                  { number: '3+', label: 'Years' },
                  { number: '5+', label: 'Industries' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 rounded-2xl p-6 text-center border border-white/5 hover:border-white/10 transition-all"
                  >
                    <h4 className="text-3xl font-extrabold gradient-text">{stat.number}</h4>
                    <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── Values ───── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accentBlue text-sm font-semibold uppercase tracking-widest mb-4">Our Values</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What <span className="gradient-text">drives us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-3xl p-8 text-center hover:border-white/15 transition-all duration-300 group"
              >
                <div className="inline-flex p-3 rounded-2xl bg-accentBlue/10 text-accentBlue mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Team ───── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accentBlue text-sm font-semibold uppercase tracking-widest mb-4">Our Team</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Meet the <span className="gradient-text">minds</span> behind it
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-3xl p-8 text-center hover:border-white/15 transition-all duration-300"
              >
                <div className="text-6xl mb-6">{member.avatar}</div>
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
