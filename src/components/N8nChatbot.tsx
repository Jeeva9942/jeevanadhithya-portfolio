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
    // Add the n8n chat CSS
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Add custom styles for the chatbot
    const customStyles = document.createElement('style');
    customStyles.innerHTML = `
      .n8n-chat {
        --chat-primary-color: hsl(217 91% 60%);
        --chat-secondary-color: hsl(220 14% 96%);
        --chat-background: hsl(0 0% 100%);
        --chat-border-radius: 1rem;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
      }
      .n8n-chat .chat-toggle {
        background: linear-gradient(135deg, hsl(217 91% 60%), hsl(217 91% 70%));
        box-shadow: 0 8px 30px hsla(217, 91%, 60%, 0.3);
        transition: all 0.3s ease;
      }
      .n8n-chat .chat-toggle:hover {
        transform: scale(1.05);
        box-shadow: 0 12px 40px hsla(217, 91%, 60%, 0.4);
      }
      .n8n-chat .chat-window {
        border-radius: 1rem;
        box-shadow: 0 25px 50px -12px hsl(217 91% 60% / 0.25);
      }
    `;
    document.head.appendChild(customStyles);

    // Add the n8n chat script
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      
      createChat({
        webhookUrl: 'https://n8n-hty8.onrender.com/webhook/69081c65-ffbe-4a6a-999c-fcd2c3420cfb/chat',
        chatSessionConfig: {
          welcomeMessage: 'Hi! I\'m Jeeva, your AI assistant. How can I help you today?',
          getStarted: 'Get Started',
          inputPlaceholder: 'Type your message...',
        },
        chatWindowConfig: {
          title: 'Chat with Jeeva',
          subtitle: 'AI Assistant & Developer',
          welcomeMessage: 'Hello! I\'m here to help you with any questions about my services or projects.',
          getStartedMessage: 'Start our conversation',
          botAvatarUrl: '/lovable-uploads/59358476-f50b-4d20-8e85-067c769692e2.png'
        }
      });
    `;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.head.contains(customStyles)) document.head.removeChild(customStyles);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default N8nChatbot;