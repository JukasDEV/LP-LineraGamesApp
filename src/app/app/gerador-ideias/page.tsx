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
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useWorkflow } from '@/context/workflow.context'
import { gerarCanvas } from '@/services/openai/gerarCanvas'
import { getUser } from '@/services/user/getUser'
import { gerarIdeia } from '@/services/openai/gerarIdeias'


  
export default function Page() {
    
    const {setTheme} = useTheme()
    const {isLoading, setIsLoading} = useWorkflow()
    const [canvas, setCanvas] = useState<string | null>(null)
    const [ideia, setIdeia] = useState<string | null>(null)
    const [isCopied, setIsCopied] = useState<boolean>(false)


    useEffect(() => {
      const themeCached = Cookies.get('theme')
      if(themeCached){
        setTheme(themeCached)
      }

      Cookies.expire('feedbacks')
    }, [])

    const handleGerarCanvas = async () => {
      setIsLoading(true)
      const userid = Cookies.get('userid')
      const user = await getUser(parseInt(userid, 10))
      if(user?.currentPlan == 'free' || user?.currentPlan == 'Free'){
        alert('Você precisa fazer um upgrade para acessar essa funcionalidade.')
        setIsLoading(false)
        //....
        return
      }
      
      if(ideia){
        //....
        await gerarIdeia(ideia).then((response) => {
          console.log(response)
          setCanvas(response)
          setIsLoading(false)
        })
      }
    }

    const copiarTexto = async () => {
      try {
          await navigator.clipboard.writeText(canvas ?? '');
          console.log('Texto copiado com sucesso!');
          setIsCopied(true)
      } catch (err) {
          console.error('Falha ao copiar o texto: ', err);
      }
  };
    return (
      <DashboardPage>
        <DashboardPageHeader>
          <DashboardPageHeaderTitle>
            Gerador de Ideias
            </DashboardPageHeaderTitle>
          <DashboardPageHeaderNav>
            <Link href="/app/plans">
                <Button variant="default">Upgrade</Button>
            </Link>
          </DashboardPageHeaderNav>
        </DashboardPageHeader>
        <DashboardPageMain>
          <div className='w-full flex flex-col items-center justify-center'>
            <div className='w-full px-4 sm:container flex flex-col gap-2'>
                <Label className='font-bold text-[14px]'>
                    Descreva sua preferencia de negócios:
                </Label>
                <Textarea placeholder='Ex: Negócio digital para ganhar com assinaturas.' value={ideia ?? ''} onChange={(e: any) => {
                    setIdeia(e.target.value)
                }} rows={5}/>
                <Button disabled={isLoading || ideia == null} className="w-full font-bold flex items-center gap-2 max-w-[500px]" onClick={handleGerarCanvas}>
                    {isLoading ? 
                    <>
                        <Icon icon="eos-icons:loading" />
                        Gerando...
                    </>
                    : 'Gerar agora!'}
                </Button>
                <Textarea rows={20} disabled value={canvas ?? ''}  className={`${canvas ? 'flex' : 'hidden'}`}/>
                <Button className={`${canvas ? 'flex' : 'hidden'} max-w-[500px]`} onClick={copiarTexto}>
                  {isCopied ? 'Copiado' : 'Copiar'}
                </Button>
            </div>
          </div>
        </DashboardPageMain>
      </DashboardPage>
    )
  }