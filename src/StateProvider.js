import React, { createContext, useContext, useReducer } from "react";

//Prepares the Data layer/Creates it
export const StateContext = createContext();
//wraps aur app and provides Data link layer to every component of our app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
