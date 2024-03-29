import { useState } from "react";
import { Link } from "react-router-dom";
import { searchData } from "../utils/helper";
import Restaurant_Card from "./Restaurant_Card";
import Shimmer from "./Shimmer";
import useRestaurantCard from "../utils/Hooks/useRestaurant";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import {
  addSearchText,
  sortBy,
  toggleBetween,
  toggleLessthan,
  toggleRating,
} from "../utils/filterSlice";
import useFilterData from "../utils/Hooks/useFilterData";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurant, filteredRestaurant, setFilteredRestaurant] =
    useRestaurantCard();
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

  const filterData=useFilterData(allRestaurant);
  console.log(filterData)
  if (!allRestaurant) return null;

  if (allRestaurant.length === 0) return <Shimmer />;
  return (
    <div className="body m-8 ">
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
      <div className="my-4">
        <button
          onClick={handleRating}
          className="font-semibold bg-gray-200 px-3 py-1 hover:bg-gray-400 rounded-md"
        >
          Top Rated Restaurant
        </button>

        <button
          onClick={handleLessThan}
          className="font-semibold bg-gray-200 px-3 py-1 hover:bg-gray-400 rounded-md mx-8"
        >
          less than ₹300
        </button>
        <button
          onClick={handleBetween}
          className="font-semibold bg-gray-200 px-3 py-1 hover:bg-gray-400 rounded-md"
        >
          ₹300-₹600
        </button>
        <label>
          <input
            type="radio"
            checked={sort === "lowtohigh"}
            value="lowtohigh"
            onChange={handleSort}
          />
          lowtohigh
        </label>
        <label>
          <input
            type="radio"
            checked={sort === "hightolow"}
            value="hightolow"
            onChange={handleSort}
          />
          hightolow
        </label>
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
