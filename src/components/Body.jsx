import { Link } from "react-router-dom";
import Restaurant_Card from "./Restaurant_Card";
import useRestaurantCard from "../utils/Hooks/useRestaurant";
import { useDispatch, useSelector } from "react-redux";
import {
  addSearchText,
  toggleBetween,
  toggleFastDelivery,
  toggleLessthan,
  toggleOffers,
  togglePureVeg,
  toggleRating,
} from "../utils/filterSlice";
import useFilterData from "../utils/Hooks/useFilterData";
import { AiOutlineClose } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import HomePageShimmer from "./HomePageShimmer";

const Body = () => {
  const allRestaurant =
    useRestaurantCard();
  const dispatch = useDispatch();
  const { rating, lessthan, between, fastDelivery, offers, pureVeg,searchTxt } =
  useSelector((store) => store.filter);
  const restaurant=useFilterData(allRestaurant)


  const handleSearchChange = (e) => {
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
  const handlePureVeg = () => {
    dispatch(togglePureVeg());
  };
  const handleOffers = () => {
    dispatch(toggleOffers());
  };
  const handleFastDelivery = () => {
    dispatch(toggleFastDelivery());
  };



  if (!allRestaurant) return null;

  if (allRestaurant.length === 0) return <HomePageShimmer />;

  return (
    <div className="body mx-8 my-28 ">
      <p className="text-xl font-bold ml-10 mr-10 lg:mr-0 text-center lg:text-start">
        Restaurants with online food delivery in Allahabad
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-between mx-10">
        <div className="my-6 flex lg:justify-start justify-center flex-wrap md:flex-nowrap gap-4">
          <button
            onClick={handleFastDelivery}
            className="py-2 text-sm flex items-center px-4 tracking-tight shadow border border-gray-400 rounded-full text-gray-700"
          >
            Fast Delivery{" "}
            {fastDelivery && <AiOutlineClose className="inline ml-3" />}
          </button>
          <button
            onClick={handleRating}
            className="py-2 px-4 text-sm flex items-center tracking-tight shadow border border-gray-400 rounded-full text-gray-700"
          >
            Rating 4.0+ {rating && <AiOutlineClose className="inline ml-3" />}
          </button>
          <button
            onClick={handlePureVeg}
            className="py-2 px-4 text-sm flex items-center tracking-tight shadow border border-gray-400 rounded-full text-gray-700"
          >
            Pure Veg {pureVeg && <AiOutlineClose className="inline ml-3" />}
          </button>
          <button
            onClick={handleOffers}
            className="py-2 px-4 text-sm flex items-center tracking-tight shadow border border-gray-400 rounded-full text-gray-700"
          >
            Offers {offers && <AiOutlineClose className="inline ml-3" />}
          </button>
          <button
            onClick={handleLessThan}
            className="py-2 px-4 text-sm flex items-center tracking-tight shadow border border-gray-400 rounded-full text-gray-700 "
          >
            less than ₹300{" "}
            {lessthan && <AiOutlineClose className="inline ml-3" />}
          </button>
          <button
            onClick={handleBetween}
            className="py-2 px-4 text-sm flex items-center tracking-tight shadow border border-gray-400 rounded-full text-gray-700"
          >
            ₹300-₹600 {between && <AiOutlineClose className="inline ml-3" />}
          </button>
        </div>
        <form className="w-96 border border-gray-100 relative">
          <input
            type="text"
            className="bg-gray-100 w-full py-2 px-3 text-lg  rounded"
            placeholder="Search restaurant you want...."
            value={searchTxt}
            onChange={handleSearchChange}
          />
          <button
            className="absolute right-2 top-4 text-lg"
          >
            <IoSearchOutline />
          </button>
        </form>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-items-center">
        {restaurant.length === 0 ? (
          <h1 className="lg:mt-28 mt-16 text-3xl font-bold lg:text-start text-center">No match found</h1>
        ) : (
          restaurant.map((item) => (
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
