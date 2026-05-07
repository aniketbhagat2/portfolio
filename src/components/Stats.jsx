import { animate, motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const stats = [
  { value: 5, suffix: '+', label: 'Projects Completed' },
  { value: 10, suffix: '+', label: 'Technologies Used' },
  { value: 4, suffix: '', label: 'Certifications Earned' },
  { value: 1, suffix: '', label: 'Patent / Copyright Filed' },
];

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: v => { if (node) node.textContent = Math.floor(v) + suffix; },
    });
    return () => controls.stop();
  }, [isInView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-12 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-6 text-center group hover:card-glow"
            >
              <div
                className="text-4xl md:text-5xl font-black mb-2 gradient-text"
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs text-zinc-500 font-medium leading-tight">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
