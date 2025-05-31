import React from 'react';
import { Bitcoin } from 'lucide-react';

interface LogoProps {
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ light = false }) => {
  return (
    <div className="flex items-center">
      <Bitcoin className={`w-8 h-8 ${light ? 'text-gold-400' : 'text-gold-500'}`} />
      <span className={`ml-2 text-2xl font-heading font-bold ${light ? 'text-white' : 'text-primary-800 dark:text-white'}`}>
        Bit<span className={light ? 'text-gold-400' : 'text-gold-500'}>Birr</span>
      </span>
    </div>
  );
};

export default Logo;