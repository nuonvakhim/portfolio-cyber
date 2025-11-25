import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
      {/* Dark City Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-[#070710] to-[#0f0a1a]"></div>
      
      {/* Moving Grid - Perspective */}
      <div className="absolute inset-0 opacity-20"
           style={{
             perspective: '500px',
             transformStyle: 'preserve-3d'
           }}>
        <div className="absolute inset-0 border-t border-[rgba(0,243,255,0.3)] bg-[linear-gradient(0deg,transparent_24%,rgba(0,243,255,0.3)_25%,rgba(0,243,255,0.3)_26%,transparent_27%,transparent_74%,rgba(0,243,255,0.3)_75%,rgba(0,243,255,0.3)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(0,243,255,0.3)_25%,rgba(0,243,255,0.3)_26%,transparent_27%,transparent_74%,rgba(0,243,255,0.3)_75%,rgba(0,243,255,0.3)_76%,transparent_77%,transparent)] bg-[length:50px_50px] animate-[pulse_4s_ease-in-out_infinite]"
             style={{
               transform: 'rotateX(60deg) translateY(-100px) scale(3)',
               transformOrigin: 'top center',
               height: '200%'
             }}>
        </div>
      </div>

      {/* Vertical Data Streams / Rain */}
      <div className="absolute inset-0 z-0">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute top-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-30 animate-fall"
            style={{
              left: `${15 + i * 15}%`,
              height: '40%',
              animationDuration: `${3 + i}s`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
         {[...Array(4)].map((_, i) => (
          <div 
            key={`r-${i}`}
            className="absolute top-0 w-[1px] bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30 animate-fall"
            style={{
              right: `${10 + i * 20}%`,
              height: '30%',
              animationDuration: `${4 + i * 1.5}s`,
              animationDelay: `${i}s`
            }}
          ></div>
        ))}
      </div>

      {/* Floating Particles/Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900 rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-900 rounded-full mix-blend-screen filter blur-[96px] opacity-10 animate-bounce" style={{ animationDuration: '8s' }}></div>
      
      {/* Global Animation Styles for Falling Lines */}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Background;