'use client';
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { CheckCircle, Info, Zap } from 'lucide-react'
import { Heading } from '../ui/heading'
import { planData } from '@/helper/plan-data'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { loadStripe } from '@stripe/stripe-js';
import { toast } from '@/hooks/use-toast';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const BillingComponent = () => {

    const handleCheckout = async (priceId: string) => {
        const stripe = await stripePromise;

        const res = await fetch('/api/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                priceId,
            }),
        });

        const data = await res.json();

        if (data.sessionId) {
            stripe?.redirectToCheckout({ sessionId: data.sessionId });
        } else {
            toast({ title: data.error, variant: "destructive" })
        }
    };

    return (
        <div className=' h-full w-full flex flex-col'>


            <Tabs defaultValue="monthly" >
                <TabsList className=' mb-5'>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="yearly">Yearly</TabsTrigger>
                </TabsList>

                <TabsContent className='' value="monthly">
                    <div className=' flex flex-col gap-5'>
                        {planData.map((data, index) => (
                            <Card key={index} className=' border flex flex-col md:flex-row  items-center justify-between'>
                                <CardHeader className='w-full'>
                                    <div className=' flex items-center gap-2'>
                                        <CardTitle>
                                            {data.title}
                                        </CardTitle>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button variant="ghost" size={"icon"} className=' rounded-full h-6 w-6'>
                                                    <Info className='h-3 w-3' />
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent align='center' className='mx-2'>
                                                <div>
                                                    {data.features.map((feature, index) => (
                                                        <div className=' flex items-center gap-2 text-sm '
                                                            key={index}>
                                                            <CheckCircle className='h-3 w-3 text-muted-foreground' />
                                                            {feature}
                                                        </div>
                                                    ))}
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </div>

                                    <CardDescription>
                                        {data.description}
                                    </CardDescription>

                                </CardHeader>

                                <CardContent className='w-full md:w-fit flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start gap-2 p-6'>
                                    <Heading variant={"h4"} className=' font-bold'>
                                        ${data.monthPrice}
                                        <span className=' text-sm'>/month</span>
                                    </Heading>
                                    <Button disabled={index === 0} onClick={() => handleCheckout(planData[index].monthlyPriceId || "")}>
                                        <Zap className=' h-4 w-4 mr-2' />   Upgrade
                                    </Button>

                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent className=' w-full' value="yearly">
                    <div className=' flex flex-col gap-5'>
                        {planData.map((data, index) => (
                            <Card key={index} className=' border flex flex-col md:flex-row  items-center justify-between'>
                                <CardHeader className='w-full'>
                                    <div className=' flex items-center gap-2'>
                                        <CardTitle>
                                            {data.title}
                                        </CardTitle>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button variant="ghost" size={"icon"} className=' rounded-full h-6 w-6'>
                                                    <Info className='h-3 w-3' />
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent align='center' className='mx-2'>
                                                <div>
                                                    {data.features.map((feature, index) => (
                                                        <div className=' flex items-center gap-2 text-sm '
                                                            key={index}>
                                                            <CheckCircle className='h-3 w-3 text-muted-foreground' />
                                                            {feature}
                                                        </div>
                                                    ))}
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </div>

                                    <CardDescription>
                                        {data.description}
                                    </CardDescription>

                                </CardHeader>

                                <CardContent className='w-full md:w-fit flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start gap-2 p-6'>
                                    <Heading variant={"h4"} className=' font-bold'>
                                        ${data.yearPrice}
                                        <span className=' text-sm'>/year</span>
                                    </Heading>
                                    <Button disabled={index === 0} onClick={() => handleCheckout(planData[index].yearlyPriceId || "")}>
                                        <Zap className=' h-4 w-4 mr-2' />   Upgrade
                                    </Button>

                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>


        </div>
    )
}

export default BillingComponent

