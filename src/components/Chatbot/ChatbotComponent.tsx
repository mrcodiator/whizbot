import React, { useState, useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { IDomain } from '@/types/domain.types';
import { ChevronDown, PlusCircle, Send } from 'lucide-react';
import moment from "moment";

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    createdAt: string;
}

const ChatbotComponent = ({ chatbot }: { chatbot: IDomain }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    useEffect(() => {
        fetchPreviousMessages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchPreviousMessages = async () => {
        try {
            const response = await fetch(`/api/chat/history?chatbotId=${chatbot.Chatbot.id}`);
            if (!response.ok) throw new Error('Failed to fetch message history');
            const data = await response.json();
            setMessages(data.messages);
        } catch (error) {
            console.error('Error fetching message history:', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!message.trim()) return;

        const userMessage: Message = { id: Date.now().toString(), role: 'user', content: message, createdAt: new Date().toISOString() };
        setMessages(prev => [...prev, userMessage]);
        setMessage('');
        setIsTyping(true);

        const responses = [
            "I'm a dummy AI, but I'll try my best to help!",
            "That's an interesting question. Let me think...",
            "I don't have real AI capabilities, but I can pretend!",
            `You said: "${message}". That's fascinating!`,
            "I'm just a placeholder, but I appreciate your input.",
            "Beep boop! I'm processing your request... Just kidding, I'm a dummy AI!",
        ];

        const reply: Message = { id: Date.now().toString(), role: 'assistant', content: responses[Math.floor(Math.random() * responses.length)], createdAt: new Date().toISOString() };

        setTimeout(() => {
            setMessages(prev => [...prev, reply]);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <Card className='flex flex-col border-none rounded-none h-full w-full p-0 text-slate-800'>
            <CardHeader className='p-4 flex flex-row justify-between bg-slate-900 text-white'>
                <div className='flex items-center gap-2'>
                    <Avatar>
                        <AvatarImage className='object-contain' src={chatbot.logo} alt={chatbot.name} />
                        <AvatarFallback>{chatbot.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className='text-xl'>Welcome!</CardTitle>
                        <CardDescription>Powered by Whizbot.</CardDescription>
                    </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => window.parent.postMessage({ type: 'CHAT_VISIBILITY_CHANGE', isOpen: false }, '*')}>
                    <ChevronDown className='h-4 w-4' />
                </Button>
            </CardHeader>

            <CardContent className='p-4 flex-1 bg-slate-100 overflow-y-auto'>
                {messages.map((msg) => (
                    <div key={msg.id} className={`mb-4 flex flex-col ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                        <span className={`inline-block max-w-[180px] w-fit text-sm px-3 py-2 rounded-lg ${msg.role === 'user' ? ' mr-0 ml-auto bg-slate-900 text-white' : 'bg-white'}`}>
                            {msg.content}
                        </span>
                        <span className="text-xs text-gray-500">{moment(msg.createdAt).fromNow()}</span>
                    </div>
                ))}
                {isTyping && (
                    <div className="text-left">
                        <span className="text-sm inline-block p-2 rounded-lg bg-gray-200">
                            Typing...
                        </span>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </CardContent>

            <CardFooter className='w-full p-4 bg-white '>
                <form onSubmit={handleSubmit} className='w-full flex items-center gap-2'>
                    <Button size={"icon"} className=' bg-white hover:bg-slate-100 shadow-none rounded-full'>
                        <PlusCircle className='h-4 w-4' />
                    </Button>
                    <input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='bg-transparent outline-none  text-black flex-1'
                        type="text"
                        placeholder="Ask me a question..."
                    />
                    <Button
                        size={"icon"}
                        type="submit"
                        className='bg-slate-900 hover:bg-slate-800 text-white rounded-full'
                        disabled={!message.trim() || isTyping}
                    >
                        <Send className='h-4 w-4' />
                    </Button>
                </form>
            </CardFooter>
        </Card>
    );
};

export default ChatbotComponent;