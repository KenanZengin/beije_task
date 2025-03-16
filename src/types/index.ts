import { SnackbarCloseReason } from "@mui/material";

export interface SnackbarProps {
    snackbarStatu: boolean,
    closeSnackbar: (event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => void,
    snackbarMess: string,
    snackbarMode: "error" | "info" | "success" | "warning"
}

export interface BaseItem {
    _id: string;
    title: string;
    image: string;
}

export interface SubProduct {
    _id: string;
    name: string;
    price: number;
}

export interface Product extends BaseItem {
    type: string;
    subProducts: SubProduct[];
}

export interface Packet extends BaseItem {}

export interface ProductsResponse {
    success: boolean;
    data: {
        products: Product[];
        packets: Packet[];
    };
}

export interface GroupedProducts {
    [key: string]: Product[]
}

export interface CartItem {
    _id: string;  
    name: string;
    price: number;
    count: number;
    title: string; 
}
export interface CartState {
    items: CartItem[]; 
    totalAmount: number;
}