import React from 'react';
import { SKILLS } from '../constants';
import { Blocks, Cpu, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend': return 'text-pink-500';
      case 'Backend': return 'text-purple-500';
      case 'Core': return 'text-yellow-500';
      default: return 'text-cyan-500';
    }
  };

  const getStrokeColor = (category: string) => {
    switch (category) {
      case 'Frontend': return '#ec4899';
      case 'Backend': return '#a855f7';
      case 'Core': return '#eab308';
      default: return '#06b6d4';
    }
  };

  // Helper to get fallback icon if no URL is provided
  const getFallbackIcon = (name: string, className: string) => {
    if (name.includes('Hyperledger')) return <Blocks className={className} />;
    if (name.includes('API')) return <Globe className={className} />;
    return <Cpu className={className} />;
  };

  return (
    <section id="skills" className="py-24 relative bg-black/40 border-t border-gray-900 overflow-hidden">
      {/* Background decoration for section */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-4 font-[Orbitron]">
            <span className="text-cyan-400 text-2xl font-mono">02.</span>
            SYSTEM_MODULES
          </h2>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-pink-500 to-transparent"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {SKILLS.map((skill) => {
            const radius = 36;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (skill.level / 100) * circumference;
            const colorClass = getCategoryColor(skill.category);
            const strokeColor = getStrokeColor(skill.category);

            return (
              <div 
                key={skill.name}
                className="group relative flex flex-col items-center justify-center"
              >
                {/* HUD Circle Container */}
                <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                  
                  {/* Outer Rotating Ring */}
                  <div className="absolute inset-0 border border-dashed border-gray-700 rounded-full animate-[spin_10s_linear_infinite] group-hover:border-white/30 transition-colors"></div>
                  
                  {/* Counter-Rotating Segment */}
                  <div className="absolute inset-[-4px] border-t-2 border-r-2 border-transparent rounded-full animate-[spin_8s_linear_infinite_reverse] group-hover:border-cyan-500/30"></div>

                  {/* SVG Progress Circle */}
                  <svg className="w-full h-full transform -rotate-90 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
                    <circle cx="64" cy="64" r={radius} stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="transparent" />
                    <circle 
                      cx="64" cy="64" r={radius} 
                      stroke={strokeColor} 
                      strokeWidth="6" 
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out drop-shadow-[0_0_5px_currentColor]"
                    />
                  </svg>
                  
                  {/* Center Content: Logo or Icon */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    {skill.logo ? (
                      <img 
                        src={skill.logo} 
                        alt={skill.name} 
                        className={`w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] ${skill.name === 'Next.js' ? 'invert' : ''}`}
                      />
                    ) : (
                      // Fallback Icon
                      getFallbackIcon(skill.name, `w-10 h-10 ${colorClass} group-hover:scale-110 transition-transform`)
                    )}
                  </div>

                  {/* Radar Scan Effect Overlay */}
                  <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                     <div className="w-full h-1/2 bg-gradient-to-b from-transparent to-white/10 animate-[spin_2s_linear_infinite] origin-bottom"></div>
                  </div>
                </div>

                {/* Skill Info */}
                <div className="text-center z-10">
                  <h3 className="text-lg font-bold text-gray-200 font-[Rajdhani] tracking-wider group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mt-1">
                     {/* <span className={`w-1.5 h-1.5 rounded-full ${colorClass === 'text-pink-500' ? 'bg-pink-500' : colorClass === 'text-purple-500' ? 'bg-purple-500' : colorClass === 'text-yellow-500' ? 'bg-yellow-500' : 'bg-cyan-500'}`}></span> */}
                     {/* <span className="text-xs text-gray-500 font-mono uppercase tracking-widest">{skill.level}% Proficiency</span> */}
                  </div>
                </div>
                
                {/* Hover Glitch Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;