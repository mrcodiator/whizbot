'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { getChatbotByDomainId } from '@/actions/chat.actions';
import { IDomain } from '@/types/domain.types';
import { Loader2 } from 'lucide-react';

// const Chatbot = dynamic(() => import('@/components/Chatbot/ChatbotComponent'), { ssr: false });
const Chatbot = dynamic(() => import('@/components/TestChat/TestChatComponent'), { ssr: false });

export default function EmbedPage({ params }: { params: { id: string } }) {
    const [data, setData] = useState<IDomain | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getChatbotByDomainId(params.id);
            if (res.data) {
                setData(res.data as IDomain);
            }
        };

        fetchData();

        // Listen for messages from the parent window
        const handleMessage = (event: MessageEvent) => {
            if (event.data.type === 'OPEN_CHAT') {
                // console.log('Opening chat');
            }
        };

        window.addEventListener('message', handleMessage);

        return () => window.removeEventListener('message', handleMessage);
    }, [params.id]);

    return (
        <div className="h-screen w-screen bg-white flex items-center justify-center">
            {/* {data ? <Chatbot chatbot={data} /> : <Loader2 className="w-8 h-8 animate-spin" />} */}
            {data ? <Chatbot domain={data} /> : <Loader2 className="w-8 h-8 animate-spin text-zinc-500" />}
        </div>
    );
}
