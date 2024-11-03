"use client";
import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '../ui/button';
import { Play } from 'lucide-react';

const DemoVideoComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Video details
    const videoId = "eL8sX2FQlPA";
    const videoTitle = "Product Demo Video";

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button
                    size="icon"
                    className="h-20 w-20 rounded-full border-8 border-zinc-400"
                    aria-label="Play demo video"
                >
                    <Play className="h-6 w-6" aria-hidden="true" />

                </Button>
            </DialogTrigger>
            <DialogContent
                className="max-w-lg"
                onInteractOutside={() => setIsOpen(false)}
                aria-labelledby="video-dialog-title"
            >
                <DialogHeader>
                    <DialogTitle id="video-dialog-title">{videoTitle}</DialogTitle>
                </DialogHeader>
                <div className="relative aspect-video w-full">
                    <iframe
                        width="100%"
                        height="100%"
                        className="rounded-lg"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=${isOpen ? '1' : '0'}&rel=0`}
                        title={videoTitle}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DemoVideoComponent;