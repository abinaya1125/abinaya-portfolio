import React from 'react';

const Simple3DBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Moving 3D objects that travel from one place to another */}
      
      {/* Object 1: Moves horizontally from left to right */}
      <div className="absolute top-20 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-10 shadow-2xl animate-slide-horizontal"
        style={{
          animation: 'slideHorizontal 15s ease-in-out infinite',
        }}
      />
      
      {/* Object 2: Moves vertically from top to bottom */}
      <div className="absolute left-32 w-12 h-12 bg-gradient-to-br from-pink-500 to-blue-500 rounded-lg opacity-10 shadow-2xl transform rotate-45 animate-slide-vertical"
        style={{
          animation: 'slideVertical 12s ease-in-out infinite',
        }}
      />
      
      {/* Object 3: Diagonal movement */}
      <div className="absolute w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-10 shadow-2xl animate-slide-diagonal"
        style={{
          animation: 'slideDiagonal 18s ease-in-out infinite',
        }}
      />
      
      {/* Object 4: Circular path movement */}
      <div className="absolute w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-12 shadow-2xl animate-circular"
        style={{
          animation: 'circularPath 10s linear infinite',
        }}
      />
      
      {/* Object 5: Zigzag movement */}
      <div className="absolute w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg opacity-10 shadow-2xl animate-zigzag"
        style={{
          animation: 'zigzagPath 14s ease-in-out infinite',
        }}
      />
      
      {/* Object 6: Wave movement */}
      <div className="absolute w-8 h-8 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-10 shadow-2xl animate-wave"
        style={{
          animation: 'wavePath 16s ease-in-out infinite',
        }}
      />
      
      {/* Object 7: Bouncing across screen */}
      <div className="absolute w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full opacity-10 shadow-2xl animate-bounce-across"
        style={{
          animation: 'bounceAcross 20s ease-in-out infinite',
        }}
      />
      
      {/* Object 8: Figure-8 movement */}
      <div className="absolute w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg opacity-12 shadow-2xl animate-figure8"
        style={{
          animation: 'figure8Path 22s linear infinite',
        }}
      />

      {/* Static background shapes for depth - reduced opacity */}
      <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute bottom-32 left-40 w-40 h-40 bg-blue-500 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-purple-600 rounded-full opacity-5 animate-bounce"></div>
      
      {/* Enhanced gradient background with more transparency */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-pink-50/30 to-blue-50/30 dark:from-purple-900/10 dark:via-pink-900/10 dark:to-blue-900/10"></div>
      
      {/* Strong overlay for content separation */}
      <div className="absolute inset-0 bg-white/40 dark:bg-gray-900/40"></div>
      
      {/* Additional blur overlay for better content readability */}
      <div className="absolute inset-0 backdrop-blur-[1px]"></div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideHorizontal {
          0% { left: -100px; top: 20%; }
          50% { left: calc(100% + 100px); top: 20%; }
          100% { left: -100px; top: 20%; }
        }
        
        @keyframes slideVertical {
          0% { left: 32%; top: -100px; }
          50% { left: 32%; top: calc(100% + 100px); }
          100% { left: 32%; top: -100px; }
        }
        
        @keyframes slideDiagonal {
          0% { left: -100px; top: -100px; }
          25% { left: calc(100% + 100px); top: 25%; }
          50% { left: calc(100% + 100px); top: calc(100% + 100px); }
          75% { left: -100px; top: calc(100% + 100px); }
          100% { left: -100px; top: -100px; }
        }
        
        @keyframes circularPath {
          0% { 
            left: 50%; 
            top: 50%; 
            transform: translate(-50%, -50%) rotate(0deg) translateX(150px) rotate(0deg);
          }
          100% { 
            left: 50%; 
            top: 50%; 
            transform: translate(-50%, -50%) rotate(360deg) translateX(150px) rotate(-360deg);
          }
        }
        
        @keyframes zigzagPath {
          0% { left: 10%; top: 10%; }
          25% { left: 80%; top: 30%; }
          50% { left: 20%; top: 60%; }
          75% { left: 70%; top: 80%; }
          100% { left: 10%; top: 10%; }
        }
        
        @keyframes wavePath {
          0% { left: 0%; top: 50%; }
          25% { left: 25%; top: 30%; }
          50% { left: 50%; top: 50%; }
          75% { left: 75%; top: 70%; }
          100% { left: 100%; top: 50%; }
        }
        
        @keyframes bounceAcross {
          0% { left: -50px; top: 60%; }
          25% { left: 25%; top: 40%; }
          50% { left: 50%; top: 70%; }
          75% { left: 75%; top: 45%; }
          100% { left: calc(100% + 50px); top: 65%; }
        }
        
        @keyframes figure8Path {
          0% { 
            left: 50%; 
            top: 50%; 
            transform: translate(-50%, -50%);
          }
          25% { 
            left: 60%; 
            top: 40%; 
            transform: translate(-50%, -50%);
          }
          50% { 
            left: 50%; 
            top: 30%; 
            transform: translate(-50%, -50%);
          }
          75% { 
            left: 40%; 
            top: 40%; 
            transform: translate(-50%, -50%);
          }
          100% { 
            left: 50%; 
            top: 50%; 
            transform: translate(-50%, -50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Simple3DBackground;
