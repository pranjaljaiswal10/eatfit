import { IMG_CDN_URL } from "../utils/constant";
import { addItem} from "../utils/favouriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";

const Restaurant_Card = ({cloudinaryImageId,name,avgRatingString,cuisines,sla,areaName,id}) =>{
    const list={imageId:cloudinaryImageId,name:name,rating:avgRatingString,sla:sla,cuisines:cuisines,areaName:areaName,id}
    const dispatch=useDispatch()
    const favouriteItems=useSelector(store=>store.favourite.items)
    const handleAddItem=(e)=>{
        e.preventDefault()
        const found=favouriteItems.some(item=>item.name.includes(name))
        if(!found)
        dispatch(addItem(list))    
    }
    return(
        <div className=" w-[250px] m-4 p-4 bg-gray-100 hover:bg-gray-200 rounded-lg relative">
       <ul>
        <li><img src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt={name} className="rounded-lg h-[250px] " /></li>
        <li className="font-bold py-4 text-lg">{name}</li>
        <li>{avgRatingString} star</li>
        <li>{sla.slaString}</li>
         <li className="truncate overflow-hidden">{cuisines.join(",")}</li>
        <li>{areaName}</li>
        <li><button onClick={(e)=>handleAddItem(e)} className="absolute bottom-3/4 left-3/4 top-2"><FaHeart color="red" size={24}/></button></li>
       </ul>
        </div>
    )
}
export default Restaurant_Card;