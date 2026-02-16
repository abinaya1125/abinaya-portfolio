import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const navSections = [
    { name: 'Home', href: '#home', icon: 'fas fa-home' },
    { name: 'About', href: '#about', icon: 'fas fa-user' },
    { name: 'Education', href: '#education', icon: 'fas fa-graduation-cap' },
    { name: 'Skills', href: '#skills', icon: 'fas fa-code' },
    { name: 'Projects', href: '#projects', icon: 'fas fa-project-diagram' },
    { name: 'Timeline', href: '#timeline', icon: 'fas fa-clock' },
    { name: 'Contact', href: '#contact', icon: 'fas fa-envelope' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'fab fa-github', href: 'https://github.com/abinaya1125' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/abinayas4821/' },
    { name: 'Twitter', icon: 'fab fa-twitter', href: '#' },
    { name: 'Email', icon: 'fas fa-envelope', href: 'mailto:abinayas927@gmail.com' }
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 bg-darkBg text-white relative overflow-hidden">
      {/* Galaxy Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-blue-900/20" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/60" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 galaxy-text">Abinaya S</h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer passionate about creating elegant solutions to complex problems.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center hover:bg-purple-600/40 transition-colors no-lag"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`${social.icon} text-purple-300`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 galaxy-text">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto">
              {navSections.map((section, index) => (
                <motion.a
                  key={section.name}
                  href={section.href}
                  className="flex items-center justify-center space-x-2 text-gray-400 hover:text-purple-300 transition-colors py-1 no-lag"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  whileHover={{ x: 5 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(section.href);
                  }}
                >
                  <i className={`${section.icon} text-sm`}></i>
                  <span className="text-sm">{section.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 galaxy-text">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center justify-center md:justify-end space-x-2">
                <i className="fas fa-envelope text-purple-400"></i>
                <span>abinayas927@gmail.com</span>
              </p>
              <p className="flex items-center justify-center md:justify-end space-x-2">
                <i className="fas fa-phone text-purple-400"></i>
                <span>+91 78714 32250</span>
              </p>
              <p className="flex items-center justify-center md:justify-end space-x-2">
                <i className="fas fa-map-marker-alt text-purple-400"></i>
                <span>Tamil Nadu, India</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-700 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2026 Abinaya S | All Rights Reserved
            </p>
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-400">Designed with</span>
              <motion.i
                className="fas fa-heart text-red-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-gray-400">and Passion</span>
            </motion.div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
