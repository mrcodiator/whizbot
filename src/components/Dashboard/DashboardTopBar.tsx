import React from 'react'
import { Heading } from '../ui/heading'

const DashboardTopBar = ({ title, action }: { title: string, action?: React.ReactNode }) => {
    return (
        <div className=' w-full p-3 mx-auto border-b mb-5 flex items-center gap-2 justify-between'>
            <Heading variant="h4">{title}</Heading>
            {action}
        </div>
    )
}

export default DashboardTopBar;
