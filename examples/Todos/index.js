import React from 'react';

import { Provider } from '../../src';

import TodosStore from './stores/TodosStore';
import FilterStore from './stores/FilterStore';

import Add from './components/Add';
import Todos from './components/Todos';
import Controls from './components/Controls';

const App = () => (
  <Provider todosStore={TodosStore} filterStore={FilterStore}>
    <Add />
    <Todos />
    <Controls />
  </Provider>
);

export default App;
