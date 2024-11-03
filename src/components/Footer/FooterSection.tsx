import React from 'react'
import { Button } from '../ui/button'
import { Facebook, Github, Twitter } from 'lucide-react'
import Link from 'next/link'

const FooterSection = () => {

    // Video details
    const videoId = "eL8sX2FQlPA";
    const videoTitle = "Product Demo Video";

    return (
        <div className='w-full pt-20 px-5'>
            <div className=' w-full rounded-2xl mx-auto bg-gradient-to-t from-transparent via-slate-300 to-secondary'>
                <div className=' max-w-xl mx-auto w-full'>
                    <div className='  px-5 py-20 text-center flex flex-col justify-center items-center mx-auto'>
                        <h1 className=' text-4xl tracking-tighter leading-tight font-sans font-extrabold'>
                            Join Our Community!
                        </h1>
                        <p>
                            We are a community of like-minded individuals who are passionate about AI.
                        </p>

                        <div className="relative aspect-video w-full">
                            <iframe
                                width="100%"
                                height="100%"
                                className="rounded-lg"
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                                title={videoTitle}
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                            />
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
                                <Button variant={"outline"} size={"icon"} aria-label="Facebook">
                                    <Facebook className='h-4 w-4' />
                                </Button>

                                <Button variant={"outline"} size={"icon"} aria-label="Twitter">
                                    <Twitter className='h-4 w-4' />
                                </Button>

                                <Button variant={"outline"} size={"icon"} aria-label="GitHub">
                                    <Github className='h-4 w-4' />
                                </Button>
                            </div>

                        </div>

                        <div>
                            <h1 className=' font-sans font-semibold text-lg'>
                                Quick Links
                            </h1>

                            <div className=' flex flex-col gap-2 mt-5'>
                                <Link href={"/"} className='  hover:text-muted-foreground'>
                                    Home
                                </Link>

                                <Link href={"/pricing"} className='  hover:text-muted-foreground'>
                                    Pricing
                                </Link>
                                <Link href={"/about"} className='  hover:text-muted-foreground'>
                                    About
                                </Link>
                                <Link href={"/contact"} className='  hover:text-muted-foreground'>
                                    Contact
                                </Link>
                                <Link href={"/terms-and-conditions"} className='  hover:text-muted-foreground'>
                                    Terms and Conditions
                                </Link>
                                <Link href={"/privacy-policy"} className='  hover:text-muted-foreground'>
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h1 className=' font-sans font-semibold text-lg'>
                                Features
                            </h1>

                            <div className=' flex flex-col gap-2 mt-5'>
                                <Link href={"/"} className='  hover:text-muted-foreground'>
                                    Lead Generation
                                </Link>

                                <Link href={"/"} className='  hover:text-muted-foreground'>
                                    Sales Automation
                                </Link>
                                <Link href={"/"} className='  hover:text-muted-foreground'>
                                    AI-Powered Chatbots
                                </Link>
                                <Link href={"/"} className='  hover:text-muted-foreground'>
                                    CRM Integration
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h1 className=' font-sans font-semibold text-lg'>
                                About Us
                            </h1>

                            <div className=' flex flex-col gap-2 mt-5'>
                                <Link href={"/team"} className='  hover:text-muted-foreground'>
                                    Our Team
                                </Link>

                                <Link href={"/careers"} className='  hover:text-muted-foreground'>
                                    Careers
                                </Link>
                                <Link href={"/blog"} className='  hover:text-muted-foreground'>
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

