import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaArrowDown, FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const roles = ['Full Stack Developer', 'MERN Expert', 'UI/UX Designer', 'Problem Solver'];
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yStars = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityStars = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleStars = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  
  // Mouse tracking for 3D effect
  const springConfig = { damping: 25, stiffness: 300 };
  const mouseX = useSpring(mousePosition.x, springConfig);
  const mouseY = useSpring(mousePosition.y, springConfig);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 30 + 15,
    delay: Math.random() * 5,
    color: ['#3b82f6', '#8b5cf6', '#10b981'][Math.floor(Math.random() * 3)]
  }));

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative"
      >
        {/* Professional title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tight">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
              <span className="text-gray-300 font-light">Hi, I'm</span>
              <span className="gradient-text font-bold">
                Aniket Bhagat
              </span>
            </div>
          </h1>
        </motion.div>

        {/* Professional headline and tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl text-gray-200 mb-4 font-bold">
            Full Stack Developer | Data Analyst
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
            Full Stack MERN Developer with hands-on experience building scalable web applications and RESTful APIs.
            Currently developing enterprise solutions at Prushal Technology with expertise in React.js, Node.js, Express.js, and MongoDB.
            Strong foundation in Data Structures, DBMS, and certified in Generative AI fundamentals.
          </p>
        </motion.div>

        {/* Professional CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8 mb-12"
        >
          <motion.a
            href="/resume.pdf"
            download
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="professional-button bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 font-semibold focus-ring flex items-center justify-center gap-2"
          >
            <FaDownload />
            View Resume
          </motion.a>
          
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="professional-button border-2 border-gray-600 hover:border-gray-500 hover:bg-gray-800 text-gray-300 px-8 py-3 font-semibold focus-ring"
          >
            View Projects
          </motion.a>
        </motion.div>

        {/* Clean tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center flex-wrap gap-3 mb-12"
        >
          {['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Express'].map((skill, index) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="professional-card px-4 py-2 text-sm font-medium text-gray-300 border-gray-700/50"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Professional social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-6"
        >
          {[
            { icon: FaGithub, href: "https://github.com/aniketbhagat2" },
            { icon: FaLinkedin, href: "https://linkedin.com/in/aniketbhagat16" },
            { icon: FaEnvelope, href: "mailto:bhagataniket11@gmail.com" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Subtle scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#about"
          className="text-gray-500 hover:text-gray-300 transition-colors duration-200 flex flex-col items-center gap-1"
        >
          <FaArrowDown size={20} />
          <span className="text-xs">Scroll</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
