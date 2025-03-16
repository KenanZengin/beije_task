"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "@/types";

const initialState: CartState = {
    items: [],
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find((item) => item._id === action.payload._id);

            if (existingItem) {
                existingItem.count += 1; 
            } else {
                state.items.push({ ...action.payload, count: 1 }); 
            }

            state.totalAmount += action.payload.price; 
        },

        removeFromCart: (state, action: PayloadAction<string>) => {
            const existingItem = state.items.find((item) => item._id === action.payload);

            if (existingItem) {
                if (existingItem.count > 1) {
                    existingItem.count -= 1; 
                } else {
                    state.items = state.items.filter((item) => item._id !== action.payload);
                }

                state.totalAmount -= existingItem.price; 
            }
        },
        removeByTitle: (state, action: PayloadAction<string>) => {
            const removedItems = state.items.filter(item => item.title === action.payload);
            const totalPriceToRemove = removedItems.reduce((acc, item) => acc + item.price * item.count, 0);

            state.items = state.items.filter(item => item.title !== action.payload);

            state.totalAmount -= totalPriceToRemove;
        },
        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
        }
    },
});

export const { addToCart, removeFromCart, removeByTitle, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
