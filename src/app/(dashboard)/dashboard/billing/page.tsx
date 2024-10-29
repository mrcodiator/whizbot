'use server';
import { getUser } from '@/actions/user.actions';
import DashboardTopBar from '@/components/Dashboard/DashboardTopBar';
import BillingComponent from '@/components/Profile/BillingComponent'
import ManageSubscriptionComponent from '@/components/Profile/ManageSubscriptionComponent';
import db from '@/db/db';
import { IUser } from '@/types/auth.type';
import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const page = async () => {

    // get user
    const user = await getUser() as IUser

    // check subscription
    const subscription = await db.subscription.findFirst({
        where: {
            userId: user.id
        }
    })


    return (
        <div className=' container mx-auto max-w-[1200px] w-full p-5'>
            <DashboardTopBar
                title='Billing'
                action={
                    <Link href={"/dashboard"}>
                        <Button variant={"link"} >
                            <ArrowLeft className='h-4 w-4 mr-2' /> Back
                        </Button>
                    </Link>
                }
            />
            {!subscription || subscription.expiresAt < new Date() ?
                <div>
                    <BillingComponent />

                </div>

                :

                <div>
                    <ManageSubscriptionComponent data={subscription} />
                </div>}
        </div>
    )
}

export default page
