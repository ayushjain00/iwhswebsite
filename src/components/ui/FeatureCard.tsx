import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  delay = 0
}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-sm p-6 h-full border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: false }}
    >
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 p-3 rounded-xl inline-flex mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;