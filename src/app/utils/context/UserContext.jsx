'use client'
import { auth, onAuthStateChanged } from "@/app/firebase";
import { createContext, useEffect, useState } from "react";


export const UserContext = createContext()

export const UserProvider = ({children})=>{
    const [isUser , setIsUser] = useState()
    const userCheck = onAuthStateChanged(auth, (user) => {     
        if (user) {
          setIsUser(user)
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