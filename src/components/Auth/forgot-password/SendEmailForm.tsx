"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { useForgotPassword } from '@/hooks/use-forgot-password'
import { ArrowLeft, Loader2 } from 'lucide-react'
import Link from 'next/link'


const SendEmailForm = () => {
    const { sendEmailForm: form, sendEmailVerification: onSubmit, loading } = useForgotPassword()

    return (

        <Card className=' border w-full'>
            <CardHeader>
                <CardTitle>
                    Provide Your Email
                </CardTitle>
                <CardDescription>
                    We will send you an email to reset your password.
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
                                        <Input type='email' placeholder="john@example.com" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        We will send you an email to reset your password.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="w-full mt-6" type="submit" disabled={loading}>
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

                        <Link href={"/sign-in"} className='w-full'>
                            <Button variant={"link"} className=' w-full'>
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back To Sign In
                            </Button>
                        </Link>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default SendEmailForm
