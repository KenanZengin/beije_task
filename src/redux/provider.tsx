"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import FetchProducts from "@/components/FetchProducts";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <FetchProducts /> 
            {children}
        </Provider>
    );
}
