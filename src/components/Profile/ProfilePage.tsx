import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import DashboardTopBar from '../Dashboard/DashboardTopBar'
import EditProfileForm from '@/components/Profile/EditProfileForm'
import { Button } from '@/components/ui/button';
import { IUser } from '@/types/auth.type'
import { getUser } from '@/actions/user.actions'
// import ChangeAppearanceForm from './ChangeAppearanceForm'

const ProfilePage = async () => {
    const user = await getUser() as IUser;

    return (
        <div className='container p-5 max-w-[1200px] mx-auto flex flex-col gap-5'>
            <DashboardTopBar
                title={"Profile"}
                action={
                    <Link href={"/dashboard"}>
                        <Button variant={"link"} >
                            <ArrowLeft className='h-4 w-4 mr-2' /> Back
                        </Button>
                    </Link>
                }
            />
            <EditProfileForm user={user} />
            {/* <ChangeAppearanceForm /> */}
        </div >
    )
}

export default ProfilePage
