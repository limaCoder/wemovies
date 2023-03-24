import { createContext, ReactNode, useContext, useState } from "react";
import { MovieModel } from "../components/Movie/types";

interface CartContext {
  cartItems: MovieModel[];
  quantityItems: number;
  addMovieToCart: (movie: MovieModel) => void;
  removeMovieFromCart: (movie: MovieModel) => void;
  increaseQuantity: (movie: MovieModel) => void;
  decreaseQuantity: (movie: MovieModel) => void;
  finishPurchase: () => void;
}

const CartContext = createContext({} as CartContext);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<MovieModel[]>([]);

  const quantityItems = cartItems.reduce((sum, item) => {
    if (item.quantity) {
      return sum + item.quantity;
    } else {
      return sum;
    }
  }, 0);

  function addMovieToCart(movie: MovieModel) {
    const itemAlreadyExistsOnCart = cartItems.filter(
      (item) => item.id === movie.id
    );

    if (itemAlreadyExistsOnCart.length > 0) {
      const updatedItemsCart = cartItems.map((item) => {
        if (item.id === movie.id && item.quantity) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCartItems(updatedItemsCart);
    } else {
      setCartItems((stateCart) => [...stateCart, { ...movie, quantity: 1 }]);
    }
  }

  function removeMovieFromCart(movie: MovieModel) {
    const updatedItemsCart = cartItems.filter((item) => item.id !== movie.id);
    setCartItems(updatedItemsCart);
  }

  function increaseQuantity(movie: MovieModel) {
    const updatedItemsCart = cartItems.map((item) => {
      if (item.id === movie.id) {
        return { ...item, quantity: (item.quantity ? item.quantity : 0) + 1 };
      } else {
        return item;
      }
    });
    setCartItems(updatedItemsCart);
  }

  function decreaseQuantity(movie: MovieModel) {
    const updatedItemsCart = cartItems.map((item) => {
      if (item.id === movie.id) {
        if (item.quantity && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      } else {
        return item;
      }
    });
    setCartItems(updatedItemsCart);
  }

  function finishPurchase() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        quantityItems,
        addMovieToCart,
        removeMovieFromCart,
        increaseQuantity,
        decreaseQuantity,
        finishPurchase
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
