"use client";

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Packet, Product, ProductsResponse } from "@/types";

interface ProductsState {
    data: {
        products: Product[];
        packets: Packet[];
    };
    loading: boolean;
    error: string | null;
}

const initialState: ProductsState = {
    data: {
        products: [],
        packets: [],
    },
    loading: false,
    error: null,
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    try {
        const response = await axios.get("https://96318a87-0588-4da5-9843-b3d7919f1782.mock.pstmn.io/packets-and-products");
        return response.data;
    } catch (error) {
        throw new Error("Ürünler alınırken hata oluştu.");
    }
});

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<{ products: Product[]; packets: Packet[] }>) => {
            state.data.products = action.payload.products;
            state.data.packets = action.payload.packets;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<ProductsResponse>) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.loading = false;
                state.error = "Ürünler yüklenemedi.";
            });
    },
});

// Actionları dışa aktar
export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
