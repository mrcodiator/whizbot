"use client"
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
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card"
import { useRegisterHook } from "@/hooks/use-sign-up"
import { Heading } from "../ui/heading"



const SignUpForm = () => {
    const { form, onSubmit, loading } = useRegisterHook();

    return (
        <Card className=" w-full">
            <CardHeader className=" text-center mb-10">
                <Heading variant={"h3"} className="  font-semibold">Setup Password</Heading>
                <CardDescription>
                    Create a password to unlock your account.
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
                                        <Input className=" h-10" type="password" placeholder="password" {...field} />
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
                                        <Input className=" h-10" type="password" placeholder="confirm password" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Enter the same password as before, for verification.
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
                                    Sign Up
                                </>
                            }
                        </Button>
                    </form>
                </Form>
            </CardContent>

            <CardFooter className=" w-full">
                <div className=" mx-auto text-sm text-muted-foreground">
                    Already have an account?
                    <Link href="/sign-in">
                        <Button variant={"link"}>Sign In</Button>
                    </Link>
                </div>
            </CardFooter>
        </Card>
    )
}

export default SignUpForm
