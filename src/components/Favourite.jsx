import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { removeItem } from "../utils/favouriteSlice";
import { MdDelete} from "react-icons/md"

const Favourite = () => {
  const favouriteItems=useSelector(store=>store.favourite.items)

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleNavigate=()=>{
    navigate("/")
  }
  const handleRemoveItem=()=>{
  dispatch(removeItem())
  }
  return (

  favouriteItems.length===0?(
  <div className="w-1/6 m-auto text-center my-24">
  <h1 className="font-bold text-xl p-6">Your favourite is empty</h1>
  <p className="text-neutral-600">Add item to the favourite restaurant list</p>
  <button onClick={handleNavigate} className="bg-orange-600 text-white my-8 p-3 uppercase font-semibold text-lg">See restaurant</button>
  </div>): (
    <>
     <h1 className="font-bold text-2xl text-center py-8">{`Favourite (${favouriteItems.length})items`}</h1>
  <div className="flex flex-wrap ">  
    {
      favouriteItems.map((item)=>(
        <div className=" w-[250px] m-4 p-4 bg-gray-100 hover:bg-gray-200 rounded-lg relative" key={item.id}>
        <ul>
         <li><img src={`${IMG_CDN_URL}${item.imageId}`} alt={name} className="rounded-lg h-[250px]" /></li>
         <li className="font-bold py-4 text-lg">{item.name}</li>
         <li>{item.rating} star</li>
         <li>{item.sla.slaString}</li>
          <li className="truncate overflow-hidden">{item.cuisines.join(",")}</li>
         <li>{item.areaName}</li>
         <li><button onClick={handleRemoveItem} className="absolute  bottom-3/4 left-3/4 top-2"> <MdDelete size={24} color="gray"/></button></li>
        </ul>
         </div>
      ))
}   
    </div>
    </>
    )

  );
};

export default Favourite;
