"use client"
import { ProductContext } from "@/app/utils/context/ProductContext"
import { useContext } from "react"

const Product = () => {
    const {products} = useContext(ProductContext)

  return (
    <div className="p-2 w-[100%] h-[70vh] overflow-scroll grid grid-cols-3 gap-2 max-sm:grid-cols-1 max-sm:p-4">
      {
        products?.map((item) => {
            const {id , title , price ,description , image} = item
            return (
                <div key={id} className="w-[100%] bg-gray-100 p-2">
                    <img src={image} alt="image not found" className="w-[100%] h-[250px] object-fill max-sm:h-[350px]"/>
                    <h2 className="text-md font-bold text-center h-[25px] py-2 my-2 overflow-hidden">{title.toUpperCase()}</h2>
                    <p className="text-sm h-[105px] py-2 overflow-scroll ">{description}</p>
                    <p className="text-md font-bold h-[25px] py-2 my-2">$ {price}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default Product
