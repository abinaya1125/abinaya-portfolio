import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 bg-darkBg text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          className="text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          © 2026 Abinaya S | Designed with{' '}
          <motion.i
            className="fas fa-heart text-red-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />{' '}
          and Passion
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
