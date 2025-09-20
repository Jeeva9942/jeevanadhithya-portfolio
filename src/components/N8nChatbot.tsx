import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

declare global {
  interface Window {
    createChat?: (config: { webhookUrl: string }) => void;
  }
}

const N8nChatbot = () => {
  useEffect(() => {
    // Add custom styles for the chatbot
    const customStyles = document.createElement('style');
    customStyles.innerHTML = `
      .n8n-chat {
        --chat-primary-color: linear-gradient(135deg, #3b82f6, #8b5cf6);
        --chat-secondary-color: hsl(220 14% 98%);
        --chat-background: linear-gradient(145deg, #ffffff, #f8fafc);
        --chat-border-radius: 1.5rem;
        --chat-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.25);
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
      }
      
      .n8n-chat .chat-toggle {
        background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899) !important;
        box-shadow: 0 10px 40px rgba(59, 130, 246, 0.4) !important;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        border: 2px solid rgba(255, 255, 255, 0.2) !important;
        backdrop-filter: blur(10px) !important;
        width: 70px !important;
        height: 70px !important;
        border-radius: 50% !important;
        animation: pulse-glow 2s infinite !important;
      }
      
      .n8n-chat .chat-toggle:hover {
        transform: scale(1.1) rotate(5deg) !important;
        box-shadow: 0 15px 50px rgba(59, 130, 246, 0.6) !important;
        background: linear-gradient(135deg, #2563eb, #7c3aed, #db2777) !important;
      }
      
      .n8n-chat .chat-window {
        border-radius: 1.5rem !important;
        box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.3) !important;
        border: 1px solid rgba(255, 255, 255, 0.2) !important;
        backdrop-filter: blur(20px) !important;
        background: linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.95)) !important;
        max-width: 400px !important;
        max-height: 600px !important;
      }
      
      .n8n-chat .chat-header {
        background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important;
        color: white !important;
        padding: 1.5rem !important;
        border-radius: 1.5rem 1.5rem 0 0 !important;
      }
      
      .n8n-chat .chat-input {
        border-radius: 1rem !important;
        border: 2px solid rgba(59, 130, 246, 0.2) !important;
        transition: all 0.3s ease !important;
      }
      
      .n8n-chat .chat-input:focus {
        border-color: #3b82f6 !important;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
      }
      
      .n8n-chat .chat-message {
        margin: 0.5rem 0 !important;
        animation: slideInMessage 0.3s ease-out !important;
      }
      
      .n8n-chat .chat-message.user {
        background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important;
        color: white !important;
        border-radius: 1.5rem 1.5rem 0.5rem 1.5rem !important;
      }
      
      .n8n-chat .chat-message.bot {
        background: rgba(248, 250, 252, 0.8) !important;
        border: 1px solid rgba(59, 130, 246, 0.1) !important;
        border-radius: 1.5rem 1.5rem 1.5rem 0.5rem !important;
      }
      
      @keyframes pulse-glow {
        0%, 100% {
          box-shadow: 0 10px 40px rgba(59, 130, 246, 0.4);
        }
        50% {
          box-shadow: 0 10px 40px rgba(139, 92, 246, 0.6);
        }
      }
      
      @keyframes slideInMessage {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(customStyles);

    // Add the n8n chat script
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      
      createChat({
        webhookUrl: 'https://jeeva3735.app.n8n.cloud/webhook/69081c65-ffbe-4a6a-999c-fcd2c3420cfb/chat',
        chatSessionConfig: {
          welcomeMessage: '👋 Hi there! I\'m Jeeva\'s AI assistant. I can help you learn more about his skills, projects, and experience. What would you like to know?',
          getStarted: '🚀 Start Conversation',
          inputPlaceholder: '💬 Ask me anything about Jeevan...',
        },
        chatWindowConfig: {
          title: '💻 Chat with Jeevan',
          subtitle: '🤖 AI Assistant & Full-Stack Developer',
          welcomeMessage: '🎯 Hello! I\'m here to help you learn about Jeevan\'s expertise, projects, and how he can help bring your ideas to life. Feel free to ask me anything!',
          getStartedMessage: '✨ Let\'s start our conversation',
          botAvatarUrl: '/src/assets/WhatsApp Image 2025-09-15 at 17.06.36_fc3eaa50.jpg',
          showTimestamp: true,
          theme: 'custom',
          position: 'bottom-right'
        }
      });
    `;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      if (document.head.contains(customStyles)) document.head.removeChild(customStyles);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default N8nChatbot;