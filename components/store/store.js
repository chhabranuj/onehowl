import cartReducer from "./reducers/cartReducer";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";

export default configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer
    }
})