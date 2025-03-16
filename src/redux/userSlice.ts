"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie"

const getUserFromLocalStorage = () => {
    if (typeof window !== "undefined") {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    }
    return null;
};

interface UserState {
    user: any | null;
}

const initialState: UserState = {
    user: getUserFromLocalStorage(),
};

// Redux Slice
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.user = null;
            localStorage.clear(); 
            Cookies.remove("token");
        },
    },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
