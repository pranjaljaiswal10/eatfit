import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location=useLocation()
    const user=useSelector(store=>store.user)
  if(!user)
  {
   return <Navigate replace state={{from:location}} to="/SignIn" />
  }
  return children;
};

export default PrivateRoute;
