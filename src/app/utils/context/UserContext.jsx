'use client'
import { auth, onAuthStateChanged } from "@/app/firebase";
import { createContext, useEffect, useState } from "react";


export const UserContext = createContext()

export const UserProvider = ({children})=>{
    const [isUser , setIsUser] = useState(false)
    const userCheck = onAuthStateChanged(auth, (user) => {
     const userEmail = localStorage.getItem('email')
     console.log(userEmail);
     
        if (user) {
          setIsUser(true)
        } else {
          setIsUser(false)
        }
      });

      useEffect(()=>{
        userCheck()
      },[isUser])
    return(
        <UserContext.Provider value={{isUser , setIsUser}}>
            {children}
        </UserContext.Provider>
    )
}