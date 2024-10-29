import { IChatbot } from "./chatbot.type"

export interface IDomain {
    id: string;
    name: string;
    url: string;
    email: string;
    userId: string;
    logo: string;
    createdAt: string;
    updatedAt: string;
    Chatbot: IChatbot;
}


export interface IChatMessage {
    id: string;
    content: string;
    role: 'customer' | 'bot';
    chatRoomId: string;
    createdAt: string;
}

export interface ICreateDomain {
    name: string;
    url: string;
    logo: string;
}

export interface IUpdateDomain {
    name: string;
    url: string;
    logo: string;
}