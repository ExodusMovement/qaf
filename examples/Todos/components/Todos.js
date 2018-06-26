import React from 'react';

import { Subscriber } from '../../../src';

import Todo from './Todo';

const Todos = () => (
  <Subscriber todosStore filterStore>
    {(todosStore, filterStore) => {
      const { toggle, remove } = todosStore;
      const { filter } = filterStore;

      let { todos } = todosStore;
      todos = filter === 'all' ? todos : todosStore[filter]();

      return todos.map(todo => (
        <Todo key={todo.id} {...{ toggle, remove }} {...todo} />
      ));
    }}
  </Subscriber>
);

export default Todos;
