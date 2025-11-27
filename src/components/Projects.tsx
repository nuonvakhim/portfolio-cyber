import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        <div className="mb-16 flex flex-col md:flex-row items-end justify-between border-b border-gray-800 pb-4">
          <div className="mb-4 md:mb-0">
             <h2 className="text-4xl md:text-5xl font-black text-white font-[Orbitron] tracking-tight">
               <span className="text-purple-500 mr-2 opacity-80">/</span>
               PROJECTS
             </h2>
             <p className="text-gray-500 font-mono text-sm mt-1 ml-6">EXECUTABLE_FILES // DIRECTORY_LISTING</p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-500 animate-pulse border border-cyan-500/30 px-3 py-1 rounded bg-cyan-950/30">
            <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
            SYSTEM.READY
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="group relative"
            >
              {/* Holographic Panel Container using Clip Path for Slanted Corners */}
              <div 
                className="relative bg-[#0a0a0f] border-l border-r border-gray-800 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,243,255,0.1)] overflow-hidden"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)' }}
              >
                
                {/* Top Header Bar */}
                <div className="h-8 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-4">
                   <div className="flex items-center gap-1.5">
                     <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                     <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                     <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                   </div>
                   <span className="text-[10px] font-mono text-gray-500">{project.id}.EXE</span>
                </div>

                {/* Project Image Area with Overlay */}
                <div className="relative h-64 overflow-hidden group">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  {/* Grid Overlay on Image */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[length:20px_20px] pointer-events-none"></div>
                  
                  {/* Scanline Animation Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-[10%] w-full -translate-y-full group-hover:animate-[scan_2s_linear_infinite] pointer-events-none"></div>
                </div>

                {/* Content Area */}
                <div className="p-8 pb-12 relative bg-gradient-to-b from-gray-900/50 to-black/80 backdrop-blur-sm">
                   <h3 className="text-2xl font-bold text-white mb-2 font-[Orbitron] tracking-wide flex items-center gap-2">
                     {project.title} <span className="text-purple-500 text-sm animate-pulse">_</span>
                   </h3>
                   <p className="text-gray-400 mb-6 font-mono text-sm leading-relaxed border-l-2 border-gray-700 pl-4 group-hover:border-cyan-500 transition-colors">
                     {project.description}
                   </p>

                   {/* Tech Stack Pills */}
                   <div className="flex flex-wrap gap-2 mb-8">
                     {project.techStack.map(tech => (
                       <span key={tech} className="text-xs font-mono px-2 py-1 bg-gray-800/80 border border-gray-600 text-cyan-200 group-hover:border-cyan-500/50 transition-colors">
                         {tech}
                       </span>
                     ))}
                   </div>

                   {/* Action Buttons */}
                   <div className="flex gap-4">
                     <a href={project.repoUrl} className="flex-1 text-center py-2 border border-gray-600 text-gray-300 font-mono text-sm hover:bg-white hover:text-black hover:border-white transition-all flex items-center justify-center gap-2">
                       <Github size={16} /> CODE
                     </a>
                     <a href={project.demoUrl} className="flex-1 text-center py-2 border border-cyan-600 text-cyan-400 font-mono text-sm hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] transition-all flex items-center justify-center gap-2">
                       <ExternalLink size={16} /> DEPLOYMENT
                     </a>
                   </div>
                </div>
              </div>

              {/* Decorative Hologram Elements around the card */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-purple-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Backglow */}
              <div className="absolute inset-0 bg-cyan-500/5 blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

      </div>
      
      {/* Global CSS for the scan animation if not present */}
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
      `}</style>
    </section>
  );
};

export default Projects;