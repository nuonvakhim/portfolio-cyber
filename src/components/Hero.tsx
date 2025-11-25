import React from 'react';
import { ArrowDown, Code, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Decorative Grid Lines */}
      <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block"></div>
      <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-900/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
            <span className="text-xs font-mono text-pink-300 tracking-wider">AVAILABLE FOR HIRE</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
            <span className="block glitch-hover cursor-default">NUON</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow-cyan glitch-hover cursor-default">
              VAKHIM
            </span>
          </h1>
          
          <p className="text-xl text-cyan-400 font-[Orbitron] tracking-wide">
            FULL STACK WEB DEVELOPER
          </p>

          <p className="text-gray-400 font-mono text-lg max-w-lg mx-auto md:mx-0 border-l-2 border-cyan-500/50 pl-4">
            Specializing in Spring Boot, Next.js, Golang, and Blockchain technologies. 
            Two years of experience building robust backends and modern frontend applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a href="#projects" className="group relative px-8 py-3 bg-cyan-500/10 overflow-hidden border border-cyan-500/50 text-cyan-400 font-bold tracking-wider font-mono hover:text-black hover:bg-cyan-400 transition-all duration-300 clip-path-slant">
              <span className="relative z-10 flex items-center gap-2">
                <Code size={18} /> VIEW_PROJECTS
              </span>
              <div className="absolute inset-0 bg-cyan-400 transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
            
            <a href="#contact" className="group px-8 py-3 border border-pink-500/50 text-pink-400 font-bold tracking-wider font-mono hover:bg-pink-500/10 hover:shadow-[0_0_15px_rgba(188,19,254,0.4)] transition-all duration-300 clip-path-slant flex items-center gap-2 justify-center">
              <Zap size={18} /> CONTACT_ME
            </a>
          </div>
        </div>
        
        {/* Profile / Graphic Area */}
        <div className="relative flex justify-center">
          {/* Rotating Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[300px] h-[300px] border border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute w-[320px] h-[320px] border-t border-b border-purple-500/50 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute w-[350px] h-[350px] border border-dashed border-gray-600 rounded-full animate-[spin_20s_linear_infinite]"></div>
          </div>
          
          {/* Profile Container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-900 overflow-hidden border-2 border-cyan-500/50 group">
             {/* Image Placeholder */}
             <img 
               src="https://picsum.photos/400/400?grayscale" 
               alt="Nuon Vakhim" 
               className="w-full h-full object-cover filter contrast-125 hover:filter-none transition-all duration-500 opacity-80 group-hover:opacity-100"
             />
             
             {/* Glitch Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 to-transparent opacity-50"></div>
             
             {/* HUD Corners */}
             <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
             <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
             <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
             <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>
             
             {/* Scanline vertical for image */}
             <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,243,255,0.1)_50%)] bg-[length:100%_4px] animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-cyan-500/50">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;