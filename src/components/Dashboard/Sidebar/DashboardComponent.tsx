import { getUser } from '@/actions/user.actions'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import React from 'react'
import DashboardHeader from './DashboardHeader';
import { IUser } from '@/types/auth.type';
import DashboardSidebar from './DashboardSidebar';
import { Heading } from '@/components/ui/heading';

const DashboardComponent = async ({ children }: { children: React.ReactNode }) => {
    const user = await getUser() as IUser;

    return (
        <div className='h-full w-full flex'>
            <div className='hidden lg:flex flex-col h-full max-w-xs w-full border-r'>
                <div className='p-3 border-b flex items-center justify-between gap-2'>
                    <Heading variant="h4">WhizBot</Heading>
                </div>
                <DashboardSidebar />
            </div>
            <div className=' flex-1 flex flex-col overflow-hidden'>
                <DashboardHeader user={user} />
                <ScrollArea className=' flex-1 flex flex-col'>
                    <div className=' flex-1'>
                        {children}
                        <ScrollBar />
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}

export default DashboardComponent;
