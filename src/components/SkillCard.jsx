import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill, index, variants }) => {
  return (
    <motion.div
      className="card-glass p-6 rounded-2xl text-center hover-lift cursor-pointer no-lag"
      variants={variants}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
    >
      <motion.div
        className="text-4xl mb-4 no-lag"
        whileHover={{ 
          rotate: [0, 5, -5, 0],
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        <i className={`${skill.icon} ${skill.color}`}></i>
      </motion.div>
      
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
        {skill.name}
      </h3>
    </motion.div>
  );
};

export default SkillCard;
