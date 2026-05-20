import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Websites', 'Software', 'Marketing', 'Design'];

const projects = [
  {
    title: 'Modern E-Commerce Store',
    category: 'Websites',
    desc: 'Full-featured online store with payment integration',
    tech: ['React', 'Node.js', 'MongoDB'],
    gradient: 'from-blue-600/30 to-purple-600/30',
  },
  {
    title: 'Restaurant Management',
    category: 'Software',
    desc: 'Billing and order management system',
    tech: ['Python', 'Django', 'PostgreSQL'],
    gradient: 'from-purple-600/30 to-pink-600/30',
  },
  {
    title: 'Social Media Campaign',
    category: 'Marketing',
    desc: 'Instagram growth strategy for fashion brand',
    tech: ['Strategy', 'Content', 'Ads'],
    gradient: 'from-pink-600/30 to-red-600/30',
  },
  {
    title: 'Brand Identity Package',
    category: 'Design',
    desc: 'Complete branding for a tech startup',
    tech: ['Figma', 'Illustrator', 'After Effects'],
    gradient: 'from-cyan-600/30 to-blue-600/30',
  },
  {
    title: 'Portfolio Website',
    category: 'Websites',
    desc: 'Stunning portfolio for a photographer',
    tech: ['Next.js', 'TailwindCSS', 'Vercel'],
    gradient: 'from-emerald-600/30 to-cyan-600/30',
  },
  {
    title: 'Inventory Tracker',
    category: 'Software',
    desc: 'Stock management app for retail business',
    tech: ['React', 'Express', 'MongoDB'],
    gradient: 'from-amber-600/30 to-orange-600/30',
  },
  {
    title: 'SEO Optimization',
    category: 'Marketing',
    desc: 'Complete SEO overhaul for an education platform',
    tech: ['On-page SEO', 'Analytics', 'Content'],
    gradient: 'from-rose-600/30 to-pink-600/30',
  },
  {
    title: 'Mobile App UI',
    category: 'Design',
    desc: 'Fitness app interface design',
    tech: ['Figma', 'Prototyping', 'UI/UX'],
    gradient: 'from-indigo-600/30 to-violet-600/30',
  },
  {
    title: 'Corporate Website',
    category: 'Websites',
    desc: 'Professional site for a consulting firm',
    tech: ['WordPress', 'PHP', 'MySQL'],
    gradient: 'from-violet-600/30 to-fuchsia-600/30',
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-darkBg min-h-screen">
      {/* ───── Hero ───── */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-accentPurple/10 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accentBlue text-sm font-semibold uppercase tracking-widest mb-4">Our Portfolio</p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
              Real results for{' '}
              <span className="gradient-text">real clients</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our latest projects and see how we've helped businesses grow with stunning digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── Filter Tabs ───── */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-accentBlue to-accentPurple text-white shadow-lg'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ───── Projects Grid ───── */}
      <section className="py-8 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-glass cursor-pointer"
                >
                  {/* Project Visual */}
                  <div className={`h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-extrabold text-white/10">
                        {project.title.charAt(0)}
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-darkBg/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex gap-2 mb-3">
                          {project.tech.map((t) => (
                            <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70 border border-white/5">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* View button */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition">
                        <ExternalLink size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <span className="text-xs font-medium text-accentBlue uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-lg font-bold text-white mt-2 mb-2 group-hover:text-accentBlue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{project.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
