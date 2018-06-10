# create-context-store

[![Build Status](https://travis-ci.org/sonaye/create-context-store.svg?branch=master)](https://travis-ci.org/sonaye/create-context-store)

_WORK IN PROGRESS_

## Usage

#### The store

```js
// CounterStore.js

import ContextStore from 'create-context-store';

// every store is a react component
export default class CounterStore extends ContextStore {
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

import CounterStore from '../stores/Counter';

import { inject } from 'create-context-store';

// a typical react component
const Counter = ({ counterStore }) => (
  <React.Fragment>
    {/* state is available */}
    <div>{counterStore.counter}</div>
    {/* it's not counterStore.state.counter, notice */}

    {/* actions are available */}
    <div>
      <button onClick={counterStore.inc}>+</button>{' '}
      <button onClick={counterStore.dec}>-</button>
    </div>
  </React.Fragment>
);

// injecting the store under under the `counterStore` prop
export default inject({ counterStore: CounterStore })(Counter);

// TODO: test if refs work properly or whether forwardRef is needed

// TODO: test when two components subscribe to the same store
// it should utilize a single store instance

// TODO: investigate displayName, should show something friendly
```

### The app

```js
// App.js

import CounterStore from './CounterStore';
import Counter from './Counter';

// BUG: it only provides the most inner store at the moment (why?)
// in other words: we are limited to a single store
// chances I'm doing something stupid somewhere, will fix this

const App = () => (
  <CounterStore>
    <Counter />
  </CounterStore>
);

export default App;

// TODO: ability to inject multiple store providers without nesting hell
const AppWithStores = inject(FooStore, BarStore)(App);

// NOTE: API method names are still not decided
```

## Example

Available [here](https://github.com/sonaye/create-context-store/blob/master/src/example).
