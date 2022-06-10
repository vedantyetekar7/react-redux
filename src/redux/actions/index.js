import { CAKE_ACTIONS_TYPES } from "./action-types";

export const AddCakeToCart = (cakeCnt) => {
  return {
    type: CAKE_ACTIONS_TYPES.ADD_CAKE_TO_CART,
    payload: cakeCnt,
  };
};

export const RemoveCakeFromCart = (cakeCnt) => {
  return {
    type: CAKE_ACTIONS_TYPES.REMOVE_CAKE_FROM_CART,
    payload: cakeCnt,
  };
};
