import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
import productReducer from "./slice/productSlice";

export default configureStore({
    reducer: {
        productReducer,
        cartReducer
    }
});