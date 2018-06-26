import React from 'react';

import Animated from 'react-animated-transitions'; // eslint-disable-line import/no-extraneous-dependencies

import { Provider } from '../../src';

import TodosStore from './stores/TodosStore';
import FilterStore from './stores/FilterStore';

import Add from './components/Add';
import Todos from './components/Todos';
import Controls from './components/Controls';

const TodosApp = () => (
  <Provider todosStore={TodosStore} filterStore={FilterStore}>
    <Animated>
      <div>
        <Add />
        <Todos />
        <Controls />
      </div>
    </Animated>
  </Provider>
);

export default TodosApp;
