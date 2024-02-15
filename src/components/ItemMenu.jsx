//import { useDispatch } from "react-redux"
//import { addItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "../utils/constant"


const ItemMenu = ({name:dishName,description,imageId,price,defaultPrice}) =>{

    return(
        <>
        <h1>{dishName}</h1>
        <p>{description}</p>
         <h2>{price?price/100:defaultPrice/100}</h2>
        {imageId && <img src={`${IMG_CDN_URL}${imageId}`} alt={name} />}
        <button >add</button>
        </>
    )
}
export default ItemMenu;