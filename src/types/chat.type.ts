import { Chatbot } from "@prisma/client";
import { Domain } from "domain";
import { IChatMessage } from "./domain.types";

export interface Customer {
    id: string;
    email?: string;
    domainId: string;
    Domain?: Domain;
    createdAt: Date;
    updatedAt: Date;
    ChatRoom: IChatRoom[];
}

export interface IChatRoom {
    id: string;
    customerId: string;
    Customer: Customer;
    chatbotId: string;
    Chatbot?: Chatbot;
    chatMessage: IChatMessage[];
    createdAt: Date;
    updatedAt: Date;
}

export interface ChatMessage {
    id: string;
    content: string;
    role: 'customer' | 'bot';
    createdAt: Date;
    chatRoomId: string;
    ChatRoom: IChatRoom;
}
