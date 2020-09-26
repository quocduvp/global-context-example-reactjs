import React from "react";

export const numberInitialState = {
  number: 0,
};

export const NumberReducer = (state, action) => {
  switch (action.type) {
    case "TANG":
      return {
        ...state,
        number: state.number + 1,
      };
    case "GIAM":
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export const NumberContext = React.createContext();
