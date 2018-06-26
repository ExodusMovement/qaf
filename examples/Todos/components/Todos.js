import React from 'react';

import Animated from 'react-animated-transitions'; // eslint-disable-line import/no-extraneous-dependencies

import { Subscriber } from '../../../src';

import Todo from './Todo';

const Todos = () => (
  <Subscriber todosStore filterStore>
    {(todosStore, filterStore) => {
      const { toggle, remove } = todosStore;
      const { filter } = filterStore;

      let { todos } = todosStore;
      todos = filter === 'all' ? todos : todosStore[filter]();

      return (
        <Animated items>
          {todos.map(todo => (
            <Animated key={todo.id} item>
              <Todo {...{ toggle, remove }} {...todo} />
            </Animated>
          ))}
        </Animated>
      );
    }}
  </Subscriber>
);

export default Todos;
