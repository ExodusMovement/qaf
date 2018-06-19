# Qaf

[![npm version](https://badge.fury.io/js/qaf.svg)](https://badge.fury.io/js/qaf) [![Build Status](https://travis-ci.org/sonaye/qaf.svg?branch=master)](https://travis-ci.org/sonaye/qaf)

<img src="qaf.svg" alt="Qaf Logo" width="96">

This work is the result of investigating a stores pattern based on React's new context API (`16.3.0`).

## Installation

`yarn add qaf`

## Usage

### The store

```js
// Store.js

import Qaf from 'qaf';

// this creates a store instant with context hooks
const Qaf = Qaf();
// you need to do this for every store you intend to have

// e.g. if you have two stores Foo and Bar
const FooQaf = Qaf(); // class Foo extends FooQaf
const BarQaf = Qaf(); // class Bar extends BarQaf

// every store is a typical React class pure component
export default class Store extends Qaf { /* .. */ }

// or invoke directly
export default class Store extends Qaf() {
  state = { counter: 0 };

  // actions are regular functions
  inc = () => this.setState(state => ({ counter: state.counter + 1 }));
  dec = () => this.setState(state => ({ counter: state.counter - 1 }));

  // NOTE: avoid having action names that already exist in the state
  // e.g. counter = () => ..

  // lifecycle methods
  componentDidMount() {
    // do your thing here, e.g. make an async call
  }

  // or write a custom logger
  componentDidUpdate() {
    if (process.env.NODE_ENV !== 'production') console.log('STORE_HAS_BEEN_UPDATED');
  }

  // computed values
  get sadCounter() {
    return `${this.state.counter} :(`;
  }

  // TODO: setState can return a promise
  async action() {
    await this.setState({ new: 'state' });
    alert('Peekaboo!');

    // or use as usual
    this.setState({ new: 'state' }, () => alert('Peekaboo!'));
  }

  // NOTE: dont't declare `render`, Qaf will take care of that for you
}
```

### The component

```js
// Counter.js

import React from 'react';

import { inject, Subscribe } from 'qaf';

// a typical react component
const Counter = ({ store }) => (
  <div>
    {/* state is available */}
    <div>{store.counter}</div>
    {/* notice it's not `store.state.counter` */}

    {/* actions are available */}
    <div>
      <button onClick={store.inc}>+</button>{' '}
      <button onClick={store.dec}>-</button>
    </div>
  </div>
);

// injecting the store by passing its key (as defined in `Provider`) as a string
export default inject('store', 'anotherStore', ..)(Counter);

// TODO: alternatively, you can use `<Subscribe />`
<Subscribe store anotherStore>
  {(store, anotherStore) => <div>{/* .. */}</div>}
</Subscribe>
```

### The app

```js
// App.js

import { Provider } from 'qaf';

import Store from './Store';
import Counter from './Counter';

const App = () => (
  <Provider store={Store} anotherStore={AnotherStore} ..>
    <Counter />
  </Provider>
);

export default App;
```

## Example

Available [here](/src/example).
