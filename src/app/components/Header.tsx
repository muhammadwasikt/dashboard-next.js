"use client"

import { image1 } from "../utils/constant/imagesImport"
// import { HiBars3 } from "react-icons/hi2";
import {Avatar,AvatarFallback,AvatarImage,} from "@/components/ui/avatar"


const Header = () => {

  const userName = localStorage.getItem('userName')

  
  return (
    <div className="p-4 border bg-gray-100 flex justify-between items-center">
      <img src={image1} className="w-[50px] rounded-full h-[50px] object-cover"/>
      <h1 className="text-xl flex max-sm:flex-col text-center"> <span>Hellow 🎉 </span><span className="text-blue-400">{userName}</span></h1>
      <Avatar>
      <AvatarFallback className="bg-gray-300"></AvatarFallback>
    </Avatar>
    </div>
  )
}

export default Header
