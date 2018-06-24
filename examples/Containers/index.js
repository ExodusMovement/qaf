import React from 'react';

import { createStore, createContainer } from '../../src';

class Store extends createStore() {
  state = {
    counter: 0,

    inc: () => this.setState(state => ({ counter: state.counter + 1 })),
    dec: () => this.setState(state => ({ counter: state.counter - 1 }))
  };
}

const Counter = ({ store }) => (
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
);

const AliceContainer = createContainer();
const BobContainer = createContainer();

const AliceCounter = () => (
  <AliceContainer.Subscribe store>
    {store => <Counter {...{ store }} />}
  </AliceContainer.Subscribe>
);

const BobCounter = () => (
  <BobContainer.Subscribe store>
    {store => <Counter {...{ store }} />}
  </BobContainer.Subscribe>
);

const ContainersApp = () => (
  <div>
    <AliceContainer.Provider store={Store}>
      <AliceCounter />
    </AliceContainer.Provider>

    <BobContainer.Provider store={Store}>
      <BobCounter />
    </BobContainer.Provider>
  </div>
);

export default ContainersApp;
