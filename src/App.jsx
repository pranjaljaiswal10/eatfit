import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import PrivateRoute from "./components/PrivateRoute";
import { lazy, Suspense } from "react";
import HomePageShimmer from "./components/HomePageShimmer";
import RestaurantMenuShimmer from "./components/Restaurant_Menu_Shimmer";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

const Body=lazy(()=>import("./components/Body"))
const Restaurant_Menu=lazy(()=>import("./components/Restaurant_Menu"))
// const Login=lazy(()=>import("./components/Login"))
// const Signup=lazy(()=>import("./components/Signup"))
const About=lazy(()=>import("./components/About"))
const Cart=lazy(()=>import("./components/Cart"))
const Favourite=lazy(()=>import("./components/Favourite"))

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element:(
          <Suspense fallback={<HomePageShimmer/>}>
          <Body/>
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Data is Loading...</div>}>
          <About/>
          </Suspense>
        ),
      },
      {
        path: "/SignIn",
        element: (
          <Login/>
        // <Suspense fallback={<div>Data is Loading...</div>}>
        // </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>Data is Loading...</div>}>
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "/favourite",
        element: (
          <Suspense fallback={<div>Data is Loading...</div>}>
          <PrivateRoute>
            <Favourite />
          </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense fallback={<RestaurantMenuShimmer/>}>
          <Restaurant_Menu/>
          </Suspense>
        )
      },
      {
        path: "/SignUp",
        element: (
         <Signup />
      //  <Suspense fallback={<div>Data is Loading...</div>}>
      //  </Suspense>  
      ),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={appRouter} />;
}
