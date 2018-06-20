// @flow

import React, { forwardRef } from 'react';

import Subscribe from './Subscribe';

export default (...injected) => Component =>
  forwardRef((props, ref) => (
    <Subscribe
      {...injected.reduce((obj, store) => ({ ...obj, [store]: true }), {})}>
      {(...injectedStores) => (
        <Component
          {...props}
          {...{ ref }}
          {...injectedStores.reduce(
            (obj, store, index) => ({
              ...obj,
              [injected[index]]: store
            }),
            {}
          )}
        />
      )}
    </Subscribe>
  ));
