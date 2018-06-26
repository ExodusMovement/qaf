import React from 'react';

import Animated from 'react-animated-transitions'; // eslint-disable-line import/no-extraneous-dependencies

import { createStore, createContainer } from '../../src';

import Btn from '../helpers/Btn';
import Input from '../helpers/Input';

class Store extends createStore() {
  state = {
    counter: 0,

    inc: () => this.setState(state => ({ counter: state.counter + 1 })),
    dec: () => this.setState(state => ({ counter: state.counter - 1 }))
  };
}

const Counter = ({ store }) => (
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
);

const AliceContainer = createContainer();
const BobContainer = createContainer();

const AliceCounter = () => (
  <AliceContainer.Subscriber store>
    {store => <Counter {...{ store }} />}
  </AliceContainer.Subscriber>
);

const BobCounter = () => (
  <BobContainer.Subscriber store>
    {store => <Counter {...{ store }} />}
  </BobContainer.Subscriber>
);

const ContainersApp = () => (
  <Animated>
    <div>
      <AliceContainer.Provider store={Store}>
        <AliceCounter />
      </AliceContainer.Provider>

      <BobContainer.Provider store={Store}>
        <BobCounter />
      </BobContainer.Provider>
    </div>
  </Animated>
);

export default ContainersApp;
