import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from './reducerSlice/userSlice';

export default configureStore({
    count:userReducer
});