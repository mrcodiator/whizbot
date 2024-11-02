"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
import { useVerification } from '@/hooks/use-verification'
import { Loader2 } from 'lucide-react'
import { Heading } from '../ui/heading'


const VerifyEmailForm = () => {
    const { form, onSubmit, resendVerificationEmail, loading } = useVerification();


    return (

        <Card className=' w-full'>
            <CardHeader className=" text-center mb-10">
                <Heading variant={"h3"} className="  font-semibold">Verify Email</Heading>
                <CardDescription>
                    Enter the code that was sent to your email.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <FormField
                            control={form.control}
                            name="code"
                            render={({ field }) => (
                                <FormItem>
                                    <div className=' flex items-center justify-between'>
                                        <FormLabel>Code</FormLabel>

                                        <Button type='button' variant={"link"} onClick={resendVerificationEmail}>
                                            Resend Code?
                                        </Button>
                                    </div>
                                    <FormControl>
                                        <InputOTP className=' w-full' maxLength={6} {...field}>
                                            <InputOTPGroup className=' w-full'>
                                                <InputOTPSlot index={0} />
                                                <InputOTPSlot index={1} />
                                                <InputOTPSlot index={2} />
                                            </InputOTPGroup>
                                            <InputOTPSeparator />
                                            <InputOTPGroup className=' w-full'>
                                                <InputOTPSlot index={3} />
                                                <InputOTPSlot index={4} />
                                                <InputOTPSlot index={5} />
                                            </InputOTPGroup>
                                        </InputOTP>
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
                                    Confirm
                                </>
                            }
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default VerifyEmailForm;