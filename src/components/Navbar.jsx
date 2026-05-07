import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaBars, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track scroll for glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    ['home', ...navItems.map(n => n.id)].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'py-3 glass border-b border-white/[0.06]'
            : 'py-5 bg-transparent'
          }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo('home')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 group"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-black"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
            >
              AB
            </div>
            <span className="text-sm font-semibold text-white hidden sm:block">Aniket Bhagat</span>
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === item.id
                    ? 'text-white bg-white/[0.08]'
                    : 'text-zinc-500 hover:text-white hover:bg-white/[0.04]'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/aniketbhagat2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/aniketbhagat16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="/Resume.pdf"
              download
              target="_blank"
              className="btn-primary py-1.5 px-4 text-xs"
            >
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-4 right-4 z-40 rounded-2xl glass border border-white/[0.08] p-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 ${activeSection === item.id
                      ? 'text-white bg-white/[0.08]'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 mt-2 border-t border-white/[0.06] flex items-center gap-3">
                <a href="https://github.com/aniketbhagat2" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white"><FaGithub size={18} /></a>
                <a href="https://linkedin.com/in/aniketbhagat16" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white"><FaLinkedin size={18} /></a>
                <a href="/Resume.pdf" download target="_blank" className="btn-primary py-1.5 px-4 text-xs ml-auto">Download Resume</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
