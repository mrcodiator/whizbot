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
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
import { useForgotPassword } from '@/hooks/use-forgot-password'
import { Loader2 } from 'lucide-react'
import { useForgotPasswordContext } from '@/contexts/ForgotPasswordContext'



const ConfirmEmailForm = () => {
    const { verifyResetCodeForm: form, verifyResetCode: onSubmit, loading } = useForgotPassword()
    const { setStep } = useForgotPasswordContext()

    return (

        <Card className=' border w-full'>
            <CardHeader>
                <CardTitle >
                    Please Enter Your Code
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
                            name="code"
                            render={({ field }) => (
                                <FormItem>
                                    <div className=' flex items-center justify-between'>
                                        <FormLabel>Code</FormLabel>

                                        <Button type='button' variant={"link"} className='font-bold' onClick={() => setStep(0)}>
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
                                    <FormDescription>
                                        Check your email for the code.
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
                                    Verify
                                </>
                            }
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default ConfirmEmailForm
