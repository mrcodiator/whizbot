'use client';
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { TextAlignLeftIcon } from '@radix-ui/react-icons'
import DashboardSidebar from './DashboardSidebar'
import { Separator } from '@/components/ui/separator'


const ResponsiveSidebar = () => {
    const [open, setOpen] = React.useState(false)
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button className=' flex lg:hidden' variant={"outline"} size={"icon"}>
                    <TextAlignLeftIcon className='h-5 w-5' />
                </Button>
            </SheetTrigger>
            <SheetContent className=' text-left'>
                <SheetHeader className=' text-left'>
                    <SheetTitle>Whizbot</SheetTitle>
                    <SheetDescription className=' text-primary'>
                        Manage Projects and Billings.
                    </SheetDescription>

                    <Separator />

                    <DashboardSidebar setOpen={setOpen} />
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}

export default ResponsiveSidebar
