// @flow

/* eslint-disable react/prop-types */

import React from 'react';

import compose from './utils/compose';

import { StoresConsumer } from './context';

const Subscribe = ({ children, ...props }) => (
  <StoresConsumer>
    {stores => {
      const injected = Object.keys(props).reverse();

      const consumers = Object.keys(stores)
        .filter(key => injected.includes(key))
        .map(key => stores[key].Consumer);

      const Composed = compose(...consumers);
      Composed.displayName = `subscribe(${injected.join(', ')})`;

      return (
        <Composed render={(...injectedStores) => children(...injectedStores)} />
      );
    }}
  </StoresConsumer>
);

export default Subscribe;
