"use client"
import Buton from './common/Buton'
import {BadgeAlert} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { auth, signOut } from '../firebase'


const LogOut = () => {
  const router = useRouter()

  const userSignOut = ()=>{
    signOut(auth).then(() => {
      router.push('/sign-in')
    }).catch((error) => {
      console.error(error)
    });
  }


  return (
    <div className="w-[100%] h-[70vh] flex justify-center items-center">
      <div className="max-w-[370px] w-[100%] flex flex-col gap-3 items-center shadow-2xl rounded-lg  px-2 py-8 bg-white ">
      <BadgeAlert className="text-[red] text-3xl" />
      <p className="text-[18px] ">Are you sure you want to log out?</p>
      <div  className="flex gap-3">
        <Buton click={userSignOut} clas="px-3 text-gray-50 py-1 mx-3 shadow-md bg-blue-400 active:translate-y-1 active:shadow-none rounded-lg" title='Yes' />
        <Buton click={()=>router.push('/dashboard')} clas="px-3 text-gray-50 py-1 mx-3 shadow-md bg-yellow-300 active:translate-y-1 active:shadow-none rounded-lg" title='No' />
      </div>
      </div>
    </div>
  )
}

export default LogOut
