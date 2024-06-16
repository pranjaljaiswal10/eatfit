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
    <div className="lg:w-1/2 lg:mx-auto ">
      <div className="my-4 text-center">
        <h1 className="text-2xl font-bold">My Cart</h1>
      </div>
      {cartItem.map((item) => (
        <div
          className="flex justify-evenly items-center space-y-8 bg-slate-50"
          key={item.id}
        >
          <div className="w-9/12">
            <span className="text-base  font-semibold pt-4">{item.name}</span>
            <span className="block">₹{Math.ceil((item.price / 100) * item.quantity)}</span>
          </div>
          <div className="w-3/12 relative">
            {item.imageId && (
              <img
                src={`${ITEM_IMG_CDN_URL}${item.imageId}`}
                height="144" width="156"
                className="rounded object-cover"
                alt={item.name}
              />
            )}
               <div className="flex items-center text-green-600 bg-slate-50 font-bold text-lg rounded-md absolute bottom-2 left-1/4">
                <button
                  className=" px-3 py-1 "
                  onClick={() => handleDecrease(item)}
                >
                  -
                </button>
              <h2>{item.quantity}</h2>
            
                <button
                  className=" px-3 py-1 "
                  onClick={handleIncrease}
                >
                  +
                </button>
            </div>
          </div>
        </div>
      ))}
       <div className="space-x-3 flex justify-center items-center">
        <button  className="px-8 py-2 text-white font-semibold bg-lime-500 ">Place Order</button>
        <button onClick={handleClearCart} className="px-8 py-2 bg-red-500 border border-red-500 text-white font-semibold">Clear All</button>
       </div>
      <div className="my-12 flex flex-col ">
        <strong className="self-center">Bill Details</strong>
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
