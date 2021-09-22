import React from "react";
import { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const clearCart = () => setCart([]);
    const isInCart = id => cart.some(item => item.id === id);
    const isInCart2 = size => cart.some(item => item.size === size);

    console.log("hola1", isInCart())
    console.log("hola2", isInCart2())

    const addToCart = (item, quantity, size) => {
        console.log("item: ", item)
        console.log("qty: ", quantity)
        console.log("size: ", size)
        if (isInCart(item.id) && isInCart2(item.size)) {
            const newCart = cart.map(cartElement => {
                if (cartElement.id === item.id) {
                    return { ...cartElement, quantity: cartElement.quantity + quantity, size: cartElement.size }
                } else return cartElement;
            })
            setCart(newCart);
        } else {
            setCart(prev => [...prev, { ...item, quantity, size }]);
        }
    };

    const removeProduct = (item) => {
        const newCart = cart.filter(elem => elem.id !== item.id)
        setCart(newCart)
    }

    return <CartContext.Provider value={{ cart, setCart, clearCart, addToCart, removeProduct }}>
        {children}
    </CartContext.Provider>
}