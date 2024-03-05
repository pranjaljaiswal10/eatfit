import { useState } from "react";
import { Link } from "react-router-dom";
import {  searchData } from "../utils/helper";
import Restaurant_Card from "./Restaurant_Card";
import Shimmer from "./Shimmer";
import useRestaurantCard from "../utils/Hooks/useRestaurant";



const Body = () => {
 const [searchTxt,setSearchTxt]=useState("")
 const [allRestaurant,filteredRestaurant,setFilteredRestaurant]=useRestaurantCard()
console.log(filteredRestaurant)

  const handleClick=()=>{
    setFilteredRestaurant(searchData(searchTxt,allRestaurant))
  }
  const handleFilterClick=(e)=>{
    setFilteredRestaurant(filterData(allRestaurant,e.target.value))
  }
if(!allRestaurant) return null;

if(allRestaurant.length===0) return <Shimmer/>
  return (
  
 <div className="body m-8 ">
 <div className="search_input">
  <input type="text" className="mx-8 w-1/6 outline-4 rounded" value={searchTxt} onChange={(e)=>setSearchTxt(e.target.value)}/>
  <button onClick={handleClick} className="bg-lime-300 py-2 px-4 rounded-md">search</button>
  </div>
  <button onClick={handleFilterClick} className="font-semibold bg-gray-200 p-3 rounded-md">Top Rated Restaurant</button>
  <button onClick={handleFilterClick} className="font-semibold bg-gray-200 p-3 rounded-md mx-8">pure Veg</button>
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
