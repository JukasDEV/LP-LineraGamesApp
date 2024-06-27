"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Logo } from "@/components/logo"
import HowItWorks from "./_components/how-it-works"
import Faq from "./_components/faq"
import Navbar from "./_components/navbar"
import Hero1 from "./_components/hero1"

import TestimonyCard from "./_components/testimony-card"
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import Script from "next/script"
import { Input } from "@/components/ui/input"
import FirstSection from "./_components/first-section"



import DietComponent from "./_components/iphone-component"

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
      <main className="flex flex-col">
        <FirstSection/>
      </main>
    </>
  )
}

