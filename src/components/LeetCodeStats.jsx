import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LeetCodeStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/Abinaya1125');
        
        if (!response.ok) {
          throw new Error('Failed to fetch LeetCode stats');
        }
        
        const data = await response.json();
        setStats(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching LeetCode stats:', err);
        setError('Unable to fetch LeetCode stats');
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  if (loading) {
    return (
      <motion.div
        className="card-glass p-8 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center space-x-3">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <span className="text-gray-600 dark:text-gray-400">Loading LeetCode stats...</span>
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        className="card-glass p-8 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center text-gray-600 dark:text-gray-400">
          <i className="fas fa-exclamation-triangle text-3xl mb-3"></i>
          <p>{error}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <section id="leetcode-stats" className="py-20 bg-lightBg dark:bg-darkBg">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          LeetCode Statistics
        </motion.h2>

        <motion.div
          className="card-glass p-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Problems Solved */}
            <motion.div
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.i
                className="fas fa-code text-blue-600 dark:text-blue-400 text-3xl mb-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {stats.totalSolved || 0}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Total Solved
              </p>
            </motion.div>

            {/* Easy Problems */}
            <motion.div
              className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.i
                className="fas fa-smile text-green-600 dark:text-green-400 text-3xl mb-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {stats.easySolved || 0}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Easy
              </p>
            </motion.div>

            {/* Medium Problems */}
            <motion.div
              className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.i
                className="fas fa-meh text-yellow-600 dark:text-yellow-400 text-3xl mb-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {stats.mediumSolved || 0}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Medium
              </p>
            </motion.div>

            {/* Hard Problems */}
            <motion.div
              className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.i
                className="fas fa-fire text-red-600 dark:text-red-400 text-3xl mb-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {stats.hardSolved || 0}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Hard
              </p>
            </motion.div>
          </div>

          {/* Additional Stats */}
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4"
            variants={itemVariants}
          >
            {stats.streak && (
              <div className="px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 text-orange-800 dark:text-orange-200 rounded-full font-semibold">
                <i className="fas fa-fire-flame-curved mr-2"></i>
                {stats.streak} Day Streak
              </div>
            )}
            
            <div className="px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 text-purple-800 dark:text-purple-200 rounded-full font-semibold">
              <i className="fas fa-trophy mr-2"></i>
              Ranking: #{stats.ranking || 'N/A'}
            </div>

            <motion.a
              href="https://leetcode.com/u/Abinaya1125/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-white rounded-full font-semibold hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-external-link-alt mr-2"></i>
              View Profile
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeetCodeStats;
