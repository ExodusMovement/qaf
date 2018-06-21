import React from 'react';

import { createStore, Provider, Subscribe } from '../src';

class Store extends createStore() {
  state = { counter: 0 };

  inc = () => this.setState(state => ({ counter: state.counter + 1 }));
  dec = () => this.setState(state => ({ counter: state.counter - 1 }));
}

const Counter = () => (
  <Subscribe store>
    {store => (
      <div>
        <div>{store.counter}</div>
        <button onClick={store.inc}>+</button>{' '}
        <button onClick={store.dec}>-</button>
      </div>
    )}
  </Subscribe>
);

const App = () => (
  <Provider store={Store}>
    <Counter />
  </Provider>
);

export default App;
