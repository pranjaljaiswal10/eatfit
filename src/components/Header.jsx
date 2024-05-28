import { NavLink, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constant";
import useOnline from "../utils/Hooks/useOnlineStatus";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";

const Header = () => {
  const isOnline = useOnline();
  const [isOpen,setIsOpen]=useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.items);
  const user = useSelector((store) => store.user);
 const handleToggleButton=()=>{
 setIsOpen(!isOpen)
 }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = auth.currentUser;
        dispatch(addUser({ id: uid, name: displayName, email: email }));
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);
  return (
    <header className="fixed top-0  flex items-center flex-wrap  md:justify-around justify-between  left-0 z-50 w-full bg-white shadow-lg ">
      <div className="logo">
        <Link to="/" className="flex-items-center">
          <img src={LOGO_URL} className="h-8" alt="" />
        </Link>
        </div>
        <ul className="md:flex hidden  flex-col md:flex-row  items-center md:space-x-4 space-y-2 md:space-y-0">
        <li className="hidden md:block">Online Status:{isOnline ? "✅" : "🔴"}</li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-amber-500" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-amber-500" : "")}
          >
          About
          </NavLink>
        </li>
       {user&& <li>
          <NavLink
            to="/favourite"
            className={({ isActive }) => (isActive ? "text-amber-500" : "")}
          >
            Favourites
          </NavLink> 
         </li>}
        {user && <li><HiOutlineUser/> {user.name}</li>}
        <li >
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "text-amber-500" : "")}
          ><FaShoppingCart className="inline"/> {`-(${cartItem.length} items)`}</NavLink>
        </li>
        {user ? (
          <li onClick={handleSignOut} className="cursor-pointer">
            SignOut
          </li>
        ) : (
          <li>
            <NavLink
              to="/signin"
              className={({ isActive }) => (isActive ? "text-amber-500" : "")}
            >
             <HiOutlineUser className="inline" /> SignIn
            </NavLink>
          </li>
        )}
      </ul>
      <button className="md:hidden self-center block  pr-4" onClick={handleToggleButton}>{isOpen?<AiOutlineClose/>:<GiHamburgerMenu/>}</button>
{isOpen && <div className="md:hidden block w-full md:w-auto" >
      <ul className="flex flex-col md:flex-row md:p-0 p-4 text-sm  items-center md:space-x-4 space-y-2 md:space-y-0">
        <li className="hidden md:block">Online Status:{isOnline ? "✅" : "🔴"}</li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-amber-500" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-amber-500" : "")}
          >
          About
          </NavLink>
        </li>
       {user&& <li>
          <NavLink
            to="/favourite"
            className={({ isActive }) => (isActive ? "text-amber-500" : "")}
          >
            Favourites
          </NavLink> 
         </li>}
        {user && <li><HiOutlineUser/> {user.name}</li>}
        <li >
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "text-amber-500" : "")}
          ><FaShoppingCart className="inline"/> {`-(${cartItem.length} items)`}</NavLink>
        </li>
        {user ? (
          <li onClick={handleSignOut} className="cursor-pointer">
            SignOut
          </li>
        ) : (
          <li>
            <NavLink
              to="/signin"
              className={({ isActive }) => (isActive ? "text-amber-500" : "")}
            >
             <HiOutlineUser className="inline" /> SignIn
            </NavLink>
          </li>
        )}
      </ul>
      </div>}
    </header>
  );
};
export default Header;
