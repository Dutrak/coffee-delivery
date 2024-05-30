import { IProduct } from "./reducer";

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  DELETE_FROM_CART = 'DELETE_FROM_CART',
}
 
export function addToCartAction(newProduct: IProduct) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      product: newProduct,
    }
  };
}

export function removeFromCartAction(product: IProduct) { 
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      product: product,
    }
  };
}

export function deleteFromCartAction(product: IProduct) { 
  return {
    type: ActionTypes.DELETE_FROM_CART,
    payload: {
      product: product,
    }
  };
}