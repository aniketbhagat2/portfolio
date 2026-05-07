import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
  {
    title: 'Full Stack Developer Trainee',
    company: 'Prushal Technology Pvt. Ltd.',
    location: 'Pune, Maharashtra (On-Site)',
    period: 'Feb 2026 – Present',
    type: 'Full-time',
    color: '#3b82f6',
    responsibilities: [
      'Developing scalable MERN stack applications for enterprise clients',
      'Building RESTful APIs with Node.js and Express.js',
      'Implementing JWT authentication and secure routing mechanisms',
      'Creating responsive React.js dashboards with real-time data',
      'Designing and optimizing MongoDB schemas for CRM systems',
      'Contributing to Employee Management and CRM platforms',
    ],
  },
  {
    title: 'Full Stack Development Intern',
    company: 'UptoSkills',
    location: 'Remote',
    period: 'Apr 2025 – Jul 2025',
    type: 'Internship',
    color: '#8b5cf6',
    responsibilities: [
      'Built full-stack web applications using the MERN stack',
      'Developed modular dashboard components and admin panels',
      'Implemented CRUD operations with database integrations',
      'Integrated third-party APIs into existing workflows',
      'Built responsive frontends optimized for mobile devices',
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="section-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="section-tag">Experience</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Professional{' '}
            <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6, transparent)' }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative md:pl-16"
              >
                {/* Timeline dot (desktop) */}
                <div
                  className="absolute left-3.5 top-6 w-5 h-5 rounded-full border-2 border-[#09090b] hidden md:flex items-center justify-center"
                  style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}60` }}
                >
                  <div className="w-2 h-2 rounded-full bg-white/80" />
                </div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className="card card-glow p-6 md:p-8"
                >
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-sm font-semibold" style={{ color: exp.color }}>{exp.company}</p>
                      <div className="flex items-center gap-1.5 text-zinc-500 text-xs mt-1">
                        <FaMapMarkerAlt size={10} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
                      <span
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{
                          background: `${exp.color}18`,
                          border: `1px solid ${exp.color}35`,
                          color: exp.color,
                        }}
                      >
                        {exp.type}
                      </span>
                      <span className="text-xs text-zinc-500 font-mono">{exp.period}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-zinc-400">
                        <FaCheckCircle className="text-emerald-500 mt-0.5 flex-shrink-0" size={12} />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
