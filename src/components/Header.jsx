import { NavLink, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constant";
import useOnline from "../utils/Hooks/useOnlineStatus";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const isOnline = useOnline();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.items);
  const user = useSelector((store) => store.user);
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
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-lg ">
    <nav className="  flex justify-around ">
      <div className="logo">
        <Link to="/">
          {" "}
          <img src={LOGO_URL} className="w-1/2" alt="" />
        </Link>
      </div>
  
      <button className="md:hidden "><GiHamburgerMenu/></button>
    
      <ul className="md:flex  items-center space-x-4 hidden">
        <li>Online Status:{isOnline ? "✅" : "🔴"}</li>
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
            to="/favourite"
            className={({ isActive }) => (isActive ? "text-amber-500" : "")}
          >
            Favourite
          </NavLink>
        </li>
        {user && <li>{user.name}</li>}
        <li>
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
              SignIn
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
    </header>
  );
};
export default Header;
