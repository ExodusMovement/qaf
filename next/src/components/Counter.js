import React from 'react'

import { withSubscribe, dispatch, getState } from '../store'

const Counter = ({ store }) => (
  <div>
    <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    <button disabled>{store.counter}</button>
    <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    <button onClick={() => dispatch({ type: 'SET', value: 0 })}>0</button>
    <button onClick={() => console.log(getState())}>!</button>
  </div>
)

export default withSubscribe(Counter)
