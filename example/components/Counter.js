import React from 'react';

import { subscribe } from '../../src';

const Counter = ({ counterStore }) => (
  <div>
    <div>{counterStore.counter}</div>

    <div>
      <button onClick={counterStore.inc}>+</button>{' '}
      <button onClick={counterStore.dec}>-</button>
    </div>
  </div>
);

export default subscribe('counterStore')(Counter);
