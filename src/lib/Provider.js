/* eslint-disable react/prop-types */

import React from 'react';

import { StoresProvider } from './stores';

import nestify from './utils/nestify';

const Provider = ({ stores = {}, children = null }) => {
  const Providers = () => nestify(Object.values(stores), children);

  return (
    <StoresProvider value={stores}>
      <Providers />
    </StoresProvider>
  );
};

export default Provider;
