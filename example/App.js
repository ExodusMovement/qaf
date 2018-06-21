import React from 'react';

import { Provider } from '../src';

import stores from './stores';

import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import Filters from './components/Filters';

const App = () => (
  <Provider {...stores}>
    <AddTodo />
    <Todos />
    <Filters />
  </Provider>
);

export default App;
