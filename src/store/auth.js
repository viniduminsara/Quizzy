import {createSlice} from "@reduxjs/toolkit";

const initialAuthState = {
    user: null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        setUser(state, action){
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout(state){
            state.user = null;
            state.isAuthenticated = false;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice;
