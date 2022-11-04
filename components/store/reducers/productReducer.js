import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        value: []
    },
    reducers: {
        addData: (state, action) => {
            state.value = action.payload.data;
        }
    }
})

export const { addData } = productSlice.actions;
export const productSelector = state => state.product.value;
export default productSlice.reducer;