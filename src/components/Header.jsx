import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
return(
  <>
  <div className="logo">
    <img src={LOGO_URL} className="w-96" alt="" />
  <h1>Namaste-Food</h1>
  </div>
  <nav className="navItem">
  <ul>
    <li>{`Online Status`}</li>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/contact">Contact Us</Link></li>
    <li><Link to="/favourite">Favourite</Link></li>
    <li><Link to="/cart">Cart</Link></li>
    <li><Link to="/siginup">SignUp</Link></li>
  </ul>
  </nav>
  </>
)
}
export default Header;