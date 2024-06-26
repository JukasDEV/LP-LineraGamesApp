import { MainSidebar } from "./_components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { UserProvider } from "@/context/user.context"
import { useWorkflow, WorkflowProvider } from '@/context/workflow.context'
import ModalUpgrade from "./_components/modal-upgrade"
import Script from "next/script"

//...
//...meta pixel code adicionado....
export const metadata = {
  title: 'Plan Pro Business',
  description: 'Alavanque seu negócio com o PPB',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  
  return (
    <>
    <body className="grid grid-cols-1 h-screen overflow-x-hidden">
      <ThemeProvider
        attribute="class"
        enableSystem={true}
        defaultTheme="dark"
      >
        <WorkflowProvider>
          <UserProvider>
                  <>
                    <MainSidebar/>
                    <main className="sm:ml-[255px] relative">
                          {children}
                          
                    </main>
                  </>
          </UserProvider>
        </WorkflowProvider>
      </ThemeProvider>
    </body>
    
    </>
  )
}
