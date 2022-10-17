import { createSlice } from "@reduxjs/toolkit";

export const cartSlice= createSlice({
    name: "cart",
    initialState: {
        value: []
    },
    reducers: {
        addItem: (state, action) => {
            action.payload.quantity?
                state.value.push(action.payload):
                state.value.map(item => {
                    if(item.id == action.payload.id) {
                        item.quantity += 1;
                    }
                });
        },
        removeItem: (state, action) => {
            state.value.map((item, index) => {
                if(item.id == action.payload.id) {
                    item.quantity > 1? item.quantity -= 1: state.value.splice(index, 1);
                }
            });
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions;
export const cartSelector = state => state.cart.value;
export default cartSlice.reducer;