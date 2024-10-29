import { z } from "zod";

export const trainChatbotSchema = z.object({
    trainData: z.string().min(50, {
        message: "trainData must be at least 50 characters.",
    }),
})