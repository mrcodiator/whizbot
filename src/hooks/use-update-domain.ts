import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { updateDomain } from "@/actions/domain.actions";
import { updateDomainSchema } from "@/schemas/domain.shcema";

export const useUpdateDomain = ({ domainId }: { domainId: string }) => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const form = useForm<z.infer<typeof updateDomainSchema>>({
        resolver: zodResolver(updateDomainSchema),
        defaultValues: {
            name: "",
            url: "",
            logo: "",
            email: ""
        },
    });

    const handleFileUpload = (url: string) => {
        if (url !== "") {
            form.setValue("logo", url);
        }
    };

    const onSubmit = async (values: z.infer<typeof updateDomainSchema>) => {
        setLoading(true);
        try {
            const res = await updateDomain(domainId, values);

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

    return { form, loading, onSubmit, handleFileUpload, open, setOpen, setLoading };
};
