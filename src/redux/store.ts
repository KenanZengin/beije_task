import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Kullanıcı reducer'ını ekledik
import productsReducer from "./productsSlice"; // Ürün reducer'ını import et
import cartReducer from "./cartSlice"; // Ürün reducer'ını import et

export const store = configureStore({
    reducer: {
        user: userReducer,
        products: productsReducer,
        cart: cartReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
