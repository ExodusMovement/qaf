// @flow

import React from 'react';

// since every store renders a context provider, and since we can have many stores
// things can get deeply nested very quickly
// this helper takes an array of components and does the nesting for us
export const nestify = (components, children, index = 0) =>
  React.createElement(
    components[index],
    {},
    index === components.length - 1
      ? children
      : nestify(components, children, index + 1)
  );

// this context is used to track other stores (contexts)
// essentially, allowing us to have `<Provider />` and `<Subscribe />`
// we declare the store instances once in `<Provider />`
// and every `<Subscribe />` will know about them and pick its own
export const StoresContext = React.createContext();

// identical to the typical context provider component
// except it can handle many contexts together
// plus, it keeps track of those contexts
// because we would like to know about them later in `<Subscribe />`
export const Provider = ({ children, ...stores }) => (
  <StoresContext.Provider value={stores}>
    {nestify(Object.values(stores), children)}
  </StoresContext.Provider>
);
