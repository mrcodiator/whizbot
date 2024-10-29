'use client';
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { SignOutButton } from '@clerk/nextjs'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { menuItems } from '@/helper/sidebar-menu';



const DashboardSidebar = ({ setOpen }: { setOpen?: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const pathname = usePathname(); // Get the current path
    const router = useRouter();

    return (
        <div className='flex flex-col gap-2 lg:p-3'>
            <div className='text-muted-foreground text-sm'>
                Menu
            </div>

            {menuItems.map((item) => (
                <Link href={item.href} key={item.href} className='w-full'>
                    <Button
                        onClick={() => setOpen && setOpen(false)}
                        variant={pathname === item.href ? "secondary" : "ghost"}
                        className='w-full justify-start'>
                        {item.icon}
                        {item.label}
                    </Button>
                </Link>
            ))}

            <Separator />

            <SignOutButton signOutCallback={() => router.push("/")}>
                <Button variant={"ghost"} className='w-full justify-start'>
                    <LogOut className='h-4 w-4 mr-2' />
                    Sign Out
                </Button>
            </SignOutButton>

        </div>
    )
}

export default DashboardSidebar;
