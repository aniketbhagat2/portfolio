import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    "Frontend": [
      { name: "React", level: "Expert", icon: "⚛️", description: "Advanced React patterns, Hooks, Context API" },
      { name: "TypeScript", level: "Advanced", icon: "📘", description: "Type-safe development, interfaces, generics" },
      { name: "Tailwind CSS", level: "Expert", icon: "🎨", description: "Responsive design, custom components" },
      { name: "Next.js", level: "Advanced", icon: "▲", description: "SSR, SSG, API routes, middleware" },
      { name: "Vue.js", level: "Intermediate", icon: "💚", description: "Vue 3, Composition API, Vuex" }
    ],
    "Backend": [
      { name: "Node.js", level: "Expert", icon: "🟢", description: "Express, REST APIs, middleware" },
      { name: "Python", level: "Advanced", icon: "🐍", description: "Django, FastAPI, data analysis" },
      { name: "PostgreSQL", level: "Advanced", icon: "🐘", description: "Complex queries, optimization, indexing" },
      { name: "MongoDB", level: "Advanced", icon: "🍃", description: "Aggregation pipelines, schema design" },
      { name: "GraphQL", level: "Intermediate", icon: "📊", description: "Apollo Server, schema design" }
    ],
    "Tools & Others": [
      { name: "Git", level: "Expert", icon: "📦", description: "Version control, branching strategies" },
      { name: "Docker", level: "Advanced", icon: "🐳", description: "Containerization, Docker Compose" },
      { name: "AWS", level: "Intermediate", icon: "☁️", description: "EC2, S3, Lambda, CloudFront" },
      { name: "Figma", level: "Advanced", icon: "🎯", description: "UI/UX design, prototyping" },
      { name: "Jest", level: "Advanced", icon: "🧪", description: "Unit testing, integration testing" }
    ]
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'Expert': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'Advanced': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
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

  const skillVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different domains of web development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {Object.entries(skills).map(([category, categorySkills]) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              className="professional-card p-6"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">{category}</h3>
              <div className="space-y-3">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    custom={index}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="professional-card p-4 border-l-4 hover:border-l-blue-400 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{skill.icon}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-200">{skill.name}</h4>
                          <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "RESTful APIs", "GraphQL", "WebSocket", "Redux", "Context API",
              "Jest", "Cypress", "Webpack", "Vite", "CI/CD", "Agile", "Scrum"
            ].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="glass-effect px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
