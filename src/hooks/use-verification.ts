'use client';
import { toast } from "./use-toast";
import { useSignUp } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { otpSchema } from "@/schemas/user.schema";
import { deleteUser, registerUser } from "@/actions/user.actions";

export const useVerification = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { isLoaded, setActive, signUp } = useSignUp();

    const form = useForm<z.infer<typeof otpSchema>>({
        resolver: zodResolver(otpSchema),
        defaultValues: {
            code: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof otpSchema>) => {
        if (!isLoaded) {
            return;
        }

        setLoading(true);
        try {
            const { code } = values;
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code,
            });

            if (completeSignUp.status === "complete") {


                if (!signUp.createdUserId || !signUp.emailAddress || !signUp.firstName || !signUp.lastName) return;

                const data = {
                    email: signUp.emailAddress!,
                    firstName: signUp.firstName!,
                    lastName: signUp.lastName!,
                    clerkId: signUp.createdUserId!,
                };

                console.log(data);


                // verify in db
                const res = await registerUser(data);
                if (res.success) {
                    await setActive({
                        session: completeSignUp.createdSessionId,
                    });

                    toast({ title: "OTP verified successfully", description: "You are now signed in." });

                    router.push("/dashboard");



                }
                else {
                    toast({ title: res.message, variant: "destructive" });

                    // delete user from clerk if it's not getting created in db
                    await deleteUser(signUp.createdUserId!);


                    router.push("/sign-in");

                }

            }


            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            console.error('Error:', JSON.stringify(err, null, 2));
            toast({
                title: "Something went wrong",
                description: err.message as string || "Please try again later.",
                variant: "destructive"
            });
        }
        finally {
            setLoading(false);
        }
    };

    const resendVerificationEmail = async () => {
        if (!isLoaded || !signUp) {
            return;
        }

        try {
            // Resend the verification email
            await signUp.prepareEmailAddressVerification({
                strategy: 'email_code',
            });

            toast({
                title: "Verification Email Sent",
                description: "Please check your email for the new verification code."
            });

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
    };

    return { form, onSubmit, resendVerificationEmail, loading };
};

