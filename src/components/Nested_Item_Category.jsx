import { useState } from "react";
import ItemMenu from "./ItemMenu";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";



const Nested_Item_Category=({title,categories})=>{
    const [isOpen,setIsOpen]=useState(false)
    const handleButtonClick=()=>{
        setIsOpen(!isOpen)
    }
    return(
        <>
        <h1>{title}</h1>
        {
            categories.map((item)=>(
                <div className="categories" key={item.title}>
                <h1>{`${item.title}(${item.itemCards.length})`} {isOpen?(<button onClick={handleButtonClick}><FaAngleUp/></button>): (<button onClick={handleButtonClick}><FaAngleDown/></button>)}</h1>
            {isOpen&&  <ItemCard menu={item.itemCards}/>}
                </div>
            ))
        }
        </>
    )
}
export default Nested_Item_Category;


// eslint-disable-next-line react-refresh/only-export-components
const ItemCard = ({menu}) =>{
    return(
   menu.map((item)=>(
    <ItemMenu  {...item.card.info} key={item.card.info.id} />
   ))
    )
}