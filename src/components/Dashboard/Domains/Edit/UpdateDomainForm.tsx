"use client"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileUploaderMinimal } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';
import { Loader2, Save } from "lucide-react"
import { useUpdateDomain } from "@/hooks/use-update-domain"
import { IDomain } from "@/types/domain.types"
import { useEffect } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"


const UpdateDomainForm = ({ domain }: { domain: IDomain }) => {
    const { form, loading, onSubmit, handleFileUpload, setLoading } = useUpdateDomain({ domainId: domain.id });
    const { theme } = useTheme();

    useEffect(() => {
        form.reset({
            name: domain.name,
            url: domain.url,
            email: domain.email,
            logo: domain.logo
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [form, domain])

    return (
        <Card className=" w-full border">
            <CardHeader>
                <CardTitle>
                    Update Details
                </CardTitle>
                <CardDescription>
                    Manage and delete your domain.
                </CardDescription>
            </CardHeader>
            <CardContent>
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
                                    <FormLabel>Url</FormLabel>
                                    <FormControl>
                                        <Input placeholder="https://stripe.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="john@example.com" {...field} />
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
                                    <div className=" text-sm text-muted-foreground">
                                        {field.value && (
                                            // <p>Prev: {field.value}</p>
                                            <Image
                                                height={0}
                                                width={0}
                                                sizes="100vh"
                                                src={domain.logo}
                                                alt="logo"
                                                className="w-16 h-16 object-cover rounded-md"
                                            />
                                        )}
                                    </div>
                                    <FormControl>
                                        <Input type='hidden' {...field} />
                                    </FormControl>
                                    <FileUploaderMinimal
                                        classNameUploader={`${theme === "dark" ? "uc-dark" : "uc-light"}`}
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

                        <div>
                            <Button type="submit" disabled={loading}>
                                {loading ?
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> wait...
                                    </>
                                    :
                                    <>
                                        Save <Save className="ml-2 h-4 w-4" />
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

export default UpdateDomainForm
