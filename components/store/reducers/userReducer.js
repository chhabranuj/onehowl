import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {}
    },
    reducers: {
        addItem: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { addItem } = userSlice.actions;
export const userSelector = state => state.user.value;
export default userSlice.reducer;