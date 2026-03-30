'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Loader({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [isPresent, setIsPresent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPresent(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence 
      onExitComplete={onLoadingComplete}
      mode="wait"
    >
      {isPresent && (
        <motion.div
           key="loader-overlay"
           className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-white"
           initial={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl font-bold font-[cursive]"
          >
            O.U
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
