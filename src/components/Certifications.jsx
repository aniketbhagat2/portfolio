import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaAward, FaStar, FaTimes, FaTrophy } from 'react-icons/fa';

const certificationCategories = [
  {
    category: 'AI & Machine Learning',
    certifications: [
      {
        title: 'TensorFlow for Neural Network Solutions',
        issuer: 'Infosys Springboard',
        year: '2025',
        icon: '🧠',
        color: '#8b5cf6',
        desc: 'Built foundational knowledge of neural networks, TensorFlow workflows, and deep learning concepts.',
        pdfFile: 'AU22B1006_Aniket_Bhagat_TensorFlow for Neural Network Solutions__Certificate_Infosys_Springboard.pdf.pdf',
      },
      {
        title: 'Machine Learning Certification',
        issuer: 'Infosys Springboard',
        year: '2024',
        icon: '🤖',
        color: '#ec4899',
        desc: 'Core machine learning concepts including supervised and unsupervised learning algorithms.',
        pdfFile: 'AU22B1006_Aniket_Bhagat_ML_Certificate.pdf',
      },
      {
        title: 'Generative AI for Beginners',
        issuer: 'Simplilearn',
        year: '2026',
        icon: '✨',
        color: '#22c55e',
        desc: 'Introduction to generative AI, LLMs, prompt engineering, and real-world AI applications.',
        pdfFile: 'Aniket_Bhagat_Generative_AI_for _Begineers_simplilearn.pdf',
      },
      {
        title: 'Introduction to Generative AI',
        issuer: 'Google Cloud',
        year: '2026',
        icon: '🟡',
        color: '#FBBC05',
        desc: 'Learned foundations of generative AI and Google Cloud AI ecosystem.',
        pdfFile: 'Aniket_Bhagat_Introduction_to_Generative_AI_Google_Cloud.pdf',
      },
      {
        title: 'AI Fundamentals',
        issuer: 'Infosys Springboard',
        year: '2024',
        icon: '🧩',
        color: '#6366f1',
        desc: 'Fundamental concepts of artificial intelligence and intelligent systems.',
        pdfFile: 'AU22B1006_Aniket_Bhagat_AI_Fundamenals_Certificate_Infosys_Springboard.pdf',
      },
    ],
  },

  {
    category: 'Development',
    certifications: [
      {
        title: 'Advanced Projects in Electron 4, React, and Redux',
        issuer: 'Infosys Springboard',
        year: '2024',
        icon: '💻',
        color: '#3b82f6',
        desc: 'Hands-on development experience with React, Redux, and Electron applications.',
        pdfFile: 'Electron_Redux_Certificate.pdf',
      },
    ],
  },

  {
    category: 'Cloud & Security',
    certifications: [
      {
        title: 'Cloud Computing Global Certification',
        issuer: 'Infosys Springboard',
        year: '2024',
        icon: '☁️',
        color: '#0ea5e9',
        desc: 'Cloud computing fundamentals including deployment models and cloud services.',
        pdfFile: 'AU22B1006_Aniket_Bhagat_Cloud_Computing_Global Certification .pdf',
      },
      {
        title: 'Computer Network & Internet Security',
        issuer: 'Infosys Springboard',
        year: '2024',
        icon: '🔐',
        color: '#14b8a6',
        desc: 'Networking fundamentals, internet protocols, and cybersecurity basics.',
        pdfFile: 'Aniket Bhagat_AU22B1006_CN_Infosys Springboard.pdf',
      },
      {
        title: 'Red Hat Certification',
        issuer: 'Red Hat',
        year: '2025',
        icon: '🐧',
        color: '#ef4444',
        desc: 'Linux system fundamentals and Red Hat ecosystem knowledge.',
        pdfFile: 'Aniket_Bhagat_Red_Hat_Certificate.pdf',
      },
    ],
  },

  {
    category: 'Data Analytics',
    certifications: [
      {
        title: 'Data Analytics Essentials',
        issuer: 'Cisco Networking Academy',
        year: '2025',
        icon: '📊',
        color: '#06b6d4',
        desc: 'Data analysis, visualization, and business decision-making fundamentals.',
        pdfFile: 'AU22B1006_Aniket_Bhagat_Data_Analytics_Essentials_Course_Certificate_Cisco_Networking_Academy.pdf',
      },
    ],
  },

  {
    category: 'IoT',
    certifications: [
      {
        title: 'IoT 201 Certification',
        issuer: 'Infosys Springboard',
        year: '2024',
        icon: '🌐',
        color: '#10b981',
        desc: 'Internet of Things concepts, smart systems, and connected device ecosystems.',
        pdfFile: 'AU22B1006_Aniket Bhagat_IOT 201_Course Certification from Infosys Springboard.pdf',
      },
    ],
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
    desc: "Selected to participate in Flipkart Grid 6.0, one of India's most competitive engineering challenges.",
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

/* ─── Certificate Modal ─────────────────────────────────────────── */
const CertificationModal = ({ cert, onClose }) => {
  const pdfUrl = cert.pdfFile
    ? `/Certificates/${encodeURIComponent(cert.pdfFile)}`
    : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl "
        style={{ background: '#111114', border: '1px solid rgba(255,255,255,0.1)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal header gradient */}
        <div
          className="h-2 w-full flex-shrink-0"
          style={{ background: `linear-gradient(90deg, ${cert.color}, ${cert.color}80)` }}
        />

        <div className="p-8 flex-1 flex flex-col min-h-0">
          <div className="flex items-start justify-between mb-6 flex-shrink-0">
            <div>
              <span
                className="text-[10px] font-semibold uppercase tracking-wider mb-2 block"
                style={{ color: cert.color }}
              >
                {cert.issuer}
              </span>
              <h3 className="text-2xl font-bold text-white leading-snug">
                {cert.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/[0.08] transition-colors flex-shrink-0 ml-4"
            >
              <FaTimes size={14} />
            </button>
          </div>

          {/* PDF Viewer */}
          <div className="rounded-xl overflow-hidden border border-white/[0.05] h-[28vh] md:h-[65vh]">
            {pdfUrl ? (
              <iframe
                src={`${pdfUrl}#toolbar=0`}
                title={cert.title}
                className="w-full h-full border-0 bg-[#1a1a1e]"
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-[#1a1a1e]">
                <span className="text-6xl mb-4">📄</span>
                <p className="text-zinc-400 text-lg font-medium">Certificate PDF not available yet</p>
                <p className="text-zinc-600 text-sm mt-2">Will be added soon</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Main Component ────────────────────────────────────────────── */
const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
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
          <p className="text-zinc-500 text-sm mt-2 max-w-lg">
            Click any certificate card to view the certificate.
          </p>
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
          <div className="space-y-10">
            {certificationCategories.map((section, sectionIndex) => (
              <div key={section.category}>
                <h4 className="text-lg font-semibold text-white mb-5">
                  {section.category}
                </h4>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.certifications.map((cert, i) => (
                    <motion.div
                      key={cert.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.1 + i * 0.08,
                      }}
                      whileHover={{ y: -5 }}
                      onClick={() => setSelectedCert(cert)}
                      className="card card-glow p-5 cursor-pointer group relative overflow-hidden"
                    >
                      {/* Hover overlay hint */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3 pointer-events-none"
                        style={{ background: `linear-gradient(135deg, transparent 60%, ${cert.color}18)` }}
                      >
                        <span
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                          style={{ background: `${cert.color}20`, color: cert.color, border: `1px solid ${cert.color}30` }}
                        >
                          View →
                        </span>
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl">{cert.icon}</span>

                        <span
                          className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full"
                          style={{
                            background: `${cert.color}18`,
                            color: cert.color,
                            border: `1px solid ${cert.color}30`,
                          }}
                        >
                          {cert.year}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-white mb-1 leading-snug">
                        {cert.title}
                      </h4>

                      <p
                        className="text-xs font-medium mb-2"
                        style={{ color: cert.color }}
                      >
                        {cert.issuer}
                      </p>

                      <p className="text-[11px] text-zinc-500 leading-relaxed">
                        {cert.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
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

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <CertificationModal
            cert={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
