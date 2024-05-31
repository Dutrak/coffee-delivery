import { createContext, useEffect, useReducer } from "react";
import { IProduct, cartReducer } from "../reducers/cart/reducer";
import { addToCartAction, deleteFromCartAction, removeFromCartAction, resetCartAction } from "../reducers/cart/action";

interface CartContextData {
  cartState: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
  deleteFromCart: (product: IProduct) => void;
  resetCart: () => void;
}

interface CartContextProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {

  // Create a cartState variable using the useReducer hook
  const [cartState, dispatch] = useReducer(cartReducer, [], (initialState) => {
    const storedStateAsJSON = localStorage.getItem('@coffe-delivery:cartState-1.0.0');

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    }

    return initialState;
  });

  // Save the cartState in the local storage
  useEffect(() => {
    localStorage.setItem('@coffe-delivery:cartState-1.0.0', JSON.stringify(cartState));
  }, [cartState]);


  // Add the addToCart function
  function addToCart(product: IProduct) {
    dispatch(addToCartAction(product));
    console.log(cartState);
  }

  // Add the removeFromCart function
  function removeFromCart(product: IProduct) {
    dispatch(removeFromCartAction(product));
  }

  // Add the deleteFromCart function
  function deleteFromCart(product: IProduct) {
    dispatch(deleteFromCartAction(product));
  }

  function resetCart() {
    dispatch(resetCartAction());
  }

  return (
    <CartContext.Provider value={{ cartState, addToCart, removeFromCart, deleteFromCart, resetCart }}>
      {children}
    </CartContext.Provider>
  )
}

