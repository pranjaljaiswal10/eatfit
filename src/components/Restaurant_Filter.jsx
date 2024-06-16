import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import {
  addSearchText,
  toggleBetween,
  toggleFastDelivery,
  toggleLessthan,
  toggleOffers,
  togglePureVeg,
  toggleRating,
} from "../utils/filterSlice";

const Restaurant_Filter = () => {
  const dispatch = useDispatch();
  const { rating, lessthan, between, fastDelivery, offers, pureVeg,searchTxt } =
  useSelector((store) => store.filter);
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

  return (
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
  );
};

export default Restaurant_Filter;
