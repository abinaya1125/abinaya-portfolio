import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className="flex items-center mb-12 relative"
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'}`}>
        <motion.div
          className="card-glass p-6 hover-lift"
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
          }}
        >
          <div className={`flex items-center ${isLeft ? 'md:justify-end' : ''} mb-3 flex-wrap gap-2`}>
            <motion.i 
              className={`fas ${item.type === 'work' ? 'fa-briefcase' : 'fa-graduation-cap'} text-primary mr-3`}
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
            />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {item.period}
            </span>
            {item.badge && (
              <motion.span
                className="px-2 py-1 bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-900 dark:to-yellow-800 text-yellow-800 dark:text-yellow-200 text-xs rounded-full font-semibold border border-yellow-300 dark:border-yellow-600"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                {item.badge}
              </motion.span>
            )}
          </div>
          
          <motion.h3 
            className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {item.title}
          </motion.h3>
          
          <p className="text-primary font-semibold mb-3">
            {item.institution || item.company}
          </p>

          {/* CGPA or Percentage Badge */}
          {(item.cgpa || item.percentage) && (
            <motion.div
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-3 ${
                item.highlight 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                  : 'bg-primary/10 text-primary'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <i className="fas fa-star mr-2"></i>
              {item.cgpa || item.percentage}
            </motion.div>
          )}
          
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      </div>
      
      <motion.div
        className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-darkBg ${
          item.highlight 
            ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
            : 'bg-primary'
        }`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};

export default TimelineItem;
