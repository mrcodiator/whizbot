import SignUpComponent from '@/components/Auth/SignUpComponent'
import { AuthContextProvider } from '@/contexts/AuthContext'
import React from 'react'

const page = () => {
    return (
        <AuthContextProvider>
            <SignUpComponent />
        </AuthContextProvider>
    )
}

export default page
