import { useInView } from 'framer-motion';
import { useMotionValue, useSpring } from 'framer-motion';

export const useScrollAnimation = (ref, options = {}) => {
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.3, 
    ...options 
  });

  const scale = useMotionValue(0.8);
  const opacity = useMotionValue(0);
  
  const animatedScale = useSpring(scale, { stiffness: 300, damping: 30 });
  const animatedOpacity = useSpring(opacity, { stiffness: 300, damping: 30 });

  if (isInView) {
    scale.set(1);
    opacity.set(1);
  }

  return {
    isInView,
    scale: animatedScale,
    opacity: animatedOpacity
  };
};
