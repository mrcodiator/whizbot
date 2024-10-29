'use client';
import React from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { IUser } from '@/types/auth.type'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SignOutButton } from '@clerk/nextjs'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const UserMenu = ({ user }: { user: IUser }) => {
    const router = useRouter()
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className='h-8 w-8 cursor-pointer'>
                        <AvatarFallback className='bg-primary text-muted capitalize'>{user.firstName[0]}</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-[10rem]' >
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href={"/dashboard/profile"}>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                    </Link>
                    <Link href={"/dashboard/billing"}>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator />
                    <SignOutButton signOutCallback={() => router.push("/")}>
                        <DropdownMenuItem>Sign out</DropdownMenuItem>
                    </SignOutButton>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default UserMenu
