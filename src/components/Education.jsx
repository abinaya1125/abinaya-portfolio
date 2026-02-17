import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/education';
import TimelineItem from './TimelineItem';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  const summaryVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-4xl font-bold gradient-text mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Education Journey
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            My academic foundation and continuous learning path in computer science and engineering.
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Animated Timeline Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line"
            variants={lineVariants}
            style={{ transformOrigin: 'top' }}
          />

          {/* Education Timeline Items */}
          <div>
            {education.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Education Summary Card */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          variants={summaryVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="card-glass p-8 text-center">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4"
              whileHover={{ scale: 1.1, rotate: 360 }}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <i className="fas fa-graduation-cap text-white text-2xl"></i>
            </motion.div>
            
            <motion.h3 
              className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Academic Excellence
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Consistent academic performer with a CGPA of 9.17/10 in Computer Science Engineering, 
              recognized as 'Topper of Topper' for three consecutive years. Strong foundation in 
              programming, algorithms, and software engineering principles.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div 
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-800 dark:text-blue-200 rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <i className="fas fa-award mr-2"></i> 9.17 CGPA
              </motion.div>
              <motion.div 
                className="px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 text-purple-800 dark:text-purple-200 rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <i className="fas fa-trophy mr-2"></i> 90.5% in 12th
              </motion.div>
              <motion.div 
                className="px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 text-green-800 dark:text-green-200 rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <i className="fas fa-star mr-2"></i> 90% in 10th
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
