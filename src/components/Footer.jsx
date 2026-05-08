import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
];

const socials = [
  { icon: <FaGithub size={16} />, href: 'https://github.com/aniketbhagat2', label: 'GitHub' },
  { icon: <FaLinkedin size={16} />, href: 'https://linkedin.com/in/aniketbhagat16', label: 'LinkedIn' },
  { icon: <FaEnvelope size={16} />, href: 'mailto:bhagataniket11@gmail.com', label: 'Email' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="border-t py-12 px-4"
      style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.3)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-black"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
              >
                AB
              </div>
              <span className="text-sm font-semibold text-white">Aniket Bhagat</span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed mb-4 max-w-xs">
              Full Stack MERN Developer building scalable web applications and SaaS products.
              Currently at Prushal Technology, Pune.
            </p>
            <div className="flex gap-3">
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -2, scale: 1.1 }}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-white transition-colors"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-zinc-500 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-sm text-zinc-500">bhagataniket11@gmail.com</p>
              <p className="text-sm text-zinc-500">Pune, Maharashtra</p>
              <p className="text-sm text-zinc-500">Open to relocation</p>
              <a
                href="/Resume.pdf"
                download
                target="_blank"
                className="btn-primary inline-flex text-xs py-2 px-4 mt-3"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex items-center justify-center text-center"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs text-zinc-600">
            © {year} Aniket Bhagat · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
