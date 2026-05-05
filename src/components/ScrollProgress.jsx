import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollPercentage(Math.round(latest * 100));
    });

    return unsubscribe;
  }, [scrollYProgress]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Progress bar at top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
        initial={{ scaleX: 0 }}
      />

      {/* Floating scroll indicator */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40"
        >
          <div className="relative">
            <div className="w-12 h-32 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700">
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
                style={{ 
                  height: `${scrollPercentage}%`,
                  transition: 'height 0.1s ease-out'
                }}
              />
            </div>
            <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-gray-300 whitespace-nowrap">
              {scrollPercentage}%
            </div>
          </div>
        </motion.div>
      )}

      {/* Back to top button */}
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-40 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </>
  );
};

export default ScrollProgress;
