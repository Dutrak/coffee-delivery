import { ActionTypes } from "./action";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
  quantity: number | 0;
}

interface IAction  {
  type: ActionTypes;
  payload: {
    product: IProduct,
  }
}

export function cartReducer(state: IProduct[], action: IAction) {

  // Create a variable to store the product that is already in the cart
  const productAlreadyInCart = state.find(product => product.id === action.payload.product.id);

  switch (action.type) {
      
    // Add a case to add a product to the cart
    case ActionTypes.ADD_TO_CART:
      
      // If there is no product, return the current state
      if (!action.payload.product) return state;

      // If the product is already in the cart, increase the quantity without adding a new product
      if (productAlreadyInCart) {
        return state.map(product => {
          if (product.id === action.payload.product.id) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        })
      }

      // If the product is not in the cart, add it
      return [...state, { ...action.payload.product, quantity: 1 }];

    // Add a case to remove a product from the cart
    case ActionTypes.REMOVE_FROM_CART:
      // If there is no product ID or the product is not in the cart, return the current state
      if (!action.payload.product.id || !productAlreadyInCart) return state;

      // If the product is in the cart, remove it
      if (productAlreadyInCart.quantity === 1) { 
        return state.filter(product => product.id !== action.payload.product.id);
      }

      // Decrease product quantity if quantity is greater than 0
      return state.map(product => {
        if (product.id === action.payload.product.id && product.quantity > 0) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      })
    
    // Add a case to delete a product from the cart
    case ActionTypes.DELETE_FROM_CART:

      // If there is no product ID or the product is not in the cart, return the current state
      if (!action.payload.product.id || !productAlreadyInCart) return state;

      // If the product is in the cart, remove it
      return state.filter(product => product.id !== action.payload.product.id);
    
    default:
      return state;
    }
}