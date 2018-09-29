import React from 'react'

import Store from '../store'

const Counter = () => (
  <Store.Subscribe>
    {store => (
      <div>
        <button onClick={() => Store.dispatch({ type: 'INC_COUNTER' })}>
          +
        </button>

        <button
          onClick={() => Store.dispatch({ type: 'SET_COUNTER', value: 0 })}>
          {store.counter}
        </button>

        <button onClick={() => Store.dispatch({ type: 'DEC_COUNTER' })}>
          -
        </button>

        <button onClick={() => console.log(Store.getState())}>!</button>
      </div>
    )}
  </Store.Subscribe>
)

export default Counter
