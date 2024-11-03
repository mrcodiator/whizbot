import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
    "font-medium font-sans leading-tight tracking-tight",
    {
        variants: {
            variant: {
                h1: "text-4xl md:text-5xl lg:text-6xl",
                h2: "text-3xl md:text-4xl lg:text-5xl",
                h3: "text-3xl lg:text-4xl",
                h4: "text-xl md:text-2xl lg:text-3xl",
                h5: "text-lg md:text-xl lg:text-2xl",
                h6: "text-base md:text-lg lg:text-xl",
            },
            color: {
                default: "text-primary",
                secondary: "text-secondary",
                destructive: "text-destructive",
            },
        },
        defaultVariants: {
            variant: "h1",
            color: "default",
        },
    }
);

export interface HeadingProps
    extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color">,
    VariantProps<typeof headingVariants> { }

function Heading({ className, variant, color, ...props }: HeadingProps) {
    const Tag = variant || "h1"; // Dynamically set the heading tag (h1, h2, etc.)
    return (
        <Tag className={cn(headingVariants({ variant, color }), className)} {...props} />
    );
}

export { Heading, headingVariants };
