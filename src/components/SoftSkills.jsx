import React from 'react';
import { motion } from 'framer-motion';
import { softSkills } from '../data/softSkills';

const SoftSkills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section id="soft-skills" className="py-20 relative">
      {/* Galaxy Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-900/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-900/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16 no-lag"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 galaxy-text">Soft Skills</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Essential interpersonal skills that drive success and foster professional growth
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16 no-lag"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass-galaxy p-6 rounded-2xl text-center hover-lift cursor-pointer group relative overflow-hidden no-lag"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              
              <div className="relative z-10">
                <motion.div
                  className="text-5xl mb-4 group-hover:scale-105 transition-transform duration-200 no-lag"
                  whileHover={{ 
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <i className={`${skill.icon} ${skill.color}`}></i>
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-200">
                  {skill.name}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {skill.description}
                </p>
                
                {/* Skill level indicator */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Skills Breakdown */}
        <motion.div
          className="glass-galaxy p-8 rounded-2xl max-w-4xl mx-auto no-lag"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="text-2xl font-bold mb-8 galaxy-text text-center">Core Competencies</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-3 no-lag"
                initial={{ opacity: 0, x: index % 2 === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 * index }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3">
                  <i className={`${skill.icon} ${skill.color} text-lg`}></i>
                  <h4 className="font-semibold text-white">{skill.name}</h4>
                </div>
                <ul className="space-y-2 ml-6">
                  {skill.details.map((detail, detailIndex) => (
                    <motion.li
                      key={detailIndex}
                      className="text-gray-300 text-sm flex items-start no-lag"
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut", delay: 0.02 * detailIndex }}
                      viewport={{ once: true }}
                    >
                      <span className="text-purple-400 mr-2">•</span>
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          className="mt-12 text-center no-lag"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-purple-500/30 smooth-transition">
            <i className="fas fa-star text-yellow-400"></i>
            <span className="text-white font-medium">
              Well-rounded professional with strong technical and interpersonal skills
            </span>
            <i className="fas fa-star text-yellow-400"></i>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SoftSkills;
