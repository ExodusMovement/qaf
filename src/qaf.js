// @flow

import React from 'react';

export const createStore = () => {
  const StoreContext = React.createContext();

  return class Store extends React.PureComponent {
    static Consumer = StoreContext.Consumer;

    render() {
      return <StoreContext.Provider {...this.props} value={this.state} />;
    }
  };
};

export const nestify = (components, children, index = 0) =>
  React.createElement(
    components[index],
    {},
    index === components.length - 1
      ? children
      : nestify(components, children, index + 1)
  );

const StoresContext = React.createContext();

export const Provider = ({ children, ...stores }) => (
  <StoresContext.Provider value={stores}>
    {nestify(Object.values(stores), children)}
  </StoresContext.Provider>
);

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
    {allStores => {
      const keys = Object.keys(props);

      const Composed = compose(
        ...Object.keys(allStores)
          .filter(key => keys.includes(key))
          .map(key => allStores[key].Consumer)
      );

      Composed.displayName = `Subscribe(${keys.join(', ')})`;

      return (
        <Composed
          render={(...stores) =>
            children ? children(...stores) : render(...stores)
          }
        />
      );
    }}
  </StoresContext.Consumer>
);

export const subscribe = (...keys) => Component =>
  React.forwardRef((props, ref) => (
    <Subscribe
      {...keys.reduce((obj, store) => ({ ...obj, [store]: true }), {})}
      render={(...stores) => (
        <Component
          {...props}
          {...{ ref }}
          {...stores.reduce(
            (obj, store, index) => ({ ...obj, [keys[index]]: store }),
            {}
          )}
        />
      )}
    />
  ));
