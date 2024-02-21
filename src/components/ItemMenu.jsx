import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "../utils/constant"




const ItemMenu = ({name:dishName,description,imageId,price,defaultPrice,id}) =>{
    const item={dishName:dishName,price:price?price:defaultPrice,quantity:1,id:id}
   const dispatch=useDispatch()
   const handleAddItem=()=>{
    dispatch(addItem(item))
   }
    return(
        <>
        <h1>{dishName}</h1>
        <p>{description}</p>
         <h2>{price?price/100:defaultPrice/100}</h2>
        {imageId && <img src={`${IMG_CDN_URL}${imageId}`} className="w-[250px]" alt={name} />}
        <button onClick={handleAddItem}>add</button>
        </>
    )
}
export default ItemMenu;