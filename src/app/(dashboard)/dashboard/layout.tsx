import DashboardComponent from '@/components/Dashboard/Sidebar/DashboardComponent'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='h-dvh w-full'>
            <DashboardComponent>
                {children}
            </DashboardComponent>
        </div>
    )
}

export default layout
