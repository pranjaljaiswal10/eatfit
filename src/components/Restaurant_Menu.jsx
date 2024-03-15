import { useParams } from "react-router-dom";
import Item_Category from "./Item_Category";
import Nested_Item_Category from "./Nested_Item_Category";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/favouriteSlice";
import useRestaurantMenu from "../utils/useRestaurantMenu";





const Restaurant_Menu = () => {
  const dispatch=useDispatch()
  const {resId}=useParams()
 const favouriteItem=useSelector(store=>store.favourite.items)
  const restaurantMenuDetail=useRestaurantMenu(resId)

  



    if(restaurantMenuDetail.length===0) return <h1>Data is loading...</h1>
  const  {cuisines,name,avgRatingString,areaName,sla,feeDetails,totalRatingsString,costForTwoMessage,cloudinaryImageId,id}=restaurantMenuDetail[0]?.card?.card?.info||{} 
  const list={imageId:cloudinaryImageId,name:name,rating:avgRatingString,sla:sla,cuisines:cuisines,areaName:areaName,id}
  const handleAddFavourite=()=>{
    const found=favouriteItem.some(item=>item.name.includes(name))
   if(!found)
    dispatch(addItem(list))
  }
  const {cards}=restaurantMenuDetail[2]?.groupedCard?.cardGroupMap?.REGULAR || {};
  console.log(restaurantMenuDetail)
  return ( 
  
 restaurantMenuDetail.length===0?(<h1>Data is loading</h1>):( <div className=" w-1/2 mx-auto">
  <div className="flex  justify-between mt-16">
    <div className="space-y-0">
    <h1 className="font-bold text-2xl">{name}</h1>
      <span className="block ">{cuisines.join(",")}</span>
      <span className="block">{`${areaName}, ${sla.lastMileTravelString}`}</span>
      </div>
      <div className="mt-8 border border-gray-300 p-4 rounded-lg">
        <button className="pl-4" onClick={handleAddFavourite}><FaHeart color="red" /></button>
            <span className="block">{avgRatingString} star</span>
      <span className="text-sm">{totalRatingsString}</span>
      </div>
      </div>
        <span>{`${sla.lastMileTravelString}|₹ ${(feeDetails.totalFee)/100} Delivery fee wiil apply`}</span>
        <span className="block py-6">{`${sla.slaString}` }<span className="px-6">  {costForTwoMessage} </span></span>
    
  <div className="bg-neutral-100 p-4 ">
  {
  
    cards.map((item)=>(
      item?.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"?<Item_Category {...item?.card?.card}   key={item.card.card.title} />: item?.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"  && <Nested_Item_Category {...item?.card?.card}  key={item.card.card.title}/>
 
    ))
  }
  </div>
  </div>
  )
    )
  }

export default Restaurant_Menu;
