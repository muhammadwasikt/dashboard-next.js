import Header from "@/app/components/Header.jsx"
import { SidebarComponent } from "@/app/components/SidebarComponent"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"



const LayOut = ({ children }) => {
  
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

export default LayOut
