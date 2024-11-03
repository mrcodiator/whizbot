import React from 'react';
import { Heading } from '@/components/ui/heading';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import DemoVideoComponent from './DemoVideoComponent';
import Image from 'next/image';

export default function LandingHeroSection() {
    return (
        <div className='container flex-1 h-full px-4 py-20 mx-auto flex flex-col justify-center'>
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

                </div>

                <p className='flex items-center justify-center lg:justify-start text-muted-foreground text-xs sm:text-sm mt-4'>
                    <span className='mr-2'>✓</span> No credit card required | 7-day free trial | Cancel anytime
                </p>


            </div>

            <div className=' relative max-w-7xl w-full mx-auto mt-20 rounded-2xl overflow-hidden '>
                <div className=' p-5 bg-gradient-to-t from-transparent via-slate-400 to-secondary'>
                    <Image
                        src="/images/ui/hero.png"
                        alt="WhizBot AI dashboard"
                        sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
                        width={768}
                        height={550}
                        className="w-full h-auto rounded-lg"
                        blurDataURL="URL"
                        placeholder="blur"
                        quality={75}
                        priority={true}
                        loading="eager"
                    />
                </div>

                <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                    <DemoVideoComponent />
                </div>

                <div className=' absolute bottom-0 left-0 w-full h-16 md:h-28 bg-gradient-to-t from-white to-transparent'></div>
            </div>

        </div>
    );
}