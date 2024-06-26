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

        <title>PPB</title>
      </head>
      <Navbar /> {/* Inserindo a navbar no topo da página */}
      <main className="flex flex-col bg-white">
        <DietComponent /> {/* Componente adicional exibido primeiro */}
        <section className="w-full py-20 md:py-32">
          <div className="px-4 sm:container">
            <div className="flex flex-col sm:grid items-center gap-8 lg:grid-cols-2 px-4">
              <div className="space-y-6 px-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Alavanque seu negócio com PPB!
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[400px] sm:max-w-[600px]">
                  Somos a solução definitiva para empreendedores, startups e empresas que desejam transformar ideias em planos de negócios sólidos. 
                </p>
                <div className="flex flex-col gap-3 sm:flex-row w-full">
                  <Link href="/auth/register" className="w-full">
                    <Button variant="default" className="w-full">Começar agora</Button>
                  </Link>
                  <Link href="/auth" className="w-full">
                    <Button variant="outline" className="w-full">Entrar</Button>
                  </Link>
                </div>
              </div>
              <img
                alt="Hero Image"
                className="mx-auto rounded-lg shadow-lg"
                height={400}
                src="/assets/hero1.png"
                style={{
                  aspectRatio: "500/300",
                  objectFit: "contain",
                }}
                width={600}
              />
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-8 text-center">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tighter">Funções Chave</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[700px] mx-auto">
                  Descubra como a tecnologia PPB pode ajudar a transformar sua ideia em um plano de negócios sólido.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg text-center">
                  <div className="w-full flex items-center justify-center"><PaletteIcon className="h-12 w-12 text-primary-500" /></div>
                  <h3 className="text-2xl font-bold mt-4">Gerador de Canvas com IA</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Crie o Canvas do seu negócio com nossa IA.
                  </p>
                </div>
                <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
                  
                  <div className="w-full flex items-center justify-center"><WandIcon className="h-12 w-12 text-primary-500" /></div>
                  <h3 className="text-2xl font-bold mt-4">Gerador de ideias de negócios</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Tenha ideias de negócios de acordo com o seu perfil.
                  </p>
                </div>
                <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
                  
                  <div className="w-full flex items-center justify-center"><BoltIcon className="h-12 w-12 text-primary-500" /></div>
                  <h3 className="text-2xl font-bold mt-4">Gerador de plano de ação</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Simplifique a execução do seu negócios com nosso gerador de plano de ação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-32 bg-gray-100 dark:bg-gray-900 px-4">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col sm:grid items-center gap-8 lg:grid-cols-2">
              <div className="space-y-6 text-center lg:text-left">
                <h2 className="text-4xl font-bold tracking-tighter">Preparado para elevar seu nível de empreendedor?</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[600px]">
                  Cadastre-se agora e comece a transformar suas ideias em planos de negócios sólidos.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row justify-center lg:justify-start">
                  <Link href="/auth/register" className="w-full">
                    <Button variant="default" className="w-full">Cadastrar Agora</Button>
                  </Link>
                  <Link href="/auth" className="w-full">
                    <Button variant="outline" className="w-full">Entrar</Button>
                  </Link>
                </div>
              </div>
              <img
                alt="CTA Image"
                className="mx-auto rounded-lg shadow-lg"
                height={400}
                src="/assets/hero2.jpeg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

function BoltIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}

function PaletteIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  )
}

function WandIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 4V2" />
      <path d="M15 16v-2" />
      <path d="M8 9h2" />
      <path d="M20 9h2" />
      <path d="M17.8 11.8 19 13" />
      <path d="M15 9h0" />
      <path d="M17.8 6.2 19 5" />
      <path d="m3 21 9-9" />
      <path d="M12.2 6.2 11 5" />
    </svg>
  )
}
