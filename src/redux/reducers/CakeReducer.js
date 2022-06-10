import {
  ADD_CAKE_TO_CART,
  REMOVE_CAKE_FROM_CART,
} from "../actions/action-types";

const initialState = {
  numOfCakes: 10,
};

export const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAKE_TO_CART:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };

    case REMOVE_CAKE_FROM_CART:
      return {
        ...state,
        numOfCakes:
          state.numOfCakes > 0
            ? state.numOfCakes - action.payload
            : state.numOfCakes,
      };

    default:
      return state;
  }
};
