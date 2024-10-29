import { updateChatbot } from "@/actions/chat.actions"
import { trainChatbotSchema } from "@/schemas/chatbot.shcema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "./use-toast"



export const useTrainChatbot = ({ chatbotId, trainData }: { chatbotId: string, trainData: string }) => {
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof trainChatbotSchema>>({
        resolver: zodResolver(trainChatbotSchema),
        defaultValues: {
            trainData: trainData,
        }
    })

    const onSubmit = async (values: z.infer<typeof trainChatbotSchema>) => {
        setLoading(true);
        try {
            const res = await updateChatbot(chatbotId, values.trainData);

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
        } finally {
            setLoading(false);
        }
    };

    return {
        form,
        onSubmit,
        loading
    }
}