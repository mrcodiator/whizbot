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
import { useRegisterHook } from "@/hooks/use-sign-up"



const SignUpForm = () => {
    const { form, onSubmit, loading } = useRegisterHook();

    return (
        <Card className=" w-full border">
            <CardHeader>
                <CardTitle>Setup Password</CardTitle>
                <CardDescription>
                    We use clerk for secure authentication.
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
                                        <Input type="password" placeholder="password" {...field} />
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
                                        <Input type="password" placeholder="confirm password" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Enter the same password as before, for verification.
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
                                    Sign Up <ArrowRight className="h-4 w-4 ml-2" />
                                </>
                            }
                        </Button>
                    </form>
                </Form>
            </CardContent>

            <CardFooter className=" w-full">
                <div className=" mx-auto text-muted-foreground">
                    Already have an account?
                    <Link href="/sign-in">
                        <Button variant={"link"} className=" font-bold">Sign In</Button>
                    </Link>
                </div>
            </CardFooter>
        </Card>
    )
}

export default SignUpForm
