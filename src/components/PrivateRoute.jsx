import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location=useLocation()
    const user=useSelector(store=>store.user)
    console.log(user)
  if(!user)
  {
   return <Navigate replace state={{from:location}} to="/signin" />
  }
  return children;
};

export default PrivateRoute;
