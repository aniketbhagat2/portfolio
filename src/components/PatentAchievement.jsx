import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt, FaGithub, FaLightbulb, FaRocket } from 'react-icons/fa';

const PatentAchievement = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="patent" className="py-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full">
              <FaAward className="text-white text-2xl" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Patent <span className="gradient-text">Achievement</span>
            </h2>
          </motion.div>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Innovation that bridges cutting-edge technology with real-world problem solving
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"
            }}
            className="relative group"
          >
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl blur-lg group-hover:opacity-100 opacity-75 transition duration-300" />
            
            <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-yellow-500/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
              {/* Header with icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="flex justify-center mb-8"
              >
                <div className="p-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl shadow-lg">
                  <FaLightbulb className="text-white text-4xl" />
                </div>
              </motion.div>

              {/* Project title */}
              <motion.h3
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-center mb-6"
              >
                IoT-Based Smart <span className="text-yellow-400">Agricultural</span> Monitoring System
              </motion.h3>

              {/* Problem statement */}
              <motion.div
                variants={itemVariants}
                className="mb-8"
              >
                <h4 className="text-xl font-semibold mb-3 text-red-400 flex items-center gap-2">
                  <FaRocket className="text-lg" />
                  Problem Solved
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Traditional farming methods lacked real-time monitoring capabilities, leading to inefficient resource usage, 
                  crop losses, and reduced agricultural productivity. Farmers needed an affordable, scalable solution to 
                  monitor soil conditions, weather patterns, and crop health remotely.
                </p>
              </motion.div>

              {/* Innovation details */}
              <motion.div
                variants={itemVariants}
                className="grid md:grid-cols-2 gap-8 mb-8"
              >
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-blue-400">Innovation</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Developed a comprehensive IoT ecosystem combining sensor networks, machine learning algorithms, 
                    and mobile applications to provide real-time agricultural insights and automated decision-making.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-green-400">Impact</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Patent-pending technology that has helped 100+ farmers increase crop yield by 30% while 
                    reducing water consumption by 40% through precision agriculture techniques.
                  </p>
                </div>
              </motion.div>

              {/* Tech stack */}
              <motion.div
                variants={itemVariants}
                className="mb-8"
              >
                <h4 className="text-xl font-semibold mb-3 text-purple-400">Technologies</h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  {['IoT Sensors', 'Machine Learning', 'React Native', 'Node.js', 'MongoDB', 'AWS IoT Core'].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(251, 191, 36, 0.3)"
                      }}
                      className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
                >
                  <FaExternalLinkAlt />
                  Patent Documentation
                </motion.a>
                
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass-effect border border-yellow-500/30 hover:border-yellow-500/50 text-yellow-400 px-8 py-3 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <FaGithub />
                  GitHub Repository
                </motion.a>
              </motion.div>

              {/* Achievement badges */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center gap-6 mt-8"
              >
                {[
                  { icon: '🏆', label: 'Patent Pending' },
                  { icon: '🌱', label: '100+ Farmers Helped' },
                  { icon: '📈', label: '30% Yield Increase' }
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl mb-1">{badge.icon}</div>
                    <div className="text-xs text-gray-400">{badge.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PatentAchievement;
