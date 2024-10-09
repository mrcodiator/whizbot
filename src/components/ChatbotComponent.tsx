'use client'
import { useState, useEffect } from 'react'
import { Send, MessageCircle, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
    id: number
    text: string
    sender: 'user' | 'bot'
}

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hello! How can I help you today?", sender: 'bot' },
    ])
    const [inputMessage, setInputMessage] = useState('')

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const handleSendMessage = () => {
        if (inputMessage.trim() === '') return

        const newMessage: Message = {
            id: messages.length + 1,
            text: inputMessage,
            sender: 'user',
        }

        setMessages([...messages, newMessage])
        setInputMessage('')

        // Simulate bot response
        setTimeout(() => {
            const botResponse: Message = {
                id: messages.length + 2,
                text: "Thank you for your message. I'm a demo bot, so I can't provide a real response.",
                sender: 'bot',
            }
            setMessages(prevMessages => [...prevMessages, botResponse])
        }, 1000)
    }

    return (
        <div className="fixed bottom-0 right-0 z-40 p-4 sm:p-6 flex flex-col items-end">

            <div
                className={`w-full sm:w-[400px] h-[70vh] sm:h-[600px] max-h-[calc(100vh-120px)] transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col h-full bg-background border rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-primary text-primary-foreground p-4">
                        <h2 className="text-xl font-semibold">Chatbot</h2>
                    </div>
                    <ScrollArea className="flex-grow p-4">
                        <div className="space-y-4">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'
                                        }`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-lg ${message.sender === 'user'
                                            ? 'bg-primary text-primary-foreground'
                                            : 'bg-secondary text-secondary-foreground'
                                            }`}
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                    <div className="p-4 border-t">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                handleSendMessage()
                            }}
                            className="flex space-x-2"
                        >
                            <Input
                                type="text"
                                placeholder="Type your message..."
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                className="flex-grow"
                            />
                            <Button type="submit" size="icon">
                                <Send className="h-4 w-4" />
                                <span className="sr-only">Send message</span>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full w-12 h-12 p-0 shadow-lg mt-4"
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
            </Button>
        </div>
    )
}
