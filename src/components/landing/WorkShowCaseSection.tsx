import React from 'react';
import { Heading } from '../ui/heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';

const workImages = {
    domainSetup: {
        src: '/images/ui/work-1.png',
        alt: 'WhizBot Domain Setup Interface - Dashboard view showing domain configuration options',
        aspectRatio: '16/9',
    },
    training: {
        src: '/images/ui/work-2.png',
        alt: 'WhizBot Training Interface - AI training dashboard with data input options',
        aspectRatio: '16/9',
    },
    integration: {
        src: '/images/ui/work-3.png',
        alt: 'WhizBot Integration Guide - Code snippet showing website integration steps',
        aspectRatio: '4/3',
    },
};

const steps = [
    {
        number: 1,
        description: 'Initiate by setting up a domain in your WhizBot dashboard.',
    },
    {
        number: 2,
        description: 'Provide data to train your chatbot for optimal performance.',
    },
    {
        number: 3,
        description: "Seamlessly integrate the chatbot into your website's body tag.",
    },
];

const WorkShowCaseSection = () => {
    return (
        <section className="container py-20 px-5 mx-auto" aria-labelledby="capabilities-title">
            <div className="max-w-2xl mx-auto text-center">
                <Heading variant="h2" id="capabilities-title">
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
                        <CardDescription className="text-primary">
                            Follow these steps to begin leveraging WhizBot:
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="py-10 flex flex-col gap-4">
                            {steps.map((step) => (
                                <div key={step.number} className="rounded-lg flex items-center gap-6">
                                    <div className="rounded-lg flex items-center justify-center h-8 w-8 border border-primary text-lg font-semibold">
                                        {step.number}
                                    </div>
                                    <p className="flex-1">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Step 2 */}
                <Card className="lg:col-span-3 border overflow-hidden bg-secondary">
                    <CardHeader>
                        <CardTitle>Domain Creation</CardTitle>
                        <CardDescription className="text-primary">
                            Set up your domain effortlessly in the WhizBot dashboard.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="relative mb-0 mt-auto pl-10 pt-10">
                            <div className="aspect-[16/9] relative">
                                <Image
                                    src={workImages.domainSetup.src}
                                    alt={workImages.domainSetup.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="rounded-tl-lg drop-shadow-xl object-cover"
                                    quality={90}
                                    priority
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Step 3 */}
                <Card className="lg:col-span-3 border overflow-hidden bg-secondary">
                    <CardHeader>
                        <CardTitle>Chatbot Training</CardTitle>
                        <CardDescription className="text-primary">
                            Equip your chatbot with essential data for efficient interactions.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="relative mb-0 mt-auto pl-10 pt-10">
                            <div className="aspect-[16/9] relative">
                                <Image
                                    src={workImages.training.src}
                                    alt={workImages.training.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="rounded-tl-lg drop-shadow-xl object-cover"
                                    quality={90}
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Step 4 */}
                <Card className="lg:col-span-2 border overflow-hidden flex flex-col bg-secondary">
                    <CardHeader>
                        <CardTitle>Integration Made Easy</CardTitle>
                        <CardDescription className="text-primary">
                            Effortlessly embed your chatbot within your website&apos;s structure.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 pl-10 pt-10 flex-1">
                        <div className="relative h-full">
                            <div className="aspect-[4/3] relative h-full">
                                <Image
                                    src={workImages.integration.src}
                                    alt={workImages.integration.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="rounded-tl-lg drop-shadow-xl object-cover"
                                    quality={90}
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default WorkShowCaseSection;