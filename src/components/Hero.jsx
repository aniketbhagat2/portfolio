import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const techBadges = [
  { label: 'React.js', color: '#61DAFB' },
  { label: 'Node.js', color: '#68A063' },
  { label: 'MongoDB', color: '#47A248' },
  { label: 'Express.js', color: '#a1a1aa' },
  { label: 'JavaScript', color: '#F7DF1E' },
  { label: 'Tailwind CSS', color: '#38BDF8' },
  { label: 'JWT Auth', color: '#6366f1' },
  { label: 'REST APIs', color: '#8b5cf6' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 overflow-hidden"
    >
      {/* Background: dot grid */}
      <div
        className="absolute inset-0 dot-grid opacity-40 pointer-events-none"
        style={{ backgroundSize: '28px 28px' }}
      />

      {/* Gradient orbs */}
      <div
        className="orb w-[500px] h-[500px] -top-32 -left-32 opacity-[0.12]"
        style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)' }}
      />
      <div
        className="orb w-[400px] h-[400px] -bottom-32 -right-32 opacity-[0.10]"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)' }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <div className="section-tag">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities · Open to relocation
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-black tracking-tighter leading-none mb-6"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text">Aniket Bhagat</span>
        </motion.h1>

        {/* Role */}
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-300 mb-3">
            Full Stack MERN Developer
          </h2>
          <p className="text-base text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Building scalable SaaS applications and RESTful APIs at{' '}
            <span className="text-zinc-300 font-medium">Prushal Technology Pvt. Ltd.</span>
            {' '}— crafting end-to-end products with React, Node.js, Express & MongoDB.
          </p>
        </motion.div>

        {/* Location */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-1.5 text-zinc-500 text-sm mb-10">
          <FaMapMarkerAlt size={12} />
          <span>Pune, India</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
        >
          <a
            href="#projects"
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary text-sm"
          >
            View Projects
          </a>
          <a
            href="/Resume.pdf"
            download
            target="_blank"
            className="btn-secondary text-sm"
          >
            <FaDownload size={13} />
            Download Resume
          </a>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-secondary text-sm"
          >
            <FaEnvelope size={13} />
            Contact Me
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-14">
          {[
            { icon: FaGithub, href: 'https://github.com/aniketbhagat2', label: 'GitHub' },
            { icon: FaLinkedin, href: 'https://linkedin.com/in/aniketbhagat16', label: 'LinkedIn' },
            { icon: FaEnvelope, href: 'mailto:bhagataniket11@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-zinc-500 hover:text-white transition-colors"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </motion.div>

        {/* Floating tech badges */}
        <motion.div variants={itemVariants}>
          <p className="text-xs text-zinc-600 mb-4 uppercase tracking-widest">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-2">
            {techBadges.map((badge, i) => (
              <motion.span
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#a1a1aa',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: badge.color }}
                />
                {badge.label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-600"
      >
        <div className="w-px h-8 rounded-full" style={{ background: 'linear-gradient(to bottom, transparent, #3b82f6)' }} />
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
