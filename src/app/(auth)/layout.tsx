import { getUser } from '@/actions/user.actions'
import Navbar from '@/components/Header/Navbar'
import { redirect } from 'next/navigation'
import React from 'react'

const layout = async ({ children }: { children: React.ReactNode }) => {

    const user = await getUser();
    if (user) return redirect("/dashboard")

    return (
        <div className='h-dvh w-full flex flex-col'>
            <Navbar />
            <div className='flex-1 h-full w-full flex flex-col items-center justify-center'>
                <div className=' max-w-lg w-full p-5'>
                    {children}
                </div>
            </div>


        </div>
    )
}

export default layout
