import { useState } from "react";
import ItemMenu from "./ItemMenu";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";


const ItemList = ({title,itemCards}) => {
  const [isOpen,setIsOpen]=useState(false)
  const handleAccordion=()=>{
    setIsOpen(!isOpen)
  }
    return (
    <>
    <div onClick={handleAccordion} className="flex justify-between cursor-pointer">
      <h1>{title}</h1>
     {isOpen? <FaAngleUp/>:<FaAngleDown/>}
      </div>
      {
        itemCards.map((item)=>(
          isOpen&& <ItemMenu  {...item.card.info} key={item.card.info.id}/>
        ))
      }
    </>
  );
};

export default ItemList;
