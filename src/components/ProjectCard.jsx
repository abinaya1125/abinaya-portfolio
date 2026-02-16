import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="bg-lightBg dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover-lift cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ 
        y: -10,
        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.2)'
      }}
    >
      <motion.div 
        className="h-48 bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <i className={`${project.image} text-white text-6xl`}></i>
      </motion.div>
      
      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {project.title}
        </motion.h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + techIndex * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <motion.a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fab fa-github mr-2"></i> View Code
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
