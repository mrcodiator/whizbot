import React from 'react';
import { Heading } from '@/components/ui/heading';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function LandingHeroSection() {
    return (
        <div className='container flex-1 h-full px-4 py-12 sm:py-20 mx-auto flex flex-col justify-center'>
            <div className='flex flex-col gap-4 text-center items-center justify-center max-w-4xl mx-auto'>
                <div className='text-muted-foreground font-semibold text-sm sm:text-base'>Revolutionize Your Business</div>
                <Heading className='lg:text-7xl' >
                    Empower your customer relationships with WhizBot AI
                </Heading>
                <p className='text-muted-foreground text-sm sm:text-base leading-relaxed'>
                    Transform your customer management experience with WhizBot. Our AI-powered solution streamlines interactions, boosts engagement, and drives growth for your business.
                </p>

                <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6'>
                    <Link href="/sign-up" className='w-full sm:w-auto'>
                        <Button size="lg" className='w-full sm:w-auto rounded-full'>
                            Start Free Trial <ArrowRight className='w-5 h-5 ml-2' />
                        </Button>
                    </Link>

                    <Button variant="outline" size="lg" className='w-full sm:w-auto rounded-full'>
                        <PlayCircle className='w-5 h-5 mr-2' />
                        Watch Demo
                    </Button>
                </div>

                <p className='flex items-center justify-center lg:justify-start text-muted-foreground text-xs sm:text-sm mt-4'>
                    <span className='mr-2'>✓</span> No credit card required | 7-day free trial | Cancel anytime
                </p>
            </div>


        </div>
    );
}