import { useDispatch, useSelector } from "react-redux"
import { addItem, increase } from "../utils/cartSlice";
import { ITEM_IMG_CDN_URL } from "../utils/constant"



const ItemMenu = ({name,description,imageId,price,defaultPrice,id}) =>{
    const item={name:name,price:price?price:defaultPrice,quantity:1,id:id}
    imageId && (item.imageId=imageId)
    const cartItems=useSelector((store)=>store.cart.items)

       const dispatch=useDispatch()
   const handleAddItem=()=>{
    const found=cartItems.some((item)=>item.id===id)
    found?dispatch(increase()):dispatch(addItem(item))
   }


    return(
       ( <div className="flex justify-between py-4 px-10 border-b-2 border-slate-400">
         <div className="w-9/12">
        <h1 className= "font-medium text-lg">{name}</h1>
         <h2>₹{price?price/100:defaultPrice/100}</h2>
        <p className="text-gray-500 py-4 pr-2">{description}</p>
        </div>
        <div className=" w-3/12" >
        <div className="absolute  ">
        <button  className=" p-2 mx-14 my-16 bg-slate-100 font-bold text-md uppercase  rounded-md cursor-pointer  text-green-600"onClick={handleAddItem}>add</button>
       </div>
        {imageId && <img src={`${ITEM_IMG_CDN_URL}${imageId}`} className="w-full rounded" alt={name} />}
        </div>
        </div>)
    )
}
export default ItemMenu;