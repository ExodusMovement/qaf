# create-context-store

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

  // TODO: computed values
  get sadCounter() {
    return `${this.state.counter} :(`;
  }
}

// a store is an enhanced react component
// which statically provides a custom HOC you can use
// to decorate any component subscribed to the store
export const withCounterStore = CounterStore.inject('counterStore');
```

### The component

```js
// Counter.js

import React from 'react';

// our special HOC
import { withCounterStore } from './CounterStore';

// a typical react component
class Counter extends React.PureComponent {
  render() {
    // will have this prop available once injected
    const { counterStore } = this.props;

    return (
      <React.Fragment>
        {/* state is available */}
        <div>{counterStore.counter}</div>

        {/* actions are available */}
        <div>
          <button onClick={counterStore.inc}>+</button>{' '}
          <button onClick={counterStore.dec}>-</button>
        </div>
      </React.Fragment>
    );
  }
}

// injecting the store under under the `counterStore` prop
export default withCounterStore(Counter);

// TODO: ability to inject multiple stores without nesting hell
const FoobarWithStores = inject(withFooStore, withBarStore)(Foobar);
```

### The app

```js
// App.js

import CounterStore from './CounterStore';
import Counter from './Counter';

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

Available [here]().
