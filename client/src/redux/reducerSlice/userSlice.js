
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment: (state, action) => {
          state.count++
        },
    }
});

// this is for dispatch
export const { increment } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;