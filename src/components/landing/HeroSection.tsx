import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ArrowRight, Play } from 'lucide-react'

const HeroSection = () => {
    return (
        <div className=' h-full container px-5 py-20 mx-auto flex flex-col justify-center gap-5  items-center'>

            <div className=' p-1 rounded-full border flex items-center gap-2 w-fit text-sm'>
                <div className='bg-primary rounded-full px-2 py-1 text-muted '>
                    New
                </div>
                See our pricing plan!
                <Link href={"/sign-up"} className=' p-1 hover:underline cursor-pointer mr-2 font-semibold text-sm'>
                    Free Trial
                </Link>
            </div>

            <h1 className='max-w-4xl text-3xl md:text-4xl lg:text-6xl font-sans font-bold text-center'>
                All-In-One <span className=' bg-gradient-to-r from-orange-700 via-primary to-orange-500 bg-clip-text text-transparent'>Customer Relation</span> Management With Whizbot.
            </h1>
            <p className='max-w-4xl text-center md:text-lg text-muted-foreground font-dm'>
                Manage your customers with Whizbot, a comprehensive customer. management solution. <br /> And start your journey with us.
            </p>

            <div className='flex items-center gap-2'>
                <Link href={"/sign-up"}>
                    <Button size={"lg"} className=' rounded-full ring-2 ring-orange-200 ring-offset-1 ' >
                        <span className=' bg-gradient-to-r from-orange-400 via-orange-200 to-orange-500 bg-clip-text text-transparent flex items-center '>
                            Get Started <ArrowRight className='h-4 w-4 ml-2 text-orange-500' />
                        </span>
                    </Button>
                </Link>

                <Button size={"lg"} variant={"ghost"} className=' rounded-full'>
                    <Play className='h-4 w-4 mr-2' />
                    Watch Video
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
