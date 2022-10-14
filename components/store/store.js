import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./reducers/itemReducer";

const store = configureStore(itemReducer);

export default store;