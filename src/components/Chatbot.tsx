import { useState, useRef, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Bot, User, Sparkles, MessageCircle, Trash2, Loader2, Zap } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import ReactMarkdown from 'react-markdown';

// --- System Context for RAG-like behavior ---
const JEEVAN_PORTFOLIO_CONTEXT = `
You are the AI Assistant for Jeevan Adhithya's personal portfolio. 
Jeevan is a Full-Stack Developer and AI Expert based in Coimbatore, Tamil Nadu.
Current Role: Lead Full Stack Developer.
Skills: React, Next.js, Node.js, Python, TypeScript, Tailwind CSS, Gemini/OpenAI Integration.
Projects: Portfolios, AI-driven applications, CRM systems, and more.
Hobbies: Coding, learning about AI advancements, playing chess.
Response Tone: Professional, friendly, and helpful. Always highlight Jeevan's technical expertise. Keep responses concise but impactful.
Use Markdown for formatting (bold, lists, etc.) if it helps with clarity.
`;

interface Message {
  role: "user" | "assistant";
  text: string;
}

const Chatbot = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "Hi! I'm Jeevan's AI Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Initialize Gemini
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
  const genAI = useRef(apiKey ? new GoogleGenerativeAI(apiKey) : null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, isTyping]);

  const clearChat = () => {
    setMessages([{ role: 'assistant', text: "Chat history cleared. How else can I help you?" }]);
    toast.success("Chat history cleared");
  };

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    
    const userText = input.trim();
    const userMessage: Message = { role: 'user', text: userText };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    if (!genAI.current) {
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          text: "I'm currently in 'offline mode' (API key not configured). Please add your Gemini API key to VITE_GEMINI_API_KEY!" 
        }]);
        setIsTyping(false);
      }, 1000);
      return;
    }

    try {
      // Logic for fallback model as implemented before
      let model;
      try {
        model = genAI.current.getGenerativeModel({ model: "gemini-2.5-flash" });
      } catch (e) {
        model = genAI.current.getGenerativeModel({ model: "gemini-2.5-lite" });
      }
      
      const history = messages
        .filter(msg => msg.text !== messages[0].text)
        .map(msg => ({
          role: msg.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: msg.text }],
        }));

      const chat = model.startChat({ history });
      const prompt = `${JEEVAN_PORTFOLIO_CONTEXT}\n\nUser Question: ${userText}`;
      const result = await chat.sendMessage(prompt);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'assistant', text }]);
    } catch (error: any) {
      console.error("Gemini Error:", error);
      
      if (error?.message?.includes('404') || error?.message?.includes('not found')) {
        try {
          const fallbackModel = genAI.current.getGenerativeModel({ model: "gemini-pro" });
          const result = await fallbackModel.generateContent(`${JEEVAN_PORTFOLIO_CONTEXT}\n\nUser Question: ${userText}`);
          const response = await result.response;
          const text = response.text();
          setMessages(prev => [...prev, { role: 'assistant', text }]);
          setIsTyping(false);
          return;
        } catch (fallbackError) {
          console.error("Fallback Error:", fallbackError);
        }
      }

      toast.error("AI service error. Please try again.");
      setMessages(prev => [...prev, { role: 'assistant', text: "Sorry, I'm having trouble connecting. My neural circuits might be overloaded. Please try again later!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Hide on messages page as requested in reference
  if (location.pathname === '/messages') return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-['Poppins']">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 100, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.9, y: 100, filter: 'blur(10px)' }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-4"
          >
            {/* Extended Chat Interface using reference elements */}
            <Card className="w-[320px] sm:w-[400px] h-[580px] sm:max-h-[80vh] shadow-premium rounded-3xl border-none bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl flex flex-col overflow-hidden border border-white/20 dark:border-white/10">
              {/* Header: Reference Style with Gradient */}
              <div className="p-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-between shadow-lg relative overflow-hidden shrink-0">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="flex items-center space-x-3 relative z-10">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 text-white shadow-inner">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-black text-sm tracking-tight mb-0.5">Jeevan AI Assistant</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                      <p className="text-[9px] text-blue-100 uppercase tracking-widest font-black opacity-90">Quantum Ready</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1 relative z-10">
                  <Button variant="ghost" size="icon" onClick={clearChat} className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10 rounded-lg">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10 rounded-lg">
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Messages Area with ScrollArea (Reference style) */}
              <ScrollArea className="flex-1 p-5" ref={scrollRef}>
                <div className="space-y-6">
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {msg.role === 'assistant' && (
                        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg text-white">
                          <Bot className="h-4 w-4" />
                        </div>
                      )}
                      <div className={`group relative max-w-[80%] p-4 rounded-2xl text-[13px] font-medium leading-relaxed shadow-sm ${
                        msg.role === 'user' 
                          ? 'bg-blue-600 text-white rounded-tr-none shadow-blue-500/20' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200/50 dark:border-slate-800 shadow-slate-900/10'
                      }`}>
                        {msg.role === 'assistant' ? (
                          <div className="prose prose-sm dark:prose-invert max-w-none text-inherit [&>p]:mb-2 [&>p:last-child]:mb-0">
                            <ReactMarkdown>{msg.text}</ReactMarkdown>
                          </div>
                        ) : (
                          <p className="whitespace-pre-wrap">{msg.text}</p>
                        )}
                      </div>
                      {msg.role === 'user' && (
                        <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0 text-blue-600">
                          <User className="h-4 w-4" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg text-white">
                          <Bot className="h-4 w-4" />
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center space-x-1">
                         <div className="h-2 w-2 rounded-full bg-blue-500/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                         <div className="h-2 w-2 rounded-full bg-blue-500/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                         <div className="h-2 w-2 rounded-full bg-blue-500/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </motion.div>
                  )}
                </div>
              </ScrollArea>

              {/* Input Area with Reference Features */}
              <div className="p-5 bg-white/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-white/5 backdrop-blur-md">
                <div className="flex items-center space-x-3 bg-slate-100 dark:bg-slate-800/50 p-1.5 rounded-2xl border border-slate-200 dark:border-white/5 focus-within:border-blue-500/50 transition-all shadow-inner">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Ask me anything..."
                    disabled={isTyping}
                    className="flex-1 border-none bg-transparent h-11 px-3 focus-visible:ring-0 text-[13px] font-semibold text-slate-800 dark:text-slate-100 placeholder:text-slate-400"
                  />
                  <Button 
                    onClick={handleSend}
                    disabled={!input.trim() || isTyping}
                    size="icon"
                    className="w-11 h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 active:scale-95 transition-all"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <div className="mt-4 flex items-center justify-center space-x-2 opacity-60">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500 fill-current" />
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 text-center leading-none">Powered by Gemini AI</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-tr from-blue-600 to-indigo-700 rounded-2xl sm:rounded-3xl flex items-center justify-center text-white shadow-[0_15px_35px_rgba(37,99,235,0.4)] relative group overflow-hidden border border-white/20"
          >
            <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-1000 rounded-full" />
            <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 relative z-10" />
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full border-[2px] sm:border-[3px] border-white dark:border-slate-900 z-20 shadow-[0_0_12px_rgba(74,222,128,1)]" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
