import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import favouriteReducer from "./favouriteSlice";
import userReducer from "./userSlice"
 const appStore=configureStore({
    reducer:{
        cart:cartReducer,
        favourite:favouriteReducer,
        user:userReducer,
    }
 });

 export default appStore;