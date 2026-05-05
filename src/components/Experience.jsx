import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer (Trainee)",
      company: "Prushal Technology Pvt. Ltd.",
      location: "Pune (On-site)",
      period: "Feb 2026 – Present",
      type: "Full-time",
      responsibilities: [
        "Developing and maintaining full-stack web applications using the MERN stack",
        "Designing and implementing RESTful APIs using Node.js and Express.js",
        "Integrating React.js frontend with backend services and database operations",
        "Designing MongoDB schemas and optimizing database queries",
        "Implementing authentication, authorization, and secure routing mechanisms"
      ]
    },
    {
      title: "Full Stack Development Intern",
      company: "UptoSkills",
      location: "Remote",
      period: "April 2025 – July 2025",
      type: "Internship",
      responsibilities: [
        "Built a full-stack workflow automation dashboard using MERN stack",
        "Developed reusable React components and integrated REST APIs",
        "Implemented CRUD operations with secure authentication"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My journey in full-stack development and software engineering
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 hidden lg:block z-10"></div>

                {/* Content card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-2 lg:justify-end">
                        <FaBriefcase className="text-blue-400" />
                        <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      </div>
                      <p className="text-xl text-blue-400 font-semibold mb-1 lg:text-right">{exp.company}</p>
                      <div className={`flex items-center gap-4 text-gray-400 text-sm lg:justify-end`}>
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-purple-400" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaCalendar className="text-green-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <div className="mt-2 lg:justify-end lg:flex">
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 rounded-full text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities:</h4>
                      {exp.responsibilities.map((resp, idx) => (
                        <div key={idx} className={`flex items-start gap-3 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                          <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                          <p className="text-gray-300 leading-relaxed">{resp}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-2/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Full-Stack Development</h4>
              <p className="text-gray-300 text-sm">MERN stack, RESTful APIs, Authentication</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Database Design</h4>
              <p className="text-gray-300 text-sm">MongoDB, MySQL, Schema Optimization</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔐</div>
              <h4 className="text-lg font-semibold text-green-400 mb-2">Security & Performance</h4>
              <p className="text-gray-300 text-sm">JWT Auth, Secure Routing, Query Optimization</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
