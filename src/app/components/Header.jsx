"use client";
import { useContext, useEffect, useState } from "react";
import { image1 } from "../utils/constant/imagesImport";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { UserDataContext } from "../utils/context/UserDataContext";
import { UserContext } from "../utils/context/UserContext";

const Header = () => {
  const [userName, setUserName] = useState()
  const { name } = useContext(UserDataContext);
  const { isUser } = useContext(UserContext)
  const userData = name?.filter(items => items?.uid === isUser?.uid)

 
  useEffect(() => {
    if (userData.length > 0) {
      setUserName(userData[0].userName.toUpperCase())
    }
  })

  return (
    <div className="p-4 border bg-gray-100 flex justify-between items-center">
      <img src={image1} className="w-[50px] rounded-full h-[50px] object-cover" alt="Profile" />
      <h1 className="text-xl flex max-sm:flex-col text-center">
        <span>Hello 🎉 </span>
        <span className="text-blue-400">{userName}</span>
      </h1>
      <Avatar>
        <AvatarFallback className="bg-gray-300"></AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Header;
