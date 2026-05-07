import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  FaCode, FaDatabase, FaGithub, FaJs, FaNodeJs, FaPython,
  FaReact, FaServer, FaTools
} from 'react-icons/fa';
import {
  SiExpress, SiMongodb, SiMysql, SiPostman,
  SiTailwindcss, SiVite
} from 'react-icons/si';

const categories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: <FaReact size={14} />,
    skills: [
      { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" />, level: 'Expert' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38BDF8]" />, level: 'Expert' },
      { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" />, level: 'Expert' },
      { name: 'HTML5 / CSS3', icon: <FaCode className="text-[#E34F26]" />, level: 'Expert' },
      { name: 'Ant Design', icon: <FaCode className="text-[#1890FF]" />, level: 'Advanced' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: <FaServer size={14} />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-[#68A063]" />, level: 'Expert' },
      { name: 'Express.js', icon: <SiExpress className="text-zinc-300" />, level: 'Expert' },
      { name: 'REST APIs', icon: <FaServer className="text-blue-400" />, level: 'Expert' },
      { name: 'JWT Auth', icon: <FaServer className="text-purple-400" />, level: 'Advanced' },
      { name: 'Python', icon: <FaPython className="text-[#3776AB]" />, level: 'Intermediate' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: <FaDatabase size={14} />,
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, level: 'Expert' },
      { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" />, level: 'Advanced' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: <FaTools size={14} />,
    skills: [
      { name: 'Git / GitHub', icon: <FaGithub className="text-zinc-300" />, level: 'Expert' },
      { name: 'Postman', icon: <SiPostman className="text-[#EF5B25]" />, level: 'Advanced' },
      { name: 'Vite', icon: <SiVite className="text-[#646CFF]" />, level: 'Advanced' },
    ],
  },
  {
    id: 'concepts',
    label: 'Core Concepts',
    icon: <FaCode size={14} />,
    skills: [
      { name: 'DBMS', icon: <FaDatabase className="text-indigo-400" />, level: 'Advanced' },
      { name: 'OOPs', icon: <FaCode className="text-blue-400" />, level: 'Advanced' },
      { name: 'MVC Architecture', icon: <FaCode className="text-purple-400" />, level: 'Advanced' },
      { name: 'API Integration', icon: <FaServer className="text-emerald-400" />, level: 'Expert' },
      { name: 'SDLC', icon: <FaCode className="text-zinc-400" />, level: 'Advanced' },
    ],
  },
];

const levelColors = {
  Expert: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Advanced: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  Intermediate: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
};

const Skills = () => {
  const [active, setActive] = useState('frontend');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const current = categories.find(c => c.id === active);

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="section-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="section-tag">Skills</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Technical{' '}
            <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === cat.id
                  ? 'text-white border border-indigo-500/40'
                  : 'text-zinc-500 hover:text-zinc-300 border border-transparent'
              }`}
              style={
                active === cat.id
                  ? { background: 'rgba(99,102,241,0.12)' }
                  : { background: 'rgba(255,255,255,0.03)' }
              }
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skill cards */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {current.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className="card card-glow p-4 flex items-center gap-4"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {skill.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">{skill.name}</p>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${levelColors[skill.level]}`}
                >
                  {skill.level}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
