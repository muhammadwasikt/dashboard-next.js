"use client"
import { useContext } from "react"
import SignIn from "../(pages)/sign-in/page"
import { UserContext } from "../utils/context/UserContext"
import LayOut from "../(pages)/(dashboard)/layout"

const HomePage = () => {
  const { isUser } = useContext(UserContext)
  return (
    <div>
      {isUser ? <LayOut>
        children
      </LayOut> : <SignIn />}
    </div>
  )
}

export default HomePage
