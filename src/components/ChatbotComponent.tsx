'use client'
import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Send, MessageCircle } from "lucide-react"

export default function ChatbotComponent() {
    return (
        <div className='fixed bottom-4 right-4 sm:bottom-7 sm:right-7'>
            <Popover>
                <PopoverTrigger asChild>
                    <Button size="icon" className='h-12 w-12 sm:h-14 sm:w-14 rounded-full'>
                        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent align='end' className='p-0 w-[90vw] sm:w-[400px] max-w-[400px]'>
                    <Card className='h-[80vh] sm:h-[600px] flex flex-col rounded-lg overflow-hidden'>
                        <CardHeader className='bg-primary text-primary-foreground'>
                            <CardTitle>Welcome! ✊</CardTitle>
                            <CardDescription className='text-primary-foreground/70'>We are here to help!</CardDescription>
                        </CardHeader>

                        <CardContent className='flex-1 py-6 bg-secondary overflow-y-auto'>
                            <div className='flex flex-col gap-5 text-sm'>
                                <div className='bg-primary text-primary-foreground p-3 rounded-lg w-fit max-w-[80%]'>
                                    Hi! How can I help you?
                                </div>

                                <div className='bg-background text-foreground p-3 rounded-lg w-fit max-w-[80%] ml-auto'>
                                    Hi! I need your help
                                </div>
                            </div>
                        </CardContent>

                        <CardFooter className='flex items-center gap-2 py-3 px-3'>
                            <Input className='flex-1' placeholder='Type here...' />
                            <Button size="icon">
                                <Send className="h-4 w-4" />
                            </Button>
                        </CardFooter>
                    </Card>
                </PopoverContent>
            </Popover>
        </div>
    )
}
