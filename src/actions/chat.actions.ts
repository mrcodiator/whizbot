'use server';

import { sendResponse } from "@/helper/response";
import { getUser } from "./user.actions";
import { errorMessages } from "@/helper/error-messages";
import { successMessages } from "@/helper/success-message";
import { revalidatePath } from "next/cache";
import db from "@/db/db";
import { pusherServer } from "@/lib/pusher";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Update chatbot's training data
export const updateChatbot = async (chatbotId: string, data: string) => {
    try {
        const user = await getUser();
        if (!user || !user.id) {
            return sendResponse(errorMessages.BAD_REQUEST, null);
        }

        await db.chatbot.update({
            where: {
                id: chatbotId,
            },
            data: {
                trainData: data,
            },
        });

        revalidatePath("/");

        return sendResponse(successMessages.CHATBOT_UPDATED);
    } catch (error) {
        console.error('Error updating chatbot:', error);
        return sendResponse(errorMessages.SERVER_ERROR);
    }
};

// Get chatbot by domain ID
export const getChatbotByDomainId = async (domainId: string) => {
    try {
        const chatbot = await db.domain.findUnique({
            where: { id: domainId },
            include: { Chatbot: true },
        });

        return sendResponse(successMessages.SUCCESS, chatbot);
    } catch (error) {
        console.error('Error fetching chatbot by domain ID:', error);
        return sendResponse(errorMessages.SERVER_ERROR);
    }
};

// Get chatbot for the logged-in user's domain
export const getChatbot = async (domainId: string) => {
    try {
        const user = await getUser();
        if (!user || !user.id) {
            return sendResponse(errorMessages.BAD_REQUEST, null);
        }

        const chatbot = await db.chatbot.findUnique({
            where: { domainId },
        });

        return sendResponse(successMessages.SUCCESS, chatbot);
    } catch (error) {
        console.error('Error fetching chatbot:', error);
        return sendResponse(errorMessages.SERVER_ERROR);
    }
};

// Create a new chat room
export const createChatRoom = async (chatbotId: string, domainId: string) => {
    try {
        const newCustomer = await db.customer.create({
            data: { domainId },
        });

        const chatroom = await db.chatRoom.create({
            data: {
                chatbotId,
                customerId: newCustomer.id,
            },
        });

        // Create Initial Message
        // const botMessage = await db.chatMessage.create({
        //     data: {
        //         chatRoomId: chatroom.id,
        //         content: 'Hi there! How can I help you today?',
        //         role: 'bot',
        //     },
        // });

        // await pusherServer.trigger(`chat-${chatroom.id}`, 'new-message', botMessage);

        revalidatePath("/")

        return sendResponse(successMessages.SUCCESS, chatroom);
    } catch (error) {
        console.error('Error creating chat room:', error);
        return sendResponse(errorMessages.SERVER_ERROR);
    }
};

// Get a specific chat room by ID
export const getChatRoom = async (chatroomId: string, chatbotId: string) => {
    try {
        const chatroom = await db.chatRoom.findUnique({
            where: { id: chatroomId, chatbotId },
            include: {
                chatMessage: true,
            }
        });

        return sendResponse(successMessages.SUCCESS, chatroom);
    } catch (error) {
        console.error('Error fetching chat room:', error);
        return sendResponse(errorMessages.SERVER_ERROR);
    }
};

// Delete a chat room by ID
export const deleteChatRoom = async (chatroomId: string) => {
    try {
        const chatroom = await db.chatRoom.delete({
            where: { id: chatroomId },
        });

        return sendResponse(successMessages.SUCCESS, chatroom);
    } catch (error) {
        console.error('Error deleting chat room:', error);
        return sendResponse(errorMessages.SERVER_ERROR);
    }
};

// Add a new message to a chat room
export const addNewMessage = async (chatroomId: string, message: string) => {
    try {
        const findChatRoom = await db.chatRoom.findUnique({
            where: { id: chatroomId },
            include: { Chatbot: { include: { Domain: true } } },
        })
        // Create customer message
        const customerMessage = await db.chatMessage.create({
            data: {
                chatRoomId: chatroomId,
                content: message,
                role: 'customer',
            },
        });

        // Trigger Pusher event for customer message
        await pusherServer.trigger(`chat-${chatroomId}`, 'new-message', customerMessage);
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
            You are a problem solver chatbot for customer support act like a guide and solve people's queries.
            here are the details about the business 
            name: ${findChatRoom?.Chatbot.Domain.name},
            email: ${findChatRoom?.Chatbot.Domain.email},
            url: ${findChatRoom?.Chatbot.Domain.url},
            here are some more details: ${findChatRoom?.Chatbot.trainData}
            Now reply to the customer message: ${message}
            Remember act like an employee of the business.
        `;

        const result = await model.generateContent(prompt);

        const reply = result.response.text()

        // console.log(reply);


        // Create bot response
        const botMessage = await db.chatMessage.create({
            data: {
                chatRoomId: chatroomId,
                content: reply || "We have some issue right now",
                role: 'bot',
            },
        });

        // Trigger Pusher event for bot response
        await pusherServer.trigger(`chat-${chatroomId}`, 'new-message', botMessage);

        revalidatePath("/")

        return sendResponse(successMessages.SUCCESS, customerMessage);
    } catch (error) {
        console.error('Error adding new message:', error);
        return sendResponse(errorMessages.SERVER_ERROR);
    }
};


// export const addNewMessage = async (chatroomId: string, message: string) => {
//     try {
//         // const findChatRoom = await db.chatRoom.findUnique({
//         //     where: { id: chatroomId },
//         //     include: { Chatbot: { include: { Domain: true } } },
//         // });

//         // Create customer message
//         const customerMessage = await db.chatMessage.create({
//             data: {
//                 chatRoomId: chatroomId,
//                 content: message,
//                 role: 'customer',
//             },
//         });

//         // Trigger Pusher event for customer message
//         await pusherServer.trigger(`chat-${chatroomId}`, 'new-message', customerMessage);

//         // Generate bot response using Gemini API
//         // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
//         // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//         // const prompt = `
//         //     You are a problem solver chatbot for customer support act like a guide and solve people's queries.
//         //     here are the details about the business 
//         //     name: ${findChatRoom?.Chatbot.Domain.name},
//         //     email: ${findChatRoom?.Chatbot.Domain.email},
//         //     url: ${findChatRoom?.Chatbot.Domain.url},
//         //     here are some more details: ${findChatRoom?.Chatbot.trainData}
//         //     Now reply to the customer message: ${message}
//         //     Remember act like an employee of the business.
//         // `;

//         // const result = await model.generateContent(prompt);

//         // const botReply = result.response.text();

//         const botReply = `We have some issue right now`;

//         // Save bot response in the database
//         const botMessage = await db.chatMessage.create({
//             data: {
//                 chatRoomId: chatroomId,
//                 content: botReply,
//                 role: 'bot',
//             },
//         });

//         console.log(botReply);


//         // Trigger Pusher event for bot message
//         await pusherServer.trigger(`chat-${chatroomId}`, 'new-message', botMessage);

//         return sendResponse(successMessages.SUCCESS, customerMessage);
//     } catch (error) {
//         console.error('Error sending message:', error);
//         return sendResponse(errorMessages.SERVER_ERROR);
//     }
// };
