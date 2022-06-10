import { CAKE_ACTIONS_TYPES } from "../actions/action-types";

const initialState = {
  numOfCakes: 10,
};

export const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ACTIONS_TYPES.ADD_CAKE_TO_CART:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };

    case CAKE_ACTIONS_TYPES.REMOVE_CAKE_FROM_CART:
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
