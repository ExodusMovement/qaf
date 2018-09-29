import React from 'react'

import Store from '../store'

import { incCounter, decCounter, setCounter } from '../store/actions'

const Counter = () => (
  <Store.Subscribe>
    {store => (
      <div>
        <button onClick={incCounter}>+</button>
        <button onClick={() => setCounter(0)}>{store.counter}</button>
        <button onClick={decCounter}>-</button>
        <button onClick={() => console.log(Store.getState())}>!</button>
      </div>
    )}
  </Store.Subscribe>
)

export default Counter
