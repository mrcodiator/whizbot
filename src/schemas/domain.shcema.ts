import { z } from "zod";

export const createDomainSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    url: z.string().url({ message: "Invalid URL" }),
    logo: z.string().min(1, { message: "Please upload a logo" }),
})

export const updateDomainSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    url: z.string().url({ message: "Invalid URL" }),
    logo: z.string().min(1, { message: "Please upload a logo" }),
    email: z.string().email({ message: "Invalid email address" }),
})