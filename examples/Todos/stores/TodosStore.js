import { createStore } from '../../../src';

export default class TodosStore extends createStore() {
  state = {
    todos: [
      { id: Date.now(), text: 'Hello World!', completed: true },
      { id: Date.now() + 1, text: 'Hello React!', completed: true },
      { id: Date.now() + 2, text: 'Hello Qaf!', completed: false }
    ],

    all: () => this.state.todos,

    active: () => this.state.todos.filter(todo => !todo.completed),

    completed: () => this.state.todos.filter(todo => todo.completed),

    add: text =>
      this.setState(state => ({
        todos: [...state.todos, { id: Date.now(), text, completed: false }]
      })),

    toggle: id =>
      this.setState(state => ({
        todos: state.todos.map(
          todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      })),

    remove: id =>
      this.setState(state => ({
        todos: state.todos.filter(todo => todo.id !== id)
      }))
  };
}
