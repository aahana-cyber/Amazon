// setup data layer to keep track of the basket

import React, { createContext, useContext, useReducer } from "react";

//EMPTY DATA LAYER
export const StateContext = createContext();

//BUILD A PROVIDER : it wraps the data layer around
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>  {/* initial reducer, initialState*/}
        {children}
    </StateContext.Provider>
);

//this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);   //returns the state of the data layer