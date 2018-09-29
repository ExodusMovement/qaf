import React from 'react'

import Store from './store'

import Counter from './components/Counter'

const App = () => (
  <Store ref={Store.ref}>
    <Counter />
  </Store>
)

export default App
