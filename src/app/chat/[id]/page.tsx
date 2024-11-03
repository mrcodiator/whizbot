import { getChatbotByDomainId } from '@/actions/chat.actions';
import { IDomain } from '@/types/domain.types';
import dynamic from 'next/dynamic';
import React from 'react'

const TestChatComponent = dynamic(() => import('@/components/TestChat/TestChatComponent'), { ssr: false });

const page = async ({ params }: { params: { id: string } }) => {
    const domain = await getChatbotByDomainId(params.id);

    return (
        <div className=' h-dvh w-full flex flex-col items-center justify-center'>
            <TestChatComponent domain={domain.data as IDomain} />
        </div>
    )
}

export default page
