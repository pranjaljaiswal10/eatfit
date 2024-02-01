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
    <li>Online Status:</li>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Favourite</li>
    <li>Cart</li>
    <li>SignIn</li>
  </ul>
  </nav>
  </>
)
}
export default Header;