'use server';
import db from "@/db/db";
import { errorMessages } from "@/helper/error-messages";
import { sendResponse } from "@/helper/response";
import { getUser } from "./user.actions";
import { successMessages } from "@/helper/success-message";
import { ICreateDomain, IUpdateDomain } from "@/types/domain.types";
import { revalidatePath } from "next/cache";

export async function getAllDomains() {
    try {
        const user = await getUser();


        if (!user || !user.id) {
            return sendResponse(errorMessages.BAD_REQUEST, null)
        }

        const domains = await db.domain.findMany({
            where: {
                userId: user.id
            }
        });



        return sendResponse(successMessages.SUCCESS, domains)

    } catch (error) {
        console.log(error);
        return sendResponse(errorMessages.SERVER_ERROR)
    }
}


export async function createDomain(data: ICreateDomain) {
    try {
        const user = await getUser();
        if (!user || !user.id) {
            return sendResponse(errorMessages.BAD_REQUEST, null)
        }

        // check url
        const existingDomain = await db.domain.findUnique({
            where: {
                url: data.url,
            }
        })

        if (existingDomain) {
            return sendResponse(errorMessages.DOMAIN_ALREADY_EXISTS, null)
        }

        // check users domain
        const userDomains = await db.domain.findMany({
            where: {
                userId: user.id
            }
        })

        if (userDomains.length >= 2 && (!user.Subscription || user.Subscription?.expiresAt && user.Subscription.expiresAt >= new Date())) {
            // check subs
            return sendResponse(errorMessages.DOMAIN_LIMIT_REACHED, null)
        }

        const domain = await db.domain.create({
            data: {
                name: data.name,
                url: data.url,
                logo: data.logo,
                email: user.email,
                userId: user.id
            }
        })

        await db.chatbot.create({
            data: {
                domainId: domain.id
            }
        })

        revalidatePath("/")
        return sendResponse(successMessages.DOMAIN_CREATED, domain.id)
    } catch (error) {
        console.log(error);
        return sendResponse(errorMessages.SERVER_ERROR)
    }
}


export async function getDomain(domainId: string) {
    try {
        const user = await getUser();
        if (!user || !user.id) {
            return sendResponse(errorMessages.BAD_REQUEST, null)
        }

        const domain = await db.domain.findUnique({
            where: {
                id: domainId,
                userId: user.id
            },
            include: {
                Chatbot: true
            }
        })

        return sendResponse(successMessages.SUCCESS, domain)

    } catch (error) {
        console.log(error);
        return sendResponse(errorMessages.SERVER_ERROR)
    }
}


export async function deleteDomain(domainId: string) {
    try {
        const user = await getUser();
        if (!user || !user.id) {
            return sendResponse(errorMessages.BAD_REQUEST, null)
        }

        await db.domain.delete({
            where: {
                id: domainId,
                userId: user.id
            }
        })

        revalidatePath("/")
        return sendResponse(successMessages.DOMAIN_DELETED)
    } catch (error) {
        console.log(error);
        return sendResponse(errorMessages.SERVER_ERROR)
    }
}

export const updateDomain = async (domainId: string, data: IUpdateDomain) => {
    try {

        const user = await getUser();
        if (!user || !user.id) {
            return sendResponse(errorMessages.BAD_REQUEST, null)
        }

        // check url
        const domain = await db.domain.findUnique({
            where: {
                url: data.url,
            }
        })

        if (domain && domain.id !== domainId) {
            return sendResponse(errorMessages.DOMAIN_ALREADY_EXISTS, null)
        }

        await db.domain.update({
            where: {
                id: domainId,
                userId: user.id
            },
            data: {
                name: data.name,
                url: data.url,
                logo: data.logo,
                email: user.email
            }
        })

        revalidatePath("/")

        return sendResponse(successMessages.DOMAIN_UPDATED)
    } catch (error) {
        console.log(error);
        return sendResponse(errorMessages.SERVER_ERROR)
    }
}
