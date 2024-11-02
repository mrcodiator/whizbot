import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { Play } from 'lucide-react'


const DemoVideoComponent = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='bg-slate-600/80 drop-shadow-lg rounded-full p-2 animate-bounce'>
                    <Button size={"icon"} className=' h-16 w-16 rounded-full'>
                        <Play className='h-6 w-6 ' />
                    </Button>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Watch Demo</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <iframe
                    width="100%"
                    height="100%"
                    className='h-[300px] w-full rounded-lg'
                    src="https://www.youtube.com/embed/eL8sX2FQlPA?si=pCMc_sb0vHzWRAht"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                >
                </iframe>
            </DialogContent>
        </Dialog>

    )
}

export default DemoVideoComponent
