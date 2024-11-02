// 'use client'
// import React, { useState, useEffect } from 'react'
import { Heading } from '../ui/heading'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { featuresData } from '@/helper/features-data'
import Image from 'next/image'
// import { Check, Star, Shield, Globe } from 'lucide-react'

// const notifications = [
//     { message: "Easy to use", icon: <Check />, color: "bg-primary" },
//     { message: "Seamless Integration", icon: <Star />, color: "bg-secondary" },
//     { message: "Real-time Analytics", icon: <Globe />, color: "bg-accent" },
//     { message: "Customizable Settings", icon: <Shield />, color: "bg-primary" },
//     { message: "24/7 Support", icon: <Check />, color: "bg-secondary" },
// ]

const FeaturesSection = () => {
    // const [currentNotification, setCurrentNotification] = useState(0)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentNotification((prev) => (prev + 1) % notifications.length)
    //     }, 3000) // Change notification every 3 seconds
    //     return () => clearInterval(interval)
    // }, [])

    return (
        <div className='container mx-auto py-20 p-5'>
            <div className="max-w-2xl mx-auto text-center">
                <Heading variant="h2">
                    Explore the Features
                </Heading>
                <p className="text-muted-foreground mt-4">
                    Whizbot provides a range of features to enhance your customer interactions.
                </p>
            </div>

            <div className='flex flex-col lg:flex-row gap-10 mt-10 w-full'>

                <div className='flex flex-col gap-4'>
                    {featuresData.map((data, index) => (
                        <Card key={index} className={index === 0 ? "bg-secondary" : ""}>
                            <CardHeader className='flex flex-row items-center gap-4'>
                                <Avatar>
                                    <AvatarFallback className={index === 0 ? "bg-primary text-muted" : ""}>
                                        {data.icon}
                                    </AvatarFallback>
                                </Avatar>

                                <div>
                                    <CardTitle>
                                        {data.title}
                                    </CardTitle>
                                    <CardDescription>
                                        {data.description}
                                    </CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>

                <div className='relative'>
                    <Image
                        alt='features'
                        src={"/images/meet.jpg"}
                        sizes='100vh'
                        height={0}
                        width={0}
                        className='w-full h-full object-cover rounded-xl'
                    />

                    {/* <div className='absolute top-5 right-5 flex items-center justify-center'>
                        <div className='notification-stack'>
                            {notifications.map((notification, index) => {
                                const position = (index - currentNotification + notifications.length) % notifications.length
                                let opacity = 0
                                let translateY = '0px'
                                let scale = 0.8

                                // Adjust opacity, position, and scale for each notification
                                if (position === 0) { // top, faded out
                                    opacity = 0.2
                                    translateY = '-80px'
                                    scale = 0.85
                                } else if (position === 1) { // center, full opacity
                                    opacity = 1
                                    translateY = '0'
                                    scale = 1
                                } else if (position === 2) { // bottom, faded out
                                    opacity = 0.2
                                    translateY = '80px'
                                    scale = 0.85
                                }

                                return (
                                    <div
                                        key={index}
                                        className='notification-item'
                                        style={{
                                            opacity,
                                            transform: `translateY(${translateY}) scale(${scale})`,
                                            transition: 'opacity 0.5s ease, transform 0.5s ease',
                                        }}
                                    >
                                        <div className={`rounded-full p-4 drop-shadow-lg flex items-center gap-3 ${notification.color}`}>
                                            <div className='rounded-full p-2 bg-white'>
                                                {notification.icon}
                                            </div>
                                            <p className='text-muted-foreground font-medium'>
                                                {notification.message}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div> */}

                </div>

            </div>
        </div>
    )
}

export default FeaturesSection
