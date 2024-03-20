import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constant";
import useOnline from "../utils/Hooks/useOnlineStatus";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";




const Header = () => {
  const isOnline=useOnline();
  const navigate=useNavigate()
  const dispatch=useDispatch()
    const cartItem=useSelector(store=>store.cart.items)
  console.log(cartItem)
  const user=useSelector((store)=>store.user)
  const handleSignOut=()=>{
    signOut(auth).then(()=>{
    }).catch(()=>{
    navigate("/error")
    })
  }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(user)=>{
    if(user){
    const {uid,displayName,email}=auth.currentUser
    dispatch(addUser({id:uid,name:displayName,email:email}))
    }else{
      dispatch(removeUser())
      navigate("/")
    }
    })
  return ()=>unsubscribe()
  },[dispatch,navigate])
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
    {user&&<li>{user.name}</li>}
    {user&&<li onClick={handleSignOut}>SignOut</li>}
    <li><Link to="/cart">{`Cart -(${cartItem.length} items)`}</Link></li>
    <li><Link to="/signin">SignIn</Link></li>
  </ul>
  </nav>
)
}
export default Header;
