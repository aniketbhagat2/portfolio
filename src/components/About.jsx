import { motion } from 'framer-motion';
import { FaCloud, FaCode, FaDatabase, FaMobile } from 'react-icons/fa';

const About = () => {
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

  const features = [
    {
      icon: <FaCode className="text-3xl text-blue-400" />,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with modern frameworks"
    },
    {
      icon: <FaDatabase className="text-3xl text-green-400" />,
      title: "Backend Development",
      description: "Building robust server-side applications and RESTful APIs"
    },
    {
      icon: <FaMobile className="text-3xl text-purple-400" />,
      title: "Mobile Responsive",
      description: "Ensuring seamless experience across all devices and screen sizes"
    },
    {
      icon: <FaCloud className="text-3xl text-pink-400" />,
      title: "Cloud Deployment",
      description: "Deploying and managing applications on cloud platforms"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-divider"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">
              Turning Ideas Into Digital Reality
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm <span className="gradient-text font-semibold">Aniket Bhagat</span>, a passionate full-stack developer 
              with expertise in modern web technologies. Currently based in Pune, Maharashtra, I love creating 
              elegant solutions to complex problems and building applications that make a positive impact on users' lives.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              With a strong foundation in both frontend and backend development, I can take a project 
              from concept to deployment. I'm always eager to learn new technologies and stay updated 
              with the latest industry trends. Originally from Ujjain, Madhya Pradesh, I bring diverse 
              experiences to my development work.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community. I believe in writing clean, 
              maintainable code and creating exceptional user experiences.
            </p>
            
            <motion.div 
              className="mt-6 p-4 glass-effect rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-lg font-semibold mb-2 text-blue-400">Quick Facts</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-300">
                <div>📧 bhagataniket11@gmail.com</div>
                <div>📱 +91 9644029869</div>
                <div>📍 Currently in Pune, Maharashtra</div>
                <div>🏠 From Ujjain, Madhya Pradesh</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect p-6 rounded-lg text-center hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

              </div>
    </section>
  );
};

export default About;
