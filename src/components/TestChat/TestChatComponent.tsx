'use client';

import React, { useCallback, useEffect, useState, useRef } from 'react';
import { ChevronDown, Loader2, Send } from 'lucide-react';
import { IChatMessage, IDomain } from '@/types/domain.types';
import moment from 'moment';
import { addNewMessage, createChatRoom, getChatRoom } from '@/actions/chat.actions';
import { pusherClient } from '@/lib/pusher';
import { Button } from '../ui/button';


const TestChatComponent = ({ domain }: { domain: IDomain }) => {
    const [messages, setMessages] = useState<IChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isInitialLoading, setIsInitialLoading] = useState(true);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [chatRoomId, setChatRoomId] = useState<string>('');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const channelRef = useRef<any>(null);

    const scrollToBottom = useCallback(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: 'smooth', // Ensures smooth scrolling
            });
        }
    }, []);

    const setupPusherSubscription = useCallback((roomId: string) => {
        // Cleanup previous subscription if exists
        if (channelRef.current) {
            channelRef.current.unbind_all();
            pusherClient.unsubscribe(`chat-${roomId}`);
        }

        // Setup new subscription
        const channel = pusherClient.subscribe(`chat-${roomId}`);
        channelRef.current = channel;

        channel.bind('new-message', (data: IChatMessage) => {
            console.log('New message received:', data);
            setMessages(prev => {
                // Check if message already exists to prevent duplicates
                const messageExists = prev.some(msg => msg.id === data.id);
                if (messageExists) return prev;
                return [...prev, data];
            });
            scrollToBottom();
        });

        channel.bind('pusher:subscription_succeeded', () => {
            console.log('Successfully subscribed to channel:', `chat-${roomId}`);
        });

        channel.bind('pusher:subscription_error', (error: unknown) => {
            console.error('Subscription error:', error);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollToBottom, isInitialLoading, isLoading]);

    const fetchChat = useCallback(async () => {
        try {
            const storedChatRoomId = window.localStorage.getItem('chatRoomId') || '';
            if (storedChatRoomId) {
                console.log('Fetching chat for room:', storedChatRoomId);
                const res = await getChatRoom(storedChatRoomId, domain.Chatbot.id);
                console.log('Chat room response:', res);

                if (res.success) {
                    setMessages(res.data.chatMessage);
                    setChatRoomId(storedChatRoomId);
                    setupPusherSubscription(storedChatRoomId);
                } else {
                    window.localStorage.removeItem('chatRoomId');
                }
            }
        } catch (error) {
            console.error('Error fetching chat:', error);
        } finally {
            setIsInitialLoading(false);
        }
    }, [domain.Chatbot.id, setupPusherSubscription]);

    useEffect(() => {
        fetchChat();

        return () => {
            if (channelRef.current) {
                channelRef.current.unbind_all();
                pusherClient.unsubscribe(`chat-${chatRoomId}`);
            }
        };
    }, [fetchChat, chatRoomId]);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!input.trim() || isLoading) return;
        setIsLoading(true);

        try {
            let updatedChatRoomId = chatRoomId;
            if (!updatedChatRoomId) {
                const res = await createChatRoom(domain.Chatbot.id, domain.id);
                if (res.success) {
                    updatedChatRoomId = res.data.id;
                    setChatRoomId(updatedChatRoomId);
                    window.localStorage.setItem('chatRoomId', updatedChatRoomId);
                    setupPusherSubscription(updatedChatRoomId);
                }
            }

            const optimisticMessage: IChatMessage = {
                id: Date.now().toString(),
                content: input,
                role: 'customer',
                createdAt: new Date().toISOString(),
                chatRoomId: updatedChatRoomId
            };
            setMessages(prev => [...prev, { ...optimisticMessage, ChatRoom: { id: updatedChatRoomId } } as IChatMessage]);
            setInput('');
            scrollToBottom();

            const res = await addNewMessage(updatedChatRoomId, input);
            if (!res.success) {
                setMessages(prev => prev.filter(msg => msg.id !== optimisticMessage.id));
            }
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <div className="h-full w-full bg-transparent overflow-hidden flex flex-col shadow-sm">
                <div className="border-b bg-zinc-800 border-gray-200 p-4 flex items-center justify-between gap-2">
                    <div>
                        <h2 className="text-lg font-semibold text-white">{domain.name}</h2>
                        <p className="mt-1 text-sm text-gray-400">Powered by Whizbot.</p>
                    </div>

                    <Button
                        variant="ghost"
                        className="bg-transparent text-white hover:bg-gray-100/10"
                        size="icon"
                        onClick={() => window.parent.postMessage({ type: 'CHAT_VISIBILITY_CHANGE', isOpen: false }, '*')}
                    >
                        <ChevronDown className="h-4 w-4" />
                    </Button>
                </div>

                <div className="flex-1 overflow-y-auto bg-white" ref={scrollRef}>
                    <div className="p-4 w-full flex flex-col gap-3">
                        {isInitialLoading ? (
                            <Loader2 className="w-8 h-8 animate-spin text-zinc-500 mx-auto my-auto" />
                        ) : (
                            messages.map((msg, idx) => (
                                <div
                                    key={`${msg.id}-${idx}`}
                                    className={`flex ${msg.role === 'customer' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[250px] w-fit flex flex-col rounded-lg p-3 ${msg.role === 'customer'
                                            ? 'bg-zinc-800 text-white'
                                            : 'bg-gray-100 text-zinc-800'
                                            }`}
                                    >
                                        <span className="text-sm">{msg.content}</span>
                                        <span className={`text-[10px] mt-1 text-right text-zinc-400`}>
                                            {moment(msg.createdAt).format('hh:mm A')}
                                        </span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <form
                    className="p-4 border-t border-gray-200 flex items-center gap-2 bg-white"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Type message here..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 text-zinc-800 rounded-md border-none outline-none bg-transparent p-2 text-sm focus:outline-none focus:border-transparent"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="p-3 rounded-md hover:bg-gray-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <Loader2 className="w-4 h-4 text-zinc-800 animate-spin" />
                        ) : (
                            <Send className="w-4 h-4 text-zinc-800" />
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TestChatComponent;
