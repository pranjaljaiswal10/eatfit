import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

import ItemMenu from "./ItemMenu";


const Item_Category=({title,itemCards,list})=>{
  
  const [isOpen,setIsOpen]=useState(true);
  const handleButtonClick=()=>{
    setIsOpen(!isOpen)
}
    return(
  <>
  <h1 className="font-bold text-lg">{`${title}(${itemCards.length})`}  {isOpen?<button onClick={handleButtonClick}><FaAngleUp/></button>:(<button onClick={handleButtonClick}><FaAngleDown/></button>)}</h1>
  {
    itemCards.map((item)=>(
   isOpen&&<ItemMenu {...item.card.info} {...list} key={item.card.info.id}/>
    ))
  }
  </>
    )
}
export default Item_Category;