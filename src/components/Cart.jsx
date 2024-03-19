import { useDispatch, useSelector } from "react-redux";
import {
  CART_IMAGE_ID,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
} from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { clearCart, decrease, increase, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.items);

  const navigate = useNavigate();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleIncrease = () => {
    dispatch(increase());
  };
  const handleDecrease = (item) => {
    item.quantity === 1 ? dispatch(removeItem()) : dispatch(decrease());
  };
  const handleClick = () => {
    navigate("/");
  };
  const cartTotal = cartItem.reduce((Total, item) => {
    return Total + (item.price / 100) * item.quantity;
  }, 0);
  const gstCharges = 35;
  const totalPayment = Math.ceil(cartTotal + gstCharges);

  return cartItem.length === 0 ? (
    <div className="w-1/6 m-auto text-center my-24">
      <img
        src={`${IMG_CDN_URL}${CART_IMAGE_ID}`}
        className="opacity-100"
        alt="cart"
      />
      <h1 className="font-bold text-xl p-6">Your cart is empty</h1>
      <p className="text-neutral-600">Add Item to the cart</p>
      <button
        onClick={handleClick}
        className="bg-orange-600 text-white my-8 p-3 uppercase font-semibold text-lg"
      >
        See Restaurant
      </button>
    </div>
  ) : (
    <div className="w-1/2 mx-auto my-12">
      <div className="my-4 text-center">
        <h1 className="text-2xl font-bold">My Cart</h1>
        <button
          onClick={handleClearCart}
          className="border-2 border-black px-3 py-1/2 my-4 hover:bg-gray-400 rounded"
        >
          clearCart
        </button>
      </div>
      {cartItem.map((item) => (
        <div
          className="flex justify-evenly items-center space-y-8"
          key={item.id}
        >
          <div className="w-9/12">
            <span className="font-bold pt-8">{item.name}</span>
            <div className="flex">
              <div>
                <button
                  className="rounded-full px-3 py-1 bg-gray-400"
                  onClick={() => handleDecrease(item)}
                >
                  -
                </button>
              </div>
              <h2>{item.quantity}</h2>
              <div>
                <button
                  className="rounded-full px-3 py-1 bg-gray-400"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
            </div>
            <h3>₹{Math.ceil((item.price / 100) * item.quantity)}</h3>
          </div>
          <div className="w-3/12">
            {item.imageId && (
              <img
                src={`${ITEM_IMG_CDN_URL}${item.imageId}`}
                className="rounded w-32"
                alt={item.name}
              />
            )}
          </div>
        </div>
      ))}
      <div className="my-12 ">
        <h4>Bill Details</h4>
        <table>
          <tbody>
            <tr>
              <td>Item Total</td>
              <td>₹{Math.ceil(cartTotal)}</td>
            </tr>
            <tr>
              <td>Delivery Fee</td>
              <td>₹20</td>
            </tr>
            <tr>
              <td className="pr-24">GST and Restaurant Charges</td>
              <td>₹{gstCharges}</td>
            </tr>
            <tr>
              <td>TO PAY</td>
              <td>₹{totalPayment}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
