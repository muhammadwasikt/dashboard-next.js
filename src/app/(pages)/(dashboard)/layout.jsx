import Header from "@/app/components/Header"
import { SidebarComponent } from "@/app/components/SidebarComponent"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"



const Layout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <SidebarProvider>
          <SidebarComponent />
          <SidebarTrigger />
          <div className='w-[100%]'>
            <Header />
            {children}
          </div>
        </SidebarProvider>
      </div>
    </>
  )
}

export default Layout
