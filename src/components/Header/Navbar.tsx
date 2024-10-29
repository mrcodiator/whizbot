'use client';
import React from 'react'
import { Button } from '../ui/button'
// import { ModeToggle } from '../ui/mode-toggle'
import ResponsiveNavbar from './ResponsiveNavbar'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
    const path = usePathname();
    const user = useUser();
    return (
        <div className='w-full'>
            <div className=' container flex items-center justify-between mx-auto px-5 py-3'>
                <h1 className=' text-2xl font-bold'>WhizBot</h1>
                <div className='  rounded-full hidden lg:flex p-1 items-center justify-center gap-2 border'>
                    <Link href={"/"}>
                        <Button variant={path === "/" ? "secondary" : "ghost"} className=' rounded-full'>
                            Home
                        </Button>
                    </Link>

                    <Link href={"/pricing"} >
                        <Button variant={path === "/pricing" ? "secondary" : "ghost"} className=' rounded-full '>
                            Pricing
                        </Button>
                    </Link>

                    <Link href={"/about"}>
                        <Button variant={path === "/about" ? "secondary" : "ghost"} className=' rounded-full'>
                            About
                        </Button>
                    </Link>

                    <Link href={"/contact"}>
                        <Button variant={"ghost"} className=' rounded-full'>
                            Contact
                        </Button>
                    </Link>
                </div>

                <div className='hidden lg:flex items-center gap-2'>
                    {/* <ModeToggle /> */}
                    {user.isSignedIn ?
                        <Link href={"/dashboard"}>
                            <Button variant={"outline"} className=' rounded-full'>
                                Dashboard <ArrowRight className='h-4 w-4 ml-2' />
                            </Button>
                        </Link>
                        :
                        <Link href={"/sign-up"}>
                            <Button variant={"outline"} className=' rounded-full'>
                                Sign Up
                            </Button>
                        </Link>
                    }


                </div>

                <div className=' flex lg:hidden items-center gap-2'>
                    {/* <ModeToggle /> */}
                    <ResponsiveNavbar />
                </div>
            </div>
        </div>
    )
}

export default Navbar
