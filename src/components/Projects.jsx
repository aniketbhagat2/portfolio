import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Workflow Automation Dashboard",
      problem: "Organizations needed efficient workflow management to streamline business processes and improve team productivity",
      solution: "Built a role-based full-stack dashboard for comprehensive workflow management and automation",
      implementation: "Developed using MERN stack with secure authentication and RESTful API integration. Created reusable React components, implemented CRUD operations, and designed responsive UI for different user roles.",
      outcome: "Successfully automated complex workflows, reduced manual processing time by 60%, and improved team collaboration efficiency",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/aniketbhagat2",
      features: ["Role-based Access", "Workflow Automation", "Real-time Updates", "Secure Authentication"]
    },
    {
      id: 2,
      title: "Madhav Science College Website",
      problem: "College website was static and outdated, lacking modern functionality and mobile responsiveness",
      solution: "Transformed static website into dynamic single-page application with enhanced user experience",
      implementation: "Converted to React.js SPA with responsive design, improved navigation structure, optimized performance, and added interactive features for students and faculty.",
      outcome: "Improved website loading speed by 40%, enhanced mobile experience, and increased user engagement by 35%",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600",
      technologies: ["React.js", "Responsive Design", "Performance Optimization"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/aniketbhagat2",
      features: ["Single Page Application", "Mobile Responsive", "Fast Loading", "Modern UI"]
    },
    {
      id: 3,
      title: "IoT Fire Monitoring System (ResQfire)",
      problem: "Traditional fire detection systems lacked real-time monitoring and automated alert capabilities",
      solution: "Built an innovative IoT-based fire detection system with real-time monitoring and automated alerts",
      implementation: "Developed using ESP32 microcontroller with multiple sensors (temperature, smoke, gas). Created automated email alert system, real-time monitoring dashboard, and filed patent for the innovative design.",
      outcome: "Patented technology with potential to save lives through early fire detection and automated emergency response",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600",
      technologies: ["ESP32", "IoT Sensors", "Email Automation", "Real-time Monitoring"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/aniketbhagat2",
      features: ["Real-time Detection", "Automated Alerts", "IoT Integration", "Patented Technology"]
    }
  ];

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
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
              }}
              onClick={() => setSelectedProject(project)}
              className="professional-card overflow-hidden cursor-pointer hover:border-gray-600 transition-all duration-300"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />
                
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    className="text-white text-center"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  >
                    <div className="text-sm font-semibold mb-2">Quick View</div>
                    <div className="text-xs">{project.technologies.length} Technologies</div>
                  </motion.div>
                </motion.div>
              </div>
              
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold mb-2"
                  whileHover={{ color: "#60A5FA" }}
                >
                  {project.title}
                </motion.h3>
                
                <div className="text-gray-300 text-sm mb-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 font-semibold">Problem:</span>
                    <span className="line-clamp-2">{project.problem}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 font-semibold">Solution:</span>
                    <span className="line-clamp-2">{project.solution}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 font-semibold">Outcome:</span>
                    <span className="line-clamp-1 font-medium">{project.outcome}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <motion.span
                      key={tech}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(59, 130, 246, 0.3)"
                      }}
                      className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full cursor-pointer"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      color: "#60A5FA"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    View Details
                  </motion.button>
                  
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.3,
                        color: "#60A5FA",
                        rotate: 15
                      }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <FaExternalLinkAlt size={16} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.3,
                        color: "#60A5FA"
                      }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <FaGithub size={16} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">Problem Statement</h4>
                    <p className="text-gray-300">{selectedProject.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-green-400">Solution</h4>
                    <p className="text-gray-300">{selectedProject.solution}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-purple-400">Implementation</h4>
                    <p className="text-gray-300">{selectedProject.implementation}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-yellow-400">Outcome</h4>
                    <p className="text-gray-300 font-medium">{selectedProject.outcome}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Key Features</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {selectedProject.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-4">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow duration-300 inline-flex items-center gap-2"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <FaGithub />
                  GitHub Repo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
