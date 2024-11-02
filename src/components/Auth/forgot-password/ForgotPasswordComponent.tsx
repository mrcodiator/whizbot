'use client';
import React from 'react'
import SendEmailForm from './SendEmailForm'
import ConfirmEmailForm from './ConfirmEmailForm'
import SetNewPasswordForm from './SetNewPasswordForm'
import { useForgotPasswordContext } from '@/contexts/ForgotPasswordContext';

const ForgotPasswordComponent = () => {
    const { step } = useForgotPasswordContext();
    return (
        <div className=' h-full w-full flex flex-col gap-10'>
            {/* <div>
                <div className='mb-2 text-sm font-medium'>
                    Step {step + 1} out of 3.
                </div>

                <div className=' flex items-center gap-3'>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className={`p-1 w-full rounded-full  ${index === step ? "bg-primary" : "bg-primary/10"}`}></div>
                    ))}
                </div>
            </div> */}
            <div className=' my-auto'>
                {step === 0 ?
                    <SendEmailForm />
                    :
                    step === 1
                        ?
                        <ConfirmEmailForm />
                        :

                        <SetNewPasswordForm />
                }
            </div>


        </div>
    )
}

export default ForgotPasswordComponent
