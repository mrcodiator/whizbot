"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
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
import { Loader2 } from 'lucide-react'
import { Heading } from '@/components/ui/heading'

const SetNewPasswordForm = () => {
    const { form, forgotPassword: onSubmit, loading } = useForgotPassword()


    return (
        <Card className=' w-full'>

            <CardHeader className=" text-center mb-10">
                <Heading variant={"h3"} className="  font-semibold">Set New Password</Heading>
                <CardDescription>
                    Create a new password for your account.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input className=' h-10' type='password' placeholder="Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input className=' h-10' type='password' placeholder="Password" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Please confirm your new password.
                                    </FormDescription>
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
                                    Submit
                                </>
                            }
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default SetNewPasswordForm
