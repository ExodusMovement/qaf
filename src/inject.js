// @flow

import React, { forwardRef } from 'react';

import compose from './utils/compose';
import getConsumers from './utils/getConsumers';

import { StoresConsumer } from './context';

export default (...injected) => Component =>
  forwardRef((props, ref) => (
    <StoresConsumer>
      {stores => {
        const Composed = compose(...getConsumers(stores, injected));

        const name = Component.displayName || Component.name;
        Composed.displayName = `inject(${injected.join(', ')})(${name})`;

        return (
          <Composed
            render={(...injectedStores) => (
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
          />
        );
      }}
    </StoresConsumer>
  ));
