/* eslint-disable react/prop-types */

import React from 'react';

import { StoresProvider } from './storesContext';

import nestify from './nestify';

const Provider = ({ stores = {}, children = null }) => {
  const Providers = () => nestify(Object.values(stores), children);

  return (
    <StoresProvider value={stores}>
      <Providers />
    </StoresProvider>
  );
};

export default Provider;
