import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice";
const appStore=configureStore({
    reducer:{
        cart: cardReducer
    }
});
export default appStore;