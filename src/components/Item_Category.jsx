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
  <div onClick={handleButtonClick} className="">
  <h1 className="font-bold text-lg">{`${title}(${itemCards.length})`} </h1>
  {isOpen?(<button><FaAngleUp/></button>):<button><FaAngleDown/></button>}
  </div>
   {
    itemCards.map((item)=>(
  isOpen && (<ItemMenu {...item.card.info} {...list} key={item.card.info.id}/>)
    ))
  }
  </>
    )
}
export default Item_Category;
