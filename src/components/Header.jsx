import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constant";
import useOnline from "../utils/Hooks/useOnlineStatus";
import { useEffect } from "react";



const Header = () => {
  const isOnline=useOnline();
    const cartItem=useSelector(store=>store.cart.items)
  console.log(cartItem)
  useEffect(()=>{

  },[])
return(
  <nav className="navItem  flex justify-around shadow-lg bg-green-100">
  <div className="logo">
   <Link to="/"> <img src={LOGO_URL} className="w-1/2" alt="" /></Link>
  </div>
  <ul className="flex  items-center space-x-4">
    <li>Online Status:{isOnline? "✅" : "🔴"}</li>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/contact">Contact Us</Link></li>
    <li><Link to="/favourite">Favourite</Link></li>
    <li><Link to="/cart">{`Cart -(${cartItem.length} items)`}</Link></li>
    <li><Link to="/siginup">SignUp</Link></li>
  </ul>
  </nav>
)
}
export default Header;