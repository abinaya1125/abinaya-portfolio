import React from 'react';

const Simple3DBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Simple animated background shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-pink-500 rounded-full opacity-10 animate-bounce"></div>
      <div className="absolute bottom-32 left-40 w-40 h-40 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-purple-600 rounded-full opacity-10 animate-bounce"></div>
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20"></div>
    </div>
  );
};

export default Simple3DBackground;
