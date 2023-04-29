import { ReactNode, createContext, useEffect, useState } from 'react';
import { ProductType } from '../@types/ProductType';

interface CartItem extends ProductType {
  amount: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
  itemAmount: number;
  totalPrice: number;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const amount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    }, 0);

    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);

    setItemAmount(amount);
    setTotalPrice(total);
  }, [cart]);

  function addToCart(product: ProductType) {
    const itemAlreadyInCart = cart.find((item) => item.id === product.id);

    if (itemAlreadyInCart) {
      const newCart = cart.map((item) => {
        if (item.id === itemAlreadyInCart.id) {
          return { ...item, amount: itemAlreadyInCart.amount + 1 };
        }

        return item;
      });

      setCart(newCart);
      return;
    }

    const newItem = { ...product, amount: 1 };
    setCart([...cart, newItem]);
  }

  function removeFromCart(id: number) {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }

  function clearCart() {
    setCart([]);
  }

  function increaseAmount(id: number) {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) addToCart(cartItem);
  }

  function decreaseAmount(id: number) {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        }

        return item;
      });
      setCart(newCart);
    }

    if (cartItem && cartItem.amount <= 1) {
      removeFromCart(id);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
