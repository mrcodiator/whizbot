'use client';
import { IForgotPassword } from '@/types/auth.type';
import React, { createContext, useContext, useState } from 'react';

export const ForgotPasswordContext = createContext<IForgotPassword | undefined>(undefined)

export const ForgotPasswordProvider = ({ children }: { children: React.ReactNode }) => {
    const [step, setStep] = useState(0);
    return (
        <ForgotPasswordContext.Provider value={{ step, setStep }}>
            {children}
        </ForgotPasswordContext.Provider>
    )
}

export const useForgotPasswordContext = () => {
    const context = useContext(ForgotPasswordContext);
    if (context === undefined) {
        throw new Error('ForgotPasswordContext must be used within a ForgotPasswordProvider');
    }
    return context;
}