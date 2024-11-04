'use client'
import { auth, onAuthStateChanged } from "@/app/firebase";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation"


export const UserContext = createContext()

export const UserProvider = ({children})=>{
    const [isUser , setIsUser] = useState(false)
    const router = useRouter()
    const userCheck = onAuthStateChanged(auth, (user) => {     
        if (user) {
          router.push('/dashboard')
          setIsUser(true)
        } else {
          router.push('/sign-in')
          setIsUser(false)
        }
      });

      useEffect(()=>{
        userCheck()
      },[])
    return(
        <UserContext.Provider value={{isUser , setIsUser}}>
            {children}
        </UserContext.Provider>
    )
}