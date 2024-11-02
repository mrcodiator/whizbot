import React from 'react'
import { Button } from '../ui/button'
import { Facebook, Github, Twitter } from 'lucide-react'
import Link from 'next/link'

const FooterSection = () => {
    return (
        <div className='w-full pt-20 px-5'>
            <div className=' w-full rounded-2xl mx-auto bg-gradient-to-t from-transparent via-slate-300 to-secondary'>
                <div className=' w-full'>
                    <div className='  px-5 py-20 text-center flex flex-col justify-center items-center mx-auto'>
                        <h1 className=' text-4xl tracking-tighter leading-tight font-sans font-extrabold'>
                            Join Our Community!
                        </h1>
                        <p>
                            We are a community of like-minded individuals who are passionate about AI.
                        </p>

                        <div className=' flex items-center gap-2 max-w-lg  w-full mt-5 '>
                            <iframe
                                width="100%"
                                height="100%"
                                className='h-[300px] w-full rounded-lg'
                                src="https://www.youtube.com/embed/eL8sX2FQlPA?si=pCMc_sb0vHzWRAht"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
                <div className='container  px-5 py-10 mx-auto'>
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-5'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='  text-3xl font-extrabold tracking-tight font-sans'>
                                Whizbot V1
                            </h1>

                            <p>
                                Next Generation AI for leads and sales. Join our community.
                            </p>

                            <div className='flex items-center gap-2'>
                                <Button variant={"outline"} size={"icon"}>
                                    <Facebook className='h-4 w-4' />
                                </Button>

                                <Button variant={"outline"} size={"icon"}>
                                    <Twitter className='h-4 w-4' />
                                </Button>

                                <Button variant={"outline"} size={"icon"}>
                                    <Github className='h-4 w-4' />
                                </Button>
                            </div>

                        </div>

                        <div>
                            <h1 className=' font-sans font-semibold text-lg'>
                                Quick Links
                            </h1>

                            <div className=' flex flex-col gap-2 mt-5'>
                                <Link href={"/"} className=' text-muted-foreground hover:text-accent-foreground'>
                                    Home
                                </Link>

                                <Link href={"/pricing"} className=' text-muted-foreground hover:text-accent-foreground'>
                                    Pricing
                                </Link>
                                <Link href={"/about"} className=' text-muted-foreground hover:text-accent-foreground'>
                                    About
                                </Link>
                                <Link href={"/contact"} className=' text-muted-foreground hover:text-accent-foreground'>
                                    Contact
                                </Link>
                                <Link href={"/terms-and-conditions"} className=' text-muted-foreground hover:text-accent-foreground'>
                                    Terms and Conditions
                                </Link>
                                <Link href={"/privacy-policy"} className=' text-muted-foreground hover:text-accent-foreground'>
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h1 className=' font-sans font-semibold text-lg'>
                                Features
                            </h1>

                            <div className=' flex flex-col gap-2 mt-5'>
                                <Link href={"/"} className=' text-muted-foreground hover:text-accent-foreground'>
                                    Lead Generation
                                </Link>

                                <Link href={"/"} className=' text-muted-foreground hover:text-accent-foreground'>
                                    Sales Automation
                                </Link>
                                <Link href={"/"} className=' text-muted-foreground hover:text-accent-foreground'>
                                    AI-Powered Chatbots
                                </Link>
                                <Link href={"/"} className=' text-muted-foreground hover:text-accent-foreground'>
                                    CRM Integration
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h1 className=' font-sans font-semibold text-lg'>
                                About Us
                            </h1>

                            <div className=' flex flex-col gap-2 mt-5'>
                                <Link href={"/team"} className=' text-muted-foreground hover:text-accent-foreground'>
                                    Our Team
                                </Link>

                                <Link href={"/careers"} className=' text-muted-foreground hover:text-accent-foreground'>
                                    Careers
                                </Link>
                                <Link href={"/blog"} className=' text-muted-foreground hover:text-accent-foreground'>
                                    Blog
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default FooterSection

