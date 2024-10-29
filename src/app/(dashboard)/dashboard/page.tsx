import { getAllDomains } from '@/actions/domain.actions';
import DashboardTopBar from '@/components/Dashboard/DashboardTopBar';
import CreateDomain from '@/components/Dashboard/Domains/Create/CreateDomain';
import DisplayAllDomains from '@/components/Dashboard/Domains/DisplayAllDomains';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Heading } from '@/components/ui/heading';
import { IDomain } from '@/types/domain.types';
import { Database, Sticker } from 'lucide-react';
import React from 'react'

const page = async () => {
    const res = await getAllDomains();

    return (
        <div className='container p-5 max-w-[1200px] mx-auto'>
            <DashboardTopBar title={"All Domains"} action={<CreateDomain />} />
            {!res.success ?
                <div className=' flex flex-col items-center justify-center gap-2 py-20 px-5 border border-dashed rounded-xl'>
                    <Avatar className='h-16 w-16'>
                        <AvatarFallback>
                            <Sticker className='h-8 w-8' />
                        </AvatarFallback>
                    </Avatar>
                    <Heading variant="h5">Server Error</Heading>
                </div>
                :

                res.data.length === 0 ?
                    <div className=' flex flex-col items-center justify-center gap-2 py-20 px-5 border border-dashed rounded-xl'>
                        <Avatar className=' h-16 w-16'>
                            <AvatarFallback>
                                <Database className='h-8 w-8' />
                            </AvatarFallback>
                        </Avatar>
                        <Heading variant="h5">No Data Found</Heading>
                    </div>
                    :
                    <DisplayAllDomains domains={res.data as IDomain[]} />
            }


        </div>
    )

}

export default page
