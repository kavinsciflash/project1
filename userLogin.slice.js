import { createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from 'common/constant';

export const initialUserLoginState = {
    user:[],
    status: ''
  };

export const userLoginSlice = createSlice({
    name: "userLogin",
    initialState: initialUserLoginState,
    reducers:{
        getUserFetch:(state) => {
            state.status = ApiStatus.loading;
        },
        getUserSuccess:(state, action) => {
            state.user = action.payload;
            state.status = ApiStatus.success;
        },
        getUserError:(state, action) => {
            state.user = action.payload;
            state.status = ApiStatus.error;
        },
    },
})

export const { getUserFetch, getUserSuccess, getUserError } = userLoginSlice.actions;

export default userLoginSlice.reducer;