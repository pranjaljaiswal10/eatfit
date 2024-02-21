
import { useSelector } from "react-redux";

import { CART_IMAGE_ID, IMG_CDN_URL } from "../utils/constant";
import {  useNavigate } from "react-router-dom";

const Cart = () => {
   const cartItem=useSelector(store=>store.cart.items)
   const navigate=useNavigate()
   const handleClick=()=>{
  navigate("/") 
  }
  return (
   cartItem.length===0?(<div className="w-1/6 m-auto text-center my-24">
   <img src={`${IMG_CDN_URL}${CART_IMAGE_ID}`} className="opacity-100" alt="cart" />
   <h1 className="font-bold text-xl p-6">Your cart is empty</h1>
   <p className="text-neutral-600">Add Item to the cart</p>
   <button onClick={handleClick} className="bg-orange-600 text-white my-8 p-3 uppercase font-semibold text-lg">See Restaurant</button>
   </div>):(<>
   <h1 className="text-2xl font-bold">Cart</h1>
   </>)
  )
};

export default Cart;
