import { useDispatch, useSelector } from "react-redux";

import { CART_IMAGE_ID, IMG_CDN_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { clearCart, decrease, increase, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch=useDispatch()
  const cartItem = useSelector((store) => store.cart.items);
  const navigate = useNavigate();
  const handleClearCart=()=>{
    dispatch(clearCart())
  }
  const handleIncrease=()=>{
    dispatch(increase())
  }
  const handleDecrease=(item)=>{
    item.quantity===1?dispatch(removeItem()):dispatch(decrease())
  }
  const handleClick = () => {
    navigate("/");
  };
  const cartTotal=cartItem.reduce((Total,item)=>{
    return Total+(item.price/100)*item.quantity
  },0)
  const gstCharges=35
  const totalPayment=Math.ceil(cartTotal+gstCharges)

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
    <>
      <h1 className="text-2xl font-bold">Cart</h1>
      <button onClick={handleClearCart}>clearCart</button>
      {cartItem.map((item) => (
        <div className="" key={item.id}>
          <h1>{item.dishName}</h1>
          <button onClick={()=>handleDecrease(item)}>-</button>
          <h2>{item.quantity}</h2>
          <button onClick={handleIncrease}>+</button>
          <h3>₹{Math.ceil((item.price/100)*item.quantity)}</h3>
          <h4>Bill Details</h4>
        </div>
      ))}
          <ul>
            <li>Item Total</li>
            <li>₹{Math.ceil(cartTotal)}</li>
            <li>Delivery Fee</li>
            <li>₹{}</li>
            <li>GST and Restaurant Charges</li>
            <li>₹{gstCharges}</li>
            <hr />
            <li>TO PAY</li>
            <li>₹{totalPayment}</li>
          </ul>
    </>
  );
};

export default Cart;
