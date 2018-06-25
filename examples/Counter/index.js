import React from 'react';

import { createStore, Provider, Subscriber } from '../../src';

class Store extends createStore() {
  state = {
    counter: 0,

    inc: () => this.setState(state => ({ counter: state.counter + 1 })),
    dec: () => this.setState(state => ({ counter: state.counter - 1 }))
  };
}

const Counter = () => (
  <Subscriber store>
    {store => (
      <div>
        <input data-shape="small" type="text" value={store.counter} disabled />

        <div>
          <button data-shape="square" onClick={store.inc}>
            +
          </button>

          <button data-shape="square" onClick={store.dec}>
            -
          </button>
        </div>
      </div>
    )}
  </Subscriber>
);

const CounterApp = () => (
  <Provider store={Store}>
    <Counter />
  </Provider>
);

export default CounterApp;
