import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../utils/cartSlice";
import { ITEM_IMG_CDN_URL } from "../utils/constant";

const ItemMenu = ({ name, description, imageId, price, defaultPrice, id }) => {
  const item = {
    name: name,
    price: price ? price : defaultPrice,
    quantity: 1,
    id: id,
  };
  imageId && (item.imageId = imageId);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const foundItems = cartItems.find((item) => item.id === id);
  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(id));
  };
  const handleDecreaseQuantity = () => {
    foundItems.quantity > 1
      ? dispatch(decreaseQuantity(id))
      : dispatch(removeItem());
  };

  return (
    <div className="flex justify-between py-6 border-b-2 border-slate-400">
      <div className="w-9/12 ">
        <h1 className="font-medium text-base font-ProximaNovaMed">{name}</h1>
        <h2 className="text-sm font-ProximaNovaMed">
          ₹{price ? price / 100 : defaultPrice / 100}
        </h2>
        <p className="text-gray-500 py-4 pr-4 text-sm line-clamp-2 md:line-clamp-none font-ProximaNovaThin">
          {description}
        </p>
      </div>
      <div className="w-[118px] h-24  relative ">
        {imageId && (
          <img
          
            src={`${ITEM_IMG_CDN_URL}${imageId}`}
            className="rounded-md object-cover md:object-none w-[118px] h-full"
            alt={name}
          />
        )}
        {foundItems === undefined ? (
          <button
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-[1] w-24 h-9 shadow-md shadow-color-7 bg-white text-center inline-block rounded text-[#60b246] text-sm font-ProximaNovaSemiBold uppercase"
            onClick={handleAddItem}
          >
            ADD
          </button>
        ) : (
          <>
            <button
              className="absolute -bottom-2 left-10 font-bold text-green-600 bg-slate-200 px-3 py-1 "
              onClick={()=>handleDecreaseQuantity(id)}
            >
              -
            </button>
            <span className="absolute -bottom-2 left-16 font-bold text-green-600 bg-slate-200 px-2 py-1">
              {foundItems.quantity}
            </span>
            <button
              className="absolute -bottom-2 left-20 font-bold text-green-600 bg-slate-200 px-3 py-1"
              onClick={()=>handleIncreaseQuantity(id)}
            >
              +
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemMenu;
