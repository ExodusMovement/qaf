// @flow

import React from 'react';

export const nestify = (components, children, index = 0) =>
  React.createElement(
    components[index],
    {},
    index === components.length - 1
      ? children
      : nestify(components, children, index + 1)
  );

export const StoresContext = React.createContext();

export const Provider = ({ children, ...stores }) => (
  <StoresContext.Provider value={stores}>
    {nestify(Object.values(stores), children)}
  </StoresContext.Provider>
);
