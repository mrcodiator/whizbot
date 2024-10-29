'use client';
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PlusCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CreateDomainForm from './CreateDomainForm';


const CreateDomain = () => {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline"> <PlusCircle className=' h-4 w-4 mr-2' />Create</Button>
            </DialogTrigger>
            <DialogContent>
                <div>
                    <DialogHeader>
                        <DialogTitle>Add new domain</DialogTitle>
                        <DialogDescription>
                            Add a new domain to your account.
                        </DialogDescription>
                    </DialogHeader>
                    <CreateDomainForm setOpen={setOpen} />
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default CreateDomain
