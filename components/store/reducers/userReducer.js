import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {}
    },
    reducers: {
        addUser: (state, action) => {
            state.value = action.payload.data;
        }
    }
})

export const { addUser } = userSlice.actions;
export const userSelector = state => state.user.value;
export default userSlice.reducer;