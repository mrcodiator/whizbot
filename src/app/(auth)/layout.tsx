import { getUser } from '@/actions/user.actions'
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
// import Navbar from '@/components/Header/Navbar'
import { redirect } from 'next/navigation'
import React from 'react'

const layout = async ({ children }: { children: React.ReactNode }) => {

    const user = await getUser();
    if (user) return redirect("/dashboard")

    return (
        <div className='h-dvh w-full flex flex-col'>
            {/* <Navbar /> */}
            <div className=' p-5'>
                <Link href={"/"} className=' text-2xl font-bold'>
                    <Button variant={"outline"}>
                        <ArrowLeft className='h-4 w-4 mr-2' /> Back
                    </Button>
                </Link>
            </div>
            <div className='flex-1 h-full w-full flex flex-col items-center justify-center'>
                <div className=' max-w-lg w-full'>
                    {children}
                </div>
            </div>


        </div>
    )
}

export default layout
