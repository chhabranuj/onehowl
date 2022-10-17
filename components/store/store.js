import cartReducer from "./reducers/cartReducer";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        cart: cartReducer
    }
})