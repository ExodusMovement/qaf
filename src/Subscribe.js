// @flow

import React from 'react';

import { StoresContext } from './Provider';

// composes multiple render prop based components into one
// in our case they are all instances of `<Store.Consumer />`
export const compose = (...components) => props =>
  components.reduceRight(
    (children, Component) => (...renderProps) =>
      React.createElement(Component, {}, renderProp =>
        children(...[...renderProps, renderProp])
      ),
    props.children || props.render
  )();

// allows children to subscribe to a store
export const Subscribe = ({ children, render, ...props }) => (
  <StoresContext.Consumer>
    {stores => {
      // what stores are we subscribing to?
      const injected = Object.keys(props);

      // fetch injected consumers from stores context
      const consumers = Object.keys(stores)
        // remove if not subscribed
        .filter(key => injected.includes(key))
        // access consumer
        .map(key => stores[key].Consumer);

      // compose consumers
      const Composed = compose(...consumers);

      // ensure a proper display name for debugging purposes
      Composed.displayName = `Subscribe(${injected.join(', ')})`;

      return (
        <Composed
          render={(...injectedStores) =>
            children ? children(...injectedStores) : render(...injectedStores)
          }
        />
      );
    }}
  </StoresContext.Consumer>
);

// a HOC to offer another pattern for subscribing to a store
// typically we would use it if we wanted access to the store's state or actions
// in places other than the render function of our component, e.g. lifecycle methods
export const subscribe = (...injected) => Component => {
  // construct a list of injected stores to be passed as prop to `<Subscribe />`
  const stores = injected.reduce(
    (obj, store) => ({ ...obj, [store]: true }),
    {}
  );

  return React.forwardRef((props, ref) => (
    <Subscribe
      {...stores}
      render={(...injectedStores) => (
        <Component
          // pass any custom props passed
          {...props}
          // keep original ref
          {...{ ref }}
          // pass injected stores
          {...injectedStores.reduce(
            (obj, store, index) => ({ ...obj, [injected[index]]: store }),
            {}
          )}
        />
      )}
    />
  ));
};
