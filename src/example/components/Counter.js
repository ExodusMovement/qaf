/* eslint-disable react/prop-types */

import React from 'react';

import { inject } from '../../lib';

const Counter = ({ counterStore }) => (
  <React.Fragment>
    <div>{counterStore.counter}</div>

    <div>
      <button onClick={counterStore.inc}>+</button>{' '}
      <button onClick={counterStore.dec}>-</button>
    </div>
  </React.Fragment>
);

export default inject('counterStore')(Counter);
