import React from 'react'
import { Button } from '../ui/button'

const Footer = () => {
    return (
        <div className=' border-t border-input'>
            <div className=' container mx-auto p-5 flex flex-col md:flex-row gap-5 items-center justify-between'>
                <p className='text-sm text-muted-foreground'>
                    © 2022 Whizbot. All rights reserved.
                </p>

                <div className='flex items-center gap-2'>
                    <Button variant={"ghost"}>
                        Priacy Policy
                    </Button>

                    <Button variant={"ghost"}>
                        Terms of Service
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Footer
