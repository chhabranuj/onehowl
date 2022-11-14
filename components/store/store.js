import cartReducer from "./reducers/cartReducer";
import userReducer from "./reducers/userReducer";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";

export default configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        product: productReducer
    }
})