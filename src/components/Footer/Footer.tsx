import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Github } from 'lucide-react'

const Footer = () => {
    return (
        <div className=' border-t border-input'>
            <div className=' container mx-auto p-5 flex flex-col md:flex-row gap-5 items-center justify-between'>
                <p className='text-sm text-muted-foreground'>
                    © 2022 Whizbot. All rights reserved.
                </p>

                <div className='flex items-center gap-2'>
                    <Link href={"https://github.com/mrcodiator/whizbot"}>
                        <Button variant={"ghost"}>
                            <Github className='h-4 w-4 mr-2' />
                            Github
                        </Button>
                    </Link>

                    <Button variant={"ghost"}>
                        Terms of Service
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Footer
