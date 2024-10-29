import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Heading } from '../ui/heading'

const HeroBentoGrid = () => {
    return (
        <div className='  w-full h-full grid grid-cols-1 md:grid-cols-2 gap-5'>
            <Card className=' col-span-2 bg-gradient-to-tr from-secondary to-background border-t overflow-hidden'>
                <CardHeader>
                    <Heading variant={"h3"} className=' font-bold'>
                        Easy To Integrate
                    </Heading>
                    <CardDescription>
                        Whizbot is designed to be easy to integrate.
                    </CardDescription>
                </CardHeader>
                <CardContent className=' max-h-[300px] overflow-hidden' >
                    <Image
                        src={"/images/ui/Chatbot.png"}
                        sizes='100vh'
                        height={0}
                        width={0}
                        alt='Chatbot'
                        className='h-[500px] w-auto mx-auto object-fill'
                    />
                </CardContent>
            </Card>

            <Card className=' bg-black text-white'>
                <CardHeader>
                    <Heading variant={"h2"} className=' text-4xl font-bold'>
                        Over 300+ Users
                    </Heading>
                </CardHeader>
            </Card>

            <Card className=' bg-secondary'>
                <CardHeader>
                    <CardTitle>
                        Fast To Reply
                    </CardTitle>
                    <CardDescription>
                        Whizbot is designed to be fast.
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    )
}

export default HeroBentoGrid
