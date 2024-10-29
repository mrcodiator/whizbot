import ForgotPasswordComponent from '@/components/Auth/forgot-password/ForgotPasswordComponent'
import { ForgotPasswordProvider } from '@/contexts/ForgotPasswordContext'
import React from 'react'

const page = () => {
    return (
        <ForgotPasswordProvider>
            <ForgotPasswordComponent />
        </ForgotPasswordProvider>
    )
}

export default page
