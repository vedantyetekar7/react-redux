import { ADD_CAKE_TO_CART, REMOVE_CAKE_FROM_CART } from "./action-types";

export const AddCakeToCart = (cakeCnt) => {
  return {
    type: ADD_CAKE_TO_CART,
    payload: cakeCnt,
  };
};

export const RemoveCakeFromCart = (cakeCnt) => {
  return {
    type: REMOVE_CAKE_FROM_CART,
    payload: cakeCnt,
  };
};
