'use client'
import React from 'react'
import SignUpForm from './SignUpForm'
import { useAuthContext } from '@/contexts/AuthContext'
import VerifyEmailForm from './VerifyEmailForm';
import OnboardingForm from './OnboardingForm';

const SignUpComponent = () => {
    const { step } = useAuthContext();
    return (
        <div className=' h-full w-full flex flex-col gap-10'>

            <div>
                <div className='mb-2 text-sm font-medium'>
                    Step {step + 1} out of 3.
                </div>

                <div className=' flex items-center gap-2'>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className={`p-1 w-full rounded-full  ${index === step ? "bg-primary" : "bg-primary/10"}`}></div>
                    ))}
                </div>
            </div>

            <div className=' my-auto'>
                {step === 0 ?
                    <OnboardingForm />
                    :
                    step === 1 ?
                        <SignUpForm />
                        :
                        <VerifyEmailForm />
                }
            </div>


        </div>
    )
}

export default SignUpComponent
