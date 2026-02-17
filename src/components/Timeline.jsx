import React from 'react';
import { motion } from 'framer-motion';
import { timeline } from '../data/timeline';
import TimelineItem from './TimelineItem';

const Timeline = () => {
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

  return (
    <section id="timeline" className="py-20 bg-lightBg dark:bg-darkBg">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          My Journey
        </motion.h2>

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

          {/* Timeline Items with staggered animation */}
          <div>
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
