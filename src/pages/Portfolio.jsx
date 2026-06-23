import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Eye } from 'lucide-react';

const categories = ['All', 'Websites', 'Software', 'Marketing', 'Design', 'Video Shooting & Editing'];

const projects = [
  {
    title: 'Syndicate Clothing',
    category: 'Websites',
    desc: 'Elevated basics for the modern wardrobe. Premium minimalist fashion store.',
    tech: ['React', 'Vite', 'TailwindCSS', 'Framer Motion'],
    gradient: 'from-blue-600/30 to-purple-600/30',
    link: 'https://syndicate-clothing.vercel.app/',
    image: '/syndicate.png',
  },
  {
    title: 'UniVo Community Platform',
    category: 'Software',
    desc: 'A modern social network and community platform to connect, share posts, and interact.',
    tech: ['Node.js', 'Express', 'Google Auth', 'TailwindCSS'],
    gradient: 'from-purple-600/30 to-pink-600/30',
    link: 'https://community-builder.onrender.com/signin/',
    image: '/univo.png',
  },
  {
    title: 'Ballers Academy',
    category: 'Marketing',
    desc: 'Social media branding and marketing campaign driving high engagement and growth.',
    tech: ['Social Media', 'Marketing', 'Branding', 'Instagram'],
    gradient: 'from-blue-600/30 to-indigo-600/30',
    link: 'https://www.instagram.com/ballers_training_center?igsh=MXJmeXNxeW9tZGR2Mw%3D%3D&utm_source=qr',
    image: '/design_ballers_logo.png',
  },
  {
    title: 'El Bro Syndicate',
    category: 'Marketing',
    desc: 'Branding strategy, dynamic content generation, and social media marketing campaign.',
    tech: ['Social Media', 'Marketing', 'Branding', 'Instagram'],
    gradient: 'from-zinc-600/30 to-neutral-600/30',
    link: 'https://www.instagram.com/el.bro_syndicate_?igsh=MWZuYTdtNDN3czN1Zw%3D%3D&utm_source=qr',
    image: '/design_el_bro_syndicate.jpg',
  },
  {
    title: 'Sairath Business Card',
    category: 'Design',
    desc: 'Premium branding and business card design for Sai Travellers transportation services.',
    tech: ['Photoshop', 'Branding', 'Typography'],
    gradient: 'from-amber-600/30 to-rose-600/30',
    image: '/design_sairath.jpg',
  },
  {
    title: 'Ballers Academy Logo',
    category: 'Design',
    desc: 'Retro-inspired varsity sports crest design for modern basketball academy branding.',
    tech: ['Illustrator', 'Vector', 'Branding'],
    gradient: 'from-blue-600/30 to-cyan-600/30',
    image: '/design_ballers_logo.png',
  },
  {
    title: 'Blood Donation Flyer',
    category: 'Design',
    desc: 'Clean, high-impact awareness poster design for charity blood donation drive campaigns.',
    tech: ['Illustrator', 'Layout', 'Marketing Design'],
    gradient: 'from-rose-600/30 to-red-600/30',
    image: '/design_blood_donation.png',
  },
  {
    title: "Vrushika's Birthday Invitation",
    category: 'Design',
    desc: 'Soft pastel thematic digital invitation and banner design for baby milestone birthday.',
    tech: ['Photoshop', 'Typography', 'Illustration'],
    gradient: 'from-pink-600/30 to-orange-600/30',
    image: '/design_birthday.png',
  },
  {
    title: 'Volleyball Summer Camp Poster',
    category: 'Design',
    desc: 'Vibrant, dynamic energy sports flyer design for youth volleyball summer camp registration.',
    tech: ['Photoshop', 'Illustrator', 'Poster Design'],
    gradient: 'from-orange-600/30 to-yellow-600/30',
    image: '/design_summer_camp.png',
  },
  {
    title: 'ProSolution Infotech Logo',
    category: 'Design',
    desc: 'Modern, tech-focused brand logo design featuring professional gradient and digital elements.',
    tech: ['Illustrator', 'Branding', 'Typography'],
    gradient: 'from-blue-600/30 to-purple-600/30',
    image: '/design_prosolution_logo.jpg',
  },
  {
    title: 'Dream Website Flyer',
    category: 'Design',
    desc: 'Sleek promotional flyer design showcasing custom web development and SEO solutions.',
    tech: ['Photoshop', 'Layout', 'Marketing'],
    gradient: 'from-cyan-600/30 to-blue-600/30',
    image: '/design_dream_website.jpg',
  },
  {
    title: 'Digital Solutions Flyer',
    category: 'Design',
    desc: 'Clean business infographic flyer showcasing complete digital services and growth benefits.',
    tech: ['Photoshop', 'Illustrator', 'Marketing'],
    gradient: 'from-purple-600/30 to-rose-600/30',
    image: '/design_grow_digitally.jpg',
  },
  {
    title: 'Business Growth Banner',
    category: 'Design',
    desc: 'Vibrant, high-conversion advertisement banner design for digital solutions marketing.',
    tech: ['Photoshop', 'Illustrator', 'Marketing'],
    gradient: 'from-blue-600/30 to-amber-600/30',
    image: '/design_business_growth.jpg',
  },
  {
    title: 'Jay Jaggannath Tea Stall Banner',
    category: 'Design',
    desc: 'Traditional and warm banner design featuring high-quality photography and Gujarati typography.',
    tech: ['Photoshop', 'Typography', 'Branding'],
    gradient: 'from-amber-600/30 to-orange-600/30',
    image: '/design_tea_stall.jpg',
  },
  {
    title: 'Mobile App Development Flyer',
    category: 'Design',
    desc: 'Modern neon marketing poster design highlighting mobile app services and glassmorphism interface.',
    tech: ['Photoshop', 'Layout', '3D Graphics'],
    gradient: 'from-purple-600/30 to-indigo-600/30',
    image: '/design_mobile_app_flyer.jpg',
  },
  {
    title: 'Web Development Flyer',
    category: 'Design',
    desc: 'Sleek neon dark mode promotional flyer showcasing fast and scalable website services.',
    tech: ['Photoshop', 'Branding', 'Vector'],
    gradient: 'from-blue-600/30 to-indigo-600/30',
    image: '/design_web_dev_flyer.jpg',
  },
  {
    title: 'Vexora Luxury Brand Logo',
    category: 'Design',
    desc: 'Geometric, high-end gold monogram brand identity designed on minimalist textured background.',
    tech: ['Illustrator', 'Branding', 'Geometric'],
    gradient: 'from-amber-600/30 to-stone-600/30',
    image: '/design_vexora_logo_1.jpg',
  },
  {
    title: 'Vexora Leather Bag Mockup',
    category: 'Design',
    desc: 'Realistic product branding simulation displaying Vexora logo embossed on premium leather bag.',
    tech: ['Photoshop', '3D Mockup', 'Product Design'],
    gradient: 'from-stone-600/30 to-neutral-600/30',
    image: '/design_vexora_logo_2.jpg',
  },
  {
    title: 'Vexora Black Leather Stamp',
    category: 'Design',
    desc: 'Elite debossed brand signature mockup pressed onto fine black leather texture.',
    tech: ['Photoshop', '3D Mockup', 'Texture Design'],
    gradient: 'from-zinc-600/30 to-stone-600/30',
    image: '/design_vexora_logo_3.jpg',
  },
  {
    title: 'Vexora Luxury Typography',
    category: 'Design',
    desc: 'Elegant gold serif lettering logotype design for luxury fashion brand identity.',
    tech: ['Illustrator', 'Typography', 'Branding'],
    gradient: 'from-yellow-600/30 to-slate-600/30',
    image: '/design_vexora_typography.jpg',
  },
  {
    title: 'Vexora Chrome Eagle Logo',
    category: 'Design',
    desc: 'Sleek metallic eagle emblem debossed on dark cardboard card mockup.',
    tech: ['Photoshop', '3D Mockup', 'Industrial Design'],
    gradient: 'from-zinc-600/30 to-slate-600/30',
    image: '/design_vexora_eagle_logo.jpg',
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-bgLight min-h-screen text-brandDark overflow-hidden">
      {/* ───── Hero ───── */}
      <section className="pt-36 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-brandSoft/15 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brandAccent text-sm font-bold uppercase tracking-widest mb-4">Our Portfolio</p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-brandDark mb-6 font-poppins">
              Real results for{' '}
              <span className="gradient-text font-black">real clients</span>
            </h1>
            <p className="text-brandSecondary/70 text-lg max-w-2xl mx-auto font-medium">
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
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-brandSecondary to-brandAccent text-white shadow-md'
                  : 'bg-white/60 text-brandSecondary hover:text-brandDark hover:bg-white/80 border border-white/60 shadow-sm'
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
              {filteredProjects.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="col-span-full py-20 text-center glass-card rounded-[2rem] border border-white/60 bg-white/40 p-8 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-brandDark mb-2 font-poppins">Projects Coming Soon</h3>
                  <p className="text-brandSecondary/70 max-w-md mx-auto text-sm font-medium">
                    We are currently designing and developing new products and campaigns. Check back soon to see our latest work!
                  </p>
                </motion.div>
              ) : (
                filteredProjects.map((project, i) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    onClick={() => {
                      if (project.link) {
                        window.open(project.link, '_blank');
                      } else if (project.image) {
                        setSelectedImage(project.image);
                      }
                    }}
                    className="glass-card group relative overflow-hidden rounded-3xl border border-white/60 bg-white/40 shadow-sm shadow-brandDark/2 hover:shadow-lg hover:shadow-brandDark/5 transition-all duration-300 cursor-pointer"
                  >
                    {/* Project Visual */}
                    <div className={`h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-6xl font-extrabold text-brandDark/10">
                            {project.title.charAt(0)}
                          </div>
                        </div>
                      )}

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brandDark/85 via-brandDark/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
                          <div className="flex flex-wrap gap-2 mb-1">
                            {project.tech.map((t) => (
                              <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/20 text-white border border-white/10 font-semibold shadow-sm">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* View button */}
                      {(project.link || project.image) && (
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md text-white hover:bg-white/40 border border-white/20 shadow-sm transition">
                            {project.link ? <ExternalLink size={16} /> : <Eye size={16} />}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="p-6 bg-white/30 border-t border-white/40">
                      <span className="text-xs font-bold text-brandAccent uppercase tracking-wider">{project.category}</span>
                      <h3 className="text-lg font-bold text-brandDark mt-2 mb-2 group-hover:text-brandAccent transition-colors font-poppins">
                        {project.title}
                      </h3>
                      <p className="text-brandSecondary/70 text-sm font-medium leading-relaxed">{project.desc}</p>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 cursor-zoom-out"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300 hover:scale-105"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Full design preview"
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl border border-white/10 cursor-default"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
