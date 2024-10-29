import { Button } from '@/components/ui/button'
import { Bell, Home } from 'lucide-react'
import React from 'react'
import UserMenu from './UserMenu'
import { IUser } from '@/types/auth.type'
import ResponsiveSidebar from './ResponsiveSidebar'
// import { ModeToggle } from '@/components/ui/mode-toggle'
import Link from 'next/link'

const DashboardHeader = ({ user }: { user: IUser }) => {
    return (
        <div className='w-full p-3 border-b flex items-center h-fit '>
            <ResponsiveSidebar />
            <div className=' ml-auto mr-0 flex items-center gap-2'>

                <Link href={"/"}>
                    <Button variant={"ghost"} size={"icon"}>
                        <Home className='h-4 w-4' />
                    </Button>
                </Link>

                {/* <ModeToggle /> */}
                <Button variant={"ghost"} size={"icon"}>
                    <Bell className='h-4 w-4' />
                </Button>
                <UserMenu user={user} />
            </div>
        </div>
    )
}

export default DashboardHeader
