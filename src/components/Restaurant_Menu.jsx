import { useLocation, useParams } from "react-router-dom";
import Item_Category from "./Item_Category";
import Nested_Item_Category from "./Nested_Item_Category";
import { FaHeart, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/favouriteSlice";
import useRestaurantMenu from "../utils/Hooks/useRestaurantMenu";
import {
  NESTED_MENU_ITEM_TYPE_KEY,
  NORMAL_MENU_ITEM_TYPE_KEY,
} from "../utils/constant";
import RestaurantMenuShimmer from "./Restaurant_Menu_Shimmer";
import { useEffect } from "react";


const Restaurant_Menu = () => {
  const dispatch = useDispatch();
  const { resId } = useParams();
  const favouriteItem = useSelector((store) => store.favourite.items);
  const restaurantMenuDetail = useRestaurantMenu(resId);
  const {pathname}=useLocation()
  const {
    cuisines,
    name,
    avgRatingString,
    areaName,
    sla,
    totalRatingsString,
    costForTwoMessage,
    cloudinaryImageId,
    id,
  } =
    restaurantMenuDetail[0]?.card?.card?.info ||
    restaurantMenuDetail[2]?.card?.card?.info ||
    {};

  const list = {
    imageId: cloudinaryImageId,
    name: name,
    rating: avgRatingString,
    sla:sla,
    cuisines: cuisines,
    areaName: areaName,
    id,
  };
  const handleAddFavourite = () => {
    const found = favouriteItem.some((item) => item.name.includes(name));
    if (!found) dispatch(addItem(list));
  };
  const { cards } =
    restaurantMenuDetail[2]?.groupedCard?.cardGroupMap?.REGULAR ||
    restaurantMenuDetail[4]?.groupedCard?.cardGroupMap?.REGULAR ||
    {};
  useEffect(()=>{
   window.scrollTo(0,0)
  },[pathname])

  return  restaurantMenuDetail.length===0?( <RestaurantMenuShimmer/>)
  : (
    <div className=" lg:w-1/2 lg:mx-auto">
      <div className="mt-24">
        <p className="my-4 text-sm text-gray-400 font-semibold">{`Home > Allahabad > ${name}`}</p>
        <div className="flex  justify-between">
          <div className="space-y-0">
            <h1 className="font-bold text-2xl">{name}</h1>
            <span className="block ">{cuisines.join(",")}</span>
            <span className="block">{`${areaName}, ${sla.lastMileTravelString}`}</span>
          </div>
          <div className=" border-2 border-gray-400 p-4 rounded-lg">
            <button className="pl-4" onClick={handleAddFavourite}>
              <FaHeart color="red" />
            </button>
            <span className="flex items-center">
              <FaStar className="text-white bg-green-900 rounded-full p-0.5 text-lg mr-2" />
              {`${avgRatingString}`}
            </span>
            <span className="text-sm">{totalRatingsString}</span>
          </div>
        </div>
        <span className="block py-6 ">
          {`${sla.slaString}`}
          |<span> {costForTwoMessage} </span>
        </span>
      </div>
      <div className="bg-neutral-100 p-4 ">
        {cards.map((item) =>
          item?.card?.card?.["@type"] === NORMAL_MENU_ITEM_TYPE_KEY ? (
            <Item_Category {...item?.card?.card} key={item.card.card.title} />
          ) : (
            item?.card?.card?.["@type"] === NESTED_MENU_ITEM_TYPE_KEY && (
              <Nested_Item_Category
                {...item?.card?.card}
                key={item.card.card.title}
              />
            )
          )
        )}
      </div>
    </div>
  );
};

export default Restaurant_Menu;
