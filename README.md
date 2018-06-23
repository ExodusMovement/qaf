# Qaf

[![npm version](https://badge.fury.io/js/qaf.svg)](https://badge.fury.io/js/qaf) [![Build Status](https://travis-ci.org/sonaye/qaf.svg?branch=master)](https://travis-ci.org/sonaye/qaf)

<img src="qaf.svg" alt="Qaf logo" width="96">

## Quick facts

- Based on React's new context API (`16.3.0`).
- Every store is a React component.
- Actions, lifecycle methods and more.
- No dependencies, all just React goodness.
- ~2 KB in size, with ~80 lines of code.

## Install

`yarn add qaf`

## Usage

### The store

```js
import { createStore } from 'qaf';

// this creates a store instant with context hooks, you should do it uniquely for every store
const QafStore = createStore();

// every store is a typical React PureComponent
class Store extends QafStore {}

// or invoke directly
class Store extends createStore() {
  // components subscribing to the store will have access to everything in it
  state = {
    // state values
    counter: 0,

    // actions are regular functions
    inc: () => this.setState(state => ({ counter: state.counter + 1 })),
    dec: () => this.setState(state => ({ counter: state.counter - 1 }))
  };

  // lifecycle methods
  componentDidMount() {
    // e.g. make an async call
  }

  // NOTE: don't declare `render`, Qaf will take care of that for you
}
```

### The component

```js
import { Subscribe, subscribe } from 'qaf';

const Counter = ({ store }) => (
  <div>
    {/* state values are available */}
    <div>{store.counter}</div>

    {/* actions are available */}
    <button onClick={store.inc}>+</button>
    <button onClick={store.dec}>-</button>
  </div>
);

// inject stores by their keys as defined in `<Provider />` to have them as render props
<Subscribe store anotherStore ..>
  {(store, anotherStore, ..) => <Counter {...{ store, anotherStore, .. }} />}
</Subscribe>

// or though a higher order component, a thin wrapper around `<Subscribe />`
subscribe('store', 'anotherStore', ..)(Counter);
```

### The app

```js
import { Provider } from 'qaf';

// the prop name is the key of the store used earlier in `<Subscribe />`
<Provider store={Store} anotherStore={AnotherStore} ..>
  <Counter />
</Provider>
```

## Examples

Available [here](/examples).

[![Edit qaf](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/3mz6wrrv5?module=%2Fsrc%2FCounter.js)
