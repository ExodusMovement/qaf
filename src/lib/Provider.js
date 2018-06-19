/* eslint-disable react/prop-types */

import React from 'react';

import nestify from './nestify';

export const Stores = React.createContext();

const Provider = ({ stores = {}, children = null }) => {
  const Providers = () => nestify(Object.values(stores), children);

  return (
    <Stores.Provider value={stores}>
      <Providers />
    </Stores.Provider>
  );
};

export default Provider;
