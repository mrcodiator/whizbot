import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Header/Navbar'
import { Heading } from '@/components/ui/heading'
import React from 'react'

const NotFound = () => {
    return (
        <div className=' h-dvh w-full flex flex-col'>
            <Navbar />

            <div className=' flex-1 flex flex-col items-center justify-center p-5 text-center'>
                <Heading>Page Not Found</Heading>
                <p className=' text-muted-foreground mt-2'>
                    Either this page doesn&apos;t exist or you don&apos;t have permission to view it.
                </p>
            </div>

            <Footer />
        </div>
    )
}

export default NotFound;
