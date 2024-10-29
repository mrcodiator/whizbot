import { updateUser } from "@/actions/user.actions";
import { toast } from "./use-toast";
import { updateUserSchema } from "@/schemas/user.schema";
import { IUser } from "@/types/auth.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useUpdateProfile = (user: IUser) => {
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof updateUserSchema>>({
        resolver: zodResolver(updateUserSchema),
        defaultValues: {
            firstName: user?.firstName || "",
            lastName: user?.lastName || "",
        },
    })

    const onSubmit = async (data: z.infer<typeof updateUserSchema>) => {
        setLoading(true)
        try {
            const res = await updateUser(data);
            if (res.success) {

                toast({ title: res.message })
            } else {
                toast({ title: res.message, variant: "destructive" })
            }
        } catch (error) {
            console.log(error);
            toast({
                description: "Something went wrong",
                title: "Error",
                variant: "destructive"
            })
        }
        finally {
            setLoading(false)
        }
    }

    return { form, loading, onSubmit }

}