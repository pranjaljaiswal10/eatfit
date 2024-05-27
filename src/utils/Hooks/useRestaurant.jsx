import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../constant";
const useRestaurantCard = () => {
  const [AllRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  async function getData() {
    const response = await fetch(SWIGGY_API_URL);
    const json = await response.json();
    function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        let checkData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

  
    const resData = checkJsonData(json);
    setAllRestaurant(resData);
    setFilteredRestaurant(resData)
  }
  useEffect(() => {
    getData();
  }, []);
  
  return [AllRestaurant, filteredRestaurant, setFilteredRestaurant];
};
export default useRestaurantCard;
