import { IResponse } from "@/types/api.types";

export async function sendResponse<T>(res: IResponse, data?: T): Promise<IResponse<T>> {
    return { status: res.status, message: res.message, success: res.success, data };
}
