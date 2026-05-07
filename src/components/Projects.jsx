import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'CRM & Employee Management System',
    category: 'SaaS · Enterprise',
    description:
      'A production-grade SaaS CRM platform with role-based authentication, lead tracking, employee management, and real-time dashboard analytics.',
    tech: ['React.js', 'Django REST API', 'MongoDB', 'JWT Auth', 'Tailwind CSS'],
    features: [
      'Role-based access control (Admin, Manager, Employee)',
      'Lead tracking and pipeline management',
      'Employee onboarding and attendance system',
      'Real-time dashboard with analytics',
      'Full REST API integration',
    ],
    gradient: 'from-blue-600/20 to-indigo-600/20',
    accent: '#3b82f6',
    github: 'https://github.com/aniketbhagat2',
    live: '#',
  },
  {
    id: 2,
    title: 'Learning Management System (LMS)',
    category: 'EdTech · MERN',
    description:
      'Full-featured LMS built on the MERN stack. Supports course management, admin dashboards, file uploads, student authentication, and API-driven content delivery.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Auth'],
    features: [
      'Course creation and management',
      'Admin and student role dashboards',
      'Secure authentication with JWT',
      'File and document handling',
      'RESTful API backend',
    ],
    gradient: 'from-purple-600/20 to-violet-600/20',
    accent: '#8b5cf6',
    github: 'https://github.com/aniketbhagat2',
    live: '#',
  },
  {
    id: 3,
    title: 'Campus Management System',
    category: 'Operations · React + Node',
    description:
      'Digitized campus security and operations platform featuring guard scheduling, visitor management, attendance tracking, and automated workflow management.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    features: [
      'Security and guard management',
      'Visitor entry and exit logs',
      'Attendance tracking module',
      'Scheduling automation',
      'Digitized workflow',
    ],
    gradient: 'from-emerald-600/20 to-teal-600/20',
    accent: '#10b981',
    github: 'https://github.com/aniketbhagat2',
    live: '#',
  },
  {
    id: 4,
    title: 'Madhav Science College Website',
    category: 'Web Redesign · React',
    description:
      'Transformed a static institutional website into a modern, dynamic React SPA — improving performance by 40%, mobile experience, and student engagement.',
    tech: ['React.js', 'CSS3', 'Responsive Design'],
    features: [
      'Single Page Application architecture',
      'Mobile-first responsive design',
      '40% faster page load speed',
      'Improved navigation and UX',
      'Modern, clean interface',
    ],
    gradient: 'from-orange-600/20 to-amber-600/20',
    accent: '#f97316',
    github: 'https://github.com/aniketbhagat2',
    live: 'https://madhavscienceclg.netlify.app/',
  },
  {
    id: 5,
    title: 'ResQFire – IoT Fire Monitoring System',
    category: 'IoT · Patent Filed',
    description:
      'Patent/copyright-filed IoT-based fire monitoring system using ESP32 microcontroller. Provides real-time fire detection with automated multi-channel alerts.',
    tech: ['ESP32', 'IoT Sensors', 'Email Automation', 'Real-time Monitoring'],
    features: [
      'Real-time fire and smoke detection',
      'Automated email + SMS alerts',
      'Multi-sensor integration (temperature, gas, smoke)',
      'Patent / Copyright filed',
      'Live monitoring dashboard',
    ],
    gradient: 'from-red-600/20 to-pink-600/20',
    accent: '#ef4444',
    github: 'https://github.com/aniketbhagat2',
    live: '#',
  },
];

const ProjectModal = ({ project, onClose }) => (
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
      className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
      style={{ background: '#111114', border: '1px solid rgba(255,255,255,0.1)' }}
      onClick={e => e.stopPropagation()}
    >
      {/* Modal header gradient */}
      <div
        className={`h-2 w-full rounded-t-2xl bg-gradient-to-r ${project.gradient.replace('/20', '')}`}
        style={{ background: `linear-gradient(90deg, ${project.accent}, ${project.accent}80)` }}
      />

      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="section-tag mb-2">{project.category}</span>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            <FaTimes size={14} />
          </button>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed mb-6">{project.description}</p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
          <ul className="space-y-2">
            {project.features.map(f => (
              <li key={f} className="flex items-center gap-2 text-sm text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.accent }} />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="text-sm font-semibold text-white mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="skill-badge text-xs">{t}</span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          {project.live !== '#' && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm flex-1 justify-center">
              <FaExternalLinkAlt size={12} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="section-tag">Projects</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Featured{' '}
            <span className="gradient-text">Work</span>
          </h2>
          <p className="text-zinc-500 text-sm mt-2 max-w-lg">
            Real-world products and applications built end-to-end — click any card for details.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelected(project)}
              className="card card-glow cursor-pointer overflow-hidden group"
            >
              {/* Top accent bar */}
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${project.accent}, ${project.accent}50)` }}
              />

              {/* Gradient header */}
              <div
                className={`h-28 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-black text-white/80"
                  style={{ background: `${project.accent}25`, border: `1px solid ${project.accent}40` }}
                >
                  {project.title.charAt(0)}
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: 'rgba(0,0,0,0.3)' }}
                >
                  <span className="text-xs font-medium text-white bg-black/40 px-3 py-1 rounded-full">View Details →</span>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-3">
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider"
                    style={{ color: project.accent }}
                  >
                    {project.category}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1 leading-snug">{project.title}</h3>
                </div>

                <p className="text-xs text-zinc-500 leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full text-zinc-500" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full text-zinc-600" style={{ background: 'rgba(255,255,255,0.04)' }}>
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-white/[0.05]">
                  <span className="flex-1" />
                  <button className="text-xs font-medium" style={{ color: project.accent }}>
                    Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
