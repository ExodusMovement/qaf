import React from 'react';

import { Subscribe } from '../../../src';

import Todo from './Todo';

const Todos = () => (
  <Subscribe todosStore filterStore>
    {(todosStore, filterStore) => {
      const { toggle, remove } = todosStore;
      const { filter } = filterStore;

      let { todos } = todosStore;
      todos = filter === 'all' ? todos : todosStore[filter]();

      return (
        <div>
          {todos.map(todo => (
            <Todo key={todo.id} {...{ toggle, remove }} {...todo} />
          ))}
        </div>
      );
    }}
  </Subscribe>
);

export default Todos;
