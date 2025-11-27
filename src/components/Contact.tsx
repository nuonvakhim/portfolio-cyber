import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import React, { useState,  } from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, text: string) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const getIcon = (iconName: string, className: string) => {
    switch(iconName) {
      case 'github': return <Github className={className} />;
      case 'linkedin': return <Linkedin className={className} />;
      case 'mail': return <Mail className={className} />;
      case 'telegram': return <MessageSquare className={className} />;
      default: return <Mail className={className} />;
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-black/60 backdrop-blur-sm border-t border-gray-800">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white font-[Orbitron] mb-2">
            <span className="text-yellow-400 mr-2">04.</span>
            INITIALIZE_CONNECTION
          </h2>
          <div className="flex items-center justify-center gap-2 text-cyan-500/70 font-mono text-sm mt-2">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
            <span>CHANNEL_OPEN // WAITING_FOR_INPUT</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-gray-900/40 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Card Hover Fill Effect */}
              <div className="absolute inset-0 bg-cyan-500/5 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
              
              <div className="p-8 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-6">
                  {/* Icon Container with Hexagon feel */}
                  <div className="relative w-16 h-16 flex items-center justify-center bg-black/50 border border-gray-600 group-hover:border-cyan-500 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all transform rotate-45">
                    <div className="transform -rotate-45 text-gray-400 group-hover:text-cyan-400 transition-colors">
                       {getIcon(link.icon, "w-8 h-8")}
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-xs text-cyan-500 font-mono tracking-widest mb-1 opacity-70 group-hover:opacity-100">
                      PROTOCOL: {link.platform}
                    </span>
                    <span className="text-xl font-bold text-white font-[Rajdhani] group-hover:text-cyan-100 transition-colors">
                      {link.username}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Copy Button (only for Email usually, but added to all for utility if needed, or just keep External Link) */}
                  {link.platform === 'EMAIL' && (
                     <button
                       onClick={(e) => handleCopy(e, link.username)}
                       className="p-2 text-gray-500 hover:text-white transition-colors"
                       title="Copy to Clipboard"
                     >
                       {copied === link.username ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                     </button>
                  )}
                  
                  <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-black transition-all">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>

              {/* Decorative Corners */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
           <p className="text-gray-500 font-mono text-xs">
             SECURE_TRANSMISSION_ID: <span className="text-cyan-500">NV-2025-X</span>
           </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
