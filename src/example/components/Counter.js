import React from 'react';

import { withCounterStore } from '../stores/Counter';

class Counter extends React.PureComponent {
  render() {
    const { counterStore } = this.props;

    return (
      <React.Fragment>
        <div>{counterStore.counter}</div>

        <div>
          <button onClick={counterStore.inc}>+</button>{' '}
          <button onClick={counterStore.dec}>-</button>
        </div>
      </React.Fragment>
    );
  }
}

export default withCounterStore(Counter);
