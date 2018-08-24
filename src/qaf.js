import React from 'react';

import { nestify, compose } from './utils';

export const createStore = () => {
  const StoreContext = React.createContext();

  class Store extends React.PureComponent {
    static Consumer = StoreContext.Consumer;

    render() {
      return <StoreContext.Provider {...this.props} value={this.state} />;
    }
  }

  return Store;
};

const createSingularContainer = () => {
  const SingularContext = React.createContext();

  class SingularStore extends React.PureComponent {
    render() {
      return <SingularContext.Provider {...this.props} value={this.state} />;
    }
  }

  const Subscriber = ({ children, render }) => (
    <SingularContext.Consumer>
      {store => (children ? children(store) : render(store))}
    </SingularContext.Consumer>
  );

  const subscribe = Component =>
    React.forwardRef((props, ref) => (
      <Subscriber
        render={store => <Component {...props} {...{ ref, store }} />}
      />
    ));

  return { SingularStore, Subscriber, subscribe };
};

export const createContainer = ({ singular = false } = {}) => {
  if (singular) return createSingularContainer();

  const ContainerContext = React.createContext();

  const Provider = ({ children, ...stores }) => (
    <ContainerContext.Provider value={stores}>
      {nestify(Object.values(stores), children)}
    </ContainerContext.Provider>
  );

  const Subscriber = ({ children, render, ...props }) => (
    <ContainerContext.Consumer>
      {allStores => {
        const keys = Object.keys(props);

        const Composed = compose(
          ...Object.keys(allStores)
            .filter(key => keys.includes(key))
            .map(key => allStores[key].Consumer)
        );

        Composed.displayName = `Subscriber(${keys.join(', ')})`;

        return (
          <Composed
            render={(...stores) =>
              children ? children(...stores) : render(...stores)
            }
          />
        );
      }}
    </ContainerContext.Consumer>
  );

  const subscribe = (...keys) => Component =>
    React.forwardRef((props, ref) => (
      <Subscriber
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

  return { Provider, Subscriber, subscribe };
};
