import React from 'react'
import { Heading } from '../ui/heading'
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
                <div className="lg:col-span-2 bg-secondary flex flex-col rounded-xl border overflow-hidden">
                    <div className="p-5">
                        <Heading variant="h4">Get Started</Heading>
                        <p className="text-muted-foreground mt-2">
                            Follow these steps to begin leveraging WhizBot:
                        </p>
                    </div>
                    <div className="p-5 flex flex-col gap-4 text-muted-foreground">
                        <div className="rounded-lg flex items-center gap-6">
                            <div>
                                <div className="rounded-lg flex items-center justify-center h-8 w-8 border border-primary text-lg font-semibold">
                                    1
                                </div>
                            </div>
                            <div>
                                <p className=' text-xl'>
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
                                <p className=' text-xl'>
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
                                <p className=' text-xl'>
                                    Seamlessly integrate the chatbot into your website&apos;s body tag.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="lg:col-span-3 bg-secondary flex flex-col rounded-xl border overflow-hidden">
                    <div className="p-5">
                        <Heading variant="h4">Domain Creation</Heading>
                        <p className="text-muted-foreground mt-2">
                            Set up your domain effortlessly in the WhizBot dashboard.
                        </p>
                    </div>
                    <div className="mb-0 mt-auto pl-10 pt-10">
                        <Image
                            src="/images/ui/work-1.png"
                            alt="WhizBot Domain Setup"
                            sizes="100vh"
                            width={0}
                            height={0}
                            className="w-full h-auto rounded-lg drop-shadow-xl"
                        />
                    </div>
                </div>

                {/* Step 3 */}
                <div className="lg:col-span-3 bg-secondary flex flex-col rounded-xl border overflow-hidden">
                    <div className="p-5">
                        <Heading variant="h4">Chatbot Training</Heading>
                        <p className="text-muted-foreground mt-2">
                            Equip your chatbot with essential data for efficient interactions.
                        </p>
                    </div>
                    <div className="mb-0 mt-auto pl-10 pt-10">
                        <Image
                            src="/images/ui/work-2.png"
                            alt="WhizBot Training"
                            sizes="100vh"
                            width={0}
                            height={0}
                            className="w-full h-auto rounded-lg drop-shadow-xl"
                        />
                    </div>
                </div>

                {/* Step 4 */}
                <div className="lg:col-span-2 bg-secondary flex flex-col rounded-xl border overflow-hidden">
                    <div className="p-5">
                        <Heading variant="h4">Integration Made Easy</Heading>
                        <p className="text-muted-foreground mt-2">
                            Effortlessly embed your chatbot within your website&apos;s structure.
                        </p>
                    </div>
                    <div className="mb-0 mt-auto pl-10 pt-10 flex-1">
                        <Image
                            src="/images/ui/work-3.png"
                            alt="WhizBot Integration"
                            sizes="100vh"
                            width={0}
                            height={0}
                            className="w-full h-full rounded-lg object-cover object-right-top drop-shadow-xl"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WorkShowCaseSection
