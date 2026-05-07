import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const contactLinks = [
  {
    icon: <FaEnvelope size={16} />,
    label: 'Email',
    value: 'bhagataniket11@gmail.com',
    href: 'mailto:bhagataniket11@gmail.com',
    color: '#3b82f6',
  },
  {
    icon: <FaLinkedin size={16} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/aniketbhagat16',
    href: 'https://linkedin.com/in/aniketbhagat16',
    color: '#0A66C2',
  },
  {
    icon: <FaGithub size={16} />,
    label: 'GitHub',
    value: 'github.com/aniketbhagat2',
    href: 'https://github.com/aniketbhagat2',
    color: '#a1a1aa',
  },
  {
    icon: <FaMapMarkerAlt size={16} />,
    label: 'Location',
    value: 'Pune, Maharashtra · Open to relocation',
    href: '#',
    color: '#ef4444',
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('submitting');
    await new Promise(r => setTimeout(r, 1800));
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="section-tag">Contact</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Let's{' '}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-zinc-500 text-sm mt-2 max-w-lg">
            Open to full-time roles, freelance projects, and exciting collaborations. Let's build something great.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                  style={{ background: `${link.color}18`, border: `1px solid ${link.color}35`, color: link.color }}
                >
                  {link.icon}
                </div>
                <div>
                  <p className="text-xs text-zinc-500 mb-0.5">{link.label}</p>
                  <p className="text-sm text-zinc-300 font-medium group-hover:text-white transition-colors">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs text-zinc-500 mb-1.5 font-medium">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200 focus:ring-1 focus:ring-indigo-500/50"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-zinc-500 mb-1.5 font-medium">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200 focus:ring-1 focus:ring-indigo-500/50"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-zinc-500 mb-1.5 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-zinc-600 outline-none resize-none transition-all duration-200 focus:ring-1 focus:ring-indigo-500/50"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status !== 'idle'}
                whileHover={status === 'idle' ? { scale: 1.01 } : {}}
                whileTap={status === 'idle' ? { scale: 0.99 } : {}}
                className="btn-primary w-full justify-center text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  '✓ Message Sent!'
                ) : (
                  <>
                    <FaPaperPlane size={13} />
                    Send Message
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-emerald-400 text-center pt-1"
                >
                  Thanks for reaching out! I'll reply within 24 hours.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
