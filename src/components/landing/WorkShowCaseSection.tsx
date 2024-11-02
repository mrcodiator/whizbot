import React from 'react'
import { Heading } from '../ui/heading'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'

const WorkShowCaseSection = () => {
    return (
        <div className="container py-20 px-5 mx-auto">
            <div className="max-w-2xl mx-auto text-center">
                <Heading variant="h2">
                    Discover WhizBot&apos;s Capabilities
                </Heading>
                <p className="text-muted-foreground mt-4">
                    WhizBot is your intelligent partner for automating customer interactions and enhancing business efficiency. Setup is seamless and integration is effortless.
                </p>
            </div>

            <div className="mt-20 max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
                {/* Step 1 */}
                <Card className="lg:col-span-2 bg-secondary border">
                    <CardHeader>
                        <CardTitle>Get Started</CardTitle>
                        <CardDescription>
                            Follow these steps to begin leveraging WhizBot:
                        </CardDescription>
                    </CardHeader>
                    <CardContent>

                        <div className=" py-10 flex flex-col gap-4">
                            <div className="rounded-lg flex items-center gap-6">
                                <div>
                                    <div className="rounded-lg flex items-center justify-center h-8 w-8 border border-primary text-lg font-semibold">
                                        1
                                    </div>
                                </div>
                                <div>
                                    <p className=''>
                                        Initiate by setting up a domain in your WhizBot dashboard.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-lg flex items-center gap-4">
                                <div>
                                    <div className="rounded-lg flex items-center justify-center h-8 w-8 border border-primary text-lg font-semibold">
                                        2
                                    </div>
                                </div>
                                <div>
                                    <p className=''>
                                        Provide data to train your chatbot for optimal performance.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-lg flex items-center gap-4">
                                <div>
                                    <div className="rounded-lg flex items-center justify-center h-8 w-8 border border-primary text-lg font-semibold">
                                        3
                                    </div>
                                </div>
                                <div>
                                    <p className=''>
                                        Seamlessly integrate the chatbot into your website&apos;s body tag.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Step 2 */}
                <Card className="lg:col-span-3 border overflow-hidden bg-secondary">
                    <CardHeader>
                        <CardTitle>Domain Creation</CardTitle>
                        <CardDescription>
                            Set up your domain effortlessly in the WhizBot dashboard.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className=' p-0'>

                        <div className="mb-0 mt-auto pl-10 pt-10">
                            <Image
                                src="/images/ui/work-1.png"
                                alt="WhizBot Domain Setup"
                                sizes="100vh"
                                width={0}
                                height={0}
                                className="w-full h-auto rounded-tl-lg drop-shadow-xl"
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Step 3 */}
                <Card className="lg:col-span-3 border overflow-hidden bg-secondary">
                    <CardHeader>
                        <CardTitle>Chatbot Training</CardTitle>
                        <CardDescription>
                            Equip your chatbot with essential data for efficient interactions.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className=' p-0'>

                        <div className="mb-0 mt-auto pl-10 pt-10">
                            <Image
                                src="/images/ui/work-2.png"
                                alt="WhizBot Training"
                                sizes="100vh"
                                width={0}
                                height={0}
                                className="w-full h-auto rounded-tl-lg drop-shadow-xl"
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Step 4 */}
                <Card className="lg:col-span-2 border overflow-hidden flex flex-col bg-secondary">
                    <CardHeader>
                        <CardTitle>Integration Made Easy</CardTitle>
                        <CardDescription>
                            Effortlessly embed your chatbot within your website&apos;s structure.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className=' mb-0 mt-auto p-0 pl-10 pt-10 flex-1  '>

                        <Image
                            src="/images/ui/work-3.png"
                            alt="WhizBot Integration"
                            sizes="100vh"
                            width={0}
                            height={0}
                            className="w-full h-full rounded-tl-lg object-cover object-center-top drop-shadow-xl"
                        />
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}

export default WorkShowCaseSection

