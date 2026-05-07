import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaDatabase, FaLayerGroup, FaRocket } from 'react-icons/fa';

const highlights = [
  {
    icon: <FaCode className="text-blue-400" size={20} />,
    title: 'Full-Stack Engineering',
    desc: 'End-to-end MERN development from REST APIs to React dashboards',
  },
  {
    icon: <FaDatabase className="text-purple-400" size={20} />,
    title: 'Backend & APIs',
    desc: 'Node.js + Express APIs, JWT auth, MongoDB schema optimization',
  },
  {
    icon: <FaLayerGroup className="text-indigo-400" size={20} />,
    title: 'SaaS Products',
    desc: 'CRM platforms, employee management, LMS — real production systems',
  },
  {
    icon: <FaRocket className="text-emerald-400" size={20} />,
    title: 'IoT & Innovation',
    desc: 'Patent-filed ResQFire IoT system for real-time fire detection',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section id="about" className="section">
      <div className="section-inner" ref={ref}>
        {/* Tag */}
        <motion.div
          custom={0} variants={variants}
          initial="hidden" animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="section-tag">About Me</div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: bio */}
          <motion.div
            custom={1} variants={variants}
            initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Building products that{' '}
              <span className="gradient-text">make an impact</span>
            </h2>

            <div className="space-y-4 text-zinc-400 leading-relaxed text-[15px]">
              <p>
                I'm a Full Stack MERN Developer currently building enterprise-grade products at{' '}
                <span className="text-zinc-200 font-medium">Prushal Technology Pvt. Ltd.</span> in Pune.
                I specialize in crafting scalable web applications and RESTful APIs that solve real business problems.
              </p>
              <p>
                My stack revolves around <span className="text-zinc-300">React.js, Node.js, Express</span>, and <span className="text-zinc-300">MongoDB</span> —
                but I'm equally comfortable with MySQL, Tailwind CSS, JWT authentication, and building complete CRM and LMS platforms from scratch.
              </p>
              <p>
                From designing MongoDB schemas to shipping responsive React dashboards, I take ownership of the full product lifecycle —
                the way engineers at top SaaS companies do.
              </p>
            </div>

            {/* Quick facts */}
            <div
              className="mt-8 p-4 rounded-xl space-y-2 text-sm"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {[
                ['📍', 'Location', 'Pune, Maharashtra (Open to relocation)'],
                ['✉️', 'Email', 'bhagataniket11@gmail.com'],
                ['🏢', 'Current', 'Prushal Technology Pvt. Ltd. · Trainee'],
                ['🎓', 'Education', 'B.Tech in Computer Science and Engineering'],
              ].map(([emoji, key, value]) => (
                <div key={key} className="flex items-center gap-3">
                  <span>{emoji}</span>
                  <span className="text-zinc-600 w-20 flex-shrink-0">{key}</span>
                  <span className="text-zinc-300">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i + 2} variants={variants}
                initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                whileHover={{ y: -4 }}
                className="card card-glow p-5"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {item.icon}
                </div>
                <h4 className="text-sm font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
