import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  backgroundImage?: string;
  justify?: 'center' | 'start';
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, backgroundImage, justify = 'center' }) => {
  const justifyClass = justify === 'start' ? 'justify-start' : 'justify-center';
  
  return (
    <section 
      id={id} 
      className={`relative w-full h-[100dvh] snap-start flex flex-col items-center ${justifyClass} overflow-hidden ${className}`}
    >
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt="Background" 
            className="w-full h-full object-cover opacity-10" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90" />
        </div>
      )}
      
      <div className={`container mx-auto px-4 md:px-12 relative z-10 w-full h-full flex flex-col ${justifyClass}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className={`w-full flex flex-col ${justifyClass} overflow-y-auto no-scrollbar py-10 md:py-0 h-full`}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};