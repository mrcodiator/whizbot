
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IResponse<T = any> {
    status: number;
    message: string;
    success: boolean;
    data?: T;
}

export async function sendResponse<T>(res: IResponse, data?: T): Promise<IResponse<T>> {
    return { status: res.status, message: res.message, success: res.success, data };
}
