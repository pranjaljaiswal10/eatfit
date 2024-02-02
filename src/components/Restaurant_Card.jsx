import { IMG_CDN_URL } from "../utils/constant";


const Restaurant_Card = ({cloudinaryImageId,name,avgRatingString,cuisines,sla,areaName}) =>{
    return(
        <div className="restaurant_card">
       <ul>
        <li><img src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt={name} /></li>
        <li>{name}</li>
        <li>{avgRatingString}</li>
        <li>{sla.slaString}</li>
         <li>{cuisines.join(",")}</li>
        <li>{areaName}</li>
       </ul>
        </div>
    )
}
export default Restaurant_Card;