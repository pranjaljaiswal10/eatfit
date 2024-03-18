import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../constant";
const useRestaurantCard = () => {
  const [AllRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  async function getData() {
    const response = await fetch(SWIGGY_API_URL);
    const json = await response.json();
    for (let i = 0; i < json?.data?.cards.length; i++) {
      if (
        json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.[
          "@type"
        ] ===
        "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"
      ) {
        setAllRestaurant(
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setFilteredRestaurant(
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      }
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return [AllRestaurant, filteredRestaurant, setFilteredRestaurant];
};
export default useRestaurantCard;
