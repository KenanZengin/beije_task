"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "@/redux/productsSlice";
import { AppDispatch } from "@/redux/store";

const FetchProducts = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return null; 
};

export default FetchProducts;
