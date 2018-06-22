// @flow

import React from 'react';

import { StoresContext } from './Provider';

export const compose = (...components) => props =>
  components.reduceRight(
    (children, Component) => (...renderProps) =>
      React.createElement(Component, {}, renderProp =>
        children(...[...renderProps, renderProp])
      ),
    props.children || props.render
  )();

export const Subscribe = ({ children, render, ...props }) => (
  <StoresContext.Consumer>
    {stores => {
      const injected = Object.keys(props);

      const Composed = compose(
        ...Object.keys(stores)
          .filter(key => injected.includes(key))
          .map(key => stores[key].Consumer)
      );

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

export const subscribe = (...injected) => Component =>
  React.forwardRef((props, ref) => (
    <Subscribe
      {...injected.reduce((obj, store) => ({ ...obj, [store]: true }), {})}
      render={(...stores) => (
        <Component
          {...props}
          {...{ ref }}
          {...stores.reduce(
            (obj, store, index) => ({ ...obj, [injected[index]]: store }),
            {}
          )}
        />
      )}
    />
  ));
