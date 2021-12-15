import React, { createContext, useContext, useReducer } from "react";

// Preparing the Data Layer
export const StateContext = createContext();

// Wrapping the app and providing the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);