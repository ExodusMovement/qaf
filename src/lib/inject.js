import React, { forwardRef } from 'react';

import compose from './compose';

import { StoresConsumer } from './storesContext';

export default (...injected) => Component =>
  forwardRef((props, ref) => (
    <StoresConsumer>
      {stores => {
        const consumers = Object.keys(stores).reduce(
          (obj, key) =>
            injected.includes(key)
              ? { ...obj, [key]: stores[key].Consumer }
              : obj,
          {}
        );

        const Composed = compose(consumers);

        const name = Component.displayName || Component.name;
        Composed.displayName = `inject(${injected.join(', ')})(${name})`;

        return (
          <Composed
            render={injectedStores => (
              <Component {...props} {...{ ref }} {...injectedStores} />
            )}
          />
        );
      }}
    </StoresConsumer>
  ));
