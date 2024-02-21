import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { SWIGGY_API_URL } from "../utils/constant";
import { filteredData } from "../utils/helper";
import Restaurant_Card from "./Restaurant_Card";
import Shimmer from "./Shimmer";



const Body = () => {
 const [AllRestaurant,setAllRestaurant]=useState([]);
  const [filteredRestaurant,setFilteredRestaurant]=useState([])
  const [searchTxt,setSearchTxt]=useState("")
  
  async function getData(){
    const response=await fetch(SWIGGY_API_URL);
    const json=await response.json();
    for(let i=0;i<json?.data?.cards.length;i++)
    {
      if(json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle")
    {
      setAllRestaurant(json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestaurant(json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    }
   
  }
  useEffect(()=>{
    getData()
  },[])



  const handleClick=()=>{
    setFilteredRestaurant(filteredData(searchTxt,AllRestaurant))
  }
if(!AllRestaurant) return null;

if(AllRestaurant.length===0) return <Shimmer/>
  return (
  
 <div className="body m-8 ">
 <div className="search_input">
  <input type="text" className="mx-8 w-1/6 outline-4 rounded" value={searchTxt} onChange={(e)=>setSearchTxt(e.target.value)}/>
  <button onClick={handleClick} className="bg-lime-300 py-2 px-4 rounded-md">search</button>
  </div>
  <button className="font-semibold bg-gray-200 p-2 rounded-md">Top Rated Restaurant</button>
  <div className="flex flex-wrap justify-evenly">
  {
    filteredRestaurant.length===0?(<h1>No match found</h1>):(
      filteredRestaurant.map((item)=>(
        <Link to={`/restaurant/${item.info.id}`} key={item.info.id}>
        <Restaurant_Card {...item.info}  />
       </Link>
      ))
    )
  }
 </div>
 </div>
    )
};
export default Body;
