import { Calendar, Home, Inbox, LogOut, Search, Settings, ShoppingCart} from "lucide-react"

export const items = [
    {
      title: "Home",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Products",
      url: "/products",
      icon: ShoppingCart,
    },
    {
      title: "Inbox",
      url: "/inbox",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "/calender",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "/search",
      icon: Search,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
    {
      title: "LogOut",
      url: "/logout",
      icon: LogOut,
    },
  ]