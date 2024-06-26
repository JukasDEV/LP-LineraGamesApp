"use client"
import {
    DashboardPage,
    DashboardPageHeader,
    DashboardPageHeaderNav,
    DashboardPageHeaderTitle,
    DashboardPageMain,
  } from '@/components/app/page'
  
  import { Button } from '@/components/ui/button'
  import { PlusIcon } from '@radix-ui/react-icons'

import Link from 'next/link'

import { useEffect, useState } from 'react'
import Cookies from 'cookies-js'
import { useTheme } from 'next-themes'
import { Icon } from '@iconify/react'
import Info from '@/components/app/info'
import { ModalVideo } from '@/components/app/modal-video'


  
export default function Page() {
    
    const {setTheme} = useTheme()

    useEffect(() => {
      const themeCached = Cookies.get('theme')
      if(themeCached){
        setTheme(themeCached)
      }

      Cookies.expire('feedbacks')
    }, [])

    return (
      <DashboardPage>
        <DashboardPageHeader>
          <DashboardPageHeaderTitle>
            Gerador de Canvas
            </DashboardPageHeaderTitle>
          <DashboardPageHeaderNav>
            <Button className="font-bold">
              <Link href="/app/gerador-canvas">
                Gerar Canvas
              </Link>
            </Button>
          </DashboardPageHeaderNav>
        </DashboardPageHeader>
        <DashboardPageMain>
          <div className='w-full h-[80vh] justify-center items-center flex flex-col gap-4'>
            <Icon icon="lucide:audio-lines" className="w-[65px] h-[65px] bg-gray-100 text-black rounded-full p-2 text-[36px]" />
            <h2 className="font-bold text-[24px]">
              Gere seu Canvas com IA 
            </h2> 
            <span className="text-center leading-relaxed text-[12px] max-w-[600px]">
              Canvas IA é uma ferramenta para gerar o canvas do seu negócio com a ajuda de inteligência artificial.
            </span>
            <div className="flex items-center justify-center gap-2">
                <Button className="font-bold">
                    <Link href="/app/gerador-canvas">
                      Gerar Canvas
                    </Link>
                </Button>
            </div>
          </div>
        </DashboardPageMain>
      </DashboardPage>
    )
  }