// 'use server';

// import db from '@/db/db';
// import { errorMessages } from '@/helper/error-messages';
// import { sendResponse } from '@/helper/response';
// import { successMessages } from '@/helper/success-message';
// import { ICreateSubscription, IUpdateSubscription } from '@/types/subscription.types';
// import { revalidatePath } from 'next/cache';

// export async function checkSubscription() {
//     try {
//         const subscription = await db.subscription.findUnique();
//         return sendResponse(successMessages.SUCCESS, subscription)
//     } catch (error) {
//         console.log(error);
//         return sendResponse(errorMessages.SERVER_ERROR)
//     }
// }