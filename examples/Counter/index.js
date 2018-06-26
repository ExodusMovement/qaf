import React from 'react';

import Animated from 'react-animated-transitions'; // eslint-disable-line import/no-extraneous-dependencies

import { createStore, Provider, Subscriber } from '../../src';

import Btn from '../helpers/Btn';
import Input from '../helpers/Input';

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
        <Input value={store.counter} disabled small />

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
    <Animated>
      <div>
        <Counter />
      </div>
    </Animated>
  </Provider>
);

export default CounterApp;
