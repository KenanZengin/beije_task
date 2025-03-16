import { CartItem, GroupedProducts, Product } from "@/types";

export const groupByType = (products: Product[]): GroupedProducts => {
    return products.reduce<GroupedProducts>((acc, product) => {
        if (!acc[product.type]) {
            acc[product.type] = [];
        }
        acc[product.type].push(product); 
        return acc;
    }, {});
};



export const groupByTitle = (cartItems: CartItem[]) => {
    return cartItems.reduce((acc, item) => {
        if (!acc[item.title]) {
            acc[item.title] = {
                title: item.title, 
                products: []
            };
        }

        acc[item.title].products.push(item);

        return acc;
    }, {} as Record<string, { title: string; products: CartItem[] }>);
};