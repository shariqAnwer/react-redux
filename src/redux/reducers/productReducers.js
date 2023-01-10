import { ActionTypes } from "../constants/actionTypes";

const initalState = {
  products: [
    {
      id: 1,
      title: "Anwer",
      category: "Developer",
    },
  ],
};
export const productReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
