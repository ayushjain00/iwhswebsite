import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  color?: 'dark' | 'light';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  color = 'dark' 
}) => {
  const alignmentClasses = {
    center: 'text-center mx-auto',
    left: 'text-left'
  };
  
  const titleColor = color === 'light' ? 'text-white' : 'text-slate-900';
  const subtitleColor = color === 'light' ? 'text-slate-300' : 'text-slate-600';
  
  return (
    <motion.div 
      className={`max-w-3xl mb-12 ${alignmentClasses[alignment]}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    >
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;