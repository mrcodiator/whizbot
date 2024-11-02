'use client';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardHeader } from '../ui/card';
import { clientData } from '@/helper/client-data';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const TestimonialSection = () => {
    const [slide, setSlide] = useState(0);

    const handleSlide = (direction: string) => {
        if (direction === 'left' && slide > 0) {
            setSlide(slide - 1);
        } else if (direction === 'right' && slide < 9) {
            setSlide(slide + 1);
        }
    };

    return (
        <div className='bg-secondary'>
            <div className='container mx-auto px-5 py-20'>
                <div className='flex items-center justify-between gap-5'>
                    <h1 className='text-4xl tracking-tight font-sans font-bold'>
                        What Our Clients Say.
                    </h1>

                    <div className='flex items-center gap-2'>
                        <Button
                            size={"icon"}
                            variant={"outline"}
                            onClick={() => handleSlide('left')}
                            disabled={slide === 0}
                        >
                            <ChevronLeft className='h-4 w-4' />
                        </Button>

                        <Button
                            size={"icon"}
                            onClick={() => handleSlide('right')}
                            disabled={slide === 9} // Adjust based on number of testimonials
                        >
                            <ChevronRight className='h-4 w-4' />
                        </Button>
                    </div>
                </div>

                <div className='w-full mt-10 overflow-hidden'>
                    <div
                        className='flex gap-5 transition-transform duration-500 ease-in-out'
                        style={{ transform: `translateX(-${(slide * 420)}px)` }} // 400px is the card width
                    >
                        {clientData.map((client, i) => (
                            <Card key={i} className='bg-white min-w-[400px] p-6 snap-center rounded-lg shadow-none'>
                                <CardHeader className=' h-full flex flex-col justify-between'>

                                    <p className=''>
                                        {client.review}
                                    </p>

                                    <div className=' flex items-center gap-2 mt-2'>
                                        <Avatar>
                                            <AvatarImage src={client.image} alt={client.name} />
                                            <AvatarFallback>
                                                {client.name[0]}
                                            </AvatarFallback>
                                        </Avatar>

                                        <div>
                                            <h1 className=' text-lg font-bold font-sans tracking-tight'>
                                                {client.name}
                                            </h1>
                                            <p className=' text-muted-foreground'>
                                                {client.work}
                                            </p>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TestimonialSection;
