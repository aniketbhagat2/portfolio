import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
    >
      <div className="relative">
        {/* Animated background circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ 
                scale: [0, 1.5, 2.5],
                opacity: [0.5, 0.3, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut"
              }}
              className="absolute w-32 h-32 rounded-full border-2 border-blue-500"
              style={{ 
                borderColor: i === 0 ? '#3b82f6' : i === 1 ? '#8b5cf6' : '#10b981'
              }}
            />
          ))}
        </div>

        {/* Logo/Name */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              Aniket Bhagat
            </span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 rounded-full mx-auto"
          />
        </motion.div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex items-center gap-2 text-gray-400">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"
            />
            <span className="text-sm">Loading amazing content...</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
