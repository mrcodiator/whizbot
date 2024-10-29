import { getDomain } from '@/actions/domain.actions'
import SingleDomainComponent from '@/components/Dashboard/SingleDomain/SingleDomainComponent'
import { IDomain } from '@/types/domain.types';
import React from 'react'

const page = async ({ params: { id } }: { params: { id: string } }) => {
    const domain = await getDomain(id);
    return (
        <SingleDomainComponent domain={domain.data as IDomain} />
    )
}

export default page
