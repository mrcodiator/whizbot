'use client';
import { useTrainChatbot } from '@/hooks/use-train-chatbot'
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
import React, { useEffect } from 'react'
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TrainChatbotForm = ({ chatbotId, trainData }: { chatbotId: string, trainData: string }) => {
    const { form, loading, onSubmit } = useTrainChatbot({ chatbotId, trainData })

    useEffect(() => {
        form.reset({ trainData })
    }, [form, trainData])
    return (
        <Card className=' w-full border shadow-none'>
            <CardHeader>
                <CardTitle>Train Chatbot</CardTitle>
                <CardDescription>
                    Provide Data related to your business.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <FormField
                            control={form.control}
                            name="trainData"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Data</FormLabel>
                                    <FormControl>
                                        <Textarea rows={10} placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Provide Data related to your business.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div>
                            <Button type="submit" disabled={loading}>
                                {loading ?
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> wait...
                                    </>
                                    :
                                    <>
                                        Train
                                    </>
                                }
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default TrainChatbotForm
