import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { createDomain } from "@/actions/domain.actions";
import { createDomainSchema } from "@/schemas/domain.shcema";

export const useCreateDomain = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof createDomainSchema>>({
        resolver: zodResolver(createDomainSchema),
        defaultValues: {
            name: "",
            url: "",
            logo: ""
        },
    });

    const handleFileUpload = (url: string) => {
        if (url !== "") {
            setLoading(true);
            form.setValue("logo", url);
            setLoading(false)
        }
    };

    const onSubmit = async (values: z.infer<typeof createDomainSchema>) => {
        console.log("Open Start: ", open);

        setLoading(true);
        try {

            const res = await createDomain(values);
            if (res.success) {
                toast({ title: res.message })
                setOpen(false);
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
        } finally {
            setLoading(false);
        }
    };

    return { form, loading, setLoading, onSubmit, handleFileUpload };
};
