import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  percentage: string;
  description: string;
  source?: string;
  color?: 'teal' | 'navy' | 'rose';
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ 
  percentage, 
  description, 
  source, 
  color = 'teal',
  delay = 0 
}) => {
  const colorClasses = {
    teal: 'bg-gradient-to-br from-teal-50 to-blue-50 border-teal-200',
    navy: 'bg-gradient-to-br from-slate-50 to-indigo-50 border-slate-200',
    rose: 'bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200'
  };

  const textColorClasses = {
    teal: 'text-teal-700',
    navy: 'text-slate-700',
    rose: 'text-rose-700'
  };

  const percentageColorClasses = {
    teal: 'text-teal-600',
    navy: 'text-slate-600',
    rose: 'text-rose-600'
  };

  return (
    <motion.div 
      className={`rounded-xl border p-6 h-full ${colorClasses[color]} hover:shadow-lg transition-all duration-300`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: false }}
    >
      <h3 className={`text-4xl font-bold mb-3 ${percentageColorClasses[color]}`}>
        {percentage}
      </h3>
      <p className={`text-base ${textColorClasses[color]}`}>
        {description}
      </p>
      {source && (
        <p className="text-xs text-slate-500 mt-3">
          Source: {source}
        </p>
      )}
    </motion.div>
  );
};

export default StatCard;