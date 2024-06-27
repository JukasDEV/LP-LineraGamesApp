"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Logo } from "@/components/logo"
import Faq from "./_components/faq"
import Navbar from "./_components/navbar"
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import Script from "next/script"
import { Input } from "@/components/ui/input"
import FirstSection from "./_components/first-section"



import DietComponent from "./_components/iphone-component"
import SecondSection from "./_components/second-section"
import ThirdSection from "./_components/third-section"
import Features from "./_components/features"
import Testimonial from "./_components/testimonials"
import Pricing from "./_components/pricing"
import Footer from "./_components/footer"

export default function Home() {
  return (
    <>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:image" content="/1.png"/>
      
        <meta property="og:image:type" content="image/png" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <meta property="og:type" content="website"/>
        <meta property="og:title" content="PPB - Alavanque seu negócio com o PPB"/>
        <meta property="og:description" content="Alavanque seu negócio com o PPB"/>

        <meta
          name="description"
          content="Alavanque seu negócio com o PPB"
        />

      <meta
        name="description"
        content="Alavanque seu negócio com o PPB"
      />

      <title>BetSinais</title>
    </head>
      <Navbar/> {/* Inserindo a navbar no topo da página */}
      <main className="flex flex-col items-center">
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <Features/>
        <div className="w-full flex items-center justify-center h-[10px]">
          <hr className="w-full h-full max-w-[720px]"/>
        </div>
        <Testimonial/>
        <div className="w-full flex items-center justify-center h-[10px]">
          <hr className="w-full h-full max-w-[720px]"/>
        </div>
        <Pricing/>
        <div className="w-full flex items-center justify-center h-[10px]">
          <hr className="w-full h-full max-w-[720px]"/>
        </div>
        <Faq/>
        <Footer/>
      </main>
    </>
  )
}

