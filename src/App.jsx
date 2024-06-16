import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Favourite from "./components/Favourite";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import "./App.css";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";
import { lazy, Suspense } from "react";
import HomePageShimmer from "./components/HomePageShimmer";
import RestaurantMenuShimmer from "./components/Restaurant_Menu_Shimmer";

const Body=lazy(()=>import("./components/Body"))
const Restaurant_Menu=lazy(()=>import("./components/Restaurant_Menu"))
const Login=lazy(()=>import("./components/Login"))
const About=lazy(()=>import("./components/About"))


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
        path: "/signin",
        element: (
        <Suspense fallback={<div>Data is Loading...</div>}>
          <Login/>
        </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "/favourite",
        element: (
          <PrivateRoute>
            <Favourite />
          </PrivateRoute>
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
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={appRouter} />;
}
