import { useState, useEffect } from "react";
import { SWIGGY_ITEM_URL } from "../constant";

const useRestaurantMenu = (resId) => {
  const [restaurantMenuDetail, setRestaurantMenuDetail] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(`${SWIGGY_ITEM_URL}${resId}`);
      const json = await response.json();
      setRestaurantMenuDetail(json?.data?.cards);
    }
    getData();
  }, [resId]);
  return restaurantMenuDetail;
};
export default useRestaurantMenu;
