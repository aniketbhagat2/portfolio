import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaAward, FaStar, FaTrophy } from 'react-icons/fa';

const certifications = [
  {
    title: 'Data Analytics Essentials',
    issuer: 'Cisco',
    type: 'Certification',
    icon: '🔵',
    color: '#1BA0D7',
    desc: 'Data analysis fundamentals, visualization, and decision-making with data.',
  },
  {
    title: 'Generative AI Fundamentals',
    issuer: 'Google Cloud',
    type: 'Certification',
    icon: '🟡',
    color: '#FBBC05',
    desc: 'Foundations of generative AI, LLMs, and Google Cloud AI tools.',
  },
  {
    title: 'Generative AI Course',
    issuer: 'Simplilearn',
    type: 'Certification',
    icon: '🟢',
    color: '#22c55e',
    desc: 'Comprehensive generative AI training covering transformers and applications.',
  },
  {
    title: 'AI-First Development',
    issuer: 'Infosys Springboard',
    type: 'Certification',
    icon: '🟣',
    color: '#8b5cf6',
    desc: 'AI-first thinking and implementation strategies for software engineers.',
  },
];

const achievements = [
  {
    icon: <FaTrophy className="text-amber-400" size={18} />,
    title: 'Patent / Copyright Filed',
    subtitle: 'ResQFire – IoT Fire Monitoring System',
    desc: 'Innovative IoT-based fire detection system with automated alert mechanisms. Patent/copyright filed with the Indian Patent Office.',
    color: '#f59e0b',
  },
  {
    icon: <FaStar className="text-blue-400" size={18} />,
    title: 'Flipkart Grid 6.0',
    subtitle: 'National Level Hackathon Participant',
    desc: 'Selected to participate in Flipkart Grid 6.0, one of India\'s most competitive engineering challenges.',
    color: '#3b82f6',
  },
  {
    icon: <FaAward className="text-purple-400" size={18} />,
    title: 'Technical Events Secretary',
    subtitle: 'College Technical Committee',
    desc: 'Organized and managed department-level technical events, hackathons, and coding competitions.',
    color: '#8b5cf6',
  },
  {
    icon: <FaAward className="text-emerald-400" size={18} />,
    title: 'Student Representative',
    subtitle: 'Department Council',
    desc: 'Elected as student representative for the Computer Science department, advocating student interests.',
    color: '#10b981',
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" className="section" ref={ref}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="section-tag">Recognition</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Certifications &{' '}
            <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-5">
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -4 }}
                className="card card-glow p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{cert.icon}</span>
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ background: `${cert.color}18`, color: cert.color, border: `1px solid ${cert.color}30` }}
                  >
                    {cert.type}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1 leading-snug">{cert.title}</h4>
                <p className="text-xs font-medium mb-2" style={{ color: cert.color }}>{cert.issuer}</p>
                <p className="text-[11px] text-zinc-600 leading-relaxed">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-5">
            Achievements
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                whileHover={{ y: -3 }}
                className="card card-glow p-5 flex gap-4"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${ach.color}15`, border: `1px solid ${ach.color}30` }}
                >
                  {ach.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">{ach.title}</h4>
                  <p className="text-xs font-medium mb-1.5" style={{ color: ach.color }}>{ach.subtitle}</p>
                  <p className="text-[11px] text-zinc-500 leading-relaxed">{ach.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
