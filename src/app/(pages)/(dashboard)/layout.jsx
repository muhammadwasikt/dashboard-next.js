import Header from "@/app/components/Header"
import SidebarComponent from "@/app/components/SidebarComponent"



const Layout = ({ children }) => {
  return (
    <>
    <Header />
    <div className="flex">
        <SidebarComponent />
          {children}
    </div>
    </>
  )
}

export default Layout
