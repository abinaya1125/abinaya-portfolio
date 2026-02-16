import React from 'react';
import { motion } from 'framer-motion';
import { timeline } from '../data/timeline';
import TimelineItem from './TimelineItem';

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-lightBg dark:bg-darkBg">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Journey
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: 'top' }}
          />

          {/* Timeline Items */}
          <div>
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
