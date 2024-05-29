import { IMG_CDN_URL } from "../utils/constant";
import { addItem } from "../utils/favouriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaStar } from "react-icons/fa";

const Restaurant_Card = ({
  cloudinaryImageId,
  name,
  avgRatingString,
  cuisines,
  sla,
  areaName,
  id,
}) => {
  const list = {
    imageId: cloudinaryImageId,
    name: name,
    rating: avgRatingString,
    sla: sla,
    cuisines: cuisines,
    areaName: areaName,
    id,
  };
  const dispatch = useDispatch();
  const favouriteItems = useSelector((store) => store.favourite.items);
  const handleAddItem = (e) => {
    e.preventDefault();
    const found = favouriteItems.some((item) => item.name.includes(name));
    if (!found) dispatch(addItem(list));
  };
  return (
    <div className=" w-[240px] m-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-xl relative">
      <ul>
        <li>
          <img
            src={`${IMG_CDN_URL}${cloudinaryImageId}`}
            alt={name}
            className="rounded-lg w-full "
          />
        </li>
        <li className="font-GrotBold text-lg truncate font-semibold">{name}</li>
        <li className="flex items-center">
          <FaStar className="text-white bg-green-900 rounded-full p-0.5 text-lg mr-2" />
          {`${avgRatingString} • ${sla.slaString}`}
        </li>
        <li className="font-GrotThin text truncate text-sm  text-gray-500">
          {cuisines.join(",")}
        </li>
        <li className=" font-GrotThin text-sm text-gray-500">{areaName}</li>
      </ul>
      <button
        onClick={(e) => handleAddItem(e)}
        className="absolute text-red-600 text-xl bottom-3/4 left-3/4 top-2"
      >
        <FaHeart />
      </button>
    </div>
  );
};
export default Restaurant_Card;
