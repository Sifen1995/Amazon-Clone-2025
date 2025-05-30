import React, { createContext, useReducer } from 'react';


export const DataContext = createContext();

export const DataProvider = ({ children,reducer,initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ basket: state.basket, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
