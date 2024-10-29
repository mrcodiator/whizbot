import { toast } from "./use-toast";
import { loginSchema } from "@/schemas/user.schema";
import { useSignIn } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react"
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useLoginHook = () => {
    const [loading, setLoading] = useState(false);
    const { isLoaded, signIn, setActive } = useSignIn()
    const router = useRouter();

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit = async (values: z.infer<typeof loginSchema>) => {
        setLoading(true)

        if (!isLoaded) return;

        try {
            const signInAttempt = await signIn.create({
                identifier: values.email,
                password: values.password,
            })

            // If sign-in process is complete, set the created session as active
            // and redirect the user
            if (signInAttempt.status === 'complete') {
                await setActive({ session: signInAttempt.createdSessionId })
                router.push('/dashboard')
            }
            toast({ title: "Login successful", description: "Redirecting to dashboard!" });
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

    return { form, onSubmit, loading };
}