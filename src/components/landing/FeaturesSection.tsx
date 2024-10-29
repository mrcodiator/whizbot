import React from 'react'
import { Heading } from '../ui/heading'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { featuresData } from '@/helper/features-data'

const FeaturesSection = () => {


    return (
        <div className='container px-6 py-24 mx-auto'>
            <Heading variant="h2" className="text-center max-w-2xl mx-auto">
                Explore the Features of Our Platform
            </Heading>

            <div className=' mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
                {/* Features List Card */}
                {featuresData.map((feature, index) => (
                    <Card key={index}>
                        <CardHeader className=' flex flex-col gap-2'>
                            <Avatar className=' w-12 h-12 bg-secondary'>
                                <AvatarFallback>
                                    {feature.icon}
                                </AvatarFallback>
                            </Avatar>
                            <CardTitle>{feature.title}</CardTitle>
                            <CardDescription>
                                {feature.description}
                            </CardDescription>
                        </CardHeader>
                    </Card>

                ))}
            </div>
        </div>
    )
}

export default FeaturesSection
