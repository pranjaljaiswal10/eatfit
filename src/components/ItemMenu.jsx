import { useDispatch, useSelector } from "react-redux";
import { addItem, increase } from "../utils/cartSlice";
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
  const handleAddItem = () => {
    const found = cartItems.some((item) => item.id === id);
    found ? dispatch(increase()) : dispatch(addItem(item));
  };

  return (
    <div className="flex justify-between py-6 border-b-2 border-slate-400">
      <div className="w-9/12 ">
        <h1 className="font-medium text-base font-ProximaNovaMed">{name}</h1>
        <h2 className="text-sm font-ProximaNovaMed">
          ₹{price ? price / 100 : defaultPrice / 100}
        </h2>
        <p className="text-gray-500 py-4 pr-4 text-sm font-ProximaNovaThin">
          {description}
        </p>
      </div>
      <div className=" w-3/12  relative ">
          {imageId && (
            <img height="144" width="156"
              src={`${ITEM_IMG_CDN_URL}${imageId}`}
              className="rounded object-cover "
              alt={name}
            />
          )}
          <button
          className="absolute bottom-4 left-1/4 font-bold text-green-600 px-3 py-1 rounded-md bg-slate-50"
            onClick={handleAddItem}
          >
            ADD
          </button>
      </div>
    </div>
  );
};
export default ItemMenu;
