import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter,Outlet, RouterProvider } from 'react-router-dom';
import Error from './components/Error';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Favourite from './components/Favourite';
import Restaurant_Menu from './components/Restaurant_Menu';
import Login from './components/Login';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import './App.css'
import Signup from './components/Signup';





const AppLayout=()=>{
  return(
      <>
     <Provider store={appStore}>
       <Header/>        
      <Outlet/>
      <Footer/>
     </Provider>
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
      path:"/signin",
      element:<Login/>
    },{
      path:"/cart",
      element:<Cart/>
    },{
   path:"/favourite",
   element:<Favourite/>
    },{
      path:"/restaurant/:resId",
      element:
      <Restaurant_Menu/>
    },{
      path:"/signup",
      element:<Signup/>
    }
  ]
}])

export default function App(){
  return <RouterProvider router={appRouter}/>
}
