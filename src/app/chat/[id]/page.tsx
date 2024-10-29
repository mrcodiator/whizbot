import { getChatbotByDomainId } from '@/actions/chat.actions';
import TestChatComponent from '@/components/TestChat/TestChatComponent';
import { IDomain } from '@/types/domain.types';
import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {
    const domain = await getChatbotByDomainId(params.id);

    return (
        <div className=' h-dvh w-full flex flex-col items-center justify-center'>
            <TestChatComponent domain={domain.data as IDomain} />
        </div>
    )
}

export default page
