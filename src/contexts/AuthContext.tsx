'use client';
import { AuthContextType } from '@/types/auth.type';
import React, { createContext, useState } from 'react';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [step, setStep] = useState(0);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    return (
        <AuthContext.Provider value={{ step, setStep, data, setData }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = React.useContext(AuthContext);

    if (!context) {
        throw new Error('useAuthContext must be used within an AuthContextProvider');
    }

    return context;
};
