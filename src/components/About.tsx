import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Holographic Panel Container */}
        <div className="relative bg-gray-900/30 backdrop-blur-md border border-gray-700 p-8 md:p-12 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          
          {/* Animated Gradient Border */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-[shimmer_3s_infinite]"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-[shimmer_3s_infinite_reverse]"></div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
             {/* Stats Column */}
             <div className="md:col-span-1 space-y-6 border-r border-gray-700/50 pr-6">
                <div className="p-4 bg-black/40 border-l-2 border-cyan-500">
                  <h3 className="text-4xl font-bold text-white font-mono">02+</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Years Experience</p>
                </div>
                <div className="p-4 bg-black/40 border-l-2 border-pink-500">
                  <h3 className="text-4xl font-bold text-white font-mono">15+</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Projects Completed</p>
                </div>
                <div className="p-4 bg-black/40 border-l-2 border-yellow-500">
                  <h3 className="text-4xl font-bold text-white font-mono">100%</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Code Coverage</p>
                </div>
             </div>

             {/* Text Content */}
             <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-white mb-6 font-[Orbitron]">
                  <span className="text-cyan-400">01.</span> ABOUT_ME
                </h2>
                <div className="space-y-4 text-gray-300 font-mono leading-relaxed text-sm md:text-base">
                  <p>
                    <span className="text-cyan-400">&gt;</span> Identity verified: Nuon Vakhim. I am a Full Stack Web Developer with a focus on backend efficiency and system architecture.
                  </p>
                  <p>
                    <span className="text-cyan-400">&gt;</span> With 2 years of professional experience, I specialize in building scalable applications using Spring Boot and Spring Data JPA, while delivering modern user interfaces with Next.js. I also possess deep expertise in Golang for blockchain development, specifically leveraging Hyperledger Fabric.
                  </p>
                  <p>
                    <span className="text-cyan-400">&gt;</span> My toolkit includes Shell scripting for automation, Docker for containerization, and designing robust RESTful APIs for seamless data communication.
                  </p>
                  <p className="pt-4 text-xs text-gray-500">
                    STATUS: ONLINE <br/>
                    CORE_STACK: SPRING BOOT / NEXT.JS / GOLANG <br/>
                    CURRENT_OBJECTIVE: INNOVATE & DEPLOY
                  </p>
                </div>
             </div>
          </div>
          
          {/* Decorative Background Elements */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default About;