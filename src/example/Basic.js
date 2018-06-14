/* eslint-disable react/prop-types */

import React from 'react';

import ContextStore, { inject } from '../lib';

class Store extends ContextStore {
  state = { counter: 0 };

  inc = () => this.setState(state => ({ counter: state.counter + 1 }));
  dec = () => this.setState(state => ({ counter: state.counter - 1 }));
}

const Counter = ({ store }) => (
  <div>
    <div>{store.counter}</div>

    <div>
      <button onClick={store.inc}>+</button>{' '}
      <button onClick={store.dec}>-</button>
    </div>
  </div>
);

const CounterWithStore = inject({ store: Store })(Counter);

export default () => (
  <Store>
    <CounterWithStore />
  </Store>
);
