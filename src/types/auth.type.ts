import { ISubscription } from "./subscription.type";

export interface AuthContextType {
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    data: {
        firstName: string,
        lastName: string,
        email: string
    },
    setData: React.Dispatch<React.SetStateAction<{
        firstName: string,
        lastName: string,
        email: string
    }>>
}

export interface IForgotPassword {
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
}


export interface IRegisterUser {
    firstName: string,
    lastName: string,
    email: string,
    clerkId: string,
}

export interface IUpdateUser {
    firstName: string,
    lastName: string,
}

export interface IUser {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    clerkId: string,
    createdAt: Date,
    updatedAt: Date
    Subscription?: ISubscription
}