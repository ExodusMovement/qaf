import React from 'react';

import { createStore, Provider, Subscriber } from '../../src';

import Block from '../App/components/helpers/Block';
import Btn from '../App/components/helpers/Btn';

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
        <Block small>{store.counter}</Block>

        <div>
          <Btn onClick={store.inc} square>
            +
          </Btn>

          <Btn onClick={store.dec} square>
            -
          </Btn>
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
