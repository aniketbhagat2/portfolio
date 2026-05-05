import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendar, FaAward } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "Avantika University",
      period: "2022 - 2026",
      cgpa: "8.43 (Till 7th Semester)",
      coursework: [
        "Data Structures & Algorithms",
        "Web Development", 
        "IoT Systems",
        "AI & Machine Learning",
        "Database Management",
        "Software Engineering",
        "Data Analytics"
      ]
    },
    {
      degree: "Higher Secondary Education (12th)",
      institution: "Vivekanand Vidya Vihar",
      period: "2021-2022",
      percentage: "91.4%",
      board: "CBSE"
    },
    {
      degree: "Secondary Education (10th)",
      institution: "Vivekanand Vidya Vihar", 
      period: "2019-2020",
      percentage: "96.3%",
      board: "CBSE"
    }
  ];

  const certifications = [
    {
      name: "Introduction to Generative AI Studio",
      issuer: "Google Cloud",
      icon: <FaAward className="text-blue-400" />
    },
    {
      name: "Generative AI for Beginners",
      issuer: "Simplilearn", 
      icon: <FaAward className="text-green-400" />
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <FaGraduationCap className="text-blue-400" />
              Academic Background
            </h3>
            
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                      <p className="text-blue-400 font-medium">{edu.field}</p>
                      <p className="text-gray-300">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-gray-400 mb-1">
                        <FaCalendar className="text-sm" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      {edu.cgpa && <p className="text-green-400 font-semibold">CGPA: {edu.cgpa}</p>}
                      {edu.percentage && <p className="text-green-400 font-semibold">{edu.percentage}</p>}
                    </div>
                  </div>
                  
                  {edu.coursework && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-400 mb-2">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <FaAward className="text-purple-400" />
              Certifications & Achievements
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl mt-1">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">{cert.name}</h4>
                      <p className="text-gray-400">{cert.issuer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30"
              >
                <h4 className="text-lg font-semibold text-white mb-3">Leadership & Activities</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Student Representative – Avantika University</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>Technical Events Secretary – Student Council</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Participant – Flipkart Grid 6.0 Hackathon</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
