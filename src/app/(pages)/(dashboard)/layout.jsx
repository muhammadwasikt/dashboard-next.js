'use client'
import Header from "@/app/components/Header"
import { SidebarComponent } from "@/app/components/SidebarComponent"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import SignIn from "../sign-in/page"
import { useContext } from "react"
import { UserContext } from "@/app/utils/context/UserContext"



const Layout = ({ children }) => {
  const {isUser} = useContext(UserContext)
  
  return (
    <>
      {isUser ? <div className="flex">
        <SidebarProvider>
          <SidebarComponent />
          <SidebarTrigger />
          <div className='w-[100%]'>
            <Header />
            {children}
          </div>
        </SidebarProvider>
      </div>: <SignIn />}
    </>
  )
}

export default Layout
