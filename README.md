# create-context-store

[![Build Status](https://travis-ci.org/sonaye/create-context-store.svg?branch=master)](https://travis-ci.org/sonaye/create-context-store)

_WORK IN PROGRESS_

## Usage

#### The store

```js
// Store.js

import createContextStore from 'create-context-store';

// this creates a store instant with context hooks
const ContextStore = createContextStore();

// every store is a typical react component
export default class Store extends ContextStore { /* .. */ }

// or invoke directly
import ContextStore from 'create-context-store';

// notice it's not `extends ContextStore`, don't forget the parentheses
export default class Store extends ContextStore() {
  // store's state
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

import { inject } from 'create-context-store';

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

// injecting the store by passing its key as a string
export default inject('store', 'anotherStore', ..)(Counter);
```

### The app

```js
// App.js

import { Provider } from 'create-context-store';

import Store from './Store';
import Counter from './Counter';

export default () => (
  <Provider stores={{ store: Store }}>
    <Counter />
  </Provider>
);
```

## Example

Available [here](https://github.com/sonaye/create-context-store/blob/master/src/example).
