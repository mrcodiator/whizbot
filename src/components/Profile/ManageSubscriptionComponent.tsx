'use client';
import React from 'react';
import { toast } from '@/hooks/use-toast';
import { ISubscription } from '@/types/subscription.type';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CheckCircle, Info, Zap } from 'lucide-react';
import { planData } from '@/helper/plan-data';

const ManageSubscriptionComponent = ({ data }: { data: ISubscription }) => {

    const handleManageSubscription = async () => {
        try {
            const res = await fetch('/api/stripe/manage', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });

            const responseData = await res.json();

            if (responseData.url) {
                // Redirect the user to the Stripe Billing Portal
                window.location.href = responseData.url;
            } else {
                toast({ title: responseData.error, variant: 'destructive' });
            }
        } catch (error) {
            console.error('Error managing subscription:', error);
            toast({
                title: 'Error',
                description: 'Something went wrong while managing your subscription.',
                variant: 'destructive',
            });
        }
    };

    return (
        <Card className=' border flex flex-col md:flex-row  items-center justify-between'>
            <CardHeader className='w-full'>
                <div className=' flex items-center gap-2'>
                    <CardTitle>
                        Manage Subscription
                    </CardTitle>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="ghost" size={"icon"} className=' rounded-full h-6 w-6'>
                                <Info className='h-3 w-3' />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent align='center' className='mx-2'>
                            <div>
                                {planData[1].features.map((feature, index) => (
                                    <div className=' flex items-center gap-2 text-sm ' key={index}>
                                        <CheckCircle className='h-3 w-3 text-muted-foreground' />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>

                <CardDescription>
                    You are now in premium mode. You can manage your subscription here.
                    <br />
                    expires on <span className=' font-semibold text-primary underline'>{new Date(data?.expiresAt).toDateString()}</span>
                </CardDescription>

            </CardHeader>

            <CardContent className='w-full md:w-fit flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start gap-2 p-6'>
                <div className='flex text-sm gap-2'>
                    mode:  <span className='text-muted-foreground'>{data.interval.toLowerCase() === 'month' ? 'Monthly' : 'Yearly'}</span>
                </div>
                <Button onClick={handleManageSubscription}>
                    <Zap className=' h-4 w-4 mr-2' />   Manage
                </Button>
            </CardContent>
        </Card>
    );
};

export default ManageSubscriptionComponent;
