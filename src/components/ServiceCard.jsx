import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, desc, icon, color, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`group relative p-8 rounded-3xl bg-gradient-to-br ${color} to-transparent border border-white/10 backdrop-blur-md text-left overflow-hidden cursor-pointer`}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accentBlue/10 to-accentPurple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

      <div className="relative z-10">
        <div className="p-3.5 bg-black/40 rounded-2xl w-fit text-white mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-6 text-sm leading-relaxed">{desc}</p>
        <button className="text-accentBlue font-semibold text-sm hover:text-white transition-colors duration-300 flex items-center gap-1 group/btn">
          Enquire Now
          <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
