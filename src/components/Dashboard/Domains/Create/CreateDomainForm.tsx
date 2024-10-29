'use client';
import React from 'react'
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FileUploaderMinimal } from '@uploadcare/react-uploader/next';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import '@uploadcare/react-uploader/core.css';
import { useCreateDomain } from '@/hooks/use-create-domain';
import { useTheme } from 'next-themes';


const CreateDomainForm = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const { form, loading, onSubmit, handleFileUpload, setLoading } = useCreateDomain({ setOpen });
    const { theme, systemTheme } = useTheme()

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="stripe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>URL</FormLabel>
                            <FormControl>
                                <Input placeholder="https://stripe.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="logo"
                    render={({ field }) => (
                        <FormItem className=' flex flex-col gap-2'>
                            <FormLabel>Logo</FormLabel>
                            <FormControl>
                                <Input type='hidden' {...field} />
                            </FormControl>
                            <FileUploaderMinimal
                                classNameUploader={`${theme === "dark" || systemTheme === "dark" ? "uc-dark uc-gray" : "uc-light uc-gray"}`}
                                pubkey="9321ac2920b8db0ef8b3"
                                multiple={false}
                                imgOnly={true}
                                onCommonUploadStart={() => setLoading(true)}
                                onFileUploadSuccess={() => setLoading(false)}
                                onFileUploadFailed={() => setLoading(false)}
                                onChange={(fileInfo) => handleFileUpload(fileInfo?.allEntries[0]?.cdnUrl || "")}
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" disabled={loading}>
                    {loading ?
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> wait...
                        </>
                        :
                        <>
                            Create
                        </>
                    }
                </Button>
            </form>
        </Form>
    )
}

export default CreateDomainForm
