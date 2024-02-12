import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_ITEM_URL } from "../utils/constant";
import Item_Category from "./Item_Category";
import Nested_Item_Category from "./Nested_Item_Category";



const Restaurant_Menu = () => {
  const {resId}=useParams()
  const [restaurantMenuDetail,setRestaurantMenuDetail]=useState([]);
  
  useEffect(()=>{
      async function getData(){
        const response=await fetch(`${SWIGGY_ITEM_URL}${resId}`)
        const json=await response.json();
      setRestaurantMenuDetail(json?.data?.cards)
         }
         getData()
    },[resId])



    if(restaurantMenuDetail.length===0) return <h1>Data is loading...</h1>
  const  {cuisines,name,avgRatingString,areaName,sla,feeDetails,totalRatingsString,costForTwoMessage}=restaurantMenuDetail[0]?.card?.card?.info||{};
    const {cards}=restaurantMenuDetail[2]?.groupedCard?.cardGroupMap?.REGULAR || {};
 
  return ( 

 restaurantMenuDetail.length===0?(<h1>Data is loading</h1>):( <>
    <div className="restaurant-name">
    <h1>{name}</h1>
    <h2>{avgRatingString}</h2>
  </div>
  <div className="restaurant-detail">
    <ul>
      <li>{cuisines.join(",")}</li>
      <li>{`${areaName}, ${sla.lastMileTravelString}`}</li>
      <li>{totalRatingsString}</li>
      <li><ul>
        <li>{`${sla.lastMileTravelString}|  ${(feeDetails.totalFee)/100} Delivery fee wiil apply`}</li>
        </ul></li>
        <hr />
        <li>{`${sla.slaString}  ${costForTwoMessage}`}</li>
    </ul>
  </div>
  {
    cards.map((item)=>(
      item?.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"?<Item_Category {...item?.card?.card} key={item.card.card.title} />: item?.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"  && <Nested_Item_Category {...item?.card?.card} key={item.card.card.title}/>
 
    ))
  }
  </>
  )
    )
  }

export default Restaurant_Menu;
