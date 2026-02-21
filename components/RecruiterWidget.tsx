import React from 'react';
import { portfolioConfig } from '@/lib/config';
import { motion } from 'framer-motion';

export const RecruiterWidget = () => {
  const email = portfolioConfig.contact.email;
  const subject = encodeURIComponent("[ROOT ACCESS] Interview Request / Contact");

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto"
    >
      <div className="bg-terminal-green/20 text-terminal-green px-3 py-1 text-[10px] uppercase font-mono border border-terminal-green/50 animate-pulse mb-2 shadow-[0_0_10px_rgba(57,255,20,0.3)]">
        SYSTEM OVERRIDE: ROOT SECURE CHANNEL
      </div>
      <a 
        href={`mailto:${email}?subject=${subject}`}
        className="group relative flex items-center justify-center bg-black border-2 border-terminal-green text-terminal-green px-6 py-3 font-mono font-bold uppercase transition-all hover:bg-terminal-green hover:text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.6)]"
      >
        <span className="mr-3 text-lg">›</span>
        <span>INITIATE CONTACT</span>
      </a>
    </motion.div>
  );
};

export default RecruiterWidget;
