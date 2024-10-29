'use client'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Trash } from 'lucide-react'
import { deleteDomain } from '@/actions/domain.actions'
import { toast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'


const DeleteDomainForm = ({ id }: { id: string }) => {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);

    const handleDelete = async () => {
        const res = await deleteDomain(id);
        if (res.success) {
            toast({ title: res.message })
            router.push("/dashboard")
        } else {
            toast({ title: res.message, variant: "destructive" })
        }
    }
    return (
        <Card className=' border'>
            <CardHeader>
                <CardTitle>Delete Domain</CardTitle>
                <CardDescription>
                    Are you sure you want to delete this domain?
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button variant={"red"}>
                            <Trash className=' mr-2 h-4 w-4' />    Delete
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </DialogDescription>

                            <div className=' flex items-center gap-2 pt-5'>
                                <Button variant={"destructive"} onClick={handleDelete}>
                                    <Trash className=' mr-2 h-4 w-4' />    Delete
                                </Button>

                                <Button variant={"ghost"} onClick={() => setOpen(false)}>Cancel</Button>
                            </div>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>


            </CardFooter>
        </Card>
    )
}

export default DeleteDomainForm
