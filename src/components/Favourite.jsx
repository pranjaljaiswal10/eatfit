import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { removeItem } from "../utils/favouriteSlice";
import { MdDelete } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const Favourite = () => {
  const favouriteItems = useSelector((store) => store.favourite.items);
 console.log(favouriteItems)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  const handleRemoveItem = () => {
    dispatch(removeItem());
  };
  return favouriteItems.length === 0 ? (
    <div className="w-1/6 m-auto text-center my-24">
      <h1 className="font-bold text-xl p-6">Your favourite is empty</h1>
      <p className="text-neutral-600">
        Add item to the favourite restaurant list
      </p>
      <button
        onClick={handleNavigate}
        className="bg-orange-600 text-white my-8 p-3 uppercase font-semibold text-lg"
      >
        See restaurant
      </button>
    </div>
  ) : (
    <>
      <h1 className="font-bold text-2xl text-center py-8">{`Favourite (${favouriteItems.length})items`}</h1>
      <div className="flex flex-wrap ">
        {favouriteItems.map((item) => (
        <div className=" w-[240px] m-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-xl relative" key={item.id}>
      <ul>
        <li>
          <img
            src={`${IMG_CDN_URL}${item.imageId}`}
            alt={name}
            className="rounded-lg w-full "
          />
        </li>
        <li className="font-GrotBold text-lg font-semibold">{item.name}</li>
        <li className="flex items-center"><FaStar className="text-white bg-green-900 rounded-full p-0.5 text-lg mr-2"/>{`${item.rating} • ${item?.sla?.slaString}`}</li>    
        <li className="font-GrotThin text truncate text-sm  text-gray-500">{item.cuisines.join(",")}</li>
        <li className=" font-GrotThin text-sm text-gray-500">{item.areaName}</li>
      </ul>
                <button
                  onClick={handleRemoveItem}
                  className="absolute  bottom-3/4 left-3/4 top-2"
                >
                  {" "}
                  <MdDelete size={24} color="gray" />
                </button>
              
          </div>
        ))}
      </div>
    </>
  );
};

export default Favourite;
