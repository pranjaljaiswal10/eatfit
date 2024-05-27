import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import favouriteReducer from "./favouriteSlice";
import userReducer from "./userSlice";
import filterReducer from "./filterSlice"


 const appStore=configureStore({
    reducer:{
        cart:cartReducer,
        favourite:favouriteReducer,
        user:userReducer,
        filter:filterReducer,
    }
 });

 export default appStore;