import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Terminal, Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [activeHash, setActiveHash] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Simple active section detection
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < 300) {
            setActiveHash(`#${section}`);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b border-white/10 ${scrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo Area */}
        <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="relative p-2 border border-cyan-500/50 rounded-sm group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_#00f3ff] transition-all">
            <Cpu className="w-6 h-6 text-cyan-400 animate-pulse" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-widest text-white font-[Orbitron]">
              NUON<span className="text-cyan-400">VAKHIM</span>
            </span>
            <span className="text-[10px] text-gray-400 font-mono tracking-[0.2em]">SYSTEM.ONLINE</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative px-4 py-2 font-mono text-sm tracking-wider transition-all duration-300 clip-path-slant group hover:text-cyan-400
                ${activeHash === item.href ? 'text-cyan-400 bg-cyan-900/20' : 'text-gray-400'}
              `}
            >
              <span className="relative z-10 flex items-center gap-2">
                {activeHash === item.href && <span className="text-[10px] animate-pulse">▶</span>}
                {item.label}
              </span>
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-cyan-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
              {/* Active Bottom Line */}
              <div className={`absolute bottom-0 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ${activeHash === item.href ? 'w-full' : 'w-0'}`}></div>
            </a>
          ))}
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden text-cyan-400">
           <Terminal className="w-6 h-6" />
        </div>
      </div>
      
      {/* Decorative Line below nav */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </nav>
  );
};

export default Navbar;