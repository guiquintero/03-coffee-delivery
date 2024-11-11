import React, { createContext, useContext, useState, ReactNode } from "react";
import { itemCartInterface } from "../interfaces/itemCartInterface";
//import { removeFromCart, editFromCart } from '../actions/cartActions';


interface CartContextProps {
  cart: itemCartInterface[];
  addToCart: (item: itemCartInterface) => void;
  removeFromCart: (index: number) => void;
  editFromCart: (index: number, quantity: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<itemCartInterface[]>([]);

  const addToCart = (item: itemCartInterface) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(itemCartInterface => itemCartInterface.name === item.name);
      
      if (itemIndex !== -1) {
        const newCart = [...prevCart];
        newCart[itemIndex].quantity += item.quantity;
        console.log(cart[1].price);
        return newCart;
      } else {
        return [...prevCart, item];
      }
    });
  };

  const removeFromCart = (index: number) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart.splice(index, 1); // Remove 1 elemento a partir do índice `index`

      return newCart;
    });
  };

  const editFromCart = (index: number, quantity: number) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart[index].quantity = quantity;
      return newCart;
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, editFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
