'use client'

import {
  DashboardSidebar,
  DashboardSidebarHeader,
  DashboardSidebarMain,
  DashboardSidebarNav,
  DashboardSidebarNavMain,
  DashboardSidebarNavLink,
  DashboardSidebarNavHeader,
  DashboardSidebarNavHeaderTitle,
  DashboardSidebarFooter,
} from '@/components/app/sidebar'
import { usePathname } from 'next/navigation'
import { ArchiveIcon, ChatBubbleIcon, DrawingPinIcon, HomeIcon, MixerVerticalIcon, PersonIcon, ReaderIcon, RocketIcon } from '@radix-ui/react-icons'
// import { UserDropdown } from './user-dropdown'
// import { Logo } from '@/components/logo'
import { Session } from 'next-auth'
import { UserDropdown } from './user-dropdown'
import { Logo } from '@/components/logo'
import React, { useState, useEffect } from 'react';
import Cookies from 'cookies-js'
import { ThemeProvider, useTheme } from "next-themes"
import {SwitcherTheme} from '@/components/switcher-theme'
import { toCapitalize } from '@/lib/toCapitalize'
import { useWorkflow } from '@/context/workflow.context'
import { Icon } from '@iconify/react'
import { CloseIcon } from '@/components/icons/close'
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { Switch } from '@/components/ui/switch'


export function MainSidebar() {
  const pathname = usePathname()
  const { isOpenSidebar, setIsOpenSidebar } = useWorkflow()

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const visibility = localStorage.getItem('visibility')
    if(visibility == 'true'){
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [])

  const handleVisibility = () => {
    setIsVisible(!isVisible)
    localStorage.setItem('visibility', (!isVisible).toString())
  }

  const isActive = (path: string) => {
    return pathname === path
  }
  
  return (
    <DashboardSidebar className={`${isOpenSidebar ? '' : 'hidden'} sm:flex h-full fixed w-[255px] bg-background z-40`}>
      <DashboardSidebarHeader className="flex items-center justify-between py-[18px]">
        <Logo />
        <SwitcherTheme/>
        {isOpenSidebar && 
          <span className='cursor-pointer' onClick={() => setIsOpenSidebar(!isOpenSidebar)}>
            <CloseIcon className='cursor-pointer'/>
            </span>
        }
      </DashboardSidebarHeader>
      <DashboardSidebarMain className="flex flex-col flex-grow">
        <DashboardSidebarNav>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="/app" active={isActive('/app')}>
              <HomeIcon className="w-3 h-3 mr-3" />
              Gerador de Canvas
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/app/gerador-ideias"
              active={isActive('/app/gerador-ideias')}
            >
              <ReaderIcon className="w-3 h-3 mr-3" />
              Gerador de Ideias
            </DashboardSidebarNavLink>
            {/* <DashboardSidebarNavLink
              href="/app/gerador-plano-acao"
              active={isActive('/app/gerador-plano-acao')}
            >
              <ArchiveIcon className="w-3 h-3 mr-3" />
              Gerador de plano de ação
            </DashboardSidebarNavLink> */}
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>

        <DashboardSidebarNav className="mt-auto">
          <DashboardSidebarNavHeader className='mb-4'>
              <DashboardSidebarNavHeaderTitle className='flex items-center gap-2'>
                <span className='w-full'>
                  Aparecer para consultores
                </span>
                <Switch checked={isVisible} onCheckedChange={handleVisibility}/>
              </DashboardSidebarNavHeaderTitle>
          </DashboardSidebarNavHeader>
          <DropdownMenuSeparator className='mb-4'/>
          <DashboardSidebarNavHeader>
            <DashboardSidebarNavHeaderTitle>
              Links extras
            </DashboardSidebarNavHeaderTitle>
          </DashboardSidebarNavHeader>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="https://www.instagram.com/planprobusiness/">
              Precisa de ajuda?
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>
      </DashboardSidebarMain>
      <DashboardSidebarFooter>
        <UserDropdown/>
      </DashboardSidebarFooter>
    </DashboardSidebar>
  )
}