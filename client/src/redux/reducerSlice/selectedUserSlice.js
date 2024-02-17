
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    detail:'seven ',
}
export const selectedUserSlice = createSlice({
    name: 'selectedUser',
    initialState,
    reducers: {
        selectedUserDetails: (state, action) => {
            const {detail} = action.payload
            return {
                detail,
            }
        },
    }
});

// this is for dispatch
export const { selectedUserDetails } = selectedUserSlice.actions;

// this is for configureStore
export default selectedUserSlice.reducer;