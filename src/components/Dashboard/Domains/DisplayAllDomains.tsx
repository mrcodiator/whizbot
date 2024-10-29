import { IDomain } from '@/types/domain.types'
import React from 'react'
import { DisplayDomainTable } from './DisplayDomainTable'

const DisplayAllDomains = ({ domains }: { domains: IDomain[] }) => {
    return (
        <div className='flex flex-col gap-5 mt-5'>
            <DisplayDomainTable domains={domains} />
        </div>
    )
}

export default DisplayAllDomains
