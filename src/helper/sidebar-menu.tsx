import { CreditCard, Home, User } from "lucide-react";

export const menuItems = [
    {
        href: '/dashboard',
        label: 'Projects',
        icon: <Home className='h-4 w-4 mr-2' />
    },
    {
        href: '/dashboard/profile',
        label: 'Profile',
        icon: <User className='h-4 w-4 mr-2' />
    },
    {
        href: '/dashboard/billing',
        label: 'Billing',
        icon: <CreditCard className='h-4 w-4 mr-2' />
    }
];