import { IMG_CDN_URL } from "../utils/constant";


const Restaurant_Card = ({cloudinaryImageId,name,avgRatingString,cuisines,sla,areaName}) =>{
    return(
        <div className=" w-[250px] m-4 p-4 bg-gray-100 hover:bg-gray-200 rounded-lg">
       <ul>
        <li><img src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt={name} className="rounded-lg h-[250px]" /></li>
        <li className="font-bold py-4 text-lg">{name}</li>
        <li>{avgRatingString} star</li>
        <li>{sla.slaString}</li>
         <li className="truncate overflow-hidden">{cuisines.join(",")}</li>
        <li>{areaName}</li>
       </ul>
        </div>
    )
}
export default Restaurant_Card;