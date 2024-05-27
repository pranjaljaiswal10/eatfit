import { useState } from "react";
import { Link } from "react-router-dom";
import { searchData } from "../utils/helper";
import Restaurant_Card from "./Restaurant_Card";
import useRestaurantCard from "../utils/Hooks/useRestaurant";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import {
  addSearchText,
  sortBy,
  toggleBetween,
  toggleFastDelivery,
  toggleLessthan,
  toggleOffers,
  togglePureVeg,
  toggleRating,
} from "../utils/filterSlice";
import useFilterData from "../utils/Hooks/useFilterData";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurant, filteredRestaurant, setFilteredRestaurant] =
    useRestaurantCard();
    console.log(allRestaurant)
  const dispatch = useDispatch();
  const sort = useSelector((store) => store.filter.sort);
  const handleSearchClick = () => {
    setFilteredRestaurant(searchData(searchTxt, allRestaurant));
  };
  const handleSearchChange = (e) => {
    setSearchTxt(e.target.value);
    dispatch(addSearchText(e.target.value));
  };
  const handleRating = () => {
    dispatch(toggleRating());
  };
  const handleLessThan = () => {
    dispatch(toggleLessthan());
  };
  const handleBetween = () => {
    dispatch(toggleBetween());
  };
  const handleSort = (e) => {
    dispatch(sortBy(e.target.value));
  };

  const handlePureVeg=()=>{
    dispatch(togglePureVeg())
  }
  const handleOffers=()=>{
    dispatch(toggleOffers())
  }
  const handleFastDelivery=()=>{
    dispatch(toggleFastDelivery())
  }
  

  if (!allRestaurant) return null;

  return (
    <div className="body mx-8 my-24 ">
      <h1 className="text-xl font-bold">Restaurants with online food delivery in Allahabad</h1>
      <div className="my-4">
        <button onClick={handleFastDelivery}>
          Fast Delivery
        </button>
        <button
          onClick={handleRating}
          className="font-semibold bg-gray-200 px-3 py-1 hover:bg-gray-400 rounded-md"
        >
          Rating 4.0+
        </button>
        <button onClick={handlePureVeg}
          className="font-semibold bg-gray-200 px-3 py-1 hover:bg-gray-400 rounded-md"
        >
        Pure Veg
        </button>
        <button onClick={handleOffers}>
          Offers
        </button>
        <button
          onClick={handleLessThan}
          className="font-semibold bg-gray-200 px-3 py-1 hover:bg-gray-400 rounded-md "
        >
          less than ₹300
        </button>
        <button
          onClick={handleBetween}
          className="font-semibold bg-gray-200 px-3 py-1 hover:bg-gray-400 rounded-md"
        >
          ₹300-₹600
        </button>
      </div>
      <div className="search_input">
        <input
          type="text"
          className="mx-8 w-1/6 outline-4 rounded"
          value={searchTxt}
          onChange={handleSearchChange}
        />
        <button
          onClick={handleSearchClick}
          className="bg-lime-300 py-2 px-4 rounded-md"
        >
          <FaSearch />
        </button>
      </div>
      <div className="flex flex-wrap justify-evenly">
        {filteredRestaurant.length === 0 ? (
          <h1>No match found</h1>
        ) : (
          filteredRestaurant.map((item) => (
            <Link to={`/restaurant/${item.info.id}`} key={item.info.id}>
              <Restaurant_Card {...item.info} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
export default Body;
