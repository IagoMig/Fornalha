import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
type SplashScreenProps = {
  onComplete: () => void;
};
export function SplashScreen({
  onComplete
}: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);
  return <div className="fixed inset-0 flex items-center justify-center bg-black">
      <motion.div initial={{
      opacity: 0,
      scale: 0.8
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }} className="flex flex-col items-center">
        <motion.img src="/4.png" alt="Fornalha Pizzaria" className="w-96 md:w-200" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} />
        <motion.div className="mt-8 h-1 w-32 overflow-hidden rounded-full bg-white/20" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.8
      }}>
          <motion.div className="h-full bg-[#722F37]" initial={{
          width: 0
        }} animate={{
          width: '100%'
        }} transition={{
          duration: 1.5,
          delay: 0.9,
          ease: 'easeInOut'
        }} />
        </motion.div>
      </motion.div>
    </div>;
}
