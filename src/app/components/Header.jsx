import { image1 } from "../utils/constant/imagesImport"
import { HiBars3 } from "react-icons/hi2";


const Header = () => {
  return (
    <div className="p-4 border sticky top-0 z-10 bg-gray-100 flex justify-between items-center">
      <img src={image1} className="w-[50px] rounded-full h-[50px] object-cover"/>
      <h1 className="text-3xl">Hellow 🎉 <span className="text-blue-400">{"John Doe"}</span></h1>
      <HiBars3 className={'w-[50px] h-[50px] text-2xl p-2 bg-gray-200 rounded-full'}/>
    </div>
  )
}

export default Header
