import { toast } from "./use-toast"
import { useAuthContext } from "@/contexts/AuthContext"
import { registerSchema } from "@/schemas/user.schema"
import { useSignUp } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"


export const useRegisterHook = () => {
    const { setStep, data: { firstName, lastName, email } } = useAuthContext();
    const [loading, setLoading] = useState(false);
    const { isLoaded, signUp } = useSignUp()

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof registerSchema>) => {
        setLoading(true)

        if (!isLoaded) return

        try {

            await signUp.create({
                emailAddress: email,
                password: values.password,
                firstName: firstName,
                lastName: lastName
            })

            await signUp.prepareEmailAddressVerification({
                strategy: 'email_code',
            })

            toast({ title: "Check Email", description: "We have sent you an email verification link." });
            setStep(2);
        } catch (err: unknown) {
            console.error('Error:', JSON.stringify(err, null, 2));

            if (typeof err === 'object' && err !== null && 'errors' in err) {
                const clerkError = err as { errors: Array<{ code: string, message: string }> };

                clerkError.errors.forEach((error) => {
                    switch (error.code) {
                        case "form_password_pwned":
                            toast({
                                title: "Password Security Issue",
                                description: "This password has been found in a data breach. Please choose a different password for your security.",
                                variant: "destructive"
                            });
                            break;
                        default:
                            toast({
                                title: "Error",
                                description: error.message || "An unexpected error occurred. Please try again.",
                                variant: "destructive"
                            });
                    }
                });
            } else {
                toast({
                    title: "Something went wrong",
                    description: "An unexpected error occurred. Please try again later.",
                    variant: "destructive"
                });
            }
        }
        finally {
            setLoading(false)
        }
    }

    return { form, onSubmit, loading }
}