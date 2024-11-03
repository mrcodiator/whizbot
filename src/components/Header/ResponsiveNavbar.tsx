import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { Separator } from '../ui/separator'

const ResponsiveNavbar = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button size={"icon"} variant={"outline"} aria-label='menu'>
                        <Menu className='h-4 w-4' />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>WhizBot</SheetTitle>
                        <SheetDescription>
                            Manage your customers with Whizbot.
                        </SheetDescription>
                    </SheetHeader>

                    <div className=' flex flex-col gap-2 py-2'>
                        <Link href={"/"}>
                            <Button variant={"ghost"} className=' w-full'>
                                Home
                            </Button>
                        </Link>

                        <Link href={"/pricing"} >
                            <Button variant={"ghost"} className='w-full'>
                                Pricing
                            </Button>
                        </Link>

                        <Link href={"/about"}>
                            <Button variant={"ghost"} className=' w-full'>
                                About
                            </Button>
                        </Link>

                        <Link href={"/contact"}>
                            <Button variant={"ghost"} className=' w-full'>
                                Contact
                            </Button>
                        </Link>

                        <Separator className=' mb-5' />

                        <Link className=' w-full' href={"/sign-in"}>
                            <Button className=' w-full rounded-full' variant={"outline"}>
                                Sign In
                            </Button>
                        </Link>
                        <Link className=' w-full ' href={"/sign-in"}>
                            <Button className='rounded-full w-full'>
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default ResponsiveNavbar
