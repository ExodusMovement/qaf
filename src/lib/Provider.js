/* eslint-disable react/prop-types */

import React from 'react';

import { StoresProvider } from './context';

import nestify from './utils/nestify';

const Provider = ({ children, ...stores }) => (
  <StoresProvider value={stores}>
    {nestify(Object.values(stores), children)}
  </StoresProvider>
);

export default Provider;
