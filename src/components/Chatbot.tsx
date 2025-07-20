// App.tsx
import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export const Chatbot = () => {
	useEffect(() => {
		createChat({
			webhookUrl: 'https://n8n-hty8.onrender.com/webhook/8e7a74f7-6212-4cb4-bc0b-0a91775ef341/chat'
		});
	}, []);

	return (<div></div>);
};
export default Chatbot;