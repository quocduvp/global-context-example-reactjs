import React, { useReducer } from "react";
import {
  NumberContext,
  NumberReducer,
  numberInitialState,
} from "./NumberContext";

export const GlobalContext = ({ children }) => {
  const [numberState, numberDispatch] = useReducer(
    NumberReducer,
    numberInitialState
  );
  return (
    <NumberContext.Provider
      value={{
        state: numberState,
        dispatch: numberDispatch,
      }}
    >
      {children}
    </NumberContext.Provider>
  );
};
