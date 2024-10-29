import { z } from "zod";

export const registerSchema = z.object({
    password: z.string().min(8, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string().min(8, { message: "Password must be at least 6 characters" }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

export const otpSchema = z.object({
    code: z.string().min(6, { message: "Code must be of 6 characters" }),
})

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be at least 6 characters" }),
})

export const forgotPasswordSchema = z.object({
    password: z.string().min(8, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string().min(8, { message: "Password must be at least 6 characters" }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

export const updateUserSchema = z.object({
    firstName: z.string().min(3, {
        message: "First name must be at least 3 characters",
    }),
    lastName: z.string().min(3, {
        message: "Last name must be at least 3 characters",
    }),
})