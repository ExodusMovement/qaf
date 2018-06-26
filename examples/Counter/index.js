import React from 'react';

import Animated from 'react-animated-transitions'; // eslint-disable-line import/no-extraneous-dependencies

import { createStore, Provider, Subscriber } from '../../src';

import Block from '../helpers/Block';
import Btn from '../helpers/Btn';

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
    <Animated>
      <div>
        <Counter />
      </div>
    </Animated>
  </Provider>
);

export default CounterApp;
