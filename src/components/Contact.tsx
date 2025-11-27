import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal, Bot, User, AlertCircle } from 'lucide-react';
import { ChatRole, type ChatMessage } from '../../types';
import { sendMessageToGemini } from '../../services/geminiService';

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'chat'>('form');
  
  // Chat State
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { role: ChatRole.MODEL, text: "INITIATING... I am CYBER_ASSIST. How can I facilitate your inquiry regarding this engineer?" }
  ]);
  const [inputMsg, setInputMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  const handleSendMessage = async () => {
    if (!inputMsg.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: ChatRole.USER, text: inputMsg };
    setChatHistory(prev => [...prev, userMsg]);
    setInputMsg('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(chatHistory, inputMsg);
      const modelMsg: ChatMessage = { role: ChatRole.MODEL, text: responseText };
      setChatHistory(prev => [...prev, modelMsg]);
    } catch (e) {
      console.error(e);
      setChatHistory(prev => [...prev, { role: ChatRole.MODEL, text: "ERROR: Connection interrupted." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-black/60 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white font-[Orbitron] mb-2">
            <span className="text-yellow-400 mr-2">04.</span>
            TRANSMISSION_LINK
          </h2>
          <p className="text-gray-400 font-mono">Establish connection via standard protocol or neural link.</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-900 border border-gray-700 p-1 rounded-sm">
             <button 
               onClick={() => setActiveTab('form')}
               className={`px-6 py-2 text-sm font-mono tracking-widest transition-all ${activeTab === 'form' ? 'bg-cyan-900/50 text-cyan-400 shadow-[0_0_10px_rgba(0,243,255,0.2)]' : 'text-gray-500 hover:text-white'}`}
             >
               STANDARD_FORM
             </button>
             <button 
               onClick={() => setActiveTab('chat')}
               className={`px-6 py-2 text-sm font-mono tracking-widest transition-all ${activeTab === 'chat' ? 'bg-purple-900/50 text-purple-400 shadow-[0_0_10px_rgba(188,19,254,0.2)]' : 'text-gray-500 hover:text-white'}`}
             >
               NEURAL_CHAT
             </button>
          </div>
        </div>

        <div className="bg-gray-900/40 border border-gray-700 p-1 relative min-h-[500px] backdrop-blur-md">
           
           {/* Decorative corner lines */}
           <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-cyan-500"></div>
           <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-cyan-500"></div>
           <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-cyan-500"></div>
           <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-cyan-500"></div>

           {/* Content Area */}
           <div className="bg-black/50 p-6 h-full min-h-[480px]">
             
             {activeTab === 'form' ? (
               <form className="space-y-6 h-full flex flex-col justify-center animate-fadeIn">
                 <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-xs font-mono text-cyan-500 uppercase">Input_ID: Name</label>
                     <input type="text" className="w-full bg-gray-900 border border-gray-700 p-3 text-white focus:border-cyan-500 focus:shadow-[0_0_8px_rgba(0,243,255,0.3)] outline-none transition-all font-mono" placeholder="john_doe" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-mono text-cyan-500 uppercase">Input_ID: Email</label>
                     <input type="email" className="w-full bg-gray-900 border border-gray-700 p-3 text-white focus:border-cyan-500 focus:shadow-[0_0_8px_rgba(0,243,255,0.3)] outline-none transition-all font-mono" placeholder="email@server.net" />
                   </div>
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs font-mono text-cyan-500 uppercase">Data_Packet: Message</label>
                   <textarea rows={6} className="w-full bg-gray-900 border border-gray-700 p-3 text-white focus:border-cyan-500 focus:shadow-[0_0_8px_rgba(0,243,255,0.3)] outline-none transition-all font-mono" placeholder="Enter transmission content..."></textarea>
                 </div>
                 <button type="submit" className="w-full py-4 bg-cyan-600/20 border border-cyan-500 text-cyan-400 font-bold tracking-widest hover:bg-cyan-500 hover:text-black transition-all uppercase font-mono group relative overflow-hidden">
                   <span className="relative z-10">Transmit_Data</span>
                   <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                 </button>
               </form>
             ) : (
               <div className="flex flex-col h-full animate-fadeIn">
                 {/* Chat Display */}
                 <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2 max-h-[350px]">
                   {chatHistory.map((msg, i) => (
                     <div key={i} className={`flex ${msg.role === ChatRole.USER ? 'justify-end' : 'justify-start'}`}>
                       <div className={`max-w-[80%] flex items-start gap-3 ${msg.role === ChatRole.USER ? 'flex-row-reverse' : 'flex-row'}`}>
                         <div className={`p-2 rounded-sm border ${msg.role === ChatRole.USER ? 'border-cyan-500/30 bg-cyan-900/20' : 'border-purple-500/30 bg-purple-900/20'}`}>
                           {msg.role === ChatRole.USER ? <User size={16} className="text-cyan-400" /> : <Bot size={16} className="text-purple-400" />}
                         </div>
                         <div className={`p-3 text-sm font-mono border-l-2 ${msg.role === ChatRole.USER ? 'border-cyan-500 text-cyan-100 bg-cyan-950/30' : 'border-purple-500 text-purple-100 bg-purple-950/30'}`}>
                           {msg.text}
                         </div>
                       </div>
                     </div>
                   ))}
                   {isLoading && (
                     <div className="flex justify-start">
                       <div className="max-w-[80%] flex items-start gap-3">
                         <div className="p-2 rounded-sm border border-purple-500/30 bg-purple-900/20">
                           <Bot size={16} className="text-purple-400" />
                         </div>
                         <div className="p-3 text-xs font-mono text-purple-300 animate-pulse">
                           PROCESSING...
                         </div>
                       </div>
                     </div>
                   )}
                   <div ref={chatEndRef} />
                 </div>

                 {/* Chat Input */}
                 <div className="relative mt-auto border-t border-gray-700 pt-4">
                   <div className="flex gap-2">
                     <div className="relative flex-1">
                       <input 
                         type="text" 
                         value={inputMsg}
                         onChange={(e) => setInputMsg(e.target.value)}
                         onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                         className="w-full bg-black border border-gray-600 p-3 pl-10 text-white font-mono focus:border-purple-500 outline-none"
                         placeholder="Type command..."
                       />
                       <Terminal size={16} className="absolute left-3 top-3.5 text-gray-500" />
                     </div>
                     <button 
                       onClick={handleSendMessage}
                       disabled={isLoading}
                       className="p-3 bg-purple-600/20 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all disabled:opacity-50"
                     >
                       <Send size={18} />
                     </button>
                   </div>
                   {!import.meta.env.VITE_API_KEY && (
                      <div className="absolute -bottom-6 right-0 flex items-center gap-1 text-[10px] text-yellow-500 font-mono opacity-70">
                        <AlertCircle size={10} />
                        <span>API KEY MISSING - DEMO MODE</span>
                      </div>
                   )}
                 </div>
               </div>
             )}
           </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
