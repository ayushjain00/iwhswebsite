import React from 'react';
import { Heart } from 'lucide-react';

interface LogoProps {
  variant?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-slate-900';
  
  return (
    <div className="flex items-center">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl mr-3">
        <Heart className="text-white\" size={20} />
      </div>
      <div>
        <div className={`font-serif font-bold text-lg ${textColor}`}>EmpowerHealth</div>
        <div className={`text-xs ${variant === 'light' ? 'text-blue-300' : 'text-blue-600'}`}>Research Nexus</div>
      </div>
    </div>
  );
};

export default Logo;