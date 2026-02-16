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
    <section id="soft-skills" className="py-8 relative">
      {/* Galaxy Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-8 no-lag"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 galaxy-text">Soft Skills</h2>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            Essential interpersonal skills for professional success
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8 no-lag"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass-galaxy p-4 rounded-xl text-center hover-lift cursor-pointer group relative overflow-hidden no-lag"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              
              <div className="relative z-10">
                <motion.div
                  className="text-4xl mb-2 group-hover:scale-105 transition-transform duration-200 no-lag"
                  whileHover={{ 
                    rotate: [0, 3, -3, 0],
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <i className={`${skill.icon} ${skill.color}`}></i>
                </motion.div>
                
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors duration-200">
                  {skill.name}
                </h3>
                
                <p className="text-gray-300 text-xs mb-2 leading-relaxed">
                  {skill.description}
                </p>
                
                {/* Skill level indicator - simplified */}
                <div className="w-full bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Summary - simplified */}
        <motion.div
          className="text-center no-lag"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-purple-500/30 smooth-transition">
            <i className="fas fa-star text-yellow-400 text-sm"></i>
            <span className="text-white font-medium text-sm">
              Well-rounded professional with strong technical and interpersonal skills
            </span>
            <i className="fas fa-star text-yellow-400 text-sm"></i>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SoftSkills;
