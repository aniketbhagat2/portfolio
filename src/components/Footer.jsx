import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      href: "https://github.com/aniketbhagat2",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      href: "https://linkedin.com/in/aniketbhagat16",
      label: "LinkedIn"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      href: "mailto:bhagataniket11@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Aniket Bhagat
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Full Stack MERN Developer passionate about building scalable web applications 
              and innovative IoT solutions. Currently developing enterprise solutions at Prushal Technology.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 transition-colors duration-300 border border-gray-700 hover:border-blue-500/50"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-blue-400" />
                <span className="text-sm">bhagataniket11@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-green-400" />
                <span className="text-sm">+91 9644029869</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-red-400" />
                <span className="text-sm">Ujjain, Madhya Pradesh</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-sm text-center">
              © {currentYear} Aniket Bhagat. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
