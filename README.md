# siaq

[![npm version](https://badge.fury.io/js/siaq.svg)](https://badge.fury.io/js/siaq) [![Build Status](https://travis-ci.org/sonaye/siaq.svg?branch=master)](https://travis-ci.org/sonaye/siaq)

This work is the result of investigating a stores pattern based on the new React's context API (16.3.0).

## Installation

`yarn add siaq`

## Usage

### The store

```js
// Store.js

import Siaq from 'siaq';

// this creates a store instant with context hooks
const SiaqStore = Siaq();

// every store is a typical react component
export default class Store extends SiaqStore { /* .. */ }

// or invoke directly
export default class Store extends Siaq() {
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

  // computed values
  get sadCounter() {
    return `${this.state.counter} :(`;
  }
}
```

### The component

```js
// Counter.js

import React from 'react';

import { inject } from 'siaq';

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
```

### The app

```js
// App.js

import { Provider } from 'siaq';

import Store from './Store';
import Counter from './Counter';

const App = () => (
  <Provider stores={{ store: Store }}>
    <Counter />
  </Provider>
);

export default App;
```

## Example

Available [here](https://github.com/sonaye/siaq/blob/master/src/example).
