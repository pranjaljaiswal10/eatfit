import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter,Outlet, RouterProvider } from 'react-router-dom';
import Error from './components/Error';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Cart from './components/Cart';
import Favourite from './components/Favourite';
import Restaurant_Menu from './components/Restaurant_Menu';
import './App.css'

const AppLayout=()=>{
  return(
      <>
      <Header/>
      <Outlet/>
      <Footer/>
      </>
  )
}

const appRouter=createBrowserRouter([{
  path:"/",
  element:<AppLayout/>,
  errorElement:<Error/>,
  children:[
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/about",
      element:<About/>
    },{
      path:"/contact",
      element:<Contact/>
    },{
      path:"/signup",
      element:<Signup/>
    },{
      path:"/cart",
      element:<Cart/>
    },{
   path:"/favourite",
   element:<Favourite/>
    },{
      path:"/restaurant/:resId",
      element:<Restaurant_Menu/>
    }
  ]
}])

export default function App(){
  return <RouterProvider router={appRouter}/>
}
