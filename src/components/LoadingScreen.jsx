import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return p + Math.random() * 18 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#09090b]"
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="orb w-64 h-64 top-1/4 left-1/4 opacity-20"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)' }}
        />
        <div
          className="orb w-64 h-64 bottom-1/4 right-1/4 opacity-20"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Monogram */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center w-20 h-20 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            boxShadow: '0 0 40px rgba(99, 102, 241, 0.4)',
          }}
        >
          <span className="text-3xl font-black text-white tracking-tighter">AB</span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold text-white tracking-tight">Aniket Bhagat</h1>
          <p className="text-sm text-zinc-500 mt-1">Full Stack Developer</p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="relative h-[2px] bg-white/10 rounded-full overflow-hidden"
          style={{ width: 200 }}
        >
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              width: `${Math.min(progress, 100)}%`,
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
              boxShadow: '0 0 8px rgba(99, 102, 241, 0.6)',
            }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xs text-zinc-600"
        >
          Loading portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
