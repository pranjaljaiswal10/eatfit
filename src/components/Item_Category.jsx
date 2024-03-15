

import ItemMenu from "./ItemMenu";


const Item_Category=({title,itemCards,list})=>{
  
  

    return(
  <>
  <h1 className="font-bold text-lg">{`${title}(${itemCards.length})`} </h1>
   {
    itemCards.map((item)=>(
   <ItemMenu {...item.card.info} {...list} key={item.card.info.id}/>
    ))
  }
  </>
    )
}
export default Item_Category;