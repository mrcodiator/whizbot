'use server';

import db from "@/db/db";
import { errorMessages } from "@/helper/error-messages";
import { sendResponse } from "@/helper/response";
import { successMessages } from "@/helper/success-message";
import { IRegisterUser, IUpdateUser } from "@/types/auth.type";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function getUser() {
    try {
        const user = await currentUser();

        const findUser = await db.user.findUnique({
            where: {
                clerkId: user?.id
            },
            include: {
                Subscription: true
            }
        })

        if (findUser?.Subscription?.expiresAt && new Date(findUser.Subscription.expiresAt) < new Date()) {
            await db.subscription.delete({
                where: {
                    id: findUser.Subscription.id
                }
            });
        }

        return findUser;
    } catch {
        return null;
    }
}


export async function registerUser(data: IRegisterUser) {
    try {
        const user = await currentUser();

        if (user) {
            return sendResponse(errorMessages.BAD_REQUEST, null)
        }

        // check if user already exists
        const userExists = await db.user.findUnique({
            where: {
                email: data.email
            }
        })

        if (userExists) {
            return sendResponse(errorMessages.USER_EXISTS, null)
        }

        await db.user.create({
            data: {
                clerkId: data.clerkId,
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName
            }
        })

        revalidatePath("/")

        return sendResponse(successMessages.USER_CREATED, null)

    } catch (error) {
        console.log(error);
        return sendResponse(errorMessages.SERVER_ERROR, null)
    }
}

export async function deleteUser(userId: string) {
    try {
        await clerkClient.users.deleteUser(userId);
        revalidatePath("/")
        return sendResponse(successMessages.SUCCESS)
    } catch (error) {
        console.log(error);
        return sendResponse(errorMessages.SERVER_ERROR)
    }
}

export async function updateUser(data: IUpdateUser) {
    try {
        const user = await currentUser();
        if (!user) {
            return sendResponse(errorMessages.AUTH_ERROR)
        }

        ;

        await clerkClient.users.updateUser(user.id, {
            firstName: data.firstName,
            lastName: data.lastName
        })

        await db.user.update({
            where: {
                clerkId: user.id
            },
            data: {
                firstName: data.firstName,
                lastName: data.lastName
            }
        })

        revalidatePath("/")
        return sendResponse(successMessages.USER_UPDATED)
    } catch (error) {
        console.log(error);
        return sendResponse(errorMessages.SERVER_ERROR)
    }
}

