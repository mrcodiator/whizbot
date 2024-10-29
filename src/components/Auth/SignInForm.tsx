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
import { ArrowRight, Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { useLoginHook } from "@/hooks/use-login"


const SignInForm = () => {
    const { form, onSubmit, loading } = useLoginHook()

    return (
        <Card className=" w-full border">
            <CardHeader>
                <CardTitle>Sign In To Your Account</CardTitle>
                <CardDescription>
                    Welcome back! Please enter your details.
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
                                        <Input placeholder="email" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        We&apos;ll never share your email.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <div className=" flex items-center justify-between gap-2">
                                        <FormLabel>Password</FormLabel>

                                        <Link href={"/forgot-password"}>
                                            <Button type="button" variant={"link"}>
                                                Forgot Password?
                                            </Button>
                                        </Link>
                                    </div>
                                    <FormControl>
                                        <Input type="password" placeholder="password" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Enter a password of at least 6 characters.
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
                                    Sign In <ArrowRight className="h-4 w-4 ml-2" />
                                </>
                            }
                        </Button>

                    </form>
                </Form>
            </CardContent>

            <CardFooter className=" w-full text-center text-muted-foreground">
                <div className=" text-sm md:text-base mx-auto">
                    Don&apos;t have an account? &nbsp;
                    <Link href="/sign-up">
                        <Button variant={"link"} >Sign Up</Button>
                    </Link>
                </div>
            </CardFooter>
        </Card>
    )
}

export default SignInForm
