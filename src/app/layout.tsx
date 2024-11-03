import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans, Mukta } from "next/font/google"
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { Toaster } from "@/components/ui/toaster";

// const geistSans = Lato({
//   variable: "--font-sans",
//   subsets: ['latin-ext'],
//   weight: ['300', '400', '700', '900'],
// });
// weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']

// const fontSans = Open_Sans({
//   variable: "--font-sans",
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700', '800'],
// })

// const fontSans = Ubuntu({
//   variable: "--font-sans",
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '700'],
// })

const fontSans = Mukta({
  variable: "--font-sans",
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800']
});


const fontInter = Noto_Sans({
  variable: "--font-display",
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Whizbot",
  description: "AI-powered chatbot for your website. Instantly add chatbot functionality to your website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${fontSans.variable} ${fontInter.variable} antialiased`}
        >
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
