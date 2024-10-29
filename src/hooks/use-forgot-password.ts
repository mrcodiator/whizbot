import { toast } from "./use-toast";
import { useForgotPasswordContext } from "@/contexts/ForgotPasswordContext";
import { forgotPasswordSchema, otpSchema } from "@/schemas/user.schema";
import { useSignIn } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react"
import { useForm } from "react-hook-form";
import { z } from "zod";

const emailSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
})

export const useForgotPassword = () => {
    const [loading, setLoading] = useState(false);
    const { isLoaded, signIn, setActive } = useSignIn();
    const { setStep } = useForgotPasswordContext();
    const router = useRouter();

    const form = useForm<z.infer<typeof forgotPasswordSchema>>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        }
    })

    const sendEmailForm = useForm<z.infer<typeof emailSchema>>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            email: "",
        }
    })


    const sendEmailVerification = async (values: z.infer<typeof emailSchema>) => {
        setLoading(true)
        if (!isLoaded) return;
        try {
            // console.log(values);
            await signIn.create({
                strategy: "reset_password_email_code",
                identifier: values.email,
            });
            setStep(1)
            toast({ title: "Check Email", description: "A code has been sent to your email." });
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

    const verifyResetCodeForm = useForm<z.infer<typeof otpSchema>>({
        resolver: zodResolver(otpSchema),
        defaultValues: {
            code: "",
        }
    })

    const verifyResetCode = async (values: z.infer<typeof otpSchema>) => {
        setLoading(true)
        if (!isLoaded) return;

        try {
            await signIn.attemptFirstFactor({
                strategy: "reset_password_email_code",
                code: values.code,
            });
            setStep(2);
            toast({ title: "Verification Successful", description: "You can change your password now." });
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

    const forgotPassword = async (values: z.infer<typeof forgotPasswordSchema>) => {
        setLoading(true)
        if (!isLoaded) return;
        try {
            const result = await signIn.resetPassword({
                password: values.password,
            });
            if (result.status === "complete") {
                setActive({ session: result.createdSessionId });
                // Redirect or show success message
                router.push("/dashboard");
            }
            toast({ title: "Password changed successfully", description: "Redirecting to dashboard!" });
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

    return { sendEmailForm, sendEmailVerification, verifyResetCodeForm, verifyResetCode, form, forgotPassword, loading };
}