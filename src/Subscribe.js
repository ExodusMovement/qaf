// @flow

/* eslint-disable react/prop-types */

import React from 'react';

import compose from './utils/compose';
import getConsumers from './utils/getConsumers';

import { StoresConsumer } from './context';

const Subscribe = ({ children, ...props }) => (
  <StoresConsumer>
    {stores => {
      const injected = Object.keys(props);

      const Composed = compose(getConsumers(stores, injected));

      Composed.displayName = `subscribe(${injected.join(', ')})`;

      return <Composed render={injectedStores => children(injectedStores)} />;
    }}
  </StoresConsumer>
);

export default Subscribe;
