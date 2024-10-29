'use client';
import React from 'react';
import { Heading } from '../ui/heading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '../ui/card';
import { ArrowRightCircle, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { planData } from '@/helper/plan-data';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import Link from 'next/link';

const PricingTable = () => {
    const [isYearly, setIsYearly] = React.useState(false);

    const toggleYearly = () => {
        setIsYearly(!isYearly);
        console.log("isYearly", isYearly);

    };

    return (
        <div className='container px-5 py-20 mx-auto flex flex-col'>
            <Heading variant="h2" className="text-center max-w-2xl mx-auto">
                Choose your plan
            </Heading>
            <div className='mx-auto text-center mt-5'>
                <div className="flex items-center gap-2">
                    <Label htmlFor="is-yearly">Yearly Plan</Label>
                    <Switch id="is-yearly" checked={isYearly} onCheckedChange={toggleYearly} />
                </div>
            </div>

            <div className='max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-12'>
                {planData.map((data, index) => (
                    <Card key={index} className={`border flex flex-col ${index === 1 ? "ring-1 ring-slate-900/40 ring-offset-2" : ""}`}>
                        <CardHeader className='flex flex-col gap-2'>
                            <Heading variant={"h4"}>{data.title}</Heading>
                            <CardDescription>{data.description}</CardDescription>
                            <div>
                                <Heading variant={"h3"} className='font-bold'>
                                    ${isYearly ? data.yearPrice : data.monthPrice}
                                    <span className='text-sm'>/{isYearly ? "year" : "month"}</span>
                                </Heading>
                            </div>
                            <Separator />
                        </CardHeader>
                        <CardContent className='flex-1 flex flex-col gap-2 p-6'>
                            <ul className='flex flex-col gap-2'>
                                {data.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className='flex items-center gap-2'>
                                        <CheckCircle className='w-4 h-4' />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Link href={"/dashboard/billing"} className=' w-full'>
                                <Button size={"lg"} variant={data.title === "Starter" ? "secondary" : "default"} className='w-full'>
                                    Get started <ArrowRightCircle className='ml-2 h-4 w-4' />
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default PricingTable;
