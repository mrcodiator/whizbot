import React from 'react'
import UpdateDomainForm from '../Domains/Edit/UpdateDomainForm'
import { IDomain } from '@/types/domain.types'
import { Button } from "@/components/ui/button"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import DashboardTopBar from '../DashboardTopBar'
import ChatbotIntegrationComponent from './ChatbotIntegrationComponent'
import TrainChatbotForm from './TrainChatbotForm'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import DeleteDomainForm from './DeleteDomainForm'
import TestChatComponent from '@/components/TestChat/TestChatComponent'

const SingleDomainComponent = ({ domain }: { domain: IDomain }) => {

    return (
        <div className='container p-5 pb-20 max-w-[1200px] mx-auto flex flex-col'>
            <DashboardTopBar title={domain.name} action={
                <Link href={"/dashboard"}>
                    <Button variant={"link"} >
                        <ArrowLeft className='h-4 w-4 mr-2' /> Back
                    </Button>
                </Link>
            }
            />

            <Tabs defaultValue="integration" className="mx-auto max-w-3xl w-full ">
                <TabsList className="grid grid-cols-4 mb-10 w-fit mx-auto">
                    <TabsTrigger value="integration">Integration</TabsTrigger>
                    <TabsTrigger value="train">Training</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                    <TabsTrigger value="chat">Chat</TabsTrigger>
                </TabsList>

                <TabsContent value="integration" >
                    <ChatbotIntegrationComponent id={domain.id as string} />
                </TabsContent>
                <TabsContent value="train">
                    <TrainChatbotForm trainData={domain.Chatbot.trainData || ""} chatbotId={domain.Chatbot.id as string} />
                </TabsContent>
                <TabsContent value="settings" className=' flex flex-col gap-5'>
                    <UpdateDomainForm domain={domain} />
                    <DeleteDomainForm id={domain.id} />
                </TabsContent>

                <TabsContent value="chat">
                    <div className='  h-[600px] border rounded-xl overflow-hidden'>
                        <TestChatComponent domain={domain} />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default SingleDomainComponent
