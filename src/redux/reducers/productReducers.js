import { ActionTypes } from "../constants/actionTypes";

const initalState = {
  products: [],
};
export const productReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};
