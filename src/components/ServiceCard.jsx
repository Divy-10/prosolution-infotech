import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ title, desc, icon, color, index }) => {
  const navigate = useNavigate();

  const handleEnquire = (e) => {
    e.stopPropagation();
    navigate('/contact', { state: { service: title } });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onClick={handleEnquire}
      className="glass-card group relative p-8 rounded-3xl border border-white/60 bg-white/40 shadow-sm shadow-brandDark/2 hover:shadow-lg hover:shadow-brandDark/5 text-left overflow-hidden cursor-pointer"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-brandLight/20 to-brandSoft/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

      <div className="relative z-10">
        <div className="p-3.5 bg-brandLight/50 text-brandSecondary rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/80 shadow-sm">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-brandDark mb-3 font-poppins">{title}</h3>
        <p className="text-brandSecondary/70 mb-6 text-sm leading-relaxed font-medium">{desc}</p>
        <button
          onClick={handleEnquire}
          className="text-brandAccent font-bold text-sm hover:text-brandDark transition-colors duration-300 flex items-center gap-1 group/btn font-poppins"
        >
          Enquire Now
          <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
