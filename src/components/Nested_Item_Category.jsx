import { useState } from "react";
import ItemMenu from "./ItemMenu";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";



const Nested_Item_Category=({title,categories})=>{
    const [isOpen,setIsOpen]=useState(true)
    const handleButtonClick=()=>{
        setIsOpen(!isOpen)
    }
    return(
        <>
        <h1 className="font-bold text-lg">{title}</h1>
        {
            categories.map((item)=>(
                <div className="categories" key={item.title}>
                <h1 className="font-semibold">{`${item.title}(${item.itemCards.length})`} 
                {isOpen?(<button onClick={handleButtonClick}><FaAngleUp/></button>): (<button onClick={handleButtonClick}><FaAngleDown/></button>)}</h1>
            {item.itemCards.map((item)=>(
    <ItemMenu  {...item.card.info} key={item.card.info.id} />
   ))}
                </div>
            ))
        }
        </>
    )
}
export default Nested_Item_Category;


