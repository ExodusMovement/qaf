import React from 'react';

import { createStore, createContainer } from '../../src';

import Row from '../App/components/helpers/Row';
import Block from '../App/components/helpers/Block';
import Btn from '../App/components/helpers/Btn';

class Store extends createStore() {
  state = {
    counter: 0,

    inc: () => this.setState(state => ({ counter: state.counter + 1 })),
    dec: () => this.setState(state => ({ counter: state.counter - 1 }))
  };
}

const Counter = ({ store }) => (
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
  <Row>
    <AliceContainer.Provider store={Store}>
      <AliceCounter />
    </AliceContainer.Provider>

    <BobContainer.Provider store={Store}>
      <BobCounter />
    </BobContainer.Provider>
  </Row>
);

export default ContainersApp;
