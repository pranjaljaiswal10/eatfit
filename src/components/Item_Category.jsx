import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import ItemMenu from "./ItemMenu";


const Item_Category=({title,itemCards})=>{
  
  const [isOpen,setIsOpen]=useState(true);
  const handleButtonClick=()=>{
    setIsOpen(!isOpen)
}
    return(
      <div className=" py-4 border-b-2 border-slate-400">
  <div onClick={handleButtonClick} className="flex justify-between cursor-pointer">
  <h1 className="font-semibold text-lg">{`${title}(${itemCards.length})`} </h1>
  {isOpen?<FaAngleUp/>:<FaAngleDown/>}
  </div>
   {
    itemCards.map((item)=>(
  isOpen && (<ItemMenu {...item.card.info}  key={item.card.info.id}/>)
    ))
  }
  </div>
    )
}
export default Item_Category;
