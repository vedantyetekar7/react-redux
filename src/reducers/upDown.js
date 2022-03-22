const initialState = 10;

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      if (state >= 1) {
        return state - action.payload;
      }
      return state;
    default:
      return state;
  }
};

export default changeTheNumber;
