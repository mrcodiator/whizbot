
export interface IResponse<T = unknown> {
    status: number;
    message: string;
    success: boolean;
    data?: T;
}

export async function sendResponse<T>(res: IResponse, data?: T): Promise<IResponse<T>> {
    return { status: res.status, message: res.message, success: res.success, data };
}
