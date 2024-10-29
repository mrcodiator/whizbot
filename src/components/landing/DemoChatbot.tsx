import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Button } from '../ui/button'
import { AlignLeft, PlusCircle, Send, X } from 'lucide-react'
import { Heading } from '../ui/heading'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'

const DemoChatbot = () => {
    return (
        <Card className='lg:mr-0 ml-auto max-w-[450px] h-[600px] shadow-md w-full overflow-hidden  flex flex-col '>
            <CardHeader className=' bg-slate-900 gap-2 text-white flex-row items-center px-4 py-3 border-b border-slate-200'>
                <Button size={"icon"} variant={"ghost"}>
                    <AlignLeft className=' h-4 w-4' />
                </Button>

                <Heading variant={"h4"} className=' font-bold text-white' >
                    Demo Chatbot
                </Heading>

                <Button size={"icon"} variant={"ghost"} className=' mr-0 ml-auto'>
                    <X className=' h-4 w-4' />
                </Button>
            </CardHeader>
            <ScrollArea className=' flex-1 bg-white flex flex-col'>
                <CardContent className=' flex-1   text-slate-900 flex flex-col p-5 gap-5 overflow-y-auto'>
                    <div className=' p-3 rounded-lg border-t text-white  max-w-[250px] w-fit bg-slate-900'>
                        <div className=' text-sm'>
                            Hi there! I&apos;m a chatbot. How can I help you today?
                        </div>
                        <span className=' text-slate-400 text-xs mt-2'>12:30PM</span>
                    </div>

                    <div className=' p-3 rounded-lg bg-slate-100 border-slate-200  text-slate-900 max-w-[250px] w-fit mr-0 ml-auto'>
                        <div className=' text-sm'>
                            Hey, I want to learn more about features.
                        </div>
                        <span className=' text-slate-600 text-xs mt-2'>12:30PM</span>
                    </div>

                    <div className=' p-3 rounded-lg border-t text-white  max-w-[250px] w-fit bg-slate-900'>
                        <div className=' text-sm'>
                            Ok, Sir the features are listed below:
                            <ul className='list-disc list-inside mt-2'>
                                <li>We provide ui services.</li>
                                <li>24/7 support.</li>
                                <li>Live Preview.</li>
                                <li>3 Revisions</li>
                                <li>Project Personalization.</li>
                            </ul>
                            And more would you like to schedule a meeting?
                        </div>
                        <span className=' text-slate-400 text-xs mt-2'>12:30PM</span>
                    </div>
                    <ScrollBar />
                </CardContent>
            </ScrollArea>

            <CardFooter className=' gap-2 px-4 py-3 border-t border-slate-200 bg-white text-slate-900'>
                <Button variant={"ghost"} size={"icon"} className='bg-transparent hover:bg-slate-100 hover:text-slate-800'>
                    <PlusCircle className='h-4 w-4' />
                </Button>
                <input
                    className=' border-none outline-none flex-1 h-full bg-transparent text-sm '
                    placeholder='Type a message...'
                    type="text" name="" id="" />
                <Button size={"icon"} className=' bg-slate-950 hover:bg-slate-900 text-white'>
                    <Send className='h-4 w-4' />
                </Button>
            </CardFooter>
        </Card>
    )
}

export default DemoChatbot
