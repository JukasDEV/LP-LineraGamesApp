

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
 
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster";
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plan Pro Business",
  description: "Alavanque seu negócio com o PPB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        

          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
         
         
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        {children}
        <Toaster/>
        <style>
          {`
            html {
              scroll-behavior: smooth !important;
            }
          `}
        </style>
        
      </body>
    </html>
  );
}
