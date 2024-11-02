"use client"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowRight, Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useAuthContext } from "@/contexts/AuthContext"
import { Heading } from "../ui/heading"

const onboardingSchema = z.object({
    firstName: z
        .string()
        .min(2, { message: "First name is required" })
        .max(50, { message: "First name cannot be longer than 50 characters" }),
    lastName: z
        .string()
        .min(2, { message: "Last name is required" })
        .max(50, { message: "Last name cannot be longer than 50 characters" }),
    email: z
        .string()
        .min(1, { message: "Email is required" })
})

const OnboardingForm = () => {
    const [loading, setLoading] = useState(false);
    const { setData, setStep } = useAuthContext();

    const form = useForm<z.infer<typeof onboardingSchema>>({
        resolver: zodResolver(onboardingSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof onboardingSchema>) => {
        // create a timeout for loading
        setLoading(true)
        setData(values)
        setTimeout(() => {
            setLoading(false)
            setStep(1)
        }, 2000)
    }



    return (
        <Card className=" w-full">
            <CardHeader className=" text-center mb-10">
                <Heading variant={"h3"} className="  font-semibold">Join Whizbot</Heading>
                <CardDescription>
                    Get started with Whizbot by starting your free trial now.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input className=" h-10" placeholder="John" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input className=" h-10" placeholder="Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input className=" h-10" placeholder="example@me.com" {...field} />
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
                                    Continue <ArrowRight className="h-4 w-4 ml-2" />
                                </>
                            }
                        </Button>
                    </form>
                </Form>
            </CardContent>

            <CardFooter className=" w-full">
                <div className=" text-sm mx-auto text-muted-foreground">
                    Already have an account?
                    <Link href="/sign-in">
                        <Button variant={"link"}>Sign In</Button>
                    </Link>
                </div>
            </CardFooter>
        </Card>
    )
}

export default OnboardingForm
