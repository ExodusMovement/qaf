import React from 'react';

import { Provider } from '../../src';

import TodosStore from './stores/TodosStore';
import FilterStore from './stores/FilterStore';

import AddTodo from './components/AddTodo';
import TodosList from './components/TodosList';
import FiltersList from './components/FiltersList';

const App = () => (
  <Provider todosStore={TodosStore} filterStore={FilterStore}>
    <AddTodo />
    <TodosList />
    <FiltersList />
  </Provider>
);

export default App;
