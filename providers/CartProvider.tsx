"use client";

import { CartContextProvider } from "@/hooks/useCarts";

interface CartProviderProps{
    children: React.ReactNode
}

const CartProvider: React.FC<CartProviderProps> = ({children}) => {
    return (
        <CartContextProvider>
            {children}
        </CartContextProvider>
    );
}
 
export default CartProvider;

