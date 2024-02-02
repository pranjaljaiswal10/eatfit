import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_ITEM_URL } from "../utils/constant";


const Restaurant_Menu = () => {
  const {resId}=useParams();

   
    useEffect(()=>{
      async function getData(){
        const response=await fetch(`${SWIGGY_ITEM_URL}${resId}`)
        const json=await response.json()
        console.log(json)
         }
         getData()
    },[resId])
  return (
    <></>
  )
};

export default Restaurant_Menu;
