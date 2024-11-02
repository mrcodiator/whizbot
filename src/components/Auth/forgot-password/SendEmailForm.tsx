"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { useForgotPassword } from '@/hooks/use-forgot-password'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { Heading } from '@/components/ui/heading'


const SendEmailForm = () => {
    const { sendEmailForm: form, sendEmailVerification: onSubmit, loading } = useForgotPassword()

    return (

        <Card className=' w-full'>
            <CardHeader className=" text-center mb-10">
                <Heading variant={"h3"} className="  font-semibold">Forgot Your Password?</Heading>
                <CardDescription>
                    Enter your email and we&apos;ll send you an code to reset your password.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input className='h-10' type='email' placeholder="john@example.com" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button size={"lg"} className="w-full mt-6" type="submit" disabled={loading}>
                            {loading ?
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> wait...
                                </>
                                :
                                <>
                                    Send
                                </>
                            }
                        </Button>


                    </form>
                </Form>
            </CardContent>

            <CardFooter>
                <div className=" text-sm mx-auto text-muted-foreground">
                    Go back to sign in?
                    <Link href="/sign-in">
                        <Button variant={"link"}>Sign In</Button>
                    </Link>
                </div>
            </CardFooter>
        </Card>
    )
}

export default SendEmailForm
