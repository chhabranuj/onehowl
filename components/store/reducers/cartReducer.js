import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: []
    },
    reducers: {
        addItem: (state, action) => {
            if(action.payload.quantity) {
                let count = false;
                for(let item of state.value) {
                    if(item.id == action.payload.id) {
                        count = true;
                        break
                    }
                }
                if(!count) {
                    state.value.push(action.payload)
                }
            }
            else {
                state.value.map(item => {
                    if(item.id == action.payload.id) {
                        item.quantity += 1;
                    }
                });
            }
        },
        removeItem: (state, action) => {
            state.value.map((item, index) => {
                if(item.id == action.payload.id) {
                    item.quantity > 1? item.quantity -= 1: state.value.splice(index, 1);
                }
            });
        },
        deleteItem: (state, action) => {
            state.value.map((item, index) => {
                if(item.id == action.payload.id) {
                    state.value.splice(index, 1);
                }
            });
        },
        insertCart: (state, action) => {
            state.value = action.payload.data;
        }
    }
})

export const { addItem, removeItem, deleteItem, insertCart } = cartSlice.actions;
export const cartSelector = state => state.cart.value;
export default cartSlice.reducer;