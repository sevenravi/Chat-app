
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    detail:'seven ',
}
export const selectedUserSlice = createSlice({
    name: 'selectedUser',
    initialState,
    reducers: {
        setSelectedUserDetails: (state, action) => {
            state.detail= action.payload.detail
        },
    }
});

// this is for dispatch
export const { setSelectedUserDetails } = selectedUserSlice.actions;

// this is for configureStore
export default selectedUserSlice.reducer;