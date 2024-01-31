
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails:{},
    token:'',
    isLoggedIn:false,
}
export const selectedUserSlice = createSlice({
    name: 'selectedUser',
    initialState,
    reducers: {
        details: (state, action) => {
            const {userDetails,token} = action.payload
            return {
                ...state,
                userDetails,
                token,
            }
        },
    }
});

// this is for dispatch
export const { Details } = selectedUserSlice.actions;

// this is for configureStore
export default selectedUserSlice.reducer;